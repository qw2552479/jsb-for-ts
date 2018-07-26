
/**
 * @class b2Draw
 */
declare namespace b2 {
    class Draw {

        /**
         * @method AppendFlags
         * @param {unsigned int} flags
         */
        AppendFlags(flags: unsigned int): void;


        /**
         * @method DrawTransform
         * @param {b2Transform} xf
         */
        DrawTransform(xf: b2Transform): void;


        /**
         * @method ClearFlags
         * @param {unsigned int} flags
         */
        ClearFlags(flags: unsigned int): void;


        /**
         * @method DrawPolygon
         * @param {b2Vec2} vertices
         * @param {number} vertexCount
         * @param {b2Color} color
         */
        DrawPolygon(vertices: b2Vec2, vertexCount: number, color: b2Color): void;


        /**
         * @method ClearDraw
         */
        ClearDraw(): void;


        /**
         * @method DrawSolidPolygon
         * @param {b2Vec2} vertices
         * @param {number} vertexCount
         * @param {b2Color} color
         */
        DrawSolidPolygon(vertices: b2Vec2, vertexCount: number, color: b2Color): void;


        /**
         * @method DrawCircle
         * @param {b2Vec2} center
         * @param {number} radius
         * @param {b2Color} color
         */
        DrawCircle(center: b2Vec2, radius: number, color: b2Color): void;


        /**
         * @method SetFlags
         * @param {unsigned int} flags
         */
        SetFlags(flags: unsigned int): void;


        /**
         * @method DrawSegment
         * @param {b2Vec2} p1
         * @param {b2Vec2} p2
         * @param {b2Color} color
         */
        DrawSegment(p1: b2Vec2, p2: b2Vec2, color: b2Color): void;


        /**
         * @method DrawSolidCircle
         * @param {b2Vec2} center
         * @param {number} radius
         * @param {b2Vec2} axis
         * @param {b2Color} color
         */
        DrawSolidCircle(center: b2Vec2, radius: number, axis: b2Vec2, color: b2Color): void;


        /**
         * @method GetFlags
         * @return {unsigned int}
         */
        GetFlags(): unsigned int;


    }
}

/**
 * @class b2Shape
 */
declare namespace b2 {
    class Shape {

        /**
         * @method ComputeMass
         * @param {b2MassData} massData
         * @param {number} density
         */
        ComputeMass(massData: b2MassData, density: number): void;


        /**
         * @method Clone
         * @param {b2BlockAllocator} allocator
         * @return {b2Shape}
         */
        Clone(allocator: b2BlockAllocator): b2Shape;


        /**
         * @method GetType
         * @return {b2Shape.Type}
         */
        GetType(): b2Shape.Type;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {b2Transform} transform
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;


        /**
         * @method ComputeAABB
         * @param {b2AABB} aabb
         * @param {b2Transform} xf
         * @param {number} childIndex
         */
        ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;


        /**
         * @method GetChildCount
         * @return {number}
         */
        GetChildCount(): number;


        /**
         * @method TestPoint
         * @param {b2Transform} xf
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(xf: b2Transform, p: b2Vec2): boolean;


    }
}

/**
 * @class b2CircleShape
 */
declare namespace b2 {
    class CircleShape  extends b2Shape {

        /**
         * @method ComputeMass
         * @param {b2MassData} massData
         * @param {number} density
         */
        ComputeMass(massData: b2MassData, density: number): void;


        /**
         * @method GetVertex
         * @param {number} index
         * @return {b2Vec2}
         */
        GetVertex(index: number): b2Vec2;


        /**
         * @method Clone
         * @param {b2BlockAllocator} allocator
         * @return {b2Shape}
         */
        Clone(allocator: b2BlockAllocator): b2Shape;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {b2Transform} transform
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;


        /**
         * @method ComputeAABB
         * @param {b2AABB} aabb
         * @param {b2Transform} transform
         * @param {number} childIndex
         */
        ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void;


        /**
         * @method GetVertexCount
         * @return {number}
         */
        GetVertexCount(): number;


        /**
         * @method GetChildCount
         * @return {number}
         */
        GetChildCount(): number;


        /**
         * @method TestPoint
         * @param {b2Transform} transform
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(transform: b2Transform, p: b2Vec2): boolean;


        /**
         * @method GetSupportVertex
         * @param {b2Vec2} d
         * @return {b2Vec2}
         */
        GetSupportVertex(d: b2Vec2): b2Vec2;


        /**
         * @method GetSupport
         * @param {b2Vec2} d
         * @return {number}
         */
        GetSupport(d: b2Vec2): number;


        /**
         * @method b2CircleShape
         * @constructor
         */
        constructor();


    }
}

/**
 * @class b2EdgeShape
 */
declare namespace b2 {
    class EdgeShape  extends b2Shape {

        /**
         * @method Set
         * @param {b2Vec2} v1
         * @param {b2Vec2} v2
         */
        Set(v1: b2Vec2, v2: b2Vec2): void;


