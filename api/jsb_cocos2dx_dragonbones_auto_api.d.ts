
/**
 * @class BaseObject
 */
declare namespace dragonBones {
    class BaseObject {

        /**
         * @method getClassTypeIndex
         * @return {unsigned int}
         */
        getClassTypeIndex(): unsigned int;


        /**
         * @method returnToPool
         */
        returnToPool(): void;


        /**
         * @method clearPool
         * @param {unsigned int} classTypeIndex
         */
        static clearPool(classTypeIndex: unsigned int): void;


        /**
         * @method setMaxCount
         * @param {unsigned int} classTypeIndex
         * @param {unsigned int} maxCount
         */
        static setMaxCount(classTypeIndex: unsigned int, maxCount: unsigned int): void;


    }
}

/**
 * @class Matrix
 */
declare namespace dragonBones {
    class Matrix {

    }
}

/**
 * @class Transform
 */
declare namespace dragonBones {
    class Transform {

        /**
         * @method getRotation
         * @return {number}
         */
        getRotation(): number;


        /**
         * @method setRotation
         * @param {number} value
         */
        setRotation(value: number): void;


        /**
         * @method normalizeRadian
         * @param {number} value
         * @return {number}
         */
        static normalizeRadian(value: number): number;


    }
}

/**
 * @class TextureData
 */
declare namespace dragonBones {
    class TextureData  extends BaseObject {

    }
}

/**
 * @class TextureAtlasData
 */
declare namespace dragonBones {
    class TextureAtlasData  extends BaseObject {

        /**
         * @method addTexture
         * @param {dragonBones.TextureData} value
         */
        addTexture(value: dragonBones.TextureData): void;


        /**
         * @method generateTexture
         * @return {dragonBones.TextureData}
         */
        generateTexture(): dragonBones.TextureData;


        /**
         * @method getTexture
         * @param {string} texName
         * @return {dragonBones.TextureData}
         */
        getTexture(texName: string): dragonBones.TextureData;


    }
}

/**
 * @class AnimationData
 */
declare namespace dragonBones {
    class AnimationData {

        /**
         * @method getClassTypeIndex
         * @return {unsigned int}
         */
        getClassTypeIndex(): unsigned int;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class BoneData
 */
declare namespace dragonBones {
    class BoneData  extends BaseObject {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class SlotData
 */
declare namespace dragonBones {
    class SlotData  extends BaseObject {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class SkinData
 */
declare namespace dragonBones {
    class SkinData  extends BaseObject {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class ArmatureData
 */
declare namespace dragonBones {
    class ArmatureData  extends BaseObject {

        /**
         * @method getBone
         * @param {string} theName
         * @return {dragonBones.BoneData}
         */
        getBone(theName: string): dragonBones.BoneData;


        /**
         * @method getAnimation
         * @param {string} theName
         * @return {dragonBones.AnimationData}
         */
        getAnimation(theName: string): dragonBones.AnimationData;


        /**
         * @method getSlot
         * @param {string} theName
         * @return {dragonBones.SlotData}
         */
        getSlot(theName: string): dragonBones.SlotData;


        /**
         * @method getSkin
         * @param {string} theName
         * @return {dragonBones.SkinData}
         */
        getSkin(theName: string): dragonBones.SkinData;


        /**
         * @method getDefaultSkin
         * @return {dragonBones.SkinData}
         */
        getDefaultSkin(): dragonBones.SkinData;


        /**
         * @method getDefaultAnimation
         * @return {dragonBones.AnimationData}
         */
        getDefaultAnimation(): dragonBones.AnimationData;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class DragonBonesData
 */
declare namespace dragonBones {
    class DragonBonesData  extends BaseObject {

        /**
         * @method getArmatureNames
         * @return {any[]}
         */
        getArmatureNames(): any[];


        /**
         * @method getArmature
         * @param {string} theName
         * @return {dragonBones.ArmatureData}
         */
        getArmature(theName: string): dragonBones.ArmatureData;


