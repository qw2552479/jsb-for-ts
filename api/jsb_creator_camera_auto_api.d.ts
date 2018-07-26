
/**
 * @class CameraNode
 */
declare namespace cc {
    class CameraNode  extends Node {

        /**
         * @method removeTarget
         * @param {cc.Node} target
         */
        removeTarget(target: cc.Node): void;


        /**
         * @method setTransform
         * @param {number} a
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} tx
         * @param {number} ty
         */
        setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;


        /**
         * @method getVisibleRect
         * @return {cc.Rect}
         */
        getVisibleRect(): cc.Rect;


        /**
         * @method setEnable
         * @param {boolean} enable
         */
        setEnable(enable: boolean): void;


        /**
         * @method containsNode
         * @param {cc.Node} node
         * @return {boolean}
         */
        containsNode(node: cc.Node): boolean;


        /**
         * @method addTarget
         * @param {cc.Node} target
         */
        addTarget(target: cc.Node): void;


        /**
         * @method getInstance
         * @return {creator.CameraNode}
         */
        static getInstance(): creator.CameraNode;


        /**
         * @method CameraNode
         * @constructor
         */
        constructor();


    }
}
