
/**
 * @class Downloader
 */
declare namespace jsb {
    class Downloader {

        /**
         * @method setOnTaskError
         * @param {Function} callback
         */
        setOnTaskError(callback: Function): void;


        /**
         * @method setOnTaskProgress
         * @param {Function} callback
         */
        setOnTaskProgress(callback: Function): void;


        /**
         * @method createDownloadFileTask
         * @param {string} srcUrl
         * @param {string} storagePath
         * @param {string} identifier
         * @return {std.shared_ptr<cc.network.DownloadTask>}
         */
        createDownloadFileTask(srcUrl: string, storagePath: string, identifier: string): std.shared_ptr<cc.network.DownloadTask>;


        /**
         * @method setOnFileTaskSuccess
         * @param {Function} callback
         */
        setOnFileTaskSuccess(callback: Function): void;


        /**
         * @method Downloader
         * @constructor
        * @param {cc.network.DownloaderHints} hints
*/
        constructor(hints: cc.network.DownloaderHints);



    }
}