        /**
         * @method addArmature
         * @param {dragonBones.ArmatureData} value
         */
        addArmature(value: dragonBones.ArmatureData): void;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class EventObject
 */
declare namespace dragonBones {
    class EventObject  extends BaseObject {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class Armature
 */
declare namespace dragonBones {
    class Armature  extends BaseObject {

        /**
         * @method getSlot
         * @param {string} name
         * @return {dragonBones.Slot}
         */
        getSlot(name: string): dragonBones.Slot;


        /**
         * @method _bufferAction
         * @param {dragonBones.ActionData} value
         */
        _bufferAction(value: dragonBones.ActionData): void;


        /**
         * @method getCacheFrameRate
         * @return {unsigned int}
         */
        getCacheFrameRate(): unsigned int;


        /**
         * @method getName
         * @return {string}
         */
        getName(): string;


        /**
         * @method dispose
         */
        dispose(): void;


        /**
         * @method addSlot
         * @param {dragonBones.Slot} value
         * @param {string} boneName
         */
        addSlot(value: dragonBones.Slot, boneName: string): void;


        /**
         * @method invalidUpdate
         */
        invalidUpdate(): void;


        /**
         * @method getBoneByDisplay
         * @param {void} display
         * @return {dragonBones.Bone}
         */
        getBoneByDisplay(display: void): dragonBones.Bone;


        /**
         * @method setCacheFrameRate
         * @param {unsigned int} value
         */
        setCacheFrameRate(value: unsigned int): void;


        /**
         * @method removeSlot
         * @param {dragonBones.Slot} value
         */
        removeSlot(value: dragonBones.Slot): void;


        /**
         * @method addBone
         * @param {dragonBones.Bone} value
         * @param {string} parentName
         */
        addBone(value: dragonBones.Bone, parentName: string): void;


        /**
         * @method advanceTime
         * @param {number} passedTime
         */
        advanceTime(passedTime: number): void;


        /**
         * @method getBone
         * @param {string} name
         * @return {dragonBones.Bone}
         */
        getBone(name: string): dragonBones.Bone;


        /**
         * @method getParent
         * @return {dragonBones.Slot}
         */
        getParent(): dragonBones.Slot;


        /**
         * @method getSlotByDisplay
         * @param {void} display
         * @return {dragonBones.Slot}
         */
        getSlotByDisplay(display: void): dragonBones.Slot;


        /**
         * @method removeBone
         * @param {dragonBones.Bone} value
         */
        removeBone(value: dragonBones.Bone): void;


        /**
         * @method replaceTexture
         * @param {void} texture
         */
        replaceTexture(texture: void): void;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class Animation
 */
declare namespace dragonBones {
    class Animation  extends BaseObject {

        /**
         * @method reset
         */
        reset(): void;


        /**
         * @method play
         * @return {dragonBones.AnimationState}
         */
        play(): dragonBones.AnimationState;


        /**
         * @method getLastAnimationState
         * @return {dragonBones.AnimationState}
         */
        getLastAnimationState(): dragonBones.AnimationState;


        /**
         * @method stop
         * @param {string} animationName
         */
        stop(animationName: string): void;


        /**
         * @method hasAnimation
         * @param {string} animationName
         * @return {boolean}
         */
        hasAnimation(animationName: string): boolean;


        /**
         * @method gotoAndStopByProgress
         * @param {string} animationName
         * @param {number} progress
         * @return {dragonBones.AnimationState}
         */
        gotoAndStopByProgress(animationName: string, progress: number): dragonBones.AnimationState;


        /**
         * @method gotoAndStopByTime
         * @param {string} animationName
         * @param {number} time
         * @return {dragonBones.AnimationState}
         */
        gotoAndStopByTime(animationName: string, time: number): dragonBones.AnimationState;


        /**
         * @method getAnimationNames
         * @return {any[]}
         */
        getAnimationNames(): any[];


        /**
         * @method gotoAndPlayByTime
         * @param {string} animationName
         * @param {number} time
         * @param {number} playTimes
         * @return {dragonBones.AnimationState}
         */
        gotoAndPlayByTime(animationName: string, time: number, playTimes: number): dragonBones.AnimationState;


