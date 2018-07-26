
/**
 * @class Scale9SpriteV2
 */
declare namespace cc {
    class Scale9SpriteV2  extends Node {

        /**
         * @method setTexture
        * @param {cc.Texture2D|string} texture
        * @return {boolean|boolean}
*/
        setTexture(textureFile: string): boolean|boolean;



        /**
         * @method getFillType
         * @return {creator.Scale9SpriteV2.FillType}
         */
        getFillType(): creator.Scale9SpriteV2.FillType;


        /**
         * @method isTrimmedContentSizeEnabled
         * @return {boolean}
         */
        isTrimmedContentSizeEnabled(): boolean;


        /**
         * @method getState
         * @return {creator.Scale9SpriteV2.State}
         */
        getState(): creator.Scale9SpriteV2.State;


        /**
         * @method setState
         * @param {creator.Scale9SpriteV2.State} state
         */
        setState(state: creator.Scale9SpriteV2.State): void;


        /**
         * @method setInsetBottom
         * @param {number} value
         */
        setInsetBottom(value: number): void;


        /**
         * @method setFillRange
         * @param {number} value
         */
        setFillRange(value: number): void;


        /**
         * @method getFillStart
         * @return {number}
         */
        getFillStart(): number;


        /**
         * @method getFillRange
         * @return {number}
         */
        getFillRange(): number;


        /**
         * @method setInsetTop
         * @param {number} value
         */
        setInsetTop(value: number): void;


        /**
         * @method setRenderingType
         * @param {creator.Scale9SpriteV2.RenderingType} type
         */
        setRenderingType(type: creator.Scale9SpriteV2.RenderingType): void;


        /**
         * @method setDistortionOffset
         * @param {cc.Vec2} v
         */
        setDistortionOffset(v: cc.Vec2): void;


        /**
         * @method setFillCenter
        * @param {number|cc.Vec2} x
        * @param {number} y
*/
        setFillCenter(x: number, y: number): void;



        /**
         * @method setSpriteFrame
        * @param {cc.SpriteFrame|string} spriteFrame
        * @return {boolean|boolean}
*/
        setSpriteFrame(sfName: string): boolean|boolean;



        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method initWithTexture
        * @param {string|cc.Texture2D} textureFile
        * @return {boolean|boolean}
*/
        initWithTexture(texture: cc.Texture2D): boolean|boolean;



        /**
         * @method getInsetLeft
         * @return {number}
         */
        getInsetLeft(): number;


        /**
         * @method getInsetBottom
         * @return {number}
         */
        getInsetBottom(): number;


        /**
         * @method setDistortionTiling
         * @param {cc.Vec2} v
         */
        setDistortionTiling(v: cc.Vec2): void;


        /**
         * @method getRenderingType
         * @return {creator.Scale9SpriteV2.RenderingType}
         */
        getRenderingType(): creator.Scale9SpriteV2.RenderingType;


        /**
         * @method setFillStart
         * @param {number} value
         */
        setFillStart(value: number): void;


        /**
         * @method getInsetRight
         * @return {number}
         */
        getInsetRight(): number;


        /**
         * @method setBlendFunc
        * @param {unsigned int|cc.BlendFunc} src
        * @param {unsigned int} dst
*/
        setBlendFunc(src: unsigned int, dst: unsigned int): void;



        /**
         * @method getFillCenter
         * @return {cc.Vec2}
         */
        getFillCenter(): cc.Vec2;


        /**
         * @method getInsetTop
         * @return {number}
         */
        getInsetTop(): number;


        /**
         * @method setInsetLeft
         * @param {number} value
         */
        setInsetLeft(value: number): void;


        /**
         * @method initWithSpriteFrame
        * @param {string|cc.SpriteFrame} sfName
        * @return {boolean|boolean}
*/
        initWithSpriteFrame(spriteFrame: cc.SpriteFrame): boolean|boolean;



        /**
         * @method setFillType
         * @param {creator.Scale9SpriteV2.FillType} value
         */
        setFillType(value: creator.Scale9SpriteV2.FillType): void;


        /**
         * @method setInsetRight
         * @param {number} value
         */
        setInsetRight(value: number): void;


        /**
         * @method enableTrimmedContentSize
         * @param {boolean} isTrimmed
         */
        enableTrimmedContentSize(isTrimmed: boolean): void;


        /**
         * @method Scale9SpriteV2
         * @constructor
         */
        constructor();


    }
}