        /**
         * @method ComputeMass
         * @param {b2MassData} massData
         * @param {number} density
         */
        ComputeMass(massData: b2MassData, density: number): void;


        /**
         * @method Clone
         * @param {b2BlockAllocator} allocator
         * @return {b2Shape}
         */
        Clone(allocator: b2BlockAllocator): b2Shape;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {b2Transform} transform
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;


        /**
         * @method ComputeAABB
         * @param {b2AABB} aabb
         * @param {b2Transform} transform
         * @param {number} childIndex
         */
        ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void;


        /**
         * @method GetChildCount
         * @return {number}
         */
        GetChildCount(): number;


        /**
         * @method TestPoint
         * @param {b2Transform} transform
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(transform: b2Transform, p: b2Vec2): boolean;


        /**
         * @method b2EdgeShape
         * @constructor
         */
        constructor();


    }
}

/**
 * @class b2ChainShape
 */
declare namespace b2 {
    class ChainShape  extends b2Shape {

        /**
         * @method ComputeMass
         * @param {b2MassData} massData
         * @param {number} density
         */
        ComputeMass(massData: b2MassData, density: number): void;


        /**
         * @method Clear
         */
        Clear(): void;


        /**
         * @method TestPoint
         * @param {b2Transform} transform
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(transform: b2Transform, p: b2Vec2): boolean;


        /**
         * @method GetChildEdge
         * @param {b2EdgeShape} edge
         * @param {number} index
         */
        GetChildEdge(edge: b2EdgeShape, index: number): void;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {b2Transform} transform
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;


        /**
         * @method ComputeAABB
         * @param {b2AABB} aabb
         * @param {b2Transform} transform
         * @param {number} childIndex
         */
        ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void;


        /**
         * @method GetChildCount
         * @return {number}
         */
        GetChildCount(): number;


        /**
         * @method SetPrevVertex
         * @param {b2Vec2} prevVertex
         */
        SetPrevVertex(prevVertex: b2Vec2): void;


        /**
         * @method SetNextVertex
         * @param {b2Vec2} nextVertex
         */
        SetNextVertex(nextVertex: b2Vec2): void;


        /**
         * @method Clone
         * @param {b2BlockAllocator} allocator
         * @return {b2Shape}
         */
        Clone(allocator: b2BlockAllocator): b2Shape;


        /**
         * @method b2ChainShape
         * @constructor
         */
        constructor();


    }
}

/**
 * @class b2PolygonShape
 */
declare namespace b2 {
    class PolygonShape  extends b2Shape {

        /**
         * @method ComputeMass
         * @param {b2MassData} massData
         * @param {number} density
         */
        ComputeMass(massData: b2MassData, density: number): void;


        /**
         * @method GetVertex
         * @param {number} index
         * @return {b2Vec2}
         */
        GetVertex(index: number): b2Vec2;


        /**
         * @method Clone
         * @param {b2BlockAllocator} allocator
         * @return {b2Shape}
         */
        Clone(allocator: b2BlockAllocator): b2Shape;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {b2Transform} transform
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;


        /**
         * @method ComputeAABB
         * @param {b2AABB} aabb
         * @param {b2Transform} transform
         * @param {number} childIndex
         */
        ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void;


        /**
         * @method GetVertexCount
         * @return {number}
         */
        GetVertexCount(): number;


        /**
         * @method GetChildCount
         * @return {number}
         */
        GetChildCount(): number;


        /**
         * @method TestPoint
         * @param {b2Transform} transform
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(transform: b2Transform, p: b2Vec2): boolean;


        /**
         * @method Validate
         * @return {boolean}
         */
        Validate(): boolean;


        /**
         * @method b2PolygonShape
         * @constructor
         */
        constructor();


    }
}

/**
 * @class b2Body
 */
declare namespace b2 {
    class Body {

        /**
         * @method GetAngle
         * @return {number}
         */
        GetAngle(): number;


        /**
         * @method IsSleepingAllowed
         * @return {boolean}
         */
        IsSleepingAllowed(): boolean;


        /**
         * @method SetAngularDamping
         * @param {number} angularDamping
         */
        SetAngularDamping(angularDamping: number): void;


        /**
         * @method SetActive
         * @param {boolean} flag
         */
        SetActive(flag: boolean): void;


        /**
         * @method SetGravityScale
         * @param {number} scale
         */
        SetGravityScale(scale: number): void;


        /**
         * @method GetAngularVelocity
         * @return {number}
         */
        GetAngularVelocity(): number;


        /**
         * @method GetFixtureList
        * @return {b2Fixture|b2Fixture}
*/
        GetFixtureList(): b2Fixture|b2Fixture;



        /**
         * @method ApplyForce
         * @param {b2Vec2} force
         * @param {b2Vec2} point
         * @param {boolean} wake
         */
        ApplyForce(force: b2Vec2, point: b2Vec2, wake: boolean): void;


        /**
         * @method GetLocalPoint
         * @param {b2Vec2} worldPoint
         * @return {b2Vec2}
         */
        GetLocalPoint(worldPoint: b2Vec2): b2Vec2;