        /**
         * @method isCompleted
         * @return {boolean}
         */
        isCompleted(): boolean;


        /**
         * @method fadeIn
         * @param {string} animationName
         * @param {number} fadeInTime
         * @param {number} playTimes
         * @param {number} layer
         * @param {string} group
         * @param {dragonBones.AnimationFadeOutMode} fadeOutMode
         * @param {boolean} additiveBlending
         * @param {boolean} displayControl
         * @param {boolean} pauseFadeOut
         * @param {boolean} pauseFadeIn
         * @return {dragonBones.AnimationState}
         */
        fadeIn(animationName: string, fadeInTime: number, playTimes: number, layer: number, group: string, fadeOutMode: dragonBones.AnimationFadeOutMode, additiveBlending: boolean, displayControl: boolean, pauseFadeOut: boolean, pauseFadeIn: boolean): dragonBones.AnimationState;


        /**
         * @method gotoAndPlayByFrame
         * @param {string} animationName
         * @param {unsigned int} frame
         * @param {number} playTimes
         * @return {dragonBones.AnimationState}
         */
        gotoAndPlayByFrame(animationName: string, frame: unsigned int, playTimes: number): dragonBones.AnimationState;


        /**
         * @method getLastAnimationName
         * @return {string}
         */
        getLastAnimationName(): string;


        /**
         * @method getState
         * @param {string} animationName
         * @return {dragonBones.AnimationState}
         */
        getState(animationName: string): dragonBones.AnimationState;


        /**
         * @method isPlaying
         * @return {boolean}
         */
        isPlaying(): boolean;


        /**
         * @method gotoAndStopByFrame
         * @param {string} animationName
         * @param {unsigned int} frame
         * @return {dragonBones.AnimationState}
         */
        gotoAndStopByFrame(animationName: string, frame: unsigned int): dragonBones.AnimationState;


        /**
         * @method gotoAndPlayByProgress
         * @param {string} animationName
         * @param {number} progress
         * @param {number} playTimes
         * @return {dragonBones.AnimationState}
         */
        gotoAndPlayByProgress(animationName: string, progress: number, playTimes: number): dragonBones.AnimationState;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class TransformObject
 */
declare namespace dragonBones {
    class TransformObject  extends BaseObject {

        /**
         * @method _setArmature
         * @param {dragonBones.Armature} value
         */
        _setArmature(value: dragonBones.Armature): void;


        /**
         * @method _setParent
         * @param {dragonBones.Bone} value
         */
        _setParent(value: dragonBones.Bone): void;


        /**
         * @method getParent
         * @return {dragonBones.Bone}
         */
        getParent(): dragonBones.Bone;


        /**
         * @method getArmature
         * @return {dragonBones.Armature}
         */
        getArmature(): dragonBones.Armature;


    }
}

/**
 * @class Bone
 */
declare namespace dragonBones {
    class Bone  extends TransformObject {

        /**
         * @method getIK
         * @return {dragonBones.Bone}
         */
        getIK(): dragonBones.Bone;


        /**
         * @method getIKChainIndex
         * @return {unsigned int}
         */
        getIKChainIndex(): unsigned int;


        /**
         * @method contains
         * @param {dragonBones.TransformObject} child
         * @return {boolean}
         */
        contains(child: dragonBones.TransformObject): boolean;


        /**
         * @method getIKChain
         * @return {unsigned int}
         */
        getIKChain(): unsigned int;


        /**
         * @method getVisible
         * @return {boolean}
         */
        getVisible(): boolean;


        /**
         * @method setVisible
         * @param {boolean} value
         */
        setVisible(value: boolean): void;


        /**
         * @method invalidUpdate
         */
        invalidUpdate(): void;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class Slot
 */
declare namespace dragonBones {
    class Slot {

        /**
         * @method getChildArmature
         * @return {dragonBones.Armature}
         */
        getChildArmature(): dragonBones.Armature;


        /**
         * @method invalidUpdate
         */
        invalidUpdate(): void;


        /**
         * @method setDisplayIndex
         * @param {number} value
         */
        setDisplayIndex(value: number): void;


