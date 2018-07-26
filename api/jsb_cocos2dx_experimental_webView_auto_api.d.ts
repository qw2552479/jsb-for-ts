
/**
 * @class WebView
 */
declare namespace ccui {
    class WebView  extends Widget {

        /**
         * @method setOnShouldStartLoading
         * @param {Function} callback
         */
        setOnShouldStartLoading(callback: Function): void;


        /**
         * @method setOnDidFailLoading
         * @param {Function} callback
         */
        setOnDidFailLoading(callback: Function): void;


        /**
         * @method canGoBack
         * @return {boolean}
         */
        canGoBack(): boolean;


        /**
         * @method loadHTMLString
         * @param {string} string
         * @param {string} baseURL
         */
        loadHTMLString(string: string, baseURL: string): void;


        /**
         * @method goForward
         */
        goForward(): void;


        /**
         * @method goBack
         */
        goBack(): void;


        /**
         * @method setScalesPageToFit
         * @param {boolean} scalesPageToFit
         */
        setScalesPageToFit(scalesPageToFit: boolean): void;


        /**
         * @method getOnDidFailLoading
         * @return {Function}
         */
        getOnDidFailLoading(): Function;


        /**
         * @method loadFile
         * @param {string} fileName
         */
        loadFile(fileName: string): void;


        /**
         * @method loadURL
         * @param {string} url
         */
        loadURL(url: string): void;


        /**
         * @method setBounces
         * @param {boolean} bounce
         */
        setBounces(bounce: boolean): void;


        /**
         * @method evaluateJS
         * @param {string} js
         */
        evaluateJS(js: string): void;


        /**
         * @method setOnJSCallback
         * @param {Function} callback
         */
        setOnJSCallback(callback: Function): void;


        /**
         * @method getOnJSCallback
         * @return {Function}
         */
        getOnJSCallback(): Function;


        /**
         * @method canGoForward
         * @return {boolean}
         */
        canGoForward(): boolean;


        /**
         * @method getOnShouldStartLoading
         * @return {Function}
         */
        getOnShouldStartLoading(): Function;


        /**
         * @method stopLoading
         */
        stopLoading(): void;


        /**
         * @method reload
         */
        reload(): void;


        /**
         * @method loadData
         * @param {cc.Data} data
         * @param {string} MIMEType
         * @param {string} encoding
         * @param {string} baseURL
         */
        loadData(data: cc.Data, MIMEType: string, encoding: string, baseURL: string): void;


        /**
         * @method setJavascriptInterfaceScheme
         * @param {string} scheme
         */
        setJavascriptInterfaceScheme(scheme: string): void;


        /**
         * @method setOnDidFinishLoading
         * @param {Function} callback
         */
        setOnDidFinishLoading(callback: Function): void;


        /**
         * @method getOnDidFinishLoading
         * @return {Function}
         */
        getOnDidFinishLoading(): Function;


        /**
         * @method create
         * @return {cc.experimental.ui.WebView}
         */
        static create(): cc.experimental.ui.WebView;


        /**
         * @method WebView
         * @constructor
         */
        constructor();


    }
}
