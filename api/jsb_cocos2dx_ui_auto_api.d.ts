
/**
 * @class Widget
 */
declare namespace ccui {
    class Widget  extends ProtectedNode {

        /**
         * @method setSizePercent
         * @param {cc.Vec2} percent
         */
        setSizePercent(percent: cc.Vec2): void;


        /**
         * @method getCustomSize
         * @return {cc.Vec2}
         */
        getCustomSize(): cc.Vec2;


        /**
         * @method getLeftBoundary
         * @return {number}
         */
        getLeftBoundary(): number;


        /**
         * @method setFlippedX
         * @param {boolean} flippedX
         */
        setFlippedX(flippedX: boolean): void;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method getVirtualRenderer
         * @return {cc.Node}
         */
        getVirtualRenderer(): cc.Node;


        /**
         * @method setPropagateTouchEvents
         * @param {boolean} isPropagate
         */
        setPropagateTouchEvents(isPropagate: boolean): void;


        /**
         * @method isUnifySizeEnabled
         * @return {boolean}
         */
        isUnifySizeEnabled(): boolean;


        /**
         * @method getSizePercent
         * @return {cc.Vec2}
         */
        getSizePercent(): cc.Vec2;


        /**
         * @method setPositionPercent
         * @param {cc.Vec2} percent
         */
        setPositionPercent(percent: cc.Vec2): void;


        /**
         * @method setSwallowTouches
         * @param {boolean} swallow
         */
        setSwallowTouches(swallow: boolean): void;


        /**
         * @method getLayoutSize
         * @return {cc.Vec2}
         */
        getLayoutSize(): cc.Vec2;


        /**
         * @method setHighlighted
         * @param {boolean} highlight
         */
        setHighlighted(highlight: boolean): void;


        /**
         * @method setPositionType
         * @param {ccui.Widget.PositionType} type
         */
        setPositionType(type: ccui.Widget.PositionType): void;


        /**
         * @method isIgnoreContentAdaptWithSize
         * @return {boolean}
         */
        isIgnoreContentAdaptWithSize(): boolean;


        /**
         * @method getVirtualRendererSize
         * @return {cc.Vec2}
         */
        getVirtualRendererSize(): cc.Vec2;


        /**
         * @method isHighlighted
         * @return {boolean}
         */
        isHighlighted(): boolean;


        /**
         * @method setCallbackName
         * @param {string} callbackName
         */
        setCallbackName(callbackName: string): void;


        /**
         * @method addCCSEventListener
         * @param {Function} callback
         */
        addCCSEventListener(callback: Function): void;


        /**
         * @method getPositionType
         * @return {ccui.Widget.PositionType}
         */
        getPositionType(): ccui.Widget.PositionType;


        /**
         * @method getTopBoundary
         * @return {number}
         */
        getTopBoundary(): number;


        /**
         * @method ignoreContentAdaptWithSize
         * @param {boolean} ignore
         */
        ignoreContentAdaptWithSize(ignore: boolean): void;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method isFocused
         * @return {boolean}
         */
        isFocused(): boolean;


        /**
         * @method getTouchBeganPosition
         * @return {cc.Vec2}
         */
        getTouchBeganPosition(): cc.Vec2;


        /**
         * @method isTouchEnabled
         * @return {boolean}
         */
        isTouchEnabled(): boolean;


        /**
         * @method getCallbackName
         * @return {string}
         */
        getCallbackName(): string;


        /**
         * @method getActionTag
         * @return {number}
         */
        getActionTag(): number;


        /**
         * @method requestFocus
         */
        requestFocus(): void;


        /**
         * @method isFocusEnabled
         * @return {boolean}
         */
        isFocusEnabled(): boolean;


        /**
         * @method setFocused
         * @param {boolean} focus
         */
        setFocused(focus: boolean): void;


        /**
         * @method setActionTag
         * @param {number} tag
         */
        setActionTag(tag: number): void;


        /**
         * @method setTouchEnabled
         * @param {boolean} enabled
         */
        setTouchEnabled(enabled: boolean): void;


        /**
         * @method setFlippedY
         * @param {boolean} flippedY
         */
        setFlippedY(flippedY: boolean): void;