        /**
         * @method setChildArmature
         * @param {dragonBones.Armature} value
         */
        setChildArmature(value: dragonBones.Armature): void;


        /**
         * @method getDisplayIndex
         * @return {number}
         */
        getDisplayIndex(): number;


    }
}

/**
 * @class BaseFactory
 */
declare namespace dragonBones {
    class BaseFactory {

        /**
         * @method removeDragonBonesData
         * @param {string} dragonBonesName
         * @param {boolean} disposeData
         */
        removeDragonBonesData(dragonBonesName: string, disposeData: boolean): void;


        /**
         * @method removeTextureAtlasData
         * @param {string} dragonBonesName
         * @param {boolean} disposeData
         */
        removeTextureAtlasData(dragonBonesName: string, disposeData: boolean): void;


        /**
         * @method parseDragonBonesData
         * @param {string} rawData
         * @param {string} dragonBonesName
         * @param {number} scale
         * @return {dragonBones.DragonBonesData}
         */
        parseDragonBonesData(rawData: string, dragonBonesName: string, scale: number): dragonBones.DragonBonesData;


        /**
         * @method clear
         */
        clear(): void;


        /**
         * @method addDragonBonesData
         * @param {dragonBones.DragonBonesData} data
         * @param {string} dragonBonesName
         */
        addDragonBonesData(data: dragonBones.DragonBonesData, dragonBonesName: string): void;


        /**
         * @method buildArmature
         * @param {string} armatureName
         * @param {string} dragonBonesName
         * @param {string} skinName
         * @return {dragonBones.Armature}
         */
        buildArmature(armatureName: string, dragonBonesName: string, skinName: string): dragonBones.Armature;


        /**
         * @method addTextureAtlasData
         * @param {dragonBones.TextureAtlasData} data
         * @param {string} dragonBonesName
         */
        addTextureAtlasData(data: dragonBones.TextureAtlasData, dragonBonesName: string): void;


        /**
         * @method getDragonBonesData
         * @param {string} dragonBonesName
         * @return {dragonBones.DragonBonesData}
         */
        getDragonBonesData(dragonBonesName: string): dragonBones.DragonBonesData;


    }
}

/**
 * @class WorldClock
 */
declare namespace dragonBones {
    class WorldClock {

        /**
         * @method clear
         */
        clear(): void;


        /**
         * @method advanceTime
         * @param {number} passedTime
         */
        advanceTime(passedTime: number): void;


        /**
         * @method contains
         * @param {dragonBones.IAnimateble} value
         * @return {boolean}
         */
        contains(value: dragonBones.IAnimateble): boolean;


    }
}

/**
 * @class AnimationState
 */
declare namespace dragonBones {
    class AnimationState  extends BaseObject {

        /**
         * @method setCurrentTime
         * @param {number} value
         */
        setCurrentTime(value: number): void;


        /**
         * @method removeBoneMask
         * @param {string} name
         * @param {boolean} recursive
         */
        removeBoneMask(name: string, recursive: boolean): void;


        /**
         * @method getGroup
         * @return {string}
         */
        getGroup(): string;


        /**
         * @method getCurrentPlayTimes
         * @return {unsigned int}
         */
        getCurrentPlayTimes(): unsigned int;


        /**
         * @method getName
         * @return {string}
         */
        getName(): string;


        /**
         * @method getCurrentTime
         * @return {number}
         */
        getCurrentTime(): number;


        /**
         * @method getTotalTime
         * @return {number}
         */
        getTotalTime(): number;


        /**
         * @method removeAllBoneMask
         */
        removeAllBoneMask(): void;


        /**
         * @method getLayer
         * @return {number}
         */
        getLayer(): number;


        /**
         * @method isCompleted
         * @return {boolean}
         */
        isCompleted(): boolean;


        /**
         * @method play
         */
        play(): void;


        /**
         * @method fadeOut
         * @param {number} fadeOutTime
         * @param {boolean} pausePlayhead
         */
        fadeOut(fadeOutTime: number, pausePlayhead: boolean): void;


