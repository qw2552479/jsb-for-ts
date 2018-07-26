
/**
 * @class EventAssetsManagerEx
 */
declare namespace cc {
    class EventAssetsManager  extends EventCustom {

        /**
         * @method getAssetsManagerEx
         * @return {cc.AssetsManagerEx}
         */
        getAssetsManagerEx(): cc.AssetsManagerEx;


        /**
         * @method getDownloadedFiles
         * @return {number}
         */
        getDownloadedFiles(): number;


        /**
         * @method getTotalFiles
         * @return {number}
         */
        getTotalFiles(): number;


        /**
         * @method getAssetId
         * @return {string}
         */
        getAssetId(): string;


        /**
         * @method getTotalBytes
         * @return {number}
         */
        getTotalBytes(): number;


        /**
         * @method getCURLECode
         * @return {number}
         */
        getCURLECode(): number;


        /**
         * @method getMessage
         * @return {string}
         */
        getMessage(): string;


        /**
         * @method getCURLMCode
         * @return {number}
         */
        getCURLMCode(): number;


        /**
         * @method getDownloadedBytes
         * @return {number}
         */
        getDownloadedBytes(): number;


        /**
         * @method getPercentByFile
         * @return {number}
         */
        getPercentByFile(): number;


        /**
         * @method getEventCode
         * @return {cc.EventAssetsManagerEx.EventCode}
         */
        getEventCode(): cc.EventAssetsManagerEx.EventCode;


        /**
         * @method getPercent
         * @return {number}
         */
        getPercent(): number;


        /**
         * @method isResuming
         * @return {boolean}
         */
        isResuming(): boolean;


        /**
         * @method EventAssetsManagerEx
         * @constructor
         * @param {string} eventName
         * @param {cc.AssetsManagerEx} manager
         * @param {cc.EventAssetsManagerEx.EventCode} code
         * @param {string} assetId
         * @param {string} message
         * @param {number} curle_code
         * @param {number} curlm_code
         */
        constructor(eventName: string, manager: cc.AssetsManagerEx, code: cc.EventAssetsManagerEx.EventCode, assetId: string, message: string, curle_code: number, curlm_code: number);


    }
}

/**
 * @class Manifest
 */
declare namespace cc {
    class Manifest {

        /**
         * @method getManifestRoot
         * @return {string}
         */
        getManifestRoot(): string;


        /**
         * @method setUpdating
         * @param {boolean} updating
         */
        setUpdating(updating: boolean): void;


        /**
         * @method getManifestFileUrl
         * @return {string}
         */
        getManifestFileUrl(): string;


        /**
         * @method isVersionLoaded
         * @return {boolean}
         */
        isVersionLoaded(): boolean;


        /**
         * @method parseFile
         * @param {string} manifestUrl
         */
        parseFile(manifestUrl: string): void;


        /**
         * @method isLoaded
         * @return {boolean}
         */
        isLoaded(): boolean;


        /**
         * @method getPackageUrl
         * @return {string}
         */
        getPackageUrl(): string;


        /**
         * @method isUpdating
         * @return {boolean}
         */
        isUpdating(): boolean;


        /**
         * @method getVersion
         * @return {string}
         */
        getVersion(): string;


        /**
         * @method parseJSONString
         * @param {string} content
         * @param {string} manifestRoot
         */
        parseJSONString(content: string, manifestRoot: string): void;


        /**
         * @method getVersionFileUrl
         * @return {string}
         */
        getVersionFileUrl(): string;


        /**
         * @method getSearchPaths
         * @return {any[]}
         */
        getSearchPaths(): any[];


        /**
         * @method Manifest
         * @constructor
        * @param {string|string} content
        * @param {string} manifestRoot
*/
        constructor(content: string, manifestRoot: string);



    }
}

/**
 * @class AssetsManagerEx
 */
declare namespace cc {
    class AssetsManager {

        /**
         * @method getDownloadedFiles
         * @return {number}
         */
        getDownloadedFiles(): number;


        /**
         * @method getState
         * @return {cc.AssetsManagerEx.State}
         */
        getState(): cc.AssetsManagerEx.State;


        /**
         * @method getMaxConcurrentTask
         * @return {number}
         */
        getMaxConcurrentTask(): number;


        /**
         * @method getTotalFiles
         * @return {number}
         */
        getTotalFiles(): number;


        /**
         * @method loadRemoteManifest
         * @param {cc.Manifest} remoteManifest
         * @return {boolean}
         */
        loadRemoteManifest(remoteManifest: cc.Manifest): boolean;


        /**
         * @method checkUpdate
         */
        checkUpdate(): void;


        /**
         * @method getTotalBytes
         * @return {number}
         */
        getTotalBytes(): number;


        /**
         * @method setVerifyCallback
         * @param {Function} callback
         */
        setVerifyCallback(callback: Function): void;


        /**
         * @method getStoragePath
         * @return {string}
         */
        getStoragePath(): string;


        /**
         * @method update
         */
        update(): void;


        /**
         * @method setVersionCompareHandle
         * @param {Function} handle
         */
        setVersionCompareHandle(handle: Function): void;


        /**
         * @method setMaxConcurrentTask
         * @param {number} max
         */
        setMaxConcurrentTask(max: number): void;


        /**
         * @method getDownloadedBytes
         * @return {number}
         */
        getDownloadedBytes(): number;


        /**
         * @method getLocalManifest
         * @return {cc.Manifest}
         */
        getLocalManifest(): cc.Manifest;


        /**
         * @method loadLocalManifest
        * @param {string|cc.Manifest} manifestUrl
        * @param {string} storagePath
        * @return {boolean|boolean}
*/
        loadLocalManifest(localManifest: cc.Manifest, storagePath: string): boolean|boolean;



        /**
         * @method getRemoteManifest
         * @return {cc.Manifest}
         */
        getRemoteManifest(): cc.Manifest;


        /**
         * @method prepareUpdate
         */
        prepareUpdate(): void;


        /**
         * @method downloadFailedAssets
         */
        downloadFailedAssets(): void;


        /**
         * @method isResuming
         * @return {boolean}
         */
        isResuming(): boolean;


        /**
         * @method create
         * @param {string} manifestUrl
         * @param {string} storagePath
         * @return {cc.AssetsManagerEx}
         */
        static create(manifestUrl: string, storagePath: string): cc.AssetsManagerEx;


        /**
         * @method AssetsManagerEx
         * @constructor
        * @param {string|string} manifestUrl
        * @param {string|string} storagePath
        * @param {Function} handle
*/
        constructor(manifestUrl: string, storagePath: string, handle: Function);



    }
}

/**
 * @class EventListenerAssetsManagerEx
 */
declare namespace cc {
    class EventListenerAssetsManager  extends EventListenerCustom {

        /**
         * @method init
         * @param {cc.AssetsManagerEx} AssetsManagerEx
         * @param {Function} callback
         * @return {boolean}
         */
        init(AssetsManagerEx: cc.AssetsManagerEx, callback: Function): boolean;


        /**
         * @method create
         * @param {cc.AssetsManagerEx} AssetsManagerEx
         * @param {Function} callback
         * @return {cc.EventListenerAssetsManagerEx}
         */
        static create(AssetsManagerEx: cc.AssetsManagerEx, callback: Function): cc.EventListenerAssetsManagerEx;


        /**
         * @method EventListenerAssetsManagerEx
         * @constructor
         */
        constructor();


    }
}