        /**
         * @method SetLinearVelocity
         * @param {b2Vec2} v
         */
        SetLinearVelocity(v: b2Vec2): void;


        /**
         * @method GetLinearVelocity
         * @return {b2Vec2}
         */
        GetLinearVelocity(): b2Vec2;


        /**
         * @method GetNext
        * @return {b2Body|b2Body}
*/
        GetNext(): b2Body|b2Body;



        /**
         * @method SetSleepingAllowed
         * @param {boolean} flag
         */
        SetSleepingAllowed(flag: boolean): void;


        /**
         * @method SetTransform
         * @param {b2Vec2} position
         * @param {number} angle
         */
        SetTransform(position: b2Vec2, angle: number): void;


        /**
         * @method GetMass
         * @return {number}
         */
        GetMass(): number;


        /**
         * @method SetAngularVelocity
         * @param {number} omega
         */
        SetAngularVelocity(omega: number): void;


        /**
         * @method GetMassData
         * @param {b2MassData} data
         */
        GetMassData(data: b2MassData): void;


        /**
         * @method GetLinearVelocityFromWorldPoint
         * @param {b2Vec2} worldPoint
         * @return {b2Vec2}
         */
        GetLinearVelocityFromWorldPoint(worldPoint: b2Vec2): b2Vec2;


        /**
         * @method ResetMassData
         */
        ResetMassData(): void;


        /**
         * @method ApplyForceToCenter
         * @param {b2Vec2} force
         * @param {boolean} wake
         */
        ApplyForceToCenter(force: b2Vec2, wake: boolean): void;


        /**
         * @method ApplyTorque
         * @param {number} torque
         * @param {boolean} wake
         */
        ApplyTorque(torque: number, wake: boolean): void;


        /**
         * @method IsAwake
         * @return {boolean}
         */
        IsAwake(): boolean;


        /**
         * @method SetType
         * @param {b2BodyType} type
         */
        SetType(type: b2BodyType): void;


        /**
         * @method SetMassData
         * @param {b2MassData} data
         */
        SetMassData(data: b2MassData): void;


        /**
         * @method GetTransform
         * @return {b2Transform}
         */
        GetTransform(): b2Transform;


        /**
         * @method GetWorldCenter
         * @return {b2Vec2}
         */
        GetWorldCenter(): b2Vec2;


        /**
         * @method GetAngularDamping
         * @return {number}
         */
        GetAngularDamping(): number;


        /**
         * @method ApplyLinearImpulse
         * @param {b2Vec2} impulse
         * @param {b2Vec2} point
         * @param {boolean} wake
         */
        ApplyLinearImpulse(impulse: b2Vec2, point: b2Vec2, wake: boolean): void;


        /**
         * @method IsFixedRotation
         * @return {boolean}
         */
        IsFixedRotation(): boolean;


        /**
         * @method GetLocalCenter
         * @return {b2Vec2}
         */
        GetLocalCenter(): b2Vec2;


        /**
         * @method GetWorldVector
         * @param {b2Vec2} localVector
         * @return {b2Vec2}
         */
        GetWorldVector(localVector: b2Vec2): b2Vec2;


        /**
         * @method GetLinearVelocityFromLocalPoint
         * @param {b2Vec2} localPoint
         * @return {b2Vec2}
         */
        GetLinearVelocityFromLocalPoint(localPoint: b2Vec2): b2Vec2;


        /**
         * @method GetContactList
        * @return {b2ContactEdge|b2ContactEdge}
*/
        GetContactList(): b2ContactEdge|b2ContactEdge;



        /**
         * @method GetWorldPoint
         * @param {b2Vec2} localPoint
         * @return {b2Vec2}
         */
        GetWorldPoint(localPoint: b2Vec2): b2Vec2;


        /**
         * @method SetAwake
         * @param {boolean} flag
         */
        SetAwake(flag: boolean): void;


        /**
         * @method GetLinearDamping
         * @return {number}
         */
        GetLinearDamping(): number;


        /**
         * @method IsBullet
         * @return {boolean}
         */
        IsBullet(): boolean;


        /**
         * @method GetWorld
        * @return {b2World|b2World}
*/
        GetWorld(): b2World|b2World;



        /**
         * @method GetLocalVector
         * @param {b2Vec2} worldVector
         * @return {b2Vec2}
         */
        GetLocalVector(worldVector: b2Vec2): b2Vec2;


        /**
         * @method SetLinearDamping
         * @param {number} linearDamping
         */
        SetLinearDamping(linearDamping: number): void;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetBullet
         * @param {boolean} flag
         */
        SetBullet(flag: boolean): void;


        /**
         * @method GetType
         * @return {b2BodyType}
         */
        GetType(): b2BodyType;


        /**
         * @method GetGravityScale
         * @return {number}
         */
        GetGravityScale(): number;


        /**
         * @method DestroyFixture
         * @param {b2Fixture} fixture
         */
        DestroyFixture(fixture: b2Fixture): void;


        /**
         * @method GetInertia
         * @return {number}
         */
        GetInertia(): number;