        /**
         * @method setEnabled
         * @param {boolean} enabled
         */
        setEnabled(enabled: boolean): void;


        /**
         * @method getRightBoundary
         * @return {number}
         */
        getRightBoundary(): number;


        /**
         * @method setBrightStyle
         * @param {ccui.Widget.BrightStyle} style
         */
        setBrightStyle(style: ccui.Widget.BrightStyle): void;


        /**
         * @method getWorldPosition
         * @return {cc.Vec2}
         */
        getWorldPosition(): cc.Vec2;


        /**
         * @method clone
         * @return {ccui.Widget}
         */
        clone(): ccui.Widget;


        /**
         * @method setFocusEnabled
         * @param {boolean} enable
         */
        setFocusEnabled(enable: boolean): void;


        /**
         * @method getBottomBoundary
         * @return {number}
         */
        getBottomBoundary(): number;


        /**
         * @method isBright
         * @return {boolean}
         */
        isBright(): boolean;


        /**
         * @method dispatchFocusEvent
         * @param {ccui.Widget} widgetLoseFocus
         * @param {ccui.Widget} widgetGetFocus
         */
        dispatchFocusEvent(widgetLoseFocus: ccui.Widget, widgetGetFocus: ccui.Widget): void;


        /**
         * @method setUnifySizeEnabled
         * @param {boolean} enable
         */
        setUnifySizeEnabled(enable: boolean): void;


        /**
         * @method isPropagateTouchEvents
         * @return {boolean}
         */
        isPropagateTouchEvents(): boolean;


        /**
         * @method hitTest
         * @param {cc.Vec2} pt
         * @return {boolean}
         */
        hitTest(pt: cc.Vec2): boolean;


        /**
         * @method updateSizeAndPosition
        * @param {cc.Vec2} parentSize
*/
        updateSizeAndPosition(parentSize: cc.Vec2): void;



        /**
         * @method onFocusChange
         * @param {ccui.Widget} widgetLostFocus
         * @param {ccui.Widget} widgetGetFocus
         */
        onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): void;


        /**
         * @method getTouchMovePosition
         * @return {cc.Vec2}
         */
        getTouchMovePosition(): cc.Vec2;


        /**
         * @method getSizeType
         * @return {ccui.Widget.SizeType}
         */
        getSizeType(): ccui.Widget.SizeType;


        /**
         * @method getCallbackType
         * @return {string}
         */
        getCallbackType(): string;


        /**
         * @method addTouchEventListener
         * @param {Function} callback
         */
        addTouchEventListener(callback: Function): void;


        /**
         * @method getTouchEndPosition
         * @return {cc.Vec2}
         */
        getTouchEndPosition(): cc.Vec2;


        /**
         * @method getPositionPercent
         * @return {cc.Vec2}
         */
        getPositionPercent(): cc.Vec2;


        /**
         * @method propagateTouchEvent
         * @param {ccui.Widget.TouchEventType} event
         * @param {ccui.Widget} sender
         * @param {cc.Touch} touch
         */
        propagateTouchEvent(event: ccui.Widget.TouchEventType, sender: ccui.Widget, touch: cc.Touch): void;


        /**
         * @method addClickEventListener
         * @param {Function} callback
         */
        addClickEventListener(callback: Function): void;


        /**
         * @method isFlippedX
         * @return {boolean}
         */
        isFlippedX(): boolean;


        /**
         * @method isFlippedY
         * @return {boolean}
         */
        isFlippedY(): boolean;


        /**
         * @method setSizeType
         * @param {ccui.Widget.SizeType} type
         */
        setSizeType(type: ccui.Widget.SizeType): void;


        /**
         * @method interceptTouchEvent
         * @param {ccui.Widget.TouchEventType} event
         * @param {ccui.Widget} sender
         * @param {cc.Touch} touch
         */
        interceptTouchEvent(event: ccui.Widget.TouchEventType, sender: ccui.Widget, touch: cc.Touch): void;


        /**
         * @method setBright
         * @param {boolean} bright
         */
        setBright(bright: boolean): void;


        /**
         * @method setCallbackType
         * @param {string} callbackType
         */
        setCallbackType(callbackType: string): void;


        /**
         * @method isSwallowTouches
         * @return {boolean}
         */
        isSwallowTouches(): boolean;


