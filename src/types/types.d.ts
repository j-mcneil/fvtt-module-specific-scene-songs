// this file is generated from the foundry.js jsdoc annotations, and contains many mistakes/bad typings

/**
 * A single point, expressed as an object {x, y}
 */
declare type Point = PIXI.Point | any;

/**
 * A single point, expressed as an array [x,y]
 */
declare type PointArray = number[];

/**
 * A Ray intersection point
 * @property [wall] - Wall
 */
declare type RayIntersection = {
    wall?: any;
} | null;

/**
 * A standard rectangle interface.
 */
declare type Rectangle = PIXI.Rectangle | any;

/**
 * The expected structure for a Data record
 * @property [_id] - string
 */
declare type Data = {
    _id?: any;
};

/**
 * An object of optional keys and values which configure the behavior of a function
 */
declare type Options = any;

/**
 * Define the allowed ActiveEffect application modes
 */
declare const ACTIVE_EFFECT_MODES: any;

/**
 * Define the string name used for the base entity type when specific sub-types are not defined by the system
 */
declare const BASE_ENTITY_TYPE = "base";

/**
 * Valid Chat Message types
 */
declare const CHAT_MESSAGE_TYPES: any;

/**
 * The allowed Entity types which may exist within a Compendium pack
 * This is a subset of ENTITY_TYPES
 */
declare const COMPENDIUM_ENTITY_TYPES: any[];

/**
 * Define the set of languages which have built-in support in the core software
 */
declare const CORE_SUPPORTED_LANGUAGES: string[];

/**
 * The default artwork used for Token images if none is provided
 */
declare const DEFAULT_TOKEN = "icons/svg/mystery-man.svg";

/**
 * The default artwork used for Note placeables if none is provided
 */
declare const DEFAULT_NOTE_ICON = "icons/svg/book.svg";

/**
 * The supported dice roll visibility modes
 */
declare const DICE_ROLL_MODES: any;

/**
 * The allowed Drawing types which may be saved
 */
declare const DRAWING_TYPES: any;

/**
 * The allowed fill types which a Drawing object may display
 * NONE: The drawing is not filled
 * SOLID: The drawing is filled with a solid color
 * PATTERN: The drawing is filled with a tiled image pattern
 */
declare const DRAWING_FILL_TYPES: any;

/**
 * The default configuration values used for Drawing objects
 */
declare const DRAWING_DEFAULT_VALUES: any;

/**
 * Define the allowed Entity class types
 */
declare const ENTITY_TYPES: any[];

/**
 * Define the allowed Entity types which may be dynamically linked in chat
 */
declare const ENTITY_LINK_TYPES: any[];

/**
 * Define the allowed permission levels for a non-user Entity.
 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
 */
declare const ENTITY_PERMISSIONS: any;

/**
 * EULA version number
 */
declare const EULA_VERSION = "0.6.1";

/**
 * Define the allowed Entity types which Folders may contain
 */
declare const FOLDER_ENTITY_TYPES: any[];

/**
 * The maximum allowed level of depth for Folder nesting
 */
declare const FOLDER_MAX_DEPTH = 3;

/**
 * The minimum allowed grid size which is supported by the software
 */
declare const GRID_MIN_SIZE = 50;

/**
 * The allowed Grid types which are supported by the software
 */
declare const GRID_TYPES: any;

/**
 * Enumerate the source types which can be used for an AmbientLight placeable object
 */
declare const SOURCE_TYPES: any;

/**
 * An Array of valid MacroAction scope values
 */
declare const MACRO_SCOPES: string[];

/**
 * The allowed playback modes for an audio Playlist
 * DISABLED: The playlist does not play on its own, only individual Sound tracks played as a soundboard
 * SEQUENTIAL: The playlist plays sounds one at a time in sequence
 * SHUFFLE: The playlist plays sounds one at a time in randomized order
 * SIMULTANEOUS: The playlist plays all contained sounds at the same time
 */
declare const PLAYLIST_MODES: any;

/**
 * Encode the reasons why a package may be available or unavailable for use
 */
declare const PACKAGE_AVAILABILITY_CODES: any;

/**
 * A safe password string which can be displayed
 */
declare const PASSWORD_SAFE_STRING: any;

/**
 * The allowed software update channels
 */
declare const SOFTWARE_UPDATE_CHANNELS: any;

/**
 * The default sorting density for manually ordering child objects within a parent
 */
declare const SORT_INTEGER_DENSITY = 100000;

/**
 * The allowed types of a TableResult document
 */
declare const TABLE_RESULT_TYPES: any;

/**
 * Define the valid anchor locations for a Tooltip displayed on a Placeable Object
 */
declare const TEXT_ANCHOR_POINTS: any;

/**
 * Describe the various thresholds of token control upon which to show certain pieces of information
 * NONE - no information is displayed
 * CONTROL - displayed when the token is controlled
 * OWNER HOVER - displayed when hovered by a GM or a user who owns the actor
 * HOVER - displayed when hovered by any user
 * OWNER - always displayed for a GM or for a user who owns the actor
 * ALWAYS - always displayed for everyone
 */
declare const TOKEN_DISPLAY_MODES: any;

/**
 * The allowed Token disposition types
 * HOSTILE - Displayed as an enemy with a red border
 * NEUTRAL - Displayed as neutral with a yellow border
 * FRIENDLY - Displayed as an ally with a cyan border
 */
declare const TOKEN_DISPOSITIONS: any;

/**
 * Define the allowed User permission levels.
 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
 */
declare const USER_ROLES: any;

/**
 * Invert the User Role mapping to recover role names from a role integer
 */
declare const USER_ROLE_NAMES: any;

/**
 * A list of MIME types which are treated as uploaded "media", which are allowed to overwrite existing files.
 * Any non-media MIME type is not allowed to replace an existing file.
 */
declare const MEDIA_MIME_TYPES: string[];

/**
 * Define the named actions which users or user roles can be permitted to do.
 * Each key of this Object denotes an action for which permission may be granted (true) or withheld (false)
 */
declare const USER_PERMISSIONS: any;

/**
 * The allowed directions of effect that a Wall can have
 * BOTH: The wall collides from both directions
 * LEFT: The wall collides only when a ray strikes its left side
 * RIGHT: The wall collides only when a ray strikes its right side
 */
declare const WALL_DIRECTIONS: any;

/**
 * The allowed door types which a Wall may contain
 * NONE: The wall does not contain a door
 * DOOR: The wall contains a regular door
 * SECRET: The wall contains a secret door
 */
declare const WALL_DOOR_TYPES: any;

/**
 * The allowed door states which may describe a Wall that contains a door
 * CLOSED: The door is closed
 * OPEN: The door is open
 * LOCKED: The door is closed and locked
 */
declare const WALL_DOOR_STATES: any;

/**
 * The types of movement collision which a Wall may impose
 * NONE: Movement does not collide with this wall
 * NORMAL: Movement collides with this wall
 */
declare const WALL_MOVEMENT_TYPES: any;

/**
 * The types of sensory collision which a Wall may impose
 * NONE: Senses do not collide with this wall
 * NORMAL: Senses collide with this wall
 * LIMITED: Senses collide with the second intersection, bypassing the first
 */
declare const WALL_SENSE_TYPES: any;

/**
 * The allowed set of HTML template extensions
 */
declare const HTML_FILE_EXTENSIONS: string[];

/**
 * The supported file extensions for image-type files
 */
declare const IMAGE_FILE_EXTENSIONS: any[];

/**
 * The supported file extensions for video-type files
 */
declare const VIDEO_FILE_EXTENSIONS: any[];

/**
 * The supported file extensions for audio-type files
 */
declare const AUDIO_FILE_EXTENSIONS: any[];

/**
 * Bound a number between some minimum and maximum value, inclusively
 * @param num - The current value
 * @param min - The minimum allowed value
 * @param max - The maximum allowed value
 * @returns The clamped number
 */
declare function clampNumber(num: number, min: number, max: number): number;

/**
 * Round a floating point number to a certain number of decimal places
 * @param number - A floating point number
 * @param places - An integer number of decimal places
 */
declare function roundDecimals(number: number, places: number): void;

/**
 * Transform an angle in radians to a number in degrees
 * @param angle - An angle in radians
 * @returns An angle in degrees
 */
declare function toDegrees(angle: number): number;

/**
 * Transform an angle in degrees to be bounded within the domain [0, 360]
 * @param degrees - An angle in degrees
 * @returns The same angle on the range [0, 360]
 */
declare function normalizeDegrees(degrees: number): number;

/**
 * Transform an angle in degrees to an angle in radians
 * @param angle - An angle in degrees
 * @returns An angle in radians
 */
declare function toRadians(angle: number): number;

/**
 * Transform an angle in radians to be bounded within the domain [-PI, PI]
 * @param radians - An angle in degrees
 * @returns The same angle on the range [-PI, PI]
 */
declare function normalizeRadians(radians: number): number;

/**
 * Obtain references to the parent classes of a certain class.
 * @param cls - An ES6 Class definition
 * @returns An array of parent Classes which the provided class extends
 */
declare function getParentClasses(cls: (...params: any[]) => any): ((...params: any[]) => void)[];

/**
 * A cheap data duplication trick, surprisingly relatively performant
 * @param original - Some sort of data
 */
declare function duplicate(original: any): void;

/**
 * Learn the named type of a token - extending the functionality of typeof to recognize some core Object types
 * @param token - Some passed token
 * @returns The named type of the token
 */
declare function getType(token: any): string;

/**
 * Filter the contents of some source object using the structure of a template object.
 * Only keys which exist in the template are preserved in the source object.
 * @example
 * const source = {foo: {number: 1, name: "Tim", topping: "olives"}, bar: "baz"};
 * const template = {foo: {number: 0, name: "Mit", style: "bold"}, other: 72};
 * filterObject(source, template); // {foo: {number: 1, name: "Tim"}};
 * filterObject(source, template, {templateValues: true}); // {foo: {number: 0, name: "Mit"}};
 * @param source - An object which contains the data you wish to filter
 * @param template - An object which contains the structure you wish to preserve
 * @param keepSpecial - Whether to keep special tokens like deletion keys
 * @param templateValues - Instead of keeping values from the source, instead draw values from the template
 */
declare function filterObject(source: any, template: any, keepSpecial: boolean, templateValues: boolean): void;

/**
 * Flatten a possibly multi-dimensional object to a one-dimensional one by converting all nested keys to dot notation
 * @param obj - The object to flatten
 * @param _d - Recursion depth, to prevent overflow
 * @returns A flattened object
 */
declare function flattenObject(obj: any, _d: number): any;

/**
 * Expand a flattened object to be a standard multi-dimensional nested Object by converting all dot-notation keys to
 * inner objects.
 * @param obj - The object to expand
 * @param _d - Recursion depth, to prevent overflow
 * @returns An expanded object
 */
declare function expandObject(obj: any, _d: number): any;

/**
 * A simple function to test whether or not an Object is empty
 * @param obj - The object to test
 * @returns Is the object empty?
 */
declare function isObjectEmpty(obj: any): boolean;

/**
 * Invert an object by assigning its values as keys and its keys as values.
 * @param obj - The original object to invert
 * @returns The inverted object with keys and values swapped
 */
declare function invertObject(obj: any): any;

/**
 * Update a source object by replacing its keys and values with those from a target object.
 * @example
 * <caption>Control how new keys and values are added</caption>
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: false}); // {k1: "v1"}
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: true});  // {k1: "v1", k2: "v2"}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: false}); // {k1: {i1: "v1"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: true}); // {k1: {i1: "v1", i2: "v2"}}
 * @example
 * <caption>Control how existing data is overwritten</caption>
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: true}); // {k1: "v2"}
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: false}); // {k1: "v1"}
 * @example
 * <caption>Control whether merges are performed recursively</caption>
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: false}); // {k1: {i1: "v2"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: true}); // {k1: {i1: "v1", i2: "v2"}}
 * @example
 * <caption>Deleting an existing object key</caption>
 * mergeObject({k1: "v1", k2: "v2"}, {"-=k1": null});   // {k2: "v2"}
 * @param original - The initial object which should be updated with values from the target
 * @param other - A new object whose values should replace those in the source
 * @param [insertKeys] - Control whether to insert new top-level objects into the resulting structure
 *                                    which do not previously exist in the original object.
 * @param [insertValues] - Control whether to insert new nested values into child objects in the resulting
 *                                    structure which did not previously exist in the original object.
 * @param [overwrite] - Control whether to replace existing values in the source, or only merge values
 *                                    which do not already exist in the original object.
 * @param [recursive] - Control whether to merge inner-objects recursively (if true), or whether to
 *                                    simply replace inner objects with a provided new value.
 * @param [inplace] - Control whether to apply updates to the original object in-place (if true),
 *                                    otherwise the original object is duplicated and the copy is merged.
 * @param [enforceTypes] - Control whether strict type checking requires that the value of a key in the
 *                                    other object must match the data type in the original data to be merged.
 * @param [_d] - A privately used parameter to track recursion depth.
 * @returns The original source object including updated, inserted, or overwritten records.
 */
declare function mergeObject(original: any, other: any, insertKeys?: boolean, insertValues?: boolean, overwrite?: boolean, recursive?: boolean, inplace?: boolean, enforceTypes?: boolean, _d?: number): any;

/**
 * Deeply difference an object against some other, returning the update keys and values
 * @param original - An object comparing data against which to compare.
 * @param other - An object containing potentially different data.
 * @param [inner] - Only recognize differences in other for keys which also exist in original.
 * @returns An object of the data in other which differs from that in original.
 */
declare function diffObject(original: any, other: any, inner?: boolean): any;

/**
 * A helper function which tests whether an object has a property or nested property given a string key.
 * The string key supports the notation a.b.c which would return true if object[a][b][c] exists
 * @param object - The object to traverse
 * @param key - An object property with notation a.b.c
 * @returns An indicator for whether the property exists
 */
declare function hasProperty(object: any, key: string): boolean;

/**
 * A helper function which searches through an object to retrieve a value by a string key.
 * The string key supports the notation a.b.c which would return object[a][b][c]
 * @param object - The object to traverse
 * @param key - An object property with notation a.b.c
 * @returns The value of the found property
 */
declare function getProperty(object: any, key: string): any;

/**
 * A helper function which searches through an object to assign a value using a string key
 * This string key supports the notation a.b.c which would target object[a][b][c]
 * @param object - The object to update
 * @param key - The string key
 * @param value - The value to be assigned
 * @returns A flag for whether or not the object was updated
 */
declare function setProperty(object: any, key: string, value: any): boolean;

/**
 * Encode a url-like string by replacing any characters which need encoding
 * @param path - A fully-qualified URL or url component (like a relative path)
 * @returns An encoded URL string
 */
declare function encodeURL(path: string): string;

/**
 * Express a timestamp as a relative string
 */
declare function timeSince(timeStamp: Date): string;

/**
 * Wrap a callback in a debounced timeout.
 * Delay execution of the callback function until the function has not been called for delay milliseconds
 * @param callback - A function to execute once the debounced threshold has been passed
 * @param delay - An amount of time in milliseconds to delay
 */
declare function debounce(callback: (...params: any[]) => any, delay: number): (...params: any[]) => any;

/**
 * Converts an RGB color value to HSV. Conversion formula adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 1] and returns h, s, and v in the set [0, 1].
 * @param r - The red color value
 * @param g - The green color value
 * @param b - The blue color value
 * @returns The HSV representation
 */
declare function rgbToHsv(r: number, g: number, b: number): number[];

/**
 * Converts an HSV color value to RGB. Conversion formula adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and returns r, g, and b in the set [0, 1].
 * @param h - The hue
 * @param s - The saturation
 * @param v - The value
 * @returns The RGB representation
 */
declare function hsvToRgb(h: number, s: number, v: number): number[];

/**
 * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
 * @param rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
 * @returns Number in hexadecimal.
 */
declare function rgbToHex(rgb: Number[]): number;

/**
 * Convert a hex color code to an RGB array
 * @param hex - A hex color number
 * @returns An array of [r,g,b] colors normalized on the range of [0,1]
 */
declare function hexToRGB(hex: number): any[];

/**
 * Convert a hex color code to an RGBA color string which can be used for CSS styling
 * @param hex - A hex color number
 * @param alpha - A level of transparency
 * @returns An rgba style string
 */
declare function hexToRGBAString(hex: number, alpha?: number): string;

/**
 * Convert a string color to a hex integer
 * @param color - The string color
 * @returns The hexidecimal color code
 */
declare function colorStringToHex(color: string): number;

/**
 * Return whether or not a target version (v1) is more advanced than some other reference version (v0).
 * Supports either numeric or string version comparison with version parts separated by periods.
 * @param v1 - The target version
 * @param v0 - The reference version
 * @returns Is v1 a more advanced version than v0?
 */
declare function isNewerVersion(v1: number | string, v0: number | string): boolean;

/**
 * Generate a random ID
 * Generate random number and convert it to base 36 and remove the '0.' at the beginning
 * As long as the string is not long enough, generate more random data into it
 * Use substring in case we generated a string with a length higher than the requested length
 * @param length - The length of the random ID to generate
 * @returns Return a string containing random letters and numbers
 */
declare function randomID(length?: number): string;

/**
 * Get the URL route for a certain path which includes a path prefix, if one is set
 * @param path - The Foundry VTT URL path
 * @param [prefix] - A path prefix to apply
 * @returns The absolute URL path
 */
declare function getRoute(path: string, prefix?: string | null): string;

/**
 * A helper class to provide common functionality for working with HTML5 audio and Howler instances
 * A singleton instance of this class is available as ``game.audio``
 *
 * Audio playback in Foundry VTT is managed by Howler.js (https://howlerjs.com/). Several methods and
 * attributes in this API return :class:`Howl` instances. See the Howler documentation for details
 * and example usage of the Howl API.
 */
declare class AudioHelper {
    /**
     * The set of Howl instances which have been created for different audio paths
     */
    sounds: any;
    /**
     * A user gesture must be registered before audio can be played.
     * This Array contains the Howl instances which are requested for playback prior to a gesture.
     * Once a gesture is observed, we begin playing all elements of this Array.
     */
    pending: Howl[];
    /**
     * A flag for whether video playback is currently locked by awaiting a user gesture
     */
    locked: boolean;
    /**
     * Audio Context singleton used for analysing audio levels of each stream
     * Only created if necessary to listen to audio streams.
     */
    _audioContext: AudioContext;
    /**
     * Map of all streams that we listen to for determining the decibel levels.
     * Used for analyzing audio levels of each stream.
     * Format of the object stored is :
     * {id:
     *   {
     *     stream: MediaStream,
     *     analyser: AudioAnalyser,
     *     interval: Number,
     *     callback: Function
     *   }
     * }
     */
    private _analyserStreams: any;
    /**
     * Interval ID as returned by setInterval for analysing the volume of streams
     * When set to 0, means no timer is set.
     */
    private _analyserInterval: number;
    /**
     * Fast Fourrier Transform Array.
     * Used for analysing the decibel level of streams. The array is allocated only once
     * then filled by the analyser repeatedly. We only generate it when we need to listen to
     * a stream's level, so we initialize it to null.
     */
    private _fftArray: Float32Array;
    /**
     * Register client-level settings for global volume overrides
     */
    static registerSettings(): void;
    /**
     * Create a Howl instance for a given audio source URL
     */
    create(src: any, preload: any, autoplay: any): Howl;
    /**
     * Test whether a source file has a supported audio extension type
     * @param src - A requested audio source path
     * @returns Does the filename end with a valid audio extension?
     */
    static hasAudioExtension(src: string): boolean;
    /**
     * Play a single audio effect by it's source path and Howl ID
     */
    play(src: string, id: number): void;
    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed
     */
    awaitFirstGesture(): void;
    /**
     * Handle the first observed user gesture
     * @param event - The mouse-move event which enables playback
     */
    _onFirstGesture(event: Event): void;
    /**
     * Open socket listeners which transact ChatMessage data
     */
    private static socketListeners(): void;
    /**
     * Play a one-off sound effect which is not part of a Playlist
     * @example
     * // Play the sound of a locked door for all players
     * AudioHelper.play({src: "sounds/lock.wav", volume: 0.8, autoplay: true, loop: false}, true);
     * @param data - An object configuring the audio data to play
     * @param data.src - The audio source file path, either a public URL or a local path relative to the public directory
     * @param data.volume - The volume level at which to play the audio, between 0 and 1.
     * @param data.autoplay - Begin playback of the audio effect immediately once it is loaded.
     * @param data.loop - Loop the audio effect and continue playing it until it is manually stopped.
     * @param [push] - Push the audio sound effect to other connected clients?
     * @returns A Howl instance which controls audio playback.
     */
    static play(data: {
        src: string;
        volume: number;
        autoplay: boolean;
        loop: boolean;
    }, push?: boolean): Howl;
    /**
     * Create a Howl object and load it to be ready for later playback
     * @param data - The audio data to preload
     */
    static preload(data: any): void;
    /**
     * Returns the volume value based on a range input volume control's position.
     * This is using an exponential approximation of the logarithmic nature of audio level perception
     * @param value - Value between [0, 1] of the range input
     * @param order - [optional] the exponent of the curve (default: 2)
     */
    static inputToVolume(value: number | string, order?: number): number;
    /**
     * Counterpart to inputToVolume()
     * Returns the input range value based on a volume
     * @param volume - Value between [0, 1] of the volume level
     * @param order - [optional] the exponent of the curve (default: 2)
     */
    static volumeToInput(volume: number, order?: number): number;
    /**
     * Returns a singleton AudioContext if one can be created.
     * An audio context may not be available due to limited resources or browser compatibility
     * in which case null will be returned
     * @returns A singleton AudioContext or null if one is not available
     */
    getAudioContext(): AudioContext;
    /**
     * Registers a stream for periodic reports of audio levels.
     * Once added, the callback will be called with the maximum decibel level of
     * the audio tracks in that stream since the last time the event was fired.
     * The interval needs to be a multiple of AudioHelper.levelAnalyserNativeInterval which defaults at 50ms
     * @param id - An id to assign to this report. Can be used to stop reports
     * @param stream - The MediaStream instance to report activity on.
     * @param callback - The callback function to call with the decibel level. `callback(dbLevel)`
     * @param interval - (optional) The interval at which to produce reports.
     * @param smoothing - (optional) The smoothingTimeConstant to set on the audio analyser. Refer to AudioAnalyser API docs.
     * @returns Returns whether or not listening to the stream was successful
     */
    startLevelReports(id: string, stream: MediaStream, callback: (...params: any[]) => any, interval?: number, smoothing?: number): boolean;
    /**
     * Stop sending audio level reports
     * This stops listening to a stream and stops sending reports.
     * If we aren't listening to any more streams, cancel the global analyser timer.
     * @param id - The id of the reports that passed to startLevelReports.
     */
    stopLevelReports(id: string): void;
    /**
     * Ensures the global analyser timer is started
     *
     * We create only one timer that runs every 50ms and only create it if needed, this is meant to optimize things
     * and avoid having multiple timers running if we want to analyse multiple streams at the same time.
     * I don't know if it actually helps much with performance but it's expected that limiting the number of timers
     * running at the same time is good practice and with JS itself, there's a potential for a timer congestion
     * phenomenon if too many are created.
     */
    private _ensureAnalyserTimer(): void;
    /**
     * Cancel the global analyser timer
     * If the timer is running and has become unnecessary, stops it.
     */
    private _cancelAnalyserTimer(): void;
    /**
     * Capture audio level for all speakers and emit a webrtcVolumes custom event with all the volume levels
     * detected since the last emit.
     * The event's detail is in the form of {userId: decibelLevel}
     */
    private _emitVolumes(): void;
    /**
     * The Native interval for the AudioHelper to analyse audio levels from streams
     * Any interval passed to startLevelReports() would need to be a multiple of this value.
     * Defaults to 50ms.
     */
    static levelAnalyserNativeInterval: number;
}

/**
 * A reusable storage concept which blends the functionality of an Array with the efficient key-based lookup of a Map.
 * This concept is reused throughout Foundry VTT where a collection of uniquely identified elements is required.
 */
declare class Collection extends Map {
    /**
     * Return an Array of all the entry values in the Collection
     */
    entries: any;
    /**
     * Find an entry in the Map using an functional condition.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let a = c.find(entry => entry === "A");
     * @param condition - The functional condition to test
     * @returns The value, if found, otherwise null
     */
    find(condition: (...params: any[]) => any): V | null;
    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     * @param condition - The functional condition to test
     * @returns An Array of matched values
     */
    filter(condition: (...params: any[]) => any): V[];
    /**
     * Get an element from the Collection by its key.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     * @param key - The key of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false
     * @returns The retrieved entry value, if the key exists, otherwise null
     */
    get(key: string, strict: boolean): V | null;
    /**
     * Get an entry from the Collection by name.
     * Use of this method assumes that the objects stored in the collection have a "name" attribute.
     * @param name - The name of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns The retrieved Entity, if one was found, otherwise null;
     */
    getName(name: string, strict: boolean): Entity | null;
    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param transformer - The transformation function to apply to each entry value
     * @returns An Array of transformed values
     */
    map(transformer: (...params: any[]) => any): V[];
    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     * @param evaluator - A function which mutates the accumulator each iteration
     * @param initial - An initial value which accumulates with each iteration
     * @returns The accumulated result
     */
    reduce(evaluator: (...params: any[]) => any, initial: any): any;
}

/**
 * A configuration of font families which are initialized when the page loads
 */
declare const FONTS: any;

/**
 * Load font, and perform a callback once the font has been rendered
 */
declare function loadFont(fontName: any, callback: any): void;

/**
 * A simple event framework used throughout Foundry Virtual Tabletop.
 * When key actions or events occur, a "hook" is defined where user-defined callback functions can execute.
 * This class manages the registration and execution of hooked callback functions.
 */
declare class Hooks {
    /**
     * Register a callback handler which should be triggered when a hook is triggered.
     * @param hook - The unique name of the hooked event
     * @param fn - The callback function which should be triggered when the hook event occurs
     * @returns An ID number of the hooked function which can be used to turn off the hook later
     */
    static on(hook: string, fn: (...params: any[]) => any): number;
    /**
     * Register a callback handler for an event which is only triggered once the first time the event occurs.
     * After a "once" hook is triggered the hook is automatically removed.
     * @param hook - The unique name of the hooked event
     * @param fn - The callback function which should be triggered when the hook event occurs
     * @returns An ID number of the hooked function which can be used to turn off the hook later
     */
    static once(hook: string, fn: (...params: any[]) => any): number;
    /**
     * Unregister a callback handler for a particular hook event
     * @param hook - The unique name of the hooked event
     * @param fn - The function, or ID number for the function, that should be turned off
     */
    static off(hook: string, fn: ((...params: any[]) => any) | number): void;
    /**
     * Call all hook listeners in the order in which they were registered
     * Hooks called this way can not be handled by returning false and will always trigger every hook callback.
     * @param hook - The hook being triggered
     * @param args - Arguments passed to the hook callback functions
     */
    static callAll(hook: string, ...args: any[]): void;
    /**
     * Call hook listeners in the order in which they were registered.
     * Continue calling hooks until either all have been called or one returns `false`.
     *
     * Hook listeners which return `false` denote that the original event has been adequately handled and no further
     * hooks should be called.
     * @param hook - The hook being triggered
     * @param args - Arguments passed to the hook callback functions
     */
    static call(hook: string, ...args: any[]): void;
    /**
     * Call a hooked function using provided arguments and perhaps unregister it.
     */
    private static _call(): void;
}

/**
 * A helper class to provide common functionality for working with Image objects
 */
declare class ImageHelper {
    /**
     * Create thumbnail preview for a provided image path.
     * @param src - The URL or display object of the texture to render to a thumbnail
     * @param options - Additional named options passed to the compositeCanvasTexture function
     * @returns The parsed and converted thumbnail data
     */
    static createThumbnail(src: string | PIXI.DisplayObject, options: any): Promise<object>;
    /**
     * Composite a canvas object by rendering it to a single texture
     * @param object - The object to render to a texture
     * @param [width] - The desired width of the output texture
     * @param [height] - The desired height of the output texture
     * @param [tx] - A horizontal translation to apply to the object
     * @param [ty] - A vertical translation to apply to the object
     * @param [center] - Center the texture in the rendered frame?
     * @returns The composite Texture object
     */
    static compositeCanvasTexture(object: PIXI.DisplayObject, width?: number, height?: number, tx?: number, ty?: number, center?: boolean): PIXI.Texture;
    /**
     * Extract a texture to a base64 PNG string
     * @param texture - The texture object to extract
     * @returns A base64 png string of the texture
     */
    static textureToImage(texture: PIXI.Texture): string;
}

/**
 * A set of helpers and management functions for dealing with user input from keyboard events.
 * {@link https://keycode.info/}
 */
declare class KeyboardManager {
    /**
     * The set of key codes which are currently depressed (down)
     */
    _downKeys: Set;
    /**
     * The set of key codes which have been already handled per workflow
     */
    _handled: Set;
    /**
     * A mapping of movement keys which are pending
     */
    private _moveKeys: Set;
    /**
     * Reset tracking for which keys are in the down and released states
     */
    private _reset(): void;
    /**
     * Return whether the key code is currently in the DOWN state
     * @param code - The key code to test
     */
    isDown(code: string): void;
    /**
     * A helper method to test whether, given an Event, the CTRL (or CMD) keys are pressed
     */
    isCtrl(event: any): boolean;
    /**
     * Get a standardized keyboard code for a given event
     * @param event - The originating keypress event
     * @returns The standardized string code to use
     */
    getKey(event: KeyboardEvent): string;
    /**
     * The key codes which represent a possible movement key
     */
    moveKeys: any;
    /**
     * The key codes which represent a digit key
     */
    digitKeys: any;
    /**
     * Return the key codes used for zooming the canvas
     */
    zoomKeys: any;
    /**
     * Test whether an input currently has focus
     */
    hasFocus: any;
    /**
     * Handle a key press into the down position
     * @param event - The originating keyboard event
     */
    private _onKeyDown(event: KeyboardEvent): void;
    /**
     * Handle a key release into the up position
     * @param event - The originating keyboard event
     */
    private _onKeyUp(event: KeyboardEvent): void;
    /**
     * Delegate tracked key codes by dispatching to their various handlers
     * @param event - The keydown or keyup event
     * @param key - The key being depressed
     * @param up - A flag for whether the key is down or up
     */
    private _handleKeys(event: KeyboardEvent, key: string, up: boolean): void;
    /**
     * Input events do not fire with isComposing = false at the end of a composition event in Chrome
     * See: https://github.com/w3c/uievents/issues/202
     */
    _onCompositionEnd(event: CompositionEvent): void;
    /**
     * Master mouse-wheel event keyboard handler
     */
    private _onWheel(): void;
    /**
     * Handle TAB keypress events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onTab(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle ESC keypress events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onEscape(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle SPACE keypress events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onSpace(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle ALT keypress events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onAlt(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle movement keypress events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onMovement(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle keyboard movement once a small delay has elapsed to allow for multiple simultaneous key-presses.
     */
    private _handleMovement(): void;
    /**
     * Handle panning the canvas using CTRL + directional keys
     */
    _handleCanvasPan(): void;
    /**
     * Handle number key presses
     * @param event - The original digit key press
     * @param up - Is it a keyup?
     * @param modifiers - What modifiers affect the keypress?
     */
    private _onDigit(event: Event, up: boolean, modifiers: any): void;
    /**
     * Handle "A" keypress events (CTRL only) to select all objects
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onKeyA(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle "C" keypress events to copy data to clipboard
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onKeyC(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle "V" keypress events to paste data from clipboard
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onKeyV(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle Z Keypress Events to generally undo previous actions
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onKeyZ(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle presses to keyboard zoom keys
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onKeyZoom(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Handle DELETE Keypress Events
     * @param event - The originating keyboard event
     * @param up - Is the key being released?
     * @param modifiers - The identified modifiers attached to this keypress
     */
    private _onDelete(event: KeyboardEvent, up: boolean, modifiers: any): void;
    /**
     * Specify a rate limit for mouse wheel to gate repeated scrolling.
     * This is especially important for continuous scrolling mice which emit hundreds of events per second.
     * This designates a minimum number of milliseconds which must pass before another wheel event is handled
     */
    static MOUSE_WHEEL_RATE_LIMIT: number;
    /**
     * Enumerate the "digit keys"
     */
    static DIGIT_KEYS: string[];
    /**
     * Map keys used for movement
     */
    static MOVEMENT_KEYS: any;
    /**
     * Map keys used for canvas zooming
     */
    static ZOOM_KEYS: any;
}

/**
 * An abstract interface for managing defined game settings or settings menus for different packages.
 * Each setting is a string key/value pair belonging to a certain package and a certain store scope.
 *
 * When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
 * Game object as as game.settings.
 */
declare class ClientSettings {
    /**
     * A object of registered game settings for this scope
     */
    settings: Map;
    /**
     * Registered settings menus which trigger secondary applications
     */
    menus: Map;
    /**
     * The storage interfaces used for persisting settings
     * Each storage interface shares the same API as window.localStorage
     */
    storage: any;
    /**
     * Return a singleton instance of the Game Settings Configuration app
     */
    sheet: any;
    /**
     * Register a new game setting under this setting scope
     * @example
     * // Register a client setting
     * game.settings.register("myModule", "myClientSetting", {
     *   name: "Register a Module Setting with Choices",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "client",     // This specifies a client-stored setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   type: String,
     *   choices: {           // If choices are defined, the resulting setting will be a select menu
     *     "a": "Option A",
     *     "b": "Option B"
     *   },
     *   default: "a",        // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * @example
     * // Register a world setting
     * game.settings.register("myModule", "myWorldSetting", {
     *   name: "Register a Module Setting with a Range slider",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "world",      // This specifies a world-level setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   type: Number,
     *   range: {             // If range is specified, the resulting setting will be a range slider
     *     min: 0,
     *     max: 100,
     *     step: 10
     *   }
     *   default: 50,         // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * @param module - The namespace under which the setting is registered
     * @param key - The key name for the setting under the namespace module
     * @param data - Configuration for setting data
     */
    register(module: string, key: string, data: any): void;
    /**
     * Register a new sub-settings menu
     * @example
     * // Define a settings submenu which handles advanced configuration needs
     * game.settings.registerMenu("myModule", "mySettingsMenu", {
     *   name: "My Settings Submenu",
     *   label: "Settings Menu Label",      // The text label used in the button
     *   hint: "A description of what will occur in the submenu dialog.",
     *   icon: "fas fa-bars",               // A Font Awesome icon used in the submenu button
     *   type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created
     *   restricted: true                   // Restrict this submenu to gamemaster only?
     * });
     * @param module - The namespace under which the menu is registered
     * @param key - The key name for the setting under the namespace module
     * @param data - Configuration for setting data
     */
    registerMenu(module: string, key: string, data: any): void;
    /**
     * Get the value of a game setting for a certain module and setting key
     * @example
     * // Retrieve the current setting value
     * game.settings.get("myModule", "myClientSetting");
     * @param module - The module namespace under which the setting is registered
     * @param key - The setting key to retrieve
     */
    get(module: string, key: string): void;
    /**
     * Set the value of a game setting for a certain module and setting key
     * @example
     * // Update the current value of a setting
     * game.settings.set("myModule", "myClientSetting", "b");
     * @param module - The module namespace under which the setting is registered
     * @param key - The setting key to retrieve
     * @param value - The data to assign to the setting key
     */
    set(module: string, key: string, value: any): void;
    /**
     * Locally update a setting given a provided key and value
     */
    _update(setting: any, key: string, value: any): void;
    /**
     * Handle changes to a Setting document to apply them to the world setting storage
     */
    static socketListeners(): void;
}

/**
 * A simple interface for World settings storage which imitates the API provided by localStorage
 */
declare class WorldSettingsStorage {
}

/**
 * A library of package management commands which are used by various interfaces around the software.
 */
declare class SetupConfiguration {
    /**
     * A reference to the setup URL used under the current route prefix, if any
     */
    static setupURL: any;
    /**
     * Check with the server whether a package of a certain type is able to be installed or updated.
     * @param type - The package type to check
     * @param name - The package name to check
     * @param manifest - The manifest URL to check
     * @returns The return manifest
     */
    static checkPackage(type: string, name: string, manifest: string): Promise<object>;
    /**
     * Get an Array of available packages of a given type which may be installed
     */
    static getPackages(type: string): Promise<object[]>;
    /**
     * Install a Package
     * @param type - The type of package being installed, in ["module", "system", "world"]
     * @param name - The canonical package name
     * @param manifest - The package manifest URL
     * @returns A Promise which resolves to the installed package manifest
     */
    static installPackage(type: string, name: string, manifest: string): Promise<object>;
    /**
     * Install a set of dependency modules which are required by an installed package
     * @param pkg - The package which was installed that requested dependencies
     */
    static installDependencies(pkg: any): Promise<void>;
    /**
     * Uninstall a single Package by name and type.
     * @param type - The type of package being installed, in ["module", "system", "world"]
     * @param name - The canonical package name
     * @returns A Promise which resolves to the uninstalled package manifest
     */
    static uninstallPackage(type: string, name: string): Promise<object>;
    /**
     * Return the named scopes which can exist for packages.
     * Scopes are returned in the prioritization order that their content is loaded.
     * @returns An array of string package scopes
     */
    static getPackageScopes(): string[];
    /**
     * A helper method to submit a POST request to setup configuration with a certain body, returning the JSON response
     * @param body - The request body to submit
     * @returns The response body
     */
    private static post(body: any): Promise<object>;
}

/**
 * A collection of functions related to sorting objects within a parent container.
 */
declare class SortingHelpers {
    /**
     * Given a source object to sort, a target to sort relative to, and an Array of siblings in the container:
     * Determine the updated sort keys for the source object, or all siblings if a reindex is required.
     * Return an Array of updates to perform, it is up to the caller to dispatch these updates.
     * Each update is structured as:
     * {
     *   target: object,
     *   update: {sortKey: sortValue}
     * }
     * @param source - The source object being sorted
     * @param target - The target object relative which to sort
     * @param siblings - The sorted Array of siblings which share the same sorted container
     * @param sortKey - The name of the data property within the source object which defines the sort key
     * @param sortBefore - Whether to sort before the target (if true) or after (if false)
     * @returns An Array of updates for the caller of the helper function to perform
     */
    static performIntegerSort(source: any, target: any, siblings: object[], sortKey: string, sortBefore: boolean): object[];
    /**
     * Given an ordered Array of siblings and a target position, return the [min,max] indices to sort before the target
     */
    private static _sortBefore(): void;
    /**
     * Given an ordered Array of siblings and a target position, return the [min,max] indices to sort after the target
     */
    private static _sortAfter(): void;
}

/**
 * A singleton class {@link game#time} which keeps the official Server and World time stamps.
 * Uses a basic implementation of https://www.geeksforgeeks.org/cristians-algorithm/ for synchronization.
 */
declare class GameTime {
    /**
     * The most recently synchronized timestamps retrieved from the server.
     */
    _time: any;
    /**
     * The average one-way latency across the most recent 5 trips
     */
    _dt: number;
    /**
     * The most recent five synchronization durations
     */
    _dts: number[];
    /**
     * The current server time based on the last synchronization point and the approximated one-way latency.
     */
    serverTime: any;
    /**
     * The current World time based on the last recorded value of the core.time setting
     */
    worldTime: any;
    /**
     * Advance the game time by a certain number of seconds
     * @param seconds - The number of seconds to advance (or rewind if negative) by
     * @returns The new game time
     */
    advance(seconds: number): Promise<number>;
    /**
     * Synchronize the local client game time with the official time kept by the server
     */
    sync(): Promise<GameTime>;
    /**
     * Handle follow-up actions when the official World time is changed
     * @param worldTime - The new canonical World time.
     */
    onUpdateWorldTime(worldTime: number): void;
    /**
     * The amount of time to delay before re-syncing the official server time.
     */
    static SYNC_INTERVAL_MS: number;
}

/**
 * Export data content to be saved to a local file
 * @param data - Data content converted to a string
 * @param type - The type of
 * @param filename - The filename of the resulting download
 */
declare function saveDataToFile(data: string, type: string, filename: string): void;

/**
 * Read text data from a user provided File object
 * @param file - A File object
 * @returns A Promise which resolves to the loaded text data
 */
declare function readTextFromFile(file: File): Promise<String>;

/**
 * Retrieve an Entity or Embedded Entity by its Universally Unique Identifier (uuid).
 * @param uuid - The uuid of the Entity or Embedded Entity to retrieve
 */
declare function fromUuid(uuid: string): Promise<Entity | object | null>;

/**
 * A helper class to provide common functionality for working with HTML5 video objects
 * A singleton instance of this class is available as ``game.video``
 */
declare class VideoHelper {
    /**
     * A collection of HTML5 video objects which are currently active within the FVTT page
     */
    videos: any;
    /**
     * A user gesture must be registered before video playback can begin.
     * This Set records the video elements which await such a gesture.
     */
    pending: Set;
    /**
     * A mapping of base64 video thumbnail images
     */
    thumbs: Map<string, string>;
    /**
     * A flag for whether video playback is currently locked by awaiting a user gesture
     */
    locked: boolean;
    /**
     * Play a single video source
     * If playback is not yet enabled, add the video to the pending queue
     * @param video - The VIDEO element to play
     */
    play(video: HTMLElement): void;
    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed
     * A user interaction must involve a mouse click or keypress.
     * Listen for any of these events, and handle the first observed gesture.
     */
    awaitFirstGesture(): void;
    /**
     * Handle the first observed user gesture
     * We need a slight delay because unfortunately Chrome is stupid and doesn't always acknowledge the gesture fast enough.
     * @param event - The mouse-move event which enables playback
     */
    _onFirstGesture(event: Event): void;
    /**
     * Create and cache a static thumbnail to use for the video.
     * The thumbnail is cached using the video file path or URL.
     * @param src - The source video URL
     * @param options - Thumbnail creation options, including width and height
     * @returns The created and cached base64 thumbnail image
     */
    createThumbnail(src: string, options: any): Promise<string>;
}

declare namespace Application {
    /**
     * Assign the default options configuration which is used by this Application class. The options and values defined
     * in this object are merged with any provided option values which are passed to the constructor upon initialization.
     * Application subclasses may include additional options which are specific to their usage.
     */
    var defaultOptions: any;
    /**
     * Return the inheritance chain for this Application class up to (and including) it's base Application class.
     */
    function _getInheritanceChain(): Application[];
}

/**
 * The standard application window that is rendered for a large variety of UI elements in Foundry VTT.
 * @param options - Configuration options which control how the application is rendered.
 *                                              Application subclasses may add additional supported options, but the
 *                                              following configurations are supported for all Applications. The values
 *                                              passed to the constructor are combined with the defaultOptions defined
 *                                              at the class level.
 * @param options.baseApplication - A named "base application" which generates an additional hook
 * @param options.width - The default pixel width for the rendered HTML
 * @param options.height - The default pixel height for the rendered HTML
 * @param options.top - The default offset-top position for the rendered HTML
 * @param options.left - The default offset-left position for the rendered HTML
 * @param options.popOut - Whether to display the application as a pop-out container
 * @param options.minimizable - Whether the rendered application can be minimized (popOut only)
 * @param options.resizable - Whether the rendered application can be drag-resized (popOut only)
 * @param options.id - The default CSS id to assign to the rendered HTML
 * @param options.classes - An array of CSS string classes to apply to the rendered HTML
 * @param options.title - A default window title string (popOut only)
 * @param options.template - The default HTML template path to render for this Application
 * @param options.scrollY - A list of unique CSS selectors which target containers that should
 *                                              have their vertical scroll positions preserved during a re-render.
 *
 * Hooks:
 *   renderApplication
 *   closeApplication
 *   getApplicationHeaderButtons
 */
declare interface Application {
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    _render(force: boolean, options: any): Promise<void>;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    _renderOuter(): Promise<HTMLElement>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    _renderInner(data: any): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    _injectHTML(html: jQuery): void;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    _onResize(event: Event): void;
}

/**
 * Specify the set of config buttons which should appear in the Application header.
 * Buttons should be returned as an Array of objects.
 * The header buttons which are added to the application can be modified by the getApplicationHeaderButtons hook.
 */
declare type ApplicationHeaderButton = any;

declare namespace FormApplication {
    /**
     * Assign the default options which are supported by the entity edit sheet.
     * In addition to the default options object supported by the parent Application class, the Form Application
     * supports the following additional keys and values:
     */
    var defaultOptions: any;
    function processForm(): void;
}

/**
 * An abstract pattern for defining an Application responsible for updating some object using an HTML form
 *
 * A few critical assumptions:
 * 1) This application is used to only edit one object at a time
 * 2) The template used contains one (and only one) HTML form as it's outer-most element
 * 3) This abstract layer has no knowledge of what is being updated, so the implementation must define _updateObject
 * @param object - Some object or entity which is the target to be updated.
 * @param [options] - Additional options which modify the rendering of the sheet.
 */
declare interface FormApplication extends Application {
    /**
     * The object target which we are using this form to modify
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     */
    editors: {
        [key: string]: object;
    };
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * If the form is not editable, disable its input fields
     */
    _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    _getSubmitData(updateData: any): any;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    _onChangeInput(event: Event): void;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     */
    _onChangeColorPicker(): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    _onChangeRange(event: Event): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * Activate a named TinyMCE text editor
     * @param name - The named data field which the editor modifies.
     * @param options - TinyMCE initialization options passed to TextEditor.create
     * @param initialContent - Initial text content for the editor area.
     */
    activateEditor(name: string, options: any, initialContent: string): void;
    /**
     * Handle saving the content of a specific editor by name
     * @param name - The named editor to save
     * @param [remove] - Remove the editor after saving its content
     */
    saveEditor(name: string, remove?: boolean): Promise<void>;
    /**
     * Activate a TinyMCE editor instance present within the form
     */
    _activateEditor(div: HTMLElement): void;
    /**
     * Activate a FilePicker instance present within the form
     */
    _activateFilePicker(button: HTMLElement): void;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param [options] - Options passed to the _onSubmit event handler
     * @returns Return a self-reference for convenient method chaining
     */
    submit(options?: any): FormApplication;
    _createEditor(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    _onResize(event: Event): void;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    _render(force: boolean, options: any): Promise<void>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    _renderInner(data: any): Promise<jQuery>;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
}

declare function validateForm(): void;

declare namespace BaseEntitySheet {
    var defaultOptions: any;
}

/**
 * Extend the FormApplication pattern to incorporate specific logic for viewing or editing Entity instances.
 * See the FormApplication documentation for more complete description of this interface.
 * @param object - An Entity which should be managed by this form sheet.
 * @param [options] - Optional configuration parameters for how the form behaves.
 */
declare interface BaseEntitySheet extends FormApplication {
    /**
     * A convenience accessor for the object property, which in the case of a BaseEntitySheet is an Entity instance.
     */
    entity: Entity;
    _getHeaderButtons(): void;
    /**
     * The object target which we are using this form to modify
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     */
    editors: {
        [key: string]: object;
    };
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * If the form is not editable, disable its input fields
     */
    _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    _getSubmitData(updateData: any): any;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    _onChangeInput(event: Event): void;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     */
    _onChangeColorPicker(): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    _onChangeRange(event: Event): void;
    /**
     * Activate a named TinyMCE text editor
     * @param name - The named data field which the editor modifies.
     * @param options - TinyMCE initialization options passed to TextEditor.create
     * @param initialContent - Initial text content for the editor area.
     */
    activateEditor(name: string, options: any, initialContent: string): void;
    /**
     * Handle saving the content of a specific editor by name
     * @param name - The named editor to save
     * @param [remove] - Remove the editor after saving its content
     */
    saveEditor(name: string, remove?: boolean): Promise<void>;
    /**
     * Activate a TinyMCE editor instance present within the form
     */
    _activateEditor(div: HTMLElement): void;
    /**
     * Activate a FilePicker instance present within the form
     */
    _activateFilePicker(button: HTMLElement): void;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param [options] - Options passed to the _onSubmit event handler
     * @returns Return a self-reference for convenient method chaining
     */
    submit(options?: any): FormApplication;
    _createEditor(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    _onResize(event: Event): void;
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
}

/**
 * Support mousewheel control for range type input elements
 * @param event - A Mouse Wheel scroll event
 */
declare function _handleMouseWheelInputChange(event: WheelEvent): void;

/**
 * A helper class which assists with localization and string translation
 */
declare class Localization {
    /**
     * The target language for localization
     */
    lang: string;
    /**
     * The package authorized to provide default language configurations
     */
    defaultModule: string;
    /**
     * The translation dictionary for the target language
     */
    translations: any;
    /**
     * Fallback translations if the target keys are not found
     */
    _fallback: any;
    /**
     * Initialize the Localization module
     * Discover available language translations and apply the current language setting
     * @returns A Promise which resolves once languages are initialized
     */
    initialize(): Promise<void>;
    /**
     * Set a language as the active translation source for the session
     * @param lang - A language string in CONFIG.supportedLanguages
     * @returns A Promise which resolves once the translations for the requested language are ready
     */
    setLanguage(lang: string): Promise<void>;
    /**
     * Discover the available supported languages from the set of packages which are provided
     */
    private _discoverSupportedLanguages(): void;
    /**
     * Prepare the dictionary of translation strings for the requested language
     * @param lang - The language for which to load translations
     * @returns The retrieved translations object
     */
    private _getTranslations(lang: string): Promise<object>;
    /**
     * Load a single translation file and return its contents as processed JSON
     * @param src - The translation file path to load
     */
    private _loadTranslationFile(src: string): void;
    /**
     * Return whether a certain string has a known translation defined.
     * @param stringId - The string key being translated
     * @param [fallback = true] - Allow fallback translations to count?
     */
    has(stringId: string, fallback?: boolean): boolean;
    /**
     * Localize a string by drawing a translation from the available translations dictionary, if available
     * If a translation is not available, the original string is returned
     * @example
     * {
     *   "MYMODULE.MYSTRING": "Hello, this is my module!"
     * }
     * game.i18n.localize("MYMODULE.MYSTRING"); // Hello, this is my module!
     * @param stringId - The string ID to translate
     * @returns The translated string
     */
    localize(stringId: string): string;
    /**
     * Localize a string including variable formatting for input arguments.
     * Provide a string ID which defines the localized template.
     * Variables can be included in the template enclosed in braces and will be substituted using those named keys.
     * @example
     * {
     *   "MYMODULE.GREETING": "Hello {name}, this is my module!"
     * }
     * game.i18n.format("MYMODULE.GREETING", {name: "Andrew"}); // Hello Andrew, this is my module!
     * @param stringId - The string ID to translate
     * @param data - Provided input data
     * @returns The translated and formatted string
     */
    format(stringId: string, data: any): string;
}

/**
 * Get a template from the server by fetch request and caching the retrieved result
 * @param path - The web-accessible HTML template URL
 * @returns A Promise which resolves to the compiled Handlebars template
 */
declare function getTemplate(path: string): Promise<(...params: any[]) => void>;

/**
 * Load and cache a set of templates by providing an Array of paths
 * @param paths - An array of template file paths to load
 */
declare function loadTemplates(paths: string[]): Promise<string[]>;

/**
 * Get and render a template using provided data and handle the returned HTML
 * Support asynchronous file template file loading with a client-side caching layer
 *
 * Allow resolution of prototype methods and properties since this all occurs within the safety of the client.
 * @param path - The file path to the target HTML template
 * @param data - A data object against which to compile the template
 * @returns Returns the rendered HTML
 */
declare function renderTemplate(path: string, data: any): Promise<HTMLElement>;

/**
 * A collection of Handlebars template helpers which can be used within HTML templates.
 */
declare class HandlebarsHelpers {
    /**
     * For checkboxes, if the value of the checkbox is true, add the "checked" property, otherwise add nothing.
     */
    static checked(): string;
    /**
     * Construct an editor element for rich text editing with TinyMCE
     */
    static editor(): Handlebars.SafeString;
    /**
     * Render a file-picker button linked to an <input> field
     */
    static filePicker(): Handlebars.SafeString | string;
    /**
     * Translate a provided string key by using the loaded dictionary of localization strings.
     * @example
     * <caption>Translate a provided localization string, optionally including formatting parameters</caption>
     * <label>{{localize "ACTOR.Create"}}</label> <!-- "Create Actor" -->
     * <label>{{localize "CHAT.InvalidCommand", command=foo}}</label> <!-- "foo is not a valid chat message command." -->
     */
    static localize(): string;
    /**
     * A string formatting helper to display a number with a certain fixed number of decimals and an explicit sign.
     */
    static numberFormat(): string;
    /**
     * A helper to create a set of radio checkbox input elements in a named set.
     * The provided keys are the possible radio values while the provided values are human readable labels.
     * @example
     * <caption>The provided input data</caption>
     * let groupName = "importantChoice";
     * let choices = {a: "Choice A", b: "Choice B"};
     * let chosen = "a";
     * @example
     * <caption>The template HTML structure</caption>
     * <div class="form-group">
     *   <label>Radio Group Label</label>
     *   <div class="form-fields">
     *     {{radioBoxes groupName choices checked=chosen localize=true}}
     *   </div>
     * </div>
     * @param name - The radio checkbox field name
     * @param choices - A mapping of radio checkbox values to human readable labels
     * @param options.checked - Which key is currently checked?
     * @param options.localize - Pass each label through string localization?
     */
    static radioBoxes(name: string, choices: any): Handlebars.SafeString;
    /**
     * A helper to assign an <option> within a <select> block as selected based on its value
     * Escape the string as handlebars would, then escape any regexp characters in it
     */
    static select(): Handlebars.SafeString;
    /**
     * A helper to create a set of <option> elements in a <select> block based on a provided dictionary.
     * The provided keys are the option values while the provided values are human readable labels.
     * This helper supports both single-select as well as multi-select input fields.
     * @example
     * <caption>The provided input data</caption>
     * let choices = {a: "Choice A", b: "Choice B"};
     * let value = "a";
     * @example
     * <caption>The template HTML structure</caption>
     * <select name="importantChoice">
     *   {{selectOptions choices selected=value localize=true}}
     * </select>
     * @param choices - A mapping of radio checkbox values to human readable labels
     * @param options.selected - Which key or array of keys that are currently selected?
     * @param options.localize - Pass each label through string localization?
     */
    static selectOptions(choices: any): Handlebars.SafeString;
}

/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
 * The singleton instance of the Game class is available as the global variable game.
 * @param view - The named view which is active for this game instance.
 * @param data - An object of all the World data vended by the server when the client first connects
 * @param sessionId - The ID of the currently active client session retrieved from the browser cookie
 * @param socket - The open web-socket which should be used to transact game-state data
 */
declare class Game {
    constructor(view: string, data: any, sessionId: string, socket: Socket);
    /**
     * The named view which is currently active.
     * Game views include: join, setup, players, license, game, stream
     */
    view: string;
    /**
     * The object of world data passed from the server
     */
    data: any;
    /**
     * Localization support
     */
    i18n: Localization;
    /**
     * The Keyboard Manager
     */
    keyboard: KeyboardManager;
    /**
     * A mapping of installed modules
     */
    modules: Map;
    /**
     * The user role permissions setting
     */
    permissions: any;
    /**
     * The client session id which is currently active
     */
    sessionId: string;
    /**
     * Client settings which are used to configure application behavior
     */
    settings: ClientSettings;
    /**
     * A reference to the open Socket.io connection
     */
    socket: WebSocket | null;
    /**
     * A singleton GameTime instance which manages the progression of time within the game world.
     */
    time: GameTime;
    /**
     * The id of the active World user, if any
     */
    userId: string;
    /**
     * A singleton instance of the Audio Helper class
     */
    audio: AudioHelper;
    /**
     * A singleton instance of the Video Helper class
     */
    video: VideoHelper;
    /**
     * Whether the Game is running in debug mode
     */
    debug: boolean;
    /**
     * A flag for whether texture assets for the game canvas are currently loading
     */
    loading: boolean;
    /**
     * A flag for whether the Game has successfully reached the "ready" hook
     */
    ready: boolean;
    /**
     * Fetch World data and return a Game instance
     * @returns A Promise which resolves to the created Game instance
     */
    static create(): Promise<Game>;
    /**
     * Establish a live connection to the game server through the socket.io URL
     * @param sessionId - The client session ID with which to establish the connection
     * @returns A promise which resolves to the connected socket, if successful
     */
    static connect(sessionId: string): Promise<object>;
    /**
     * Retrieve the cookies which are attached to the client session
     * @returns The session cookies
     */
    static getCookies(): any;
    /**
     * Get the current World status upon initial connection.
     */
    static getWorldStatus(): Promise<boolean>;
    /**
     * Request World data from server and return it
     */
    static getWorldData(): Promise<object>;
    /**
     * Request setup data from server and return it
     */
    static getSetupData(): Promise<object>;
    /**
     * Initialize the Game for the current window location
     */
    initialize(): void;
    /**
     * Display certain usability error messages which are likely to result in the player having a bad experience.
     */
    private _displayUsabilityErrors(): void;
    /**
     * Shut down the currently active Game. Requires GameMaster user permission.
     * @returns A Promise which resolves to the response object from the server
     */
    shutDown(): Promise<object>;
    /**
     * Fully set up the game state, initializing Entities, UI applications, and the Canvas
     */
    setupGame(): Promise<void>;
    /**
     * Initialize game state data by creating EntityCollection instances for every Entity types
     */
    initializeEntities(): void;
    /**
     * Initialize the Compendium packs which are present within this Game
     * Create a Collection which maps each Compendium pack using it's collection ID
     */
    initializePacks(): Collection<string, Compendium>;
    /**
     * Initialize the WebRTC implementation
     */
    initializeRTC(): void;
    /**
     * Initialize core UI elements
     */
    initializeUI(): void;
    /**
     * Initialize the game Canvas
     */
    initializeCanvas(): void;
    /**
     * Ensure that necessary fonts have loaded and are ready for use
     * Enforce a maximum timeout in milliseconds.
     * Proceed with rendering after that point even if fonts are not yet available.
     * @param ms - The timeout to delay
     */
    private _checkFontsReady(ms: number): Promise<void>;
    /**
     * Initialize Keyboard and Mouse controls
     */
    initializeKeyboard(): void;
    /**
     * Register core game settings
     */
    registerSettings(): void;
    /**
     * Is the current session user authenticated as an application administrator?
     */
    isAdmin: boolean;
    /**
     * The currently connected User entity, or null if Users is not yet initialized
     */
    user: User | null;
    /**
     * Metadata regarding the current game World
     */
    world: any;
    /**
     * Metadata regarding the game System which powers this World
     */
    system: any;
    /**
     * A convenience accessor for the currently viewed Combat encounter
     */
    combat: Combat;
    /**
     * A state variable which tracks whether or not the game session is currently paused
     */
    paused: boolean;
    /**
     * A convenient reference to the currently active canvas tool
     */
    activeTool: string;
    /**
     * Toggle the pause state of the game
     * Trigger the `pauseGame` Hook when the paused state changes
     * @param pause - The new pause state
     * @param [push = false] - Push the pause state change to other connected clients?
     */
    togglePause(pause: boolean, push?: boolean): void;
    /**
     * Log out of the game session by returning to the Join screen
     */
    logOut(): void;
    /**
     * Open socket listeners which transact game state data
     */
    openSockets(): void;
    /**
     * General game-state socket listeners and event handlers
     */
    static socketListeners(socket: any): void;
    /**
     * Activate Event Listeners which apply to every Game View
     */
    activateListeners(): void;
    /**
     * On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.
     */
    private _onClickHyperlink(event: MouseEvent): void;
    /**
     * Prevent starting a drag and drop workflow on elements within the document unless the element has the draggable
     * attribute explicitly defined or overrides the dragstart handler.
     * @param event - The initiating drag start event
     */
    private _onPreventDragstart(event: DragEvent): void;
    /**
     * Disallow dragging of external content onto anything but a file input element
     * @param event - The requested drag event
     */
    private _onPreventDragover(event: DragEvent): void;
    /**
     * Disallow dropping of external content onto anything but a file input element
     * @param event - The requested drag event
     */
    private _onPreventDrop(event: DragEvent): void;
    /**
     * On a left-click event, remove any currently displayed inline roll tooltip
     * @param event - The originating left-click event
     */
    private _onLeftClick(event: MouseEvent): void;
    /**
     * Handle resizing of the game window
     * Reposition any active UI windows
     */
    private _onWindowResize(): void;
    /**
     * Handle window unload operations to clean up any data which may be pending a final save
     * @param event - The window unload event which is about to occur
     */
    private _onWindowBeforeUnload(event: Event): void;
    /**
     * Handle cases where the browser window loses focus to reset detection of currently pressed keys
     * @param event - The originating window.blur event
     */
    private _onWindowBlur(event: Event): void;
    /**
     * Initialization steps for the primary Game view
     */
    private _initializeGameView(): void;
    /**
     * Initialization steps for the game setup view
     */
    private _initializeLicenseView(): void;
    /**
     * Initialization steps for the game setup view
     */
    private _initializeSetupView(): void;
    /**
     * Initialization steps for the Stream helper view
     */
    private _initializeStreamView(): void;
    /**
     * Initialize the Player Management View
     */
    private _initializePlayersView(): void;
    /**
     * Initialization steps specifically for the game setup view
     * This view is unique because a Game object does not exist for a non-authenticated player
     */
    private _initializeJoinView(): void;
}

/**
 * This class provides an interface and API for conducting dice rolls.
 * The basic structure for a dice roll is a string formula and an object of data against which to parse it.
 * @example
 * // Attack with advantage!
 * let r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});
 *
 * // The parsed terms of the roll formula
 * console.log(r.terms);    // [Die, +, 2, +, 4]
 *
 * // Execute the roll
 * r.evaluate();
 *
 * // The resulting equation after it was rolled
 * console.log(r.result);   // 16 + 2 + 4
 *
 * // The total resulting from the roll
 * console.log(r.total);    // 22
 * @param formula - The string formula to parse
 * @param data - The data object against which to parse attributes within the formula
 */
declare class Roll {
    constructor(formula: string, data: any);
    /**
     * The original provided data
     */
    data: any;
    /**
     * An array of inner terms which were rolled parenthetically
     */
    _dice: DiceTerm[];
    /**
     * The evaluated results of the Roll
     */
    results: (number | string)[];
    /**
     * The identified terms of the Roll
     */
    terms: (Roll | DicePool | DiceTerm | number | string)[];
    /**
     * The original formula before evaluation
     */
    _formula: string;
    /**
     * An internal flag for whether the Roll object has been rolled
     */
    private _rolled: boolean;
    /**
     * Cache the evaluated total to avoid re-evaluating it
     */
    private _total: number | null;
    /**
     * A factory method which constructs a Roll instance using the default configured Roll class.
     * @param args - Arguments passed to the Roll instance constructor
     * @returns The constructed Roll instance
     */
    static create(...args: any[][]): Roll;
    /**
     * Replace referenced data attributes in the roll formula with values from the provided data.
     * Data references in the formula use the @attr syntax and would reference the corresponding attr key.
     * @param formula - The original formula within which to replace
     * @param data - The data object which provides replacements
     * @param [missing] - The value that should be assigned to any unmatched keys.
     *                                  If null, the unmatched key is left as-is.
     * @param [warn] - Display a warning notification when encountering an un-matched key.
     */
    static replaceFormulaData(formula: string, data: any, missing?: string, warn?: boolean): void;
    /**
     * Return an Array of the individual DiceTerm instances contained within this Roll.
     */
    dice: any;
    /**
     * Return a standardized representation for the displayed formula associated with this Roll.
     */
    formula: any;
    /**
     * The resulting arithmetic expression after rolls have been evaluated
     */
    result: any;
    /**
     * Return the total result of the Roll expression if it has been evaluated, otherwise null
     */
    total: number | null;
    /**
     * Alter the Roll expression by adding or multiplying the number of dice which are rolled
     * @param multiply - A factor to multiply. Dice are multiplied before any additions.
     * @param add - A number of dice to add. Dice are added after multiplication.
     * @param [multiplyNumeric] - Apply multiplication factor to numeric scalar terms
     * @returns The altered Roll expression
     */
    alter(multiply: number, add: number, multiplyNumeric?: boolean): Roll;
    /**
     * Execute the Roll, replacing dice and evaluating the total result
     * @example
     * let r = new Roll("2d6 + 4 + 1d4");
     * r.evaluate();
     * console.log(r.result); // 5 + 4 + 2
     * console.log(r.total);  // 11
     * @param [minimize] - Produce the minimum possible result from the Roll instead of a random result.
     * @param [maximize] - Produce the maximum possible result from the Roll instead of a random result.
     * @returns The rolled Roll object, able to be chained into other methods
     */
    evaluate(minimize?: boolean, maximize?: boolean): Roll;
    /**
     * Clone the Roll instance, returning a new Roll instance that has not yet been evaluated
     */
    clone(): Roll;
    /**
     * Evaluate and return the Roll expression.
     * This function simply calls the evaluate() method but is maintained for backwards compatibility.
     * @returns The Roll instance, containing evaluated results and the rolled total.
     */
    roll(): Roll;
    /**
     * Create a new Roll object using the original provided formula and data
     * Each roll is immutable, so this method returns a new Roll instance using the same data.
     * @returns A new Roll object, rolled using the same formula and data
     */
    reroll(): Roll;
    /**
     * Simulate a roll and evaluate the distribution of returned results
     * @param formula - The Roll expression to simulate
     * @param n - The number of simulations
     * @returns The rolled totals
     */
    static simulate(formula: string, n?: number): number[];
    /**
     * Validate that a provided roll formula can represent a valid
     * @param formula - A candidate formula to validate
     * @returns Is the provided input a valid dice formula?
     */
    static validate(formula: string): boolean;
    /**
     * Create a formula string from an array of Dice terms.
     */
    static cleanFormula(): string;
    /**
     * Clean the terms of a Roll equation, removing empty space and de-duping arithmetic operators
     * @param terms - The input array of terms
     * @returns The cleaned array of terms
     */
    static cleanTerms(terms: (DiceTerm | string | number)[]): (DiceTerm | string | number)[];
    /**
     * Split a provided Roll formula to identify it's component terms.
     * Some terms are very granular, like a Number of an arithmetic operator
     * Other terms are very coarse like an entire inner Roll from a parenthetical expression.
     * As a general rule, this function should return an Array of terms which are ready to be evaluated immediately.
     * Some terms may require recursive evaluation.
     * @param formula - The formula to parse
     * @param [step] - The numbered step in the Roll evaluation process.
     * @returns An array of identified terms
     */
    private _identifyTerms(formula: string, step?: number): (Roll | DicePool | DiceTerm | number | string)[];
    /**
     * Prepare the data structure used for the Roll.
     * This is factored out to allow for custom Roll classes to do special data preparation using provided input.
     * @param data - Provided roll data
     */
    private _prepareData(data: any): void;
    /**
     * Identify and split a formula into separate terms by arithmetic terms
     */
    private _splitDiceTerms(): void;
    /**
     * Identify and split a formula into separate terms by parenthetical expressions
     */
    private _splitParentheticalTerms(): void;
    /**
     * Identify and split a formula into separate terms by curly braces which represent pooled expressions
     */
    private _splitPooledTerms(): void;
    /**
     * Safely evaluate a formulaic expression using a Proxy environment which is allowed access to Math commands
     * @param expression - The formula expression to evaluate
     * @returns The returned numeric result, or null if the outcome is not numeric
     */
    private _safeEval(expression: string): number | null;
    /**
     * Render the tooltip HTML for a Roll instance
     */
    getTooltip(): Promise<HTMLElement>;
    /**
     * Render a Roll instance to HTML
     * @param chatOptions - An object configuring the behavior of the resulting chat message.
     * @returns A Promise which resolves to the rendered HTML
     */
    render(chatOptions: any): Promise<HTMLElement>;
    /**
     * Transform a Roll instance into a ChatMessage, displaying the roll result.
     * This function can either create the ChatMessage directly, or return the data object that will be used to create.
     * @param messageData - The data object to use when creating the message
     * @param [options] - Additional options which modify the created message.
     * @param [options.rollMode] - The template roll mode to use for the message from CONFIG.Dice.rollModes
     * @param [options.create = true] - Whether to automatically create the chat message, or only return the
     *                                          prepared chatData object.
     * @returns A promise which resolves to the created ChatMessage entity, if create is true
     *                                      or the Object of prepared chatData otherwise.
     */
    toMessage(messageData: any, options?: {
        rollMode?: string | null;
        create?: boolean;
    }): Promise | any;
    /**
     * Represent the data of the Roll as an object suitable for JSON serialization.
     * @returns Structured data which can be serialized into JSON
     */
    toJSON(): any;
    /**
     * Recreate a Roll instance using a provided data object
     * @param data - Unpacked data representing the Roll
     * @returns A reconstructed Roll instance
     */
    static fromData(data: any): Roll;
    /**
     * Recreate a Roll instance using a provided JSON string
     * @param json - Serialized JSON data representing the Roll
     * @returns A reconstructed Roll instance
     */
    static fromJSON(json: string): Roll;
    /**
     * Construct a new Roll object from a parenthetical term of an outer Roll.
     * @param term - The isolated parenthetical term, for example (4d6)
     * @param data - The Roll data object, provided by the outer Roll
     * @returns An inner Roll object constructed from the term
     */
    static fromTerm(term: string, data: any): Roll;
    /**
     * Expand an inline roll element to display it's contained dice result as a tooltip
     * @param a - The inline-roll button
     */
    private static _expandInlineResult(a: HTMLAnchorElement): Promise<void>;
    /**
     * Collapse an expanded inline roll to conceal it's tooltip
     * @param a - The inline-roll button
     */
    private static _collapseInlineResult(a: HTMLAnchorElement): void;
    /**
     * Provide backwards compatibility for Roll data prior to 0.7.0
     */
    private static _backwardsCompatibleRoll(): void;
    parts: any;
    static minimize(): void;
    static maximize(): void;
    /**
     * Allowed arithmetic operators which can join together terms in a Roll expression
     */
    static ARITHMETIC: string[];
    /**
     * A Proxy environment for safely evaluating a string using only available Math functions
     */
    static MATH_PROXY: Math;
    /**
     * A regular expression used to identify the Roll formula for parenthetical terms
     */
    static PARENTHETICAL_RGX: RegExp;
}

/**
 * An abstract base class for any term which appears in a dice roll formula
 * @param termData - Data used to create the Dice Term, including the following:
 * @param termData.number - The number of dice of this term to roll, before modifiers are applied
 * @param termData.faces - The number of faces on each die of this type
 * @param termData.modifiers - An array of modifiers applied to the results
 * @param termData.options - Additional options that modify the term
 */
declare class DiceTerm {
    constructor(termData: {
        number: number;
        faces: number;
        modifiers: string[];
        options: any;
    });
    /**
     * The number of dice of this term to roll, before modifiers are applied
     */
    number: number;
    /**
     * The number of faces on the die
     */
    faces: number;
    /**
     * An Array of dice term modifiers which are applied
     */
    modifiers: string[];
    /**
     * An object of additional options which modify the dice term
     */
    options: any;
    /**
     * The array of dice term results which have been rolled
     */
    results: object[];
    /**
     * An internal flag for whether the dice term has been evaluated
     */
    private _evaluated: boolean;
    /**
     * Return the dice expression portion of the full term formula, excluding any flavor text.
     */
    expression: string;
    /**
     * Return a standardized representation for the displayed formula associated with this DiceTerm
     */
    formula: string;
    /**
     * Return the flavor text associated with a particular DiceTerm, possibly an empty string if the term is flavorless.
     */
    flavor: string;
    /**
     * Return the total result of the DiceTerm if it has been evaluated
     */
    total: number | null;
    /**
     * Return an array of rolled values which are still active within this term
     */
    values: number[];
    /**
     * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
     * @param multiply - A factor to multiply. Dice are multiplied before any additions.
     * @param add - A number of dice to add. Dice are added after multiplication.
     * @returns The altered term
     */
    alter(multiply: number, add: number): DiceTerm;
    /**
     * Evaluate the roll term, populating the results Array.
     * @param [minimize] - Apply the minimum possible result for each roll.
     * @param [maximize] - Apply the maximum possible result for each roll.
     * @returns The evaluated dice term
     */
    evaluate(minimize?: boolean, maximize?: boolean): DiceTerm;
    /**
     * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
     * @param [minimize] - Apply the minimum possible result instead of a random result.
     * @param [maximize] - Apply the maximum possible result instead of a random result.
     */
    roll(minimize?: boolean, maximize?: boolean): any;
    /**
     * Return a string used as the label for each rolled result
     * @param result - The numeric result
     * @returns The result label
     */
    static getResultLabel(result: string): string;
    /**
     * Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
     * Augment or modify the results array.
     */
    private _evaluateModifiers(): void;
    /**
     * A helper comparison function.
     * Returns a boolean depending on whether the result compares favorably against the target.
     * @param result - The result being compared
     * @param comparison - The comparison operator in [=,<,<=,>,>=]
     * @param target - The target value
     * @returns Is the comparison true?
     */
    static compareResult(result: number, comparison: string, target: number): boolean;
    /**
     * A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.
     * @param results - The results array
     * @param number - The number to keep or drop
     * @param [keep] - Keep results?
     * @param [highest] - Keep the highest?
     * @returns The modified results array
     */
    static _keepOrDrop(results: object[], number: number, keep?: boolean, highest?: boolean): object[];
    /**
     * A reusable helper function to handle the identification and deduction of failures
     */
    static _applyCount(): void;
    /**
     * A reusable helper function to handle the identification and deduction of failures
     */
    static _applyDeduct(): void;
    /**
     * Construct a DiceTerm from a provided data object
     * @param data - Provided data from an un-serialized term
     * @returns The constructed DiceTerm
     */
    static fromData(data: any): DiceTerm;
    /**
     * Parse a provided roll term expression, identifying whether it matches this type of term.
     * @param options - Additional term options
     * @returns The constructed DiceTerm instance
     */
    static fromExpression(expression: string, options: any): DiceTerm | null;
    /**
     * Check if the expression matches this type of term
     * @param expression - The expression to parse
     * @param [imputeNumber = true] - Allow the number of dice to be optional, i.e. "d6"
     */
    static matchTerm(expression: string, imputeNumber?: boolean): RegExpMatchArray | null;
    /**
     * Create a "fake" dice term from a pre-defined array of results
     * @example
     * let d = new Die({faces: 6, number: 4, modifiers: ["r<3"]});
     * d.evaluate();
     * let d2 = Die.fromResults({faces: 6, number: 4, modifiers: ["r<3"]}, d.results);
     * @param options - Arguments used to initialize the term
     * @param results - An array of pre-defined results
     */
    static fromResults(options: any, results: object[]): DiceTerm;
    /**
     * Serialize the DiceTerm to a JSON string which allows it to be saved in the database or embedded in text.
     * This method should return an object suitable for passing to the JSON.stringify function.
     */
    toJSON(): any;
    /**
     * Reconstruct a DiceTerm instance from a provided JSON string
     * @param json - A serialized JSON representation of a DiceTerm
     * @returns A reconstructed DiceTerm from the provided JSON
     */
    static fromJSON(json: string): DiceTerm;
    /**
     * Provide backwards compatibility for Die syntax prior to 0.7.0
     */
    private static _backwardsCompatibleTerm(): void;
    /**
     * Define the denomination string used to register this Dice type in CONFIG.Dice.terms
     */
    public static DENOMINATION: any;
    /**
     * Define the modifiers that can be used for this particular DiceTerm type.
     */
    public static MODIFIERS: any;
    /**
     * A regular expression pattern which identifies a potential DiceTerm modifier
     */
    public static MODIFIER_REGEX: RegExp;
    /**
     * A regular expression pattern which indicates the end of a DiceTerm
     */
    public static MODIFIERS_REGEX: string;
    /**
     * A regular expression pattern which identifies part-specific flavor text
     */
    public static FLAVOR_TEXT_REGEX: string;
}

/**
 * Instantiates a new Mersenne Twister.
 * @param [seed] - The initial seed value, if not provided the current timestamp will be used.
 */
declare class MersenneTwister {
    constructor(seed?: number);
    /**
     * Initializes the state vector by using one unsigned 32-bit integer "seed", which may be zero.
     * @param seed - The seed value.
     */
    seed(seed: number): void;
    /**
     * Initializes the state vector by using an array key[] of unsigned 32-bit integers of the specified length. If
     * length is smaller than 624, then each array of 32-bit integers gives distinct initial state vector. This is
     * useful if you want a larger seed space than 32-bit word.
     * @param vector - The seed vector.
     */
    seedArray(vector: any[]): void;
    /**
     * Generates a random unsigned 32-bit integer.
     */
    int(): number;
    /**
     * Generates a random unsigned 31-bit integer.
     */
    int31(): number;
    /**
     * Generates a random real in the interval [0;1] with 32-bit resolution.
     */
    real(): number;
    /**
     * Generates a random real in the interval ]0;1[ with 32-bit resolution.
     */
    realx(): number;
    /**
     * Generates a random real in the interval [0;1[ with 32-bit resolution.
     */
    rnd(): number;
    /**
     * Generates a random real in the interval [0;1[ with 32-bit resolution.
     *
     * Same as .rnd() method - for consistency with Math.random() interface.
     */
    random(): number;
    /**
     * Generates a random real in the interval [0;1[ with 53-bit resolution.
     */
    rndHiRes(): number;
    /**
     * A pseudo-normal distribution using the Box-Muller transform.
     * @param mu - The normal distribution mean
     * @param sigma - The normal distribution standard deviation
     */
    normal(mu: number, sigma: number): number;
    /**
     * A factory method for generating random uniform rolls
     */
    static random(): number;
    /**
     * A factory method for generating random normal rolls
     */
    static normal(): number;
}

declare interface Coin extends DiceTerm {
}

/**
 * Define a two-sided coin term that can be used as part of a Roll formula
 */
declare class Coin implements DiceTerm {
    static getResultLabel(): void;
    /**
     * Call the result of the coin flip, marking any coins that matched the called target as a success
     *
     * 3dcc1      Flip 3 coins and treat "heads" as successes
     * 2dcc0      Flip 2 coins and treat "tails" as successes
     * @param modifier - The matched modifier query
     */
    call(modifier: string): void;
    /**
     * The number of faces on the die
     */
    faces: number;
    /**
     * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
     * @param [minimize] - Apply the minimum possible result instead of a random result.
     * @param [maximize] - Apply the maximum possible result instead of a random result.
     */
    roll(minimize?: boolean, maximize?: boolean): any;
}

declare interface Die extends DiceTerm {
}

/**
 * Define a fair n-sided die term that can be used as part of a Roll formula
 * @example
 * // Roll 4 six-sided dice
 * let die = new Die({faces: 6, number: 4}).evaluate();
 */
declare class Die implements DiceTerm {
    /**
     * Re-roll the Die, rolling additional results for any values which fall within a target set.
     * If no target number is specified, re-roll the lowest possible result.
     *
     * 20d20r         reroll all 1s
     * 20d20r1        reroll all 1s
     * 20d20r=1       reroll all 1s
     * 20d20r1=1      reroll a single 1
     * @param modifier - The matched modifier query
     */
    reroll(modifier: string): void;
    /**
     * Explode the Die, rolling additional results for any values which match the target set.
     * If no target number is specified, explode the highest possible result.
     * Explosion can be a "small explode" using a lower-case x or a "big explode" using an upper-case "X"
     * @param modifier - The matched modifier query
     * @param recursive - Explode recursively, such that new rolls can also explode?
     */
    explode(modifier: string, recursive: boolean): void;
    explodeOnce(): void;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * 20d20k       Keep the 1 highest die
     * 20d20kh      Keep the 1 highest die
     * 20d20kh10    Keep the 10 highest die
     * 20d20kl      Keep the 1 lowest die
     * 20d20kl10    Keep the 10 lowest die
     * @param modifier - The matched modifier query
     */
    keep(modifier: string): void;
    /**
     * Drop a certain number of highest or lowest dice rolls from the result set.
     *
     * 20d20d       Drop the 1 lowest die
     * 20d20dh      Drop the 1 highest die
     * 20d20dl      Drop the 1 lowest die
     * 20d20dh10    Drop the 10 highest die
     * 20d20dl10    Drop the 10 lowest die
     * @param modifier - The matched modifier query
     */
    drop(modifier: string): void;
    /**
     * Count the number of successful results which occurred in a given result set.
     * Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
     * Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)
     *
     * 20d20cs      Count the number of dice which rolled a 20
     * 20d20cs>10   Count the number of dice which rolled higher than 10
     * 20d20cs<10   Count the number of dice which rolled less than 10
     * @param modifier - The matched modifier query
     */
    countSuccess(modifier: string): void;
    /**
     * Count the number of failed results which occurred in a given result set.
     * Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)
     *
     * 6d6cf      Count the number of dice which rolled a 1 as failures
     * 6d6cf<=3   Count the number of dice which rolled less than 3 as failures
     * 6d6cf>4    Count the number of dice which rolled greater than 4 as failures
     * @param modifier - The matched modifier query
     */
    countFailures(modifier: string): void;
    /**
     * Deduct the number of failures from the dice result, counting each failure as -1
     * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a deduct-failures modifier to the results counts all failed results as -1.
     *
     * 6d6df      Subtract the number of dice which rolled a 1 from the non-failed total.
     * 6d6cs>3df  Subtract the number of dice which rolled a 3 or less from the non-failed count.
     * 6d6cf<3df  Subtract the number of dice which rolled less than 3 from the non-failed count.
     * @param modifier - The matched modifier query
     */
    deductFailures(modifier: string): void;
    /**
     * Subtract the value of failed dice from the non-failed total, where each failure counts as its negative value.
     * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a deduct-failures modifier to the results counts all failed results as -1.
     *
     * 6d6df<3    Subtract the value of results which rolled less than 3 from the non-failed total.
     * @param modifier - The matched modifier query
     */
    subtractFailures(modifier: string): void;
    /**
     * Subtract the total value of the DiceTerm from a target value, treating the difference as the final total.
     * Example: 6d6ms>12    Roll 6d6 and subtract 12 from the resulting total.
     * @param modifier - The matched modifier query
     */
    marginSuccess(modifier: string): void;
    rolls: any;
    static DENOMINATION: any;
    static MODIFIERS: any;
    /**
     * Return the total result of the DiceTerm if it has been evaluated
     */
    total: number | null;
}

/**
 * Define a three-sided Fate/Fudge dice term that can be used as part of a Roll formula
 * Mathematically behaves like 1d3-2
 */
declare class FateDie extends DiceTerm {
    static getResultLabel(): void;
    /**
     * The number of dice of this term to roll, before modifiers are applied
     */
    number: number;
    /**
     * The number of faces on the die
     */
    faces: number;
    /**
     * An Array of dice term modifiers which are applied
     */
    modifiers: string[];
    /**
     * An object of additional options which modify the dice term
     */
    options: any;
    /**
     * The array of dice term results which have been rolled
     */
    results: object[];
    /**
     * An internal flag for whether the dice term has been evaluated
     */
    private _evaluated: boolean;
    /**
     * Return the dice expression portion of the full term formula, excluding any flavor text.
     */
    expression: string;
    /**
     * Return a standardized representation for the displayed formula associated with this DiceTerm
     */
    formula: string;
    /**
     * Return the flavor text associated with a particular DiceTerm, possibly an empty string if the term is flavorless.
     */
    flavor: string;
    /**
     * Return the total result of the DiceTerm if it has been evaluated
     */
    total: number | null;
    /**
     * Return an array of rolled values which are still active within this term
     */
    values: number[];
    /**
     * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
     * @param multiply - A factor to multiply. Dice are multiplied before any additions.
     * @param add - A number of dice to add. Dice are added after multiplication.
     * @returns The altered term
     */
    alter(multiply: number, add: number): DiceTerm;
    /**
     * Evaluate the roll term, populating the results Array.
     * @param [minimize] - Apply the minimum possible result for each roll.
     * @param [maximize] - Apply the maximum possible result for each roll.
     * @returns The evaluated dice term
     */
    evaluate(minimize?: boolean, maximize?: boolean): DiceTerm;
    /**
     * Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
     * Augment or modify the results array.
     */
    private _evaluateModifiers(): void;
    /**
     * Serialize the DiceTerm to a JSON string which allows it to be saved in the database or embedded in text.
     * This method should return an object suitable for passing to the JSON.stringify function.
     */
    toJSON(): any;
    /**
     * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
     * @param [minimize] - Apply the minimum possible result instead of a random result.
     * @param [maximize] - Apply the maximum possible result instead of a random result.
     */
    roll(minimize?: boolean, maximize?: boolean): any;
}

/**
 * A dice pool represents a set of Roll expressions which are collectively modified to compute an effective total
 * across all Rolls in the pool. The final total for the pool is defined as the sum over kept rolls, relative to any
 * success count or margin.
 * @example
 * // Consider 3 rolls
 * let r1 = new Roll("4d6");
 * let r2 = new Roll("3d8");
 * let r3 = new Roll("2d10");
 *
 * // Keep the highest of the 3 roll expressions
 * let pool = new DicePool({
 *   rolls: [r1,r2,r3],
 *   modifiers: ["kh"]
 * });
 * pool.evaluate();
 * @example
 * // Construct a DicePool from a string formula
 * let pool = DicePool.fromExpression("{4d6,3d8,2d10}kh");
 */
declare class DicePool {
    /**
     * The elements of a Dice Pool must be Roll objects or numbers
     */
    rolls: (Roll | number)[];
    /**
     * The string modifiers applied to resolve the pool
     */
    modifiers: string[];
    /**
     * An object of additional options which modify the pool
     */
    options: any;
    /**
     * The array of dice pool results which have been rolled
     */
    results: { result: number; active: boolean; }[];
    /**
     * An internal flag for whether the dice term has been evaluated
     */
    private _evaluated: boolean;
    /**
     * Cache the evaluated total to avoid re-evaluating it
     */
    private _total: number | null;
    /**
     * Define the modifiers that can be used for this particular DiceTerm type.
     */
    public MODIFIERS: {
        [key: string]: (...params: any[]) => void;
    };
    /**
     * A regular expression pattern which identifies a potential DicePool modifier
     */
    MODIFIER_REGEX: RegExp;
    /**
     * A regular expression used to identify a valid Dice Pool
     */
    POOL_REGEX: RegExp;
    /**
     * Return an Array of each individual DiceTerm instances contained within the DicePool.
     */
    dice: any;
    /**
     * Return a standardized representation for the displayed formula associated with this DicePool.
     */
    formula: any;
    /**
     * Return the total result of the DicePool if it has been evaluated
     */
    total: number | null;
    /**
     * Return an array of rolled values which are still active within the DicePool
     */
    values: number[];
    /**
     * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
     * @param args - Arguments passed to each contained Roll#alter method.
     * @returns The altered pool
     */
    alter(...args: any[][]): DicePool;
    /**
     * Evaluate the DicePool, populating the results Array.
     * @param [minimize] - Apply the minimum possible result for each roll.
     * @param [maximize] - Apply the maximum possible result for each roll.
     * @returns The evaluated dice term
     */
    evaluate(minimize?: boolean, maximize?: boolean): DiceTerm;
    /**
     * Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
     * Augment or modify the results array.
     */
    private _evaluateModifiers(): void;
    /**
     * Reconstruct a DicePool instance from a provided data Object
     * @param data - The provided data
     * @returns The constructed Dice Pool
     */
    static fromData(data: any): DicePool;
    /**
     * Given a string formula, create and return an evaluated DicePool object
     * @param formula - The string formula to parse
     * @param [options] - Additional options applied to the DicePool
     * @param [data] - A data object which defines data substitutions for Rolls in the DicePool
     * @returns The evaluated DicePool object or null if the formula is invalid
     */
    static fromExpression(formula: string, options?: any, data?: any): DicePool | null;
    /**
     * Reconstruct a DicePool instance from a provided data Object
     * @param json - The serialized JSON string
     * @returns The constructed Dice Pool
     */
    static fromJSON(json: string): DicePool;
    /**
     * Convert the DicePool instance into an Object which can be serialized to JSON
     * @returns The converted data
     */
    toJSON(): any;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * {1d6,1d8,1d10,1d12}kh2       Keep the 2 best rolls from the pool
     * {1d12,6}kl                   Keep the lowest result in the pool
     * @param modifier - The matched modifier query
     */
    keep(modifier: string): void;
    /**
     * Keep a certain number of highest or lowest dice rolls from the result set.
     *
     * {1d6,1d8,1d10,1d12}dl3       Drop the 3 worst results in the pool
     * {1d12,6}dh                   Drop the highest result in the pool
     * @param modifier - The matched modifier query
     */
    drop(modifier: string): void;
    /**
     * Count the number of successful results which occurred in the pool.
     * Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
     * Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)
     *
     * 20d20cs      Count the number of dice which rolled a 20
     * 20d20cs>10   Count the number of dice which rolled higher than 10
     * 20d20cs<10   Count the number of dice which rolled less than 10
     * @param modifier - The matched modifier query
     */
    countSuccess(modifier: string): void;
    /**
     * Count the number of failed results which occurred in a given result set.
     * Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
     * Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)
     *
     * 6d6cf      Count the number of dice which rolled a 1 as failures
     * 6d6cf<=3   Count the number of dice which rolled less than 3 as failures
     * 6d6cf>4    Count the number of dice which rolled greater than 4 as failures
     * @param modifier - The matched modifier query
     */
    countFailures(modifier: string): void;
}

/**
 * The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js
 * library. The canvas is comprised of an ordered sequence of layers which define rendering groups and collections of
 * objects that are drawn on the canvas itself.
 * @example
 * <caption>Example Canvas commands</caption>
 * canvas.ready; // Is the canvas ready for use?
 * canvas.scene; // The currently viewed Scene entity.
 * canvas.dimensions; // The dimensions of the current Scene.
 * canvas.draw(); // Completely re-draw the game canvas (this is usually unnecessary).
 * canvas.pan(x, y, zoom); // Pan the canvas to new coordinates and scale.
 * canvas.recenter(); // Re-center the canvas on the currently controlled Token.
 */
declare class Canvas {
    /**
     * Track the timestamp of the last stage zoom operation
     */
    private _zoomTime: number;
    /**
     * Track the last automatic pan time to throttle
     */
    private _panTime: number;
    /**
     * An object of data which is temporarily cached to be reloaded after the canvas is drawn
     */
    private _reload: any;
    /**
     * The singleton interaction manager instance which handles mouse workflows on the Canvas
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.
     */
    ready: boolean;
    /**
     * An Array of pending canvas operations which should trigger on the next re-paint
     */
    pendingOperations: object[];
    /**
     * A Set of unique pending operation names to ensure operations are only performed once
     */
    _pendingOperationNames: Set<string>;
    /**
     * Create the layers of the game Canvas.
     * @param stage - The primary canvas stage
     */
    private _createLayers(stage: PIXI.Container): void;
    /**
     * A mapping of named CanvasLayers.
     * This mapping is defined in the order that layers must be drawn.
     */
    static layers: {
        [key: string]: CanvasLayer;
    };
    /**
     * An Array of all CanvasLayer instances which are active on the Canvas board
     */
    layers: CanvasLayer[];
    /**
     * Return a reference to the active Canvas Layer
     */
    activeLayer: CanvasLayer;
    /**
     * When re-drawing the canvas, first tear down or discontinue some existing processes
     */
    tearDown(): Promise<void>;
    /**
     * Draw the game canvas.
     * @returns A Promise which resolves once the Canvas is fully drawn
     */
    draw(): Promise<Canvas>;
    /**
     * Get the canvas active dimensions based on the size of the scene's map.
     * We expand the image size by a factor of 1.5 and round to the nearest 2x grid size.
     * The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.
     * @param data - The scene dimensions data being established
     */
    static getDimensions(data: any): void;
    /**
     * Once the canvas is drawn, initialize control, visibility, and audio states
     */
    _initialize(): Promise<void>;
    /**
     * Initialize all lighting, vision, and sound sources for the Scene.
     */
    initializeSources(): void;
    /**
     * Initialize the starting view of the canvas stage
     * If we are re-drawing a scene which was previously rendered, restore the prior view position
     * Otherwise set the view to the top-left corner of the scene at standard scale
     */
    private _initializeCanvasPosition(): void;
    /**
     * Initialize a CanvasLayer in the activation state
     */
    private _initializeCanvasLayer(): void;
    /**
     * Initialize a token or set of tokens which should be controlled.
     * Restore controlled and targeted tokens from before the re-draw.
     */
    private _initializeTokenControl(): void;
    /**
     * Get a reference to the a specific CanvasLayer by it's name
     * @param layerName - The name of the canvas layer to get
     */
    getLayer(layerName: string): CanvasLayer;
    /**
     * Given an embedded object name, get the canvas layer for that object
     */
    private getLayerByEmbeddedName(embeddedName: string): PlaceablesLayer | null;
    /**
     * Pan the canvas to a certain {x,y} coordinate and a certain zoom level
     * @param x - The x-coordinate of the pan destination
     * @param y - The y-coordinate of the pan destination
     * @param scale - The zoom level (max of CONFIG.Canvas.maxZoom) of the action
     */
    pan(x: number | null, y: number | null, scale: number | null): void;
    /**
     * Animate panning the canvas to a certain destination coordinate and zoom scale
     * Customize the animation speed with additional options
     * Returns a Promise which is resolved once the animation has completed
     * @param x - The destination x-coordinate
     * @param y - The destination y-coordinate
     * @param scale - The destination zoom scale
     * @param duration - The total duration of the animation in milliseconds; used if speed is not set
     * @param speed - The speed of animation in pixels per second; overrides duration if set
     * @returns A Promise which resolves once the animation has been completed
     */
    animatePan(x: number, y: number, scale: number, duration: number, speed: number): Promise<void>;
    /**
     * Get the constrained zoom scale parameter which is allowed by the maxZoom parameter
     * @param x - The requested x-coordinate
     * @param y - The requested y-coordinate
     * @param scale - The requested scale
     * @returns The allowed scale
     */
    private _constrainView(x: number, y: number, scale: number): any;
    /**
     * Update the blur strength depending on the scale of the canvas stage
     */
    private _updateBlur(scale: number): void;
    /**
     * Recenter the canvas
     * Otherwise, pan the stage to put the top-left corner of the map in the top-left corner of the window
     */
    recenter(): void;
    /**
     * Attach event listeners to the game canvas to handle click and interaction events
     */
    private _addListeners(): void;
    /**
     * Handle left mouse-click events occurring on the Canvas stage or its active Layer.
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle double left-click events occurring on the Canvas stage.
     */
    _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the beginning of a left-mouse drag workflow on the Canvas stage or its active Layer.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouse movement events occurring on the Canvas stage or it's active layer
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the conclusion of a left-mouse drag workflow when the mouse button is released.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the cancellation of a left-mouse drag workflow
     */
    private _onDragLeftCancel(event: PointerEvent): void;
    /**
     * Handle right mouse-click events occurring on the Canvas stage or it's active layer
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle right-mouse drag events occuring on the Canvas stage or an active Layer
     */
    private _onDragRightMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the conclusion of a right-mouse drag workflow the Canvas stage.
     */
    private _onDragRightDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Determine selection coordinate rectangle during a mouse-drag workflow
     */
    private _onDragSelect(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Pan the canvas view when the cursor position gets close to the edge of the frame
     * @param event - The originating mouse movement event
     */
    private _onDragCanvasPan(event: MouseEvent): void;
    /**
     * Handle window resizing with the dimensions of the window viewport change
     * @param event - The Window resize event
     */
    private _onResize(event: Event): void;
    /**
     * Handle mousewheel events which adjust the scale of the canvas
     * @param event - The mousewheel event that zooms the canvas
     */
    private _onMouseWheel(event: WheelEvent): void;
    /**
     * Event handler for the drop portion of a drag-and-drop event.
     */
    private _onDrop(): void;
    /**
     * Add a pending canvas operation that should fire once the socket handling workflow concludes.
     * This registers operations by a unique string name into a queue - avoiding repeating the same work multiple times.
     * This is especially helpful for multi-object updates to avoid costly and redundant refresh operations.
     * @param name - A unique name for the pending operation, conventionally Class.method
     * @param fn - The unbound function to execute later
     * @param scope - The scope to which the method should be bound when called
     * @param args - Arbitrary arguments to pass to the method when called
     */
    addPendingOperation(name: string, fn: (...params: any[]) => any, scope: any, ...args: any[]): void;
    /**
     * Fire all pending functions that are registered in the pending operations queue and empty it.
     */
    triggerPendingOperations(): void;
}

declare namespace CanvasLayer {
    /**
     * Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.
     * @property zIndex - The zIndex sorting of this layer relative to other layers
     * @property sortActiveTop - Should this layer be sorted to the top when it is active?
     */
    var layerOptions: {
        zIndex: number;
        sortActiveTop: boolean;
    };
    /**
     * Return a reference to the active instance of this canvas layer
     */
    var instance: CanvasLayer;
}

/**
 * An abstract pattern for primary layers of the game canvas to implement
 */
declare interface CanvasLayer {
    /**
     * Track whether the canvas layer is currently active for interaction
     */
    _active: boolean;
    /**
     * The canonical name of the CanvasLayer
     */
    name: string;
    /**
     * Deconstruct data used in the current layer in preparation to re-draw the canvas
     */
    tearDown(): void;
    /**
     * Draw the canvas layer, rendering its internal components and returning a Promise
     * The Promise resolves to the drawn layer once its contents are successfully rendered.
     */
    draw(): Promise<CanvasLayer>;
    /**
     * Activate the CanvasLayer, deactivating other layers and marking this layer's children as interactive.
     * @returns The layer instance, now activated
     */
    activate(): CanvasLayer;
    /**
     * Deactivate the CanvasLayer, removing interactivity from its children.
     * @returns The layer instance, now inactive
     */
    deactivate(): CanvasLayer;
}

declare namespace PlaceableObject {
    /**
     * Identify the official EmbeddedEntity name for this PlaceableObject class
     */
    var embeddedName: string;
    /**
     * Provide a reference to the canvas layer which contains placeable objects of this type
     */
    var layer: PlaceablesLayer;
    function create(): void;
}

/**
 * An Abstract Base Class which defines a Placeable Object which represents an Entity placed on the Canvas
 * @param data - The underlying embedded document data for the placeable type
 * @param [scene] - The parent scene that this object belongs to (if any)
 */
declare interface PlaceableObject extends PIXI.Container {
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    _canView(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    _drawPrimarySprite(): PIXI.Sprite | null;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    _onDelete(): void;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    _onRelease(options: any): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
}

declare namespace PlaceablesLayer {
    /**
     * @property canDragCreate - Does this layer support a mouse-drag workflow to create new objects?
     * @property canDelete - Can objects be deleted from this layer?
     * @property controllableObjects - Can placeable objects in this layer be controlled?
     * @property rotatableObjects - Can placeable objects in this layer be rotated?
     * @property snapToGrid - Do objects in this layer snap to the grid
     * @property gridPrecision - At what numeric grid precision do objects snap?
     * @property objectClass - The class used to represent an object on this layer.
     * @property quadtree - Does this layer use a quadtree to track object positions?
     * @property sheetClass - The FormApplication class used to configure objects on this layer.
     */
    var layerOptions: {
        canDragCreate: boolean;
        canDelete: boolean;
        controllableObjects: boolean;
        rotatableObjects: boolean;
        snapToGrid: boolean;
        gridPrecision: number;
        objectClass: PlaceableObject;
        quadtree: boolean;
        sheetClass: FormApplication;
    };
    /**
     * Define the named Array within Scene.data containing the placeable objects displayed in this layer
     */
    var dataArray: string;
    /**
     * Define a Container implementation used to render placeable objects contained in this layer
     */
    var placeableClass: PIXI.Container;
}

/**
 * The base PlaceablesLayer subclass of CanvasLayer
 */
declare interface PlaceablesLayer {
    /**
     * Placeable Layer Objects
     */
    objects: PIXI.Container;
    /**
     * Preview Object Placement
     */
    preview: any;
    /**
     * Keep track of history so that CTRL+Z can undo changes
     */
    history: object[];
    /**
     * Track the PlaceableObject on this layer which is currently being hovered upon
     */
    _hover: PlaceableObject;
    /**
     * Track the set of PlaceableObjects on this layer which are currently controlled by their id
     */
    _controlled: any;
    /**
     * Keep track of an object copied with CTRL+C which can be pasted later
     */
    _copy: object[];
    /**
     * PlaceableObject layer options
     */
    options: any;
    /**
     * A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.
     */
    quadtree: Quadtree | null;
    /**
     * Return the precision relative to the Scene grid with which Placeable objects should be snapped
     */
    gridPrecision: any;
    /**
     * If objects on this PlaceableLayer have a HUD UI, provide a reference to its instance
     */
    hud: BasePlaceableHUD | null;
    /**
     * A convenience method for accessing the placeable object instances contained in this layer
     */
    placeables: PlaceableObject[];
    /**
     * An Array of placeable objects in this layer which have the _controlled attribute
     */
    controlled: any;
    draw(): void;
    /**
     * Draw a single placeable object
     */
    createObject(): PlaceableObject;
    tearDown(): void;
    activate(): void;
    deactivate(): void;
    /**
     * Get a PlaceableObject contained in this layer by it's ID
     * @param objectId - The ID of the contained object to retrieve
     * @returns The object instance, or undefined
     */
    get(objectId: string): PlaceableObject;
    /**
     * Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
     * @param options - Options passed to the control method of each object
     * @returns An array of objects that were controlled
     */
    controlAll(options: any): PlaceableObject[];
    /**
     * Release all controlled PlaceableObject instance from this layer.
     * @param options - Options passed to the release method of each object
     * @returns The number of PlaceableObject instances which were released
     */
    releaseAll(options: any): number;
    /**
     * Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
     * This executes a single database operation using Scene.update.
     * If rotating only a single object, it is better to use the PlaceableObject.rotate instance method.
     * @param angle - A target angle of rotation (in degrees) where zero faces "south"
     * @param delta - An incremental angle of rotation (in degrees)
     * @param snap - Snap the resulting angle to a multiple of some increment (in degrees)
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    rotateMany(angle: number, delta: number, snap: number, ids: any[] | Set): Promise<Scene>;
    /**
     * Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
     * This executes a single database operation using Scene.update.
     * If moving only a single object, this will delegate to PlaceableObject.update for performance reasons.
     * @param dx - The number of incremental grid units in the horizontal direction
     * @param dy - The number of incremental grid units in the vertical direction
     * @param rotate - Rotate the token to the keyboard direction instead of moving
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    moveMany(dx: number, dy: number, rotate: boolean, ids: any[] | Set): Promise<Scene>;
    /**
     * Undo a change to the objects in this layer
     * This method is typically activated using CTRL+Z while the layer is active
     */
    undoHistory(): Promise<Scene>;
    /**
     * Create multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    createMany(data: object[], options: any): Promise<object[]>;
    /**
     * Update multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    updateMany(data: object[], options: any): Promise<object[]>;
    /**
     * Simultaneously delete multiple PlaceableObjects.
     * This executes a single database operation using Scene.update.
     * If deleting only a single object, this will delegate to PlaceableObject.delete for performance reasons.
     * @param ids - An Array of object IDs to target for deletion
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    deleteMany(ids: string[], options: any): Promise<string[]>;
    /**
     * Update all objects in this layer with a provided transformation.
     * Conditionally filter to only apply to objects which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * A helper method to prompt for deletion of all PlaceableObject instances within the Scene
     * Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
     */
    deleteAll(): void;
    /**
     * Record a new CRUD event in the history log so that it can be undone later
     * @param type - The event type (create, update, delete)
     * @param data - The object data
     */
    storeHistory(type: string, data: any): void;
    /**
     * Copy currently controlled PlaceableObjects to a temporary Array, ready to paste back into the scene later
     * @returns The Array of copied PlaceableObject instances
     */
    copyObjects(): PlaceableObject[];
    /**
     * Paste currently copied PlaceableObjects back to the layer by creating new copies
     * @param position - The destination position for the copied data.
     * @param [hidden] - Paste data in a hidden state, if applicable. Default is false.
     * @param [snap] - Snap the resulting objects to the grid. Default is true.
     * @returns An Array of created PlaceableObject instances
     */
    pasteObjects(position: Point, hidden?: boolean, snap?: boolean): Promise<PlaceableObject[]>;
    /**
     * Select all PlaceableObject instances which fall within a coordinate rectangle.
     * @param x - The top-left x-coordinate of the selection rectangle
     * @param y - The top-left y-coordinate of the selection rectangle
     * @param width - The width of the selection rectangle
     * @param height - The height of the selection rectangle
     * @param releaseOptions - Optional arguments provided to any called release() method
     * @param controlOptions - Optional arguments provided to any called control() method
     * @returns A boolean for whether the controlled set was changed in the operation
     */
    selectObjects(x: number, y: number, width: number, height: number, releaseOptions: any, controlOptions: any): boolean;
    /**
     * Handle left mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft(): void;
    /**
     * Handle double left-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft2(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftDrop(): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftCancel(): void;
    /**
     * Handle right mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickRight(): void;
    /**
     * Handle mouse-wheel events at the PlaceableObjects layer level to rotate multiple objects at once.
     * This handler will rotate all controlled objects by some incremental angle.
     * @param event - The mousewheel event which originated the request
     */
    _onMouseWheel(event: MouseWheelEvent): void;
    /**
     * Handle a DELETE keypress while a placeable object is hovered
     * @param event - The delete key press event which triggered the request
     */
    _onDeleteKey(event: Event): void;
}

/**
 * Display a right-click activated Context Menu which provides a dropdown menu of options
 * A ContextMenu is constructed by designating a parent HTML container and a target selector
 * An Array of menuItems defines the entries of the menu which is displayed
 * @param element - The containing HTML element within which the menu is positioned
 * @param selector - A CSS selector which activates the context menu.
 * @param menuItems - An Array of entries to display in the menu
 * @param eventName - Optionally override the triggering event which can spawn the menu
 * @param menuItem - Menu items in the array can have the following properties
 * @param menuItem.name - The displayed item name
 * @param menuItem.icon - An icon glyph HTML string
 * @param menuItem.condition - A function which returns a Boolean for whether or not to display the item
 * @param menuItem.callback - A callback function to trigger when the entry of the menu is clicked
 */
declare class ContextMenu {
    constructor(element: HTMLElement | jQuery, selector: string, menuItems: object[], eventName: string, menuItem: {
        name: string;
        icon: string;
        condition: (...params: any[]) => any;
        callback: (...params: any[]) => any;
    });
    /**
     * The target HTMLElement being selected
     */
    element: HTMLElement;
    /**
     * The target CSS selector which activates the menu
     */
    selector: string;
    /**
     * An interaction event name which activates the menu
     */
    eventName: string;
    /**
     * The array of menu items being rendered
     */
    menuItems: object[];
    /**
     * Track which direction the menu is expanded in
     */
    _expandUp: boolean;
    /**
     * A convenience accessor to the context menu HTML object
     */
    menu: any;
    /**
     * Attach a ContextMenu instance to an HTML selector
     */
    bind(): void;
    /**
     * Animate closing the menu by sliding up and removing from the DOM
     */
    close(): void;
    /**
     * Render the Context Menu by iterating over the menuItems it contains
     * Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition
     * Attach a click handler to each item which is rendered
     */
    render(target: any): void;
    /**
     * Set the position of the context menu, taking into consideration whether the menu should expand upward or downward
     */
    private _setPosition(): void;
}

/**
 * @property icon - A Font Awesome icon for the button
 * @property label - The label for the button
 * @property [callback] - A callback function that fires when the button is clicked
 */
declare type DialogButton = {
    icon: string;
    label: string;
    callback?: (...params: any[]) => any;
};

declare interface Dialog extends Application {
}

/**
 * Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.
 * @example
 * <caption>Constructing a custom dialog instance</caption>
 * let d = new Dialog({
 *  title: "Test Dialog",
 *  content: "<p>You must choose either Option 1, or Option 2</p>",
 *  buttons: {
 *   one: {
 *    icon: '<i class="fas fa-check"></i>',
 *    label: "Option One",
 *    callback: () => console.log("Chose One")
 *   },
 *   two: {
 *    icon: '<i class="fas fa-times"></i>',
 *    label: "Option Two",
 *    callback: () => console.log("Chose Two")
 *   }
 *  },
 *  default: "two",
 *  render: html => console.log("Register interactivity in the rendered dialog"),
 *  close: html => console.log("This always is logged no matter which option is chosen")
 * });
 * d.render(true);
 * @param data - An object of dialog data which configures how the modal window is rendered
 * @param data.title - The window title
 * @param data.content - HTML content
 * @param [data.render] - A callback function invoked when the dialog is rendered
 * @param [data.close] - Common callback operations to perform when the dialog is closed
 * @param data.buttons - The buttons which are displayed as action choices for the dialog
 * @param options - Dialog rendering options, see :class:`Application`
 * @param options.default - The name of the default button which should be triggered on Enter
 * @param options.jQuery - Whether to provide jQuery objects to callback functions (if true) or plain
 *                                    HTMLElement instances (if false). This is currently true by default but in the
 *                                    future will become false by default.
 */
declare class Dialog implements Application {
    constructor(data: {
        title: string;
        content: string;
        render?: (...params: any[]) => any;
        close?: (...params: any[]) => any;
        buttons: {
            [key: string]: DialogButton;
        };
    }, options: {
        default: string;
        jQuery: boolean;
    });
    static defaultOptions: any;
    /**
     * Handle a left-mouse click on one of the dialog choice buttons
     * @param event - The left-mouse click event
     */
    private _onClickButton(event: MouseEvent): void;
    /**
     * Handle a keydown event while the dialog is active
     * @param event - The keydown event
     */
    private _onKeyDown(event: KeyboardEvent): void;
    /**
     * Submit the Dialog by selecting one of its buttons
     * @param button - The configuration of the chosen button
     */
    private submit(button: any): void;
    /**
     * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
     * If you require more flexibility, a custom Dialog instance is preferred.
     * @example
     * let d = Dialog.confirm({
     *  title: "A Yes or No Question",
     *  content: "<p>Choose wisely.</p>",
     *  yes: () => console.log("You chose ... wisely"),
     *  no: () => console.log("You chose ... poorly"),
     *  defaultYes: false
     * });
     * @param title - The confirmation window title
     * @param content - The confirmation message
     * @param yes - Callback function upon yes
     * @param no - Callback function upon no
     * @param render - A function to call when the dialog is rendered
     * @param defaultYes - Make "yes" the default choice?
     * @param rejectClose - Reject the Promise if the Dialog is closed without making a choice.
     * @param options - Additional rendering options passed to the Dialog
     * @returns A promise which resolves once the user makes a choice or closes the window
     */
    static confirm(title: string, content: string, yes: (...params: any[]) => any, no: (...params: any[]) => any, render: (...params: any[]) => any, defaultYes: boolean, rejectClose: boolean, options: any): Promise<any>;
    /**
     * A helper factory method to display a basic "prompt" style Dialog with a single button
     * @param title - The confirmation window title
     * @param content - The confirmation message
     * @param label - The confirmation button text
     * @param callback - A callback function to fire when the button is clicked
     * @param render - A function that fires after the dialog is rendered
     * @param options - Additional rendering options
     * @returns A promise which resolves when clicked, or rejects if closed
     */
    static prompt(title: string, content: string, label: string, callback: (...params: any[]) => any, render: (...params: any[]) => any, options: any): Promise<any>;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
}

/**
 * A UI utility to make an element draggable.
 */
declare class Draggable {
    /**
     * Duplicate the application's starting position to track differences
     */
    position: any;
    /**
     * Remember event handlers associated with this Draggable class so they may be later unregistered
     */
    handlers: any;
    /**
     * Throttle mousemove event handling to 60fps
     */
    _moveTime: number;
    /**
     * Activate event handling for a Draggable application
     * Attach handlers for floating, dragging, and resizing
     */
    activateListeners(): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     */
    private _onDragMouseDown(): void;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     */
    private _onDragMouseMove(): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     */
    private _onDragMouseUp(): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     */
    private _onResizeMouseDown(): void;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     */
    private _onResizeMouseMove(): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     */
    private _onResizeMouseUp(): void;
}

/**
 * A controller class for managing drag and drop workflows within an Application instance.
 * The controller manages the following actions: dragstart, dragover, drop
 * @example
 * const dragDrop = new DragDrop({
 *   dragSelector: ".item",
 *   dropSelector: ".items",
 *   permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) }
 *   callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }
 * });
 * dragDrop.bind(html);
 * @param dragSelector - The CSS selector used to target draggable elements.
 * @param dropSelector - The CSS selector used to target viable drop targets.
 * @param permissions - An object of permission test functions for each action
 * @param callbacks - An object of callback functions for each action
 */
declare class DragDrop {
    constructor(dragSelector: string, dropSelector: string, permissions: {
        [key: string]: (...params: any[]) => void;
    }, callbacks: {
        [key: string]: (...params: any[]) => void;
    });
    /**
     * The HTML selector which identifies draggable elements
     */
    dragSelector: string;
    /**
     * The HTML selector which identifies drop targets
     */
    dropSelector: string;
    /**
     * A set of permission checking functions for each action of the Drag and Drop workflow
     */
    permissions: any;
    /**
     * A set of callback functions for each action of the Drag and Drop workflow
     */
    callbacks: any;
    /**
     * Bind the DragDrop controller to an HTML application
     * @param html - The HTML element to which the handler is bound
     */
    bind(html: HTMLElement): void;
    /**
     * Execute a callback function associated with a certain action in the workflow
     * @param event - The drag event being handled
     * @param action - The action being attempted
     */
    callback(event: DragEvent, action: string): void;
    /**
     * Test whether the current user has permission to perform a step of the workflow
     * @param action - The action being attempted
     * @param selector - The selector being targeted
     * @returns Can the action be performed?
     */
    can(action: string, selector: string): boolean;
    /**
     * Handle the start of a drag workflow
     * @param event - The drag event being handled
     */
    private _handleDragStart(event: DragEvent): void;
    /**
     * Handle a dragged element over a droppable target
     * @param event - The drag event being handled
     */
    private _handleDragOver(event: DragEvent): void;
    /**
     * Handle a dragged element dropped on a droppable target
     * @param event - The drag event being handled
     */
    private _handleDrop(event: DragEvent): void;
}

/**
 * A collection of helper functions and utility methods related to the rich text editor
 */
declare class TextEditor {
    /**
     * Create a Rich Text Editor. The current implementation uses TinyMCE
     * @param options - Configuration options provided to the Editor init
     * @param content - Initial HTML or text content to populate the editor with
     * @returns The editor instance.
     */
    static create(options: any, content: string): tinyMCE.Editor;
    /**
     * Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.
     * @param html - The original encoded HTML string
     * @returns The decoded unicode string
     */
    static decodeHTML(html: string): string;
    /**
     * Enrich HTML content by replacing or augmenting components of it
     * @param content - The original HTML content (as a string)
     * @param secrets - Include secret tags in the final HTML? If false secret blocks will be removed.
     * @param entities - Replace dynamic entity links?
     * @param links - Replace hyperlink content?
     * @param rolls - Replace inline dice rolls?
     * @param rollData - The data object providing context for inline rolls
     * @returns The enriched HTML content
     */
    static enrichHTML(content: string, secrets: boolean, entities: boolean, links: boolean, rolls: boolean, rollData: any): string;
    /**
     * Preview an HTML fragment by constructing a substring of a given length from its inner text.
     * @param content - The raw HTML to preview
     * @param length - The desired length
     * @returns The previewed HTML
     */
    static previewHTML(content: string, length?: number): string;
    /**
     * Truncate a fragment of text to a maximum number of characters.
     * @param text - The original text fragment that should be truncated to a maximum length
     * @param [maxLength] - The maximum allowed length of the truncated string.
     * @param [splitWords] - Whether to truncate by splitting on white space (if true) or breaking words.
     * @param [suffix] - A suffix string to append to denote that the text was truncated.
     */
    static truncateText(text: string, maxLength?: number, splitWords?: boolean, suffix?: string | null): any;
    /**
     * Recursively identify the text nodes within a parent HTML node for potential content replacement.
     * @param parent - The parent HTML Element
     * @returns An array of contained Text nodes
     */
    private static _getTextNodes(parent: HTMLElement): Text[];
    /**
     * Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.
     */
    private static _replaceTextContent(): void;
    /**
     * Replace a matched portion of a Text node with a replacement Node
     */
    private static _replaceTextNode(text: Text, match: RegExpMatchArray, replacement: Node): void;
    /**
     * Create a dynamic entity link from a regular expression match
     * @param match - The full matched string
     * @param type - The matched entity type or "Compendium"
     * @param target - The requested match target (_id or name)
     * @param name - A customized or over-ridden display name for the link
     * @returns An HTML element for the entity link
     */
    private static _createEntityLink(match: string, type: string, target: string, name: string): HTMLAnchorElement;
    /**
     * Replace a hyperlink-like string with an actual HTML <a> tag
     * @param match - The full matched string
     * @returns An HTML element for the entity link
     */
    private static _createHyperlink(match: string): HTMLAnchorElement;
    /**
     * Replace an inline roll formula with a rollable <a> element or an eagerly evaluated roll result
     * @param match - The matched string
     * @param command - An optional command
     * @param formula - The matched formula
     * @param closing - The closing brackets for the inline roll
     * @returns The replaced match
     */
    static _createInlineRoll(match: string, command: string, formula: string, closing: string): string;
    /**
     * Handle click events on Entity Links
     */
    private static _onClickEntityLink(event: Event): void;
    /**
     * Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip
     * @param event - The initiating click event
     */
    private static _onClickInlineRoll(event: MouseEvent): void;
    /**
     * Begin a Drag+Drop workflow for a dynamic content link
     * @param event - The originating drag event
     */
    private static _onDragEntityLink(event: Event): void;
    /**
     * Begin a a data transfer drag event with default handling
     */
    private _onDragStart(): void;
    /**
     * Handle dropping of transferred data onto the active rich text editor
     * @param event - The originating drop event which triggered the data transfer
     * @param editor - The TinyMCE editor instance being dropped on
     */
    private static _onDropEditorData(event: Event, editor: tinyMCE): void;
}

/**
 * The FilePicker application renders contents of the server-side public directory
 * This app allows for navigating and uploading files to the public path
 */
declare class FilePicker {
    /**
     * The full requested path given by the user
     */
    request: string;
    /**
     * The file sources which are available for browsing
     */
    sources: any;
    /**
     * Track the active source tab which is being browsed
     */
    activeSource: string;
    /**
     * The latest set of results browsed from the server
     */
    results: any;
    /**
     * The general file type which controls the set of extensions which will be accepted
     */
    type: string;
    /**
     * The target HTML element this file picker is bound to
     */
    field: HTMLElement;
    /**
     * A button which controls the display of the picker UI
     */
    button: HTMLElement;
    /**
     * The display mode of the FilePicker UI
     */
    displayMode: string;
    /**
     * The current set of file extensions which are being filtered upon
     */
    extensions: string[];
    static defaultOptions: any;
    /**
     * Given a current file path, determine the directory it belongs to
     * @param target - The currently requested target path
     * @returns An array of the inferred source and target directory path
     */
    _inferCurrentDirectory(target: string): string[];
    /**
     * Get the valid file extensions for a given named file picker type
     */
    private _getExtensions(type: string): string[];
    /**
     * Test a URL to see if it matches a well known s3 key pattern
     * @param url - An input URL to test
     * @returns A regular expression match
     */
    static matchS3URL(url: string): RegExpMatchArray | null;
    /**
     * Parse a s3 key to learn the bucket and the key prefix used for the request
     * @param key - A fully qualified key name or prefix path
     */
    private static parseS3URL(key: string): any;
    title: any;
    /**
     * Return the source object for the currently active source
     */
    source: any;
    /**
     * Return the target directory for the currently active source
     */
    target: any;
    /**
     * Return a flag for whether the current user is able to upload file content
     */
    canUpload: any;
    /**
     * Return the upload URL to which the FilePicker should post uploaded files
     */
    static uploadURL: any;
    getData(): void;
    /**
     * Browse to a specific location for this FilePicker instance
     * @param [target] - The target within the currently active source location.
     * @param [options] - Browsing options
     */
    browse(target?: string, options?: any): void;
    /**
     * Browse files for a certain directory location
     * @param source - The source location in which to browse. See FilePicker#sources for details
     * @param target - The target within the source location
     * @param options - Optional arguments
     * @param options.bucket - A bucket within which to search if using the S3 source
     * @param options.extensions - An Array of file extensions to filter on
     * @param options.wildcard - The requested dir represents a wildcard path
     * @returns A Promise which resolves to the directories and files contained in the location
     */
    static browse(source: string, target: string, options: {
        bucket: string;
        extensions: string[];
        wildcard: boolean;
    }): Promise;
    /**
     * Configure metadata settings regarding a certain file system path
     * @param source - The source location in which to browse. See FilePicker#sources for details
     * @param target - The target within the source location
     * @param options - Optional arguments which modify the request
     */
    static configurePath(source: string, target: string, options: any): Promise<object>;
    /**
     * Create a subdirectory within a given source. The requested subdirectory path must not already exist.
     * @param source - The source location in which to browse. See FilePicker#sources for details
     * @param target - The target within the source location
     * @param options - Optional arguments which modify the request
     */
    static createDirectory(source: string, target: string, options: any): Promise<object>;
    /**
     * General dispatcher method to submit file management commands to the server
     */
    private static _manageFiles(): Promise<object>;
    /**
     * Dispatch a POST request to the server containing a directory path and a file to upload
     * @param source - The data source to which the file should be uploaded
     * @param path - The destination path
     * @param file - The File object to upload
     * @param [options = {}] - Additional file upload options passed as form data
     * @returns The response object
     */
    static upload(source: string, path: string, file: File, options?: any): Promise<object>;
    /**
     * Additional actions performed when the file-picker UI is rendered
     */
    render(): void;
    /**
     * Activate listeners to handle user interactivity for the FilePicker UI
     */
    activateListeners(html: any): void;
    /**
     * Handle a click event to change the display mode of the File Picker
     * @param event - The triggering click event
     */
    private _onChangeDisplayMode(event: MouseEvent): void;
    _onChangeTab(): void;
    _canDragStart(): void;
    _canDragDrop(): void;
    _onDragStart(): void;
    _onDrop(): void;
    /**
     * Handle user submission of the address bar to request an explicit target
     * @param event - The originating keydown event
     */
    private _onRequestTarget(event: KeyboardEvent): void;
    /**
     * Handle requests from the IntersectionObserver to lazily load an image file
     */
    private _onLazyLoadImages(): void;
    /**
     * Handle file or folder selection within the file picker
     * @param event - The originating click event
     */
    private _onPick(event: Event): void;
    /**
     * Handle backwards navigation of the fol6der structure
     */
    private _onClickDirectoryControl(): void;
    /**
     * Present the user with a dialog to create a subdirectory within their currently browsed file storate location.
     */
    private _createDirectoryDialog(): void;
    /**
     * Handle changes to the bucket selector
     */
    private _onChangeBucket(): void;
    _onSearchFilter(): void;
    /**
     * Handle file picker form submission
     */
    private _onSubmit(ev: Event): void;
    /**
     * Handle file upload
     */
    private _onUpload(ev: any): void;
    /**
     * Bind the file picker to a new target field.
     * Assumes the user will provide a <button> HTMLElement which has the data-target and data-type attributes
     * The data-target attribute should provide the name of the input field which should receive the selected file
     * The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted
     * @param button - The button element
     */
    static fromButton(button: HTMLElement): void;
    /**
     * Record the last-browsed directory path so that re-opening a different FilePicker instance uses the same target
     */
    static LAST_BROWSED_DIRECTORY: string;
    /**
     * Record the last-configured tile size which can automatically be applied to new FilePicker instances
     */
    static LAST_TILE_SIZE: number | null;
    /**
     * Record the last-configured display mode so that re-opening a different FilePicker instance uses the same mode.
     */
    static LAST_DISPLAY_MODE: string;
    /**
     * Enumerate the allowed FilePicker display modes
     */
    static DISPLAY_MODES: {
        [key: string]: number;
    };
    /**
     * Cache the names of S3 buckets which can be used
     */
    static S3_BUCKETS: any[] | null;
}

/**
 * A controller class for managing a text input widget that filters the contents of some other UI element
 * @param inputSelector - The CSS selector used to target the text input element.
 * @param contentSelector - The CSS selector used to target the content container for these tabs.
 * @param initial - The initial value of the search query.
 * @param callback - A callback function which executes when the filter changes.
 * @param delay - The number of milliseconds to wait for text input before processing.
 */
declare class SearchFilter {
    constructor(inputSelector: string, contentSelector: string, initial: string, callback: (...params: any[]) => any, delay: number);
    /**
     * The value of the current query string
     */
    query: string;
    /**
     * A callback function to trigger when the tab is changed
     */
    callback: ((...params: any[]) => any) | null;
    /**
     * The CSS selector used to target the tab navigation element
     */
    _inputSelector: string;
    /**
     * A reference to the HTML navigation element the tab controller is bound to
     */
    _input: HTMLElement | null;
    /**
     * The CSS selector used to target the tab content element
     */
    _contentSelector: string;
    /**
     * A reference to the HTML container element of the tab content
     */
    _content: HTMLElement | null;
    /**
     * A debounced function which applies the search filtering
     */
    _filter: (...params: any[]) => any;
    /**
     * Bind the SearchFilter controller to an HTML application
     */
    bind(html: HTMLElement): void;
    /**
     * Handle key-up events within the filter input field
     * @param event - The key-up event
     */
    private _onKeyUp(event: KeyboardEvent): void;
}

/**
 * An extension of the native FormData implementation.
 *
 * This class functions the same way that the default FormData does, but it is more opinionated about how
 * input fields of certain types should be evaluated and handled.
 *
 * It also adds support for certain Foundry VTT specific concepts including:
 *  Support for defined data types and type conversion
 *  Support for TinyMCE editors
 *  Support for editable HTML elements
 * @param form - The form being processed
 * @param [editors] - An array of TinyMCE editor instances which are present in this form
 * @param [dtypes] - A mapping of data types for form fields
 */
declare class FormDataExtended extends FormData {
    constructor(form: HTMLFormElement, editors?: object[], dtypes?: any);
    /**
     * A mapping of data types requested for each form field
     */
    dtypes: any;
    /**
     * A record of TinyMCE editors which are linked to this form
     */
    editors: object[];
    /**
     * Process the HTML form element to populate the FormData instance.
     * @param form - The HTML form
     */
    process(form: HTMLFormElement): void;
    /**
     * Export the FormData as an object
     */
    toObject(): any;
}

/**
 * A common framework for displaying notifications to the client.
 * Submitted notifications are added to a queue, and up to 3 notifications are displayed at once.
 * Each notification is displayed for 5 seconds at which point further notifications are pulled from the queue.
 * @example
 * ui.notifications.info("This is an info message");
 * ui.notifications.warn("This is a warning message");
 * ui.notifications.error("This is an error message");
 * ui.notifications.info("This is a 4th message which will not be shown until the first info message is done");
 */
declare class Notifications extends Application {
    /**
     * Submitted notifications which are queued for display
     */
    queue: object[];
    /**
     * Notifications which are currently displayed
     */
    active: object[];
    static defaultOptions: any;
    /**
     * Initialize the Notifications system by displaying any system-generated messages which were passed from the server.
     */
    initialize(): void;
    /**
     * Push a new notification into the queue
     * @param message - The content of the notification message
     * @param type - The type of notification, currently "info", "warning", and "error" are supported
     * @param permanent - Whether the notification should be permanently displayed unless otherwise dismissed
     */
    notify(message: string, type?: string, permanent: boolean): void;
    /**
     * Display a notification with the "info" type
     * @param message - The content of the notification message
     * @param options - Notification options passed to the notify function
     */
    info(message: string, options: any): void;
    /**
     * Display a notification with the "warning" type
     * @param message - The content of the notification message
     * @param options - Notification options passed to the notify function
     */
    warn(message: string, options: any): void;
    /**
     * Display a notification with the "error" type
     * @param message - The content of the notification message
     * @param options - Notification options passed to the notify function
     */
    error(message: string, options: any): void;
    /**
     * Retrieve a pending notification from the queue and display it
     */
    private fetch(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    private _render(force: boolean, options: any): Promise<void>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderInner(data: any): Promise<jQuery>;
}

/**
 * A controller class for managing tabbed navigation within an Application instance.
 * @example
 * <!-- Example HTML -->
 * <nav class="tabs" data-group="primary-tabs">
 *   <a class="item" data-tab="tab1">Tab 1</li>
 *   <a class="item" data-tab="tab2">Tab 2</li>
 * </nav>
 *
 * <section class="content">
 *   <div class="tab" data-tab="tab1" data-group="primary-tabs">Content 1</div>
 *   <div class="tab" data-tab="tab2" data-group="primary-tabs">Content 2</div>
 * </section>
 * @example
 * // JavaScript
 * const tabs = new Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
 * tabs.bind(html);
 * @param navSelector - The CSS selector used to target the navigation element for these tabs
 * @param contentSelector - The CSS selector used to target the content container for these tabs
 * @param initial - The tab name of the initially active tab
 * @param callback - An optional callback function that executes when the active tab is changed
 */
declare class Tabs {
    constructor(navSelector: string, contentSelector: string, initial: string, callback: ((...params: any[]) => any) | null);
    /**
     * The value of the active tab
     */
    active: string;
    /**
     * A callback function to trigger when the tab is changed
     */
    callback: ((...params: any[]) => any) | null;
    /**
     * The CSS selector used to target the tab navigation element
     */
    _navSelector: string;
    /**
     * A reference to the HTML navigation element the tab controller is bound to
     */
    _nav: HTMLElement | null;
    /**
     * The CSS selector used to target the tab content element
     */
    _contentSelector: string;
    /**
     * A reference to the HTML container element of the tab content
     */
    _content: HTMLElement | null;
    /**
     * Bind the Tabs controller to an HTML application
     */
    bind(html: HTMLElement): void;
    /**
     * Activate a new tab by name
     */
    activate(tabName: string, triggerCallback: boolean): void;
    /**
     * Handle click events on the tab navigation entries
     * @param event - A left click event
     */
    private _onClickNav(event: MouseEvent): void;
}

/**
 * Render the Sidebar container, and after rendering insert Sidebar tabs
 */
declare class Sidebar {
    /**
     * Sidebar application instances
     */
    apps: Application[];
    /**
     * Track whether the sidebar container is currently collapsed
     */
    _collapsed: boolean;
    static defaultOptions: any;
    /**
     * Return the name of the active Sidebar tab
     */
    activeTab: string;
    /**
     * Return an Array of pop-out sidebar tab Application instances
     */
    popouts: Application[];
    getData(): void;
    _render(): void;
    /**
     * Activate a Sidebar tab by it's name
     * @param tabName - The tab name corresponding to it's "data-tab" attribute
     */
    activateTab(tabName: string): void;
    /**
     * Expand the Sidebar container from a collapsed state.
     * Take no action if the sidebar is already expanded.
     */
    expand(): void;
    /**
     * Collapse the sidebar to a minimized state.
     * Take no action if the sidebar is already collapsed.
     */
    collapse(): void;
    activateListeners(): void;
    _onChangeTab(): void;
    /**
     * Handle right-click events on tab controls to trigger pop-out containers for each tab
     * @param event - The originating contextmenu event
     */
    private _onRightClickTab(event: Event): void;
    /**
     * Handle toggling of the Sidebar container's collapsed or expanded state
     */
    private _onToggleCollapse(event: Event): void;
}

declare namespace SidebarTab {
    var defaultOptions: any;
}

/**
 * An abstract pattern followed by the different tabs of the sidebar
 */
declare interface SidebarTab {
    /**
     * The base name of this sidebar tab
     */
    tabName: string;
    /**
     * A reference to the pop-out variant of this SidebarTab, if one exists
     */
    _popout: SidebarTab;
    /**
     * Denote whether or not this is the original version of the sidebar tab, or a pop-out variant
     */
    _original: SidebarTab;
    _renderInner(): void;
    _render(): void;
    /**
     * Activate this SidebarTab, switching focus to it
     */
    activate(): void;
    close(): void;
    /**
     * Create a second instance of this SidebarTab class which represents a singleton popped-out container
     * @returns The popped out sidebar tab instance
     */
    createPopout(): SidebarTab;
    /**
     * Render the SidebarTab as a pop-out container
     */
    renderPopout(): void;
    /**
     * Handle lazy loading for sidebar images to only load them once they become observed
     */
    _onLazyLoadImage(entries: any, observer: any): void;
}

declare namespace SidebarDirectory {
    var defaultOptions: any;
    /**
     * The named entity which this Sidebar Directory contains
     */
    var entity: string;
    /**
     * The Entity collection which this Sidebar Directory contains
     */
    var collection: EntityCollection;
    /**
     * A reference to the Entity class which is displayed within this EntityCollection
     */
    var cls: any;
    /**
     * Given an entity type and a list of entities, set up the folder tree for that entity
     * @param folders - The Array of Folder objects to organize
     * @param entities - The Array of Entity objects to organize
     * @returns A tree structure containing the folders and entities
     */
    function setupFolders(folders: Folder[], entities: Entity[]): any;
    /**
     * Populate a single folder with child folders and content
     * This method is called recursively when building the folder tree
     */
    function _populate(): void;
}

/**
 * A shared pattern for the sidebar directory which Actors, Items, and Scenes all use
 */
declare interface SidebarDirectory extends SidebarTab {
    /**
     * References to the set of Entities which are displayed in the Sidebar
     */
    entities: Entity[];
    /**
     * Reference the set of Folders which exist in this Sidebar
     */
    folders: Folder[];
    /**
     * Initialize the content of the directory by categorizing folders and entities into a hierarchical tree structure.
     */
    initialize(): void;
    render(): void;
    getData(): void;
    _onSearchFilter(): void;
    /**
     * Collapse all subfolders in this directory
     */
    collapseAll(): void;
    /**
     * Activate event listeners triggered within the Actor Directory HTML
     */
    activateListeners(): void;
    /**
     * Handle clicking on an Entity name in the Sidebar directory
     * @param event - The originating click event
     */
    _onClickEntityName(event: Event): void;
    /**
     * Handle new creation request
     * @param event - The originating button click event
     */
    _onCreateEntity(event: MouseEvent): void;
    /**
     * Create a new Folder in this SidebarDirectory
     * @param event - The originating button click event
     */
    _onCreateFolder(event: MouseEvent): void;
    /**
     * Handle toggling the collapsed or expanded state of a folder within the directory tab
     * @param event - The originating click event
     */
    _toggleFolder(event: MouseEvent): void;
    _onDragStart(): void;
    /**
     * Highlight folders as drop targets when a drag event enters or exits their area
     * @param event - The DragEvent which is in progress
     */
    _onDragHighlight(event: DragEvent): void;
    _onDrop(): void;
    /**
     * Define the behavior of the sidebar tab when it received a dropped data object
     * @param event - The original drop event
     * @param data - The data being dropped
     */
    _handleDropData(event: Event, data: any): void;
    /**
     * Default folder context actions
     */
    _contextMenu(html: jQuery): void;
    /**
     * Get the set of ContextMenu options which should be used for Folders in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    _getFolderContextOptions(): object[];
    /**
     * Get the set of ContextMenu options which should be used for Entities in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    _getEntryContextOptions(): object[];
    /**
     * The base name of this sidebar tab
     */
    tabName: string;
    /**
     * A reference to the pop-out variant of this SidebarTab, if one exists
     */
    _popout: SidebarTab;
    /**
     * Denote whether or not this is the original version of the sidebar tab, or a pop-out variant
     */
    _original: SidebarTab;
    /**
     * Activate this SidebarTab, switching focus to it
     */
    activate(): void;
    /**
     * Create a second instance of this SidebarTab class which represents a singleton popped-out container
     * @returns The popped out sidebar tab instance
     */
    createPopout(): SidebarTab;
    /**
     * Render the SidebarTab as a pop-out container
     */
    renderPopout(): void;
    /**
     * Handle lazy loading for sidebar images to only load them once they become observed
     */
    _onLazyLoadImage(entries: any, observer: any): void;
}

/**
 * The default Actor Sheet
 *
 * This Application is responsible for rendering an actor's attributes and allowing the actor to be edited.
 *
 * System modifications may elect to override this class to better suit their own game system by re-defining the value
 * ``CONFIG.Actor.sheetClass``.
 * @param actor - The Actor instance being displayed within the sheet.
 * @param [options] - Additional options which modify the rendering of the Actor's sheet.
 * @param [options.editable] - Is the Actor editable? Default is true.
 */
declare class ActorSheet {
    constructor(actor: Actor, options?: {
        editable?: boolean;
    });
    /**
     * If this Actor Sheet represents a synthetic Token actor, reference the active Token
     */
    token: Token;
    static defaultOptions: any;
    id: any;
    title: any;
    /**
     * A convenience reference to the Actor entity
     */
    actor: Actor;
    getData(): void;
    _render(): void;
    _getHeaderButtons(): void;
    activateListeners(): void;
    /**
     * Handle requests to configure the prototype Token for the Actor
     */
    private _onConfigureToken(): void;
    /**
     * Handle requests to configure the default sheet used by this Actor
     */
    private _onConfigureSheet(): void;
    /**
     * Handle changing the actor profile image by opening a FilePicker
     */
    private _onEditImage(): void;
    _updateObject(): void;
    _canDragStart(): void;
    _canDragDrop(): void;
    _onDragStart(): void;
    _onDrop(): void;
    /**
     * Handle the dropping of ActiveEffect data onto an Actor Sheet
     * @param event - The concluding DragEvent which contains drop data
     * @param data - The data transfer extracted from the event
     * @returns A data object which describes the result of the drop
     */
    private _onDropActiveEffect(event: DragEvent, data: any): Promise<object>;
    /**
     * Handle dropping of an Actor data onto another Actor sheet
     * @param event - The concluding DragEvent which contains drop data
     * @param data - The data transfer extracted from the event
     * @returns A data object which describes the result of the drop
     */
    private _onDropActor(event: DragEvent, data: any): Promise<object>;
    /**
     * Handle dropping of an item reference or item data onto an Actor Sheet
     * @param event - The concluding DragEvent which contains drop data
     * @param data - The data transfer extracted from the event
     * @returns A data object which describes the result of the drop
     */
    private _onDropItem(event: DragEvent, data: any): Promise<object>;
    /**
     * Handle dropping of a Folder on an Actor Sheet.
     * Currently supports dropping a Folder of Items to create all items as owned items.
     * @param event - The concluding DragEvent which contains drop data
     * @param data - The data transfer extracted from the event
     * @returns A data object which describes the result of the drop
     */
    private _onDropFolder(event: DragEvent, data: any): Promise<object>;
    /**
     * Handle the final creation of dropped Item data on the Actor.
     * This method is factored out to allow downstream classes the opportunity to override item creation behavior.
     * @param itemData - The item data requested for creation
     */
    private _onDropItemCreate(itemData: any): Promise<Actor>;
    /**
     * Handle a drop event for an existing Owned Item to sort that item
     */
    private _onSortItem(event: Event, itemData: any): void;
}

/**
 * Configure the Combat tracker to display additional information as appropriate
 */
declare class CombatTrackerConfig {
    getData(): void;
    _updateObject(): void;
    /**
     * Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker
     */
    getAttributeChoices(): Promise<any[]>;
}

/**
 * Configure or create a single Combatant within a Combat entity.
 */
declare class CombatantConfig {
    title: any;
    _updateObject(): void;
}

declare interface ActiveEffectConfig extends FormApplication {
}

/**
 * A form designed for creating and editing an Active Effect on an Actor or Item entity.
 * @param object - The target active effect being configured
 * @param [options] - Additional options which modify this application instance
 */
declare class ActiveEffectConfig implements FormApplication {
    constructor(object: ActiveEffect, options?: any);
    static defaultOptions: any;
    /**
     * Provide centralized handling of mouse clicks on control buttons.
     * Delegate responsibility out to action-specific handlers depending on the button action.
     * @param event - The originating click event
     */
    private _onEffectControl(event: MouseEvent): void;
    /**
     * Handle adding a new change to the changes array.
     * @param button - The clicked action button
     */
    private _addEffectChange(button: HTMLElement): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
}

/**
 * Edit a folder, configuring its name and appearance
 */
declare class FolderConfig extends FormApplication {
    static defaultOptions: any;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
}

/**
 * A tool for fine tuning the grid in a Scene
 */
declare class GridConfig extends FormApplication {
    /**
     * Track the Scene Configuration sheet reference
     */
    sheet: SceneConfig;
    /**
     * The counter-factual dimensions being evaluated
     */
    _dimensions: any;
    /**
     * A reference to the bound key handler function so it can be removed
     */
    private _keyHandler: ((...params: any[]) => any) | null;
    /**
     * A reference to the bound mousewheel handler function so it can be removed
     */
    private _wheelHandler: ((...params: any[]) => any) | null;
    static defaultOptions: any;
    /**
     * Handle resetting the form and re-drawing back to the original dimensions
     * @param event - The original keydown event
     */
    private _onKeyDown(event: KeyboardEvent): void;
    /**
     * Handle resetting the form and re-drawing back to the original dimensions
     * @param event - The original wheel event
     */
    private _onWheel(event: WheelEvent): void;
    /**
     * Handle resetting the form and re-drawing back to the original dimensions
     * @param event - The original click event
     */
    private _onReset(event: MouseEvent): void;
    /**
     * Scale the background size relative to the grid size
     * @param delta - The directional change in background size
     */
    private _scaleBackgroundSize(delta: number): void;
    /**
     * Scale the grid size relative to the background image.
     * When scaling the grid size in this way, constrain the allowed values between 50px and 300px.
     * @param delta - The grid size in pixels
     */
    private _scaleGridSize(delta: number): void;
    /**
     * Shift the background image relative to the grid layer
     * @param deltaX - The number of pixels to shift in the x-direction
     * @param deltaY - The number of pixels to shift in the y-direction
     */
    private _shiftBackground(deltaX: number, deltaY: number): void;
    /**
     * Temporarily refresh the display of the BackgroundLayer and GridLayer for the new pending dimensions
     * @param background - Refresh the background display?
     * @param grid - Refresh the grid display?
     */
    private _refresh(background: boolean, grid: boolean): void;
    /**
     * The object target which we are using this form to modify
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     */
    editors: {
        [key: string]: object;
    };
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * If the form is not editable, disable its input fields
     */
    private _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    private _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    private _getSubmitData(updateData: any): any;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     */
    private _onChangeColorPicker(): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    private _onChangeRange(event: Event): void;
    /**
     * Activate a named TinyMCE text editor
     * @param name - The named data field which the editor modifies.
     * @param options - TinyMCE initialization options passed to TextEditor.create
     * @param initialContent - Initial text content for the editor area.
     */
    activateEditor(name: string, options: any, initialContent: string): void;
    /**
     * Handle saving the content of a specific editor by name
     * @param name - The named editor to save
     * @param [remove] - Remove the editor after saving its content
     */
    saveEditor(name: string, remove?: boolean): Promise<void>;
    /**
     * Activate a TinyMCE editor instance present within the form
     */
    private _activateEditor(div: HTMLElement): void;
    /**
     * Activate a FilePicker instance present within the form
     */
    private _activateFilePicker(button: HTMLElement): void;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param [options] - Options passed to the _onSubmit event handler
     * @returns Return a self-reference for convenient method chaining
     */
    submit(options?: any): FormApplication;
    _createEditor(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    private _onChangeInput(event: Event): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * An Image Popout Application which features a single image in a lightbox style frame.
 * This popout can also be used as a form, allowing the user to edit an image which is being used.
 * Furthermore, this application allows for sharing the display of an image with other connected players.
 * @example
 * // Construct the Application instance
 * const ip = new ImagePopout("path/to/image.jpg", {
 *   title: "My Featured Image",
 *   shareable: true,
 *   entity: game.actors.getName("My Hero")
 * });
 *
 * // Display the image popout
 * ip.render(true);
 *
 * // Share the image with other connected players
 * ip.share();
 */
declare class ImagePopout extends FormApplication {
    static defaultOptions: any;
    /**
     * Test whether the title of the image popout should be visible to the user
     */
    isTitleVisible(): boolean;
    /**
     * Provide a reference to the Entity referenced by this popout, if one exists
     */
    getRelatedObject(): Promise<any>;
    _getHeaderButtons(): void;
    /**
     * Determine the correct position and dimensions for the displayed image
     * @returns The positioning object which should be used for rendering
     */
    private static getPosition(): any;
    /**
     * Determine the Image dimensions given a certain path
     */
    static getImageSize(): Promise<Number[]>;
    /**
     * Share the displayed image with other connected Users
     */
    shareImage(): void;
    /**
     * Handle a received request to display an image.
     */
    private static _handleShareImage(image: string, title: string, uuid: string): ImagePopout;
    /**
     * The object target which we are using this form to modify
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     */
    editors: {
        [key: string]: object;
    };
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * If the form is not editable, disable its input fields
     */
    private _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    private _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    private _getSubmitData(updateData: any): any;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    private _onChangeInput(event: Event): void;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     */
    private _onChangeColorPicker(): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    private _onChangeRange(event: Event): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * Activate a named TinyMCE text editor
     * @param name - The named data field which the editor modifies.
     * @param options - TinyMCE initialization options passed to TextEditor.create
     * @param initialContent - Initial text content for the editor area.
     */
    activateEditor(name: string, options: any, initialContent: string): void;
    /**
     * Handle saving the content of a specific editor by name
     * @param name - The named editor to save
     * @param [remove] - Remove the editor after saving its content
     */
    saveEditor(name: string, remove?: boolean): Promise<void>;
    /**
     * Activate a TinyMCE editor instance present within the form
     */
    private _activateEditor(div: HTMLElement): void;
    /**
     * Activate a FilePicker instance present within the form
     */
    private _activateFilePicker(button: HTMLElement): void;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param [options] - Options passed to the _onSubmit event handler
     * @returns Return a self-reference for convenient method chaining
     */
    submit(options?: any): FormApplication;
    _createEditor(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
}

/**
 * The default Item Sheet
 *
 * This Application is responsible for rendering an item's attributes and allowing the item to be edited.
 *
 * System modifications may elect to override this class to better suit their own game system by re-defining the value
 * ``CONFIG.Item.sheetClass``.
 * @param item - The Item instance being displayed within the sheet.
 * @param [options] - Additional options which modify the rendering of the item.
 */
declare class ItemSheet {
    constructor(item: Item, options?: any);
    static defaultOptions: any;
    id: any;
    /**
     * A convenience reference to the Item entity
     */
    item: Item;
    /**
     * The Actor instance which owns this item. This may be null if the item is unowned.
     */
    actor: Actor;
    getData(): void;
    _getHeaderButtons(): void;
    activateListeners(): void;
    /**
     * Handle requests to configure the default sheet used by this Item
     */
    private _onConfigureSheet(): void;
    /**
     * Handle changing the item image
     */
    private _onEditImage(): void;
}

declare interface JournalSheet extends BaseEntitySheet {
}

/**
 * The JournalEntry Configuration Sheet
 * @param entity - The JournalEntry instance which is being edited
 * @param [options] - Application options
 */
declare class JournalSheet implements BaseEntitySheet {
    constructor(entity: JournalEntry, options?: any);
    static defaultOptions: any;
    /**
     * Guess the default view mode for the sheet based on the player's permissions to the Entry
     */
    private _inferDefaultMode(): string;
    /**
     * Handle requests to switch the rendered mode of the Journal Entry sheet
     * Save the form before triggering the show request, in case content has changed
     * @param event - The triggering click event
     * @param mode - The journal mode to display
     */
    _onSwapMode(event: Event, mode: string): void;
    /**
     * Handle requests to show the referenced Journal Entry to other Users
     * Save the form before triggering the show request, in case content has changed
     * @param event - The triggering click event
     */
    _onShowPlayers(event: Event): void;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    _getHeaderButtons(): void;
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
}

/**
 * A Macro configuration sheet
 */
declare class MacroConfig extends BaseEntitySheet {
    static defaultOptions: any;
    /**
     * Handle changing the actor profile image by opening a FilePicker
     */
    private _onEditImage(): void;
    /**
     * Save and execute the macro using the button on the configuration sheet
     * @param event - The originating click event
     */
    private _onExecute(event: MouseEvent): Promise<void>;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
}

/**
 * A configuration Form Application for modifying the properties of a MeasuredTemplate object.
 */
declare class MeasuredTemplateConfig extends FormApplication {
    static defaultOptions: any;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * A generic application for configuring permissions for various Entity types
 */
declare class PermissionControl extends BaseEntitySheet {
    static defaultOptions: any;
}

/**
 * The Player Configuration application provides a form used to allow the current client to
 * edit preferences and configurations about their own User entity.
 * @param user - The User entity being configured.
 * @param options - Additional rendering options which modify the behavior of the form.
 */
declare class PlayerConfig {
    constructor(user: User, options: any);
    /**
     * Assign the default options which are supported by the entity edit sheet
     */
    static defaultOptions: any;
    /**
     * Provide data to the form
     * @returns The data provided to the template when rendering the form
     */
    getData(): any;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Handle changing the user avatar image by opening a FilePicker
     */
    private _onEditAvatar(): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     */
    private _updateObject(event: Event, formData: any): void;
}

/**
 * Playlist Configuration Sheet
 */
declare class PlaylistConfig extends BaseEntitySheet {
}

/**
 * Playlist Sound Configuration Sheet
 * @param playlist - The Playlist entity within which the Sound is configured
 * @param sound - An Object for the Playlist Sound data
 * @param options - Additional application rendering options
 */
declare class PlaylistSoundConfig {
    constructor(playlist: Playlist, sound: any, options: any);
    static defaultOptions: any;
    title: any;
    getData(): void;
    _updateObject(): void;
    activateListeners(): void;
    /**
     * Auto-populate the track name using the provided filename, if a name is not already set
     */
    private _onSourceChange(event: Event): void;
}

/**
 * The RollTable configuration sheet
 * @param table - The rollable table entity being configured
 * @param options - Additional application rendering options
 */
declare class RollTableConfig {
    constructor(table: RollTable, options: any);
    title: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Handle creating a TableResult in the RollTable entity
     * @param event - The originating mouse event
     * @param [resultData] - An optional object of result data to use
     */
    private _onCreateResult(event: MouseEvent, resultData?: any): Promise;
    /**
     * Submit the entire form when a table result type is changed, in case there are other active changes
     */
    private _onChangeResultType(event: Event): void;
    /**
     * Handle deleting a TableResult from the RollTable entity
     */
    private _onDeleteResult(event: any): Promise;
    _onDrop(): void;
    /**
     * Handle changing the actor profile image by opening a FilePicker
     */
    private _onEditImage(event: Event): void;
    /**
     * Handle a button click to re-normalize dice result ranges across all RollTable results
     */
    private _onNormalizeResults(event: Event): void;
    /**
     * Handle toggling the drawn status of the result in the table
     */
    private _onLockResult(event: Event): void;
    /**
     * Reset the Table to it's original composition with all options unlocked
     */
    private _onResetTable(event: Event): void;
    /**
     * Handle drawing a result from the RollTable
     */
    private _onRollTable(event: Event): void;
    /**
     * Configure the update object workflow for the Roll Table configuration sheet
     * Additional logic is needed here to reconstruct the results array from the editable fields on the sheet
     * @param event - The form submission event
     * @param formData - The validated FormData translated into an Object for submission
     */
    private _updateObject(event: Event, formData: any): Promise;
    /**
     * Display a roulette style animation when a Roll Table result is drawn from the sheet
     * @param results - An Array of drawn table results to highlight
     */
    private _animateRoll(results: object[]): Promise;
    /**
     * Animate a "roulette" through the table until arriving at the final loop and a drawn result
     */
    private _animateRoulette(): Promise<void>;
    /**
     * Display a flashing animation on the selected result to emphasize the draw
     * @param item - The HTML <li> item of the winning result
     */
    private _flashResult(item: HTMLElement): Promise<void>;
}

/**
 * A Scene configuration sheet
 */
declare class SceneConfig extends BaseEntitySheet {
    static defaultOptions: any;
    /**
     * Get an enumeration of the available grid types which can be applied to this Scene
     */
    private static _getGridTypes(): any;
    /**
     * Get the available weather effect types which can be applied to this Scene
     */
    private _getWeatherTypes(): any;
    /**
     * Get the alphabetized entities which can be chosen as a configuration for the scene
     */
    private _getEntities(collection: EntityCollection): object[];
    /**
     * Capture the current Scene position and zoom level as the initial view in the Scene config
     * @param event - The originating click event
     */
    private _onCapturePosition(event: Event): void;
    /**
     * Handle click events to open the grid configuration application
     * @param event - The originating click event
     */
    private _onGridConfig(event: Event): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    private _onChangeRange(event: Event): void;
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
}

/**
 * Entity Sheet Configuration Application
 * @param entity - The Entity object for which the sheet is being configured
 * @param options - Additional Application options
 */
declare class EntitySheetConfig {
    constructor(entity: Entity, options: any);
    /**
     * Add the Entity name into the window title
     */
    title: string;
    /**
     * Construct and return the data object used to render the HTML template for this form application.
     */
    getData(): any;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     */
    private _updateObject(event: Event, formData: any): void;
    /**
     * Initialize the configured Sheet preferences for Entities which support dynamic Sheet assignment
     * Create the configuration structure for supported entities
     * Process any pending sheet registrations
     * Update the default values from settings data
     */
    static initializeSheets(): void;
    /**
     * Register a sheet class as a candidate which can be used to display entities of a given type
     * @param entityClass - The Entity for which to register a new Sheet option
     * @param scope - Provide a unique namespace scope for this sheet
     * @param sheetClass - A defined Application class used to render the sheet
     * @param options - Additional options used for sheet registration
     * @param [options.label] - A human readable label for the sheet name, which will be localized
     * @param [options.types] - An array of entity types for which this sheet should be used
     * @param [options.makeDefault] - Whether to make this sheet the default for provided types
     */
    static registerSheet(entityClass: Entity, scope: string, sheetClass: Application, options: {
        label?: string;
        types?: string[];
        makeDefault?: boolean;
    }): void;
    /**
     * Unregister a sheet class, removing it from the list of available Applications to use for an Entity type
     * @param entityClass - The Entity for which to register a new Sheet option
     * @param scope - Provide a unique namespace scope for this sheet
     * @param sheetClass - A defined Application class used to render the sheet
     * @param types - An Array of types for which this sheet should be removed
     */
    static unregisterSheet(entityClass: Entity, scope: string, sheetClass: Application, types: object[]): void;
    /**
     * Update the currently default Sheets using a new core world setting
     */
    private static _updateDefaultSheets(setting: any): void;
}

/**
 * The Chat Bubble Class
 * This application displays a temporary message sent from a particular Token in the active Scene.
 * The message is displayed on the HUD layer just above the Token.
 */
declare class ChatBubbles {
    /**
     * Track active Chat Bubbles
     */
    bubbles: any;
    /**
     * Track which Token was most recently panned to highlight
     * Use this to avoid repeat panning
     */
    private _panned: Token;
    /**
     * A reference to the chat bubbles HTML container in which rendered bubbles should live
     */
    container: any;
    /**
     * Speak a message as a particular Token, displaying it as a chat bubble
     * @param token - The speaking Token
     * @param message - The spoken message text
     * @param emote - Whether to style the speech bubble as an emote
     * @returns A Promise which resolves once the chat bubble has been created
     */
    say(token: Token, message: string, emote: boolean): Promise<void>;
    /**
     * Clear any existing chat bubble for a certain Token
     */
    private _clearBubble(token: Token): void;
    /**
     * Render the HTML template for the chat bubble
     * @param data - Template data
     * @returns The rendered HTML
     */
    private _renderHTML(data: any): Promise<string>;
    /**
     * Before displaying the chat message, determine it's constrained and unconstrained dimensions
     * @param message - The message content
     * @returns The rendered message dimensions
     */
    private _getMessageDimensions(message: string): any;
    /**
     * Assign styling parameters to the chat bubble, toggling either a left or right display (randomly)
     */
    private _setPosition(): void;
    /**
     * Determine the length of time for which to display a chat bubble.
     * Research suggests that average reading speed is 200 words per minute.
     * Since these are short-form messages, we multiply reading speed by 1.5.
     * Clamp the result between 1 second (minimum) and 20 seconds (maximum)
     * @param The - HTML message
     * @returns The number of milliseconds for which to display the message
     */
    _getDuration(The: jQuery): number;
}

/**
 * Render the HUD container
 */
declare class HeadsUpDisplay {
    /**
     * Token HUD
     */
    token: TokenHUD;
    /**
     * Tile HUD
     */
    tile: TileHUD;
    /**
     * Drawing HUD
     */
    drawing: DrawingHUD;
    /**
     * Chat Bubbles
     */
    bubbles: ChatBubbles;
    /**
     * Define default options which configure the HUD
     */
    static defaultOptions: any;
}

declare type SceneControl = any;

/**
 * Scene controls navigation menu
 */
declare class SceneControls extends Application {
    /**
     * The name of the active Scene Control toolset
     */
    activeControl: string;
    /**
     * The Array of Scene Control buttons which are currently rendered
     */
    controls: SceneControl[];
    static defaultOptions: any;
    /**
     * Return the active control set
     */
    control: SceneControl | null;
    /**
     * Return the name of the active tool within the active control set
     */
    activeTool: string | null;
    /**
     * Return the actively controlled tool
     */
    tool: SceneControlTool | null;
    /**
     * A convenience reference for whether the currently active tool is a Ruler
     */
    isRuler: boolean;
    /**
     * Initialize the Scene Controls by obtaining the set of control buttons and rendering the HTML
     * @param options - Options which modify how the controls UI is initialized
     * @param [options.control] - An optional control set to set as active
     * @param [options.layer] - An optional layer name to target as the active control
     * @param [options.tool] - A specific named tool to set as active for the palette
     */
    initialize(options: {
        control?: string;
        layer?: string;
        tool?: string;
    }): void;
    /**
     * Handle click events on a Control set
     * @param event - A click event on a tool control
     */
    private _onClickLayer(event: Event): void;
    /**
     * Handle click events on Tool controls
     * @param event - A click event on a tool control
     */
    private _onClickTool(event: Event): void;
    /**
     * Get the set of Control sets and tools that are rendered as the Scene Controls.
     * These controls may be extended using the "getSceneControlButtons" Hook.
     */
    private _getControlButtons(): SceneControl[];
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    private _render(force: boolean, options: any): Promise<void>;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderInner(data: any): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
}

/**
 * The global action bar displayed at the bottom of the game view.
 * The Hotbar is a UI element at the bottom of the screen which contains Macros as interactive buttons.
 * The Hotbar supports 5 pages of global macros which can be dragged and dropped to organize as you wish.
 *
 * Left clicking a Macro button triggers its effect.
 * Right clicking the button displays a context menu of Macro options.
 * The number keys 1 through 0 activate numbered hotbar slots.
 * Pressing the delete key while hovering over a Macro will remove it from the bar.
 */
declare class Hotbar extends Application {
    /**
     * The currently viewed macro page
     */
    page: number;
    /**
     * The currently displayed set of macros
     */
    macros: Macro[];
    /**
     * Track collapsed state
     */
    _collapsed: boolean;
    /**
     * Track which hotbar slot is the current hover target, if any
     */
    _hover: number | null;
    static defaultOptions: any;
    /**
     * Get the Array of Macro (or null) values that should be displayed on a numbered page of the bar
     */
    private _getMacrosByPage(page: number): Macro[];
    /**
     * Collapse the Hotbar, minimizing its display.
     * @returns A promise which resolves once the collapse animation completes
     */
    collapse(): Promise;
    /**
     * Expand the Hotbar, displaying it normally.
     * @returns A promise which resolves once the expand animation completes
     */
    expand(): Promise;
    /**
     * Change to a specific numbered page from 1 to 5
     * @param page - The page number to change to.
     */
    changePage(page: number): void;
    /**
     * Change the page of the hotbar by cycling up (positive) or down (negative)
     * @param direction - The direction to cycle
     */
    cyclePage(direction: number): void;
    /**
     * Create a Context Menu attached to each Macro button
     */
    private _contextMenu(html: any): void;
    /**
     * Handle left-click events to
     */
    private _onClickMacro(event: any): void;
    /**
     * Handle hover events on a macro button to track which slot is the hover target
     * @param event - The originating mouseover or mouseleave event
     */
    private _onHoverMacro(event: Event): void;
    /**
     * Handle pagination controls
     * @param event - The originating click event
     */
    private _onClickPageControl(event: Event): void;
    /**
     * Get the Macro entity being dropped in the Hotbar. If the data comes from a non-World source, create the Macro
     * @param data - The data transfer attached to the DragEvent
     * @returns A Promise which returns the dropped Macro, or null
     */
    private _getDropMacro(data: any): Promise<Macro | null>;
    /**
     * Handle click events to toggle display of the macro bar
     */
    private _onToggleBar(event: Event): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    private _render(force: boolean, options: any): Promise<void>;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderInner(data: any): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
}

declare namespace BasePlaceableHUD {
    var defaultOptions: any;
}

/**
 * An abstract base class for displaying a heads-up-display interface bound to a Placeable Object on the canvas
 */
declare interface BasePlaceableHUD {
    /**
     * Reference a PlaceableObject this HUD is currently bound to
     */
    object: PlaceableObject;
    /**
     * Convenience access for the canvas layer which this HUD modifies
     */
    layer: PlaceablesLayer;
    /**
     * Bind the HUD to a new PlaceableObject and display it
     * @param object - A PlaceableObject instance to which the HUD should be bound
     */
    bind(object: PlaceableObject): void;
    /**
     * Clear the HUD by fading out it's active HTML and recording the new display state
     */
    clear(): void;
    _render(): void;
    getData(): void;
    setPosition(): void;
    activateListeners(): void;
    /**
     * Toggle the visible state of all controlled objects in the Layer
     * @param event - The originating click event
     */
    _onToggleVisibility(event: PointerEvent): void;
    /**
     * Toggle locked state of all controlled objects in the Layer
     * @param event - The originating click event
     */
    _onToggleLocked(event: PointerEvent): void;
    /**
     * Handle sorting the z-order of the object
     */
    _onSort(event: any, up: any): Promise<void>;
}

/**
 * A simple main menu application
 */
declare class MainMenu {
    /**
     * The structure of menu items
     */
    items: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Toggle display of the menu (or render it in the first place)
     */
    toggle(): void;
}

/**
 * Top menu scene navigation
 */
declare class SceneNavigation {
    /**
     * Navigation collapsed state
     */
    _collapsed: boolean;
    /**
     * Assign the default options which are supported by the SceneNavigation UI
     */
    static defaultOptions: any;
    /**
     * Return an Array of Scenes which are displayed in the Navigation bar
     */
    scenes: any;
    render(): void;
    _render(): void;
    getData(): void;
    /**
     * Expand the SceneNavigation menu, sliding it down if it is currently collapsed
     */
    expand(): void;
    /**
     * Collapse the SceneNavigation menu, sliding it up if it is currently expanded
     */
    collapse(): Promise<boolean>;
    /**
     * Activate Scene Navigation event listeners
     */
    activateListeners(html: any): void;
    /**
     * Get the set of ContextMenu options which should be applied for Scenes in the menu
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getContextMenuOptions(): object[];
    /**
     * Handle left-click events on the scenes in the navigation menu
     */
    private _onClickScene(event: Event): void;
    _onDragStart(): void;
    _onDrop(): void;
    /**
     * Handle navigation menu toggle click events
     */
    private _onToggleNav(event: Event): void;
}

/**
 * Pause notification in the HUD
 */
declare class Pause {
    /**
     * Prepare the default data which is required to render the Pause UI
     */
    getData(): void;
}

/**
 * The active Player List application
 */
declare class PlayerList extends Application {
    /**
     * An internal toggle for whether or not to show offline players or hide them
     */
    private _showOffline: boolean;
    static defaultOptions: any;
    /**
     * Return the default context options available for the Players application
     */
    private _getUserContextOptions(): object[];
    /**
     * Toggle display of the Players hud setting for whether or not to display offline players
     * @param event - The originating click event
     */
    private _onToggleOfflinePlayers(event: Event): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    private _render(force: boolean, options: any): Promise<void>;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderInner(data: any): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
}

/**
 * Audio/Video Conferencing Configuration Sheet
 */
declare class AVConfig {
    static defaultOptions: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Set a section's input to enabled or disabled
     * @param selector - Selector for the section to enable or disable
     * @param enabled - Whether to enable or disable this section
     */
    private _setConfigSectionEnabled(selector: string, enabled?: boolean): void;
    /**
     * Callback when the server type changes
     * Will enable or disable the server section based on whether the user selected a custom server or not
     * @param event - The event that triggered the server type change
     */
    private _onServerTypeChanged(event: Event): void;
    /**
     * Callback when the turn server type changes
     * Will enable or disable the turn section based on whether the user selected a custom turn or not
     * @param event - The event that triggered the turn server type change
     */
    private _onTurnTypeChanged(event: Event): void;
    /**
     * Handle the assignment of a push-to-talk/push-to-mute key
     */
    private _onPTTKeyDown(event: Event): void;
    /**
     * Handle the assignment of a push-to-talk/push-to-mute mouse key
     */
    private _onPTTMouseDown(event: Event): void;
    _updateObject(): void;
}

/**
 * Abstraction of the Application interface to be used with the Draggable class as a substitute for the app
 * This class will represent one popout feed window and handle its positioning and draggability
 * @param view - The CameraViews application that this popout belongs to
 * @param userId - ID of the user this popout belongs to
 * @param element - The div element of this specific popout window
 */
declare class CameraPopoutAppWrapper {
    constructor(view: CameraViews, userId: string, element: jQuery);
    /**
     * Get the current position of this popout window
     */
    position: any;
    setPosition(): void;
    bringToTop(): void;
}

/**
 * The Camera UI View that displays all the camera feeds as individual video elements.
 * @param webrtc - The WebRTC Implementation to display
 */
declare class CameraViews {
    constructor(webrtc: WebRTC);
    static defaultOptions: any;
    /**
     * A reference to the master AV orchestrator instance
     */
    webrtc: AVMaster;
    /**
     * Obtain a reference to the div.camera-view which is used to portray a given Foundry User.
     * @param userId - The ID of the User entity
     */
    getUserCameraView(userId: string): HTMLElement | null;
    /**
     * Obtain a reference to the video.user-camera which displays the video channel for a requested Foundry User.
     * If the user is not broadcasting video this will return null.
     * @param userId - The ID of the User entity
     */
    getUserVideoElement(userId: string): HTMLVideoElement | null;
    /**
     * Sets whether a user is currently speaking or not
     * @param userId - The ID of the user
     * @param speaking - Whether the user is speaking
     */
    setUserIsSpeaking(userId: string, speaking: boolean): void;
    /**
     * Extend the render logic to first check whether a render is necessary based on the context
     * If a specific context was provided, make sure an update to the navigation is necessary before rendering
     */
    render(): void;
    _render(): void;
    getData(): void;
    /**
     * Prepare rendering data for a single user
     */
    private _getDataForUser(): void;
    /**
     * A custom sorting function that orders/arranges the user display frames
     */
    private static _sortUsers(): number;
    activateListeners(): void;
    /**
     * Change volume control for a stream
     * @param event - The originating change event from interaction with the range input
     */
    private _onVolumeChange(event: Event): void;
    /**
     * Dynamically refresh the state of a single camera view
     * @param view - The view container div
     */
    private _refreshView(view: HTMLElement): void;
    /**
     * Render changes needed to the PlayerList ui.
     * Show/Hide players depending on option.
     */
    private _setPlayerListVisibility(): void;
    /**
     * Get the icon class that should be used for various action buttons with different toggled states.
     * The returned icon should represent the visual status of the NEXT state (not the CURRENT state).
     * @param action - The named av-control button action
     * @param state - The CURRENT action state.
     * @returns The icon that represents the NEXT action state.
     */
    private _getToggleIcon(action: string, state: boolean): string;
    /**
     * Get the text title that should be used for various action buttons with different toggled states.
     * The returned title should represent the tooltip of the NEXT state (not the CURRENT state).
     * @param action - The named av-control button action
     * @param state - The CURRENT action state.
     * @returns The icon that represents the NEXT action state.
     */
    private _getToggleTooltip(action: string, state: boolean): string;
    /**
     * Show or hide UI control elements
     * This replaces the use of jquery.show/hide as it simply adds a class which has display:none
     * which allows us to have elements with display:flex which can be hidden then shown without
     * breaking their display style.
     * This will show/hide the toggle buttons, volume controls and overlay sidebars
     * @param container - The container for which to show/hide control elements
     * @param show - Whether to show or hide the controls
     * @param selector - Override selector to specify which controls to show or hide
     */
    private _toggleControlVisibility(container: jQuery, show: boolean, selector: string): void;
}

/**
 * Configuration sheet for the Drawing object
 * @param drawing - The Drawing object being configured
 * @param options - Additional application rendering options
 * @param [options.preview] - Configure a preview version of the Drawing which is not yet saved
 */
declare class DrawingConfig {
    constructor(drawing: Drawing, options: {
        preview?: boolean;
    });
    title: any;
    getData(): void;
    /**
     * Get the names and labels of fill type choices which can be applied
     */
    private static _getFillTypes(): any;
    _updateObject(): void;
    close(): void;
    activateListeners(): void;
    /**
     * Reset the user Drawing configuration settings to their default values
     */
    private _onResetDefaults(event: any): void;
}

/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Drawing objects.
 */
declare class DrawingHUD extends BasePlaceableHUD {
    static defaultOptions: any;
    getData(): void;
    setPosition(): void;
}

declare interface LightConfig extends FormApplication {
}

/**
 * Light Source Configuration Sheet
 * @param light - The AmbientLight object for which settings are being configured
 * @param options - LightConfig ui options (see Application)
 */
declare class LightConfig implements FormApplication {
    constructor(light: AmbientLight, options: any);
    static defaultOptions: any;
    /**
     * Preview the change caused by a change on the form by refreshing the display of the light source
     */
    private _onPreviewChange(): void;
    /**
     * Reset the state of the previewed light source object to its original data
     */
    private _resetObject(): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    private _getSubmitData(updateData: any): any;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * Placeable Note configuration sheet
 * @param note - The Note object for which settings are being configured
 * @param options - Additional Application options
 */
declare class NoteConfig {
    constructor(note: Note, options: any);
    static defaultOptions: any;
    getData(): void;
    _updateObject(): void;
    close(): void;
}

/**
 * Ambient Sound Config Sheet
 * @param sound - The sound object being configured
 * @param options - Additional application rendering options
 * @param options.preview - Configure a preview version of a sound which is not yet saved
 */
declare class AmbientSoundConfig extends FormApplication {
    constructor(sound: AmbientSound, options: {
        preview: boolean;
    });
    static defaultOptions: any;
    /**
     * The object target which we are using this form to modify
     */
    object: any;
    /**
     * A convenience reference to the form HTMLElement
     */
    form: HTMLElement;
    /**
     * Keep track of any FilePicker instances which are associated with this form
     * The values of this Array are inner-objects with references to the FilePicker instances and other metadata
     */
    filepickers: FilePicker[];
    /**
     * Keep track of any mce editors which may be active as part of this form
     * The values of this object are inner-objects with references to the MCE editor and other metadata
     */
    editors: {
        [key: string]: object;
    };
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * If the form is not editable, disable its input fields
     */
    private _disableFields(form: HTMLElement): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    private _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * Get an object of update data used to update the form's target object
     * @param updateData - Additional data that should be merged with the form data
     * @returns The prepared update data
     */
    private _getSubmitData(updateData: any): any;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    private _onChangeInput(event: Event): void;
    /**
     * Handle the change of a color picker input which enters it's chosen value into a related input field
     */
    private _onChangeColorPicker(): void;
    /**
     * Handle changes to a range type input by propagating those changes to the sibling range-value element
     * @param event - The initial change event
     */
    private _onChangeRange(event: Event): void;
    /**
     * Activate a named TinyMCE text editor
     * @param name - The named data field which the editor modifies.
     * @param options - TinyMCE initialization options passed to TextEditor.create
     * @param initialContent - Initial text content for the editor area.
     */
    activateEditor(name: string, options: any, initialContent: string): void;
    /**
     * Handle saving the content of a specific editor by name
     * @param name - The named editor to save
     * @param [remove] - Remove the editor after saving its content
     */
    saveEditor(name: string, remove?: boolean): Promise<void>;
    /**
     * Activate a TinyMCE editor instance present within the form
     */
    private _activateEditor(div: HTMLElement): void;
    /**
     * Activate a FilePicker instance present within the form
     */
    private _activateFilePicker(button: HTMLElement): void;
    /**
     * Submit the contents of a Form Application, processing its content as defined by the Application
     * @param [options] - Options passed to the _onSubmit event handler
     * @returns Return a self-reference for convenient method chaining
     */
    submit(options?: any): FormApplication;
    _createEditor(): void;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * Tile Config Sheet
 * @param tile - The Tile object being configured
 * @param options - Additional application rendering options
 * @param options.preview - Configure a preview version of a tile which is not yet saved
 */
declare class TileConfig extends FormApplication {
    constructor(tile: Tile, options: {
        preview: boolean;
    });
    static defaultOptions: any;
    /**
     * Handle changes to an input element, submitting the form if options.submitOnChange is true.
     * Do not preventDefault in this handler as other interactions on the form may also be occurring.
     * @param event - The initial change event
     */
    private _onChangeInput(event: Event): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.
 */
declare class TileHUD extends BasePlaceableHUD {
    static defaultOptions: any;
    getData(): void;
    setPosition(): void;
}

/**
 * A Token Configuration Application
 * @param token - The Token object for which settings are being configured
 * @param options - TokenConfig ui options (see Application)
 * @param [options.configureDefault] - Configure the default actor token on submit
 */
declare class TokenConfig {
    constructor(token: Token, options: {
        configureDefault?: boolean;
    });
    static defaultOptions: any;
    id: any;
    /**
     * Convenience access for the Token object
     */
    token: Token;
    /**
     * Convenience access for the Token's linked Actor, if any
     */
    actor: Actor | null;
    title: any;
    getData(): void;
    render(): void;
    /**
     * Inspect the Actor data model and identify the set of attributes which could be used for a Token Bar
     */
    static getTrackedAttributeChoices(): string[];
    /**
     * Test whether an individual data object is a valid attribute - containing both a "value" and "max" field
     * @param data - The data object to search
     * @param _path - The attribute path being recursed
     * @returns An object containing both bar and value attribute paths
     */
    private static getTrackedAttributes(data: any, _path: string[]): any;
    /**
     * Get an Object of image paths and filenames to display in the Token sheet
     */
    private _getAlternateTokenImages(): Promise;
    activateListeners(): void;
    _getSubmitData(): void;
    _updateObject(): void;
    /**
     * Update certain fields of a linked actor token when token configuration is changed
     * @param tokenData - The new token data
     */
    _updateActorData(tokenData: any): void;
    /**
     * Handle Token assignment requests to update the default prototype Token
     * @param event - The left-click event on the assign token button
     */
    private _onAssignToken(event: MouseEvent): void;
    /**
     * Handle changing the attribute bar in the drop-down selector to update the default current and max value
     */
    private _onBarChange(): void;
}

/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Token objects.
 * This interface provides controls for visibility, attribute bars, elevation, status effects, and more.
 */
declare class TokenHUD {
    /**
     * Track whether the status effects control palette is currently expanded or hidden
     */
    private _statusEffects: boolean;
    static defaultOptions: any;
    bind(): void;
    /**
     * Refresh the currently active state of all status effect icons in the Token HUD selector.
     */
    refreshStatusIcons(): void;
    setPosition(): void;
    getData(): void;
    /**
     * Get an array of icon paths which represent valid status effect choices
     */
    private _getStatusEffectChoices(): void;
    activateListeners(): void;
    /**
     * Handle initial click to focus an attribute update field
     */
    private _onAttributeClick(): void;
    /**
     * Force field handling on an Enter keypress even if the value of the field did not change.
     * This is important to suppose use cases with negative number values.
     * @param event - The originating keydown event
     */
    private _onAttributeKeydown(event: KeyboardEvent): void;
    /**
     * Handle attribute bar update
     */
    private _onAttributeUpdate(): void;
    /**
     * Toggle Token combat state
     */
    private _onToggleCombat(): void;
    /**
     * Handle Token configuration button click
     */
    private _onTokenConfig(): void;
    /**
     * Handle left-click events to toggle the displayed state of the status effect selection palette
     */
    private _onClickStatusEffects(event: MouseEvent): void;
    /**
     * Assign css selectors for the active state of the status effects selection palette
     */
    private _toggleStatusEffects(): void;
    /**
     * Handle toggling a token status effect icon
     */
    private _onToggleEffect(): void;
    /**
     * Handle toggling the target state for this Token
     */
    private _onToggleTarget(): void;
}

/**
 * Wall Configuration Sheet
 * @param object - The Wall object for which settings are being configured
 * @param options - Additional options which configure the rendering of the configuration sheet.
 */
declare class WallConfig {
    constructor(object: Wall, options: any);
    /**
     * Provide a dynamically rendered title for the Wall Configuration sheet
     */
    title: string;
    /**
     * Construct and return the data object used to render the HTML template for this form application.
     */
    getData(): any;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     */
    private _updateObject(event: Event, formData: any): void;
}

/**
 * The End User License Agreement
 * Display the license agreement and prompt the user to agree before moving forwards
 */
declare class EULA {
    /**
     * A reference to the setup URL used under the current route prefix, if any
     */
    licenseURL: any;
    getData(): void;
    _renderOuter(): void;
    activateListeners(): void;
    /**
     * Handle refusal of the EULA by checking the decline button
     * @param event - The originating click event
     */
    _onDecline(event: MouseEvent): void;
    /**
     * Validate form submission before sending it onwards to the server
     */
    _onSubmit(event: any): void;
}

/**
 * A special class of Dialog which allows for the installation of Packages.
 */
declare class InstallPackage extends Application {
    /**
     * The instance of the setup form to which this is linked
     */
    setup: SetupConfigurationForm;
    /**
     * The category being filtered for
     */
    _category: string;
    /**
     * The visibility being filtered for
     */
    _visibility: string;
    static defaultOptions: any;
    /**
     * Handle left-click events to filter to a certain module category
     */
    private _onClickCategoryFilter(event: MouseEvent): void;
    /**
     * Handle left-click events to filter to a certain visibility state
     */
    private _onClickVisibilityFilter(event: MouseEvent): void;
    /**
     * Handle a left-click event on the package title
     */
    private _onClickPackageTitle(event: MouseEvent): void;
    /**
     * Handle a left-click event on the package "Install" button
     */
    private _onClickPackageInstall(event: MouseEvent): void;
    /**
     * Organize package data and cache it to the application
     * @param type - The type of packages being retrieved
     * @returns The retrieved or cached packages
     */
    static getPackages(type: string): object[];
    /**
     * A cached object of retrieved packages from the web server
     */
    static cache: any;
    /**
     * The options provided to this application upon initialization
     */
    options: any;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     */
    appId: number;
    /**
     * An internal reference to the HTML element this application renders
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     */
    position: any;
    /**
     * DragDrop workflow handlers which are active for this Application
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     */
    private _minimized: boolean;
    /**
     * Track the render state of the Application
     */
    private _state: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     */
    _scrollPositions: any | null;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns An array of DragDrop handlers
     */
    private _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns An array of Tabs handlers
     */
    private _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns An array of SearchFilter handlers
     */
    private _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     */
    id: any;
    /**
     * Return the active application element, if it currently exists in the DOM
     */
    element: jQuery | HTMLElement;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     */
    template: string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     */
    popOut: boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     */
    rendered: boolean;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @param force - Render and display the application even if it is not currently displayed.
     * @param options - Provided rendering options, see the render function for details
     * @returns A Promise that resolves to the Application once rendering is complete
     */
    private _render(force: boolean, options: any): Promise<void>;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to save
     */
    private _saveScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param html - The HTML object being traversed
     * @param selectors - CSS selectors which designate elements to restore
     */
    private _restoreScrollPositions(html: jQuery, selectors: string[]): void;
    /**
     * Render the outer application wrapper
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderOuter(): Promise<HTMLElement>;
    /**
     * Render the inner application content
     * @param data - The data used to render the inner template
     * @returns A promise resolving to the constructed jQuery object
     */
    private _renderInner(data: any): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param element - The original HTML element
     * @param html - New updated HTML
     */
    private _replaceHTML(element: HTMLElement | jQuery, html: HTMLElement | jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOC
     */
    private _injectHTML(html: jQuery): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param event - A left click event
     * @param tabs - The Tabs controller
     * @param active - The new active tab name
     */
    private _onChangeTab(event: MouseEvent, tabs: Tabs, active: string): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param selector - The candidate HTML selector for dragging
     * @returns Can the current user drag this selector?
     */
    private _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param selector - The candidate HTML selector for the drop target
     * @returns Can the current user drop on this selector?
     */
    private _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param event - The originating DragEvent
     */
    private _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param event - The originating DragEvent
     */
    private _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param event - The originating DragEvent
     */
    private _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @returns A Promise which resolves once the application is closed
     */
    close(): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store it's new location.
     * @param left - The left offset position in pixels
     * @param top - The top offset position in pixels
     * @param width - The application width in pixels
     * @param height - The application height in pixels
     * @param scale - The application scale as a numeric factor where 1.0 is default
     * @returns The updated position object for the application containing the new values
     */
    setPosition(left: number | null, top: number | null, width: number | null, height: number | string | null, scale: number | null): any;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     */
    private _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     */
    private _onResize(event: Event): void;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     */
    title: string;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Render the Application by evaluating it's HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     * @param force - Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param options - Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     * @param options.left - The left positioning attribute
     * @param options.top - The top positioning attribute
     * @param options.width - The rendered width
     * @param options.height - The rendered height
     * @param options.scale - The rendered transformation scale
     * @param options.log - Whether to display a log message that the Application was rendered
     * @param options.renderContext - A context-providing string which suggests what event triggered the render
     * @param options.renderData - The data change which motivated the render request
     */
    render(force: boolean, options: {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
        log: boolean;
        renderContext: string;
        renderData: any;
    }): void;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
}

/**
 * The Package Configuration setup application
 */
declare class SetupConfigurationForm {
    /**
     * Valid Game Systems to choose from
     */
    systems: object[];
    /**
     * Install Modules to configure
     */
    modules: object[];
    /**
     * The Array of available Worlds to load
     */
    worlds: object[];
    /**
     * The currently inspected World
     */
    currentWorld: string;
    /**
     * The currently viewed tab
     */
    _tab: string;
    /**
     * Track the button elements which represent updates for different named packages
     */
    _progressButton: HTMLElement | null;
    static defaultOptions: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Post the setup configuration form
     */
    private _post(data: any): Promise;
    /**
     * Reload the setup view by re-acquiring setup data and re-rendering the form
     */
    private reload(): void;
    /**
     * Generic button handler for the setup form which submits a POST request including any dataset on the button itself
     * @param event - The originating mouse click event
     */
    private _onSubmitButton(event: MouseEvent): Promise;
    /**
     * Confirm user intent when saving admin changes to the application configuration
     * @param event - The originating mouse click event
     */
    private _onSaveAdmin(event: MouseEvent): Promise;
    /**
     * Begin creation of a new World using the config form
     * @param event - The originating mouse click event
     */
    private _onWorldConfig(event: MouseEvent): void;
    /**
     * Handle install button clicks to add new packages
     */
    private _onInstallPackageDialog(event: Event): void;
    /**
     * Handle update button press for a single Package
     */
    private _onUpdatePackage(event: Event): void;
    /**
     * Execute upon an update check for a single Package
     * @param type - The package type to check
     * @param name - The package name to check
     * @param button - The update button for the package
     */
    private _updateCheckOne(type: string, name: string, button: HTMLElement): Promise<boolean>;
    /**
     * Execute upon an update download for a single Package
     * Returns a Promise which resolves once the download has successfully started
     * @param type - The package type to install
     * @param name - The package name to install
     * @param button - The Download button
     */
    private _updateDownloadOne(type: string, name: string, button: HTMLElement): Promise;
    /**
     * Handle uninstall button clicks to remove existing packages
     */
    private _onUninstallPackage(event: Event): void;
    /**
     * Execute upon an update-all workflow to update all packages of a certain type
     */
    private _onUpdatePackages(event: Event): void;
    /**
     * Handle button clicks to update the core VTT software
     */
    private _onCoreUpdate(event: Event): void;
    /**
     * Activate socket listeners related to the Setup Configuration form
     */
    activateSocketListeners(): void;
    /**
     * Update the display of an installation progress bar for a particular progress packet
     * @param data - The progress update data
     */
    private _updateProgressBar(data: any): void;
    /**
     * Update installation progress for a particular button which triggered the action
     * @param data - The progress update data
     */
    private _updateProgressButton(data: any): void;
}

/**
 * The client side Updater application
 * This displays the progress of patching/update progress for the VTT
 */
declare class UpdateNotes {
    static defaultOptions: any;
    title: any;
    getData(): void;
    activateListeners(): void;
}

/**
 * The User Management setup application
 */
declare class UserManagement extends FormApplication {
    static defaultOptions: any;
    /**
     * Reveal the access key for each player so that it can be learned without being changed
     */
    private _onKeyShow(): void;
    /**
     * Handle new user creation event
     */
    private _onAction(): void;
    /**
     * Handle creating a new User record in the form
     */
    private _onUserCreate(): void;
    /**
     * Handle user deletion event
     */
    private _onUserDelete(): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * The World Management setup application
 */
declare class WorldConfig {
    title: any;
    getData(): void;
    _onSubmit(): void;
}

/**
 * A game settings configuration application
 * This form renders the settings defined via the game.settings.register API which have config = true
 */
declare class SettingsConfig extends FormApplication {
    static defaultOptions: any;
    /**
     * Handle activating the button to configure User Role permissions
     * @param event - The initial button click event
     */
    private _onClickSubmenu(event: Event): void;
    /**
     * Handle button click to reset default settings
     * @param event - The initial button click event
     */
    private _onResetDefaults(event: Event): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * Keyboard Controls Reference Sheet
 */
declare class ControlsReference {
}

/**
 * Game Invitation Links Reference
 */
declare class InvitationLinks extends Application {
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     */
    getData(): any | Promise;
    /**
     * Once the HTML for an Application has been rendered, activate event listeners which provide interactivity for
     * the application
     */
    activateListeners(html: jQuery): void;
}

declare interface ModuleManagement extends FormApplication {
}

/**
 * The Module Management Application.
 * This application provides a view of which modules are available to be used and allows for configuration of the
 * set of modules which are active within the World.
 */
declare class ModuleManagement implements FormApplication {
    static defaultOptions: any;
    /**
     * Handle changes to a module checkbox to prompt for whether or not to enable dependencies
     */
    private _onChangeCheckbox(): void;
    /**
     * Handle a button-click to deactivate all modules
     */
    private _onDeactivateAll(): void;
    /**
     * Handle expanding or collapsing the display of descriptive elements
     */
    private _onExpandCollapse(): void;
    /**
     * Handle a button-click to deactivate all modules
     */
    private _onFilterList(): void;
    /**
     * Is the Form Application currently editable?
     */
    isEditable: boolean;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param event - The key-up event from keyboard input
     * @param query - The regular expression to test against
     * @param html - The HTML element which should be filtered
     */
    private _onSearchFilter(event: KeyboardEvent, query: RegExp, html: HTMLElement): void;
}

/**
 * An application for configuring the permissions which are available to each User role.
 */
declare class PermissionConfig extends FormApplication {
    static defaultOptions: any;
    /**
     * Prepare the permissions object used to render the configuration template
     */
    private _getPermissions(): object[];
    /**
     * Handle button click to reset default settings
     * @param event - The initial button click event
     */
    private _onResetDefaults(event: Event): void;
    /**
     * Activate the default set of listeners for the Entity sheet
     * These listeners handle basic stuff like form submission or updating images
     * @param html - The rendered template ready to have listeners attached
     */
    activateListeners(html: JQuery): void;
    /**
     * Handle standard form submission steps
     * @param event - The submit event which triggered this handler
     * @param [updateData] - Additional specific data keys/values which override or extend the contents of
     *                                    the parsed form. This can be used to update other flags or data fields at the
     *                                    same time as processing a form submission to avoid multiple database operations.
     * @param [preventClose] - Override the standard behavior of whether to close the form on submit
     * @param [preventRender] - Prevent the application from re-rendering as a result of form submission
     * @returns A promise which resolves to the validated update data
     */
    private _onSubmit(event: Event, updateData?: any | null, preventClose?: boolean, preventRender?: boolean): Promise;
    /**
     * This method is called upon form submission after form data is validated
     * @param event - The initial triggering submission event
     * @param formData - The object of validated form data with which to update the object
     * @returns A Promise which resolves once the update operation has completed
     */
    _updateObject(event: Event, formData: any): Promise;
}

/**
 * A directory list of Actor entities in the Sidebar
 */
declare class ActorDirectory {
    static entity: any;
    static collection: any;
    getData(): void;
    _canDragStart(): void;
    _onDragStart(): void;
    _canDragDrop(): void;
    _onClickEntityName(): void;
    _getEntryContextOptions(): void;
}

/**
 * The Chat Log application displayed in the Sidebar
 */
declare class ChatLog extends SidebarTab {
    /**
     * Track whether the user currently has pending text in the chat box
     */
    _pendingText: boolean;
    /**
     * Track the history of the past 5 sent messages which can be accessed using the arrow keys
     */
    private _sentMessages: object[];
    /**
     * Track which remembered message is being currently displayed to cycle properly
     */
    private _sentMessageIndex: number;
    /**
     * Track the time when the last message was sent to avoid flooding notifications
     */
    private _lastMessageTime: number;
    /**
     * Track the id of the last message displayed in the log
     */
    private _lastId: string | null;
    /**
     * Track the last received message which included the user as a whisper recipient.
     */
    private _lastWhisper: ChatMessage | null;
    static defaultOptions: any;
    /**
     * A reference to the Messages collection that the chat log displays
     */
    collection: Messages;
    getData(): void;
    /**
     * Render a batch of additional messages, prepending them to the top of the log
     * @param size - The batch size to include
     */
    private _renderBatch(size: number): Promise<void>;
    /**
     * Delete all message HTML from the log
     */
    deleteAll(): void;
    /**
     * Delete a single message from the chat log
     * @param messageId - The ChatMessage entity to remove from the log
     * @param [deleteAll] - Is this part of a flush operation to delete all messages?
     */
    deleteMessage(messageId: string, deleteAll?: boolean): void;
    /**
     * Trigger a notification that alerts the user visually and audibly that a new chat log message has been posted
     */
    notify(): void;
    /**
     * Parse a chat string to identify the chat command (if any) which was used
     * @param message - The message to match
     * @returns The identified command and regex match
     */
    static parse(message: string): string[];
    /**
     * Post a single chat message to the log
     * @param message - A ChatMessage entity instance to post to the log
     * @param [notify = false] - Trigger a notification which shows the log as having a new unread message
     * @returns A Promise which resolves once the message is posted
     */
    postOne(message: ChatMessage, notify?: boolean): Promise<void>;
    /**
     * Scroll the chat log to the bottom
     */
    private scrollBottom(): void;
    /**
     * Update the content of a previously posted message after its data has been replaced
     * @param message - The ChatMessage instance to update
     * @param notify - Trigger a notification which shows the log as having a new unread message
     */
    updateMessage(message: ChatMessage, notify: boolean): void;
    /**
     * Activate event listeners triggered within the ChatLog application
     */
    activateListeners(html: jQuery | HTMLElement): void;
    /**
     * Prepare the data object of chat message data depending on the type of message being posted
     * @param message - The original string of the message content
     * @returns A Promise resolving to the prepared chat data object
     */
    private processMessage(message: string): Promise<object>;
    /**
     * Process messages which are posted using a dice-roll command
     * @param command - The chat command type
     * @param match - The matched RegExp expressions
     * @param chatData - The initial chat data
     * @param createOptions - Options used to create the message
     */
    private _processDiceCommand(command: string, match: RegExpMatchArray, chatData: any, createOptions: any): void;
    /**
     * Process messages which are posted using a chat whisper command
     * @param command - The chat command type
     * @param match - The matched RegExp expressions
     * @param chatData - The initial chat data
     * @param createOptions - Options used to create the message
     */
    private _processWhisperCommand(command: string, match: RegExpMatchArray, chatData: any, createOptions: any): void;
    /**
     * Process messages which are posted using a chat whisper command
     * @param command - The chat command type
     * @param match - The matched RegExp expressions
     * @param chatData - The initial chat data
     * @param createOptions - Options used to create the message
     */
    private _processChatCommand(command: string, match: RegExpMatchArray, chatData: any, createOptions: any): void;
    /**
     * Add a sent message to an array of remembered messages to be re-sent if the user pages up with the up arrow key
     * @param message - The message text being remembered
     */
    private _remember(message: string): void;
    /**
     * Recall a previously sent message by incrementing up (1) or down (-1) through the sent messages array
     * @param direction - The direction to recall, positive for older, negative for more recent
     * @returns The recalled message, or an empty string
     */
    private _recall(direction: number): string;
    /**
     * Compendium sidebar Context Menu creation
     */
    private _contextMenu(html: jQuery): void;
    /**
     * Get the ChatLog entry context options
     * @returns The sidebar entry context options
     */
    private _getEntryContextOptions(): object[];
    /**
     * Handle keydown events in the chat entry textarea
     */
    private _onChatKeyDown(event: Event): void;
    /**
     * Handle setting the preferred roll mode
     */
    private _onChangeRollMode(event: Event): void;
    /**
     * Handle single message deletion workflow
     */
    private _onDeleteMessage(event: Event): void;
    /**
     * Handle clicking of dice tooltip buttons
     */
    private _onDiceRollClick(event: Event): void;
    /**
     * Handle click events to export the chat log
     */
    private _onExportLog(event: Event): void;
    /**
     * Handle click events to flush the chat log
     */
    private _onFlushLog(event: Event): void;
    /**
     * Handle scroll events within the chat log container
     * @param event - The initial scroll event
     */
    private _onScrollLog(event: UIEvent): void;
    /**
     * The base name of this sidebar tab
     */
    tabName: string;
    /**
     * A reference to the pop-out variant of this SidebarTab, if one exists
     */
    private _popout: SidebarTab;
    /**
     * Denote whether or not this is the original version of the sidebar tab, or a pop-out variant
     */
    _original: SidebarTab;
    /**
     * Activate this SidebarTab, switching focus to it
     */
    activate(): void;
    /**
     * Create a second instance of this SidebarTab class which represents a singleton popped-out container
     * @returns The popped out sidebar tab instance
     */
    createPopout(): SidebarTab;
    /**
     * Handle lazy loading for sidebar images to only load them once they become observed
     */
    _onLazyLoadImage(entries: any, observer: any): void;
    _render(): void;
    /**
     * Render the SidebarTab as a pop-out container
     */
    renderPopout(): void;
}

/**
 * The combat and turn order tracker tab
 */
declare class CombatTracker {
    /**
     * Record a reference to the currently highlighted Token
     */
    private _highlighted: Token | null;
    /**
     * Record the currently tracked Combat encounter
     */
    combat: Combat | null;
    static defaultOptions: any;
    createPopout(): void;
    /**
     * Initialize the combat tracker to display a specific combat encounter.
     * If no encounter is provided, the tracker will be initialized with the first encounter in the viewed scene.
     * @param combat - The combat encounter to initialize
     * @param render - Whether to re-render the sidebar after initialization
     */
    initialize(combat: Combat | null, render: boolean): void;
    /**
     * Scroll the combat log container to ensure the current Combatant turn is centered vertically
     */
    scrollToTurn(): void;
    getData(): void;
    activateListeners(): void;
    /**
     * Handle new Combat creation request
     */
    private _onCombatCreate(event: Event): void;
    /**
     * Handle a Combat deletion request
     */
    private _onCombatDelete(event: Event): void;
    /**
     * Handle a Combat cycle request
     */
    private _onCombatCycle(event: Event): void;
    /**
     * Handle click events on Combat control buttons
     * @param event - The originating mousedown event
     */
    private _onCombatControl(event: Event): void;
    /**
     * Handle a Combatant control toggle
     * @param event - The originating mousedown event
     */
    private _onCombatantControl(event: Event): void;
    /**
     * Handle toggling the defeated status effect on a combatant Token
     * @param c - The combatant data being modified
     */
    private _onToggleDefeatedStatus(c: Combatant): Promise<void>;
    /**
     * Handle mouse-down event on a combatant name in the tracker
     * @param event - The originating mousedown event
     * @returns A Promise that resolves once the pan is complete
     */
    private _onCombatantMouseDown(event: Event): Promise;
    /**
     * Handle mouse-hover events on a combatant in the tracker
     */
    private _onCombatantHover(): void;
    /**
     * Handle mouse-unhover events for a combatant in the tracker
     */
    private _onCombatantHoverOut(): void;
    /**
     * Default folder context actions
     */
    private _contextMenu(html: jQuery): void;
    /**
     * Get the sidebar directory entry context options
     * @returns The sidebar entry context options
     */
    private _getEntryContextOptions(): any;
    /**
     * Display a dialog which prompts the user to enter a new initiative value for a Combatant
     */
    private _onConfigureCombatant(li: jQuery): void;
}

/**
 * A compendium of knowledge arcane and mystical!
 */
declare class CompendiumDirectory extends SidebarTab {
    static defaultOptions: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Compendium sidebar Context Menu creation
     */
    private _contextMenu(html: jQuery): void;
    /**
     * Get the sidebar directory entry context options
     * @returns The sidebar entry context options
     */
    private _getEntryContextOptions(): any;
    /**
     * Handle a Compendium Pack creation request
     */
    private _onCreateCompendium(event: any): void;
    /**
     * Handle a Compendium Pack deletion request
     * @param pack - The pack object requested for deletion
     */
    private _onDeleteCompendium(pack: any): void;
}

/**
 * A directory of Item entities in the Sidebar
 */
declare class ItemDirectory extends SidebarDirectory {
    static entity: any;
    static collection: any;
    _canDragStart(): void;
    _canDragDrop(): void;
    /**
     * Get the set of ContextMenu options which should be used for Entities in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getEntryContextOptions(): object[];
}

/**
 * A directory list of JournalEntry entities in the Sidebar
 */
declare class JournalDirectory extends SidebarDirectory {
    static defaultOptions: any;
    title: any;
    static entity: any;
    static collection: any;
    /**
     * Get the set of ContextMenu options which should be used for Entities in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getEntryContextOptions(): object[];
}

/**
 * A directory list of Macro entities. Unlike other directories, this app is only rendered in pop-out mode.
 */
declare class MacroDirectory extends SidebarDirectory {
    static entity: any;
    static collection: any;
    _onCreate(): void;
    _canDragStart(): void;
}

/**
 * A directory listing of audio playlists
 */
declare class PlaylistDirectory extends SidebarDirectory {
    /**
     * Track the playlist IDs which are currently expanded in their display
     */
    _expanded: Set;
    static defaultOptions: any;
    static entity: any;
    static collection: any;
    /**
     * Return an Array of the Playlist entities which are currently playing
     */
    playing: any;
    /**
     * Prepare the data used to render the AudioList application
     */
    getData(): any;
    /**
     * Given a constant playback mode, provide the FontAwesome icon used to display it
     */
    private _getModeIcon(mode: number): string;
    /**
     * Given a constant playback mode, provide the string tooltip used to describe it
     */
    private _getModeTooltip(mode: number): string;
    /**
     * Handle global volume change for the playlist sidebar
     */
    private _onGlobalVolume(): void;
    /**
     * Handle Playlist collapse toggle
     */
    private _onPlaylistCollapse(): void;
    /**
     * Helper method to render the expansion or collapse of playlists
     */
    private _collapse(li: HTMLElement, collapse: boolean, speed?: number): void;
    /**
     * Handle Playlist edit action
     */
    private _onPlaylistEdit(): void;
    /**
     * Handle Playlist deletion requests
     * Confirm the deletion with a yes/no dialog prompt
     */
    private _onPlaylistDelete(): void;
    /**
     * Handle Playlist track addition request
     */
    private _onPlaylistAddTrack(): void;
    /**
     * Handle Playlist playback state changes
     */
    private _onPlaylistPlay(): void;
    /**
     * Handle cycling the playback mode for a Playlist
     * @param event - The initial click event
     */
    private _onPlaylistToggleMode(event: Event): void;
    /**
     * Handle editing a Sound within a PLaylist
     * @param event - The initial click event
     */
    private _onSoundEdit(event: Event): void;
    /**
     * Modify the playback state of a Sound within a Playlist
     * @param event - The initial click event
     */
    private _onSoundPlay(event: Event): void;
    /**
     * Handle volume adjustments to sounds within a Playlist
     * @param event - The initial change event
     */
    private _onSoundVolume(event: Event): void;
    /**
     * Handle changes to the sound playback mode
     * @param event - The initial click event
     */
    private _onSoundToggleMode(event: Event): void;
    /**
     * Handle Playlist track deletion request
     */
    private _onSoundDelete(): void;
    /**
     * Handle right click context-menu options on a Playlist or a Sound
     */
    private _contextMenu(): void;
    /**
     * Get context menu options for individual sound effects
     * @returns The context options for each sound
     */
    private _getSoundContextOptions(): any;
    /**
     * References to the set of Entities which are displayed in the Sidebar
     */
    entities: Entity[];
    /**
     * Reference the set of Folders which exist in this Sidebar
     */
    folders: Folder[];
    /**
     * Initialize the content of the directory by categorizing folders and entities into a hierarchical tree structure.
     */
    initialize(): void;
    /**
     * Collapse all subfolders in this directory
     */
    collapseAll(): void;
    /**
     * Handle clicking on an Entity name in the Sidebar directory
     * @param event - The originating click event
     */
    private _onClickEntityName(event: Event): void;
    /**
     * Handle new creation request
     * @param event - The originating button click event
     */
    private _onCreateEntity(event: MouseEvent): void;
    /**
     * Create a new Folder in this SidebarDirectory
     * @param event - The originating button click event
     */
    private _onCreateFolder(event: MouseEvent): void;
    /**
     * Handle toggling the collapsed or expanded state of a folder within the directory tab
     * @param event - The originating click event
     */
    private _toggleFolder(event: MouseEvent): void;
    /**
     * Highlight folders as drop targets when a drag event enters or exits their area
     * @param event - The DragEvent which is in progress
     */
    _onDragHighlight(event: DragEvent): void;
    /**
     * Define the behavior of the sidebar tab when it received a dropped data object
     * @param event - The original drop event
     * @param data - The data being dropped
     */
    private _handleDropData(event: Event, data: any): void;
    /**
     * Get the set of ContextMenu options which should be used for Folders in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getFolderContextOptions(): object[];
    /**
     * Get the set of ContextMenu options which should be used for Entities in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getEntryContextOptions(): object[];
    /**
     * The base name of this sidebar tab
     */
    tabName: string;
    /**
     * A reference to the pop-out variant of this SidebarTab, if one exists
     */
    private _popout: SidebarTab;
    /**
     * Denote whether or not this is the original version of the sidebar tab, or a pop-out variant
     */
    _original: SidebarTab;
    /**
     * Activate this SidebarTab, switching focus to it
     */
    activate(): void;
    /**
     * Create a second instance of this SidebarTab class which represents a singleton popped-out container
     * @returns The popped out sidebar tab instance
     */
    createPopout(): SidebarTab;
    /**
     * Render the SidebarTab as a pop-out container
     */
    renderPopout(): void;
    /**
     * Handle lazy loading for sidebar images to only load them once they become observed
     */
    _onLazyLoadImage(entries: any, observer: any): void;
    /**
     * Activate event listeners triggered within the Actor Directory HTML
     */
    activateListeners(): void;
}

/**
 * A directory listing of active game scenes
 */
declare class SceneDirectory extends SidebarDirectory {
    static entity: any;
    static collection: any;
    _onCreate(): void;
    /**
     * Get the set of ContextMenu options which should be used for Entities in a SidebarDirectory
     * @returns The Array of context options passed to the ContextMenu instance
     */
    private _getEntryContextOptions(): object[];
}

/**
 * A SidebarTab for providing help messages and settings configurations.
 * The Settings sidebar is the furthest-to-right using a triple-cogs icon.
 */
declare class Settings extends SidebarTab {
    static defaultOptions: any;
    getData(): void;
    activateListeners(): void;
    /**
     * Delegate different actions for different settings buttons
     */
    private _onSettingsButton(event: any): void;
}

/**
 * A simple window application which shows the built documentation pages within an iframe
 */
declare class FrameViewer {
    static defaultOptions: any;
    getData(): void;
    close(): void;
}

/**
 * A directory list of RollTable entities in the Sidebar
 */
declare class RollTableDirectory {
    /**
     * Reference named Entity class which this directory lists
     */
    static entity: any;
    /**
     * Reference the EntityCollection of Entity instances which this directory lists
     */
    static collection: any;
}


// this collides with the interface EntityCollection
// declare namespace EntityCollection {
//     /**
//      * Return a reference to the singleton instance of this EntityCollection, or null if it has not yet been created.
//      */
//     var instance: EntityCollection | null;
// }

/**
 * An iterable container of Entity objects within the Foundry Virtual Tabletop framework.
 * Each Entity type has it's own subclass of EntityCollection, which defines the abstract interface.
 * @param data - An Array of Entity data from which to create instances
 */
declare interface EntityCollection extends Collection {
    /**
     * The source data is, itself, a mapping of IDs to data objects
     */
    _source: object[];
    /**
     * An Array of application references which will be automatically updated when the collection content changes
     */
    apps: Application[];
    /**
     * Initialize the Map object and all its contained entities
     */
    _initialize(data: Entity[]): void;
    /**
     * Render any Applications associated with this EntityCollection
     * @returns A reference to the rendered EntityCollection
     */
    render(): this;
    /**
     * The EntityCollection name
     */
    name: string;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
    /**
     * Return a reference to the Entity subclass which should be used when creating elements of this EntityCollection.
     * This should always be an explicit reference to the class which is used in this game to represent the entity,
     * and not the base implementation of that entity type.
     */
    object: Entity;
    /**
     * Add a new Entity to the EntityCollection, asserting that they are of the correct type.
     * @param entity - The entity instance to add to the collection
     */
    insert(entity: Entity): void;
    /**
     * Remove an Entity from the EntityCollection by its ID.
     * @param id - The entity ID which should be removed
     */
    remove(id: string): void;
    /**
     * Import an Entity from a compendium collection, adding it to the current World.
     * @param collection - The name of the pack from which to import
     * @param entryId - The ID of the compendium entry to import
     * @param [updateData] - Optional additional data used to modify the imported Entity before it is created
     * @param [options] - Optional arguments passed to the Entity.create method
     * @returns A Promise containing the imported Entity
     */
    importFromCollection(collection: string, entryId: string, updateData?: any, options?: any): Promise<Entity>;
    /**
     * Apply data transformations when importing an Entity from a Compendium pack
     * @param data - The original Compendium entry data
     * @returns The processed data ready for Entity creation
     */
    fromCompendium(data: any): any;
    /**
     * Update all objects in this EntityCollection with a provided transformation.
     * Conditionally filter to only apply to Entities which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * Return an Array of all the entry values in the Collection
     */
    entries: any;
    /**
     * Find an entry in the Map using an functional condition.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let a = c.find(entry => entry === "A");
     * @param condition - The functional condition to test
     * @returns The value, if found, otherwise null
     */
    find(condition: (...params: any[]) => any): V | null;
    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     * @param condition - The functional condition to test
     * @returns An Array of matched values
     */
    filter(condition: (...params: any[]) => any): V[];
    /**
     * Get an element from the Collection by its key.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     * @param key - The key of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false
     * @returns The retrieved entry value, if the key exists, otherwise null
     */
    get(key: string, strict: boolean): V | null;
    /**
     * Get an entry from the Collection by name.
     * Use of this method assumes that the objects stored in the collection have a "name" attribute.
     * @param name - The name of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns The retrieved Entity, if one was found, otherwise null;
     */
    getName(name: string, strict: boolean): Entity | null;
    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param transformer - The transformation function to apply to each entry value
     * @returns An Array of transformed values
     */
    map(transformer: (...params: any[]) => any): V[];
    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     * @param evaluator - A function which mutates the accumulator each iteration
     * @param initial - An initial value which accumulates with each iteration
     * @returns The accumulated result
     */
    reduce(evaluator: (...params: any[]) => any, initial: any): any;
}

/**
 * The Compendium class provides an interface for interacting with compendium packs which are
 * collections of similar Entities which are stored outside of the world database but able to
 * be easily imported into an active session.
 *
 * When the game session is initialized, each available compendium pack is constructed and
 * added to the ``game.packs``.
 *
 * Each Compendium is distinctly referenced using its canonical "collection" name which is a
 * unique string that contains the package name which provides the compendium as well as the
 * name of the pack within that package. For example, in the DnD5e system, the compendium pack
 * which provides the spells available within the SRD has the collection name "dnd5e.spells".
 * @example
 * // Let's learn the collection names of all the compendium packs available within a game
 * game.packs.keys();
 *
 * // Suppose we are working with a particular pack named "dnd5e.spells"
 * const pack = game.packs.get("dnd5e.spells");
 *
 * // We can load the index of the pack which contains all entity IDs, names, and image icons
 * pack.getIndex().then(index => console.log(index));
 *
 * // We can find a specific entry in the compendium by its name
 * let entry = pack.index.find(e => e.name === "Acid Splash");
 *
 * // Given the entity ID of "Acid Splash" we can load the full Entity from the compendium
 * pack.getEntity(entry.id).then(spell => console.log(spell));
 * @example
 * // We often may want to programmatically create new Compendium content
 * // Let's start by creating a custom spell as an Item instance
 * let itemData = {name: "Custom Death Ray", type: "Spell"};
 * let item = new Item(itemData);
 *
 * // Once we have an entity for our new Compendium entry we can import it, if the pack is unlocked
 * pack.importEntity(item);
 *
 * // When the entity is imported into the compendium it will be assigned a new ID, so let's find it
 * pack.getIndex().then(index => {
 *   let entry = index.find(e => e.name === itemData.name));
 *   console.log(entry);
 * });
 *
 * // If we decide to remove an entry from the compendium we can do that by the entry ID
 * pack.removeEntry(entry.id);
 * @param metadata - The compendium metadata, an object provided by game.data
 * @param options - Application rendering options
 */
declare class Compendium {
    constructor(metadata: any, options: any);
    /**
     * The compendium metadata which defines the compendium content and location
     */
    metadata: any;
    /**
     * Track whether the compendium pack is locked for editing
     */
    locked: boolean;
    /**
     * Track whether the compendium pack is private
     */
    private: boolean;
    /**
     * The most recently retrieved index of the Compendium content
     * This index is not guaranteed to be current - call getIndex() to reload the index
     */
    index: object[];
    static defaultOptions: any;
    title: any;
    /**
     * The canonical Compendium name - comprised of the originating package and the pack name
     */
    collection: any;
    /**
     * The Entity type which is allowed to be stored in this collection
     */
    entity: string;
    /**
     * A reference to the Entity class object contained within this Compendium pack
     */
    cls: any;
    getData(): void;
    close(): void;
    /**
     * Create a new Compendium pack using provided
     * @param metadata - The compendium metadata used to create the new pack
     * @param options - Additional options which modify the Compendium creation request
     */
    static create(metadata: any, options: Options): Promise<Compendium>;
    /**
     * Assign configuration metadata settings to the compendium pack
     * @param settings - The object of compendium settings to define
     * @returns A Promise which resolves once the setting is updated
     */
    configure(settings: any): Promise;
    /**
     * Delete a world Compendium pack
     * This is only allowed for world-level packs by a GM user
     */
    delete(): Promise<Compendium>;
    /**
     * Duplicate a compendium pack to the current World
     */
    duplicate(label: any): Promise<Compendium>;
    /**
     * Get the Compendium index
     * Contains names and IDs of all data in the compendium
     * @returns A Promise containing an index of all compendium entries
     */
    getIndex(): Promise;
    /**
     * Get the complete set of content for this compendium, loading all entries in full
     * Returns a Promise that resolves to an Array of entries
     */
    getContent(): Promise<any[]>;
    /**
     * Get a single Compendium entry as an Object
     * @param entryId - The compendium entry ID to retrieve
     * @returns A Promise containing the return entry data, or null
     */
    getEntry(entryId: string): Promise<object | null>;
    /**
     * Get a single Compendium entry as an Entity instance
     * @param entryId - The compendium entry ID to load and instantiate
     * @returns A Promise containing the returned Entity, if it exists, otherwise null
     */
    getEntity(entryId: string): Promise<Entity | null>;
    /**
     * Fully import the contents of a Compendium pack into a World folder.
     * @param [folderId] - An existing Folder _id to use.
     * @param [folderName] - A new Folder name to create.
     */
    importAll(folderId?: string | null, folderName?: string): Promise<any>;
    /**
     * Cast entry data to an Entity class
     */
    private _toEntity(entryData: any): void;
    /**
     * Import a new Entity into a Compendium pack
     * @param entity - The Entity instance you wish to import
     * @returns A Promise which resolves to the created Entity once the operation is complete
     */
    importEntity(entity: Entity): Promise;
    /**
     * Create a new Entity within this Compendium Pack using provided data
     * @param data - Data with which to create the entry
     * @param options - Additional options which modify the creation
     * @returns A Promise which resolves to the created Entity once the operation is complete
     */
    createEntity(data: any, options: Options): Promise;
    /**
     * Update a single Compendium entry programmatically by providing new data with which to update
     * @param data - The incremental update with which to update the Entity. Must contain the _id
     * @param options - Additional options which modify the update request
     * @returns A Promise which resolves with the updated Entity once the operation is complete
     */
    updateEntity(data: any, options: any): Promise;
    /**
     * Delete a single Compendium entry by its provided _id
     * @param id - The entry ID to delete
     * @param options - Additional options which modify the deletion request
     * @returns A Promise which resolves to the deleted entry ID once the operation is complete
     */
    deleteEntity(id: string, options: any): Promise;
    /**
     * Request that a Compendium pack be migrated to the latest System data template
     */
    migrate(): Promise<Compendium>;
    /**
     * Validate that the current user is able to modify content of this Compendium pack
     */
    private _assertUserCanModify(): boolean;
    /**
     * Register event listeners for Compendium directories
     */
    private activateListeners(): void;
    _onSearchFilter(): void;
    /**
     * Handle opening a single compendium entry by invoking the configured entity class and its sheet
     * @param entryId - The compendium ID of the entry to display
     */
    private _onEntry(entryId: string): void;
    _canDragStart(): void;
    _canDragDrop(): void;
    _onDragStart(): void;
    /**
     * Handle data being dropped into a Compendium pack
     */
    private _onDrop(): void;
    /**
     * Render the ContextMenu which applies to each compendium entry
     */
    private _contextMenu(): void;
}

/**
 * An abstract class implementation for an EmbeddedEntity object within a parent Entity
 */
declare interface EmbeddedEntity {
    /**
     * The embedded entity data object
     */
    data: Data;
    /**
     * The parent Entity to which this belongs
     */
    parent: Entity;
    /**
     * A reference to the _id attribute of the EmbeddedEntity data
     */
    id: string;
    /**
     * Data preparation steps taken by the EmbeddedEntity instance when it's underlying data changes
     */
    prepareData(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
}

declare namespace Entity {
    /**
     * Configure the attributes of this Entity class
     * @property baseEntity - The parent class which directly inherits from the Entity interface.
     * @property collection - The EntityCollection instance to which Entities of this type belong.
     * @property embeddedEntities - The names of any Embedded Entities within the Entity data structure.
     */
    var config: {
        baseEntity: Entity;
        collection: EntityCollection;
        embeddedEntities: string[];
    };
    /**
     * Return a reference to the EntityCollection instance which stores Entity instances of this type. This property is
     * available as both a static and instance method and should be overridden by subclass Entity implementations.
     */
    var collection: EntityCollection;
    /**
     * The class name of the base Entity type, for example "Actor". This is useful in cases where there is an inheritance
     * chain. Many places throughout the framework rely upon the canonical entity name which may not always be equal
     * to the class name. This property is available as both a static and instance method.
     * @example
     * class Actor2ndGen extends Actor {...}
     * Actor2ndGen.entity // "Actor"
     */
    var entity: string;
    /**
     * Test whether a given User has permission to perform some action on this Entity
     * @param user - The User requesting creation
     * @param action - The attempted action
     * @param target - The targeted Entity
     * @returns Does the User have permission?
     */
    function can(user: User, action: string, target: Entity): boolean;
    /**
     * Test whether a given User has permission to perform some action on this Entity
     * @param user - The User requesting creation
     * @param action - The attempted action
     * @param target - The targeted Entity
     * @returns Does the User have permission?
     */
    function can(user: User, action: string, target: Entity): boolean;
    /**
     * Activate the Socket event listeners used to receive responses from events which modify database documents
     * @param socket - The active game socket
     */
    function activateSocketListeners(socket: Socket): void;
    /**
     * Create one or multiple new entities using provided input data.
     * Data may be provided as a single object to create one Entity, or as an Array of Objects.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const data = {name: "New Entity", type: "character", img: "path/to/profile.jpg"};
     * const created = await Entity.create(data); // Returns one Entity, saved to the database
     * const temp = await Entity.create(data, {temporary: true}); // Not saved to the database
     * @example
     * const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];
     * const created = await Entity.create(data); // Returns an Array of Entities, saved to the database
     * const created = await Entity.create(data, {temporary: true}); // Not saved to the database
     * @param data - A Data object or array of Data
     * @param options - Additional options which customize the creation workflow
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for the created entity once it is created. Default is false.
     * @param [options.noHook] - Block the dispatch of preCreate hooks for this operation.
     * @returns The created Entity or array of Entities
     */
    function create(data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle a SocketResponse from the server when one or multiple Entities are created
     * @param request - The initial request
     * @param result - An Array of created Entity data
     * @param userId - The id of the requesting User
     * @returns An Array of constructed Entity instances
     */
    function _handleCreate(request: SocketRequest, result: Data[], userId: string): Entity[];
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const data = {_id: "12ekjf43kj2312ds", name: "New Name"}};
     * const updated = await Entity.update(data); // Updated entity saved to the database
     * @example
     * const data = [{_id: "12ekjf43kj2312ds", name: "New Name 1"}, {_id: "kj549dk48k34jk34", name: "New Name 2"}]};
     * const updated = await Entity.update(data); // Returns an Array of Entities, updated in the database
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    function update(data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle a SocketResponse from the server when one or multiple Entities are updated
     * @param request - The initial request
     * @param result - An Array of updated Entity data
     * @param userId - The id of the requesting User
     * @returns An Array of constructed Entity instances
     */
    function _handleUpdate(request: SocketRequest, result: Data[], userId: string): Entity[];
    /**
     * Delete one or multiple existing entities using provided ids.
     * The target ids may be a single string or an Array of strings.
     * @example
     * const id = "12ekjf43kj2312ds";
     * const deleted = await Entity.delete(id); // A single deleted entity from the database
     * @example
     * const ids = ["12ekjf43kj2312ds", "kj549dk48k34jk34"];
     * const deleted = await Entity.delete(ids); // Returns an Array of deleted Entities
     * @param data - A single id or Array of ids
     * @param options - Additional options which customize the deletion workflow
     * @param [options.noHook] - Block the dispatch of preDelete hooks for this operation.
     * @returns The deleted Entity or array of Entities
     */

    // not sure what to do with this
    // function delete(data: string | string[], options: {
    //     noHook?: boolean;
    // }): Promise<Entity | Entity[]>;
    /**
     * Handle a SocketResponse from the server when one or multiple Entities are deleted
     * @param request - The initial request
     * @param result - An Array of deleted Entity ids
     * @param userId - The id of the requesting User
     * @returns An Array of deleted Entity instances
     */
    function _handleDelete(request: SocketRequest, result: string[], userId: string): Entity[];
    /**
     * Handle a SocketResponse from the server when one or multiple Embedded Entities are created
     * @param request - The initial request
     * @param result - An Array of created Entity data
     * @param userId - The id of the requesting User
     * @returns An Array of constructed EmbeddedDocument data
     */
    function _handleCreateEmbeddedEntity(request: SocketRequest, result: Data[], userId: string): Data[];
    /**
     * Handle a SocketResponse from the server when one or multiple Embedded Entities are updated
     * @param request - The initial request
     * @param result - An Array of updated Entity data
     * @param userId - The id of the requesting User
     * @returns An Array of updated EmbeddedDocument data
     */
    function _handleUpdateEmbeddedEntity(request: SocketRequest, result: Data[], userId: string): Data[];
    /**
     * Handle a SocketResponse from the server when one or multiple Embedded Entities are deleted
     * @param request - Th2e initial request
     * @param result - An Array of deleted EmbeddedEntity ids
     * @param userId - The id of the requesting User
     * @returns An Array of deleted EmbeddedDocument data
     */
    function _handleDeleteEmbeddedEntity(request: SocketRequest, result: string[], userId: string): Data[];
    /**
     * A helper function to handle obtaining the dropped Entity data from a dropped event. Entity drop data could have:
     * 1. A compendium pack and entry id
     * 2. A World Entity _id
     * 3. A data object explicitly provided
     * @param data - The data object extracted from a DataTransfer event
     * @returns The Entity data that should be handled by the drop handler
     */
    function fromDropData(data: any): Entity;
    /**
     * Provide a Dialog form to create a new Entity of this type.
     * Choose a name and a type from a select menu of types.
     * @param data - Initial data with which to populate the creation form
     * @param options - Initial positioning and sizing options for the dialog form
     * @returns A Promise which resolves to the created Entity
     */
    function createDialog(data: any, options: any): Promise<Entity>;
}

/**
 * An abstract class pattern for all primary data entities within the Foundry VTT Framework. An entity represents a
 * primary data concept, for example: Actor, Item, Scene, or ChatMessage. Each Entity type in Foundry Virtual
 * Tabletop extends this base Entity class which ensures similar behavior and workflow across all entity types.
 *
 * Documentation for this class is provided for reference, but developers should not extend this class directly,
 * instead work with or extend the Entity implementations that are referenced in this section of the API documentation.
 *
 * Entities are instantiated by providing their base data, and an optional Array of Application instances which should
 * be automatically refreshed when the Entity experiences an update.
 * @example
 * let actorData = {name: "John Doe", type: "character", img: "icons/svg/mystery-man.svg"};
 * let actor = new Actor(actorData);
 * @param data - The data Object with which to create the Entity
 * @param options - Additional options which modify the created Entity behavior
 * @param [options.compendium] - A reference to the Compendium pack from which this Entity was drawn.
 */
declare interface Entity {
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param force - Force rendering
     * @param context - Optional context
     */
    render(force: boolean, context: Options): void;
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    visible: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    _onUpdate(): void;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    _onDelete(): void;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    _onCreateEmbeddedEntity(): void;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    _onUpdateEmbeddedEntity(): void;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    _onModifyEmbeddedEntity(): void;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
}

/**
 * The EntityCollection of Actor entities.
 * @example
 * <caption>Retrieve an existing Actor by its id</caption>
 * let actor = game.actors.get(actorId);
 */
declare class Actors extends EntityCollection {
    /**
     * A mapping of synthetic Token Actors which are currently active within the viewed Scene.
     * Each Actor is referenced by the Token.id.
     */
    tokens: any;
    /**
     * Register an Actor sheet class as a candidate which can be used to display Actors of a given type
     * See EntitySheetConfig.registerSheet for details
     * @example
     * <caption>Register a new ActorSheet subclass for use with certain Actor types.</caption>
     * Actors.registerSheet("dnd5e", ActorSheet5eCharacter, { types: ["character"], makeDefault: true });
     */
    static registerSheet(): void;
    /**
     * Unregister an Actor sheet class, removing it from the list of avaliable sheet Applications to use
     * See EntitySheetConfig.unregisterSheet for details
     * @example
     * <caption>Deregister the default ActorSheet subclass to replace it with others.</caption>
     * Actors.unregisterSheet("core", ActorSheet);
     */
    static unregisterSheet(): void;
    /**
     * Return an Array of currently registered sheet classes for this Entity type
     */
    static registeredSheets: ActorSheet[];
    /**
     * The source data is, itself, a mapping of IDs to data objects
     */
    _source: object[];
    /**
     * An Array of application references which will be automatically updated when the collection content changes
     */
    apps: Application[];
    /**
     * Initialize the Map object and all its contained entities
     */
    private _initialize(data: Entity[]): void;
    /**
     * Render any Applications associated with this EntityCollection
     * @returns A reference to the rendered EntityCollection
     */
    render(): this;
    /**
     * The EntityCollection name
     */
    name: string;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the Entity subclass which should be used when creating elements of this EntityCollection.
     * This should always be an explicit reference to the class which is used in this game to represent the entity,
     * and not the base implementation of that entity type.
     */
    object: Entity;
    /**
     * Add a new Entity to the EntityCollection, asserting that they are of the correct type.
     * @param entity - The entity instance to add to the collection
     */
    insert(entity: Entity): void;
    /**
     * Remove an Entity from the EntityCollection by its ID.
     * @param id - The entity ID which should be removed
     */
    remove(id: string): void;
    /**
     * Import an Entity from a compendium collection, adding it to the current World.
     * @param collection - The name of the pack from which to import
     * @param entryId - The ID of the compendium entry to import
     * @param [updateData] - Optional additional data used to modify the imported Entity before it is created
     * @param [options] - Optional arguments passed to the Entity.create method
     * @returns A Promise containing the imported Entity
     */
    importFromCollection(collection: string, entryId: string, updateData?: any, options?: any): Promise<Entity>;
    /**
     * Apply data transformations when importing an Entity from a Compendium pack
     * @param data - The original Compendium entry data
     * @returns The processed data ready for Entity creation
     */
    fromCompendium(data: any): any;
    /**
     * Update all objects in this EntityCollection with a provided transformation.
     * Conditionally filter to only apply to Entities which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * Return an Array of all the entry values in the Collection
     */
    entries: any;
    /**
     * Find an entry in the Map using an functional condition.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let a = c.find(entry => entry === "A");
     * @param condition - The functional condition to test
     * @returns The value, if found, otherwise null
     */
    find(condition: (...params: any[]) => any): V | null;
    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     * @param condition - The functional condition to test
     * @returns An Array of matched values
     */
    filter(condition: (...params: any[]) => any): V[];
    /**
     * Get an element from the Collection by its key.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     * @param key - The key of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false
     * @returns The retrieved entry value, if the key exists, otherwise null
     */
    get(key: string, strict: boolean): V | null;
    /**
     * Get an entry from the Collection by name.
     * Use of this method assumes that the objects stored in the collection have a "name" attribute.
     * @param name - The name of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns The retrieved Entity, if one was found, otherwise null;
     */
    getName(name: string, strict: boolean): Entity | null;
    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param transformer - The transformation function to apply to each entry value
     * @returns An Array of transformed values
     */
    map(transformer: (...params: any[]) => any): V[];
    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     * @param evaluator - A function which mutates the accumulator each iteration
     * @param initial - An initial value which accumulates with each iteration
     * @returns The accumulated result
     */
    reduce(evaluator: (...params: any[]) => any, initial: any): any;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
}

/**
 * The Actor Entity which represents the protagonists, characters, enemies, and more that inhabit and take actions
 * within the World.
 * @example
 * <caption>Create a new Actor</caption>
 * let actor = await Actor.create({
 *   name: "New Test Actor",
 *   type: "character",
 *   img: "artwork/character-profile.jpg",
 *   folder: folder.data._id,
 *   sort: 12000,
 *   data: {},
 *   token: {},
 *   items: [],
 *   flags: {}
 * });
 * @example
 * <caption>Retrieve an existing Actor</caption>
 * let actor = game.actors.get(actorId);
 */
declare class Actor extends Entity {
    /**
     * A reference to a placed Token which creates a synthetic Actor
     */
    token: Token;
    /**
     * Construct the Array of Item instances for the Actor
     * Items are prepared by the Actor.prepareEmbeddedEntities() method
     */
    items: Collection<string, OwnedItem>;
    /**
     * A set that tracks which keys in the data model were modified by active effects
     */
    overrides: Data;
    /**
     * Cache an Array of allowed Token images if using a wildcard path
     */
    private _tokenImages: string[];
    static config: any;
    /**
     * A convenient reference to the file path of the Actor's profile image
     */
    img: string;
    /**
     * Classify Owned Items by their type
     */
    itemTypes: {
        [key: string]: any[];
    };
    /**
     * Test whether an Actor entity is a synthetic representation of a Token (if true) or a full Entity (if false)
     */
    isToken: boolean;
    /**
     * An array of ActiveEffect instances which are present on the Actor which have a limited duration.
     */
    temporaryEffects: any;
    /**
     * First prepare any derived data which is actor-specific and does not depend on Items or Active Effects
     */
    prepareBaseData(): void;
    /**
     * Apply final transformations to the Actor data after all effects have been applied
     */
    prepareDerivedData(): void;
    /**
     * Prepare a Collection of OwnedItem instances which belong to this Actor.
     * @param items - The raw array of item objects
     * @returns The prepared owned items collection
     */
    private _prepareOwnedItems(items: object[]): Collection<string, Item>;
    /**
     * Prepare a Collection of ActiveEffect instances which belong to this Actor.
     * @param effects - The raw array of active effect objects
     * @returns The prepared active effects collection
     */
    private _prepareActiveEffects(effects: object[]): Collection<string, ActiveEffect>;
    /**
     * Apply any transformations to the Actor data which are caused by ActiveEffects.
     */
    applyActiveEffects(): void;
    /**
     * Create a synthetic Actor using a provided Token instance
     * If the Token data is linked, return the true Actor entity
     * If the Token data is not linked, create a synthetic Actor using the Token's actorData override
     */
    static fromToken(token: Token): Actor;
    /**
     * Create a synthetic Token Actor instance which is used in place of an actual Actor.
     * Cache the result in Actors.tokens.
     */
    static createTokenActor(baseActor: Actor, token: Token): Actor;
    /**
     * Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
     * If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
     * @param [linked = false] - Only return tokens which are linked to the Actor. Default (false) is to return all
     *                            tokens even those which are not linked.
     * @returns An array of tokens in the current Scene which reference this Actor.
     */
    getActiveTokens(linked?: boolean): Token[];
    /**
     * Prepare a data object which defines the data schema used by dice roll commands against this Actor
     */
    getRollData(): any;
    /**
     * Get an Array of Token images which could represent this Actor
     */
    getTokenImages(): Promise<string[]>;
    /**
     * Handle how changes to a Token attribute bar are applied to the Actor.
     * This allows for game systems to override this behavior and deploy special logic.
     * @param attribute - The attribute path
     * @param value - The target attribute value
     * @param isDelta - Whether the number represents a relative change (true) or an absolute change (false)
     * @param isBar - Whether the new value is part of an attribute bar, or just a direct value
     * @returns The updated Actor entity
     */
    modifyTokenAttribute(attribute: string, value: number, isDelta: boolean, isBar?: boolean): Promise<Actor>;
    /**
     * Roll initiative for all Combatants in the currently active Combat encounter which are associated with this Actor.
     * If viewing a full Actor entity, all Tokens which map to that actor will be targeted for initiative rolls.
     * If viewing a synthetic Token actor, only that particular Token will be targeted for an initiative roll.
     * @param options - Configuration for how initiative for this Actor is rolled.
     * @param [options.createCombatants] - Create new Combatant entries for Tokens associated with this actor.
     * @param [options.rerollInitiative] - Re-roll the initiative for this Actor if it has already been rolled.
     * @param [options.initiativeOptions] - Additional options passed to the Combat#rollInitiative method.
     * @returns A promise which resolves to the Combat entity once rolls are complete.
     */
    rollInitiative(options: {
        createCombatants?: boolean;
        rerollInitiative?: boolean;
        initiativeOptions?: any;
    }): Promise<Combat | null>;
    /**
     * When Owned Items are created process each item and extract Active Effects to transfer to the Actor.
     * @param created - Created owned Item data objects
     * @param [temporary] - Is this a temporary item creation?
     * @returns An array of effects to transfer to the Actor
     */
    private _createItemActiveEffects(created: Data[], temporary?: boolean): Data[];
    /**
     * When Owned Items are created process each item and extract Active Effects to transfer to the Actor.
     * @param deleted - The array of deleted owned Item data
     */
    private _deleteItemActiveEffects(deleted: Data[]): void;
    /**
     * Get an Item instance corresponding to the Owned Item with a given id
     * @param itemId - The owned Item id to retrieve
     * @returns An Item instance representing the Owned Item within the Actor entity
     */
    getOwnedItem(itemId: string): Item;
    /**
     * Create a new item owned by this Actor. This redirects its arguments to the createEmbeddedEntity method.
     * @param itemData - Data for the newly owned item
     * @param options - Item creation options
     * @param options.renderSheet - Render the Item sheet for the newly created item data
     * @returns A Promise resolving to the created Owned Item data
     */
    createOwnedItem(itemData: any, options: {
        renderSheet: boolean;
    }): Promise<object>;
    /**
     * Update an owned item using provided new data. This redirects its arguments to the updateEmbeddedEntity method.
     * @param itemData - Data for the item to update
     * @param options - Item update options
     * @returns A Promise resolving to the updated Owned Item data
     */
    updateOwnedItem(itemData: any, options: any): Promise<object>;
    /**
     * Delete an owned item by its id. This redirects its arguments to the deleteEmbeddedEntity method.
     * @param itemId - The ID of the item to delete
     * @param options - Item deletion options
     * @returns A Promise resolving to the deleted Owned Item data
     */
    deleteOwnedItem(itemId: string, options: any): Promise<object>;
    importItemFromCollection(): void;
    isPC: any;
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param force - Force rendering
     * @param context - Optional context
     */
    render(force: boolean, context: Options): void;
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    private _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    visible: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onUpdateEmbeddedEntity(): void;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    private _onModifyEmbeddedEntity(): void;
}

/**
 * The EntityCollection of Combat entities
 */
declare class CombatEncounters {
    entity: any;
    /**
     * Provide the settings object which configures the Combat entity
     */
    settings: any;
    /**
     * Get an Array of Combat instances which apply to the current canvas scene
     */
    combats: Combat[];
    /**
     * The currently active Combat instance
     */
    active: any;
    /**
     * The currently viewed Combat encounter
     */
    viewed: any;
    static instance: any;
    /**
     * When a Token is deleted, remove it as a combatant from any combat encounters which included the Token
     */
    private _onDeleteToken(sceneId: string, tokenId: string): void;
}

declare type Combatant = any;

/**
 * The Combat Entity defines a particular combat encounter which can occur within the game session
 * Combat instances belong to the CombatEncounters collection
 */
declare class Combat extends Entity {
    /**
     * Track the sorted turn order of this combat encounter
     */
    turns: Combatant[];
    /**
     * Record the current round, turn, and tokenId to understand changes in the encounter state
     */
    private current: any;
    /**
     * Track the previous round, turn, and tokenId to understand changes in the encounter state
     */
    private previous: any;
    /**
     * Track whether a sound notification is currently being played to avoid double-dipping
     */
    private _soundPlaying: boolean;
    /**
     * The configuration setting used to record Combat preferences
     */
    CONFIG_SETTING: string;
    static config: any;
    /**
     * Prepare Embedded Entities which exist within the parent Combat.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
     */
    setupTurns(): Combatant[];
    /**
     * Prepare turn data for one specific combatant.
     */
    private _prepareCombatant(): void;
    /**
     * Define how the array of Combatants is sorted in the displayed list of the tracker.
     * This method can be overridden by a system or module which needs to display combatants in an alternative order.
     * By default sort by initiative, falling back to name
     */
    private _sortCombatants(): void;
    /**
     * A convenience reference to the Array of combatant data within the Combat entity
     */
    combatants: object[];
    /**
     * Get the data object for the Combatant who has the current turn
     */
    combatant: Combatant;
    /**
     * The numeric round of the Combat encounter
     */
    round: number;
    /**
     * The numeric turn of the combat round in the Combat encounter
     */
    turn: number;
    /**
     * Get the Scene entity for this Combat encounter
     */
    scene: any;
    /**
     * Return the object of settings which modify the Combat Tracker behavior
     */
    settings: any;
    /**
     * Has this combat encounter been started?
     */
    started: boolean;
    /**
     * Set the current Combat encounter as active within the Scene.
     * Deactivate all other Combat encounters within the viewed Scene and set this one as active
     */
    activate(): Promise<Combat>;
    /**
     * Begin the combat encounter, advancing to round 1 and turn 1
     */
    startCombat(): Promise<Combat>;
    /**
     * Advance the combat to the next turn
     */
    nextTurn(): Promise<Combat>;
    /**
     * Rewind the combat to the previous turn
     */
    previousTurn(): Promise<Combat>;
    /**
     * Advance the combat to the next round
     */
    nextRound(): Promise<Combat>;
    /**
     * Rewind the combat to the previous round
     */
    previousRound(): Promise<Combat>;
    /**
     * Reset all combatant initiative scores, setting the turn back to zero
     */
    resetAll(): Promise<Combat>;
    /**
     * Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
     */
    endCombat(): Promise<void>;
    getCombatant(): void;
    /**
     * Get a Combatant using its Token id
     * @param tokenId - The id of the Token for which to acquire the combatant
     */
    getCombatantByToken(tokenId: string): void;
    /**
     * Set initiative for a single Combatant within the Combat encounter.
     * Turns will be updated to keep the same combatant as current in the turn order
     * @param id - The combatant ID for which to set initiative
     * @param value - A specific initiative value to set
     */
    setInitiative(id: string, value: number): void;
    /**
     * Roll initiative for one or multiple Combatants within the Combat entity
     * @param ids - A Combatant id or Array of ids for which to roll
     * @param [formula] - A non-default initiative formula to roll. Otherwise the system default is used.
     * @param [updateTurn] - Update the Combat turn after adding new initiative scores to keep the turn on
     *                                  the same Combatant.
     * @param [messageOptions] - Additional options with which to customize created Chat Messages
     * @returns A promise which resolves to the updated Combat entity once updates are complete.
     */
    rollInitiative(ids: string | string[], formula?: string | null, updateTurn?: boolean, messageOptions?: any): Promise<Combat>;
    /**
     * Acquire the default dice formula which should be used to roll initiative for a particular combatant.
     * Modules or systems could choose to override or extend this to accommodate special situations.
     * @param combatant - Data for the specific combatant for whom to acquire an initiative formula. This
     *                                is not used by default, but provided to give flexibility for modules and systems.
     * @returns The initiative formula to use for this combatant.
     */
    private _getInitiativeFormula(combatant: any): string;
    /**
     * Get a Roll object which represents the initiative roll for a given combatant.
     * @param combatant - Data for the specific combatant for whom to acquire an initiative formula. This
     *                                is not used by default, but provided to give flexibility for modules and systems.
     * @param formula - An explicit Roll formula to use for the combatant.
     * @returns The Roll instance to use for the combatant.
     */
    private _getInitiativeRoll(combatant: any, formula: string): Roll;
    /**
     * Roll initiative for all non-player actors who have not already rolled
     * @param args - Additional arguments forwarded to the Combat.rollInitiative method
     */
    rollNPC(...args: any[]): void;
    /**
     * Roll initiative for all combatants which have not already rolled
     * @param args - Additional arguments forwarded to the Combat.rollInitiative method
     */
    rollAll(...args: any[]): void;
    /**
     * Create a new Combatant embedded entity
     */
    createCombatant(): void;
    /**
     * Update an existing Combatant embedded entity
     */
    updateCombatant(): void;
    /**
     * Delete an existing Combatant embedded entity
     */
    deleteCombatant(): void;
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param force - Force rendering
     * @param context - Optional context
     */
    render(force: boolean, context: Options): void;
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    private _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    visible: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onUpdateEmbeddedEntity(): void;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    private _onModifyEmbeddedEntity(): void;
}

/**
 * The Folders EntityCollection
 */
declare class Folders extends EntityCollection {
    /**
     * This tracks which folders are currently expanded in the UI
     */
    private _expanded: any;
    /**
     * Refresh the display of any active JournalSheet instances where the folder list will change.
     */
    private _refreshJournalEntrySheets(): void;
    /**
     * The source data is, itself, a mapping of IDs to data objects
     */
    _source: object[];
    /**
     * An Array of application references which will be automatically updated when the collection content changes
     */
    apps: Application[];
    /**
     * Initialize the Map object and all its contained entities
     */
    private _initialize(data: Entity[]): void;
    /**
     * The EntityCollection name
     */
    name: string;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the Entity subclass which should be used when creating elements of this EntityCollection.
     * This should always be an explicit reference to the class which is used in this game to represent the entity,
     * and not the base implementation of that entity type.
     */
    object: Entity;
    /**
     * Add a new Entity to the EntityCollection, asserting that they are of the correct type.
     * @param entity - The entity instance to add to the collection
     */
    insert(entity: Entity): void;
    /**
     * Remove an Entity from the EntityCollection by its ID.
     * @param id - The entity ID which should be removed
     */
    remove(id: string): void;
    /**
     * Import an Entity from a compendium collection, adding it to the current World.
     * @param collection - The name of the pack from which to import
     * @param entryId - The ID of the compendium entry to import
     * @param [updateData] - Optional additional data used to modify the imported Entity before it is created
     * @param [options] - Optional arguments passed to the Entity.create method
     * @returns A Promise containing the imported Entity
     */
    importFromCollection(collection: string, entryId: string, updateData?: any, options?: any): Promise<Entity>;
    /**
     * Apply data transformations when importing an Entity from a Compendium pack
     * @param data - The original Compendium entry data
     * @returns The processed data ready for Entity creation
     */
    fromCompendium(data: any): any;
    /**
     * Update all objects in this EntityCollection with a provided transformation.
     * Conditionally filter to only apply to Entities which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * Return an Array of all the entry values in the Collection
     */
    entries: any;
    /**
     * Find an entry in the Map using an functional condition.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let a = c.find(entry => entry === "A");
     * @param condition - The functional condition to test
     * @returns The value, if found, otherwise null
     */
    find(condition: (...params: any[]) => any): V | null;
    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     * @param condition - The functional condition to test
     * @returns An Array of matched values
     */
    filter(condition: (...params: any[]) => any): V[];
    /**
     * Get an element from the Collection by its key.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     * @param key - The key of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false
     * @returns The retrieved entry value, if the key exists, otherwise null
     */
    get(key: string, strict: boolean): V | null;
    /**
     * Get an entry from the Collection by name.
     * Use of this method assumes that the objects stored in the collection have a "name" attribute.
     * @param name - The name of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns The retrieved Entity, if one was found, otherwise null;
     */
    getName(name: string, strict: boolean): Entity | null;
    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param transformer - The transformation function to apply to each entry value
     * @returns An Array of transformed values
     */
    map(transformer: (...params: any[]) => any): V[];
    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     * @param evaluator - A function which mutates the accumulator each iteration
     * @param initial - An initial value which accumulates with each iteration
     * @returns The accumulated result
     */
    reduce(evaluator: (...params: any[]) => any, initial: any): any;
    /**
     * Render any Applications associated with this EntityCollection
     * @returns A reference to the rendered EntityCollection
     */
    render(): this;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
}

/**
 * The Folder Entity
 */
declare class Folder extends Entity {
    static config: any;
    /**
     * Return whether the folder is displayed in the sidebar to the current user
     */
    displayed: boolean;
    /**
     * Return whether the folder is currently expanded within the sidebar interface
     */
    expanded: boolean;
    /**
     * A reference to the parent Folder if one is set, otherwise null
     */
    parent: Folder | null;
    /**
     * Return the named Entity type for elements in this folder.
     */
    type: any;
    /**
     * A reference to the EntityCollection of Entities for this folder type.
     */
    collection: any;
    /**
     * Return an Array of the Entities which are contained within this Folder
     */
    entities: Entity[];
    /**
     * Create a new Folder by rendering a dialog window to provide basic creation details
     * @param data - Initial data with which to populate the creation form
     * @param options - Initial positioning and sizing options for the dialog form
     * @returns An active FolderConfig instance for creating the new Folder entity
     */
    static createDialog(data: any, options: any): FolderConfig;
    /**
     * Export all Entities contained in this Folder to a given Compendium pack.
     * Optionally update existing Entities within the Pack by name, otherwise append all new entries.
     * @param pack - A Compendium pack to which the entities will be exported
     * @param updateByName - Update existing entries in the Compendium pack, matching by name
     * @returns The updated Compendium Pack
     */
    exportToCompendium(pack: Compendium, updateByName: boolean): Promise<Compendium>;
    /**
     * Provide a dialog form that allows for exporting the contents of a Folder into an eligible Compendium pack.
     * @param pack - A pack ID to set as the default choice in the select input
     * @param options - Additional options passed to the Dialog.prompt method
     * @returns A Promise which resolves or rejects once the dialog has been submitted or closed
     */
    exportDialog(pack: string, options: any): Promise<void>;
    static _handleDelete(): void;
}

/**
 * The EntityCollection of Item entities
 * The items collection is accessible within the game as game.items
 */
declare class Items {
    entity: any;
    /**
     * Register an Actor sheet class as a candidate which can be used to display Actors of a given type
     * See EntitySheetConfig.registerSheet for details
     */
    static registerSheet(): void;
    /**
     * Unregister an Actor sheet class, removing it from the list of avaliable sheet Applications to use
     * See EntitySheetConfig.unregisterSheet for details
     */
    static unregisterSheet(): void;
    /**
     * Return an Array of currently registered sheet classes for this Entity type
     */
    static registeredSheets: ItemSheet[];
}

declare interface Item extends Entity {
}

/**
 * The Item entity.
 * This base Item refers primarily to items which are not currently owned.
 */
declare class Item implements Entity {
    static config: any;
    /**
     * Prepare a Collection of ActiveEffect instances which belong to this Item.
     * @param effects - The raw array of active effect objects
     * @returns The prepared active effects collection
     */
    private _prepareActiveEffects(effects: object[]): Collection<string, ActiveEffect>;
    /**
     * Prepare a data object which defines the data schema used by dice roll commands against this Item
     */
    getRollData(): any;
    /**
     * A convenience reference to the Actor entity which owns this item, if any
     */
    actor: Actor | null;
    /**
     * A convenience reference to the image path (data.img) used to represent this Item
     */
    img: string;
    /**
     * Return an array of the Active Effect instances which originated from this Item.
     * If the Item is owned, the returned instances are the ActiveEffect instances which exist on the owning Actor.
     * If the Item is unowned, the returned instances are the ActiveEffect instances which exist on the Item itself.
     */
    transferredEffects: ActiveEffect[];
    /**
     * A convenience reference to the item type (data.type) of this Item
     */
    type: string;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     */
    limited: any;
    /**
     * A flag for whether the item is owned by an Actor entity
     */
    isOwned: any;
    /**
     * Override the standard permission test for Item entities as we need to apply a special check for owned items
     * OwnedItems have permission that the player has for the parent Actor.
     * @returns Whether or not the user has the permission for this item
     */
    hasPerm(): boolean;
    /**
     * A convenience constructor method to create an Item instance which is owned by an Actor
     */
    static createOwned(itemData: any, actor: Actor): void;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
}

/**
 * The Journal collection
 */
declare class Journal extends EntityCollection {
    /**
     * Open Socket listeners which transact JournalEntry data
     */
    private static socketListeners(): void;
    /**
     * Handle a received request to show a JournalEntry to the current client
     * @param entryId - The ID of the journal entry to display for other players
     * @param mode - The JournalEntry mode to display
     * @param force - Display the entry to all players regardless of normal permissions
     */
    private static _showEntry(entryId: string, mode?: string, force?: boolean): void;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
}

/**
 * The JournalEntry class
 */
declare class JournalEntry extends Entity {
    static config: any;
    /**
     * A boolean indicator for whether or not the JournalEntry is visible to the current user in the directory sidebar
     */
    visible: any;
    /**
     * Return a reference to the Note instance for this JournalEntry in the current Scene, if any
     */
    sceneNote: Note;
    /**
     * Show the JournalEntry to connected players.
     * By default the entry will only be shown to players who have permission to observe it.
     * If the parameter force is passed, the entry will be shown to all players regardless of normal permission.
     * @param mode - Which JournalEntry mode to display? Default is text.
     * @param force - Display the entry to all players regardless of normal permissions
     * @returns A Promise that resolves back to the shown entry once the request is processed
     */
    show(mode?: string, force: boolean): Promise<void>;
    /**
     * If the JournalEntry has a pinned note on the canvas, this method will animate to that note
     * The note will also be highlighted as if hovered upon by the mouse
     */
    panToNote(): void;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
}

/**
 * The EntityCollection of Macro entities
 */
declare class Macros extends EntityCollection {
    static instance: any;
    /**
     * Determine whether a given User is allowed to use JavaScript macros
     * @param user - The User entity to test
     * @returns Can the User use scripts?
     */
    static canUseScripts(user: User): boolean;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
    /**
     * Apply data transformations when importing an Entity from a Compendium pack
     * @param data - The original Compendium entry data
     * @returns The processed data ready for Entity creation
     */
    fromCompendium(data: any): any;
}

/**
 * The Macro entity which implements a triggered chat or script expression which can be quickly activated by the user.
 * All users have permission to create and use chat-based Macros, but users must be given special permission to use
 * script-based macros.
 */
declare class Macro extends Entity {
    static config: any;
    /**
     * Is the current User the author of this macro?
     */
    isAuthor: boolean;
    static can(): void;
    /**
     * Execute the Macro command
     */
    execute(): any;
}

/**
 * A :class:`EntityCollection` of class:`ChatMessage` entities
 * The Messages collection is accessible within the game as `game.messages`.
 */
declare class Messages {
    entity: any;
    render(): void;
    /**
     * If requested, dispatch a Chat Bubble UI for the newly created message
     * @param message - The ChatMessage entity to say
     */
    private sayBubble(message: ChatMessage): void;
    /**
     * Handle export of the chat log to a text file
     */
    private export(): void;
    /**
     * Allow for bulk deletion of all chat messages, confirm first with a yes/no dialog.
     */
    flush(): void;
}

/**
 * The Chat Message class is a type of :class:`Entity` which represents individual messages in the chat log.
 */
declare class ChatMessage extends Entity {
    /**
     * Get a reference to the user who sent the chat message
     */
    user: any;
    /**
     * If the Message contains a dice roll, store it here
     */
    _roll: any;
    /**
     * Configure the attributes of the ChatMessage Entity
     */
    static config: any;
    /**
     * Return the recommended String alias for this message.
     * The alias could be a Token name in the case of in-character messages or dice rolls.
     * Alternatively it could be a User name in the case of OOC chat or whispers.
     */
    alias: string;
    static can(): void;
    /**
     * Return whether the ChatMessage is visible to the current user
     * Messages may not be visible if they are private whispers
     */
    visible: boolean;
    /**
     * Is the current User the author of this message?
     */
    isAuthor: boolean;
    /**
     * Test whether the chat message contains a dice roll
     */
    isRoll: boolean;
    /**
     * Return whether the content of the message is visible to the current user
     */
    isContentVisible: boolean;
    /**
     * Return the Roll instance contained in this chat message, if one is present
     */
    roll: Roll;
    /**
     * Render the HTML for the ChatMessage which should be added to the log
     */
    render(): Promise<HTMLElement>;
    static create(): void;
    /**
     * Preprocess the data object used to create a new Chat Message to automatically convert some Objects to the
     * data format expected by the database handler.
     * @param data - Single ChatMessage creation data
     * @param [rollMode] - The visibility mode applied to all dice rolls
     * @returns Processed message creation data
     */
    private static _preprocessCreateData(data: any, rollMode?: string): any;
    /**
     * Export the content of the chat message into a standardized log format
     */
    export(): string;
    /**
     * Transform a provided object of ChatMessage data by applying a certain rollMode to the data object.
     * @param chatData - The object of ChatMessage data prior to applying a rollMode preference
     * @param rollMode - The rollMode preference to apply to this message data
     * @returns The modified ChatMessage data with rollMode preferences applied
     */
    static applyRollMode(chatData: any, rollMode: string): any;
    /**
     * Given a string whisper target, return an Array of the user IDs which should be targeted for the whisper
     * @param name - The target name of the whisper target
     * @returns An array of User instances
     */
    static getWhisperRecipients(name: string): User[];
    /**
     * Attempt to determine who is the speaking character (and token) for a certain Chat Message
     * First assume that the currently controlled Token is the speaker
     * @param [scene] - The Scene in which the speaker resides
     * @param [actor] - The Actor whom is speaking
     * @param [token] - The Token whom is speaking
     * @param [alias] - The name of the speaker to display
     * @returns The identified speaker data
     */
    static getSpeaker(scene?: Scene, actor?: Actor, token?: Token, alias?: string): any;
    /**
     * A helper to prepare the speaker object based on a target Token
     */
    private static _getSpeakerFromToken(): void;
    /**
     * A helper to prepare the speaker object based on a target Actor
     */
    private static _getSpeakerFromActor(): void;
    /**
     * A helper to prepare the speaker object based on a target User
     */
    private static _getSpeakerFromUser(): void;
    /**
     * Obtain a data object used to evaluate any dice rolls associated with this particular chat message
     */
    getRollData(): any;
    /**
     * Obtain an Actor instance which represents the speaker of this message (if any)
     * @param speaker - The speaker data object
     */
    static getSpeakerActor(speaker: any): Actor | null;
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    private _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onUpdateEmbeddedEntity(): void;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    private _onModifyEmbeddedEntity(): void;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
}

/**
 * The EntityCollection of Playlist entities.
 */
declare class Playlists extends EntityCollection {
    /**
     * Return the subset of Playlist entities which are currently playing
     */
    playing: Playlist[];
    /**
     * Handle changes to a Scene to determine whether to trigger changes to Playlist entities.
     * @param scene - The Scene entity being updated
     * @param data - Incremental update data
     * @param options - Update options
     */
    private _onUpdateScene(scene: Scene, data: any, options: any): void;
    /**
     * The source data is, itself, a mapping of IDs to data objects
     */
    _source: object[];
    /**
     * An Array of application references which will be automatically updated when the collection content changes
     */
    apps: Application[];
    /**
     * Initialize the Map object and all its contained entities
     */
    private _initialize(data: Entity[]): void;
    /**
     * Render any Applications associated with this EntityCollection
     * @returns A reference to the rendered EntityCollection
     */
    render(): this;
    /**
     * The EntityCollection name
     */
    name: string;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the Entity subclass which should be used when creating elements of this EntityCollection.
     * This should always be an explicit reference to the class which is used in this game to represent the entity,
     * and not the base implementation of that entity type.
     */
    object: Entity;
    /**
     * Add a new Entity to the EntityCollection, asserting that they are of the correct type.
     * @param entity - The entity instance to add to the collection
     */
    insert(entity: Entity): void;
    /**
     * Remove an Entity from the EntityCollection by its ID.
     * @param id - The entity ID which should be removed
     */
    remove(id: string): void;
    /**
     * Import an Entity from a compendium collection, adding it to the current World.
     * @param collection - The name of the pack from which to import
     * @param entryId - The ID of the compendium entry to import
     * @param [updateData] - Optional additional data used to modify the imported Entity before it is created
     * @param [options] - Optional arguments passed to the Entity.create method
     * @returns A Promise containing the imported Entity
     */
    importFromCollection(collection: string, entryId: string, updateData?: any, options?: any): Promise<Entity>;
    /**
     * Apply data transformations when importing an Entity from a Compendium pack
     * @param data - The original Compendium entry data
     * @returns The processed data ready for Entity creation
     */
    fromCompendium(data: any): any;
    /**
     * Update all objects in this EntityCollection with a provided transformation.
     * Conditionally filter to only apply to Entities which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * Return an Array of all the entry values in the Collection
     */
    entries: any;
    /**
     * Find an entry in the Map using an functional condition.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let a = c.find(entry => entry === "A");
     * @param condition - The functional condition to test
     * @returns The value, if found, otherwise null
     */
    find(condition: (...params: any[]) => any): V | null;
    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     * @param condition - The functional condition to test
     * @returns An Array of matched values
     */
    filter(condition: (...params: any[]) => any): V[];
    /**
     * Get an element from the Collection by its key.
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     * @param key - The key of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false
     * @returns The retrieved entry value, if the key exists, otherwise null
     */
    get(key: string, strict: boolean): V | null;
    /**
     * Get an entry from the Collection by name.
     * Use of this method assumes that the objects stored in the collection have a "name" attribute.
     * @param name - The name of the entry to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns The retrieved Entity, if one was found, otherwise null;
     */
    getName(name: string, strict: boolean): Entity | null;
    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param transformer - The transformation function to apply to each entry value
     * @returns An Array of transformed values
     */
    map(transformer: (...params: any[]) => any): V[];
    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     * @param evaluator - A function which mutates the accumulator each iteration
     * @param initial - An initial value which accumulates with each iteration
     * @returns The accumulated result
     */
    reduce(evaluator: (...params: any[]) => any, initial: any): any;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
}

/**
 * The Playlist Entity.
 * Each Playlist is a collection of Sounds which are used to provide background music and sound effects.
 */
declare class Playlist extends Entity {
    /**
     * Each sound which is played within the Playlist has a created Howl instance.
     * The keys of this object are the sound IDs and the values are the Howl instances.
     */
    audio: any;
    /**
     * Playlists may have a playback order which defines the sequence of Playlist Sounds
     */
    playbackOrder: string[];
    static config: any;
    /**
     * Set up the Howl object by calling the core AudioHelper utility
     * @param sound - The PlaylistSound for which to create an audio object
     * @returns The created audio object
     */
    private _createAudio(sound: any): any;
    /**
     * This callback triggers whenever a sound concludes playback
     * Mark the concluded sound as no longer playing and possibly trigger playback for a subsequent sound depending on
     * the playlist mode.
     * @param soundId - The sound ID of the track which is ending playback
     */
    private _onEnd(soundId: string): void;
    /**
     * Generate a new playback order for the playlist.
     * Use a seed for randomization to (hopefully) guarantee that all clients generate the same random order.
     * The seed is based on the first 9 characters of the UTC datetime multiplied by the index order of the playlist.
     */
    private _getPlaybackOrder(): void;
    /**
     * Get the next sound which should be played in the Playlist after the current sound completes
     * @param soundId - The ID of the currently playing sound
     * @returns The sound data for the next sound to play
     */
    private _getNextSound(soundId: string): any;
    /**
     * An Array of the sound data contained within this Playlist entity
     */
    sounds: object[];
    /**
     * The playback mode for the Playlist instance
     */
    mode: number;
    /**
     * An indicator for whether any Sound within the Playlist is currently playing
     */
    playing: boolean;
    /**
     * Play (or stop) a single sound from the Playlist
     * @param sound - The sound object to begin playback
     */
    playSound(sound: any): void;
    /**
     * Begin simultaneous playback for all sounds in the Playlist.
     * @returns The updated Playlist entity
     */
    playAll(): Promise<Playlist>;
    /**
     * End playback for any/all currently playing sounds within the Playlist.
     * @returns The updated Playlist entity
     */
    stopAll(): Promise<Playlist>;
    /**
     * Cycle the playlist mode
     * @returns A promise which resolves to the updated Playlist instance
     */
    cycleMode(): Promise<Playlist>;
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param force - Force rendering
     * @param context - Optional context
     */
    render(force: boolean, context: Options): void;
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    private _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    visible: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onUpdateEmbeddedEntity(): void;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    private _onModifyEmbeddedEntity(): void;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
}

/**
 * The collection of Scene entities
 */
declare class Scenes {
    entity: any;
    /**
     * Return a reference to the Scene which is currently active
     */
    active: any;
    /**
     * Return a reference to the Scene which is currently viewed
     */
    viewed: any;
    static socketListeners(): void;
    /**
     * Augment the standard modifyDocument listener to flush fog exploration
     */
    private static _resetFog(): void;
    /**
     * Handle pre-loading the art assets for a Scene
     * @param sceneId - The Scene id to begin loading
     * @param push - Trigger other connected clients to also pre-load Scene resources
     */
    preload(sceneId: string, push: boolean): void;
    /**
     * Handle requests pulling the current User to a specific Scene
     */
    private static _pullToScene(sceneId: string): void;
    fromCompendium(): void;
}

/**
 * The Scene Entity.
 * Scenes represent the locations and settings which Actors will explore within the World.
 */
declare class Scene extends Entity {
    /**
     * Track whether the scene is the active view
     */
    _view: boolean;
    /**
     * Track the viewed position of each scene (while in memory only, not persisted)
     * When switching back to a previously viewed scene, we can automatically pan to the previous position.
     * Object with keys: x, y, scale
     */
    _viewPosition: any;
    static config: any;
    /**
     * A convenience accessor for the background image of the Scene
     */
    img: string;
    /**
     * A convenience accessor for whether the Scene is currently active
     */
    active: boolean;
    /**
     * A convenience accessor for whether the Scene is currently viewed
     */
    isView: boolean;
    /**
     * A reference to the JournalEntry entity associated with this Scene, or null
     */
    journal: any;
    /**
     * A reference to the Playlist entity for this Scene, or null
     */
    playlist: Playlist | null;
    /**
     * Set this scene as the current view
     */
    view(): Promise<void>;
    /**
     * Set this scene as currently active
     * @returns A Promise which resolves to the current scene once it has been successfully activated
     */
    activate(): Promise<Scene>;
    static create(): void;
    /**
     * Handle Scene activation workflow if the active state is changed to true
     */
    private _onActivate(): void;
    static _handleCreateEmbeddedEntity(): void;
    static _handleUpdateEmbeddedEntity(): void;
    static _handleDeleteEmbeddedEntity(): void;
    /**
     * Create a 300px by 100px thumbnail image for this scene background
     * @param [stringornull] - A background image to use for thumbnail creation, otherwise the current scene
     *                          background is used.
     * @param [width] - The desired thumbnail width. Default is 300px
     * @param [height] - The desired thumbnail height. Default is 100px;
     * @returns The created thumbnail data.
     */
    createThumbnail(stringornull?: string, width?: number, height?: number): Promise<object>;
    /**
     * The original source data for the Entity provided upon initialization.
     * This reflects the database state of the Entity before any transformations are applied.
     */
    _data: any;
    /**
     * The effective data for the Entity.
     * This data object may have transformations applied to it.
     */
    data: any;
    /**
     * The options object that was used to configure the Entity upon initialization.
     */
    options: any;
    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: {
        [key: string]: any;
    };
    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium | null;
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize(): void;
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    uuid: string;
    /**
     * Return a string which represents a dynamic link to this Entity.
     */
    link: any;
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName - The name of the Embedded Entity type
     * @returns The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): object[];
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param force - Force rendering
     * @param context - Optional context
     */
    render(force: boolean, context: Options): void;
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     */
    id: string;
    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    name: string;
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @example
     * <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    sheet: BaseEntitySheet | null;
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    private _sheetClass: any;
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @example
     * <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    folder: Folder | null;
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    permission: number;
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     */
    owner: boolean;
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    visible: boolean;
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    limited: boolean;
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns An array of User entities who match the permission level
     */
    getUsers(permission: string | number, exact: boolean): User[];
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @example
     * <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     * @param user - The user to test for permission
     * @param permission - The permission level or level name to test
     * @param exact - Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @returns Whether or not the user has the permission for this Entity.
     */
    hasPerm(user: User, permission: string | number, exact: boolean): boolean;
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     */
    hasPlayerOwner: any;
    /**
     * Delete the current Entity.
     * @param options - Options which customize the deletion workflow
     * @returns The deleted Entity
     */
    delete(options: Options): Promise<Entity>;
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     * @param embeddedName - The name of the Embedded Entity type to retrieve
     * @param id - The numeric ID of the child to retrieve
     * @param strict - Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @returns Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName: string, id: string, strict: boolean): any | null;
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or an Array of Data objects to create
     * @param options - Additional creation options which modify the request
     * @param [options.temporary] - Create a temporary entity which is not saved to the world database. Default is false.
     * @param [options.renderSheet] - Display the sheet for each created Embedded Entities once created.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns A Promise which resolves to the created embedded Data once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        temporary?: boolean;
        renderSheet?: boolean;
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.diff] - Difference the provided data against the current to eliminate unnecessary changes.
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The updated Entity or array of Entities
     */
    updateEmbeddedEntity(embeddedName: string, data: Data | Data[], options: {
        diff?: boolean;
        noHook?: boolean;
    }): Promise<Entity | Entity[]>;
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
     * @param embeddedName - The name of the Embedded Entity class to create
     * @param data - A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param options - Additional options which customize the update workflow
     * @param [options.noHook] - Block the dispatch of preUpdate hooks for this operation.
     * @returns The deleted Embedded Entities
     */
    deleteEmbeddedEntity(embeddedName: string, data: string | string[], options: {
        noHook?: boolean;
    }): Promise<Data | Data[]>;
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The updated Entity instance
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative(): void;
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): any;
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): void;
    /**
     * Import data and update this entity
     * @param json - JSON data string
     * @returns The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): void;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    private _onUpdate(): void;
    /**
     * Update the current Entity using provided input data.
     * Data must be provided as a single object which updates the Entity data.
     * @param data - A Data object which updates the Entity
     * @param options - Additional options which customize the update workflow
     * @returns The updated Entity
     */
    update(data: Data, options: Options): Promise<Entity>;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Handle Embedded Entity updates within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onUpdateEmbeddedEntity(): void;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     * Unlike the specific _onCreate, _onUpdate, and _onDelete methods this only runs once per updated batch
     */
    private _onModifyEmbeddedEntity(): void;
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     * @param createData - Additional data which overrides current Entity data at the time of creation
     * @param options - Additional creation options passed to the Entity.create method
     * @returns A Promise which resolves to the created clone Entity
     */
    clone(createData: any, options: any): Promise<Entity>;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
}

/**
 * The EntityCollection of RollTable entities
 */
declare class RollTables extends EntityCollection {
    static instance: any;
    /**
     * Register world settings related to RollTable entities
     */
    static registerSettings(): void;
    /**
     * Return a reference to the SidebarDirectory application for this EntityCollection, or null if it has not yet been created.
     */
    directory: SidebarDirectory | null;
    /**
     * Return a reference to the base Entity name which is contained within this EntityCollection.
     */
    entity: string;
}

declare interface RollTable extends Entity {
}

/**
 * The RollTable entity which implements randomized rollable tables
 */
declare class RollTable implements Entity {
    static config: any;
    /**
     * A convenience accessor for the array of TableResult embedded documents
     */
    results: object[];
    /**
     * Display a result drawn from a RollTable in the Chat Log along.
     * Optionally also display the Roll which produced the result and configure aspects of the displayed messages.
     * @param results - An Array of one or more table results which were drawn and should be displayed
     * @param [roll] - An optional Roll instance which produced the drawn results
     * @param [messageData] - Additional data which customizes the created messages
     * @param [messageOptions] - Additional options which customize the created messages
     */
    toMessage(results: object[], roll?: Roll, messageData?: any, messageOptions?: any): void;
    /**
     * Draw a result from the RollTable based on the table formula or a provided Roll instance
     * @param [roll] - An existing Roll instance to use for drawing from the table
     * @param [recursive] - Allow drawing recursively from inner RollTable results
     * @param [results] - One or more table results which have been drawn
     * @param [displayChat] - Whether to automatically display the results in chat
     * @param [rollMode] - The chat roll mode to use when displaying the result
     * @returns A Promise which resolves to an object containing the
     *                                                      executed roll and the produced results
     */
    draw(roll?: Roll | null, recursive?: boolean, results?: object[], displayChat?: boolean, rollMode?: string | null): Promise<{ roll: Roll; results: object[]; }>;
    /**
     * Draw multiple results from a RollTable, constructing a final synthetic Roll as a dice pool of inner rolls.
     * @param number - The number of results to draw
     * @param [roll] - An optional pre-configured Roll instance which defines the dice roll to use
     * @param [recursive] - Allow drawing recursively from inner RollTable results
     * @param [displayChat] - Automatically display the drawn results in chat? Default is true
     * @param [rollMode] - Customize the roll mode used to display the drawn results
     */
    drawMany(number: number, roll?: Roll, recursive?: boolean, displayChat?: boolean, rollMode?: string): Promise<{ roll: Roll; results: object[]; }>;
    /**
     * Normalize the probabilities of rolling each item in the RollTable based on their assigned weights
     */
    normalize(): Promise;
    /**
     * Reset the state of the RollTable to return any drawn items to the table
     */
    reset(): Promise;
    /**
     * Evaluate a RollTable by rolling its formula and retrieving a drawn result.
     *
     * Note that this function only performs the roll and identifies the result, the RollTable#draw function should be
     * called to formalize the draw from the table.
     * @example
     * // Draw results using the default table formula
     * const defaultResults = table.roll();
     *
     * // Draw results using a custom roll formula
     * const roll = new Roll("1d20 + @abilities.wis.mod", actor.getRollData());
     * const customResults = table.roll({roll});
     * @param [roll] - An alternative dice Roll to use instead of the default formula for the table
     * @param recursive - If a RollTable entity is drawn as a result, recursively roll it
     * @param _depth - An internal flag used to track recursion depth
     * @returns An object containing the executed roll and the produced results
     */
    roll(roll?: Roll, recursive: boolean, _depth: number): any;
    /**
     * Get an Array of valid results for a given rolled total
     * @param value - The rolled value
     * @returns An Array of results
     */
    private _getResultsForRoll(value: number): object[];
    /**
     * Get a string representation for the result which (if possible) will be a dynamic link or otherwise plain text
     * @param result - The result object
     * @returns The text to display
     */
    private _getResultChatText(result: any): string;
    getTableResult(): void;
    /**
     * Create a new RollTable entity using all of the Entities from a specific Folder as new results.
     * @param folder - The Folder entity from which to create a roll table
     * @param options - Additional options passed to the RollTable.create method
     */
    static fromFolder(folder: Folder, options: any): Promise<RollTable>;
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;
    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onCreateEmbeddedEntity(): void;
    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This function is triggered once per EmbeddedEntity which is updated.
     * It therefore may run multiple times per creation workflow.
     * Any steps defined here should run on a per-EmbeddedEntity basis.
     * Steps that should run once for the whole batch should go in _onModifyEmbeddedEntity()
     */
    private _onDeleteEmbeddedEntity(): void;
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     * @returns A data object of cleaned data ready for compendium import
     */
    toCompendium(): any;
}

/**
 * The collection of User entities which is accessible through game.users.
 * The array of User entities within this collection is accessible through game.users.entities.
 */
declare class Users {
    /**
     * The User entity of the currently connected user
     */
    current: User | null;
    /**
     * Initialize the Map object and all its contained entities
     */
    private _initialize(data: object[]): void;
    entity: any;
    /**
     * Get the users with player roles
     */
    players: any;
    static socketListeners(): void;
    /**
     * Handle receipt of activity data from another User connected to the Game session
     * @param userId - The User id who generated the activity data
     * @param activityData - The object of activity data
     */
    private static _handleUserActivity(userId: string, activityData: any): void;
}

declare interface User extends Entity {
}

/**
 * The User entity
 * Each player who connects to a Foundry Virtual Tabletop session is a User.
 * Users represent human beings (or possibly programmatic players) and are the cornerstone of identity in Foundry VTT.
 * @param data - The source data for the User entity, usually retrieved from the database.
 * @param data._id - The Entity ID, automatically generated by the Database when a new User is created.
 * @param data.password - An access key for the Entity.
 * @param data.role - The role level for the User, from CONST.USER_ROLES
 * @param data.permissions - An object of key-value permissions for the User which extend the default functionality
 *                                   of the User's role.
 * @param data.avatar - A web-accessible file path to an avatar image used to represent the User.
 * @param data.character - The _id of the Actor entity that the User has chosen as their primary character.
 * @param data.color - A color string which represents the visual color associated with this particular User.
 * @param data.flags - A free-form object of key-value pairs which allows modules and systems the ability
 *                                   to store arbitrary data as part of the User object.
 * @param options - Initialization options which modify the construction of a User entity. See the Entity
 *                                   class for more detail.
 */
declare class User implements Entity {
    constructor(data: {
        _id: string;
        password: string;
        role: number;
        permissions: any;
        avatar: string;
        character: string;
        color: string;
        flags: any;
    }, options: any);
    /**
     * Track whether the user is currently active in the game
     */
    active: boolean;
    /**
     * Track references to the current set of Tokens which are targeted by the User
     */
    targets: Set<Token>;
    /**
     * Track the ID of the Scene that is currently being viewed by the User
     */
    viewedScene: string | null;
    static config: any;
    /**
     * Return the User avatar icon or the controlled actor's image
     */
    avatar: string;
    /**
     * Return the Actor instance of the user's impersonated character (or undefined)
     */
    character: Actor;
    /**
     * A convenience shortcut for the permissions object of the current User
     */
    permissions: any;
    /**
     * A flag for whether the current User is a Trusted Player
     */
    isTrusted: any;
    /**
     * A flag for whether the current User has Assistant GameMaster or full GameMaster role
     */
    isGM: any;
    /**
     * A flag for whether this User is the connected client
     */
    isSelf: any;
    /**
     * Test whether the User is able to perform a certain permission action. Game Master users are always allowed to
     * perform every action, regardless of permissions.
     * @param permission - The action to test
     * @returns Does the user have the ability to perform this action?
     */
    can(permission: string): boolean;
    /**
     * Test whether the User has a specific permission entitled .This differs from user#can because it does not always
     * return true for Game Master users and should be used in cases where a permission could be withheld even from
     * a GM player (for example cursor display, or A/V audio).
     * @param permission - The action to test
     * @returns Does the user have explicit permission to perform this action?
     */
    hasPermission(permission: string): boolean;
    /**
     * Test whether the User has at least the permission level of a certain role
     * @param role - The role name from USER_ROLES to test
     * @returns Does the user have at least this role level?
     */
    hasRole(role: string | number): boolean;
    /**
     * Test whether the User has exactly the permission level of a certain role
     * @param role - The role name from USER_ROLES to test
     * @returns Does the user have exactly this role level?
     */
    isRole(role: string | number): boolean;
    /**
     * Sets a user's permission
     * Modifies the user permissions to grant or restrict access to a feature.
     * @param permission - The permission name from USER_PERMISSIONS
     * @param allowed - Whether to allow or restrict the permission
     */
    setPermission(permission: string, allowed: boolean): void;
    /**
     * Submit User activity data to the server for broadcast to other players.
     * This type of data is transient, persisting only for the duration of the session and not saved to any database.
     * @param activityData - An object of User activity data to submit to the server for broadcast.
     * @param activityData.cursor - The coordinates of the user's cursor
     * @param activityData.focus - Is the user pulling focus to the cursor coordinates?
     * @param activityData.ping - Is the user emitting a ping at the cursor coordinates?
     * @param activityData.ruler - Serialized Ruler coordinate data in JSON format
     * @param activityData.sceneId - The id of the Scene currently being viewed by the User
     * @param activityData.targets - An id of Token ids which are targeted by the User
     */
    broadcastActivity(activityData: {
        cursor: any;
        focus: boolean;
        ping: boolean;
        ruler: string;
        sceneId: string;
        targets: string[];
    }): void;
    /**
     * Assign a Macro to a numbered hotbar slot between 1 and 50
     * @param macro - The Macro entity to assign
     * @param slot - The integer Hotbar slot to fill
     * @param [fromSlot] - An optional origin slot from which the Macro is being shifted
     * @returns A Promise which resolves once the User update is complete
     */
    assignHotbarMacro(macro: Macro | null, slot: number, fromSlot?: number): Promise<User>;
    /**
     * Get an Array of Macro Entities on this User's Hotbar by page
     * @param page - The hotbar page number
     */
    getHotbarMacros(page?: number): object[];
    /**
     * Additional updating steps for the User entity when new data is saved which trigger some related updates.
     *
     * Re-draw the active cursor and toggle visibility
     * Re-draw navigation if the active or viewed scenes have changed
     * Render the players UI if activity status or other player features have changed
     * Update the canvas if the player's impersonated character has changed
     */
    private _onUpdate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    private _onCreate(): void;
    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    private _onDelete(): void;
}

/**
 * A subclass of Set which manages the Token ids which the User has targeted
 */
declare class UserTargets extends Set {
    /**
     * Return the Token IDs which are user targets
     */
    ids: any;
    add(): void;
    clear(): void;
    delete(): void;
    /**
     * Dispatch the targetToken hook whenever the user's target set changes
     */
    _hook(): void;
}

/**
 * @property key - The key
 * @property value - The value of the change
 * @property mode - The mode of the change application
 * @property priority - The priority with which this change is applied
 */
declare type ActiveEffectChange = {
    key: string;
    value: any;
    mode: number;
    priority: number;
};

/**
 * @property [startTime] - The game time in seconds when the effect started
 * @property [seconds] - The duration of the effect, in seconds
 * @property [combat] - The _id of the Combat entity where the effect began
 * @property [rounds] - The number of combat rounds the effect lasts
 * @property [turns] - The number of combat turns that the effect lasts
 * @property [startRound] - The round of combat in which the effect started
 * @property [startTurn] - The turn of combat in which the effect started
 */
declare type ActiveEffectDuration = {
    startTime?: number;
    seconds?: number;
    combat?: string;
    rounds?: number;
    turns?: number;
    startRound?: number;
    startTurn?: number;
};

/**
 * @property _id - The EmbeddedEntity id of the Active Effect
 * @property label - The label which describes this effect
 * @property duration - The duration of the effect
 * @property changes - The changes applied by this effect
 * @property [disabled] - Is this effect currently disabled?
 * @property [icon] - An image icon path for this effect
 * @property [tint] - A hex color string to tint the effect icon
 * @property [origin] - The UUID of an Entity or EmbeddedEntity which was the source of this effect
 * @property [transfer] - Should this effect transfer automatically to an Actor when its Item becomes owned?
 * @property flags - Additional key/value flags
 */
declare type ActiveEffectData = {
    _id: string;
    label: string;
    duration: ActiveEffectDuration;
    changes: ActiveEffectChange[];
    disabled?: boolean;
    icon?: string;
    tint?: string;
    origin?: string;
    transfer?: boolean;
    flags: any;
};

declare interface ActiveEffect extends EmbeddedEntity {
}

/**
 * An Active Effect instance within a parent Actor or Item.
 * @param data - Data for the Active Effect
 * @param parent - The parent Entity which owns the effect
 */
declare class ActiveEffect implements EmbeddedEntity {
    constructor(data: ActiveEffectData, parent: Actor | Item);
    /**
     * A cached reference to the source name to avoid recurring database lookups
     */
    _sourceName: string | null;
    /**
     * Report the active effect duration
     */
    duration: any;
    /**
     * Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.
     */
    isTemporary: boolean;
    /**
     * A cached property for obtaining the source name
     */
    sourceName: any;
    /**
     * Get the name of the source of the Active Effect
     */
    _getSourceName(): void;
    /**
     * An instance of the ActiveEffectConfig sheet to use for this ActiveEffect instance.
     * The reference to the sheet is cached so the same sheet instance is reused.
     */
    sheet: ActiveEffectConfig;
    /**
     * Apply this ActiveEffect to a provided Actor.
     * @param actor - The Actor to whom this effect should be applied
     * @param change - The change data being applied
     * @returns The resulting applied value
     */
    apply(actor: Actor, change: ActiveEffectChange): any;
    /**
     * Apply an ActiveEffect that uses an ADD application mode.
     * The way that effects are added depends on the data type of the current value.
     *
     * If the current value is null, the change value is assigned directly.
     * If the current type is a string, the change value is concatenated.
     * If the current type is a number, the change value is cast to numeric and added.
     * If the current type is an array, the change value is appended to the existing array if it matches in type.
     * @param actor - The Actor to whom this effect should be applied
     * @param change - The change data being applied
     * @returns The resulting applied value
     */
    private _applyAdd(actor: Actor, change: ActiveEffectChange): any;
    /**
     * Apply an ActiveEffect that uses a MULTIPLY application mode.
     * @param actor - The Actor to whom this effect should be applied
     * @param change - The change data being applied
     * @returns The resulting applied value
     */
    private _applyMultiply(actor: Actor, change: ActiveEffectChange): any;
    /**
     * Apply an ActiveEffect that uses an OVERRIDE, UPGRADE, or DOWNGRADE application mode.
     * @param actor - The Actor to whom this effect should be applied
     * @param change - The change data being applied
     * @returns The resulting applied value
     */
    private _applyOverride(actor: Actor, change: ActiveEffectChange): any;
    /**
     * Apply an ActiveEffect that uses a CUSTOM application mode.
     * @param actor - The Actor to whom this effect should be applied
     * @param change - The change data being applied
     * @returns The resulting applied value
     */
    private _applyCustom(actor: Actor, change: ActiveEffectChange): any;
    /**
     * A convenience method for creating an ActiveEffect instance within a parent Actor or Item.
     * @param options - Configuration options which modify the request.
     * @returns The created ActiveEffect data.
     */
    create(options: Options): Promise<Data>;
    /**
     * A convenience method for updating an ActiveEffect instance in an parent Actor or Item.
     * @param data - Differential data with which to update the ActiveEffect.
     * @param options - Configuration options which modify the request.
     * @returns The updated ActiveEffect data.
     */
    update(data: Data, options: Options): Promise<Data>;
    /**
     * A convenience method for deleting an ActiveEffect instance in an parent Actor or Item.
     * @param options - Configuration options which modify the request.
     * @returns The deleted ActiveEffect _id.
     */
    delete(options: Options): Promise<string>;
    /**
     * A factory method which creates an ActiveEffect instance using the configured class.
     * @param args - Initialization arguments passed to the ActiveEffect constructor.
     * @returns The constructed ActiveEffect instance.
     */
    static create(...args: any[]): ActiveEffect;
    /**
     * A helper function to handle obtaining dropped ActiveEffect data from a dropped data transfer event.
     * @param data - The data object extracted from a DataTransfer event
     * @returns The ActiveEffect instance which contains the dropped effect data
     */
    static fromDropData(data: any): ActiveEffect;
}

/**
 * A helper class providing utility methods for PIXI Canvas animation
 */
declare class CanvasAnimation {
    /**
     * Apply a linear animation from the current value of some attribute to a new value
     * Resolve a Promise once the animation has concluded and the attributes have reached their new target
     * @example
     * let animation = [
     *   {
     *     parent: token,
     *     attribute: x,
     *     to: 1000
     *   },
     *   {
     *     parent: token,
     *     attribute: y,
     *     to: 2000
     *   }
     * ];
     * CanvasAnimation.animateLinear(attributes, {duration:500, ontick: console.log("ticking")});
     * @param attributes - An array of attributes to animate. Structure of the Array is shown in the example
     * @param context - An animation context to use which defines scope
     * @param name - Provide a unique animation name which may be referenced later
     * @param duration - The duration in milliseconds over which the animation should occur
     * @param ontick - A function which defines additional behaviors to apply every animation frame
     * @returns A Promise which resolves once the linear animation has concluded
     */
    static animateLinear(attributes: object[], context: Container, name: string, duration: number, ontick: (...params: any[]) => any): Promise;
    /**
     * If an animation using a certain name already exists, terminate it
     * @param name - The animation name to terminate
     */
    static terminateAnimation(name: string): void;
    /**
     * Asynchronously animate a transition function and resolve a Promise once the animation has completed
     * @param fn - A suitable transition function. See PIXI.Ticker for details
     * @param context - The Canvas container providing scope for the transition
     * @param name - Provide a unique animation name which may be referenced later
     * @param args - Variable argument passed to the transition function each frame
     * @returns A Promise which resolves once the animation has completed
     */
    private static _animatePromise(fn: (...params: any[]) => any, context: Container, name: string, ...args: any[]): Promise;
    /**
     * Generic ticker function to implement the animation.
     * This animation wrapper executes once per frame for the duration of the animation event.
     * Once the animated attributes have converged to their targets, it resolves the original Promise.
     * The user-provided ontick function runs each frame update to apply additional behaviors.
     */
    private static _animateFrame(): void;
    /**
     * Track an object of active animations by name, context, and function
     * This allows a currently playing animation to be referenced and terminated
     */
    static animations: any;
}

/**
 * A generic helper for drawing a standard Control Icon
 */
declare class ControlIcon {
}

/**
 * A Loader class which helps with loading video and image textures
 */
declare class TextureLoader {
    /**
     * Load all the textures which are required for a particular Scene
     * @param scene - The Scene to load
     */
    static loadSceneTextures(scene: Scene): Promise<void>;
    /**
     * Load an Array of provided source URL paths
     * @param sources - The source URLs to load
     * @param message - The status message to display in the load bar
     * @returns A Promise which resolves once all textures are loaded
     */
    load(sources: string[], message: string): Promise<void>;
    /**
     * Load a single texture on-demand from a given source URL path
     */
    loadTexture(src: any): Promise<PIXI.Texture>;
    /**
     * Log texture loading progress in the console and in the Scene loading bar
     */
    private _onProgress(): void;
    /**
     * Log failed texture loading
     */
    private _onError(): void;
    /**
     * Load an image texture from a provided source url
     */
    loadImageTexture(src: string): Promise<PIXI.Texture>;
    /**
     * If an attempted image load failed, we may attempt a re-load in case the issue was CORS + caching
     * Cross-origin requests which failed might be CORS, or might be 404, no way to know - so try a 2nd time
     * @param src - The source URL being attempted
     * @param resolve - Resolve the promise
     * @param reject - Reject the promise
     */
    private _attemptCORSReload(src: string, resolve: (...params: any[]) => any, reject: (...params: any[]) => any): void;
    /**
     * Load a video texture from a provided source url
     */
    loadVideoTexture(src: string): Promise<PIXI.Texture>;
    /**
     * Add an image url to the texture cache
     * @param src - The source URL
     * @param tex - The readied texture
     */
    setCache(src: string, tex: PIXI.Texture): void;
    /**
     * Retrieve a texture from the texture cache
     * @param src - The source URL
     */
    getCache(src: string): void;
    /**
     * A global reference to the singleton texture loader
     */
    static loader: TextureLoader;
}

/**
 * Test whether a file source exists by performing a HEAD request against it
 * @param src - The source URL or path to test
 * @returns Does the file exist at the provided url?
 */
declare function srcExists(src: string): boolean;

/**
 * Get a single texture from the cache
 */
declare function getTexture(src: string): PIXI.Texture;

/**
 * Load a single texture and return a Promise which resolves once the texture is ready to use
 * @param src - The requested texture source
 * @param fallback - A fallback texture to use if the requested source is unavailable or invalid
 */
declare function loadTexture(src: string, fallback: string): PIXI.Texture;

/**
 * Handle mouse interaction events for a Canvas object.
 * There are three phases of events: hover, click, and drag
 *
 * Hover Events:
 * _handleMouseOver
 *  action: hoverIn
 * _handleMouseOut
 *  action: hoverOut
 *
 * Left Click and Double-Click
 * _handleMouseDown
 *  action: clickLeft
 *  action: clickLeft2
 *
 * Right Click and Double-Click
 * _handleRightDown
 *  action: clickRight
 *  action: clickRight2
 *
 * Drag and Drop
 * _handleMouseMove
 *  action: dragLeftStart
 *  action: dragLeftMove
 *  action: dragRightStart
 *  action: dragLeftMove
 * _handleMouseUp
 *  action: dragLeftDrop
 *  action: dragRightDrop
 * _handleDragCancel
 *  action: dragLeftCancel
 *  action: dragRightCancel
 */
declare class MouseInteractionManager {
    /**
     * The current interaction state
     */
    state: number;
    /**
     * Bound handlers which can be added and removed
     */
    handlers: any;
    /**
     * The drag handling time
     */
    dragTime: number;
    /**
     * The throttling time below which a mouse move event will not be handled
     */
    private _dragThrottleMS: number;
    /**
     * The time of the last left-click event
     */
    lcTime: number;
    /**
     * The time of the last right-click event
     */
    rcTime: number;
    /**
     * A flag for whether we are right-click dragging
     */
    _dragRight: boolean;
    /**
     * Get the target
     */
    target: any;
    /**
     * Activate interactivity for the handled object
     */
    activate(): void;
    /**
     * Test whether the current user has permission to perform a step of the workflow
     * @param action - The action being attempted
     * @param event - The event being handled
     * @returns Can the action be performed?
     */
    can(action: string, event: Event): boolean;
    /**
     * Execute a callback function associated with a certain action in the workflow
     * @param action - The action being attempted
     * @param event - The event being handled
     */
    callback(action: string, event: Event): void;
    /**
     * A reference to the possible interaction states which can be observed
     */
    states: any;
    /**
     * Activate a set of listeners which handle hover events on the target object
     */
    private _activateHoverEvents(): void;
    /**
     * Activate a new set of listeners for click events on the target object
     */
    private _activateClickEvents(): void;
    /**
     * Deactivate event listeners for click events on the target object
     */
    private _deactivateClickEvents(): void;
    /**
     * Activate events required for handling a drag-and-drop workflow
     */
    private _activateDragEvents(): void;
    /**
     * Deactivate events required for handling drag-and-drop workflow.
     */
    private _deactivateDragEvents(): void;
    /**
     * Handle mouse-over events which activate downstream listeners and do not stop propagation.
     */
    private _handleMouseOver(): void;
    /**
     * Handle mouse-out events which terminate hover workflows and do not stop propagation.
     */
    private _handleMouseOut(): void;
    /**
     * Handle mouse-down events which activate downstream listeners.
     * Stop further propagation only if the event is allowed by either single or double-click.
     */
    private _handleMouseDown(): void;
    /**
     * Handle mouse-down which trigger a single left-click workflow.
     */
    private _handleClickLeft(): void;
    /**
     * Handle mouse-down which trigger a single left-click workflow.
     */
    private _handleClickLeft2(): void;
    /**
     * Handle right-click mouse-down events.
     * Stop further propagation only if the event is allowed by either single or double-click.
     */
    private _handleRightDown(): void;
    /**
     * Handle single right-click actions.
     */
    private _handleClickRight(): void;
    /**
     * Handle double right-click actions.
     */
    private _handleClickRight2(): void;
    /**
     * Handle mouse movement during a drag workflow
     */
    private _handleMouseMove(): void;
    /**
     * Handle the beginning of a new drag start workflow, moving all controlled objects on the layer
     */
    private _handleDragStart(): void;
    /**
     * Handle the continuation of a drag workflow, moving all controlled objects on the layer
     */
    private _handleDragMove(): void;
    /**
     * Handle mouse up events which may optionally conclude a drag workflow
     */
    private _handleMouseUp(): void;
    /**
     * Handle the conclusion of a drag workflow, placing all dragged objects back on the layer
     */
    private _handleDragDrop(): void;
    /**
     * Handle the cancellation of a drag workflow, resetting back to the original state
     */
    private _handleDragCancel(event: PointerEvent): void;
    /**
     * Enumerate the states of a mouse interaction workflow.
     * 0: NONE - the object is inactive
     * 1: HOVER - the mouse is hovered over the object
     * 2: CLICKED - the object is clicked
     * 3: DRAG - the object is being dragged
     * 4: DROP - the object is being dropped
     */
    static INTERACTION_STATES: {
        [key: string]: number;
    };
}

declare type QuadtreeObject = any;

/**
 * A Quadtree implementation that supports collision detection for rectangles.
 * @param The - outer bounds of the region
 * @param options - Additional options which configure the Quadtree
 * @param options.maxObjects - The maximum number of objects per node
 * @param options.maxDepth - The maximum number of levels within the root Quadtree
 * @param options._depth - The depth level of the sub-tree. For internal use only
 * @param options._depth - Whether this node represents the root of the tree. For internal use.
 */
declare class Quadtree {
    constructor(The: Rectangle, options: {
        maxObjects: number;
        maxDepth: number;
        _depth: number;
        _depth: number;
    });
    /**
     * The bounding rectangle of the region
     */
    bounds: Rectangle;
    /**
     * The maximum number of objects allowed within this node before it must split
     */
    maxObjects: number;
    /**
     * The maximum number of levels that the base quadtree is allowed
     */
    maxDepth: number;
    /**
     * The depth of this node within the root Quadtree
     */
    depth: number;
    /**
     * The objects contained at this level of the tree
     */
    objects: QuadtreeObject[];
    /**
     * Children of this node
     */
    nodes: Quadtree[];
    /**
     * Return an array of all the objects in the Quadtree (recursive)
     */
    all: any;
    /**
     * Clear the quadtree of all existing contents
     * @returns The cleared Quadtree
     */
    clear(): Quadtree;
    /**
     * Add a rectangle object to the tree
     * @param obj - The object being inserted
     * @returns The Quadtree nodes the object was added to.
     */
    insert(obj: QuadtreeObject): Quadtree[];
    /**
     * Remove an object from the quadtree
     * @param The - quadtree target being removed
     * @returns The Quadtree for method chaining
     */
    remove(The: target): Quadtree;
    /**
     * Split this node into 4 sub-nodes.
     * @returns The split Quadtree
     */
    split(): Quadtree;
    /**
     * Get all the objects which could collide with the provided rectangle
     * @param rect - The target rectangle
     * @param _s - The existing result set, for internal use.
     * @returns The objects in the Quadtree which represent potential collisions
     */
    getObjects(rect: Rectangle, _s: Set): Set;
    /**
     * Obtain the leaf nodes to which a target rectangle belongs.
     * This traverses the quadtree recursively obtaining the final nodes which have no children.
     * @param rect - The target rectangle.
     * @returns The Quadtree nodes to which the target rectangle belongs
     */
    getLeafNodes(rect: Rectangle): Quadtree[];
    /**
     * Obtain the child nodes within the current node which a rectangle belongs to.
     * Note that this function is not recursive, it only returns nodes at the current or child level.
     * @param rect - The target rectangle.
     * @returns The Quadtree nodes to which the target rectangle belongs
     */
    getChildNodes(rect: Rectangle): Quadtree[];
    /**
     * Visualize the nodes and objects in the quadtree
     * @param [objects] - Visualize the rectangular bounds of objects in the Quadtree. Default is false.
     */
    visualize(objects?: boolean): void;
    /**
     * A constant that enumerates the index order of the quadtree nodes from top-left to bottom-right.
     */
    static INDICES: any;
}

/**
 * A ray for the purposes of computing sight and collision
 * Given points A[x,y] and B[x,y]
 *
 * Slope-Intercept form:
 * y = a + bx
 * y = A.y + ((B.y - A.Y) / (B.x - A.x))x
 *
 * Parametric form:
 * R(t) = (1-t)A + tB
 * @param A - The origin of the Ray
 * @param B - The destination of the Ray
 */
declare class Ray {
    constructor(A: any, B: any);
    /**
     * The slope of the ray, dy over dx
     */
    slope: number;
    /**
     * The normalized angle of the ray in radians on the range (-PI, PI)
     */
    angle: number;
    /**
     * The distance of the ray
     */
    distance: number;
    /**
     * A bounding rectangle that encompasses the Ray
     */
    bounds: NormalizedRectangle;
    /**
     * Return the value of the angle normalized to the range (0, 2*PI)
     * This is useful for testing whether an angle falls between two others
     */
    normAngle: number;
    /**
     * A factory method to construct a Ray from an origin point, an angle, and a distance
     * @param x - The origin x-coordinate
     * @param y - The origin y-coordinate
     * @param radians - The ray angle in radians
     * @param distance - The distance of the ray in pixels
     * @returns The constructed Ray instance
     */
    static fromAngle(x: number, y: number, radians: number, distance: number): Ray;
    /**
     * A factory method to construct a Ray from points in array format.
     * @param A - The origin point [x,y]
     * @param B - The destination point [x,y]
     * @returns The constructed Ray instance
     */
    static fromArrays(A: number[], B: number[]): Ray;
    /**
     * Project the Array by some proportion of it's initial distance.
     * Return the coordinates of that point along the path.
     * @param t - The distance along the Ray
     * @returns The coordinates of the projected point
     */
    project(t: number): any;
    /**
     * Create a new ray which uses the same origin point, but a slightly offset angle and distance
     * @param offset - An offset in radians which modifies the angle of the original Ray
     * @param [distance] - A distance the new ray should project, otherwise uses the same distance.
     * @returns A new Ray with an offset angle
     */
    shiftAngle(offset: number, distance?: number): Ray;
    /**
     * Find the point I[x,y] and distance t* on ray R(t) which intersects another ray
     * http://paulbourke.net/geometry/pointlineplane/
     * @param coords - An array of coordinates [x0, y0, x1, y1] which defines a line segment to test
     * @returns The point of collision [x,y] the position of that collision point along the Ray (t0) an the tested
     *    segment (t1). Returns false if no collision occurs.
     */
    intersectSegment(coords: number[]): any | false;
    /**
     * An internal helper method for computing the intersection between two lines.
     */
    private static _getIntersection(): void;
}

/**
 * A PIXI.Rectangle where the width and height are always positive and the x and y are always the top-left
 */
declare class NormalizedRectangle {
}

/**
 * A helper class used by the Sight Layer to represent a source of vision or illumination.
 */
declare class PointSource {
    /**
     * The light or darkness container for this source
     */
    illumination: PIXI.Container;
    /**
     * This visible color container for this source
     */
    coloration: PIXI.Container;
    /**
     * A flag for whether this source is currently active (rendered) or not
     */
    active: boolean;
    /**
     * Internal flag for whether this is a darkness source
     */
    darkness: boolean;
    /**
     * Is the light source limited by an angle of emission?
     */
    limited: boolean;
    /**
     * The maximum radius of emission for this source
     */
    radius: number;
    /**
     * Internal flag for animation throttling time
     */
    _animateTime: number;
    /**
     * An integer seed which de-synchronizes otherwise similar animations
     */
    _animateSeed: number | null;
    /**
     * A flag for whether to re-initialize illumination shader uniforms the next time the light is rendered.
     */
    _resetIlluminationUniforms: boolean;
    /**
     * A flag for whether to re-initialize coloration shader uniforms the next time the light is rendered.
     */
    _resetColorationUniforms: boolean;
    /**
     * Create the structure of a source Container which can be rendered to the sight layer shadow-map
     * @returns The constructed light source container
     */
    private _createContainer(): PIXI.Container;
    /**
     * Initialize the source with provided object data.
     * @param data - Input data which configures the source.
     * @param data.x - The x-coordinate of the source location
     * @param data.y - The y-coordinate of the source location
     * @param [data.z] - An optional z-index sorting for the source
     * @param data.dim - The allowed radius of dim vision or illumination
     * @param data.bright - The allowed radius of bright vision or illumination
     * @param data.angle - The angle of emission for this point source
     * @param data.rotation - The angle of rotation for this point source
     * @param data.color - A tint color for the emitted light, if any
     * @param data.alpha - An opacity for the emitted light, if any
     * @param data.darknessThreshold - A level of darkness beyond which this light is active
     * @param data.type - The source type from SOURCE_TYPES
     * @param data.animation - An animation configuration for the source
     * @param data.seed - An integer seed to synchronize (or de-synchronize) animations
     * @returns A reference to the initialized source
     */
    initialize(data: {
        x: number;
        y: number;
        z?: number;
        dim: number;
        bright: number;
        angle: number;
        rotation: number;
        color: number;
        alpha: number;
        darknessThreshold: number;
        type: string;
        animation: any;
        seed: number;
    }): PointSource;
    /**
     * Initialize the shaders used for this animation.
     * Reset the current shader values back to defaults.
     * Swap to a different Shader instance if necessary.
     */
    private _initializeShaders(): void;
    /**
     * Initialize the blend mode and vertical sorting of this source relative to others in the container.
     */
    private _initializeBlending(): void;
    /**
     * Draw the display of this source for the darkness/light container of the SightLayer.
     * @param [updateChannels = false] - Is this drawing initiated because lighting channels have changed?
     * @returns The rendered light container
     */
    drawLight(updateChannels?: boolean): PIXI.Container;
    /**
     * Draw and return a container used to depict the visible color tint of the light source on the LightingLayer
     * @returns An updated color container for the source
     */
    drawColor(): PIXI.Container;
    /**
     * A common helper function for updating the display of a source container.
     * Assign the container position, dimensions, and polygons.
     */
    private _drawContainer(): void;
    /**
     * Animate the PointSource, if an animation is enabled and if it currently has rendered containers.
     * @param dt - Delta time
     */
    animate(dt: number): void;
    /**
     * A torch animation where the luminosity and coloration decays each frame and is revitalized by flashes
     * @param dt - Delta time
     * @param speed - The animation speed, from 1 to 10
     * @param intensity - The animation intensity, from 1 to 10
     */
    animateTorch(dt: number, speed: number, intensity: number): void;
    /**
     * A basic "pulse" animation which expands and contracts.
     * @param dt - Delta time
     * @param speed - The animation speed, from 1 to 10
     * @param intensity - The animation intensity, from 1 to 10
     */
    animatePulse(dt: number, speed: number, intensity: number): void;
    /**
     * Emanate waves of light from the source origin point
     * @param dt - Delta time
     * @param speed - The animation speed, from 1 to 10
     * @param intensity - The animation intensity, from 1 to 10
     */
    animateTime(dt: number, speed: number, intensity: number): void;
    /**
     * Evolve a value using a stochastic AR(1) process
     * @param y - The current value
     * @param phi - The decay rate of prior values
     * @param center - The stationary mean of the series
     * @param sigma - The volatility of the process - standard deviation of the error term
     * @param max - The maximum allowed outcome, or null
     * @param min - The minimum allowed outcome, or null
     * @returns The new value of the process
     */
    private _ar1(y: number, phi: number, center: number, sigma: number, max: number | null, min: number | null): number;
    /**
     * The default Geometry stored in the GPU for all Point Source meshes.
     */
    static GEOMETRY: PIXI.Geometry;
}

/**
 * An extension of the default PIXI.Text object which forces double resolution.
 * At default resolution Text often looks blurry or fuzzy.
 */
declare class PreciseText {
}

/**
 * A PIXI.Container subclass of CanvasLayer responsible for rendering the scene background image.
 * The singleton instance of this class is accessed through ``canvas.background``.
 */
declare class BackgroundLayer {
    /**
     * The background image
     */
    img: PIXI.Sprite;
    /**
     * Return the base HTML element which is used to generate the Scene background
     */
    source: any;
    /**
     * Return a Boolean flag for whether the Scene background texture is a Video element
     */
    isVideo: any;
    activate(): void;
    tearDown(): void;
    /**
     * Draw the background image.
     * We first load the image texture and store it in the PIXI loader.
     * Once the requested image has been fully loaded we draw it as a PIXI.Sprite
     * @returns Returns the instance of the Background Layer for convenient chaining
     */
    draw(): Promise<BackgroundLayer>;
    static createThumbnail(): void;
}

/**
 * The DrawingsLayer subclass of PlaceablesLayer
 *
 * This layer implements a container for drawings which are rendered immediately above the TilesLayer
 * and immediately below the GridLayer.
 */
declare class DrawingsLayer {
    static layerOptions: any;
    /**
     * Use an adaptive precision depending on the size of the grid
     */
    gridPrecision: number;
    hud: any;
    /**
     * Render a configuration sheet to configure the default Drawing settings
     */
    configureDefault(): void;
    /**
     * Override the deactivation behavior of this layer.
     * Placeables on this layer remain visible even when the layer is inactive.
     */
    deactivate(): void;
    /**
     * Get initial data for a new drawing.
     * Start with some global defaults, apply user default config, then apply mandatory overrides per tool.
     * @param origin - The initial coordinate
     * @returns The new drawing data
     */
    private _getNewDrawingData(origin: any): any;
    _onClickLeft(): void;
    _onClickLeft2(): void;
    _onDragLeftStart(): void;
    _onDragLeftMove(): void;
    /**
     * Handling of mouse-up events which conclude a new object creation after dragging
     */
    private _onDragLeftDrop(): void;
    _onDragLeftCancel(): void;
    _onClickRight(): void;
}

/**
 * A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more
 */
declare class EffectsLayer {
    /**
     * The weather overlay container
     */
    weather: PIXI.Container;
    /**
     * The currently active weather effect
     */
    weatherEffect: SpecialEffect;
    /**
     * Track any active emitters within this Scene
     */
    emitters: object[];
    static layerOptions: any;
    tearDown(): void;
    draw(): void;
}

/**
 * The Lighting Layer which displays darkness and light within the rendered Scene.
 * Lighting Layer (Container)
 *   Illumination Container [MULTIPLY]
 *     Background (Graphics)
 *     Light (Container) [LOS Mask]
 *       Source 1, ..., Source N (Container)
 *     Darkness (Container)
 *       Source 1, ..., Source N (Container)
 *   Coloration Container [ADD_NPM]
 * @example
 * <caption>The lightingRefresh hook</caption>
 * Hooks.on("lightingRefresh", layer => {});
 */
declare class LightingLayer extends PlaceablesLayer {
    /**
     * A mapping of light sources which are active within the rendered Scene
     */
    sources: Collection<string, PointSource>;
    /**
     * The currently displayed darkness level, which may override the saved Scene value
     */
    private darknessLevel: number | null;
    /**
     * The current client setting for whether global illumination is used or not
     */
    globalLight: boolean;
    /**
     * The coloration container which visualizes the effect of light sources
     */
    coloration: PIXI.Container;
    /**
     * The illumination container which visualizes darkness and light
     */
    illumination: PIXI.Container;
    /**
     * A flag for whether the darkness level is currently animating
     */
    _animating: boolean;
    /**
     * An array of light sources which are currently animated
     */
    _animatedSources: PointSource[];
    /**
     * The blur distance for soft shadows
     */
    _blurDistance: number;
    static layerOptions: any;
    /**
     * Configure the lighting channels which are inputs to the ShadowMap
     */
    private _configureChannels(): any;
    /**
     * Draw the coloration container which is responsible for rendering the visible hue of a light source.
     * Apply an additive blend to the entire container after each individual light source is blended via screen.
     */
    private _drawColorationContainer(): PIXI.Container;
    /**
     * Draw the illumination container which is responsible for displaying darkness and light.
     */
    private _drawIlluminationContainer(): PIXI.Container;
    /**
     * Does this scene currently benefit from global illumination?
     */
    hasGlobalIllumination(): boolean;
    /**
     * Refresh the active display of the LightingLayer.
     * Update the scene background color, light sources, and darkness sources
     */
    refresh(darkness: any): void;
    /**
     * Activate light source animation for AmbientLight objects within this layer
     */
    activateAnimation(): void;
    /**
     * Deactivate light source animation for AmbientLight objects within this layer
     */
    deactivateAnimation(): void;
    /**
     * The ticker handler which manages animation delegation
     * @param dt - Delta time
     */
    private _animateSource(dt: number): void;
    /**
     * Animate a smooth transition of the darkness overlay to a target value.
     * Only begin animating if another animation is not already in progress.
     * @param target - The target darkness level between 0 and 1
     * @param duration - The desired animation time in milliseconds. Default is 10 seconds
     * @returns A Promise which resolves once the animation is complete
     */
    animateDarkness(target?: number, duration: number): Promise<void>;
    update(): void;
    /**
     * Placeable Layer Objects
     */
    objects: PIXI.Container;
    /**
     * Preview Object Placement
     */
    preview: any;
    /**
     * Keep track of history so that CTRL+Z can undo changes
     */
    history: object[];
    /**
     * Track the PlaceableObject on this layer which is currently being hovered upon
     */
    _hover: PlaceableObject;
    /**
     * Track the set of PlaceableObjects on this layer which are currently controlled by their id
     */
    _controlled: any;
    /**
     * Keep track of an object copied with CTRL+C which can be pasted later
     */
    _copy: object[];
    /**
     * PlaceableObject layer options
     */
    options: any;
    /**
     * A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.
     */
    quadtree: Quadtree | null;
    /**
     * Return the precision relative to the Scene grid with which Placeable objects should be snapped
     */
    gridPrecision: any;
    /**
     * If objects on this PlaceableLayer have a HUD UI, provide a reference to its instance
     */
    hud: BasePlaceableHUD | null;
    /**
     * A convenience method for accessing the placeable object instances contained in this layer
     */
    placeables: PlaceableObject[];
    /**
     * An Array of placeable objects in this layer which have the _controlled attribute
     */
    controlled: any;
    /**
     * Draw a single placeable object
     */
    createObject(): PlaceableObject;
    /**
     * Get a PlaceableObject contained in this layer by it's ID
     * @param objectId - The ID of the contained object to retrieve
     * @returns The object instance, or undefined
     */
    get(objectId: string): PlaceableObject;
    /**
     * Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
     * @param options - Options passed to the control method of each object
     * @returns An array of objects that were controlled
     */
    controlAll(options: any): PlaceableObject[];
    /**
     * Release all controlled PlaceableObject instance from this layer.
     * @param options - Options passed to the release method of each object
     * @returns The number of PlaceableObject instances which were released
     */
    releaseAll(options: any): number;
    /**
     * Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
     * This executes a single database operation using Scene.update.
     * If rotating only a single object, it is better to use the PlaceableObject.rotate instance method.
     * @param angle - A target angle of rotation (in degrees) where zero faces "south"
     * @param delta - An incremental angle of rotation (in degrees)
     * @param snap - Snap the resulting angle to a multiple of some increment (in degrees)
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    rotateMany(angle: number, delta: number, snap: number, ids: any[] | Set): Promise<Scene>;
    /**
     * Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
     * This executes a single database operation using Scene.update.
     * If moving only a single object, this will delegate to PlaceableObject.update for performance reasons.
     * @param dx - The number of incremental grid units in the horizontal direction
     * @param dy - The number of incremental grid units in the vertical direction
     * @param rotate - Rotate the token to the keyboard direction instead of moving
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    moveMany(dx: number, dy: number, rotate: boolean, ids: any[] | Set): Promise<Scene>;
    /**
     * Undo a change to the objects in this layer
     * This method is typically activated using CTRL+Z while the layer is active
     */
    undoHistory(): Promise<Scene>;
    /**
     * Create multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    createMany(data: object[], options: any): Promise<object[]>;
    /**
     * Update multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    updateMany(data: object[], options: any): Promise<object[]>;
    /**
     * Simultaneously delete multiple PlaceableObjects.
     * This executes a single database operation using Scene.update.
     * If deleting only a single object, this will delegate to PlaceableObject.delete for performance reasons.
     * @param ids - An Array of object IDs to target for deletion
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    deleteMany(ids: string[], options: any): Promise<string[]>;
    /**
     * Update all objects in this layer with a provided transformation.
     * Conditionally filter to only apply to objects which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * A helper method to prompt for deletion of all PlaceableObject instances within the Scene
     * Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
     */
    deleteAll(): void;
    /**
     * Record a new CRUD event in the history log so that it can be undone later
     * @param type - The event type (create, update, delete)
     * @param data - The object data
     */
    storeHistory(type: string, data: any): void;
    /**
     * Copy currently controlled PlaceableObjects to a temporary Array, ready to paste back into the scene later
     * @returns The Array of copied PlaceableObject instances
     */
    copyObjects(): PlaceableObject[];
    /**
     * Paste currently copied PlaceableObjects back to the layer by creating new copies
     * @param position - The destination position for the copied data.
     * @param [hidden] - Paste data in a hidden state, if applicable. Default is false.
     * @param [snap] - Snap the resulting objects to the grid. Default is true.
     * @returns An Array of created PlaceableObject instances
     */
    pasteObjects(position: Point, hidden?: boolean, snap?: boolean): Promise<PlaceableObject[]>;
    /**
     * Select all PlaceableObject instances which fall within a coordinate rectangle.
     * @param x - The top-left x-coordinate of the selection rectangle
     * @param y - The top-left y-coordinate of the selection rectangle
     * @param width - The width of the selection rectangle
     * @param height - The height of the selection rectangle
     * @param releaseOptions - Optional arguments provided to any called release() method
     * @param controlOptions - Optional arguments provided to any called control() method
     * @returns A boolean for whether the controlled set was changed in the operation
     */
    selectObjects(x: number, y: number, width: number, height: number, releaseOptions: any, controlOptions: any): boolean;
    /**
     * Handle left mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft(): void;
    /**
     * Handle double left-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft2(): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftDrop(): void;
    /**
     * Handle right mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickRight(): void;
    /**
     * Handle a DELETE keypress while a placeable object is hovered
     * @param event - The delete key press event which triggered the request
     */
    private _onDeleteKey(event: Event): void;
    draw(): void;
    tearDown(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftCancel(): void;
    /**
     * Handle mouse-wheel events at the PlaceableObjects layer level to rotate multiple objects at once.
     * This handler will rotate all controlled objects by some incremental angle.
     * @param event - The mousewheel event which originated the request
     */
    _onMouseWheel(event: MouseWheelEvent): void;
}

/**
 * A mapping of different light level channels
 */
declare type LightChannel = any;

declare interface NotesLayer extends PlaceablesLayer {
}

/**
 * The Notes Layer Container
 */
declare class NotesLayer implements PlaceablesLayer {
    static layerOptions: any;
    /**
     * Register game settings used by the NotesLayer
     */
    static registerSettings(): void;
    _onMouseDown(): void;
    /**
     * Handle JournalEntry entity drop data
     */
    private _onDropData(event: Event, data: JournalEntry): void;
    activate(): void;
    deactivate(): void;
}

/**
 * The Sight Layer which implements dynamic vision, lighting, and fog of war
 * This layer uses an event-driven workflow to perform the minimal required calculation in response to changes.
 * @example
 * <caption>The sightRefresh hook</caption>
 * Hooks.on("sightRefresh", layer => {});
 */
declare class SightLayer extends CanvasLayer {
    /**
     * Fog of War data object
     */
    fogData: any;
    /**
     * A Collection of vision sources which are currently active within the rendered Scene.
     */
    sources: Collection<string, PointSource>;
    /**
     * The canonical line-of-sight polygon which defines current Token visibility.
     */
    los: PIXI.Graphics;
    /**
     * The blur distance for soft shadows
     */
    _blurDistance: number;
    /**
     * A status flag for whether the layer initialization workflow has succeeded
     */
    private _initialized: boolean;
    /**
     * The downscaling resolution used for the saved fog texture
     */
    _fogResolution: number;
    /**
     * A pool of fog of war exploration containers that can be recycled
     */
    _visionPool: PIXI.Container[];
    /**
     * Track whether fog of war exploration has been updated and required saving
     */
    private _fogUpdated: boolean;
    /**
     * Track the number of moves which have updated fog of war
     */
    private _fogUpdates: number;
    /**
     * A debounced function to save fog of war exploration once a stream of updates have stopped
     */
    debounceSaveFog: (...params: any[]) => any;
    static layerOptions: any;
    /**
     * Does the currently viewed Scene support Token field of vision?
     */
    tokenVision: boolean;
    /**
     * Does the currently viewed Scene support fog of war exploration?
     */
    fogExploration: boolean;
    /**
     * Initialize the Sight Layer. Initialization has the following hierarchical workflow:
     *
     * Initialize Layer (reset entire layer)
     *  InitializeLights (used to reset all lights)
     *    UpdateLight (update a single light)
     *  InitializeTokens (reset all tokens)
     *    UpdateToken (update a single token)
     *  Initialize Fog (reset FOW state)
     */
    initialize(): void;
    /**
     * Initialize fog of war - resetting it when switching scenes or re-drawing the canvas
     */
    initializeFog(): Promise<void>;
    /**
     * Draw the fog of war exploration container
     */
    private _drawFogContainer(): PIXI.Container;
    /**
     * Construct a vision container that is used to render a single view position.
     * These containers are placed into the _visionPool and recycled as needed.
     */
    private _createVisionContainer(): PIXI.Container;
    /**
     * Obtain a vision container from the recycling pool, or create one if no container exists.
     * Assign the container as the current fog exploration and the current LOS polygon.
     */
    private _getVisionContainer(): PIXI.Container;
    /**
     * Return a vision container back to the pool, recycling it for future use.
     * @param c - The container to recycle
     */
    private _recycleVisionContainer(c: PIXI.Container): void;
    /**
     * Update the display of the sight layer.
     * Organize sources into rendering queues and draw lighting containers for each source
     * @param [forceUpdateFog] - Always update the Fog exploration progress for this update
     * @param [noUpdateFog] - Never update the Fog exploration progress for this update
     */
    refresh(forceUpdateFog?: boolean, noUpdateFog?: boolean): void;
    /**
     * Restrict the visibility of certain canvas assets (like Tokens or DoorControls) based on the visibility polygon
     * These assets should only be displayed if they are visible given the current player's field of view
     */
    restrictVisibility(): void;
    /**
     * Once a new Fog of War location is explored, composite the explored container with the current staging sprite
     * Save that staging Sprite as the rendered fog exploration and swap it out for a fresh staging texture
     * Do all this asynchronously, so it doesn't block token movement animation since this takes some extra time
     */
    private commitFog(): Promise<void>;
    /**
     * Load existing fog of war data from local storage and populate the initial exploration sprite
     */
    loadFog(): Promise<PIXI.Texture>;
    /**
     * Dispatch a request to reset the fog of war exploration status for all users within this Scene.
     * Once the server has deleted existing FogExploration documents, the _onResetFog handler will re-draw the canvas.
     */
    resetFog(): void;
    /**
     * Save Fog of War exploration data to a base64 string to the FogExploration document in the database.
     * Assumes that the fog exploration has already been rendered as fog.rendered.texture.
     */
    private saveFog(): void;
    /**
     * Update the fog layer when a player token reaches a board position which was not previously explored
     * @param source - The vision source for which the fog layer should update
     * @param force - Force fog to be updated even if the location is already explored
     */
    updateFog(source: PointSource, force: boolean): void;
    /**
     * Choose an adaptive fog rendering resolution which downscales the saved fog textures for larger dimension Scenes
     */
    private _configureFogResolution(): number;
    /**
     * Trigger a server-side update (or creation) of fog exploration status for a certain Scene
     */
    private _createOrUpdateFogExploration(fogData: any): Promise<object>;
    /**
     * If fog of war data is reset from the server, re-draw the canvas
     * @param resetData - Fog reset data sent by the server
     */
    _onResetFog(resetData: any): Promise<Canvas>;
    /**
     * Compute line-of-sight and field-of-vision polygons for a given origin position and visibility radius.
     * The line-of-sight polygon defines the unrestricted area of visibility for the source.
     * The field-of-vision polygon defines the restricted area of visibility for the source.
     * @param origin - An point with coordinates x and y representing the origin of the test
     * @param radius - A distance in canvas pixels which reflects the visible range
     * @param [angle] - An optional limited angle of emission with which to restrict polygons
     * @param [density] - The desired radial density of emission for rays, in degrees
     * @param [endpoints] - An array of explicit endpoints against which to compute sight
     * @param [unrestricted] - Compute sight that is unrestricted by walls
     * @returns The computed rays and polygons
     */
    static computeSight(origin: Point, radius: number, angle?: number, density?: number, endpoints?: Point[], unrestricted?: boolean): any;
    /**
     * A helper method responsible for casting rays at wall endpoints.
     * Rays are restricted by limiting angles.
     * @param x - The origin x-coordinate
     * @param y - The origin y-coordinate
     * @param distance - The ray distance
     * @param density - The desired radial density
     * @param endpoints - An array of endpoints to target
     * @param limitAngle - Whether the rays should be cast subject to a limited angle of emission
     * @param aMin - The minimum bounding angle
     * @param aMax - The maximum bounding angle
     * @returns An array of Ray objects
     */
    static _castRays(x: number, y: number, distance: number, density: number, endpoints: PointArray[], limitAngle: boolean, aMin: number, aMax: number): Ray[];
    /**
     * Test whether a point on the Canvas is visible based on the current vision and LOS polygons
     * @param point - The point in space to test, an object with coordiantes x and y.
     * @param tolerance - A numeric radial offset which allows for a non-exact match. For example, if
     *                                tolerance is 2 then the test will pass if the point is within 2px of a vision
     *                                polygon.
     * @param [object] - An optional reference to the object whose visibility is being tested
     * @returns Whether the point is currently visible.
     */
    testVisibility(point: Point, tolerance: number, object?: PIXI.DisplayObject): boolean;
    /**
     * Normalize an angle to ensure it is baselined to be the smallest angle that is greater than a minimum.
     * @param aMin - The lower-bound minimum angle
     * @param angle - The angle to adjust
     * @returns The adjusted angle which is greater than or equal to aMin.
     */
    private static _adjustRayAngle(aMin: number, angle: number): number;
    /**
     * Visualize the sight layer to understand algorithm performance.
     * @param bounds - The initial rectangular bounds of the vision check
     * @param endpoints - The wall endpoints being tested
     * @param rays - The array of cast vision Rays
     * @param los - The resulting line-of-sight polygon
     * @param fov - The resulting field-of-vision polygon
     */
    static _visualizeSight(bounds: Rectangle, endpoints: PointArray[], rays: Ray[], los: PIXI.Polygon, fov: PIXI.Polygon): void;
    initializeTokens(): void;
    update(): void;
    updateToken(): void;
    updateLight(): void;
    /**
     * Define the threshold value for the number of distinct Wall endpoints.
     * Below this threshold, exact vision computation is used by casting a Ray at every endpoint.
     * Above this threshold, approximate vision computation is used by culling to only nearby endpoints.
     */
    static EXACT_VISION_THRESHOLD: number;
    /**
     * Define the number of positions that are explored before a set of fog updates are pushed to the server.
     */
    static FOG_COMMIT_THRESHOLD: number;
    /**
     * Track whether the canvas layer is currently active for interaction
     */
    _active: boolean;
    /**
     * The canonical name of the CanvasLayer
     */
    name: string;
    /**
     * Activate the CanvasLayer, deactivating other layers and marking this layer's children as interactive.
     * @returns The layer instance, now activated
     */
    activate(): CanvasLayer;
    /**
     * Deactivate the CanvasLayer, removing interactivity from its children.
     * @returns The layer instance, now inactive
     */
    deactivate(): CanvasLayer;
    /**
     * Deconstruct data used in the current layer in preparation to re-draw the canvas
     */
    tearDown(): void;
    /**
     * Draw the canvas layer, rendering its internal components and returning a Promise
     * The Promise resolves to the drawn layer once its contents are successfully rendered.
     */
    draw(): Promise<CanvasLayer>;
}

/**
 * This Canvas Layer provides a container for AmbientSound objects.
 */
declare class SoundsLayer extends PlaceablesLayer {
    /**
     * A status flag for whether the layer initialization workflow has succeeded
     */
    private _initialized: boolean;
    /**
     * A debounced refresh function for the sounds layer
     */
    refresh: (...params: any[]) => any;
    static layerOptions: any;
    /**
     * Initialize the field of "view" for all AmbientSound effects in the layer
     */
    initialize(): void;
    /**
     * Update all AmbientSound effects in the layer by toggling their playback status
     */
    update(): void;
    /**
     * Terminate playback of all ambient audio sources
     */
    stopAll(): void;
    /**
     * Placeable Layer Objects
     */
    objects: PIXI.Container;
    /**
     * Preview Object Placement
     */
    preview: any;
    /**
     * Keep track of history so that CTRL+Z can undo changes
     */
    history: object[];
    /**
     * Track the PlaceableObject on this layer which is currently being hovered upon
     */
    _hover: PlaceableObject;
    /**
     * Track the set of PlaceableObjects on this layer which are currently controlled by their id
     */
    _controlled: any;
    /**
     * Keep track of an object copied with CTRL+C which can be pasted later
     */
    _copy: object[];
    /**
     * PlaceableObject layer options
     */
    options: any;
    /**
     * A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.
     */
    quadtree: Quadtree | null;
    /**
     * Return the precision relative to the Scene grid with which Placeable objects should be snapped
     */
    gridPrecision: any;
    /**
     * If objects on this PlaceableLayer have a HUD UI, provide a reference to its instance
     */
    hud: BasePlaceableHUD | null;
    /**
     * A convenience method for accessing the placeable object instances contained in this layer
     */
    placeables: PlaceableObject[];
    /**
     * An Array of placeable objects in this layer which have the _controlled attribute
     */
    controlled: any;
    /**
     * Draw a single placeable object
     */
    createObject(): PlaceableObject;
    /**
     * Get a PlaceableObject contained in this layer by it's ID
     * @param objectId - The ID of the contained object to retrieve
     * @returns The object instance, or undefined
     */
    get(objectId: string): PlaceableObject;
    /**
     * Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
     * @param options - Options passed to the control method of each object
     * @returns An array of objects that were controlled
     */
    controlAll(options: any): PlaceableObject[];
    /**
     * Release all controlled PlaceableObject instance from this layer.
     * @param options - Options passed to the release method of each object
     * @returns The number of PlaceableObject instances which were released
     */
    releaseAll(options: any): number;
    /**
     * Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
     * This executes a single database operation using Scene.update.
     * If rotating only a single object, it is better to use the PlaceableObject.rotate instance method.
     * @param angle - A target angle of rotation (in degrees) where zero faces "south"
     * @param delta - An incremental angle of rotation (in degrees)
     * @param snap - Snap the resulting angle to a multiple of some increment (in degrees)
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    rotateMany(angle: number, delta: number, snap: number, ids: any[] | Set): Promise<Scene>;
    /**
     * Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
     * This executes a single database operation using Scene.update.
     * If moving only a single object, this will delegate to PlaceableObject.update for performance reasons.
     * @param dx - The number of incremental grid units in the horizontal direction
     * @param dy - The number of incremental grid units in the vertical direction
     * @param rotate - Rotate the token to the keyboard direction instead of moving
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    moveMany(dx: number, dy: number, rotate: boolean, ids: any[] | Set): Promise<Scene>;
    /**
     * Undo a change to the objects in this layer
     * This method is typically activated using CTRL+Z while the layer is active
     */
    undoHistory(): Promise<Scene>;
    /**
     * Create multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    createMany(data: object[], options: any): Promise<object[]>;
    /**
     * Update multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    updateMany(data: object[], options: any): Promise<object[]>;
    /**
     * Simultaneously delete multiple PlaceableObjects.
     * This executes a single database operation using Scene.update.
     * If deleting only a single object, this will delegate to PlaceableObject.delete for performance reasons.
     * @param ids - An Array of object IDs to target for deletion
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    deleteMany(ids: string[], options: any): Promise<string[]>;
    /**
     * Update all objects in this layer with a provided transformation.
     * Conditionally filter to only apply to objects which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * A helper method to prompt for deletion of all PlaceableObject instances within the Scene
     * Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
     */
    deleteAll(): void;
    /**
     * Record a new CRUD event in the history log so that it can be undone later
     * @param type - The event type (create, update, delete)
     * @param data - The object data
     */
    storeHistory(type: string, data: any): void;
    /**
     * Copy currently controlled PlaceableObjects to a temporary Array, ready to paste back into the scene later
     * @returns The Array of copied PlaceableObject instances
     */
    copyObjects(): PlaceableObject[];
    /**
     * Paste currently copied PlaceableObjects back to the layer by creating new copies
     * @param position - The destination position for the copied data.
     * @param [hidden] - Paste data in a hidden state, if applicable. Default is false.
     * @param [snap] - Snap the resulting objects to the grid. Default is true.
     * @returns An Array of created PlaceableObject instances
     */
    pasteObjects(position: Point, hidden?: boolean, snap?: boolean): Promise<PlaceableObject[]>;
    /**
     * Select all PlaceableObject instances which fall within a coordinate rectangle.
     * @param x - The top-left x-coordinate of the selection rectangle
     * @param y - The top-left y-coordinate of the selection rectangle
     * @param width - The width of the selection rectangle
     * @param height - The height of the selection rectangle
     * @param releaseOptions - Optional arguments provided to any called release() method
     * @param controlOptions - Optional arguments provided to any called control() method
     * @returns A boolean for whether the controlled set was changed in the operation
     */
    selectObjects(x: number, y: number, width: number, height: number, releaseOptions: any, controlOptions: any): boolean;
    /**
     * Handle left mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft(): void;
    /**
     * Handle double left-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft2(): void;
    /**
     * Handle right mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickRight(): void;
    /**
     * Handle mouse-wheel events at the PlaceableObjects layer level to rotate multiple objects at once.
     * This handler will rotate all controlled objects by some incremental angle.
     * @param event - The mousewheel event which originated the request
     */
    _onMouseWheel(event: MouseWheelEvent): void;
    /**
     * Handle a DELETE keypress while a placeable object is hovered
     * @param event - The delete key press event which triggered the request
     */
    private _onDeleteKey(event: Event): void;
    tearDown(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftDrop(): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftCancel(): void;
}

/**
 * This Canvas Layer provides a container for MeasuredTemplate objects.
 */
declare class TemplateLayer extends PlaceablesLayer {
    static layerOptions: any;
    /**
     * Register game settings used by the TemplatesLayer
     */
    static registerSettings(): void;
    activate(): void;
    deactivate(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Handle mouse-wheel events at the PlaceableObjects layer level to rotate multiple objects at once.
     * This handler will rotate all controlled objects by some incremental angle.
     * @param event - The mousewheel event which originated the request
     */
    _onMouseWheel(event: MouseWheelEvent): void;
}

/**
 * The Tiles canvas layer which provides a container for {@link Tile} objects which are rendered immediately above the
 * {@link BackgroundLayer} and below the {@link GridLayer}.
 */
declare class TilesLayer extends PlaceablesLayer {
    static layerOptions: any;
    /**
     * Tile objects on this layer utilize the TileHUD
     */
    hud: TileHUD;
    /**
     * Handle drop events for Tile data on the Tiles Layer
     * @param event - The concluding drag event
     * @param data - The extracted Tile data
     */
    private _onDropTileData(event: DragEvent, data: any): void;
    deactivate(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftDrop(): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftCancel(): void;
}

/**
 * The Tokens Container
 */
declare class TokenLayer {
    /**
     * The current index position in the tab cycle
     */
    private _tabIndex: number | null;
    /**
     * Remember the last drawn wildcard token image to avoid repetitions
     */
    _lastWildcard: string;
    static layerOptions: any;
    /**
     * Token objects on this layer utilize the TokenHUD
     */
    hud: any;
    /**
     * An Array of tokens which belong to actors which are owned
     */
    ownedTokens: Token[];
    tearDown(): void;
    activate(): void;
    deactivate(): void;
    /**
     * Initialize the TokenLayer by preparing all Token sources which appear in the Scene.
     */
    initialize(): void;
    controlAll(): void;
    releaseAll(): void;
    selectObjects(): void;
    /**
     * Target all Token instances which fall within a coordinate rectangle.
     * @param x - The top-left x-coordinate of the selection rectangle
     * @param y - The top-left y-coordinate of the selection rectangle
     * @param width - The width of the selection rectangle
     * @param height - The height of the selection rectangle
     * @param releaseOthers - Whether or not to release other targeted tokens
     * @returns The number of Token instances which were targeted.
     */
    targetObjects(x: number, y: number, width: number, height: number, releaseOthers: boolean): number;
    /**
     * Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
     * Tokens are currently sorted in order of their TokenID
     * @param forwards - Which direction to cycle. A truthy value cycles forward, while a false value
     *                            cycles backwards.
     * @param reset - Restart the cycle order back at the beginning?
     * @returns The Token object which was cycled to, or null
     */
    cycleTokens(forwards: boolean, reset: boolean): Token | null;
    /**
     * Add or remove the set of currently controlled Tokens from the active combat encounter
     * @param state - The desired combat state which determines if each Token is added (true) or
     *                                removed (false)
     * @param combat - A Combat encounter from which to add or remove the Token
     * @param [token] - A specific Token which is the origin of the group toggle request
     * @returns The updated Combat encounter
     */
    toggleCombat(state?: boolean, combat: Combat | null, token?: Token | null): Promise<Combat>;
    /**
     * Get the tab cycle order for tokens by sorting observable tokens based on their distance from top-left.
     */
    private _getCycleOrder(): Token[];
    /**
     * Immediately conclude the animation of any/all tokens
     */
    concludeAnimation(): void;
    /**
     * Handle dropping of Actor data onto the Scene canvas
     */
    private _onDropActorData(): void;
}

/**
 * The Walls canvas layer which provides a container for Wall objects within the rendered Scene.
 */
declare class WallsLayer extends PlaceablesLayer {
    /**
     * A graphics layer used to display chained Wall selection
     */
    chain: PIXI.Graphics;
    /**
     * An array of all the unique perception-blocking endpoints which are present in the layer
     * We keep this array cached for faster sight polygon computations
     */
    endpoints: PointArray[];
    /**
     * Track whether we are currently within a chained placement workflow
     */
    _chain: boolean;
    /**
     * Track whether the layer is currently toggled to snap at exact grid precision
     */
    _forceSnap: boolean;
    /**
     * Track the most recently created or updated wall data for use with the clone tool
     */
    private _cloneType: any | null;
    /**
     * Reference the last interacted wall endpoint for the purposes of chaining
     */
    private last: any;
    static layerOptions: any;
    /**
     * An Array of Wall instances in the current Scene which currently block Token vision.
     * This array includes doors regardless of their current door state.
     */
    blockVision: Wall[];
    /**
     * An Array of Wall instances in the current Scene which block Token movement.
     * This array includes doors regardless of their current door state.
     */
    blockMovement: Wall[];
    /**
     * An Array of Wall instances in the current Scene which act as Doors.
     */
    doors: Wall[];
    /**
     * Gate the precision of wall snapping to become less precise for small scale maps.
     */
    gridPrecision: number;
    /**
     * Given a point and the coordinates of a wall, determine which endpoint is closer to the point
     * @param point - The origin point of the new Wall placement
     * @param wall - The existing Wall object being chained to
     * @returns The [x,y] coordinates of the starting endpoint
     */
    static getClosestEndpoint(point: Point, wall: Wall): PointArray;
    /**
     * Given an array of Wall instances, identify the unique endpoints across all walls.
     * @param walls - An array of Wall instances
     * @param bounds - An optional bounding rectangle within which the endpoint must lie.
     * @param blockMovement - Filter for walls that block movement, default is true.
     * @param blockSenses - Filter for walls that block perception, default is true.
     * @returns An array of endpoints
     */
    static getUniqueEndpoints(walls: Wall[], bounds: Rectangle, blockMovement: boolean, blockSenses: boolean): PointArray[];
    /**
     * Test whether movement along a given Ray collides with a Wall.
     * @param ray - The attempted movement
     * @returns Does a collision occur?
     */
    checkCollision(ray: Ray): boolean;
    /**
     * Highlight the endpoints of Wall segments which are currently group-controlled on the Walls layer
     */
    highlightControlledSegments(): void;
    /**
     * Pan the canvas view when the cursor position gets close to the edge of the frame
     * @param event - The originating mouse movement event
     * @param x - The x-coordinate
     * @param y - The y-coordinate
     */
    private _panCanvasEdge(event: MouseEvent, x: number, y: number): void;
    /**
     * Get the endpoint coordinates for a wall placement, snapping to grid at a specified precision
     * Require snap-to-grid until a redesign of the wall chaining system can occur.
     * @param point - The initial candidate point
     * @param [snap = true] - Whether to snap to grid
     * @returns The endpoint coordinates [x,y]
     */
    private _getWallEndpointCoordinates(point: any, snap?: boolean): number[];
    /**
     * The Scene Controls tools provide several different types of prototypical Walls to choose from
     * This method helps to translate each tool into a default wall data configuration for that type
     * @param tool - The active canvas tool
     */
    private _getWallDataFromActiveTool(tool: string): void;
    /**
     * Test a single Ray against a single Wall
     * @param ray - The Ray being cast
     * @param wall - The Wall against which to test
     * @returns An intersection, if one occurred
     */
    static testWall(ray: Ray, wall: Wall): RayIntersection;
    /**
     * Identify the closest collision point from an array of collisions
     * @param collisions - An array of intersection points
     * @returns The closest blocking intersection
     */
    static getClosestCollision(collisions: RayIntersection[]): RayIntersection;
    /**
     * Get the set of wall collisions for a given Ray
     * @param ray - The Ray being tested
     * @param [blockMovement] - Test against walls which block movement?
     * @param [blockSenses] - Test against walls which block senses?
     * @param [mode] - The return mode of the test, one of "all", "closest", or "any"
     * @param _performance - An internal performance object used for debugging
     * @returns An array of collisions, if mode is "all"
     *                                    The closest collision, if mode is "closest"
     *                                    Whether any collision occurred if mode is "any"
     */
    static getRayCollisions(ray: Ray, blockMovement?: boolean, blockSenses?: boolean, mode?: string, _performance: any): object[] | any | boolean;
    /**
     * Placeable Layer Objects
     */
    objects: PIXI.Container;
    /**
     * Preview Object Placement
     */
    preview: any;
    /**
     * Keep track of history so that CTRL+Z can undo changes
     */
    history: object[];
    /**
     * Track the PlaceableObject on this layer which is currently being hovered upon
     */
    _hover: PlaceableObject;
    /**
     * Track the set of PlaceableObjects on this layer which are currently controlled by their id
     */
    _controlled: any;
    /**
     * Keep track of an object copied with CTRL+C which can be pasted later
     */
    _copy: object[];
    /**
     * PlaceableObject layer options
     */
    options: any;
    /**
     * A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.
     */
    quadtree: Quadtree | null;
    /**
     * If objects on this PlaceableLayer have a HUD UI, provide a reference to its instance
     */
    hud: BasePlaceableHUD | null;
    /**
     * A convenience method for accessing the placeable object instances contained in this layer
     */
    placeables: PlaceableObject[];
    /**
     * An Array of placeable objects in this layer which have the _controlled attribute
     */
    controlled: any;
    /**
     * Draw a single placeable object
     */
    createObject(): PlaceableObject;
    /**
     * Get a PlaceableObject contained in this layer by it's ID
     * @param objectId - The ID of the contained object to retrieve
     * @returns The object instance, or undefined
     */
    get(objectId: string): PlaceableObject;
    /**
     * Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
     * @param options - Options passed to the control method of each object
     * @returns An array of objects that were controlled
     */
    controlAll(options: any): PlaceableObject[];
    /**
     * Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
     * This executes a single database operation using Scene.update.
     * If rotating only a single object, it is better to use the PlaceableObject.rotate instance method.
     * @param angle - A target angle of rotation (in degrees) where zero faces "south"
     * @param delta - An incremental angle of rotation (in degrees)
     * @param snap - Snap the resulting angle to a multiple of some increment (in degrees)
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    rotateMany(angle: number, delta: number, snap: number, ids: any[] | Set): Promise<Scene>;
    /**
     * Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
     * This executes a single database operation using Scene.update.
     * If moving only a single object, this will delegate to PlaceableObject.update for performance reasons.
     * @param dx - The number of incremental grid units in the horizontal direction
     * @param dy - The number of incremental grid units in the vertical direction
     * @param rotate - Rotate the token to the keyboard direction instead of moving
     * @param ids - An Array or Set of object IDs to target for rotation
     * @returns The resulting Promise from the Scene.update operation
     */
    moveMany(dx: number, dy: number, rotate: boolean, ids: any[] | Set): Promise<Scene>;
    /**
     * Undo a change to the objects in this layer
     * This method is typically activated using CTRL+Z while the layer is active
     */
    undoHistory(): Promise<Scene>;
    /**
     * Create multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    createMany(data: object[], options: any): Promise<object[]>;
    /**
     * Update multiple embedded entities in a parent Entity collection using an Array of provided data
     * @param data - An Array of update data Objects which provide incremental data
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    updateMany(data: object[], options: any): Promise<object[]>;
    /**
     * Simultaneously delete multiple PlaceableObjects.
     * This executes a single database operation using Scene.update.
     * If deleting only a single object, this will delegate to PlaceableObject.delete for performance reasons.
     * @param ids - An Array of object IDs to target for deletion
     * @param options - Additional options which customize the update workflow
     * @returns A Promise which resolves to the returned socket response (if successful)
     */
    deleteMany(ids: string[], options: any): Promise<string[]>;
    /**
     * Update all objects in this layer with a provided transformation.
     * Conditionally filter to only apply to objects which match a certain condition.
     * @param transformation - An object of data or function to apply to all matched objects
     * @param condition - A function which tests whether to target each object
     * @param [options] - Additional options passed to Entity.update
     * @returns An array of updated data once the operation is complete
     */
    updateAll(transformation: ((...params: any[]) => any) | any, condition: ((...params: any[]) => any) | null, options?: any): Promise<Data[]>;
    /**
     * A helper method to prompt for deletion of all PlaceableObject instances within the Scene
     * Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
     */
    deleteAll(): void;
    /**
     * Record a new CRUD event in the history log so that it can be undone later
     * @param type - The event type (create, update, delete)
     * @param data - The object data
     */
    storeHistory(type: string, data: any): void;
    /**
     * Copy currently controlled PlaceableObjects to a temporary Array, ready to paste back into the scene later
     * @returns The Array of copied PlaceableObject instances
     */
    copyObjects(): PlaceableObject[];
    /**
     * Select all PlaceableObject instances which fall within a coordinate rectangle.
     * @param x - The top-left x-coordinate of the selection rectangle
     * @param y - The top-left y-coordinate of the selection rectangle
     * @param width - The width of the selection rectangle
     * @param height - The height of the selection rectangle
     * @param releaseOptions - Optional arguments provided to any called release() method
     * @param controlOptions - Optional arguments provided to any called control() method
     * @returns A boolean for whether the controlled set was changed in the operation
     */
    selectObjects(x: number, y: number, width: number, height: number, releaseOptions: any, controlOptions: any): boolean;
    /**
     * Handle double left-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft2(): void;
    /**
     * Handle mouse-wheel events at the PlaceableObjects layer level to rotate multiple objects at once.
     * This handler will rotate all controlled objects by some incremental angle.
     * @param event - The mousewheel event which originated the request
     */
    _onMouseWheel(event: MouseWheelEvent): void;
    /**
     * Handle a DELETE keypress while a placeable object is hovered
     * @param event - The delete key press event which triggered the request
     */
    private _onDeleteKey(event: Event): void;
    draw(): void;
    deactivate(): void;
    /**
     * Release all controlled PlaceableObject instance from this layer.
     * @param options - Options passed to the release method of each object
     * @returns The number of PlaceableObject instances which were released
     */
    releaseAll(options: any): number;
    /**
     * Paste currently copied PlaceableObjects back to the layer by creating new copies
     * @param position - The destination position for the copied data.
     * @param [hidden] - Paste data in a hidden state, if applicable. Default is false.
     * @param [snap] - Snap the resulting objects to the grid. Default is true.
     * @returns An Array of created PlaceableObject instances
     */
    pasteObjects(position: Point, hidden?: boolean, snap?: boolean): Promise<PlaceableObject[]>;
    /**
     * Handle left mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickLeft(): void;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftStart(): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftMove(): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftDrop(): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     */
    _onDragLeftCancel(): void;
    /**
     * Handle right mouse-click events which originate from the Canvas stage and are dispatched to this Layer.
     */
    _onClickRight(): void;
}

/**
 * The Drawing object is an implementation of the :class:`PlaceableObject` container.
 * Each Drawing is a placeable object in the :class:`DrawingsLayer`.
 * @example
 * Drawing.create({
 *   type: CONST.DRAWING_TYPES.RECTANGLE,
 *   author: game.user._id,
 *   x: 1000,
 *   y: 1000,
 *   width: 800,
 *   height: 600,
 *   fillType: CONST.DRAWING_FILL_TYPES.SOLID,
 *   fillColor: "#0000FF",
 *   fillAlpha: 0.5,
 *   strokeWidth: 4,
 *   strokeColor: "#FF0000",
 *   strokeAlpha: 0.75,
 *   texture: "ui/parchment.jpg",
 *   textureAlpha: 0.5,
 *   text: "HELLO DRAWINGS!",
 *   fontSize: 48,
 *   textColor: "#00FF00",
 *   points: []
 * });
 */
declare class Drawing extends PlaceableObject {
    /**
     * The inner drawing container
     */
    drawing: PIXI.Container;
    /**
     * The primary drawing shape
     */
    shape: PIXI.Graphics;
    /**
     * Text content, if included
     */
    text: PIXI.Text;
    /**
     * The Graphics outer frame and handles
     */
    frame: PIXI.Container;
    /**
     * Internal timestamp for the previous freehand draw time, to limit sampling
     */
    private _drawTime: number;
    /**
     * Internal flag for the permanent points of the polygon
     */
    private _fixedPoints: boolean;
    static embeddedName: any;
    /**
     * A reference to the User who created the Drawing object
     */
    author: User;
    /**
     * A flag for whether the current user has full control over the Drawing object
     */
    owner: User;
    /**
     * A Boolean flag for whether or not the Drawing utilizes a tiled texture background
     */
    isTiled: boolean;
    /**
     * A Boolean flag for whether or not the Drawing is a Polygon type (either linear or freehand)
     */
    isPolygon: boolean;
    /**
     * Create the components of the drawing element, the drawing container, the drawn shape, and the overlay text
     */
    _createDrawing(): void;
    /**
     * Create elements for the foreground text
     */
    private _createText(): void;
    /**
     * Create elements for the Drawing border and handles
     */
    private _createFrame(): void;
    /**
     * Draw rectangular shapes
     */
    private _drawRectangle(): void;
    /**
     * Draw ellipsoid shapes
     */
    private _drawEllipse(): void;
    /**
     * Draw polygonal shapes
     */
    private _drawPolygon(): void;
    /**
     * Draw freehand shapes with bezier spline smoothing
     */
    private _drawFreehand(): void;
    /**
     * Attribution: The equations for how to calculate the bezier control points are derived from Rob Spencer's article:
     * http://scaledinnovation.com/analytics/splines/aboutSplines.html
     * @param factor - The smoothing factor
     * @param previous - The prior point
     * @param point - The current point
     * @param next - The next point
     */
    private _getBezierControlPoints(factor: number, previous: number[], point: number[], next: number[]): void;
    /**
     * Refresh the boundary frame which outlines the Drawing shape
     */
    private _refreshFrame(): void;
    /**
     * Add a new polygon point to the drawing, ensuring it differs from the last one
     */
    private _addPoint(): void;
    /**
     * Remove the last fixed point from the polygon
     */
    private _removePoint(): void;
    /**
     * Handle text entry in an active text tool
     */
    private _onDrawingTextKeydown(event: KeyboardEvent): void;
    /**
     * Handle mouse movement which modifies the dimensions of the drawn shape
     */
    private _onMouseDraw(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouse-over event on a control handle
     * @param event - The mouseover event
     */
    private _onHandleHoverIn(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouse-out event on a control handle
     * @param event - The mouseout event
     */
    private _onHandleHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * When we start a drag event - create a preview copy of the Tile for re-positioning
     * @param event - The mousedown event
     */
    private _onHandleMouseDown(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the beginning of a drag event on a resize handle
     */
    private _onHandleDragStart(event: any): void;
    /**
     * Handle mousemove while dragging a tile scale handler
     * @param event - The mousemove event
     */
    private _onHandleDragMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouseup after dragging a tile scale handler
     * @param event - The mouseup event
     */
    private _onHandleDragDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle cancellation of a drag event for one of the resizing handles
     */
    private _onHandleDragCancel(): void;
    /**
     * Apply a vectorized rescaling transformation for the drawing data
     * @param original - The original drawing data
     * @param dx - The pixel distance dragged in the horizontal direction
     * @param dy - The pixel distance dragged in the vertical direction
     */
    private _rescaleDimensions(original: any, dx: number, dy: number): void;
    /**
     * Adjust the location, dimensions, and points of the Drawing before committing the change
     * @param data - The Drawing data pending update
     * @returns The adjusted data
     */
    private static normalizeShape(data: any): any;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
}

/**
 * An AmbientLight is an implementation of PlaceableObject which represents a dynamic light source within the Scene.
 * @example
 * AmbientLight.create({
 *   t: "l",
 *   x: 1000,
 *   y: 1000,
 *   rotation: 0,
 *   dim: 30,
 *   bright: 15,
 *   angle: 360,
 *   tintColor: "#FF0000",
 *   tintAlpha: 0.05
 * });
 */
declare class AmbientLight extends PlaceableObject {
    /**
     * A reference to the PointSource object which defines this light source area of effect
     */
    source: PointSource;
    static embeddedName: any;
    /**
     * Test whether a specific AmbientLight source provides global illumination
     */
    global: boolean;
    /**
     * Get the pixel radius of dim light emitted by this light source
     */
    dimRadius: any;
    /**
     * Get the pixel radius of bright light emitted by this light source
     */
    brightRadius: any;
    /**
     * Return whether the light source is currently visible in the scene
     */
    isVisible: any;
    /**
     * Draw the ControlIcon for the AmbientLight
     */
    private _drawControlIcon(): ControlIcon;
    /**
     * The named identified for the source object associated with this light
     */
    sourceId: any;
    /**
     * Update the source object associated with this light
     * @param defer - Defer refreshing the LightingLayer to manually call that refresh later.
     * @param deleted - Indicate that this light source has been deleted.
     */
    updateSource(defer: boolean, deleted: boolean): void;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
}

/**
 * A Note is an implementation of PlaceableObject which represents an annotated location within the Scene.
 * Each Note links to a JournalEntry entity and represents it's location on the map.
 * @example
 * Note.create({
 *   entryId: journalEntry.id,
 *   x: 1000,
 *   y: 1000,
 *   icon: "icons/my-journal-icon.svg",
 *   iconSize: 40,
 *   iconTint: "#00FF000",
 *   text: "A custom label",
 *   fontSize: 48,
 *   textAnchor: CONST.TEXT_ANCHOR_POINTS.CENTER,
 *   textColor: "#00FFFF"
 * });
 */
declare class Note extends PlaceableObject {
    /**
     * The associated JournalEntry which is described by this note
     */
    entry: JournalEntry;
    static embeddedName: any;
    /**
     * Return the text label which describes the Note
     * Use a manually specified label with a fallback to the JournalEntry name
     */
    text: string;
    /**
     * The Map Note icon size
     */
    size: number;
    /**
     * Draw the ControlIcon for the Map Note
     */
    private _drawControlIcon(): ControlIcon;
    /**
     * Draw the map note Tooltip as a Text object
     */
    _drawTooltip(): PIXI.Text;
    /**
     * Define a PIXI TextStyle object which is used for the tooltip displayed for this Note
     */
    _getTextStyle(): PIXI.TextStyle;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
}

/**
 * An AmbientSound is an implementation of PlaceableObject which represents a dynamic audio source within the Scene.
 * @example
 * AmbientSound.create({
 *   t: "l",
 *   x: 1000,
 *   y: 1000,
 *   radius: 60,
 *   easing: true,
 *   path: "sounds/audio-file.mp3",
 *   repeat: true,
 *   volume: 0.4
 * });
 */
declare class AmbientSound extends PlaceableObject {
    /**
     * The Howl instance used to play this AmbientSound effect
     */
    howl: Howl;
    /**
     * The Howl sound ID of the playing instance of this sound
     */
    howlId: number;
    /**
     * Create an audio helper instance to use for the Ambient Sound
     */
    private _createHowl(): any | null;
    static embeddedName: any;
    /**
     * A convenience accessor for the sound type
     */
    type: any;
    /**
     * A convenience accessor for the sound radius in pixels
     */
    radius: any;
    /**
     * Toggle playback of the sound depending on whether or not it is audible
     * @param isAudible - Is the sound audible?
     * @param volume - The target playback volume
     * @param fade - Whether to fade the volume from its previous level
     */
    play(isAudible: boolean, volume: number, fade: boolean): void;
    /**
     * Draw the graphical preview of the audio source area of effect
     */
    private drawField(): PIXI.Container;
    /**
     * Draw the ControlIcon for the AmbientLight
     */
    private _drawControlIcon(): ControlIcon;
    /**
     * Compute the field-of-vision for an object, determining its effective line-of-sight and field-of-vision polygons
     * @returns An object containing the rays, LOS polygon, and FOV polygon for the light
     */
    computeFOV(): any;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
}

/**
 * A MeasuredTemplate is an implementation of PlaceableObject which represents an area of the canvas grid which is
 * covered by some effect.
 * @example
 * MeasuredTemplate.create({
 *   t: "cone",
 *   user: game.user._id,
 *   x: 1000,
 *   y: 1000,
 *   direction: 0.45,
 *   angle: 63.13,
 *   distance: 30,
 *   borderColor: "#FF0000",
 *   fillColor: "#FF3366",
 *   texture: "tiles/fire.jpg"
 * });
 */
declare class MeasuredTemplate extends PlaceableObject {
    /**
     * The tiling texture used for this template, if any
     */
    texture: PIXI.Texture;
    /**
     * The template shape used for testing point intersection
     */
    shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle;
    /**
     * Internal property used to configure the control border thickness
     */
    private _borderThickness: number;
    static embeddedName: any;
    /**
     * A convenience accessor for the border color as a numeric hex code
     */
    borderColor: any;
    /**
     * A convenience accessor for the fill color as a numeric hex code
     */
    fillColor: any;
    owner: any;
    /**
     * Draw the ControlIcon for the MeasuredTemplate
     */
    private _drawControlIcon(): ControlIcon;
    /**
     * Draw the Text label used for the MeasuredTemplate
     */
    private _drawRulerText(): PreciseText;
    /**
     * Get a Circular area of effect given a radius of effect
     */
    private _getCircleShape(): void;
    /**
     * Get a Conical area of effect given a direction, angle, and distance
     */
    private _getConeShape(): void;
    /**
     * Get a Rectangular area of effect given a width and height
     */
    private _getRectShape(): void;
    /**
     * Get a rotated Rectangular area of effect given a width, height, and direction
     */
    private _getRayShape(): void;
    /**
     * Draw the rotation control handle and assign event listeners
     */
    private _drawRotationHandle(): void;
    /**
     * Update the displayed ruler tooltip text
     */
    private _refreshRulerText(): void;
    /**
     * Highlight the grid squares which should be shown under the area of effect
     */
    highlightGrid(): void;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
}

/**
 * A Tile is an implementation of PlaceableObject which represents a static piece of artwork or prop within the Scene.
 * Tiles are drawn above the {@link BackroundLayer} but below the {@link TokenLayer}.
 * @example
 * Tile.create({
 *   img: "path/to/tile-artwork.png",
 *   width: 300,
 *   height: 300,
 *   scale: 1,
 *   x: 1000,
 *   y: 1000,
 *   z: 370,
 *   rotation: 45,
 *   hidden: false,
 *   locked: true
 * });
 */
declare class Tile extends PlaceableObject {
    /**
     * The Tile border frame
     */
    frame: PIXI.Container | null;
    /**
     * The Tile image container
     */
    tile: PIXI.Container | null;
    /**
     * The primary tile image texture
     */
    texture: PIXI.Texture | null;
    static embeddedName: any;
    /**
     * Apply initial sanitizations to the provided input data to ensure that a Tile has valid required attributes.
     */
    private _cleanData(): void;
    /**
     * Get the native aspect ratio of the base texture for the Tile sprite
     */
    aspectRatio: number;
    /**
     * Refresh the display of the Tile border
     */
    private _refreshBorder(): void;
    /**
     * Refresh the display of the Tile resizing handle
     */
    private _refreshHandle(): void;
    /**
     * Handle mouse-over event on a control handle
     * @param event - The mouseover event
     */
    private _onHandleHoverIn(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouse-out event on a control handle
     * @param event - The mouseout event
     */
    private _onHandleHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * When we start a drag event - create a preview copy of the Tile for re-positioning
     * @param event - The mousedown event
     */
    private _onHandleMouseDown(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle the beginning of a drag event on a resize handle
     */
    private _onHandleDragStart(event: any): void;
    /**
     * Handle mousemove while dragging a tile scale handler
     * @param event - The mousemove event
     */
    private _onHandleDragMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle mouseup after dragging a tile scale handler
     * @param event - The mouseup event
     */
    private _onHandleDragDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Handle cancellation of a drag event for one of the resizing handles
     */
    private _onHandleDragCancel(): void;
    /**
     * Create a preview tile with a background texture instead of an image
     */
    static createPreview(): Tile;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * Track the field of vision for the placeable object.
     * This is necessary to determine whether a player has line-of-sight towards a placeable object or vice-versa
     */
    vision: any;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle - The desired angle of rotation
     * @param snap - Snap the angle of rotation to a certain target degree increment
     * @returns A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<PlaceableObject>;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
}

/**
 * A Token is an implementation of PlaceableObject which represents an Actor within a viewed Scene on the game canvas.
 * @example
 * Token.create({
 *   name: "Token Name",
 *   x: 1000,
 *   y: 1000,
 *   displayName: 3,
 *   img: "path/to/token-artwork.png",
 *   width: 2,
 *   height: 2,
 *   scale: 1.2,
 *   elevation: 50,
 *   lockRotation: false,
 *   rotation: 30,
 *   effects: ["icons/stun.png"],
 *   overlayEffect: "icons/dead.png",
 *   vision: true,
 *   dimSight: 60,
 *   brightSight: 0,
 *   dimLight: 40,
 *   brightLight: 20,
 *   sightAngle: 60,
 *   hidden: false,
 *   actorId: "dfgkjt43jkvdfkj34t",
 *   actorLink: true,
 *   actorData: {},
 *   disposition: 1,
 *   displayBars: 3,
 *   bar1: {attribute: "attributes.hp"},
 *   bar2: {attribute: "attributes.sp"}
 * }
 */
declare class Token extends PlaceableObject {
    /**
     * A Ray which represents the Token's current movement path
     */
    private _movement: Ray;
    /**
     * An Object which records the Token's prior velocity dx and dy
     * This can be used to determine which direction a Token was previously moving
     */
    private _velocity: any;
    /**
     * The Token's most recent valid position
     */
    private _validPosition: any;
    /**
     * Provide a temporary flag through which th6is Token can be overridden to bypass any movement animation
     */
    _noAnimate: boolean;
    /**
     * Track the set of User entities which are currently targeting this Token
     */
    targeted: Set<User>;
    /**
     * An Actor entity constructed using this Token's data
     * If actorLink is true, then the entity is the true Actor entity
     * Otherwise, the Actor entity is a synthetic, constructed using the Token actorData
     */
    actor: Actor;
    /**
     * A reference to the PointSource object which defines this vision source area of effect
     */
    vision: PointSource;
    /**
     * A reference to the PointSource object which defines this light source area of effect
     */
    light: PointSource;
    static embeddedName: any;
    /**
     * Apply initial sanitizations to the provided input data to ensure that a Token has valid required attributes.
     */
    private _cleanData(): void;
    /**
     * A Boolean flag for whether the current game User has permission to control this token
     */
    owner: boolean;
    /**
     * A boolean flag for whether the current game User has observer permission for the Token
     */
    observer: boolean;
    /**
     * Is the HUD display active for this token?
     */
    hasActiveHUD: any;
    /**
     * Convenience access to the token's nameplate string
     */
    name: string;
    /**
     * Translate the token's grid width into a pixel width based on the canvas size
     */
    w: number;
    /**
     * Translate the token's grid height into a pixel height based on the canvas size
     */
    h: number;
    /**
     * The Token's current central position
     * @property x - The central x-coordinate
     * @property y - The central y-coordinate
     */
    center: {
        x: any;
        y: any;
    };
    /**
     * An indicator for whether or not this token is currently involved in the active combat encounter.
     */
    inCombat: boolean;
    /**
     * An indicator for whether the Token is currently targeted by the active game User
     */
    isTargeted: boolean;
    /**
     * Determine whether the Token is visible to the calling user's perspective.
     * Hidden Tokens are only displayed to GM Users.
     * Non-hidden Tokens are always visible if Token Vision is not required.
     * Controlled tokens are always visible.
     * All Tokens are visible to a GM user if no Token is controlled.
     */
    isVisible: boolean;
    /**
     * Test whether the Token has sight (or blindness) at any radius
     */
    hasSight: boolean;
    /**
     * Test whether the Token emits light (or darkness) at any radius
     */
    emitsLight: boolean;
    /**
     * Test whether the Token has a limited angle of vision or light emission which would require sight to update on Token rotation
     */
    hasLimitedVisionAngle: boolean;
    /**
     * Translate the token's sight distance in units into a radius in pixels.
     */
    dimRadius: any;
    /**
     * Translate the token's bright light distance in units into a radius in pixels.
     */
    brightRadius: any;
    /**
     * The named identified for the source object associated with this Token
     */
    sourceId: any;
    /**
     * Update the light and vision source objects associated with this Token
     * @param [defer] - Defer refreshing the SightLayer to manually call that refresh later.
     * @param [deleted] - Indicate that this light source has been deleted.
     * @param [noUpdateFog] - Never update the Fog exploration progress for this update.
     */
    updateSource(defer?: boolean, deleted?: boolean, noUpdateFog?: boolean): void;
    /**
     * Test whether this Token is a viable vision source for the current User
     */
    private _isVisionSource(): boolean;
    /**
     * Draw resource bars for the Token
     */
    private _drawAttributeBars(): void;
    /**
     * Draw the Sprite icon for the Token
     */
    private _drawIcon(): Promise<PIXI.Sprite>;
    /**
     * Update display of the Token, pulling latest data and re-rendering the display of Token components
     */
    refresh(): void;
    /**
     * Draw the Token border, taking into consideration the grid type and border color
     */
    private _refreshBorder(): void;
    /**
     * Get the hex color that should be used to render the Token border
     * @returns The hex color used to depict the border color
     */
    private _getBorderColor(): number;
    /**
     * Refresh the target indicators for the Token.
     * Draw both target arrows for the primary User as well as indicator pips for other Users targeting the same Token.
     */
    private _refreshTarget(): void;
    /**
     * A helper method to retrieve the underlying data behind one of the Token's attribute bars
     * @param barName - The named bar to retrieve the attribute for
     * @param alternative - An alternative attribute path to get instead of the default one
     * @returns The attribute displayed on the Token bar, if any
     */
    getBarAttribute(barName: string, alternative: string): any | null;
    /**
     * Refresh the display of Token attribute bars, rendering latest resource data
     * If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.
     */
    private drawBars(): void;
    /**
     * Draw a single resource bar, given provided data
     * @param number - The Bar number
     * @param bar - The Bar container
     * @param data - Resource data for this bar
     */
    private _drawBar(number: number, bar: PIXI.Graphics, data: any): void;
    /**
     * Draw the token's nameplate as a text object
     * @returns The Text object for the Token nameplate
     */
    _drawNameplate(): PIXI.Text;
    /**
     * Draw a text tooltip for the token which can be used to display Elevation or a resource value
     */
    drawTooltip(): void;
    /**
     * Return the text which should be displayed in a token's tooltip field
     */
    private _getTooltipText(): string;
    /**
     * Draw the active effects and overlay effect icons which are present upon the Token
     */
    drawEffects(): void;
    /**
     * Draw the overlay effect icon
     */
    private _drawOverlay(): Promise<void>;
    /**
     * Draw a status effect icon
     */
    private _drawEffect(): Promise<void>;
    /**
     * Helper method to determine whether a token attribute is viewable under a certain mode
     * @param mode - The mode from CONST.TOKEN_DISPLAY_MODES
     * @returns Is the attribute viewable?
     */
    private _canViewMode(mode: number): boolean;
    /**
     * Animate Token movement along a certain path which is defined by a Ray object
     * @param ray - The path along which to animate Token movement
     */
    animateMovement(ray: Ray): void;
    /**
     * Animate the continual revealing of Token vision during a movement animation
     */
    private _onMovementFrame(): void;
    /**
     * Update perception each frame depending on the animation configuration
     */
    private _animatePerceptionFrame(): void;
    /**
     * Terminate animation of this particular Token
     */
    stopAnimation(): void;
    /**
     * Check for collision when attempting a move to a new position
     * @param destination - The destination point of the attempted movement
     * @returns A true/false indicator for whether the attempted movement caused a collision
     */
    checkCollision(destination: Point): boolean;
    /**
     * Get the center-point coordinate for a given grid position
     * @param x - The grid x-coordinate that represents the top-left of the Token
     * @param y - The grid y-coordinate that represents the top-left of the Token
     * @returns The coordinate pair which represents the Token's center at position (x, y)
     */
    getCenter(x: number, y: number): any;
    /**
     * Set the token's position by comparing its center position vs the nearest grid vertex
     * Return a Promise that resolves to the Token once the animation for the movement has been completed
     * @param x - The x-coordinate of the token center
     * @param y - The y-coordinate of the token center
     * @param [animate] - Animate the movement path, default is true
     * @returns The Token after animation has completed
     */
    setPosition(x: number, y: number, animate?: boolean): Promise<Token>;
    /**
     * Update the Token velocity auto-regressively, shifting increasing weight towards more recent movement
     * Employ a magic constant chosen to minimize (effectively zero) the likelihood of trigonometric edge cases
     * @param ray - The proposed movement ray
     * @returns An updated velocity with directional memory
     */
    private _updateVelocity(ray: Ray): any;
    /**
     * Set this Token as an active target for the current game User
     * @param targeted - Is the Token now targeted?
     * @param user - Assign the token as a target for a specific User
     * @param releaseOthers - Release other active targets for the same player?
     * @param groupSelection - Is this target being set as part of a group selection workflow?
     */
    setTarget(targeted?: boolean, user: User | null, releaseOthers: boolean, groupSelection: boolean): void;
    /**
     * Add or remove the currently controlled Tokens from the active combat encounter
     * @param [combat] - A specific combat encounter to which this Token should be added
     * @returns The Token which initiated the toggle
     */
    toggleCombat(combat?: Combat): Promise<Token>;
    /**
     * Toggle an active effect by it's texture path.
     * Copy the existing Array in order to ensure the update method detects the data as changed.
     * @param effect - The texture file-path of the effect icon to toggle on the Token.
     * @param [options] - Additional optional arguments which configure how the effect is handled.
     * @param [options.active] - Force a certain active state for the effect
     * @param [options.overlay] - Whether to set the effect as the overlay effect?
     * @returns Was the texture applied (true) or removed (false)
     */
    toggleEffect(effect: string | any, options?: {
        active?: boolean;
        overlay?: boolean;
    }): Promise<boolean>;
    /**
     * A helper function to toggle a status effect which includes an Active Effect template
     */
    private _toggleActiveEffect(): Promise<boolean>;
    /**
     * A helper function to toggle the overlay status icon on the Token
     */
    private _toggleOverlayEffect(): Promise<any>;
    /**
     * Toggle the visibility state of any Tokens in the currently selected set
     * @returns A Promise which resolves to the updated Scene
     */
    toggleVisibility(): Promise<Scene>;
    /**
     * Return the token's sight origin, tailored for the direction of their movement velocity to break ties with walls
     */
    getSightOrigin(): any;
    /**
     * A generic transformation to turn a certain number of grid units into a radius in canvas pixels.
     * This function adds additional padding to the light radius equal to half the token width.
     * This causes light to be measured from the outer token edge, rather than from the center-point.
     * @param units - The radius in grid units
     * @returns The radius in canvas units
     */
    getLightRadius(units: number): number;
    /**
     * Extend the PlaceableObject.rotate method to prevent rotation if the Token is in the midst of a movement animation
     */
    rotate(): void;
    /**
     * Handle updates to the Token's referenced Actor (either Entity or synthetic)
     * @param updateData - The changes to Token actorData overrides which are incremental
     */
    private _onUpdateTokenActor(updateData: any): void;
    /**
     * Handle updates to this Token which originate from changes to the base Actor entity
     * @param actorData - Updated data for the base Actor
     * @param updateData - Changes to the base Actor which were incremental
     */
    private _onUpdateBaseActor(actorData: any, updateData: any): void;
    /**
     * Handle the possible re-drawing of Token attribute bars depending on whether the tracked attribute changed
     * @param updateData - An object of changed data
     */
    private _onUpdateBarAttributes(updateData: any): void;
    /**
     * A factory method to create a Token instance from an Actor entity.
     * The Token is not automatically saved to the database, it is up to the caller whether or not they wish to do that.
     * @param actor - The input actor entity
     * @param [tokenData] - Additional data, such as x, y, rotation, etc. for the created token
     * @returns The created Token instance
     */
    static fromActor(actor: Actor, tokenData?: any): Promise<Token>;
    shiftPosition(): void;
    toggleOverlay(): void;
    /**
     * The underlying data object which provides the basis for this placeable object
     */
    data: any;
    /**
     * Retain a reference to the Scene within which this Placeable Object resides
     */
    scene: Scene;
    /**
     * A control icon for interacting with the object
     */
    controlIcon: ControlIcon;
    /**
     * A mouse interaction manager instance which handles mouse workflows related to this object.
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * An indicator for whether the object is currently controlled
     */
    private _controlled: boolean;
    /**
     * An indicator for whether the object is currently a hover target
     */
    private _hover: boolean;
    /**
     * A singleton reference to the FormApplication class which configures this object
     */
    private _sheet: FormApplication | null;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The _id of the underlying EmbeddedEntity
     */
    id: string;
    /**
     * The field-of-vision polygon for the object, if it has been computed
     */
    fov: PIXI.Polygon | null;
    /**
     * The line-of-sight polygon for the object, if it has been computed
     */
    los: PIXI.Polygon | null;
    /**
     * A Form Application which is used to configure the properties of this Placeable Object or the EmbeddedEntity
     * it represents.
     */
    sheet: FormApplication;
    /**
     * A Universally Unique Identifier (uuid) for this EmbeddedEntity
     */
    uuid: string;
    /**
     * Test whether a user can perform a certain interaction with regards to a Placeable Object
     * @param user - The User performing the action
     * @param action - The named action being attempted
     * @returns Does the User have rights to perform the action?
     */
    can(user: User, action: string): boolean;
    /**
     * Does the User have permission to create the underlying Embedded Entity?
     */
    private _canCreate(): void;
    /**
     * Does the User have permission to update the underlying Embedded Entity?
     */
    private _canUpdate(): void;
    /**
     * Does the User have permission to delete the underlying Embedded Entity?
     */
    private _canDelete(): void;
    /**
     * Clear the display of the existing object
     * @returns The cleared object
     */
    clear(): PlaceableObject;
    /**
     * Draw the primary Sprite for the PlaceableObject
     */
    private _drawPrimarySprite(): PIXI.Sprite | null;
    update(): void;
    delete(): void;
    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns The flag value
     */
    getFlag(scope: string, key: string): any;
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @param value - The flag value
     * @returns A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise;
    /**
     * Remove a flag assigned to the Entity
     * @param scope - The flag scope which namespaces the key
     * @param key - The flag key
     * @returns A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise;
    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param options - Additional options which modify the control request
     * @param options.releaseOthers - Release any other controlled objects first
     * @returns A flag denoting whether or not control was successful
     */
    control(options: {
        releaseOthers: boolean;
    }): boolean;
    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @param options - Options which modify the releasing workflow
     * @returns A Boolean flag confirming the object was released.
     */
    release(options: any): boolean;
    /**
     * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
     * @param [angle] - An explicit angle, either this or delta must be provided
     * @param [delta] - A relative angle delta, either this or the angle must be provided
     * @param [snap] - A precision (in degrees) to which the resulting angle should snap. Default is 0.
     * @returns The new rotation angle for the object
     */
    _updateRotation(angle?: number, delta?: number, snap?: number): number;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Callback actions which occur on a single right-click event to configure properties of the object
     */
    private _onClickRight(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftCancel(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Can the User access the HUD for this Placeable Object?
     */
    private _canHUD(): void;
    /**
     * Does the User have permission to configure the Placeable Object?
     */
    private _canConfigure(): void;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Does the User have permission to view details of the Placeable Object?
     */
    private _canView(): void;
    /**
     * Does the User have permission to drag this Placeable Object?
     */
    private _canDrag(): void;
    /**
     * Does the User have permission to hover on this Placeable Object?
     */
    private _canHover(): void;
    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     * @returns A new object with identical data
     */
    clone(): PlaceableObject;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Obtain a shifted position for the Placeable Object
     * @param dx - The number of grid units to shift along the X-axis
     * @param dy - The number of grid units to shift along the Y-axis
     * @returns The shifted target coordinates
     */
    private _getShiftedPosition(dx: number, dy: number): any;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
}

/**
 * A "secret" global to help debug attributes of the currently controlled Token.
 * This is only for debugging, and may be removed in the future, so it's not safe to use.
 */
declare var _token: Token;

declare interface Wall extends PlaceableObject {
}

/**
 * A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.
 * Walls are used to restrict Token movement or visibility as well as to define the areas of effect for ambient lights
 * and sounds.
 * @example
 * Wall.create({
 *  c = [100, 200, 400, 600],
 *  move: CONST.WALL_MOVEMENT_TYPES.NORMAL,
 *  sense: CONST.WALL_SENSE_TYPES.NORMAL,
 *  dir: CONST.WALL_DIRECTIONS.BOTH,
 *  door: CONST.WALL_DOOR_TYPES.DOOR,
 *  ds: CONST.WALL_DOOR_STATES.CLOSED
 * });
 */
declare class Wall implements PlaceableObject {
    /**
     * An reference the Door Control icon associated with this Wall, if any
     */
    private doorControl: DoorControl | null;
    static embeddedName: any;
    /**
     * A convenience reference to the coordinates Array for the Wall endpoints, [x0,y0,x1,y1].
     */
    coords: number[];
    /**
     * Return the coordinates [x,y] at the midpoint of the wall segment
     */
    midpoint: any;
    /**
     * Get the direction of effect for a directional Wall
     */
    direction: any;
    /**
     * This helper converts the wall segment to a Ray
     * @returns The wall in Ray representation
     */
    toRay(): Ray;
    /**
     * Draw a directional prompt icon for one-way walls to illustrate their direction of effect.
     * @returns The drawn icon
     */
    private _drawDirection(): PIXI.Sprite;
    /**
     * Compute an approximate Polygon which encloses the line segment providing a specific hitArea for the line
     * @param coords - The original wall coordinates
     * @param pad - The amount of padding to apply
     * @returns A constructed Polygon for the line
     */
    private _getWallHitPolygon(coords: number[], pad: number): PIXI.Polygon;
    /**
     * Given the properties of the wall - decide upon a color to render the wall for display on the WallsLayer
     */
    private _getWallColor(): void;
    destroy(): void;
    /**
     * Test whether the Wall direction lies between two provided angles
     * This test is used for collision and vision checks against one-directional walls
     */
    isDirectionBetweenAngles(lower: any, upper: any): boolean;
    /**
     * A simple test for whether a Ray can intersect a directional wall
     * @param ray - The ray to test
     * @returns Can an intersection occur?
     */
    canRayIntersect(ray: Ray): boolean;
    /**
     * Get an Array of Wall objects which are linked by a common coordinate
     * @returns An object reporting ids and endpoints of the linked segments
     */
    getLinkedSegments(): any;
    /**
     * Callback actions when a wall that contains a door is moved or its state is changed
     * @param doorChange - Update vision and sound restrictions
     */
    private _onModifyWall(doorChange: boolean): void;
    /**
     * Handle mouse-hover events on the line segment itself, pulling the Wall to the front of the container stack
     */
    private _onMouseOverLine(): void;
    /**
     * The bounding box for this PlaceableObject.
     * This is required if the layer uses a Quadtree, otherwise it is optional
     */
    bounds: any;
    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    center: PIXI.Point;
    /**
     * Does the User have permission to control the Placeable Object?
     */
    private _canControl(): void;
    /**
     * Draw the placeable object into its parent container
     * @returns The drawn object
     */
    draw(): PlaceableObject;
    /**
     * Refresh the current display state of the Placeable Object
     * @returns The refreshed object
     */
    refresh(): PlaceableObject;
    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    private _onCreate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    private _onUpdate(): void;
    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    private _onDelete(): void;
    /**
     * Additional events which trigger once control of the object is established
     * @param options - Optional parameters which apply for specific implementations
     */
    private _onControl(options: any): void;
    /**
     * Additional events which trigger once control of the object is released
     * @param options - Options which modify the releasing workflow
     */
    private _onRelease(options: any): void;
    /**
     * Activate interactivity for the Placeable Object
     */
    activateListeners(): void;
    /**
     * Create a standard MouseInteractionManager for the PlaceableObject
     */
    private _createInteractionManager(): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseover event occurs
     */
    private _onHoverIn(event: PIXI.interaction.InteractionEvent, hoverOutOthers: boolean): void;
    /**
     * Actions that should be taken for this Placeable Object when a mouseout event occurs
     */
    private _onHoverOut(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a single left-click event to assume control of the object
     */
    private _onClickLeft(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double left-click event to activate
     */
    private _onClickLeft2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a double right-click event to configure properties of the object
     */
    private _onClickRight2(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur when a mouse-drag action is first begun.
     */
    private _onDragLeftStart(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftMove(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Callback actions which occur on a mouse-move operation.
     */
    private _onDragLeftDrop(event: PIXI.interaction.InteractionEvent): void;
}

declare namespace AbstractBaseShader {
    /**
     * A factory method for creating the shader using its defined default values
     */
    function create(): AbstractBaseShader;
    /**
     * Fractional Brownian Motion for a given number of octaves
     */
    function FBM(): void;
    /**
     * Fade easing to use with distance in interval [0,1]
     */
    function FADE(): void;
    /**
     * TODO: FOR TESTING
     * An alternative easing function which is partially linear followed by exponential falloff
     * @param slope - The slope of linear falloff
     * @param order - The order of polynomial falloff
     */
    function FADE2(slope?: number, order?: number): void;
}

/**
 * This class defines an interface which all shaders utilize
 */
declare interface AbstractBaseShader extends PIXI.Shader {
    /**
     * The initial default values of shader uniforms
     */
    _defaults: any;
    /**
     * The default vertex shader used by all instances of AbstractBaseShader
     */
    vertexShader: string;
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
    /**
     * The default uniform values for the shader.
     * A subclass of AbstractBaseShader must implement the defaultUniforms static field.
     */
    defaultUniforms: any;
    /**
     * Reset the shader uniforms back to their provided default values
     */
    reset(): void;
    /**
     * A Vec3 pseudo-random generator, based on uv position
     */
    PRNG3D: string;
    /**
     * A conventional pseudo-random number generator with the "golden" numbers, based on uv position
     */
    PRNG: string;
    /**
     * A conventional noise generator
     */
    NOISE: string;
    /**
     * Convert a Hue-Saturation-Brightness color to RGB - useful to convert polar coordinates to RGB
     */
    HSB2RGB: string;
}

declare interface StandardIlluminationShader extends AbstractBaseShader {
}

/**
 * The default coloration shader used by standard rendering and animations
 * A fragment shader which creates a solid light source.
 */
declare class StandardIlluminationShader implements AbstractBaseShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
    /**
     * The default uniform values for the shader.
     * A subclass of AbstractBaseShader must implement the defaultUniforms static field.
     */
    defaultUniforms: any;
}

declare interface StandardColorationShader extends AbstractBaseShader {
}

/**
 * The default coloration shader used by standard rendering and animations.
 * A fragment shader which creates a light source.
 */
declare class StandardColorationShader implements AbstractBaseShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
    /**
     * The default uniform values for the shader.
     * A subclass of AbstractBaseShader must implement the defaultUniforms static field.
     */
    defaultUniforms: any;
}

declare interface TorchIlluminationShader extends StandardIlluminationShader {
}

/**
 * Allow coloring of illumination
 */
declare class TorchIlluminationShader implements StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

declare interface TorchColorationShader extends StandardColorationShader {
}

/**
 * Torch animation coloration shader
 */
declare class TorchColorationShader implements StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
    /**
     * The default uniform values for the shader.
     * A subclass of AbstractBaseShader must implement the defaultUniforms static field.
     */
    defaultUniforms: any;
}

declare interface PulseIlluminationShader extends StandardIlluminationShader {
}

/**
 * Pulse animation illumination shader
 */
declare class PulseIlluminationShader implements StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

declare interface PulseColorationShader extends StandardColorationShader {
}

/**
 * Pulse animation coloration shader
 */
declare class PulseColorationShader implements StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
    /**
     * The default uniform values for the shader.
     * A subclass of AbstractBaseShader must implement the defaultUniforms static field.
     */
    defaultUniforms: any;
}

declare interface EnergyFieldColorationShader extends StandardColorationShader {
}

/**
 * Energy field animation coloration shader
 */
declare class EnergyFieldColorationShader implements StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

declare interface ChromaColorationShader extends StandardColorationShader {
}

/**
 * Chroma animation coloration shader
 */
declare class ChromaColorationShader implements StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

declare interface WaveIlluminationShader extends StandardIlluminationShader {
}

/**
 * Wave animation illumination shader
 */
declare class WaveIlluminationShader implements StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

declare interface WaveColorationShader extends StandardColorationShader {
}

/**
 * Wave animation coloration shader
 */
declare class WaveColorationShader implements StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Fog animation coloration shader
 */
declare class FogColorationShader extends StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Sunburst animation illumination shader
 */
declare class SunburstIlluminationShader extends StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Sunburst animation coloration shader
 */
declare class SunburstColorationShader extends StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Light dome animation coloration shader
 */
declare class LightDomeColorationShader extends StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Emanation animation coloration shader
 */
declare class EmanationColorationShader extends StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Ghost light animation illumination shader
 */
declare class GhostLightIlluminationShader extends StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Ghost light animation coloration shader
 */
declare class GhostLightColorationShader extends StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Hexagonal dome animation coloration shader
 */
declare class HexaDomeColorationShader extends StandardColorationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Roling mass illumination shader - intended primarily for darkness
 */
declare class RoilingIlluminationShader extends StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * Black Hole animation illumination shader
 */
declare class BlackHoleIlluminationShader extends StandardIlluminationShader {
    /**
     * The fragment shader which renders this source.
     * A subclass of AbstractBaseShader must implement the fragmentShader static field.
     */
    fragmentShader: string;
}

/**
 * A single Mouse Cursor
 */
declare class Cursor {
    /**
     * Draw the user's cursor as a small dot with their user name attached as text
     */
    draw(): void;
    /**
     * Move an existing cursor to a new position smoothly along the animation loop
     */
    _animate(): void;
    /**
     * Remove the cursor update from the animation loop and destroy the container.
     * @param options - Additional options passed to the parent ``PIXI.Container.destroy()`` method
     */
    destroy(options: any): void;
}

/**
 * An icon representing a Door Control
 */
declare class DoorControl extends PIXI.Container {
    /**
     * Draw the DoorControl icon, displaying it's icon texture and border
     */
    draw(): Promise<DoorControl>;
    /**
     * Get the icon texture to use for the Door Control icon based on the door state
     */
    _getTexture(): void;
    /**
     * Determine whether the DoorControl is visible to the calling user's perspective.
     * The control is always visible if the user is a GM and no Tokens are controlled.
     */
    isVisible: boolean;
    /**
     * Handle left mouse down events on the door control icon.
     * This should only toggle between the OPEN and CLOSED states.
     */
    private _onMouseDown(event: any): void;
    /**
     * Handle right mouse down events on the door control icon
     * This should toggle whether the door is LOCKED or CLOSED
     */
    private _onRightDown(event: any): void;
}

/**
 * A CanvasLayer for displaying UI controls which are overlayed on top of other layers.
 *
 * We track three types of events:
 * 1) Cursor movement
 * 2) Ruler measurement
 * 3) Map pings
 */
declare class ControlsLayer {
    /**
     * Cursor position indicators
     */
    cursors: PIXI.Container;
    /**
     * A mapping of user IDs to Cursor instances for quick access
     */
    _cursors: any;
    /**
     * Door control icons
     */
    doors: PIXI.Container | null;
    /**
     * Status effect icons
     */
    effects: any;
    /**
     * Ruler tools, one per connected user
     */
    rulers: PIXI.Container;
    /**
     * A convenience mapping of user IDs to Ruler instances for quick access
     */
    _rulers: any;
    /**
     * Canvas selection rectangle
     */
    select: PIXI.Graphics;
    static layerOptions: any;
    /**
     * A convenience accessor to the Ruler for the active game user
     */
    ruler: Ruler;
    /**
     * Get the Ruler display for a specific User ID
     */
    getRulerForUser(userId: string): Ruler | null;
    draw(): void;
    /**
     * Draw the cursors container
     */
    drawCursors(): void;
    /**
     * Draw the Door controls container
     */
    drawDoors(): void;
    /**
     * Create a Door Control icon for a given Wall object
     * @param wall - The Wall for which to create a DoorControl
     * @returns The created DoorControl
     */
    createDoorControl(wall: Wall): DoorControl | null;
    /**
     * Draw Ruler tools
     */
    drawRulers(): void;
    /**
     * Draw the select rectangle given an event originated within the base canvas layer
     * @param coords - The rectangle coordinates of the form {x, y, width, height}
     */
    drawSelect(coords: any): void;
    deactivate(): void;
    /**
     * Handle mousemove events on the game canvas to broadcast activity of the user's cursor position
     */
    private _onMoveCursor(event: PIXI.interaction.InteractionEvent): void;
    /**
     * Create and draw the Cursor object for a given User
     * @param user - The User entity for whom to draw the cursor Container
     */
    drawCursor(user: User): void;
    /**
     * Update the cursor when the user moves to a new position
     */
    updateCursor(): void;
    /**
     * Update display of an active Ruler object for a user given provided data
     */
    updateRuler(user: User, rulerData: any): void;
}

/**
 * The Ruler - used to measure distances and trigger movements
 * @param The - User for whom to construct the Ruler instance
 */
declare class Ruler {
    constructor(The: User);
    /**
     * Record the User which this Ruler references
     */
    user: User;
    /**
     * The ruler name - used to differentiate between players
     */
    name: string;
    /**
     * The ruler color - by default the color of the active user
     */
    color: number | null;
    /**
     * This Array tracks individual waypoints along the ruler's measured path.
     * The first waypoint is always the origin of the route.
     */
    waypoints: PIXI.Point[];
    /**
     * The current destination point at the end of the measurement
     */
    destination: PIXI.Point;
    /**
     * The Ruler element is a Graphics instance which draws the line and points of the measured path
     */
    ruler: PIXI.Graphics;
    /**
     * The Labels element is a Container of Text elements which label the measured path
     */
    labels: PIXI.Container;
    /**
     * Track the current measurement state
     */
    _state: number;
    /**
     * Is the Ruler being actively used to measure distance?
     */
    active: any;
    /**
     * Measure the distance between two points and render the ruler UI to illustrate it
     * @param destination - The destination point to which to measure
     * @param gridSpaces - Restrict measurement only to grid spaces
     */
    measure(destination: PIXI.Point, gridSpaces: boolean): void;
    /**
     * Get the text label for a segment of the measured path
     */
    private _getSegmentLabel(segmentDistance: number, totalDistance: number, isTotal: boolean): string;
    /**
     * Highlight the measurement required to complete the move in the minimum number of discrete spaces
     */
    private _highlightMeasurement(ray: Ray): void;
    /**
     * Determine whether a SPACE keypress event entails a legal token movement along a measured ruler
     * @returns An indicator for whether a token was successfully moved or not. If True the event should be
     *                               prevented from propagating further, if False it should move on to other handlers.
     */
    moveToken(): Promise<boolean>;
    /**
     * Acquire a Token, if any, which is eligible to perform a movement based on the starting point of the Ruler
     */
    private _getMovementToken(): Token;
    /**
     * A helper method to return an Array of Ray objects constructed from the waypoints of the measurement
     * @param waypoints - An Array of waypoint {x, y} Objects
     * @param destination - An optional destination point to append to the existing waypoints
     * @returns An Array of Ray objects which represent the segemnts of the waypoint path
     */
    private _getRaysFromWaypoints(waypoints: PIXI.Point[], destination: PIXI.Point): Ray[];
    /**
     * Clear display of the current Ruler
     */
    clear(): void;
    /**
     * Handle the beginning of a new Ruler measurement workflow
     */
    _onDragStart(): void;
    /**
     * Handle left-click events on the Canvas during Ruler measurement.
     */
    _onClickLeft(): void;
    /**
     * Handle right-click events on the Canvas during Ruler measurement.
     */
    _onClickRight(): void;
    /**
     * Continue a Ruler measurement workflow for left-mouse movements on the Canvas.
     */
    _onMouseMove(): void;
    /**
     * Conclude a Ruler measurement workflow by releasing the left-mouse button.
     */
    _onMouseUp(): void;
    /**
     * Handle the addition of a new waypoint in the Ruler measurement path
     */
    private _addWaypoint(point: PIXI.Point): void;
    /**
     * Handle the removal of a waypoint in the Ruler measurement path
     * @param point - The current cursor position to snap to
     * @param [snap] - Snap exactly to grid spaces?
     */
    private _removeWaypoint(point: PIXI.Point, snap?: boolean): void;
    /**
     * Handle the conclusion of a Ruler measurement workflow
     */
    private _endMeasurement(): void;
    /**
     * Update a Ruler instance using data provided through the cursor activity socket
     * @param data - Ruler data with which to update the display
     */
    update(data: any): void;
    /**
     * The possible Ruler measurement states which can occur
     */
    static STATES: any;
}

/**
 * I don't know what this will do yet
 */
declare class SpecialEffect {
    /**
     * Use this flag as a way to pass a stop signal into the animation frame
     */
    _stop: boolean;
}

/**
 * A special full-screen weather effect which uses one Emitters to render gently falling autumn leaves
 */
declare class AutumnLeavesWeatherEffect {
}

/**
 * A special full-screen weather effect which uses two Emitters to render drops and splashes
 */
declare class RainWeatherEffect {
}

/**
 * A special full-screen weather effect which uses one Emitters to render snowflakes
 */
declare class SnowWeatherEffect {
}

/**
 * The base grid class.
 * This double-dips to implement the "gridless" option
 */
declare class BaseGrid {
    /**
     * Grid Unit Width
     */
    w: any;
    /**
     * Grid Unit Height
     */
    h: any;
    /**
     * Highlight active grid spaces
     */
    highlight: any;
    /**
     * Highlight a grid position for a certain coordinates
     * @param layer - The highlight layer to use
     * @param x - The x-coordinate of the highlighted position
     * @param y - The y-coordinate of the highlighted position
     * @param color - The hex fill color of the highlight
     * @param border - The hex border color of the highlight
     * @param alpha - The opacity of the highlight
     * @param shape - A predefined shape to highlight
     */
    highlightGridPosition(layer: GridHighlight, x: number, y: number, color: number, border: number, alpha: number, shape: PIXI.Polygon): void;
    /**
     * Given a pair of coordinates (x, y) - return the top-left of the grid square which contains that point
     * @returns An Array [x, y] of the top-left coordinate of the square which contains (x, y)
     */
    getTopLeft(): number[];
    /**
     * Given a pair of coordinates (x, y), return the center of the grid square which contains that point
     * @param x - The x-coordinate
     * @param y - The y-coordinate
     * @returns An array [cx, cy] of the central point of the grid space which contains (x, y)
     */
    getCenter(x: number, y: number): number[];
    /**
     * Given a pair of coordinates (x1,y1), return the grid coordinates (x2,y2) which represent the snapped position
     * Under a "gridless" system, every pixel position is a valid snapping position
     * @param x - The exact target location x
     * @param y - The exact target location y
     * @param [interval = null] - An interval of grid spaces at which to snap.
     *                                  At interval=1, snapping occurs at pixel intervals defined by the grid size
     *                                  At interval=2, snapping would occur at the center-points of each grid size
     *                                  At interval=null, no snapping occurs
     * @returns An object containing the coordinates of the snapped location
     */
    getSnappedPosition(x: number, y: number, interval?: number | null): any;
    /**
     * Given a pair of pixel coordinates, return the grid position as an Array.
     * Always round down to the nearest grid position so the pixels are within the grid space (from top-left).
     * @param x - The x-coordinate pixel position
     * @param y - The y-coordinate pixel position
     * @returns An array representing the position in grid units
     */
    getGridPositionFromPixels(x: number, y: number): number[];
    /**
     * Given a pair of grid coordinates, return the pixel position as an Array.
     * Always round up to a whole pixel so the pixel is within the grid space (from top-left).
     * @param x - The x-coordinate grid position
     * @param y - The y-coordinate grid position
     * @returns An array representing the position in pixels
     */
    getPixelsFromGridPosition(x: number, y: number): number[];
    /**
     * Shift a pixel position [x,y] by some number of grid units dx and dy
     * @param x - The starting x-coordinate in pixels
     * @param y - The starting y-coordinate in pixels
     * @param dx - The number of grid positions to shift horizontally
     * @param dy - The number of grid positions to shift vertically
     */
    shiftPosition(x: number, y: number, dx: number, dy: number): void;
    /**
     * Measure the distance traversed over an array of measured segments
     * @param segments - An Array of measured movement segments
     * @param options - Additional options which modify the measurement
     * @returns An Array of distance measurements for each segment
     */
    measureDistances(segments: object[], options: Options): number[];
    /**
     * Get the grid row and column positions which are neighbors of a certain position
     * @param row - The grid row coordinate against which to test for neighbors
     * @param col - The grid column coordinate against which to test for neighbors
     * @returns An array of grid positions which are neighbors of the row and column
     */
    getNeighbors(row: number, col: number): number[];
}

/**
 * Construct a hexagonal grid
 */
declare class HexagonalGrid extends BaseGrid {
    /**
     * A matrix of x and y offsets which is multiplied by the width/height vector to get pointy-top polygon coordinates
     */
    static pointyHexPoints: number[][];
    /**
     * A matrix of x and y offsets which is multiplied by the width/height vector to get flat-top polygon coordinates
     */
    static flatHexPoints: number[][];
    /**
     * An array of the points which define a hexagon for this grid shape
     */
    hexPoints: any;
    draw(): void;
    /**
     * A convenience method for getting all the polygon points relative to a top-left [x,y] coordinate pair
     * @param x - The top-left x-coordinate
     * @param y - The top-right y-coordinate
     * @param [w] - An optional polygon width
     * @param [h] - An optional polygon height
     */
    getPolygon(x: number, y: number, w?: number, h?: number): void;
    /**
     * Convert an offset coordinate (row, col) into a cube coordinate (q, r, s).
     * See https://www.redblobgames.com/grids/hexagons/ for reference
     * Source code available https://www.redblobgames.com/grids/hexagons/codegen/output/lib-functions.js
     * @param row - The row number
     * @param col - The column number
     */
    offsetToCube(row: number, col: number): any;
    /**
     * Convert a cube coordinate (q, r, s) into an offset coordinate (row, col).
     * See https://www.redblobgames.com/grids/hexagons/ for reference
     * Source code available https://www.redblobgames.com/grids/hexagons/codegen/output/lib-functions.js
     * @param q - Cube coordinate 1
     * @param r - Cube coordinate 2
     * @param s - Cube coordinate 3
     */
    cubeToOffset(q: number, r: number, s: number): any;
    /**
     * Given a cursor position (x, y), obtain the cube coordinate hex (q, r, s) of the hex which contains it
     * http://justinpombrio.net/programming/2020/04/28/pixel-to-hex.html
     * @param x - The x-coordinate in pixels
     * @param y - The y-coordinate in pixels
     */
    private static pixelToCube(x: number, y: number): void;
    /**
     * Measure the distance in hexagons between two cube coordinates
     */
    private static cubeDistance(): void;
    getFlatHexPolygon(): void;
    getPointyHexPolygon(): void;
    /**
     * Grid Unit Width
     */
    w: any;
    /**
     * Grid Unit Height
     */
    h: any;
    /**
     * Highlight active grid spaces
     */
    highlight: any;
    /**
     * Highlight a grid position for a certain coordinates
     * @param layer - The highlight layer to use
     * @param x - The x-coordinate of the highlighted position
     * @param y - The y-coordinate of the highlighted position
     * @param color - The hex fill color of the highlight
     * @param border - The hex border color of the highlight
     * @param alpha - The opacity of the highlight
     * @param shape - A predefined shape to highlight
     */
    highlightGridPosition(layer: GridHighlight, x: number, y: number, color: number, border: number, alpha: number, shape: PIXI.Polygon): void;
    /**
     * Given a pair of coordinates (x, y) - return the top-left of the grid square which contains that point
     * @returns An Array [x, y] of the top-left coordinate of the square which contains (x, y)
     */
    getTopLeft(): number[];
    /**
     * Given a pair of coordinates (x, y), return the center of the grid square which contains that point
     * @param x - The x-coordinate
     * @param y - The y-coordinate
     * @returns An array [cx, cy] of the central point of the grid space which contains (x, y)
     */
    getCenter(x: number, y: number): number[];
    /**
     * Given a pair of coordinates (x1,y1), return the grid coordinates (x2,y2) which represent the snapped position
     * Under a "gridless" system, every pixel position is a valid snapping position
     * @param x - The exact target location x
     * @param y - The exact target location y
     * @param [interval = null] - An interval of grid spaces at which to snap.
     *                                  At interval=1, snapping occurs at pixel intervals defined by the grid size
     *                                  At interval=2, snapping would occur at the center-points of each grid size
     *                                  At interval=null, no snapping occurs
     * @returns An object containing the coordinates of the snapped location
     */
    getSnappedPosition(x: number, y: number, interval?: number | null): any;
    /**
     * Given a pair of pixel coordinates, return the grid position as an Array.
     * Always round down to the nearest grid position so the pixels are within the grid space (from top-left).
     * @param x - The x-coordinate pixel position
     * @param y - The y-coordinate pixel position
     * @returns An array representing the position in grid units
     */
    getGridPositionFromPixels(x: number, y: number): number[];
    /**
     * Given a pair of grid coordinates, return the pixel position as an Array.
     * Always round up to a whole pixel so the pixel is within the grid space (from top-left).
     * @param x - The x-coordinate grid position
     * @param y - The y-coordinate grid position
     * @returns An array representing the position in pixels
     */
    getPixelsFromGridPosition(x: number, y: number): number[];
    /**
     * Shift a pixel position [x,y] by some number of grid units dx and dy
     * @param x - The starting x-coordinate in pixels
     * @param y - The starting y-coordinate in pixels
     * @param dx - The number of grid positions to shift horizontally
     * @param dy - The number of grid positions to shift vertically
     */
    shiftPosition(x: number, y: number, dx: number, dy: number): void;
    /**
     * Measure the distance traversed over an array of measured segments
     * @param segments - An Array of measured movement segments
     * @param options - Additional options which modify the measurement
     * @returns An Array of distance measurements for each segment
     */
    measureDistances(segments: object[], options: Options): number[];
    /**
     * Get the grid row and column positions which are neighbors of a certain position
     * @param row - The grid row coordinate against which to test for neighbors
     * @param col - The grid column coordinate against which to test for neighbors
     * @returns An array of grid positions which are neighbors of the row and column
     */
    getNeighbors(row: number, col: number): number[];
}

/**
 * A special Graphics class which handles Grid layer highlighting
 */
declare class GridHighlight {
    /**
     * Track the Grid Highlight name
     */
    name: string;
    /**
     * Track distinct positions which have already been highlighted
     */
    positions: Set;
    /**
     * Record a position that is highlighted and return whether or not it should be rendered
     * @param x - The x-coordinate to highlight
     * @param y - The y-coordinate to highlight
     * @returns Whether or not to draw the highlight for this location
     */
    highlight(x: number, y: number): boolean;
    /**
     * Extend the Graphics clear logic to also reset the highlighted positions
     */
    clear(...args: any[]): void;
    /**
     * Extend how this Graphics container is destroyed to also remove parent layer references
     */
    destroy(...args: any[]): void;
}

/**
 * A CanvasLayer responsible for drawing a square grid
 */
declare class GridLayer {
    /**
     * The Grid container
     */
    grid: PIXI.Container;
    /**
     * The Grid Highlight container
     */
    highlight: PIXI.Container;
    /**
     * Map named highlight layers
     */
    highlightLayers: any;
    static layerOptions: any;
    /**
     * The grid type rendered in this Scene
     */
    type: string;
    /**
     * A convenient reference to the pixel grid size used throughout this layer
     */
    size: number;
    /**
     * Get grid unit width
     */
    w: any;
    /**
     * Get grid unit height
     */
    h: any;
    /**
     * A boolean flag for whether the current grid is hexagonal
     */
    isHex: boolean;
    /**
     * Draw the grid
     * @param preview - Override settings used in place of those saved to the Scene data
     */
    draw(preview: any): void;
    /**
     * Given a pair of coordinates (x1,y1), return the grid coordinates (x2,y2) which represent the snapped position
     * @param x - The exact target location x
     * @param y - The exact target location y
     * @param interval - An interval of grid spaces at which to snap, default is 1.
     */
    getSnappedPosition(x: number, y: number, interval: number): void;
    /**
     * Given a pair of coordinates (x, y) - return the top-left of the grid square which contains that point
     * @returns An Array [x, y] of the top-left coordinate of the square which contains (x, y)
     */
    getTopLeft(): number[];
    /**
     * Given a pair of coordinates (x, y), return the center of the grid square which contains that point
     * @returns An Array [x, y] of the central point of the square which contains (x, y)
     */
    getCenter(): number[];
    /**
     * Measure the grid-wise distance between two point coordinates.
     * @example
     * let distance = canvas.grid.measureDistance({x: 1000, y: 1000}, {x: 2000, y: 2000});
     * @param origin - The origin point
     * @param target - The target point
     * @returns The measured distance between these points
     */
    measureDistance(origin: any, target: any): number;
    /**
     * Measure the distance traveled over an array of distance segments.
     * @param segments - An array of measured segments
     * @param options - Additional options which modify the measurement
     */
    measureDistances(segments: object[], options: Options): void;
    /**
     * Define a new Highlight graphic
     */
    addHighlightLayer(name: any): void;
    /**
     * Clear a specific Highlight graphic
     */
    clearHighlightLayer(name: any): void;
    /**
     * Destroy a specific Highlight graphic
     */
    destroyHighlightLayer(name: any): void;
    /**
     * Test if a specific row and column position is a neighboring location to another row and column coordinate
     */
    isNeighbor(): void;
}

/**
 * Construct a square grid container
 */
declare class SquareGrid {
    draw(): void;
    getTopLeft(): void;
    getCenter(): void;
    getGridPositionFromPixels(): void;
    getPixelsFromGridPosition(): void;
    getSnappedPosition(): void;
    /**
     * Shift a pixel position [x,y] by some number of grid units dx and dy
     * @param x - The starting x-coordinate in pixels
     * @param y - The starting y-coordinate in pixels
     * @param dx - The number of grid positions to shift horizontally
     * @param dy - The number of grid positions to shift vertically
     */
    shiftPosition(x: number, y: number, dx: number, dy: number): void;
    highlightGridPosition(): void;
    measureDistances(): void;
    getNeighbors(): void;
}

/**
 * An implementation interface for an Audio/Video client which is extended to provide broadcasting functionality.
 * @param master - The master orchestration instance
 * @param settings - The audio/video settings being used
 */
declare interface AVClient {
    /**
     * One-time initialization actions that should be performed for this client implementation.
     * This will be called only once when the Game object is first set-up.
     */
    initialize(): Promise<void>;
    /**
     * Connect to any servers or services needed in order to provide audio/video functionality.
     * Any parameters needed in order to establish the connection should be drawn from the settings object.
     * This function should return a boolean for whether the connection attempt was successful.
     * @returns Was the connection attempt successful?
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from any servers or services which are used to provide audio/video functionality.
     * This function should return a boolean for whether a valid disconnection occurred.
     * @returns Did a disconnection occur?
     */
    disconnect(): Promise<boolean>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getAudioSinks(): Promise<{ string: string; }>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getAudioSources(): Promise<{ string: string; }>;
    /**
     * Provide an Object of available video sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getVideoSources(): Promise<{ string: string; }>;
    /**
     * Return an array of Foundry User IDs which are currently connected to A/V.
     * The current user should also be included as a connected user in addition to all peers.
     * @returns The connected User IDs
     */
    getConnectedUsers(): string[];
    /**
     * Provide a MediaStream instance for a given user ID
     * @param userId - The User id
     * @returns The MediaStream for the user, or null if the user does not have one
     */
    getMediaStreamForUser(userId: string): MediaStream | null;
    /**
     * Is outbound audio enabled for the current user?
     */
    isAudioEnabled(): boolean;
    /**
     * Is outbound video enabled for the current user?
     */
    isVideoEnabled(): boolean;
    /**
     * Set whether the outbound audio feed for the current game user is enabled.
     * This method should be used when the user marks themselves as muted or if the gamemaster globally mutes them.
     * @param enable - Whether the outbound audio track should be enabled (true) or disabled (false)
     */
    toggleAudio(enable: boolean): void;
    /**
     * Set whether the outbound audio feed for the current game user is actively broadcasting.
     * This can only be true if audio is enabled, but may be false if using push-to-talk or voice activation modes.
     * @param broadcast - Whether outbound audio should be sent to connected peers or not?
     */
    toggleBroadcast(broadcast: boolean): void;
    /**
     * Set whether the outbound video feed for the current game user is enabled.
     * This method should be used when the user marks themselves as hidden or if the gamemaster globally hides them.
     * @param enable - Whether the outbound audio track should be enabled (true) or disabled (false)
     */
    toggleVideo(enable: boolean): void;
    /**
     * Set the Video Track for a given User ID to a provided VideoElement
     * @param userId - The User ID to set to the element
     * @param videoElement - The HTMLVideoElement to which the video should be set
     */
    setUserVideo(userId: string, videoElement: HTMLVideoElement): void;
    /**
     * Handle changes to A/V configuration settings.
     * @param changed - The settings which have changed
     */
    onSettingsChanged(changed: any): void;
}

/**
 * The master Audio/Video controller instance.
 * This is available as the singleton game.webrtc
 * @param settings - The Audio/Video settings to use
 */
declare class AVMaster {
    constructor(settings: AVSettings);
    /**
     * The Audio/Video client class
     */
    client: AVClient;
    /**
     * A flag to track whether the current user is actively broadcasting their microphone.
     */
    broadcasting: boolean;
    /**
     * Flag to determine if we are connected to the signalling server or not.
     * This is required for synchronization between connection and reconnection attempts.
     */
    _connected: boolean;
    /**
     * A flag to track whether the A/V system is currently in the process of reconnecting.
     * This occurs if the connection is lost or interrupted.
     */
    private _reconnecting: boolean;
    /**
     * Connect to the Audio/Video client.
     * @returns Was the connection attempt successful?
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from the Audio/Video client.
     * @returns Whether an existing connection was terminated?
     */
    disconnect(): Promise<boolean>;
    /**
     * Callback actions to take when the user becomes disconnected from the server.
     */
    reestablish(): Promise<void>;
    /**
     * Initialize the local broadcast state.
     */
    private _initialize(): void;
    /**
     * A user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.
     */
    canUserBroadcastAudio(userId: string): boolean;
    /**
     * A user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.
     */
    canUserShareAudio(userId: string): boolean;
    /**
     * A user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.
     */
    canUserBroadcastVideo(userId: string): boolean;
    /**
     * A user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.
     */
    canUserShareVideo(userId: string): boolean;
    /**
     * Trigger a change in the audio broadcasting state when using a push-to-talk workflow.
     * @param intent - The user's intent to broadcast. Whether an actual broadcast occurs will depend
     *                                on whether or not the user has muted their audio feed.
     */
    broadcast(intent: boolean): void;
    /**
     * Set up audio level listeners to handle voice activation detection workflow.
     * @param mode - The currently selected voice broadcasting mode
     */
    private _initializeUserVoiceDetection(mode: string): void;
    /**
     * Activate voice detection tracking for a userId on a provided MediaStream.
     * Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.
     * @param userId - The Foundry User ID whose voice is being processed
     * @param stream - The MediaStream which corresponds to that User
     * @param [ms] - A number of milliseconds which represents the voice activation volume interval
     */
    activateVoiceDetection(userId: string, stream: MediaStream, ms?: number): void;
    /**
     * Actions which the orchestration layer should take when a peer user disconnects from the audio/video service.
     * @param userId - The id of the disconnecting User
     */
    deactivateVoiceDetection(userId: string): void;
    /**
     * Periodic notification of user audio level
     *
     * This function uses the audio level (in dB) of each stream it's listening to to determine if a user
     * is speaking or not and notifies the UI of such changes.
     *
     * The User is considered speaking if they are above the decibel threshold in any of the history values.
     * This marks them as speaking as soon as they have a high enough volume, and marks them as not speaking only after
     * they drop below the threshold in all histories (last 4 volumes = for 200 ms).
     *
     * There can be more optimal ways to do this and which uses whether the user was already considered speaking before
     * or not, in order to eliminate short bursts of audio (coughing for example).
     * @param userId - The user ID of the user whose audio levels are being reported
     * @param dbLevel - The audio level in decibels of the user within the last 50ms
     */
    private _onAudioLevel(userId: string, dbLevel: number): void;
    /**
     * Set up interactivity and handling of push-to-talk broadcasting workflow.
     */
    private _initializePushToTalk(): void;
    /**
     * Resets the speaking history of a user
     * If the user was considered speaking, then mark them as not speaking
     * @param userId - The ID of the user
     */
    _resetSpeakingHistory(userId: string): void;
    /**
     * Handle activation of a push-to-talk key or button.
     * @param event - The original keydown event
     */
    _onPTTStart(event: KeyboardEvent | MouseEvent): void;
    /**
     * Handle deactivation of a push-to-talk key or button.
     * @param event - The original keyup event
     */
    _onPTTEnd(event: KeyboardEvent | MouseEvent): void;
    /**
     * Render the audio/video streams to the CameraViews UI.
     * Assign each connected user to the correct video frame element.
     */
    onRender(): void;
    /**
     * Respond to changes which occur to AV Settings.
     * Changes are handled in descending order of impact.
     * @param changed - The object of changed AV settings
     */
    onSettingsChanged(changed: any): void;
}

/**
 * An AVClient implementation that uses WebRTC and the EasyRTC library.
 * @param master - The master orchestration instance
 * @param settings - The audio/video settings being used
 */
declare class EasyRTCClient extends AVClient {
    constructor(master: AVMaster, settings: AVSettings);
    /**
     * Store the name of the joined EasyRTC room
     */
    private _room: string | null;
    /**
     * A mapping of easyRtcId peer ids to Foundry User ids
     */
    private _usernameCache: any;
    /**
     * An array of easyRtcId peers that rejected our call. Avoid continually trying to call the same peer.
     */
    private _callRejections: object[];
    /**
     * Connect to the WebRTC server and configure ICE/TURN servers
     * @returns Was the server connected?
     */
    private _connectServer(): Promise<boolean>;
    /**
     * Setup the custom TURN relay to be used in subsequent calls if there is one configured
     * If configured, setup custom TURN configuration for future calls. Turn credentials are mandatory in WebRTC.
     */
    private _setupCustomTURN(): void;
    /**
     * Initialize a local media stream
     * Capture the local audio and video and returns the stream associated with them.
     *
     * If @temporary is false (default), then this will initialize the master stream, not the actual
     * streams being sent to individual users. However, if a master stream was already created, it
     * will automatically get closed and every individual streams derived from it that are being sent
     * to connected users will be removed from the calls.
     * Each established or subsequent calls will receive a copy of the created stream (A/V depending on user permissions)
     *
     * If @temporary is true then this only applies to a temporary stream and does not affect
     * the master stream or any streams in existing calls.
     * Note that this assumes only one temporary stream can be created at a time.
     * @param audioSrc - ID of the audio source to capture from or null to disable Audio
     * @param videoSrc - ID of the video source to capture from or null to disable Video
     * @param temporary - Whether to create a temporary stream or the master stream
     * @returns Returns the local stream or `null` if none could be created
     */
    _initializeLocal(audioSrc: string | null, videoSrc: string | null, temporary: boolean): Promise.MediaStream;
    /**
     * Create an open a local stream when initially connecting to the server.
     * This local stream becomes the "master" stream which tracks your own device inputs.
     * The master stream is cloned to provide a stream to every connected peer.
     */
    private _openLocalStream(): void;
    /**
     * Close the local stream
     */
    private _closeLocalStream(): void;
    /**
     * Define media constraints to control the resolution and devices used.
     * We need to set our own constraints so we can specify a min/max range of resolutions.
     */
    private _getStreamMediaConstraints(): any;
    /**
     * Call a peer and establish a connection with them
     * @param easyRtcId - The peer ID to call
     * @returns Returns false if no call was made or true if the call is successful.
     *                                raises an Exception in case of failure to establish the call.
     */
    private _performCall(easyRtcId: string): Promise<boolean>;
    /**
     * Create a MediaStream to be sent to a specific peer.
     * This stream should control whether outbound video and audio is transmitted.
     * Create the stream as a clone of the current master stream for configuration on a peer-to-peer basis.
     */
    private _createStreamForPeer(): void;
    /**
     * Transform the device info array from easyrtc into an object with {id: label} keys
     * @param list - The list of devices
     */
    private _deviceInfoToObject(list: object[]): void;
    /**
     * Obtain the EasyRTC user ID of a user based on their Foundry VTT user ID
     * @param userId - The ID of the user
     * @returns The EasyRtcId of the peer
     */
    _userIdToEasyRtcId(userId: string): string | null;
    /**
     * Get MediaStream instances for every connected peer in the room.
     * @returns An array of stream information for each peer
     */
    getConnectedStreams(): object[];
    /**
     * Handle a request to enable or disable the outbound audio feed for the current game user.
     * @param enable - Whether the outbound audio track should be enabled (true) or disabled (false)
     */
    toggleAudio(enable: boolean): void;
    /**
     * Set whether the outbound audio feed for the current game user is actively broadcasting.
     * This can only be true if audio is enabled, but may be false if using push-to-talk or voice activation modes.
     * @param broadcast - Whether outbound audio should be sent to connected peers or not?
     */
    toggleBroadcast(broadcast: boolean): void;
    /**
     * Handle a request to enable or disable the outbound video feed for the current game user.
     * @param enable - Whether the outbound audio track should be enabled (true) or disabled (false)
     */
    toggleVideo(enable: boolean): void;
    /**
     * Enable or disable the audio tracks in a stream
     *
     * Disabling a track represents what a typical user would consider muting it.
     * We use the term 'enable' here instead of 'mute' to match the MediaStreamTrack
     * field name and to avoid confusion with the 'muted' read-only field of the MediaStreamTrack
     * as well as the video element's `muted` field which only stops playing the audio.
     * Muting by definition stops rendering any of the data, while a disabled track in this case
     * is still rendering its data, but is simply generating disabled content (silence and black frames)
     * See https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled
     * @param stream - The stream to modify
     * @param enable - (optional) Whether to enable or disable the tracks
     */
    enableStreamAudio(stream: MediaStream, enable?: boolean): void;
    /**
     * Enable or disable the video tracks in a stream
     *
     * Disabling a track represents what a typical user would consider muting it. We use the term 'enable' here instead
     * of 'mute' to match the MediaStreamTrack field name and to avoid confusion with the 'muted' read-only field of the
     * MediaStreamTrack as well as the video element's `muted` field which only stops playing the audio.
     *
     * Muting by definition stops rendering any of the data, while a disabled track in this case is still rendering its
     * data, but is simply generating disabled content (silence and black frames).
     *
     * See https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled
     * @param stream - The stream to modify
     * @param enable - (optional) Whether to enable or disable the tracks
     */
    enableStreamVideo(stream: MediaStream, enable?: boolean): void;
    /**
     * Enables or disables media tracks
     * See https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/enabled
     * @param tracks - The tracks to enable/disable
     * @param enable - Whether to enable or disable the tracks
     */
    _enableMediaTracks(tracks: object[], enable: boolean): void;
    /**
     * Callback used to check if an incoming call should be accepted or not
     * @param easyRtcId - The peer ID of the caller
     * @param acceptor - Function to call with whether or not to accept the call and the media streams to use
     */
    private _answerIncomingCall(easyRtcId: string, acceptor: (...params: any[]) => any): void;
    /**
     * Called when the connection to the signaling server is lost (unintentionally).
     * This handles the case of when connectivity is interrupted non-deliberately.
     */
    private _onConnectionLost(): void;
    /**
     * Called when an error occurs
     */
    private _onError(): void;
    /**
     * Called whenever there is a change in the list of occupants in a room.
     * It can also be called if a peer's state changes, such as when a call is established or ended.
     * For each other peer in the room, record their user ID and establish a call with them.
     * Record the username associated with each peer.
     *
     * Important: We need to make sure that only user initiates a call, instead of both trying to call each other.
     * Resolve this by having the alphabetically greater ID call the other peer.
     * @param roomName - The room name where occupants have changed
     * @param otherPeople - An array of other peers in the room
     * @param myInfo - My own connection info
     */
    private _onRoomOccupantsChange(roomName: string, otherPeople: object[], myInfo: any): void;
    /**
     * Called when the connection with a peer has been established
     */
    private _onPeerOpen(): void;
    /**
     * Called when the connection with a peer has been lost and the ICE machine was unable to re-establish it.
     * In case of irrecoverable connection loss with the peer, hanging up the call will cause a roomOccupantListener
     * signal to be sent and we will automatically try to reconnect to the user.
     * First make sure that they are still in the room so we don't try to hangup with an easyRtcId that is invalid.
     */
    private _onPeerClosed(): void;
    /**
     * Called when a remote stream is added to an existing call
     */
    private _onPeerConnect(): void;
    /**
     * Called when a remote stream is removed from an existing call
     */
    private _onPeerDisconnect(): void;
    /**
     * Handle changes to A/V configuration settings.
     * @param changed - The settings which have changed
     */
    onSettingsChanged(changed: any): void;
    /**
     * One-time initialization actions that should be performed for this client implementation.
     * This will be called only once when the Game object is first set-up.
     */
    initialize(): Promise<void>;
    /**
     * Connect to any servers or services needed in order to provide audio/video functionality.
     * Any parameters needed in order to establish the connection should be drawn from the settings object.
     * This function should return a boolean for whether the connection attempt was successful.
     * @returns Was the connection attempt successful?
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from any servers or services which are used to provide audio/video functionality.
     * This function should return a boolean for whether a valid disconnection occurred.
     * @returns Did a disconnection occur?
     */
    disconnect(): Promise<boolean>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getAudioSinks(): Promise<{ string: string; }>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getAudioSources(): Promise<{ string: string; }>;
    /**
     * Provide an Object of available video sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     */
    getVideoSources(): Promise<{ string: string; }>;
    /**
     * Return an array of Foundry User IDs which are currently connected to A/V.
     * The current user should also be included as a connected user in addition to all peers.
     * @returns The connected User IDs
     */
    getConnectedUsers(): string[];
    /**
     * Provide a MediaStream instance for a given user ID
     * @param userId - The User id
     * @returns The MediaStream for the user, or null if the user does not have one
     */
    getMediaStreamForUser(userId: string): MediaStream | null;
    /**
     * Is outbound audio enabled for the current user?
     */
    isAudioEnabled(): boolean;
    /**
     * Is outbound video enabled for the current user?
     */
    isVideoEnabled(): boolean;
    /**
     * Set the Video Track for a given User ID to a provided VideoElement
     * @param userId - The User ID to set to the element
     * @param videoElement - The HTMLVideoElement to which the video should be set
     */
    setUserVideo(userId: string, videoElement: HTMLVideoElement): void;
}

/**
 * Runtime configuration settings for Foundry VTT which exposes a large number of variables which determine how
 * aspects of the software behaves.
 *
 * Unlike the CONST analog which is frozen and immutable, the CONFIG object may be updated during the course of a
 * session or modified by system and module developers to adjust how the application behaves.
 */
declare const CONFIG: any;

/**
 * This object records the major version number of each component feature of Foundry Virtual Tabletop.
 * This can be referenced by modules and systems to provide conditional logic for when different handling may be needed.
 * When a component feature receives a major new revision, the number of its feature version is incremented.
 */
declare const FEATURES: {
    [key: string]: number;
};