        /**
         * @method IsActive
         * @return {boolean}
         */
        IsActive(): boolean;


        /**
         * @method SetFixedRotation
         * @param {boolean} flag
         */
        SetFixedRotation(flag: boolean): void;


        /**
         * @method ApplyAngularImpulse
         * @param {number} impulse
         * @param {boolean} wake
         */
        ApplyAngularImpulse(impulse: number, wake: boolean): void;


        /**
         * @method GetPosition
         * @return {b2Vec2}
         */
        GetPosition(): b2Vec2;


    }
}

/**
 * @class b2Fixture
 */
declare namespace b2 {
    class Fixture {

        /**
         * @method GetRestitution
         * @return {number}
         */
        GetRestitution(): number;


        /**
         * @method SetFilterData
         * @param {b2Filter} filter
         */
        SetFilterData(filter: b2Filter): void;


        /**
         * @method SetFriction
         * @param {number} friction
         */
        SetFriction(friction: number): void;


        /**
         * @method GetShape
        * @return {b2Shape|b2Shape}
*/
        GetShape(): b2Shape|b2Shape;



        /**
         * @method SetRestitution
         * @param {number} restitution
         */
        SetRestitution(restitution: number): void;


        /**
         * @method GetBody
        * @return {b2Body|b2Body}
*/
        GetBody(): b2Body|b2Body;



        /**
         * @method GetNext
        * @return {b2Fixture|b2Fixture}
*/
        GetNext(): b2Fixture|b2Fixture;



        /**
         * @method GetFriction
         * @return {number}
         */
        GetFriction(): number;


        /**
         * @method SetDensity
         * @param {number} density
         */
        SetDensity(density: number): void;


        /**
         * @method GetMassData
         * @param {b2MassData} massData
         */
        GetMassData(massData: b2MassData): void;


        /**
         * @method SetSensor
         * @param {boolean} sensor
         */
        SetSensor(sensor: boolean): void;


        /**
         * @method GetAABB
         * @param {number} childIndex
         * @return {b2AABB}
         */
        GetAABB(childIndex: number): b2AABB;


        /**
         * @method TestPoint
         * @param {b2Vec2} p
         * @return {boolean}
         */
        TestPoint(p: b2Vec2): boolean;


        /**
         * @method RayCast
         * @param {b2RayCastOutput} output
         * @param {b2RayCastInput} input
         * @param {number} childIndex
         * @return {boolean}
         */
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, childIndex: number): boolean;


        /**
         * @method Refilter
         */
        Refilter(): void;


        /**
         * @method Dump
         * @param {number} bodyIndex
         */
        Dump(bodyIndex: number): void;


        /**
         * @method GetFilterData
         * @return {b2Filter}
         */
        GetFilterData(): b2Filter;


        /**
         * @method IsSensor
         * @return {boolean}
         */
        IsSensor(): boolean;


        /**
         * @method GetType
         * @return {b2Shape.Type}
         */
        GetType(): b2Shape.Type;


        /**
         * @method GetDensity
         * @return {number}
         */
        GetDensity(): number;


    }
}

/**
 * @class b2ContactListener
 */
declare namespace b2 {
    class b2ContactListener {

        /**
         * @method EndContact
         * @param {b2Contact} contact
         */
        EndContact(contact: b2Contact): void;


        /**
         * @method PreSolve
         * @param {b2Contact} contact
         * @param {b2Manifold} oldManifold
         */
        PreSolve(contact: b2Contact, oldManifold: b2Manifold): void;


        /**
         * @method BeginContact
         * @param {b2Contact} contact
         */
        BeginContact(contact: b2Contact): void;


        /**
         * @method PostSolve
         * @param {b2Contact} contact
         * @param {b2ContactImpulse} impulse
         */
        PostSolve(contact: b2Contact, impulse: b2ContactImpulse): void;


    }
}

/**
 * @class b2QueryCallback
 */
declare namespace b2 {
    class b2QueryCallback {

        /**
         * @method ReportFixture
         * @param {b2Fixture} fixture
         * @return {boolean}
         */
        ReportFixture(fixture: b2Fixture): boolean;


    }
}

/**
 * @class b2RayCastCallback
 */
declare namespace b2 {
    class b2RayCastCallback {

        /**
         * @method ReportFixture
         * @param {b2Fixture} fixture
         * @param {b2Vec2} point
         * @param {b2Vec2} normal
         * @param {number} fraction
         * @return {number}
         */
        ReportFixture(fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number;


    }
}

/**
 * @class b2World
 */
declare namespace b2 {
    class World {

        /**
         * @method ShiftOrigin
         * @param {b2Vec2} newOrigin
         */
        ShiftOrigin(newOrigin: b2Vec2): void;


        /**
         * @method QueryAABB
         * @param {b2QueryCallback} callback
         * @param {b2AABB} aabb
         */
        QueryAABB(callback: b2QueryCallback, aabb: b2AABB): void;


        /**
         * @method SetSubStepping
         * @param {boolean} flag
         */
        SetSubStepping(flag: boolean): void;