        /**
         * @method getCurrentFocusedWidget
         * @return {ccui.Widget}
         */
        static getCurrentFocusedWidget(): ccui.Widget;


        /**
         * @method create
         * @return {ccui.Widget}
         */
        static create(): ccui.Widget;


        /**
         * @method Widget
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Helper
 */
declare namespace ccui {
    class Helper {

        /**
         * @method getSubStringOfUTF8String
         * @param {string} str
         * @param {unsigned int} start
         * @param {unsigned int} length
         * @return {string}
         */
        static getSubStringOfUTF8String(str: string, start: unsigned int, length: unsigned int): string;


        /**
         * @method convertBoundingBoxToScreen
         * @param {cc.Node} node
         * @return {cc.Rect}
         */
        static convertBoundingBoxToScreen(node: cc.Node): cc.Rect;


        /**
         * @method changeLayoutSystemActiveState
         * @param {boolean} active
         */
        static changeLayoutSystemActiveState(active: boolean): void;


        /**
         * @method seekActionWidgetByActionTag
         * @param {ccui.Widget} root
         * @param {number} tag
         * @return {ccui.Widget}
         */
        static seekActionWidgetByActionTag(root: ccui.Widget, tag: number): ccui.Widget;


        /**
         * @method seekWidgetByName
         * @param {ccui.Widget} root
         * @param {string} name
         * @return {ccui.Widget}
         */
        static seekWidgetByName(root: ccui.Widget, name: string): ccui.Widget;


        /**
         * @method seekWidgetByTag
         * @param {ccui.Widget} root
         * @param {number} tag
         * @return {ccui.Widget}
         */
        static seekWidgetByTag(root: ccui.Widget, tag: number): ccui.Widget;


        /**
         * @method restrictCapInsetRect
         * @param {cc.Rect} capInsets
         * @param {cc.Vec2} textureSize
         * @return {cc.Rect}
         */
        static restrictCapInsetRect(capInsets: cc.Rect, textureSize: cc.Vec2): cc.Rect;


    }
}

/**
 * @class Scale9Sprite
 */
declare namespace ccui {
    class Scale9Sprite  extends Node {

        /**
         * @method disableCascadeColor
         */
        disableCascadeColor(): void;


        /**
         * @method updateWithSprite
        * @param {cc.Sprite|cc.Sprite} sprite
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean|boolean} rotated
        * @param {cc.Vec2|cc.Rect} offset
        * @param {cc.Vec2} originalSize
        * @param {cc.Rect} capInsets
        * @return {boolean|boolean}
*/
        updateWithSprite(sprite: cc.Sprite, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2, capInsets: cc.Rect): boolean|boolean;



        /**
         * @method isFlippedX
         * @return {boolean}
         */
        isFlippedX(): boolean;


        /**
         * @method setScale9Enabled
         * @param {boolean} enabled
         */
        setScale9Enabled(enabled: boolean): void;


        /**
         * @method setFlippedY
         * @param {boolean} flippedY
         */
        setFlippedY(flippedY: boolean): void;


        /**
         * @method setFlippedX
         * @param {boolean} flippedX
         */
        setFlippedX(flippedX: boolean): void;


        /**
         * @method resizableSpriteWithCapInsets
         * @param {cc.Rect} capInsets
         * @return {ccui.Scale9Sprite}
         */
        resizableSpriteWithCapInsets(capInsets: cc.Rect): ccui.Scale9Sprite;


        /**
         * @method disableCascadeOpacity
         */
        disableCascadeOpacity(): void;


        /**
         * @method getState
         * @return {ccui.Scale9Sprite.State}
         */
        getState(): ccui.Scale9Sprite.State;


        /**
         * @method setState
         * @param {ccui.Scale9Sprite.State} state
         */
        setState(state: ccui.Scale9Sprite.State): void;


        /**
         * @method setInsetBottom
         * @param {number} bottomInset
         */
        setInsetBottom(bottomInset: number): void;


        /**
         * @method initWithSpriteFrameName
        * @param {string|string} spriteFrameName
        * @param {cc.Rect} capInsets
        * @return {boolean|boolean}
*/
        initWithSpriteFrameName(spriteFrameName: string, capInsets: cc.Rect): boolean|boolean;



