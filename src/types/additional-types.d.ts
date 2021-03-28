declare const game: Game & {
  messages: Messages;
  scenes: Scenes & EntityCollection;
  actions: Actors;
  items: Items;
  journal: Journal;
  macros: Macros;
  playlists: Playlists & { entities: Playlist[] } & Partial<EntityCollection>;
  combats: CombatEncounters;
  tables: RollTables;
  folders: Folders;
};