        /**
         * @method GetTreeQuality
         * @return {number}
         */
        GetTreeQuality(): number;


        /**
         * @method GetTreeHeight
         * @return {number}
         */
        GetTreeHeight(): number;


        /**
         * @method GetProfile
         * @return {b2Profile}
         */
        GetProfile(): b2Profile;


        /**
         * @method GetTreeBalance
         * @return {number}
         */
        GetTreeBalance(): number;


        /**
         * @method GetSubStepping
         * @return {boolean}
         */
        GetSubStepping(): boolean;


        /**
         * @method SetContactListener
         * @param {b2ContactListener} listener
         */
        SetContactListener(listener: b2ContactListener): void;


        /**
         * @method DrawDebugData
         */
        DrawDebugData(): void;


        /**
         * @method SetContinuousPhysics
         * @param {boolean} flag
         */
        SetContinuousPhysics(flag: boolean): void;


        /**
         * @method SetGravity
         * @param {b2Vec2} gravity
         */
        SetGravity(gravity: b2Vec2): void;


        /**
         * @method GetBodyCount
         * @return {number}
         */
        GetBodyCount(): number;


        /**
         * @method GetAutoClearForces
         * @return {boolean}
         */
        GetAutoClearForces(): boolean;


        /**
         * @method GetContinuousPhysics
         * @return {boolean}
         */
        GetContinuousPhysics(): boolean;


        /**
         * @method GetJointList
        * @return {b2Joint|b2Joint}
*/
        GetJointList(): b2Joint|b2Joint;



        /**
         * @method GetBodyList
        * @return {b2Body|b2Body}
*/
        GetBodyList(): b2Body|b2Body;



        /**
         * @method SetDestructionListener
         * @param {b2DestructionListener} listener
         */
        SetDestructionListener(listener: b2DestructionListener): void;


        /**
         * @method DestroyJoint
         * @param {b2Joint} joint
         */
        DestroyJoint(joint: b2Joint): void;


        /**
         * @method GetJointCount
         * @return {number}
         */
        GetJointCount(): number;


        /**
         * @method Step
         * @param {number} timeStep
         * @param {number} velocityIterations
         * @param {number} positionIterations
         */
        Step(timeStep: number, velocityIterations: number, positionIterations: number): void;


        /**
         * @method ClearForces
         */
        ClearForces(): void;


        /**
         * @method GetWarmStarting
         * @return {boolean}
         */
        GetWarmStarting(): boolean;


        /**
         * @method SetAllowSleeping
         * @param {boolean} flag
         */
        SetAllowSleeping(flag: boolean): void;


        /**
         * @method DestroyBody
         * @param {b2Body} body
         */
        DestroyBody(body: b2Body): void;


        /**
         * @method GetAllowSleeping
         * @return {boolean}
         */
        GetAllowSleeping(): boolean;


        /**
         * @method GetProxyCount
         * @return {number}
         */
        GetProxyCount(): number;


        /**
         * @method RayCast
         * @param {b2RayCastCallback} callback
         * @param {b2Vec2} point1
         * @param {b2Vec2} point2
         */
        RayCast(callback: b2RayCastCallback, point1: b2Vec2, point2: b2Vec2): void;


        /**
         * @method IsLocked
         * @return {boolean}
         */
        IsLocked(): boolean;


        /**
         * @method SetDebugDraw
         * @param {b2Draw} debugDraw
         */
        SetDebugDraw(debugDraw: b2Draw): void;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetAutoClearForces
         * @param {boolean} flag
         */
        SetAutoClearForces(flag: boolean): void;


        /**
         * @method GetGravity
         * @return {b2Vec2}
         */
        GetGravity(): b2Vec2;


        /**
         * @method GetContactCount
         * @return {number}
         */
        GetContactCount(): number;


        /**
         * @method SetWarmStarting
         * @param {boolean} flag
         */
        SetWarmStarting(flag: boolean): void;


        /**
         * @method SetContactFilter
         * @param {b2ContactFilter} filter
         */
        SetContactFilter(filter: b2ContactFilter): void;


        /**
         * @method b2World
         * @constructor
         * @param {b2Vec2} gravity
         */
        constructor(gravity: b2Vec2);


    }
}

/**
 * @class b2Contact
 */
declare namespace b2 {
    class Contact {

        /**
         * @method GetNext
        * @return {b2Contact|b2Contact}
*/
        GetNext(): b2Contact|b2Contact;



        /**
         * @method SetEnabled
         * @param {boolean} flag
         */
        SetEnabled(flag: boolean): void;


        /**
         * @method GetWorldManifold
         * @param {b2WorldManifold} worldManifold
         */
        GetWorldManifold(worldManifold: b2WorldManifold): void;


        /**
         * @method GetRestitution
         * @return {number}
         */
        GetRestitution(): number;


        /**
         * @method ResetFriction
         */
        ResetFriction(): void;


        /**
         * @method GetFriction
         * @return {number}
         */
        GetFriction(): number;


        /**
         * @method IsTouching
         * @return {boolean}
         */
        IsTouching(): boolean;


