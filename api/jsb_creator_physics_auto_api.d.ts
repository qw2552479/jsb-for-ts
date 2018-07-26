
/**
 * @class PhysicsDebugDraw
 */
declare namespace cc {
    class PhysicsDebugDraw  extends b2Draw {

        /**
         * @method getDrawer
         * @return {creator.GraphicsNode}
         */
        getDrawer(): creator.GraphicsNode;


        /**
         * @method ClearDraw
         */
        ClearDraw(): void;


        /**
         * @method AddDrawerToNode
         * @param {cc.Node} node
         */
        AddDrawerToNode(node: cc.Node): void;


        /**
         * @method PhysicsDebugDraw
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsWorldManifoldWrapper
 */
declare namespace cc {
    class PhysicsWorldManifoldWrapper {

        /**
         * @method getSeparation
         * @param {number} index
         * @return {number}
         */
        getSeparation(index: number): number;


        /**
         * @method getX
         * @param {number} index
         * @return {number}
         */
        getX(index: number): number;


        /**
         * @method getY
         * @param {number} index
         * @return {number}
         */
        getY(index: number): number;


        /**
         * @method getCount
         * @return {number}
         */
        getCount(): number;


        /**
         * @method getNormalY
         * @return {number}
         */
        getNormalY(): number;


        /**
         * @method getNormalX
         * @return {number}
         */
        getNormalX(): number;


        /**
         * @method PhysicsWorldManifoldWrapper
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsManifoldWrapper
 */
declare namespace cc {
    class PhysicsManifoldWrapper {

        /**
         * @method getNormalImpulse
         * @param {number} index
         * @return {number}
         */
        getNormalImpulse(index: number): number;


        /**
         * @method getLocalNormalY
         * @return {number}
         */
        getLocalNormalY(): number;


        /**
         * @method getLocalNormalX
         * @return {number}
         */
        getLocalNormalX(): number;


        /**
         * @method getLocalPointY
         * @return {number}
         */
        getLocalPointY(): number;


        /**
         * @method getLocalPointX
         * @return {number}
         */
        getLocalPointX(): number;


        /**
         * @method getType
         * @return {number}
         */
        getType(): number;


        /**
         * @method getX
         * @param {number} index
         * @return {number}
         */
        getX(index: number): number;


        /**
         * @method getY
         * @param {number} index
         * @return {number}
         */
        getY(index: number): number;


        /**
         * @method getTangentImpulse
         * @param {number} index
         * @return {number}
         */
        getTangentImpulse(index: number): number;


        /**
         * @method getCount
         * @return {number}
         */
        getCount(): number;


        /**
         * @method PhysicsManifoldWrapper
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsUtils
 */
declare namespace cc {
    class PhysicsUtils {

        /**
         * @method addB2Body
         * @param {b2Body} body
         */
        addB2Body(body: b2Body): void;


        /**
         * @method syncNode
         */
        syncNode(): void;


        /**
         * @method removeB2Body
         * @param {b2Body} body
         */
        removeB2Body(body: b2Body): void;


        /**
         * @method getContactManifoldWrapper
         * @param {b2Contact} contact
         * @return {creator.PhysicsManifoldWrapper}
         */
        static getContactManifoldWrapper(contact: b2Contact): creator.PhysicsManifoldWrapper;


        /**
         * @method getContactWorldManifoldWrapper
         * @param {b2Contact} contact
         * @return {creator.PhysicsWorldManifoldWrapper}
         */
        static getContactWorldManifoldWrapper(contact: b2Contact): creator.PhysicsWorldManifoldWrapper;


        /**
         * @method PhysicsUtils
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsContactImpulse
 */
declare namespace cc {
    class PhysicsContactImpulse {

        /**
         * @method getCount
         * @return {number}
         */
        getCount(): number;


        /**
         * @method getNormalImpulse
         * @param {number} index
         * @return {number}
         */
        getNormalImpulse(index: number): number;


        /**
         * @method getTangentImpulse
         * @param {number} index
         * @return {number}
         */
        getTangentImpulse(index: number): number;


        /**
         * @method PhysicsContactImpulse
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsContactListener
 */
declare namespace cc {
    class PhysicsContactListener  extends b2ContactListener {

        /**
         * @method unregisterContactFixture
         * @param {b2Fixture} fixture
         */
        unregisterContactFixture(fixture: b2Fixture): void;


        /**
         * @method registerContactFixture
         * @param {b2Fixture} fixture
         */
        registerContactFixture(fixture: b2Fixture): void;


        /**
         * @method PhysicsContactListener
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsAABBQueryCallback
 */
declare namespace cc {
    class PhysicsAABBQueryCallback  extends b2QueryCallback {

        /**
         * @method init
        * @param {b2Vec2} p
*/
        init(p: b2Vec2): void;



        /**
         * @method getFixture
         * @return {b2Fixture}
         */
        getFixture(): b2Fixture;


        /**
         * @method PhysicsAABBQueryCallback
         * @constructor
         */
        constructor();


    }
}

/**
 * @class PhysicsRayCastCallback
 */
declare namespace cc {
    class PhysicsRayCastCallback  extends b2RayCastCallback {

        /**
         * @method getType
         * @return {number}
         */
        getType(): number;


        /**
         * @method init
         * @param {number} type
         */
        init(type: number): void;


        /**
         * @method getFractions
         * @return {any[]}
         */
        getFractions(): any[];


        /**
         * @method PhysicsRayCastCallback
         * @constructor
         */
        constructor();


    }
}