        /**
         * @method getSprite
         * @return {cc.Sprite}
         */
        getSprite(): cc.Sprite;


        /**
         * @method setInsetTop
         * @param {number} topInset
         */
        setInsetTop(topInset: number): void;


        /**
         * @method setRenderingType
         * @param {ccui.Scale9Sprite.RenderingType} type
         */
        setRenderingType(type: ccui.Scale9Sprite.RenderingType): void;


        /**
         * @method init
        * @param {cc.Sprite|cc.Sprite|cc.Sprite} sprite
        * @param {cc.Rect|cc.Rect|cc.Rect} rect
        * @param {cc.Rect|boolean|boolean} capInsets
        * @param {cc.Rect|cc.Vec2} capInsets
        * @param {cc.Vec2} originalSize
        * @param {cc.Rect} capInsets
        * @return {boolean|boolean|boolean}
*/
        init(sprite: cc.Sprite, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2, capInsets: cc.Rect): boolean|boolean|boolean;



        /**
         * @method setPreferredSize
         * @param {cc.Vec2} size
         */
        setPreferredSize(size: cc.Vec2): void;


        /**
         * @method setSpriteFrame
         * @param {cc.SpriteFrame} spriteFrame
         * @param {cc.Rect} capInsets
         */
        setSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method getInsetBottom
         * @return {number}
         */
        getInsetBottom(): number;


        /**
         * @method getCapInsets
         * @return {cc.Rect}
         */
        getCapInsets(): cc.Rect;


        /**
         * @method isScale9Enabled
         * @return {boolean}
         */
        isScale9Enabled(): boolean;


        /**
         * @method resetRender
         */
        resetRender(): void;


        /**
         * @method getRenderingType
         * @return {ccui.Scale9Sprite.RenderingType}
         */
        getRenderingType(): ccui.Scale9Sprite.RenderingType;


        /**
         * @method getInsetRight
         * @return {number}
         */
        getInsetRight(): number;


        /**
         * @method getOriginalSize
         * @return {cc.Vec2}
         */
        getOriginalSize(): cc.Vec2;


        /**
         * @method initWithFile
        * @param {string|string|cc.Rect|string} file
        * @param {cc.Rect|cc.Rect|string} rect
        * @param {cc.Rect} capInsets
        * @return {boolean|boolean|boolean|boolean}
*/
        initWithFile(file: string, rect: cc.Rect, capInsets: cc.Rect): boolean|boolean|boolean|boolean;



        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method getInsetTop
         * @return {number}
         */
        getInsetTop(): number;


        /**
         * @method setInsetLeft
         * @param {number} leftInset
         */
        setInsetLeft(leftInset: number): void;


        /**
         * @method initWithSpriteFrame
        * @param {cc.SpriteFrame|cc.SpriteFrame} spriteFrame
        * @param {cc.Rect} capInsets
        * @return {boolean|boolean}
*/
        initWithSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect): boolean|boolean;



        /**
         * @method getPreferredSize
         * @return {cc.Vec2}
         */
        getPreferredSize(): cc.Vec2;


        /**
         * @method setCapInsets
         * @param {cc.Rect} rect
         */
        setCapInsets(rect: cc.Rect): void;


        /**
         * @method isFlippedY
         * @return {boolean}
         */
        isFlippedY(): boolean;


        /**
         * @method getInsetLeft
         * @return {number}
         */
        getInsetLeft(): number;


        /**
         * @method setInsetRight
         * @param {number} rightInset
         */
        setInsetRight(rightInset: number): void;


        /**
         * @method create
        * @param {string|cc.Rect|string|string} file
        * @param {cc.Rect|string|cc.Rect} rect
        * @param {cc.Rect} capInsets
        * @return {ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite}
*/
        create(file: string, rect: cc.Rect, capInsets: cc.Rect): ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite|ccui.Scale9Sprite;



        /**
         * @method createWithSpriteFrameName
        * @param {string|string} spriteFrameName
        * @param {cc.Rect} capInsets
        * @return {ccui.Scale9Sprite|ccui.Scale9Sprite}
*/
        createWithSpriteFrameName(spriteFrameName: string, capInsets: cc.Rect): ccui.Scale9Sprite|ccui.Scale9Sprite;