        /**
         * @method IsEnabled
         * @return {boolean}
         */
        IsEnabled(): boolean;


        /**
         * @method GetFixtureB
        * @return {b2Fixture|b2Fixture}
*/
        GetFixtureB(): b2Fixture|b2Fixture;



        /**
         * @method SetFriction
         * @param {number} friction
         */
        SetFriction(friction: number): void;


        /**
         * @method GetFixtureA
        * @return {b2Fixture|b2Fixture}
*/
        GetFixtureA(): b2Fixture|b2Fixture;



        /**
         * @method GetChildIndexA
         * @return {number}
         */
        GetChildIndexA(): number;


        /**
         * @method GetChildIndexB
         * @return {number}
         */
        GetChildIndexB(): number;


        /**
         * @method SetTangentSpeed
         * @param {number} speed
         */
        SetTangentSpeed(speed: number): void;


        /**
         * @method GetTangentSpeed
         * @return {number}
         */
        GetTangentSpeed(): number;


        /**
         * @method SetRestitution
         * @param {number} restitution
         */
        SetRestitution(restitution: number): void;


        /**
         * @method GetManifold
        * @return {b2Manifold|b2Manifold}
*/
        GetManifold(): b2Manifold|b2Manifold;



        /**
         * @method Evaluate
         * @param {b2Manifold} manifold
         * @param {b2Transform} xfA
         * @param {b2Transform} xfB
         */
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;


        /**
         * @method ResetRestitution
         */
        ResetRestitution(): void;


    }
}

/**
 * @class b2Joint
 */
declare namespace b2 {
    class Joint {

        /**
         * @method GetNext
        * @return {b2Joint|b2Joint}
*/
        GetNext(): b2Joint|b2Joint;



        /**
         * @method GetBodyA
         * @return {b2Body}
         */
        GetBodyA(): b2Body;


        /**
         * @method GetBodyB
         * @return {b2Body}
         */
        GetBodyB(): b2Body;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method ShiftOrigin
         * @param {b2Vec2} newOrigin
         */
        ShiftOrigin(newOrigin: b2Vec2): void;


        /**
         * @method GetType
         * @return {b2JointType}
         */
        GetType(): b2JointType;


        /**
         * @method GetCollideConnected
         * @return {boolean}
         */
        GetCollideConnected(): boolean;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method IsActive
         * @return {boolean}
         */
        IsActive(): boolean;


    }
}

/**
 * @class b2DistanceJoint
 */
declare namespace b2 {
    class b2DistanceJoint  extends b2Joint {

        /**
         * @method SetDampingRatio
         * @param {number} ratio
         */
        SetDampingRatio(ratio: number): void;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetFrequency
         * @param {number} hz
         */
        SetFrequency(hz: number): void;


        /**
         * @method GetLength
         * @return {number}
         */
        GetLength(): number;


        /**
         * @method GetDampingRatio
         * @return {number}
         */
        GetDampingRatio(): number;


        /**
         * @method GetFrequency
         * @return {number}
         */
        GetFrequency(): number;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method SetLength
         * @param {number} length
         */
        SetLength(length: number): void;


    }
}

/**
 * @class b2FrictionJoint
 */
declare namespace b2 {
    class b2FrictionJoint  extends b2Joint {

        /**
         * @method SetMaxTorque
         * @param {number} torque
         */
        SetMaxTorque(torque: number): void;


        /**
         * @method GetMaxForce
         * @return {number}
         */
        GetMaxForce(): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetMaxForce
         * @param {number} force
         */
        SetMaxForce(force: number): void;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetMaxTorque
         * @return {number}
         */
        GetMaxTorque(): number;


    }
}

/**
 * @class b2GearJoint
 */
declare namespace b2 {
    class b2GearJoint  extends b2Joint {

        /**
         * @method GetJoint1
         * @return {b2Joint}
         */
        GetJoint1(): b2Joint;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetJoint2
         * @return {b2Joint}
         */
        GetJoint2(): b2Joint;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetRatio
         * @param {number} ratio
         */
        SetRatio(ratio: number): void;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetRatio
         * @return {number}
         */
        GetRatio(): number;


    }
}

/**
 * @class b2MotorJoint
 */
declare namespace b2 {
    class b2MotorJoint  extends b2Joint {

        /**
         * @method SetMaxTorque
         * @param {number} torque
         */
        SetMaxTorque(torque: number): void;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method GetCorrectionFactor
         * @return {number}
         */
        GetCorrectionFactor(): number;


        /**
         * @method SetMaxForce
         * @param {number} force
         */
        SetMaxForce(force: number): void;


        /**
         * @method SetLinearOffset
         * @param {b2Vec2} linearOffset
         */
        SetLinearOffset(linearOffset: b2Vec2): void;


        /**
         * @method GetMaxForce
         * @return {number}
         */
        GetMaxForce(): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetAngularOffset
         * @param {number} angularOffset
         */
        SetAngularOffset(angularOffset: number): void;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetAngularOffset
         * @return {number}
         */
        GetAngularOffset(): number;