        /**
         * @method stop
         */
        stop(): void;


        /**
         * @method isPlaying
         * @return {boolean}
         */
        isPlaying(): boolean;


        /**
         * @method addBoneMask
         * @param {string} name
         * @param {boolean} recursive
         */
        addBoneMask(name: string, recursive: boolean): void;


        /**
         * @method containsBoneMask
         * @param {string} name
         * @return {boolean}
         */
        containsBoneMask(name: string): boolean;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class CCTextureData
 */
declare namespace dragonBones {
    class CCTextureData  extends TextureData {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class CCTextureAtlasData
 */
declare namespace dragonBones {
    class CCTextureAtlasData  extends TextureAtlasData {

        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class CCArmatureDisplay
 */
declare namespace dragonBones {
    class CCArmatureDisplay  extends Node {

        /**
         * @method advanceTimeBySelf
         * @param {boolean} on
         */
        advanceTimeBySelf(on: boolean): void;


        /**
         * @method removeEvent
         * @param {string} type
         */
        removeEvent(type: string): void;


        /**
         * @method dispose
         */
        dispose(): void;


        /**
         * @method hasEventCallback
         * @return {boolean}
         */
        hasEventCallback(): boolean;


        /**
         * @method setEventCallback
         * @param {Function} callback
         */
        setEventCallback(callback: Function): void;


        /**
         * @method clearEventCallback
         */
        clearEventCallback(): void;


        /**
         * @method addEvent
         * @param {string} type
         * @param {Function} callback
         */
        addEvent(type: string, callback: Function): void;


        /**
         * @method hasEvent
         * @param {string} type
         * @return {boolean}
         */
        hasEvent(type: string): boolean;


        /**
         * @method getArmature
         * @return {dragonBones.Armature}
         */
        getArmature(): dragonBones.Armature;


        /**
         * @method create
         * @return {dragonBones.CCArmatureDisplay}
         */
        static create(): dragonBones.CCArmatureDisplay;


    }
}

/**
 * @class DBCCSprite
 */
declare namespace dragonBones {
    class DBCCSprite  extends Sprite {

        /**
         * @method create
         * @return {dragonBones.DBCCSprite}
         */
        static create(): dragonBones.DBCCSprite;


    }
}

/**
 * @class CCSlot
 */
declare namespace dragonBones {
    class CCSlot  extends Slot {

        /**
         * @method getClassTypeIndex
         * @return {unsigned int}
         */
        getClassTypeIndex(): unsigned int;


        /**
         * @method getTypeIndex
         * @return {unsigned int}
         */
        static getTypeIndex(): unsigned int;


    }
}

/**
 * @class CCFactory
 */
declare namespace dragonBones {
    class CCFactory  extends BaseFactory {

        /**
         * @method getTextureDisplay
         * @param {string} textureName
         * @param {string} dragonBonesName
         * @return {cc.Sprite}
         */
        getTextureDisplay(textureName: string, dragonBonesName: string): cc.Sprite;


        /**
         * @method getSoundEventManater
         * @return {dragonBones.CCArmatureDisplay}
         */
        getSoundEventManater(): dragonBones.CCArmatureDisplay;


        /**
         * @method buildArmatureDisplay
         * @param {string} armatureName
         * @param {string} dragonBonesName
         * @param {string} skinName
         * @return {dragonBones.CCArmatureDisplay}
         */
        buildArmatureDisplay(armatureName: string, dragonBonesName: string, skinName: string): dragonBones.CCArmatureDisplay;


        /**
         * @method parseTextureAtlasData
         * @param {string} atlasData
         * @param {string} texturePath
         * @param {string} dragonBonesName
         * @param {number} scale
         * @return {dragonBones.TextureAtlasData}
         */
        parseTextureAtlasData(atlasData: string, texturePath: string, dragonBonesName: string, scale: number): dragonBones.TextureAtlasData;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {dragonBones.CCFactory}
         */
        static getInstance(): dragonBones.CCFactory;


        /**
         * @method CCFactory
         * @constructor
         */
        constructor();


    }
}
