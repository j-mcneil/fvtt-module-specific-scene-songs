import { BehaviorSubject, combineLatest, firstValueFrom } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const moduleKey = 'specific-scene-songs';
const songKey = 'song';
const isUpdatingScene$ = new BehaviorSubject(false);
const isDeletingSound$ = new BehaviorSubject(false);
const isDeletingPlaylist$ = new BehaviorSubject(false);
const isSaving$ = combineLatest([isUpdatingScene$, isDeletingSound$, isDeletingPlaylist$]).pipe(
  map(
    ([isUpdatingScene, isDeletingSound, isDeletingPlaylist]) => isUpdatingScene || isDeletingSound || isDeletingPlaylist
  )
);

Hooks.once('ready', function () {
  // register this hook on ready so that it is called after Playlists preUpdateScene hook
  Hooks.on('preUpdateScene', async (scene: Scene, data: any) => {
    await firstValueFrom(isSaving$.pipe(filter((isSaving) => !isSaving)));

    scene = scene instanceof Scene ? scene : game.scenes.get(data._id, false);
    const songId = scene.getFlag(moduleKey, songKey);
    const activeChange = data.active === true;
    const playlistChange = data.hasOwnProperty('playlist');
    const songChange = data.hasOwnProperty('flags') && data.flags[moduleKey] && data.flags[moduleKey][songKey];
    const newPlaylist = playlistChange ? game.playlists.get(data.playlist, false) : scene.playlist;

    if (newPlaylist && songId && (activeChange || (scene.data.active && (playlistChange || songChange)))) {
      const song = (newPlaylist.data.sounds as { name: string; playing: boolean; _id: any }[]).find(
        ({ _id }) => songId === _id
      );
      if (song && !song.playing) {
        newPlaylist.stopAll();
        newPlaylist.updateEmbeddedEntity('PlaylistSound', { _id: song._id, playing: true } as Data, {});
      }
    }
  });
});

Hooks.on('renderSceneConfig', (app: SceneConfig & { object: Scene }, html: JQuery /*, data: any*/) => {
  const label = game.i18n.localize('specific-scene-songs.song-label');
  const notes = game.i18n.localize('specific-scene-songs.song-notes');
  const $playlist = html.find('.form-group select[name="playlist"]').first();
  //let initialSongId = app.object.data[`specific-scene-songs__song`];
  const initialSongId =
    app.object.data.flags[moduleKey] &&
    app.object.data.flags[moduleKey][songKey] &&
    app.object.getFlag(moduleKey, songKey);

  const playlistChanged = (playlistId?: string, selectedSongId?: string) => {
    $playlist.closest('.form-group').siblings('.form-group.specific-scene-songs__song').remove();

    if (playlistId === undefined) return;

    $playlist.closest('.form-group').after(`
      <div class="form-group specific-scene-songs__song">
        <label>${label}</label>
        <select name="specific-scene-songs__song" data-dtype="String">
            <option value=""${selectedSongId ? '' : ' selected'}></option>
            ${game.playlists.entities
              .find((p) => p.id === playlistId)
              ?.data.sounds.map(
                (sound: any) =>
                  `<option value="${sound._id}" ${selectedSongId === sound._id ? 'selected' : ''}>${
                    sound.name
                  }</option>`
              )
              .join('\n')}
        </select>
        <p class="notes">${notes}</p>
      </div>
    `);
  };

  $playlist.get(0).addEventListener('change', () => {
    const playlistId = ($playlist.get(0) as HTMLSelectElement).value;
    playlistChanged(playlistId);
  });

  const playlistId = $playlist.find('option[selected]').first()?.attr('value');
  playlistChanged(playlistId, initialSongId);
});

Hooks.on('closeSceneConfig', async (app: SceneConfig & { object: Scene }, html: JQuery /*, data: any*/) => {
  const $song = html.find('.form-group.specific-scene-songs__song select[name="specific-scene-songs__song"]');
  const songId = ($song.get(0) as HTMLSelectElement).value;

  isUpdatingScene$.next(true);

  if (songId) await app.object.setFlag(moduleKey, songKey, songId);
  else await app.object.unsetFlag(moduleKey, songKey);

  isUpdatingScene$.next(false);
});

Hooks.on('deletePlaylistSound', async (
  playlist: Playlist,
  sound: { _id: string } /*, options: any, userId: string*/
) => {
  isDeletingSound$.next(true);

  await Promise.all(
    game.scenes.entries
      .filter(
        (scene: Scene) =>
          scene.data.flags[moduleKey] &&
          scene.data.flags[moduleKey][songKey] &&
          scene.getFlag(moduleKey, songKey) === sound._id
      )
      .map((scene: Scene) => scene.unsetFlag(moduleKey, songKey))
  );

  isDeletingSound$.next(false);
});

Hooks.on('deletePlaylist', async (playlists: Playlists, playlist: Playlist /*, options: any, userId: string*/) => {
  isDeletingPlaylist$.next(true);

  await Promise.all(
    game.scenes.entries
      .filter((scene: Scene) => scene.data.playlist === playlist.data._id)
      .map((scene: Scene) => scene.unsetFlag(moduleKey, songKey))
  );

  isDeletingPlaylist$.next(false);
});