        /**
         * @method GetLinearOffset
         * @return {b2Vec2}
         */
        GetLinearOffset(): b2Vec2;


        /**
         * @method GetMaxTorque
         * @return {number}
         */
        GetMaxTorque(): number;


        /**
         * @method SetCorrectionFactor
         * @param {number} factor
         */
        SetCorrectionFactor(factor: number): void;


    }
}

/**
 * @class b2MouseJoint
 */
declare namespace b2 {
    class b2MouseJoint  extends b2Joint {

        /**
         * @method SetDampingRatio
         * @param {number} ratio
         */
        SetDampingRatio(ratio: number): void;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetFrequency
         * @param {number} hz
         */
        SetFrequency(hz: number): void;


        /**
         * @method GetDampingRatio
         * @return {number}
         */
        GetDampingRatio(): number;


        /**
         * @method SetTarget
         * @param {b2Vec2} target
         */
        SetTarget(target: b2Vec2): void;


        /**
         * @method SetMaxForce
         * @param {number} force
         */
        SetMaxForce(force: number): void;


        /**
         * @method GetFrequency
         * @return {number}
         */
        GetFrequency(): number;


        /**
         * @method GetTarget
         * @return {b2Vec2}
         */
        GetTarget(): b2Vec2;


        /**
         * @method GetMaxForce
         * @return {number}
         */
        GetMaxForce(): number;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method ShiftOrigin
         * @param {b2Vec2} newOrigin
         */
        ShiftOrigin(newOrigin: b2Vec2): void;


    }
}

/**
 * @class b2PrismaticJoint
 */
declare namespace b2 {
    class b2PrismaticJoint  extends b2Joint {

        /**
         * @method GetLocalAxisA
         * @return {b2Vec2}
         */
        GetLocalAxisA(): b2Vec2;


        /**
         * @method GetLowerLimit
         * @return {number}
         */
        GetLowerLimit(): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method SetMotorSpeed
         * @param {number} speed
         */
        SetMotorSpeed(speed: number): void;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetMotorSpeed
         * @return {number}
         */
        GetMotorSpeed(): number;


        /**
         * @method SetMaxMotorForce
         * @param {number} force
         */
        SetMaxMotorForce(force: number): void;


        /**
         * @method EnableLimit
         * @param {boolean} flag
         */
        EnableLimit(flag: boolean): void;


        /**
         * @method IsMotorEnabled
         * @return {boolean}
         */
        IsMotorEnabled(): boolean;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetMaxMotorForce
         * @return {number}
         */
        GetMaxMotorForce(): number;


        /**
         * @method GetJointSpeed
         * @return {number}
         */
        GetJointSpeed(): number;


        /**
         * @method EnableMotor
         * @param {boolean} flag
         */
        EnableMotor(flag: boolean): void;


        /**
         * @method GetReferenceAngle
         * @return {number}
         */
        GetReferenceAngle(): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method GetMotorForce
         * @param {number} inv_dt
         * @return {number}
         */
        GetMotorForce(inv_dt: number): number;


        /**
         * @method GetJointTranslation
         * @return {number}
         */
        GetJointTranslation(): number;


        /**
         * @method IsLimitEnabled
         * @return {boolean}
         */
        IsLimitEnabled(): boolean;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method SetLimits
         * @param {number} lower
         * @param {number} upper
         */
        SetLimits(lower: number, upper: number): void;


        /**
         * @method GetUpperLimit
         * @return {number}
         */
        GetUpperLimit(): number;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


    }
}

/**
 * @class b2PulleyJoint
 */
declare namespace b2 {
    class b2PulleyJoint  extends b2Joint {

        /**
         * @method GetCurrentLengthA
         * @return {number}
         */
        GetCurrentLengthA(): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetGroundAnchorB
         * @return {b2Vec2}
         */
        GetGroundAnchorB(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method GetGroundAnchorA
         * @return {b2Vec2}
         */
        GetGroundAnchorA(): b2Vec2;


        /**
         * @method GetLengthB
         * @return {number}
         */
        GetLengthB(): number;


        /**
         * @method GetLengthA
         * @return {number}
         */
        GetLengthA(): number;


        /**
         * @method GetCurrentLengthB
         * @return {number}
         */
        GetCurrentLengthB(): number;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method ShiftOrigin
         * @param {b2Vec2} newOrigin
         */
        ShiftOrigin(newOrigin: b2Vec2): void;


        /**
         * @method GetRatio
         * @return {number}
         */
        GetRatio(): number;


    }
}

/**
 * @class b2RevoluteJoint
 */
declare namespace b2 {
    class b2RevoluteJoint  extends b2Joint {

        /**
         * @method GetLowerLimit
         * @return {number}
         */
        GetLowerLimit(): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method SetMotorSpeed
         * @param {number} speed
         */
        SetMotorSpeed(speed: number): void;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetJointAngle
         * @return {number}
         */
        GetJointAngle(): number;


        /**
         * @method GetMotorSpeed
         * @return {number}
         */
        GetMotorSpeed(): number;


