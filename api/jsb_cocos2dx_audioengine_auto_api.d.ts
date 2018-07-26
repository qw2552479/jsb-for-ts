
/**
 * @class AudioProfile
 */
declare namespace jsb {
    class AudioProfile {

        /**
         * @method AudioProfile
         * @constructor
         */
        constructor();


    }
}

/**
 * @class AudioEngine
 */
declare namespace jsb {
    class AudioEngine {

        /**
         * @method lazyInit
         * @return {boolean}
         */
        static lazyInit(): boolean;


        /**
         * @method setCurrentTime
         * @param {number} audioID
         * @param {number} sec
         * @return {boolean}
         */
        static setCurrentTime(audioID: number, sec: number): boolean;


        /**
         * @method getVolume
         * @param {number} audioID
         * @return {number}
         */
        static getVolume(audioID: number): number;


        /**
         * @method uncache
         * @param {string} filePath
         */
        static uncache(filePath: string): void;


        /**
         * @method resumeAll
         */
        static resumeAll(): void;


        /**
         * @method stopAll
         */
        static stopAll(): void;


        /**
         * @method pause
         * @param {number} audioID
         */
        static pause(audioID: number): void;


        /**
         * @method end
         */
        static end(): void;


        /**
         * @method getMaxAudioInstance
         * @return {number}
         */
        static getMaxAudioInstance(): number;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        static isEnabled(): boolean;


        /**
         * @method getCurrentTime
         * @param {number} audioID
         * @return {number}
         */
        static getCurrentTime(audioID: number): number;


        /**
         * @method setMaxAudioInstance
         * @param {number} maxInstances
         * @return {boolean}
         */
        static setMaxAudioInstance(maxInstances: number): boolean;


        /**
         * @method isLoop
         * @param {number} audioID
         * @return {boolean}
         */
        static isLoop(audioID: number): boolean;


        /**
         * @method pauseAll
         */
        static pauseAll(): void;


        /**
         * @method uncacheAll
         */
        static uncacheAll(): void;


        /**
         * @method setVolume
         * @param {number} audioID
         * @param {number} volume
         */
        static setVolume(audioID: number, volume: number): void;


        /**
         * @method preload
        * @param {string|string} filePath
        * @param {Function} callback
*/
        preload(filePath: string, callback: Function): void;



        /**
         * @method setEnabled
         * @param {boolean} isEnabled
         */
        static setEnabled(isEnabled: boolean): void;


        /**
         * @method play2d
         * @param {string} filePath
         * @param {boolean} loop
         * @param {number} volume
         * @param {cc.experimental.AudioProfile} profile
         * @return {number}
         */
        static play2d(filePath: string, loop: boolean, volume: number, profile: cc.experimental.AudioProfile): number;


        /**
         * @method getState
         * @param {number} audioID
         * @return {cc.experimental.AudioEngine.AudioState}
         */
        static getState(audioID: number): cc.experimental.AudioEngine.AudioState;


        /**
         * @method resume
         * @param {number} audioID
         */
        static resume(audioID: number): void;


        /**
         * @method stop
         * @param {number} audioID
         */
        static stop(audioID: number): void;


        /**
         * @method getDuration
         * @param {number} audioID
         * @return {number}
         */
        static getDuration(audioID: number): number;


        /**
         * @method setLoop
         * @param {number} audioID
         * @param {boolean} loop
         */
        static setLoop(audioID: number, loop: boolean): void;


        /**
         * @method getDefaultProfile
         * @return {cc.experimental.AudioProfile}
         */
        static getDefaultProfile(): cc.experimental.AudioProfile;


        /**
         * @method setFinishCallback
         * @param {number} audioID
         * @param {Function} callback
         */
        static setFinishCallback(audioID: number, callback: Function): void;


        /**
         * @method getProfile
        * @param {string|number} profileName
        * @return {cc.experimental.AudioProfile|cc.experimental.AudioProfile}
*/
        getProfile(audioID: number): cc.experimental.AudioProfile|cc.experimental.AudioProfile;



        /**
         * @method getPlayingAudioCount
         * @return {number}
         */
        static getPlayingAudioCount(): number;


    }
}