        /**
         * @method createWithSpriteFrame
        * @param {cc.SpriteFrame|cc.SpriteFrame} spriteFrame
        * @param {cc.Rect} capInsets
        * @return {ccui.Scale9Sprite|ccui.Scale9Sprite}
*/
        createWithSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.Rect): ccui.Scale9Sprite|ccui.Scale9Sprite;



        /**
         * @method Scale9Sprite
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EditBox
 */
declare namespace ccui {
    class EditBox  extends Widget {

        /**
         * @method getText
         * @return {string}
         */
        getText(): string;


        /**
         * @method setFontSize
         * @param {number} fontSize
         */
        setFontSize(fontSize: number): void;


        /**
         * @method getBackgroundSprite
         * @return {ccui.Scale9Sprite}
         */
        getBackgroundSprite(): ccui.Scale9Sprite;


        /**
         * @method setPlaceholderFontName
         * @param {string} pFontName
         */
        setPlaceholderFontName(pFontName: string): void;


        /**
         * @method getPlaceHolder
         * @return {string}
         */
        getPlaceHolder(): string;


        /**
         * @method setFontName
         * @param {string} pFontName
         */
        setFontName(pFontName: string): void;


        /**
         * @method setText
         * @param {string} pText
         */
        setText(pText: string): void;


        /**
         * @method setPlaceholderFontSize
         * @param {number} fontSize
         */
        setPlaceholderFontSize(fontSize: number): void;


        /**
         * @method setInputMode
         * @param {ccui.EditBox.InputMode} inputMode
         */
        setInputMode(inputMode: ccui.EditBox.InputMode): void;


        /**
         * @method setPlaceholderFontColor
        * @param {cc.Color|cc.Color} color
*/
        setPlaceholderFontColor(color: cc.Color): void;



        /**
         * @method setFontColor
        * @param {cc.Color|cc.Color} color
*/
        setFontColor(color: cc.Color): void;



        /**
         * @method setPlaceholderFont
         * @param {string} pFontName
         * @param {number} fontSize
         */
        setPlaceholderFont(pFontName: string, fontSize: number): void;


        /**
         * @method initWithSizeAndBackgroundSprite
        * @param {cc.Vec2|cc.Vec2} size
        * @param {ccui.Scale9Sprite|string} normal9SpriteBg
        * @param {ccui.Widget.TextureResType} texType
        * @return {boolean|boolean}
*/
        initWithSizeAndBackgroundSprite(size: cc.Vec2, normal9SpriteBg: string, texType: ccui.Widget.TextureResType): boolean|boolean;



        /**
         * @method setPlaceHolder
         * @param {string} pText
         */
        setPlaceHolder(pText: string): void;


        /**
         * @method setReturnType
         * @param {ccui.EditBox.KeyboardReturnType} returnType
         */
        setReturnType(returnType: ccui.EditBox.KeyboardReturnType): void;


        /**
         * @method setInputFlag
         * @param {ccui.EditBox.InputFlag} inputFlag
         */
        setInputFlag(inputFlag: ccui.EditBox.InputFlag): void;


        /**
         * @method getMaxLength
         * @return {number}
         */
        getMaxLength(): number;


        /**
         * @method setMaxLength
         * @param {number} maxLength
         */
        setMaxLength(maxLength: number): void;


        /**
         * @method setFont
         * @param {string} pFontName
         * @param {number} fontSize
         */
        setFont(pFontName: string, fontSize: number): void;


        /**
         * @method create
        * @param {cc.Vec2|cc.Vec2} size
        * @param {string|ccui.Scale9Sprite} normal9SpriteBg
        * @param {ccui.Widget.TextureResType|ccui.Scale9Sprite} texType
        * @param {ccui.Scale9Sprite} disabledSprite
        * @return {ccui.EditBox|ccui.EditBox}
*/
        create(size: cc.Vec2, normalSprite: ccui.Scale9Sprite, pressedSprite: ccui.Scale9Sprite, disabledSprite: ccui.Scale9Sprite): ccui.EditBox|ccui.EditBox;



        /**
         * @method EditBox
         * @constructor
         */
        constructor();


    }
}