        /**
         * @method GetMotorTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetMotorTorque(inv_dt: number): number;


        /**
         * @method IsLimitEnabled
         * @return {boolean}
         */
        IsLimitEnabled(): boolean;


        /**
         * @method EnableLimit
         * @param {boolean} flag
         */
        EnableLimit(flag: boolean): void;


        /**
         * @method IsMotorEnabled
         * @return {boolean}
         */
        IsMotorEnabled(): boolean;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method SetMaxMotorTorque
         * @param {number} torque
         */
        SetMaxMotorTorque(torque: number): void;


        /**
         * @method GetJointSpeed
         * @return {number}
         */
        GetJointSpeed(): number;


        /**
         * @method EnableMotor
         * @param {boolean} flag
         */
        EnableMotor(flag: boolean): void;


        /**
         * @method GetReferenceAngle
         * @return {number}
         */
        GetReferenceAngle(): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetLimits
         * @param {number} lower
         * @param {number} upper
         */
        SetLimits(lower: number, upper: number): void;


        /**
         * @method GetMaxMotorTorque
         * @return {number}
         */
        GetMaxMotorTorque(): number;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method GetUpperLimit
         * @return {number}
         */
        GetUpperLimit(): number;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


    }
}

/**
 * @class b2RopeJoint
 */
declare namespace b2 {
    class b2RopeJoint  extends b2Joint {

        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method GetMaxLength
         * @return {number}
         */
        GetMaxLength(): number;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetMaxLength
         * @param {number} length
         */
        SetMaxLength(length: number): void;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetLimitState
         * @return {b2LimitState}
         */
        GetLimitState(): b2LimitState;


    }
}

/**
 * @class b2WeldJoint
 */
declare namespace b2 {
    class b2WeldJoint  extends b2Joint {

        /**
         * @method SetDampingRatio
         * @param {number} ratio
         */
        SetDampingRatio(ratio: number): void;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetFrequency
         * @param {number} hz
         */
        SetFrequency(hz: number): void;


        /**
         * @method GetDampingRatio
         * @return {number}
         */
        GetDampingRatio(): number;


        /**
         * @method GetFrequency
         * @return {number}
         */
        GetFrequency(): number;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetReferenceAngle
         * @return {number}
         */
        GetReferenceAngle(): number;


    }
}

/**
 * @class b2WheelJoint
 */
declare namespace b2 {
    class b2WheelJoint  extends b2Joint {

        /**
         * @method IsMotorEnabled
         * @return {boolean}
         */
        IsMotorEnabled(): boolean;


        /**
         * @method GetMotorSpeed
         * @return {number}
         */
        GetMotorSpeed(): number;


        /**
         * @method GetAnchorA
         * @return {b2Vec2}
         */
        GetAnchorA(): b2Vec2;


        /**
         * @method GetReactionTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetReactionTorque(inv_dt: number): number;


        /**
         * @method Dump
         */
        Dump(): void;


        /**
         * @method SetSpringDampingRatio
         * @param {number} ratio
         */
        SetSpringDampingRatio(ratio: number): void;


        /**
         * @method GetSpringFrequencyHz
         * @return {number}
         */
        GetSpringFrequencyHz(): number;


        /**
         * @method GetJointTranslation
         * @return {number}
         */
        GetJointTranslation(): number;


        /**
         * @method GetSpringDampingRatio
         * @return {number}
         */
        GetSpringDampingRatio(): number;


        /**
         * @method GetLocalAxisA
         * @return {b2Vec2}
         */
        GetLocalAxisA(): b2Vec2;


        /**
         * @method SetSpringFrequencyHz
         * @param {number} hz
         */
        SetSpringFrequencyHz(hz: number): void;


        /**
         * @method GetLocalAnchorA
         * @return {b2Vec2}
         */
        GetLocalAnchorA(): b2Vec2;


        /**
         * @method SetMotorSpeed
         * @param {number} speed
         */
        SetMotorSpeed(speed: number): void;


        /**
         * @method GetLocalAnchorB
         * @return {b2Vec2}
         */
        GetLocalAnchorB(): b2Vec2;


        /**
         * @method SetMaxMotorTorque
         * @param {number} torque
         */
        SetMaxMotorTorque(torque: number): void;


        /**
         * @method GetAnchorB
         * @return {b2Vec2}
         */
        GetAnchorB(): b2Vec2;


        /**
         * @method GetReactionForce
         * @param {number} inv_dt
         * @return {b2Vec2}
         */
        GetReactionForce(inv_dt: number): b2Vec2;


        /**
         * @method GetMotorTorque
         * @param {number} inv_dt
         * @return {number}
         */
        GetMotorTorque(inv_dt: number): number;


        /**
         * @method GetJointSpeed
         * @return {number}
         */
        GetJointSpeed(): number;


        /**
         * @method GetMaxMotorTorque
         * @return {number}
         */
        GetMaxMotorTorque(): number;


        /**
         * @method EnableMotor
         * @param {boolean} flag
         */
        EnableMotor(flag: boolean): void;


    }
}
