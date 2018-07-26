
/**
 * @class VideoPlayer
 */
declare namespace ccui {
    class VideoPlayer  extends Widget {

        /**
         * @method getFileName
         * @return {string}
         */
        getFileName(): string;


        /**
         * @method getURL
         * @return {string}
         */
        getURL(): string;


        /**
         * @method play
         */
        play(): void;


        /**
         * @method setKeepAspectRatioEnabled
         * @param {boolean} enable
         */
        setKeepAspectRatioEnabled(enable: boolean): void;


        /**
         * @method currentTime
         * @return {number}
         */
        currentTime(): number;


        /**
         * @method stop
         */
        stop(): void;


        /**
         * @method setFullScreenEnabled
         * @param {boolean} fullscreen
         */
        setFullScreenEnabled(fullscreen: boolean): void;


        /**
         * @method setFileName
         * @param {string} videoPath
         */
        setFileName(videoPath: string): void;


        /**
         * @method setURL
         * @param {string} _videoURL
         */
        setURL(_videoURL: string): void;


        /**
         * @method isKeepAspectRatioEnabled
         * @return {boolean}
         */
        isKeepAspectRatioEnabled(): boolean;


        /**
         * @method onPlayEvent
         * @param {number} event
         */
        onPlayEvent(event: number): void;


        /**
         * @method isFullScreenEnabled
         * @return {boolean}
         */
        isFullScreenEnabled(): boolean;


        /**
         * @method addEventListener
         * @param {Function} callback
         */
        addEventListener(callback: Function): void;


        /**
         * @method duration
         * @return {number}
         */
        duration(): number;


        /**
         * @method isPlaying
         * @return {boolean}
         */
        isPlaying(): boolean;


        /**
         * @method seekTo
         * @param {number} sec
         */
        seekTo(sec: number): void;


        /**
         * @method create
         * @return {cc.experimental.ui.VideoPlayer}
         */
        static create(): cc.experimental.ui.VideoPlayer;


        /**
         * @method VideoPlayer
         * @constructor
         */
        constructor();


    }
}
