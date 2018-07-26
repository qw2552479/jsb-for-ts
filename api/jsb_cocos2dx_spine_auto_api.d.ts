
/**
 * @class SkeletonRenderer
 */
declare namespace sp {
    class Skeleton  extends Node {

        /**
         * @method setTimeScale
         * @param {number} scale
         */
        setTimeScale(scale: number): void;


        /**
         * @method getDebugSlotsEnabled
         * @return {boolean}
         */
        getDebugSlotsEnabled(): boolean;


        /**
         * @method setAttachment
        * @param {string|string} slotName
        * @param {string|string} attachmentName
        * @return {boolean|boolean}
*/
        setAttachment(slotName: string, attachmentName: string): boolean|boolean;



        /**
         * @method setBonesToSetupPose
         */
        setBonesToSetupPose(): void;


        /**
         * @method setDebugSlotsEnabled
         * @param {boolean} enabled
         */
        setDebugSlotsEnabled(enabled: boolean): void;


        /**
         * @method initWithJsonFile
        * @param {string|string} skeletonDataFile
        * @param {string|spAtlas} atlasFile
        * @param {number|number} scale
*/
        initWithJsonFile(skeletonDataFile: string, atlas: spAtlas, scale: number): void;



        /**
         * @method setSlotsToSetupPose
         */
        setSlotsToSetupPose(): void;


        /**
         * @method initWithBinaryFile
        * @param {string|string} skeletonDataFile
        * @param {string|spAtlas} atlasFile
        * @param {number|number} scale
*/
        initWithBinaryFile(skeletonDataFile: string, atlas: spAtlas, scale: number): void;



        /**
         * @method setToSetupPose
         */
        setToSetupPose(): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method updateWorldTransform
         */
        updateWorldTransform(): void;


        /**
         * @method getAttachment
         * @param {string} slotName
         * @param {string} attachmentName
         * @return {spAttachment}
         */
        getAttachment(slotName: string, attachmentName: string): spAttachment;


        /**
         * @method initialize
         */
        initialize(): void;


        /**
         * @method setDebugBonesEnabled
         * @param {boolean} enabled
         */
        setDebugBonesEnabled(enabled: boolean): void;


        /**
         * @method getDebugBonesEnabled
         * @return {boolean}
         */
        getDebugBonesEnabled(): boolean;


        /**
         * @method getTimeScale
         * @return {number}
         */
        getTimeScale(): number;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method setSkin
        * @param {string|string} skinName
        * @return {boolean|boolean}
*/
        setSkin(skinName: string): boolean|boolean;



        /**
         * @method findSlot
         * @param {string} slotName
         * @return {spSlot}
         */
        findSlot(slotName: string): spSlot;


        /**
         * @method getSkeleton
         * @return {spSkeleton}
         */
        getSkeleton(): spSkeleton;


        /**
         * @method findBone
         * @param {string} boneName
         * @return {spBone}
         */
        findBone(boneName: string): spBone;


        /**
         * @method drawDebug
         * @param {cc.Renderer} renderer
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} transformFlags
         */
        drawDebug(renderer: cc.Renderer, transform: cc.AffineTransform, transformFlags: unsigned int): void;


        /**
         * @method createWithFile
        * @param {string|string} skeletonDataFile
        * @param {spAtlas|string} atlas
        * @param {number|number} scale
        * @return {sp.SkeletonRenderer|sp.SkeletonRenderer|sp.SkeletonRenderer}
*/
        createWithFile(skeletonDataFile: string, atlasFile: string, scale: number): sp.SkeletonRenderer|sp.SkeletonRenderer|sp.SkeletonRenderer;



        /**
         * @method SkeletonRenderer
         * @constructor
        * @param {spSkeletonData|string|string} skeletonData
        * @param {boolean|spAtlas|string} ownsSkeletonData
        * @param {number|number} scale
*/
        constructor(skeletonDataFile: string, atlasFile: string, scale: number);



    }
}

/**
 * @class SkeletonAnimation
 */
declare namespace sp {
    class SkeletonAnimation  extends SkeletonRenderer {

        /**
         * @method setAnimation
         * @param {number} trackIndex
         * @param {string} name
         * @param {boolean} loop
         * @return {spTrackEntry}
         */
        setAnimation(trackIndex: number, name: string, loop: boolean): spTrackEntry;


        /**
         * @method findAnimation
         * @param {string} name
         * @return {spAnimation}
         */
        findAnimation(name: string): spAnimation;


        /**
         * @method setMix
         * @param {string} fromAnimation
         * @param {string} toAnimation
         * @param {number} duration
         */
        setMix(fromAnimation: string, toAnimation: string, duration: number): void;


        /**
         * @method setDisposeListener
         * @param {Function} listener
         */
        setDisposeListener(listener: Function): void;


        /**
         * @method setAnimationStateData
         * @param {spAnimationStateData} stateData
         */
        setAnimationStateData(stateData: spAnimationStateData): void;


        /**
         * @method setEndListener
         * @param {Function} listener
         */
        setEndListener(listener: Function): void;


        /**
         * @method getState
         * @return {spAnimationState}
         */
        getState(): spAnimationState;


        /**
         * @method setCompleteListener
         * @param {Function} listener
         */
        setCompleteListener(listener: Function): void;


        /**
         * @method getCurrent
         * @return {spTrackEntry}
         */
        getCurrent(): spTrackEntry;


        /**
         * @method setEventListener
         * @param {Function} listener
         */
        setEventListener(listener: Function): void;


        /**
         * @method clearTrack
         */
        clearTrack(): void;


        /**
         * @method setInterruptListener
         * @param {Function} listener
         */
        setInterruptListener(listener: Function): void;


        /**
         * @method addAnimation
         * @param {number} trackIndex
         * @param {string} name
         * @param {boolean} loop
         * @param {number} delay
         * @return {spTrackEntry}
         */
        addAnimation(trackIndex: number, name: string, loop: boolean, delay: number): spTrackEntry;


        /**
         * @method clearTracks
         */
        clearTracks(): void;


        /**
         * @method setStartListener
         * @param {Function} listener
         */
        setStartListener(listener: Function): void;


        /**
         * @method createWithBinaryFile
        * @param {string|string} skeletonBinaryFile
        * @param {string|spAtlas} atlasFile
        * @param {number|number} scale
        * @return {sp.SkeletonAnimation|sp.SkeletonAnimation}
*/
        createWithBinaryFile(skeletonBinaryFile: string, atlas: spAtlas, scale: number): sp.SkeletonAnimation|sp.SkeletonAnimation;



        /**
         * @method create
         * @return {sp.SkeletonAnimation}
         */
        static create(): sp.SkeletonAnimation;


        /**
         * @method createWithJsonFile
        * @param {string|string} skeletonJsonFile
        * @param {string|spAtlas} atlasFile
        * @param {number|number} scale
        * @return {sp.SkeletonAnimation|sp.SkeletonAnimation}
*/
        createWithJsonFile(skeletonJsonFile: string, atlas: spAtlas, scale: number): sp.SkeletonAnimation|sp.SkeletonAnimation;



        /**
         * @method SkeletonAnimation
         * @constructor
        * @param {spSkeletonData|string|string} skeletonData
        * @param {boolean|spAtlas|string} ownsSkeletonData
        * @param {number|number} scale
*/
        constructor(skeletonDataFile: string, atlasFile: string, scale: number);



    }
}
