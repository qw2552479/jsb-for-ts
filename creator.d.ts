
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

/**
 * @class AudioProfile
 */
declare namespace jsb {
    class AudioProfile {

        /**
         * @method AudioProfile
         * @constructor
         */
        constructor();


    }
}

/**
 * @class AudioEngine
 */
declare namespace jsb {
    class AudioEngine {

        /**
         * @method lazyInit
         * @return {boolean}
         */
        static lazyInit(): boolean;


        /**
         * @method setCurrentTime
         * @param {number} audioID
         * @param {number} sec
         * @return {boolean}
         */
        static setCurrentTime(audioID: number, sec: number): boolean;


        /**
         * @method getVolume
         * @param {number} audioID
         * @return {number}
         */
        static getVolume(audioID: number): number;


        /**
         * @method uncache
         * @param {string} filePath
         */
        static uncache(filePath: string): void;


        /**
         * @method resumeAll
         */
        static resumeAll(): void;


        /**
         * @method stopAll
         */
        static stopAll(): void;


        /**
         * @method pause
         * @param {number} audioID
         */
        static pause(audioID: number): void;


        /**
         * @method end
         */
        static end(): void;


        /**
         * @method getMaxAudioInstance
         * @return {number}
         */
        static getMaxAudioInstance(): number;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        static isEnabled(): boolean;


        /**
         * @method getCurrentTime
         * @param {number} audioID
         * @return {number}
         */
        static getCurrentTime(audioID: number): number;


        /**
         * @method setMaxAudioInstance
         * @param {number} maxInstances
         * @return {boolean}
         */
        static setMaxAudioInstance(maxInstances: number): boolean;


        /**
         * @method isLoop
         * @param {number} audioID
         * @return {boolean}
         */
        static isLoop(audioID: number): boolean;


        /**
         * @method pauseAll
         */
        static pauseAll(): void;


        /**
         * @method uncacheAll
         */
        static uncacheAll(): void;


        /**
         * @method setVolume
         * @param {number} audioID
         * @param {number} volume
         */
        static setVolume(audioID: number, volume: number): void;


        /**
         * @method preload
        * @param {string|string} filePath
        * @param {Function} callback
*/
        preload(filePath: string, callback: Function): void;



        /**
         * @method setEnabled
         * @param {boolean} isEnabled
         */
        static setEnabled(isEnabled: boolean): void;


        /**
         * @method play2d
         * @param {string} filePath
         * @param {boolean} loop
         * @param {number} volume
         * @param {cc.experimental.AudioProfile} profile
         * @return {number}
         */
        static play2d(filePath: string, loop: boolean, volume: number, profile: cc.experimental.AudioProfile): number;


        /**
         * @method getState
         * @param {number} audioID
         * @return {cc.experimental.AudioEngine.AudioState}
         */
        static getState(audioID: number): cc.experimental.AudioEngine.AudioState;


        /**
         * @method resume
         * @param {number} audioID
         */
        static resume(audioID: number): void;


        /**
         * @method stop
         * @param {number} audioID
         */
        static stop(audioID: number): void;


        /**
         * @method getDuration
         * @param {number} audioID
         * @return {number}
         */
        static getDuration(audioID: number): number;


        /**
         * @method setLoop
         * @param {number} audioID
         * @param {boolean} loop
         */
        static setLoop(audioID: number, loop: boolean): void;


        /**
         * @method getDefaultProfile
         * @return {cc.experimental.AudioProfile}
         */
        static getDefaultProfile(): cc.experimental.AudioProfile;


        /**
         * @method setFinishCallback
         * @param {number} audioID
         * @param {Function} callback
         */
        static setFinishCallback(audioID: number, callback: Function): void;


        /**
         * @method getProfile
        * @param {string|number} profileName
        * @return {cc.experimental.AudioProfile|cc.experimental.AudioProfile}
*/
        getProfile(audioID: number): cc.experimental.AudioProfile|cc.experimental.AudioProfile;



        /**
         * @method getPlayingAudioCount
         * @return {number}
         */
        static getPlayingAudioCount(): number;


    }
}

/**
 * @class Acceleration
 */
declare namespace cc {
    class Acceleration {

        /**
         * @method Acceleration
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Texture2D
 */
declare namespace cc {
    class Texture2D {

        /**
         * @method getGLProgram
         * @return {cc.GLProgram}
         */
        getGLProgram(): cc.GLProgram;


        /**
         * @method getMaxT
         * @return {number}
         */
        getMaxT(): number;


        /**
         * @method setAlphaTexture
         * @param {cc.Texture2D} alphaTexture
         */
        setAlphaTexture(alphaTexture: cc.Texture2D): void;


        /**
         * @method initWithImage
        * @param {cc.Image|cc.Image} image
        * @param {cc.Texture2D.PixelFormat} format
        * @return {boolean|boolean}
*/
        initWithImage(image: cc.Image, format: cc.Texture2D.PixelFormat): boolean|boolean;



        /**
         * @method setGLProgram
         * @param {cc.GLProgram} program
         */
        setGLProgram(program: cc.GLProgram): void;


        /**
         * @method getMaxS
         * @return {number}
         */
        getMaxS(): number;


        /**
         * @method hasPremultipliedAlpha
         * @return {boolean}
         */
        hasPremultipliedAlpha(): boolean;


        /**
         * @method getPixelsHigh
         * @return {number}
         */
        getPixelsHigh(): number;


        /**
         * @method getAlphaTextureName
         * @return {unsigned int}
         */
        getAlphaTextureName(): unsigned int;


        /**
         * @method getName
         * @return {unsigned int}
         */
        getName(): unsigned int;


        /**
         * @method initWithString
        * @param {string|string} text
        * @param {cc.FontDefinition|string} textDefinition
        * @param {number} fontSize
        * @param {cc.Vec2} dimensions
        * @param {cc.TextHAlignment} hAlignment
        * @param {cc.TextVAlignment} vAlignment
        * @param {boolean} enableWrap
        * @param {number} overflow
        * @return {boolean|boolean}
*/
        initWithString(text: string, fontName: string, fontSize: number, dimensions: cc.Vec2, hAlignment: cc.TextHAlignment, vAlignment: cc.TextVAlignment, enableWrap: boolean, overflow: number): boolean|boolean;



        /**
         * @method setMaxT
         * @param {number} maxT
         */
        setMaxT(maxT: number): void;


        /**
         * @method getPath
         * @return {string}
         */
        getPath(): string;


        /**
         * @method drawInRect
         * @param {cc.Rect} rect
         */
        drawInRect(rect: cc.Rect): void;


        /**
         * @method getContentSize
         * @return {cc.Vec2}
         */
        getContentSize(): cc.Vec2;


        /**
         * @method setAliasTexParameters
         */
        setAliasTexParameters(): void;


        /**
         * @method setAntiAliasTexParameters
         */
        setAntiAliasTexParameters(): void;


        /**
         * @method generateMipmap
         */
        generateMipmap(): void;


        /**
         * @method getDescription
         * @return {string}
         */
        getDescription(): string;


        /**
         * @method getPixelFormat
         * @return {cc.Texture2D.PixelFormat}
         */
        getPixelFormat(): cc.Texture2D.PixelFormat;


        /**
         * @method getContentSizeInPixels
         * @return {cc.Vec2}
         */
        getContentSizeInPixels(): cc.Vec2;


        /**
         * @method releaseGLTexture
         */
        releaseGLTexture(): void;


        /**
         * @method getPixelsWide
         * @return {number}
         */
        getPixelsWide(): number;


        /**
         * @method drawAtPoint
         * @param {cc.Vec2} point
         */
        drawAtPoint(point: cc.Vec2): void;


        /**
         * @method hasMipmaps
         * @return {boolean}
         */
        hasMipmaps(): boolean;


        /**
         * @method setMaxS
         * @param {number} maxS
         */
        setMaxS(maxS: number): void;


        /**
         * @method setDefaultAlphaPixelFormat
         * @param {cc.Texture2D.PixelFormat} format
         */
        static setDefaultAlphaPixelFormat(format: cc.Texture2D.PixelFormat): void;


        /**
         * @method getDefaultAlphaPixelFormat
         * @return {cc.Texture2D.PixelFormat}
         */
        static getDefaultAlphaPixelFormat(): cc.Texture2D.PixelFormat;


        /**
         * @method Texture2D
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Touch
 */
declare namespace cc {
    class Touch {

        /**
         * @method getPreviousLocationInView
         * @return {cc.Vec2}
         */
        getPreviousLocationInView(): cc.Vec2;


        /**
         * @method getLocation
         * @return {cc.Vec2}
         */
        getLocation(): cc.Vec2;


        /**
         * @method getDelta
         * @return {cc.Vec2}
         */
        getDelta(): cc.Vec2;


        /**
         * @method getStartLocationInView
         * @return {cc.Vec2}
         */
        getStartLocationInView(): cc.Vec2;


        /**
         * @method getCurrentForce
         * @return {number}
         */
        getCurrentForce(): number;


        /**
         * @method getStartLocation
         * @return {cc.Vec2}
         */
        getStartLocation(): cc.Vec2;


        /**
         * @method getID
         * @return {number}
         */
        getID(): number;


        /**
         * @method setTouchInfo
        * @param {number|number} id
        * @param {number|number} x
        * @param {number|number} y
        * @param {number} force
        * @param {number} maxForce
*/
        setTouchInfo(id: number, x: number, y: number, force: number, maxForce: number): void;



        /**
         * @method getMaxForce
         * @return {number}
         */
        getMaxForce(): number;


        /**
         * @method getLocationInView
         * @return {cc.Vec2}
         */
        getLocationInView(): cc.Vec2;


        /**
         * @method getPreviousLocation
         * @return {cc.Vec2}
         */
        getPreviousLocation(): cc.Vec2;


        /**
         * @method Touch
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Event
 */
declare namespace cc {
    class Event {

        /**
         * @method reset
         */
        reset(): void;


        /**
         * @method getCurrentTarget
         * @return {cc.Node}
         */
        getCurrentTarget(): cc.Node;


        /**
         * @method getType
         * @return {cc.Event.Type}
         */
        getType(): cc.Event.Type;


        /**
         * @method isStopped
         * @return {boolean}
         */
        isStopped(): boolean;


        /**
         * @method stopPropagation
         */
        stopPropagation(): void;


        /**
         * @method Event
         * @constructor
         * @param {cc.Event.Type} type
         */
        constructor(type: cc.Event.Type);


    }
}

/**
 * @class EventTouch
 */
declare namespace cc {
    class EventTouch  extends Event {

        /**
         * @method getEventCode
         * @return {cc.EventTouch.EventCode}
         */
        getEventCode(): cc.EventTouch.EventCode;


        /**
         * @method setTouches
         * @param {any[]} touches
         */
        setTouches(touches: any[]): void;


        /**
         * @method setEventCode
         * @param {cc.EventTouch.EventCode} eventCode
         */
        setEventCode(eventCode: cc.EventTouch.EventCode): void;


        /**
         * @method getTouches
         * @return {any[]}
         */
        getTouches(): any[];


        /**
         * @method EventTouch
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ComponentContainer
 */
declare namespace cc {
    class ComponentContainer {

        /**
         * @method visit
         * @param {number} delta
         */
        visit(delta: number): void;


        /**
         * @method remove
        * @param {cc.Component|string} com
        * @return {boolean|boolean}
*/
        remove(name: string): boolean|boolean;



        /**
         * @method removeAll
         */
        removeAll(): void;


        /**
         * @method add
         * @param {cc.Component} com
         * @return {boolean}
         */
        add(com: cc.Component): boolean;


        /**
         * @method isEmpty
         * @return {boolean}
         */
        isEmpty(): boolean;


        /**
         * @method get
         * @param {string} name
         * @return {cc.Component}
         */
        get(name: string): cc.Component;


    }
}

/**
 * @class Component
 */
declare namespace cc {
    class Component {

        /**
         * @method setEnabled
         * @param {boolean} enabled
         */
        setEnabled(enabled: boolean): void;


        /**
         * @method setName
         * @param {string} name
         */
        setName(name: string): void;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method getOwner
         * @return {cc.Node}
         */
        getOwner(): cc.Node;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method setOwner
         * @param {cc.Node} owner
         */
        setOwner(owner: cc.Node): void;


        /**
         * @method getName
         * @return {string}
         */
        getName(): string;


        /**
         * @method create
         * @return {cc.Component}
         */
        static create(): cc.Component;


        /**
         * @method Component
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Node
 */
declare namespace cc {
    class Node {

        /**
         * @method addChild
        * @param {cc.Node|cc.Node|cc.Node|cc.Node} child
        * @param {number|number|number} localZOrder
        * @param {number|string} tag
*/
        addChild(child: cc.Node, localZOrder: number, name: string): void;



        /**
         * @method removeComponent
        * @param {cc.Component|string} component
        * @return {boolean|boolean}
*/
        removeComponent(name: string): boolean|boolean;



        /**
         * @method getGLProgram
         * @return {cc.GLProgram}
         */
        getGLProgram(): cc.GLProgram;


        /**
         * @method getDescription
         * @return {string}
         */
        getDescription(): string;


        /**
         * @method setOpacityModifyRGB
         * @param {boolean} value
         */
        setOpacityModifyRGB(value: boolean): void;


        /**
         * @method setCascadeOpacityEnabled
         * @param {boolean} cascadeOpacityEnabled
         */
        setCascadeOpacityEnabled(cascadeOpacityEnabled: boolean): void;


        /**
         * @method getChildren
        * @return {any[]|any[]}
*/
        getChildren(): any[]|any[];



        /**
         * @method pause
         */
        pause(): void;


        /**
         * @method convertToWorldSpaceAR
         * @param {cc.Vec2} nodePoint
         * @return {cc.Vec2}
         */
        convertToWorldSpaceAR(nodePoint: cc.Vec2): cc.Vec2;


        /**
         * @method isIgnoreAnchorPointForPosition
         * @return {boolean}
         */
        isIgnoreAnchorPointForPosition(): boolean;


        /**
         * @method getChildByName
         * @param {string} name
         * @return {cc.Node}
         */
        getChildByName(name: string): cc.Node;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method getBeforeVisitCallback
         * @return {Function}
         */
        getBeforeVisitCallback(): Function;


        /**
         * @method getCameraMask
         * @return {unsigned short}
         */
        getCameraMask(): unsigned short;


        /**
         * @method setRotation
         * @param {number} rotation
         */
        setRotation(rotation: number): void;


        /**
         * @method setScaleZ
         * @param {number} scaleZ
         */
        setScaleZ(scaleZ: number): void;


        /**
         * @method setScaleY
         * @param {number} scaleY
         */
        setScaleY(scaleY: number): void;


        /**
         * @method setScaleX
         * @param {number} scaleX
         */
        setScaleX(scaleX: number): void;


        /**
         * @method getColor
         * @return {cc.Color}
         */
        getColor(): cc.Color;


        /**
         * @method removeAllComponents
         */
        removeAllComponents(): void;


        /**
         * @method _setLocalZOrder
         * @param {number} z
         */
        _setLocalZOrder(z: number): void;


        /**
         * @method setCameraMask
         * @param {unsigned short} mask
         * @param {boolean} applyChildren
         */
        setCameraMask(mask: unsigned short, applyChildren: boolean): void;


        /**
         * @method getTag
         * @return {number}
         */
        getTag(): number;


        /**
         * @method setAfterVisitCallback
         * @param {Function} callback
         */
        setAfterVisitCallback(callback: Function): void;


        /**
         * @method getNodeToWorldAffineTransform
         * @return {cc.AffineTransform}
         */
        getNodeToWorldAffineTransform(): cc.AffineTransform;


        /**
         * @method removeChild
         * @param {cc.Node} child
         * @param {boolean} cleanup
         */
        removeChild(child: cc.Node, cleanup: boolean): void;


        /**
         * @method convertToWorldSpace
         * @param {cc.Vec2} nodePoint
         * @return {cc.Vec2}
         */
        convertToWorldSpace(nodePoint: cc.Vec2): cc.Vec2;


        /**
         * @method getScene
         * @return {cc.Scene}
         */
        getScene(): cc.Scene;


        /**
         * @method getEventDispatcher
         * @return {cc.EventDispatcher}
         */
        getEventDispatcher(): cc.EventDispatcher;


        /**
         * @method setSkewX
         * @param {number} skewX
         */
        setSkewX(skewX: number): void;


        /**
         * @method setGLProgramState
         * @param {cc.GLProgramState} glProgramState
         */
        setGLProgramState(glProgramState: cc.GLProgramState): void;


        /**
         * @method stopActionsByFlags
         * @param {unsigned int} flags
         */
        stopActionsByFlags(flags: unsigned int): void;


        /**
         * @method setNormalizedPosition
         * @param {cc.Vec2} position
         */
        setNormalizedPosition(position: cc.Vec2): void;


        /**
         * @method convertTouchToNodeSpace
         * @param {cc.Touch} touch
         * @return {cc.Vec2}
         */
        convertTouchToNodeSpace(touch: cc.Touch): cc.Vec2;


        /**
         * @method removeAllChildrenWithCleanup
        * @param {boolean} cleanup
*/
        removeAllChildrenWithCleanup(cleanup: boolean): void;



        /**
         * @method getRotationSkewX
         * @return {number}
         */
        getRotationSkewX(): number;


        /**
         * @method getRotationSkewY
         * @return {number}
         */
        getRotationSkewY(): number;


        /**
         * @method getNodeToWorldTransform
         * @return {cc.AffineTransform}
         */
        getNodeToWorldTransform(): cc.AffineTransform;


        /**
         * @method isCascadeOpacityEnabled
         * @return {boolean}
         */
        isCascadeOpacityEnabled(): boolean;


        /**
         * @method setParent
         * @param {cc.Node} parent
         */
        setParent(parent: cc.Node): void;


        /**
         * @method getName
         * @return {string}
         */
        getName(): string;


        /**
         * @method resume
         */
        resume(): void;


        /**
         * @method getNodeToParentAffineTransform
        * @param {cc.Node} ancestor
        * @return {cc.AffineTransform|cc.AffineTransform}
*/
        getNodeToParentAffineTransform(ancestor: cc.Node): cc.AffineTransform|cc.AffineTransform;



        /**
         * @method getAfterVisitCallback
         * @return {Function}
         */
        getAfterVisitCallback(): Function;


        /**
         * @method isOpacityModifyRGB
         * @return {boolean}
         */
        isOpacityModifyRGB(): boolean;


        /**
         * @method stopActionByTag
         * @param {number} tag
         */
        stopActionByTag(tag: number): void;


        /**
         * @method reorderChild
         * @param {cc.Node} child
         * @param {number} localZOrder
         */
        reorderChild(child: cc.Node, localZOrder: number): void;


        /**
         * @method setSkewY
         * @param {number} skewY
         */
        setSkewY(skewY: number): void;


        /**
         * @method setColor
         * @param {cc.Color} color
         */
        setColor(color: cc.Color): void;


        /**
         * @method setPositionY
         * @param {number} y
         */
        setPositionY(y: number): void;


        /**
         * @method setPositionX
         * @param {number} x
         */
        setPositionX(x: number): void;


        /**
         * @method setNodeToParentTransform
         * @param {cc.AffineTransform} transform
         */
        setNodeToParentTransform(transform: cc.AffineTransform): void;


        /**
         * @method getAnchorPoint
         * @return {cc.Vec2}
         */
        getAnchorPoint(): cc.Vec2;


        /**
         * @method getNumberOfRunningActions
         * @return {number}
         */
        getNumberOfRunningActions(): number;


        /**
         * @method isVisible
         * @return {boolean}
         */
        isVisible(): boolean;


        /**
         * @method getChildrenCount
         * @return {number}
         */
        getChildrenCount(): number;


        /**
         * @method getNodeToParentTransform
        * @param {cc.Node} ancestor
        * @return {cc.AffineTransform|cc.AffineTransform}
*/
        getNodeToParentTransform(ancestor: cc.Node): cc.AffineTransform|cc.AffineTransform;



        /**
         * @method convertToNodeSpaceAR
         * @param {cc.Vec2} worldPoint
         * @return {cc.Vec2}
         */
        convertToNodeSpaceAR(worldPoint: cc.Vec2): cc.Vec2;


        /**
         * @method addComponent
         * @param {cc.Component} component
         * @return {boolean}
         */
        addComponent(component: cc.Component): boolean;


        /**
         * @method visit
        * @param {cc.Renderer} renderer
        * @param {cc.AffineTransform} parentTransform
        * @param {unsigned int} parentFlags
*/
        visit(renderer: cc.Renderer, parentTransform: cc.AffineTransform, parentFlags: unsigned int): void;



        /**
         * @method setGLProgram
         * @param {cc.GLProgram} glprogram
         */
        setGLProgram(glprogram: cc.GLProgram): void;


        /**
         * @method getRotation
         * @return {number}
         */
        getRotation(): number;


        /**
         * @method getAnchorPointInPoints
         * @return {cc.Vec2}
         */
        getAnchorPointInPoints(): cc.Vec2;


        /**
         * @method runAction
         * @param {cc.Action} action
         * @return {cc.Action}
         */
        runAction(action: cc.Action): cc.Action;


        /**
         * @method removeChildByName
         * @param {string} name
         * @param {boolean} cleanup
         */
        removeChildByName(name: string, cleanup: boolean): void;


        /**
         * @method setPositionZ
         * @param {number} positionZ
         */
        setPositionZ(positionZ: number): void;


        /**
         * @method getGLProgramState
         * @return {cc.GLProgramState}
         */
        getGLProgramState(): cc.GLProgramState;


        /**
         * @method setScheduler
         * @param {cc.Scheduler} scheduler
         */
        setScheduler(scheduler: cc.Scheduler): void;


        /**
         * @method stopAllActions
         */
        stopAllActions(): void;


        /**
         * @method getSkewX
         * @return {number}
         */
        getSkewX(): number;


        /**
         * @method getSkewY
         * @return {number}
         */
        getSkewY(): number;


        /**
         * @method getDisplayedColor
         * @return {cc.Color}
         */
        getDisplayedColor(): cc.Color;


        /**
         * @method getActionByTag
         * @param {number} tag
         * @return {cc.Action}
         */
        getActionByTag(tag: number): cc.Action;


        /**
         * @method setRotationSkewX
         * @param {number} rotationX
         */
        setRotationSkewX(rotationX: number): void;


        /**
         * @method setRotationSkewY
         * @param {number} rotationY
         */
        setRotationSkewY(rotationY: number): void;


        /**
         * @method setName
         * @param {string} name
         */
        setName(name: string): void;


        /**
         * @method getDisplayedOpacity
         * @return {string}
         */
        getDisplayedOpacity(): string;


        /**
         * @method getLocalZOrder
         * @return {number}
         */
        getLocalZOrder(): number;


        /**
         * @method getScheduler
        * @return {cc.Scheduler|cc.Scheduler}
*/
        getScheduler(): cc.Scheduler|cc.Scheduler;



        /**
         * @method setBeforeVisitCallback
         * @param {Function} callback
         */
        setBeforeVisitCallback(callback: Function): void;


        /**
         * @method setActionManager
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager: cc.ActionManager): void;


        /**
         * @method getPosition
        * @param {number} x
        * @param {number} y
        * @return {cc.Vec2}
*/
        getPosition(x: number, y: number): cc.Vec2;



        /**
         * @method insertChildBefore
         * @param {cc.Node} child
         * @param {cc.Node} relativeChild
         */
        insertChildBefore(child: cc.Node, relativeChild: cc.Node): void;


        /**
         * @method isRunning
         * @return {boolean}
         */
        isRunning(): boolean;


        /**
         * @method getParent
        * @return {cc.Node|cc.Node}
*/
        getParent(): cc.Node|cc.Node;



        /**
         * @method getWorldToNodeTransform
         * @return {cc.AffineTransform}
         */
        getWorldToNodeTransform(): cc.AffineTransform;


        /**
         * @method getPositionY
         * @return {number}
         */
        getPositionY(): number;


        /**
         * @method getPositionX
         * @return {number}
         */
        getPositionX(): number;


        /**
         * @method removeChildByTag
         * @param {number} tag
         * @param {boolean} cleanup
         */
        removeChildByTag(tag: number, cleanup: boolean): void;


        /**
         * @method setVisible
         * @param {boolean} visible
         */
        setVisible(visible: boolean): void;


        /**
         * @method getParentToNodeAffineTransform
         * @return {cc.AffineTransform}
         */
        getParentToNodeAffineTransform(): cc.AffineTransform;


        /**
         * @method getPositionZ
         * @return {number}
         */
        getPositionZ(): number;


        /**
         * @method setGlobalZOrder
         * @param {number} globalZOrder
         */
        setGlobalZOrder(globalZOrder: number): void;


        /**
         * @method setScale
        * @param {number|number} scaleX
        * @param {number} scaleY
*/
        setScale(scaleX: number, scaleY: number): void;



        /**
         * @method getChildByTag
         * @param {number} tag
         * @return {cc.Node}
         */
        getChildByTag(tag: number): cc.Node;


        /**
         * @method getScaleZ
         * @return {number}
         */
        getScaleZ(): number;


        /**
         * @method getScaleY
         * @return {number}
         */
        getScaleY(): number;


        /**
         * @method getScaleX
         * @return {number}
         */
        getScaleX(): number;


        /**
         * @method setLocalZOrder
         * @param {number} localZOrder
         */
        setLocalZOrder(localZOrder: number): void;


        /**
         * @method setCascadeColorEnabled
         * @param {boolean} cascadeColorEnabled
         */
        setCascadeColorEnabled(cascadeColorEnabled: boolean): void;


        /**
         * @method setOpacity
         * @param {string} opacity
         */
        setOpacity(opacity: string): void;


        /**
         * @method getComponent
         * @param {string} name
         * @return {cc.Component}
         */
        getComponent(name: string): cc.Component;


        /**
         * @method getContentSize
         * @return {cc.Vec2}
         */
        getContentSize(): cc.Vec2;


        /**
         * @method stopAllActionsByTag
         * @param {number} tag
         */
        stopAllActionsByTag(tag: number): void;


        /**
         * @method getBoundingBox
         * @return {cc.Rect}
         */
        getBoundingBox(): cc.Rect;


        /**
         * @method setIgnoreAnchorPointForPosition
         * @param {boolean} ignore
         */
        setIgnoreAnchorPointForPosition(ignore: boolean): void;


        /**
         * @method setEventDispatcher
         * @param {cc.EventDispatcher} dispatcher
         */
        setEventDispatcher(dispatcher: cc.EventDispatcher): void;


        /**
         * @method getGlobalZOrder
         * @return {number}
         */
        getGlobalZOrder(): number;


        /**
         * @method draw
        * @param {cc.Renderer} renderer
        * @param {cc.AffineTransform} transform
        * @param {unsigned int} flags
*/
        draw(renderer: cc.Renderer, transform: cc.AffineTransform, flags: unsigned int): void;



        /**
         * @method setUserObject
         * @param {cc.Ref} userObject
         */
        setUserObject(userObject: cc.Ref): void;


        /**
         * @method enumerateChildren
         * @param {string} name
         * @param {Function} callback
         */
        enumerateChildren(name: string, callback: Function): void;


        /**
         * @method removeFromParentAndCleanup
        * @param {boolean} cleanup
*/
        removeFromParentAndCleanup(cleanup: boolean): void;



        /**
         * @method convertTouchToNodeSpaceAR
         * @param {cc.Touch} touch
         * @return {cc.Vec2}
         */
        convertTouchToNodeSpaceAR(touch: cc.Touch): cc.Vec2;


        /**
         * @method sortAllChildren
         */
        sortAllChildren(): void;


        /**
         * @method getWorldToNodeAffineTransform
         * @return {cc.AffineTransform}
         */
        getWorldToNodeAffineTransform(): cc.AffineTransform;


        /**
         * @method getScale
         * @return {number}
         */
        getScale(): number;


        /**
         * @method getOpacity
         * @return {string}
         */
        getOpacity(): string;


        /**
         * @method getNormalizedPosition
         * @return {cc.Vec2}
         */
        getNormalizedPosition(): cc.Vec2;


        /**
         * @method getParentToNodeTransform
         * @return {cc.AffineTransform}
         */
        getParentToNodeTransform(): cc.AffineTransform;


        /**
         * @method convertToNodeSpace
         * @param {cc.Vec2} worldPoint
         * @return {cc.Vec2}
         */
        convertToNodeSpace(worldPoint: cc.Vec2): cc.Vec2;


        /**
         * @method setTag
         * @param {number} tag
         */
        setTag(tag: number): void;


        /**
         * @method isCascadeColorEnabled
         * @return {boolean}
         */
        isCascadeColorEnabled(): boolean;


        /**
         * @method markCullingDirty
         */
        markCullingDirty(): void;


        /**
         * @method stopAction
         * @param {cc.Action} action
         */
        stopAction(action: cc.Action): void;


        /**
         * @method getActionManager
        * @return {cc.ActionManager|cc.ActionManager}
*/
        getActionManager(): cc.ActionManager|cc.ActionManager;



        /**
         * @method create
         * @return {cc.Node}
         */
        static create(): cc.Node;


        /**
         * @method Node
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Scene
 */
declare namespace cc {
    class Scene  extends Node {

        /**
         * @method initWithSize
         * @param {cc.Vec2} size
         * @return {boolean}
         */
        initWithSize(size: cc.Vec2): boolean;


        /**
         * @method render
         * @param {cc.Renderer} renderer
         * @param {cc.AffineTransform} eyeTransform
         * @param {cc.AffineTransform} eyeProjection
         */
        render(renderer: cc.Renderer, eyeTransform: cc.AffineTransform, eyeProjection: cc.AffineTransform): void;


        /**
         * @method createWithSize
         * @param {cc.Vec2} size
         * @return {cc.Scene}
         */
        static createWithSize(size: cc.Vec2): cc.Scene;


        /**
         * @method create
         * @return {cc.Scene}
         */
        static create(): cc.Scene;


        /**
         * @method Scene
         * @constructor
         */
        constructor();


    }
}

/**
 * @class GLView
 */
declare namespace cc {
    class GLView {

        /**
         * @method setFrameSize
         * @param {number} width
         * @param {number} height
         */
        setFrameSize(width: number, height: number): void;


        /**
         * @method getViewPortRect
         * @return {cc.Rect}
         */
        getViewPortRect(): cc.Rect;


        /**
         * @method setContentScaleFactor
         * @param {number} scaleFactor
         * @return {boolean}
         */
        setContentScaleFactor(scaleFactor: number): boolean;


        /**
         * @method getContentScaleFactor
         * @return {number}
         */
        getContentScaleFactor(): number;


        /**
         * @method setIMEKeyboardState
         * @param {boolean} open
         */
        setIMEKeyboardState(open: boolean): void;


        /**
         * @method getSafeAreaRect
         * @return {cc.Rect}
         */
        getSafeAreaRect(): cc.Rect;


        /**
         * @method setScissorInPoints
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        setScissorInPoints(x: number, y: number, w: number, h: number): void;


        /**
         * @method getViewName
         * @return {string}
         */
        getViewName(): string;


        /**
         * @method isOpenGLReady
         * @return {boolean}
         */
        isOpenGLReady(): boolean;


        /**
         * @method setCursorVisible
         * @param {boolean} isVisible
         */
        setCursorVisible(isVisible: boolean): void;


        /**
         * @method getScaleY
         * @return {number}
         */
        getScaleY(): number;


        /**
         * @method getScaleX
         * @return {number}
         */
        getScaleX(): number;


        /**
         * @method getVisibleOrigin
         * @return {cc.Vec2}
         */
        getVisibleOrigin(): cc.Vec2;


        /**
         * @method getFrameSize
         * @return {cc.Vec2}
         */
        getFrameSize(): cc.Vec2;


        /**
         * @method setFrameZoomFactor
         * @param {number} zoomFactor
         */
        setFrameZoomFactor(zoomFactor: number): void;


        /**
         * @method getFrameZoomFactor
         * @return {number}
         */
        getFrameZoomFactor(): number;


        /**
         * @method getDesignResolutionSize
         * @return {cc.Vec2}
         */
        getDesignResolutionSize(): cc.Vec2;


        /**
         * @method windowShouldClose
         * @return {boolean}
         */
        windowShouldClose(): boolean;


        /**
         * @method setDesignResolutionSize
         * @param {number} width
         * @param {number} height
         * @param {ResolutionPolicy} resolutionPolicy
         */
        setDesignResolutionSize(width: number, height: number, resolutionPolicy: ResolutionPolicy): void;


        /**
         * @method getResolutionPolicy
         * @return {ResolutionPolicy}
         */
        getResolutionPolicy(): ResolutionPolicy;


        /**
         * @method isRetinaDisplay
         * @return {boolean}
         */
        isRetinaDisplay(): boolean;


        /**
         * @method renderScene
         * @param {cc.Scene} scene
         * @param {cc.Renderer} renderer
         */
        renderScene(scene: cc.Scene, renderer: cc.Renderer): void;


        /**
         * @method setViewPortInPoints
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        setViewPortInPoints(x: number, y: number, w: number, h: number): void;


        /**
         * @method getScissorRect
         * @return {cc.Rect}
         */
        getScissorRect(): cc.Rect;


        /**
         * @method enableAntiAlias
         * @param {boolean} enabled
         */
        enableAntiAlias(enabled: boolean): void;


        /**
         * @method getRetinaFactor
         * @return {number}
         */
        getRetinaFactor(): number;


        /**
         * @method setViewName
         * @param {string} viewname
         */
        setViewName(viewname: string): void;


        /**
         * @method getVisibleRect
         * @return {cc.Rect}
         */
        getVisibleRect(): cc.Rect;


        /**
         * @method getVisibleSize
         * @return {cc.Vec2}
         */
        getVisibleSize(): cc.Vec2;


        /**
         * @method isScissorEnabled
         * @return {boolean}
         */
        isScissorEnabled(): boolean;


        /**
         * @method pollEvents
         */
        pollEvents(): void;


        /**
         * @method isAntiAliasEnabled
         * @return {boolean}
         */
        isAntiAliasEnabled(): boolean;


    }
}

/**
 * @class Director
 */
declare namespace cc {
    class Director {

        /**
         * @method pause
         */
        pause(): void;


        /**
         * @method isPurgeDirectorInNextLoop
         * @return {boolean}
         */
        isPurgeDirectorInNextLoop(): boolean;


        /**
         * @method setEventDispatcher
         * @param {cc.EventDispatcher} dispatcher
         */
        setEventDispatcher(dispatcher: cc.EventDispatcher): void;


        /**
         * @method setContentScaleFactor
         * @param {number} scaleFactor
         */
        setContentScaleFactor(scaleFactor: number): void;


        /**
         * @method getDeltaTime
         * @return {number}
         */
        getDeltaTime(): number;


        /**
         * @method getContentScaleFactor
         * @return {number}
         */
        getContentScaleFactor(): number;


        /**
         * @method getWinSizeInPixels
         * @return {cc.Vec2}
         */
        getWinSizeInPixels(): cc.Vec2;


        /**
         * @method getSafeAreaRect
         * @return {cc.Rect}
         */
        getSafeAreaRect(): cc.Rect;


        /**
         * @method isCullingEnabled
         * @return {boolean}
         */
        isCullingEnabled(): boolean;


        /**
         * @method setGLDefaultValues
         */
        setGLDefaultValues(): void;


        /**
         * @method setActionManager
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager: cc.ActionManager): void;


        /**
         * @method setAlphaBlending
         * @param {boolean} on
         */
        setAlphaBlending(on: boolean): void;


        /**
         * @method popToRootScene
         */
        popToRootScene(): void;


        /**
         * @method loadMatrix
         * @param {cc.MATRIX_STACK_TYPE} type
         * @param {cc.AffineTransform} mat
         */
        loadMatrix(type: cc.MATRIX_STACK_TYPE, mat: cc.AffineTransform): void;


        /**
         * @method setCullingEnabled
         * @param {boolean} enable
         */
        setCullingEnabled(enable: boolean): void;


        /**
         * @method getNotificationNode
         * @return {cc.Node}
         */
        getNotificationNode(): cc.Node;


        /**
         * @method getWinSize
         * @return {cc.Vec2}
         */
        getWinSize(): cc.Vec2;


        /**
         * @method end
         */
        end(): void;


        /**
         * @method getTextureCache
         * @return {cc.TextureCache}
         */
        getTextureCache(): cc.TextureCache;


        /**
         * @method isSendCleanupToScene
         * @return {boolean}
         */
        isSendCleanupToScene(): boolean;


        /**
         * @method getVisibleOrigin
         * @return {cc.Vec2}
         */
        getVisibleOrigin(): cc.Vec2;


        /**
         * @method mainLoop
         */
        mainLoop(): void;


        /**
         * @method setDepthTest
         * @param {boolean} on
         */
        setDepthTest(on: boolean): void;


        /**
         * @method getFrameRate
         * @return {number}
         */
        getFrameRate(): number;


        /**
         * @method getSecondsPerFrame
         * @return {number}
         */
        getSecondsPerFrame(): number;


        /**
         * @method resetMatrixStack
         */
        resetMatrixStack(): void;


        /**
         * @method convertToUI
         * @param {cc.Vec2} point
         * @return {cc.Vec2}
         */
        convertToUI(point: cc.Vec2): cc.Vec2;


        /**
         * @method pushMatrix
        * @param {cc.MATRIX_STACK_TYPE|cc.MATRIX_STACK_TYPE} type
        * @param {cc.AffineTransform} mat
*/
        pushMatrix(type: cc.MATRIX_STACK_TYPE, mat: cc.AffineTransform): void;



        /**
         * @method setDefaultValues
         */
        setDefaultValues(): void;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method setScheduler
         * @param {cc.Scheduler} scheduler
         */
        setScheduler(scheduler: cc.Scheduler): void;


        /**
         * @method getMatrix
         * @param {cc.MATRIX_STACK_TYPE} type
         * @return {cc.AffineTransform}
         */
        getMatrix(type: cc.MATRIX_STACK_TYPE): cc.AffineTransform;


        /**
         * @method isValid
         * @return {boolean}
         */
        isValid(): boolean;


        /**
         * @method startAnimation
         */
        startAnimation(): void;


        /**
         * @method getOpenGLView
         * @return {cc.GLView}
         */
        getOpenGLView(): cc.GLView;


        /**
         * @method getRunningScene
         * @return {cc.Scene}
         */
        getRunningScene(): cc.Scene;


        /**
         * @method setViewport
         */
        setViewport(): void;


        /**
         * @method stopAnimation
         */
        stopAnimation(): void;


        /**
         * @method popToSceneStackLevel
         * @param {number} level
         */
        popToSceneStackLevel(level: number): void;


        /**
         * @method resume
         */
        resume(): void;


        /**
         * @method isNextDeltaTimeZero
         * @return {boolean}
         */
        isNextDeltaTimeZero(): boolean;


        /**
         * @method setClearColor
         * @param {cc.Color} clearColor
         */
        setClearColor(clearColor: cc.Color): void;


        /**
         * @method setOpenGLView
         * @param {cc.GLView} openGLView
         */
        setOpenGLView(openGLView: cc.GLView): void;


        /**
         * @method convertToGL
         * @param {cc.Vec2} point
         * @return {cc.Vec2}
         */
        convertToGL(point: cc.Vec2): cc.Vec2;


        /**
         * @method purgeCachedData
         */
        purgeCachedData(): void;


        /**
         * @method getTotalFrames
         * @return {unsigned int}
         */
        getTotalFrames(): unsigned int;


        /**
         * @method runWithScene
         * @param {cc.Scene} scene
         */
        runWithScene(scene: cc.Scene): void;


        /**
         * @method setNotificationNode
         * @param {cc.Node} node
         */
        setNotificationNode(node: cc.Node): void;


        /**
         * @method drawScene
         */
        drawScene(): void;


        /**
         * @method restart
         */
        restart(): void;


        /**
         * @method popScene
         */
        popScene(): void;


        /**
         * @method loadIdentityMatrix
         * @param {cc.MATRIX_STACK_TYPE} type
         */
        loadIdentityMatrix(type: cc.MATRIX_STACK_TYPE): void;


        /**
         * @method isDisplayStats
         * @return {boolean}
         */
        isDisplayStats(): boolean;


        /**
         * @method setProjection
         * @param {cc.Director.Projection} projection
         */
        setProjection(projection: cc.Director.Projection): void;


        /**
         * @method multiplyMatrix
         * @param {cc.MATRIX_STACK_TYPE} type
         * @param {cc.AffineTransform} mat
         */
        multiplyMatrix(type: cc.MATRIX_STACK_TYPE, mat: cc.AffineTransform): void;


        /**
         * @method getZEye
         * @return {number}
         */
        getZEye(): number;


        /**
         * @method setNextDeltaTimeZero
         * @param {boolean} nextDeltaTimeZero
         */
        setNextDeltaTimeZero(nextDeltaTimeZero: boolean): void;


        /**
         * @method popMatrix
         * @param {cc.MATRIX_STACK_TYPE} type
         */
        popMatrix(type: cc.MATRIX_STACK_TYPE): void;


        /**
         * @method getVisibleSize
         * @return {cc.Vec2}
         */
        getVisibleSize(): cc.Vec2;


        /**
         * @method getScheduler
         * @return {cc.Scheduler}
         */
        getScheduler(): cc.Scheduler;


        /**
         * @method pushScene
         * @param {cc.Scene} scene
         */
        pushScene(scene: cc.Scene): void;


        /**
         * @method getAnimationInterval
         * @return {number}
         */
        getAnimationInterval(): number;


        /**
         * @method isPaused
         * @return {boolean}
         */
        isPaused(): boolean;


        /**
         * @method setDisplayStats
         * @param {boolean} displayStats
         */
        setDisplayStats(displayStats: boolean): void;


        /**
         * @method getEventDispatcher
         * @return {cc.EventDispatcher}
         */
        getEventDispatcher(): cc.EventDispatcher;


        /**
         * @method replaceScene
         * @param {cc.Scene} scene
         */
        replaceScene(scene: cc.Scene): void;


        /**
         * @method setAnimationInterval
         * @param {number} interval
         */
        setAnimationInterval(interval: number): void;


        /**
         * @method getActionManager
         * @return {cc.ActionManager}
         */
        getActionManager(): cc.ActionManager;


        /**
         * @method getInstance
         * @return {cc.Director}
         */
        static getInstance(): cc.Director;


    }
}

/**
 * @class Scheduler
 */
declare namespace cc {
    class Scheduler {

        /**
         * @method setTimeScale
         * @param {number} timeScale
         */
        setTimeScale(timeScale: number): void;


        /**
         * @method isCurrentTargetSalvaged
         * @return {boolean}
         */
        isCurrentTargetSalvaged(): boolean;


        /**
         * @method update
         * @param {number} dt
         */
        update(dt: number): void;


        /**
         * @method unscheduleScriptEntry
         * @param {unsigned int} scheduleScriptEntryID
         */
        unscheduleScriptEntry(scheduleScriptEntryID: unsigned int): void;


        /**
         * @method unscheduleAll
         */
        unscheduleAll(): void;


        /**
         * @method getTimeScale
         * @return {number}
         */
        getTimeScale(): number;


        /**
         * @method unscheduleAllWithMinPriority
         * @param {number} minPriority
         */
        unscheduleAllWithMinPriority(minPriority: number): void;


        /**
         * @method removeAllFunctionsToBePerformedInCocosThread
         */
        removeAllFunctionsToBePerformedInCocosThread(): void;


        /**
         * @method Scheduler
         * @constructor
         */
        constructor();


    }
}

/**
 * @class AsyncTaskPool
 */
declare namespace cc {
    class AsyncTaskPool {

        /**
         * @method stopTasks
         * @param {cc.AsyncTaskPool.TaskType} type
         */
        stopTasks(type: cc.AsyncTaskPool.TaskType): void;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {cc.AsyncTaskPool}
         */
        static getInstance(): cc.AsyncTaskPool;


    }
}

/**
 * @class Configuration
 */
declare namespace cc {
    class Configuration {

        /**
         * @method supportsPVRTC
         * @return {boolean}
         */
        supportsPVRTC(): boolean;


        /**
         * @method supportsOESDepth24
         * @return {boolean}
         */
        supportsOESDepth24(): boolean;


        /**
         * @method getMaxModelviewStackDepth
         * @return {number}
         */
        getMaxModelviewStackDepth(): number;


        /**
         * @method supportsShareableVAO
         * @return {boolean}
         */
        supportsShareableVAO(): boolean;


        /**
         * @method supportsBGRA8888
         * @return {boolean}
         */
        supportsBGRA8888(): boolean;


        /**
         * @method checkForGLExtension
         * @param {string} searchName
         * @return {boolean}
         */
        checkForGLExtension(searchName: string): boolean;


        /**
         * @method supportsNPOT
         * @return {boolean}
         */
        supportsNPOT(): boolean;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method getMaxSupportPointLightInShader
         * @return {number}
         */
        getMaxSupportPointLightInShader(): number;


        /**
         * @method getMaxTextureSize
         * @return {number}
         */
        getMaxTextureSize(): number;


        /**
         * @method setValue
         * @param {string} key
         * @param {cc.Value} value
         */
        setValue(key: string, value: cc.Value): void;


        /**
         * @method getMaxSupportSpotLightInShader
         * @return {number}
         */
        getMaxSupportSpotLightInShader(): number;


        /**
         * @method supportsETC
         * @return {boolean}
         */
        supportsETC(): boolean;


        /**
         * @method getMaxSupportDirLightInShader
         * @return {number}
         */
        getMaxSupportDirLightInShader(): number;


        /**
         * @method loadConfigFile
         * @param {string} filename
         */
        loadConfigFile(filename: string): void;


        /**
         * @method supportsDiscardFramebuffer
         * @return {boolean}
         */
        supportsDiscardFramebuffer(): boolean;


        /**
         * @method supportsOESPackedDepthStencil
         * @return {boolean}
         */
        supportsOESPackedDepthStencil(): boolean;


        /**
         * @method getInfo
         * @return {string}
         */
        getInfo(): string;


        /**
         * @method getMaxTextureUnits
         * @return {number}
         */
        getMaxTextureUnits(): number;


        /**
         * @method getValue
         * @param {string} key
         * @param {cc.Value} defaultValue
         * @return {cc.Value}
         */
        getValue(key: string, defaultValue: cc.Value): cc.Value;


        /**
         * @method gatherGPUInfo
         */
        gatherGPUInfo(): void;


        /**
         * @method supportsMapBuffer
         * @return {boolean}
         */
        supportsMapBuffer(): boolean;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {cc.Configuration}
         */
        static getInstance(): cc.Configuration;


    }
}

/**
 * @class FileUtils
 */
declare namespace cc {
    class FileUtils {

        /**
         * @method writeDataToFile
         * @param {cc.Data} data
         * @param {string} fullPath
         * @return {boolean}
         */
        writeDataToFile(data: cc.Data, fullPath: string): boolean;


        /**
         * @method fullPathForFilename
         * @param {string} filename
         * @return {string}
         */
        fullPathForFilename(filename: string): string;


        /**
         * @method getStringFromFile
         * @param {string} filename
         * @return {string}
         */
        getStringFromFile(filename: string): string;


        /**
         * @method removeFile
         * @param {string} filepath
         * @return {boolean}
         */
        removeFile(filepath: string): boolean;


        /**
         * @method getDataFromFile
         * @param {string} filename
         * @return {cc.Data}
         */
        getDataFromFile(filename: string): cc.Data;


        /**
         * @method isAbsolutePath
         * @param {string} path
         * @return {boolean}
         */
        isAbsolutePath(path: string): boolean;


        /**
         * @method renameFile
        * @param {string|string} oldfullpath
        * @param {string|string} newfullpath
        * @param {string} name
        * @return {boolean|boolean}
*/
        renameFile(path: string, oldname: string, name: string): boolean|boolean;



        /**
         * @method loadFilenameLookupDictionaryFromFile
         * @param {string} filename
         */
        loadFilenameLookupDictionaryFromFile(filename: string): void;


        /**
         * @method isPopupNotify
         * @return {boolean}
         */
        isPopupNotify(): boolean;


        /**
         * @method getValueVectorFromFile
         * @param {string} filename
         * @return {any[]}
         */
        getValueVectorFromFile(filename: string): any[];


        /**
         * @method getSearchPaths
         * @return {any[]}
         */
        getSearchPaths(): any[];


        /**
         * @method writeToFile
         * @param {{}} dict
         * @param {string} fullPath
         * @return {boolean}
         */
        writeToFile(dict: {}, fullPath: string): boolean;


        /**
         * @method listFiles
         * @param {string} dirPath
         * @return {any[]}
         */
        listFiles(dirPath: string): any[];


        /**
         * @method getValueMapFromFile
         * @param {string} filename
         * @return {{}}
         */
        getValueMapFromFile(filename: string): {};


        /**
         * @method getFileSize
         * @param {string} filepath
         * @return {number}
         */
        getFileSize(filepath: string): number;


        /**
         * @method getValueMapFromData
         * @param {string} filedata
         * @param {number} filesize
         * @return {{}}
         */
        getValueMapFromData(filedata: string, filesize: number): {};


        /**
         * @method removeDirectory
         * @param {string} dirPath
         * @return {boolean}
         */
        removeDirectory(dirPath: string): boolean;


        /**
         * @method setSearchPaths
         * @param {any[]} searchPaths
         */
        setSearchPaths(searchPaths: any[]): void;


        /**
         * @method writeStringToFile
         * @param {string} dataStr
         * @param {string} fullPath
         * @return {boolean}
         */
        writeStringToFile(dataStr: string, fullPath: string): boolean;


        /**
         * @method setSearchResolutionsOrder
         * @param {any[]} searchResolutionsOrder
         */
        setSearchResolutionsOrder(searchResolutionsOrder: any[]): void;


        /**
         * @method addSearchResolutionsOrder
         * @param {string} order
         * @param {boolean} front
         */
        addSearchResolutionsOrder(order: string, front: boolean): void;


        /**
         * @method addSearchPath
         * @param {string} path
         * @param {boolean} front
         */
        addSearchPath(path: string, front: boolean): void;


        /**
         * @method writeValueVectorToFile
         * @param {any[]} vecData
         * @param {string} fullPath
         * @return {boolean}
         */
        writeValueVectorToFile(vecData: any[], fullPath: string): boolean;


        /**
         * @method isFileExist
         * @param {string} filename
         * @return {boolean}
         */
        isFileExist(filename: string): boolean;


        /**
         * @method purgeCachedEntries
         */
        purgeCachedEntries(): void;


        /**
         * @method fullPathFromRelativeFile
         * @param {string} filename
         * @param {string} relativeFile
         * @return {string}
         */
        fullPathFromRelativeFile(filename: string, relativeFile: string): string;


        /**
         * @method getSuitableFOpen
         * @param {string} filenameUtf8
         * @return {string}
         */
        getSuitableFOpen(filenameUtf8: string): string;


        /**
         * @method writeValueMapToFile
         * @param {{}} dict
         * @param {string} fullPath
         * @return {boolean}
         */
        writeValueMapToFile(dict: {}, fullPath: string): boolean;


        /**
         * @method getFileExtension
         * @param {string} filePath
         * @return {string}
         */
        getFileExtension(filePath: string): string;


        /**
         * @method setWritablePath
         * @param {string} writablePath
         */
        setWritablePath(writablePath: string): void;


        /**
         * @method setPopupNotify
         * @param {boolean} notify
         */
        setPopupNotify(notify: boolean): void;


        /**
         * @method isDirectoryExist
         * @param {string} dirPath
         * @return {boolean}
         */
        isDirectoryExist(dirPath: string): boolean;


        /**
         * @method setDefaultResourceRootPath
         * @param {string} path
         */
        setDefaultResourceRootPath(path: string): void;


        /**
         * @method getSearchResolutionsOrder
         * @return {any[]}
         */
        getSearchResolutionsOrder(): any[];


        /**
         * @method createDirectory
         * @param {string} dirPath
         * @return {boolean}
         */
        createDirectory(dirPath: string): boolean;


        /**
         * @method listFilesRecursively
         * @param {string} dirPath
         * @param {any[]} files
         */
        listFilesRecursively(dirPath: string, files: any[]): void;


        /**
         * @method getWritablePath
         * @return {string}
         */
        getWritablePath(): string;


        /**
         * @method setDelegate
         * @param {cc.FileUtils} delegate
         */
        static setDelegate(delegate: cc.FileUtils): void;


        /**
         * @method getInstance
         * @return {cc.FileUtils}
         */
        static getInstance(): cc.FileUtils;


    }
}

/**
 * @class EventAcceleration
 */
declare namespace cc {
    class EventAcceleration  extends Event {

        /**
         * @method EventAcceleration
         * @constructor
         * @param {cc.Acceleration} acc
         */
        constructor(acc: cc.Acceleration);


    }
}

/**
 * @class EventCustom
 */
declare namespace cc {
    class EventCustom  extends Event {

        /**
         * @method getEventName
         * @return {string}
         */
        getEventName(): string;


        /**
         * @method EventCustom
         * @constructor
         * @param {string} eventName
         */
        constructor(eventName: string);


    }
}

/**
 * @class EventListener
 */
declare namespace cc {
    class EventListener {

        /**
         * @method setEnabled
         * @param {boolean} enabled
         */
        setEnabled(enabled: boolean): void;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method clone
         * @return {cc.EventListener}
         */
        clone(): cc.EventListener;


        /**
         * @method checkAvailable
         * @return {boolean}
         */
        checkAvailable(): boolean;


    }
}

/**
 * @class EventDispatcher
 */
declare namespace cc {
    class EventDispatcher {

        /**
         * @method setEnabled
         * @param {boolean} isEnabled
         */
        setEnabled(isEnabled: boolean): void;


        /**
         * @method removeAllEventListeners
         */
        removeAllEventListeners(): void;


        /**
         * @method addEventListenerWithSceneGraphPriority
         * @param {cc.EventListener} listener
         * @param {cc.Node} node
         */
        addEventListenerWithSceneGraphPriority(listener: cc.EventListener, node: cc.Node): void;


        /**
         * @method addCustomEventListener
         * @param {string} eventName
         * @param {Function} callback
         * @return {cc.EventListenerCustom}
         */
        addCustomEventListener(eventName: string, callback: Function): cc.EventListenerCustom;


        /**
         * @method addEventListenerWithFixedPriority
         * @param {cc.EventListener} listener
         * @param {number} fixedPriority
         */
        addEventListenerWithFixedPriority(listener: cc.EventListener, fixedPriority: number): void;


        /**
         * @method removeEventListenersForTarget
        * @param {cc.Node|cc.EventListener.Type} target
        * @param {boolean} recursive
*/
        removeEventListenersForTarget(target: cc.Node, recursive: boolean): void;



        /**
         * @method resumeEventListenersForTarget
         * @param {cc.Node} target
         * @param {boolean} recursive
         */
        resumeEventListenersForTarget(target: cc.Node, recursive: boolean): void;


        /**
         * @method setPriority
         * @param {cc.EventListener} listener
         * @param {number} fixedPriority
         */
        setPriority(listener: cc.EventListener, fixedPriority: number): void;


        /**
         * @method dispatchEvent
         * @param {cc.Event} event
         */
        dispatchEvent(event: cc.Event): void;


        /**
         * @method hasEventListener
         * @param {std.basic_string<char>} listenerID
         * @return {boolean}
         */
        hasEventListener(listenerID: std.basic_string<char>): boolean;


        /**
         * @method pauseEventListenersForTarget
         * @param {cc.Node} target
         * @param {boolean} recursive
         */
        pauseEventListenersForTarget(target: cc.Node, recursive: boolean): void;


        /**
         * @method removeCustomEventListeners
         * @param {string} customEventName
         */
        removeCustomEventListeners(customEventName: string): void;


        /**
         * @method removeEventListener
         * @param {cc.EventListener} listener
         */
        removeEventListener(listener: cc.EventListener): void;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method EventDispatcher
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventFocus
 */
declare namespace cc {
    class EventFocus  extends Event {

        /**
         * @method EventFocus
         * @constructor
         * @param {ccui.Widget} widgetLoseFocus
         * @param {ccui.Widget} widgetGetFocus
         */
        constructor(widgetLoseFocus: ccui.Widget, widgetGetFocus: ccui.Widget);


    }
}

/**
 * @class EventListenerAcceleration
 */
declare namespace cc {
    class EventListenerAcceleration  extends EventListener {

        /**
         * @method init
         * @param {Function} callback
         * @return {boolean}
         */
        init(callback: Function): boolean;


        /**
         * @method EventListenerAcceleration
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventListenerCustom
 */
declare namespace cc {
    class EventListenerCustom  extends EventListener {

        /**
         * @method EventListenerCustom
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventListenerFocus
 */
declare namespace cc {
    class EventListenerFocus  extends EventListener {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method EventListenerFocus
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventListenerKeyboard
 */
declare namespace cc {
    class EventListenerKeyboard  extends EventListener {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method EventListenerKeyboard
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventMouse
 */
declare namespace cc {
    class EventMouse  extends Event {

        /**
         * @method getMouseButton
         * @return {number}
         */
        getMouseButton(): number;


        /**
         * @method getLocation
         * @return {cc.Vec2}
         */
        getLocation(): cc.Vec2;


        /**
         * @method setMouseButton
         * @param {number} button
         */
        setMouseButton(button: number): void;


        /**
         * @method setScrollData
         * @param {number} scrollX
         * @param {number} scrollY
         */
        setScrollData(scrollX: number, scrollY: number): void;


        /**
         * @method getPreviousLocationInView
         * @return {cc.Vec2}
         */
        getPreviousLocationInView(): cc.Vec2;


        /**
         * @method getDelta
         * @return {cc.Vec2}
         */
        getDelta(): cc.Vec2;


        /**
         * @method getStartLocation
         * @return {cc.Vec2}
         */
        getStartLocation(): cc.Vec2;


        /**
         * @method getCursorY
         * @return {number}
         */
        getCursorY(): number;


        /**
         * @method getCursorX
         * @return {number}
         */
        getCursorX(): number;


        /**
         * @method getLocationInView
         * @return {cc.Vec2}
         */
        getLocationInView(): cc.Vec2;


        /**
         * @method getScrollY
         * @return {number}
         */
        getScrollY(): number;


        /**
         * @method setCursorPosition
         * @param {number} x
         * @param {number} y
         */
        setCursorPosition(x: number, y: number): void;


        /**
         * @method getScrollX
         * @return {number}
         */
        getScrollX(): number;


        /**
         * @method getPreviousLocation
         * @return {cc.Vec2}
         */
        getPreviousLocation(): cc.Vec2;


        /**
         * @method getStartLocationInView
         * @return {cc.Vec2}
         */
        getStartLocationInView(): cc.Vec2;


        /**
         * @method EventMouse
         * @constructor
         * @param {cc.EventMouse.MouseEventType} mouseEventCode
         */
        constructor(mouseEventCode: cc.EventMouse.MouseEventType);


    }
}

/**
 * @class EventListenerMouse
 */
declare namespace cc {
    class EventListenerMouse  extends EventListener {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method EventListenerMouse
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventListenerTouchOneByOne
 */
declare namespace cc {
    class EventListenerTouchOneByOne  extends EventListener {

        /**
         * @method isSwallowTouches
         * @return {boolean}
         */
        isSwallowTouches(): boolean;


        /**
         * @method setSwallowTouches
         * @param {boolean} needSwallow
         */
        setSwallowTouches(needSwallow: boolean): void;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method EventListenerTouchOneByOne
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EventListenerTouchAllAtOnce
 */
declare namespace cc {
    class EventListenerTouchAllAtOnce  extends EventListener {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method EventListenerTouchAllAtOnce
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Action
 */
declare namespace cc {
    class Action {

        /**
         * @method startWithTarget
         * @param {cc.Node} target
         */
        startWithTarget(target: cc.Node): void;


        /**
         * @method setOriginalTarget
         * @param {cc.Node} originalTarget
         */
        setOriginalTarget(originalTarget: cc.Node): void;


        /**
         * @method clone
         * @return {cc.Action}
         */
        clone(): cc.Action;


        /**
         * @method getOriginalTarget
         * @return {cc.Node}
         */
        getOriginalTarget(): cc.Node;


        /**
         * @method stop
         */
        stop(): void;


        /**
         * @method getTarget
         * @return {cc.Node}
         */
        getTarget(): cc.Node;


        /**
         * @method getFlags
         * @return {unsigned int}
         */
        getFlags(): unsigned int;


        /**
         * @method step
         * @param {number} dt
         */
        step(dt: number): void;


        /**
         * @method setTag
         * @param {number} tag
         */
        setTag(tag: number): void;


        /**
         * @method setFlags
         * @param {unsigned int} flags
         */
        setFlags(flags: unsigned int): void;


        /**
         * @method getTag
         * @return {number}
         */
        getTag(): number;


        /**
         * @method setTarget
         * @param {cc.Node} target
         */
        setTarget(target: cc.Node): void;


        /**
         * @method isDone
         * @return {boolean}
         */
        isDone(): boolean;


        /**
         * @method reverse
         * @return {cc.Action}
         */
        reverse(): cc.Action;


    }
}

/**
 * @class FiniteTimeAction
 */
declare namespace cc {
    class FiniteTimeAction  extends Action {

        /**
         * @method setDuration
         * @param {number} duration
         */
        setDuration(duration: number): void;


        /**
         * @method getDuration
         * @return {number}
         */
        getDuration(): number;


    }
}

/**
 * @class Speed
 */
declare namespace cc {
    class Speed  extends Action {

        /**
         * @method setInnerAction
         * @param {cc.ActionInterval} action
         */
        setInnerAction(action: cc.ActionInterval): void;


        /**
         * @method getSpeed
         * @return {number}
         */
        getSpeed(): number;


        /**
         * @method setSpeed
         * @param {number} speed
         */
        setSpeed(speed: number): void;


        /**
         * @method initWithAction
         * @param {cc.ActionInterval} action
         * @param {number} speed
         * @return {boolean}
         */
        initWithAction(action: cc.ActionInterval, speed: number): boolean;


        /**
         * @method getInnerAction
         * @return {cc.ActionInterval}
         */
        getInnerAction(): cc.ActionInterval;


        /**
         * @method Speed
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Image
 */
declare namespace cc {
    class Image {

        /**
         * @method hasPremultipliedAlpha
         * @return {boolean}
         */
        hasPremultipliedAlpha(): boolean;


        /**
         * @method getDataLen
         * @return {number}
         */
        getDataLen(): number;


        /**
         * @method saveToFile
         * @param {string} filename
         * @param {boolean} isToRGB
         * @return {boolean}
         */
        saveToFile(filename: string, isToRGB: boolean): boolean;


        /**
         * @method hasAlpha
         * @return {boolean}
         */
        hasAlpha(): boolean;


        /**
         * @method isCompressed
         * @return {boolean}
         */
        isCompressed(): boolean;


        /**
         * @method getHeight
         * @return {number}
         */
        getHeight(): number;


        /**
         * @method initWithImageFile
         * @param {string} path
         * @return {boolean}
         */
        initWithImageFile(path: string): boolean;


        /**
         * @method getWidth
         * @return {number}
         */
        getWidth(): number;


        /**
         * @method getBitPerPixel
         * @return {number}
         */
        getBitPerPixel(): number;


        /**
         * @method getFileType
         * @return {cc.Image.Format}
         */
        getFileType(): cc.Image.Format;


        /**
         * @method getFilePath
         * @return {string}
         */
        getFilePath(): string;


        /**
         * @method getNumberOfMipmaps
         * @return {number}
         */
        getNumberOfMipmaps(): number;


        /**
         * @method getRenderFormat
         * @return {cc.Texture2D.PixelFormat}
         */
        getRenderFormat(): cc.Texture2D.PixelFormat;


        /**
         * @method setPVRImagesHavePremultipliedAlpha
         * @param {boolean} haveAlphaPremultiplied
         */
        static setPVRImagesHavePremultipliedAlpha(haveAlphaPremultiplied: boolean): void;


        /**
         * @method setPNGPremultipliedAlphaEnabled
         * @param {boolean} enabled
         */
        static setPNGPremultipliedAlphaEnabled(enabled: boolean): void;


        /**
         * @method Image
         * @constructor
         */
        constructor();


    }
}

/**
 * @class GLProgramState
 */
declare namespace cc {
    class GLProgramState {

        /**
         * @method setUniformCallback
        * @param {number|string} uniformLocation
        * @param {Function|Function} callback
*/
        setUniformCallback(uniformName: string, callback: Function): void;



        /**
         * @method getVertexAttribsFlags
         * @return {unsigned int}
         */
        getVertexAttribsFlags(): unsigned int;


        /**
         * @method applyAutoBinding
         * @param {string} uniformName
         * @param {string} autoBinding
         */
        applyAutoBinding(uniformName: string, autoBinding: string): void;


        /**
         * @method setUniformVec2
        * @param {number|string} uniformLocation
        * @param {cc.Vec2|cc.Vec2} value
*/
        setUniformVec2(uniformName: string, value: cc.Vec2): void;



        /**
         * @method setUniformVec3
        * @param {number|string} uniformLocation
        * @param {cc.Vec3|cc.Vec3} value
*/
        setUniformVec3(uniformName: string, value: cc.Vec3): void;



        /**
         * @method setVertexAttribCallback
         * @param {string} name
         * @param {Function} callback
         */
        setVertexAttribCallback(name: string, callback: Function): void;


        /**
         * @method apply
         * @param {cc.AffineTransform} modelView
         */
        apply(modelView: cc.AffineTransform): void;


        /**
         * @method getNodeBinding
         * @return {cc.Node}
         */
        getNodeBinding(): cc.Node;


        /**
         * @method applyGLProgram
         * @param {cc.AffineTransform} modelView
         */
        applyGLProgram(modelView: cc.AffineTransform): void;


        /**
         * @method setNodeBinding
         * @param {cc.Node} node
         */
        setNodeBinding(node: cc.Node): void;


        /**
         * @method setUniformInt
        * @param {number|string} uniformLocation
        * @param {number|number} value
*/
        setUniformInt(uniformName: string, value: number): void;



        /**
         * @method setParameterAutoBinding
         * @param {string} uniformName
         * @param {string} autoBinding
         */
        setParameterAutoBinding(uniformName: string, autoBinding: string): void;


        /**
         * @method setUniformVec2v
        * @param {number|string} uniformLocation
        * @param {number|number} size
        * @param {cc.Vec2|cc.Vec2} pointer
*/
        setUniformVec2v(uniformName: string, size: number, pointer: cc.Vec2): void;



        /**
         * @method getUniformCount
         * @return {number}
         */
        getUniformCount(): number;


        /**
         * @method applyAttributes
         */
        applyAttributes(): void;


        /**
         * @method clone
         * @return {cc.GLProgramState}
         */
        clone(): cc.GLProgramState;


        /**
         * @method setGLProgram
         * @param {cc.GLProgram} glprogram
         */
        setGLProgram(glprogram: cc.GLProgram): void;


        /**
         * @method setUniformFloatv
        * @param {number|string} uniformLocation
        * @param {number|number} size
        * @param {number|number} pointer
*/
        setUniformFloatv(uniformName: string, size: number, pointer: number): void;



        /**
         * @method getGLProgram
         * @return {cc.GLProgram}
         */
        getGLProgram(): cc.GLProgram;


        /**
         * @method setUniformTexture
        * @param {string|string|number|number} uniformName
        * @param {unsigned int|cc.Texture2D|cc.Texture2D|unsigned int} textureId
*/
        setUniformTexture(uniformLocation: number, textureId: unsigned int): void;



        /**
         * @method applyUniforms
         */
        applyUniforms(): void;


        /**
         * @method setUniformFloat
        * @param {number|string} uniformLocation
        * @param {number|number} value
*/
        setUniformFloat(uniformName: string, value: number): void;



        /**
         * @method setUniformMat4
        * @param {number|string} uniformLocation
        * @param {cc.AffineTransform|cc.AffineTransform} value
*/
        setUniformMat4(uniformName: string, value: cc.AffineTransform): void;



        /**
         * @method setUniformVec3v
        * @param {number|string} uniformLocation
        * @param {number|number} size
        * @param {cc.Vec3|cc.Vec3} pointer
*/
        setUniformVec3v(uniformName: string, size: number, pointer: cc.Vec3): void;



        /**
         * @method getVertexAttribCount
         * @return {number}
         */
        getVertexAttribCount(): number;


        /**
         * @method create
         * @param {cc.GLProgram} glprogram
         * @return {cc.GLProgramState}
         */
        static create(glprogram: cc.GLProgram): cc.GLProgramState;


        /**
         * @method getOrCreateWithGLProgramName
         * @param {string} glProgramName
         * @return {cc.GLProgramState}
         */
        static getOrCreateWithGLProgramName(glProgramName: string): cc.GLProgramState;


        /**
         * @method getOrCreateWithGLProgram
         * @param {cc.GLProgram} glprogram
         * @return {cc.GLProgramState}
         */
        static getOrCreateWithGLProgram(glprogram: cc.GLProgram): cc.GLProgramState;


        /**
         * @method getOrCreateWithShaders
         * @param {string} vertexShader
         * @param {string} fragShader
         * @param {string} compileTimeDefines
         * @return {cc.GLProgramState}
         */
        static getOrCreateWithShaders(vertexShader: string, fragShader: string, compileTimeDefines: string): cc.GLProgramState;


    }
}

/**
 * @class SpriteFrame
 */
declare namespace cc {
    class SpriteFrame {

        /**
         * @method setAnchorPoint
         * @param {cc.Vec2} anchorPoint
         */
        setAnchorPoint(anchorPoint: cc.Vec2): void;


        /**
         * @method setTexture
         * @param {cc.Texture2D} pobTexture
         */
        setTexture(pobTexture: cc.Texture2D): void;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method setOffsetInPixels
         * @param {cc.Vec2} offsetInPixels
         */
        setOffsetInPixels(offsetInPixels: cc.Vec2): void;


        /**
         * @method getOriginalSizeInPixels
         * @return {cc.Vec2}
         */
        getOriginalSizeInPixels(): cc.Vec2;


        /**
         * @method setOriginalSize
         * @param {cc.Vec2} sizeInPixels
         */
        setOriginalSize(sizeInPixels: cc.Vec2): void;


        /**
         * @method setRectInPixels
         * @param {cc.Rect} rectInPixels
         */
        setRectInPixels(rectInPixels: cc.Rect): void;


        /**
         * @method getRect
         * @return {cc.Rect}
         */
        getRect(): cc.Rect;


        /**
         * @method setOffset
         * @param {cc.Vec2} offsets
         */
        setOffset(offsets: cc.Vec2): void;


        /**
         * @method initWithTextureFilename
        * @param {string|string} filename
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @param {cc.Vec2} offset
        * @param {cc.Vec2} originalSize
        * @return {boolean|boolean}
*/
        initWithTextureFilename(filename: string, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2): boolean|boolean;



        /**
         * @method setRect
         * @param {cc.Rect} rect
         */
        setRect(rect: cc.Rect): void;


        /**
         * @method initWithTexture
        * @param {cc.Texture2D|cc.Texture2D} pobTexture
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @param {cc.Vec2} offset
        * @param {cc.Vec2} originalSize
        * @return {boolean|boolean}
*/
        initWithTexture(pobTexture: cc.Texture2D, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2): boolean|boolean;



        /**
         * @method getOriginalSize
         * @return {cc.Vec2}
         */
        getOriginalSize(): cc.Vec2;


        /**
         * @method clone
         * @return {cc.SpriteFrame}
         */
        clone(): cc.SpriteFrame;


        /**
         * @method getRectInPixels
         * @return {cc.Rect}
         */
        getRectInPixels(): cc.Rect;


        /**
         * @method isRotated
         * @return {boolean}
         */
        isRotated(): boolean;


        /**
         * @method setRotated
         * @param {boolean} rotated
         */
        setRotated(rotated: boolean): void;


        /**
         * @method getOffset
         * @return {cc.Vec2}
         */
        getOffset(): cc.Vec2;


        /**
         * @method setOriginalSizeInPixels
         * @param {cc.Vec2} sizeInPixels
         */
        setOriginalSizeInPixels(sizeInPixels: cc.Vec2): void;


        /**
         * @method getAnchorPoint
         * @return {cc.Vec2}
         */
        getAnchorPoint(): cc.Vec2;


        /**
         * @method hasAnchorPoint
         * @return {boolean}
         */
        hasAnchorPoint(): boolean;


        /**
         * @method getOffsetInPixels
         * @return {cc.Vec2}
         */
        getOffsetInPixels(): cc.Vec2;


        /**
         * @method create
        * @param {string|string} filename
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @param {cc.Vec2} offset
        * @param {cc.Vec2} originalSize
        * @return {cc.SpriteFrame|cc.SpriteFrame}
*/
        create(filename: string, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2): cc.SpriteFrame|cc.SpriteFrame;



        /**
         * @method createWithTexture
        * @param {cc.Texture2D|cc.Texture2D} pobTexture
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @param {cc.Vec2} offset
        * @param {cc.Vec2} originalSize
        * @return {cc.SpriteFrame|cc.SpriteFrame}
*/
        createWithTexture(pobTexture: cc.Texture2D, rect: cc.Rect, rotated: boolean, offset: cc.Vec2, originalSize: cc.Vec2): cc.SpriteFrame|cc.SpriteFrame;



        /**
         * @method SpriteFrame
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ActionInterval
 */
declare namespace cc {
    class ActionInterval  extends FiniteTimeAction {

        /**
         * @method getAmplitudeRate
         * @return {number}
         */
        getAmplitudeRate(): number;


        /**
         * @method initWithDuration
         * @param {number} d
         * @return {boolean}
         */
        initWithDuration(d: number): boolean;


        /**
         * @method setAmplitudeRate
         * @param {number} amp
         */
        setAmplitudeRate(amp: number): void;


        /**
         * @method getElapsed
         * @return {number}
         */
        getElapsed(): number;


    }
}

/**
 * @class Sequence
 */
declare namespace cc {
    class Sequence  extends ActionInterval {

        /**
         * @method init
         * @param {any[]} arrayOfActions
         * @return {boolean}
         */
        init(arrayOfActions: any[]): boolean;


        /**
         * @method initWithTwoActions
         * @param {cc.FiniteTimeAction} pActionOne
         * @param {cc.FiniteTimeAction} pActionTwo
         * @return {boolean}
         */
        initWithTwoActions(pActionOne: cc.FiniteTimeAction, pActionTwo: cc.FiniteTimeAction): boolean;


        /**
         * @method Sequence
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Repeat
 */
declare namespace cc {
    class Repeat  extends ActionInterval {

        /**
         * @method setInnerAction
         * @param {cc.FiniteTimeAction} action
         */
        setInnerAction(action: cc.FiniteTimeAction): void;


        /**
         * @method initWithAction
         * @param {cc.FiniteTimeAction} pAction
         * @param {unsigned int} times
         * @return {boolean}
         */
        initWithAction(pAction: cc.FiniteTimeAction, times: unsigned int): boolean;


        /**
         * @method getInnerAction
         * @return {cc.FiniteTimeAction}
         */
        getInnerAction(): cc.FiniteTimeAction;


        /**
         * @method Repeat
         * @constructor
         */
        constructor();


    }
}

/**
 * @class RepeatForever
 */
declare namespace cc {
    class RepeatForever  extends ActionInterval {

        /**
         * @method setInnerAction
         * @param {cc.ActionInterval} action
         */
        setInnerAction(action: cc.ActionInterval): void;


        /**
         * @method initWithAction
         * @param {cc.ActionInterval} action
         * @return {boolean}
         */
        initWithAction(action: cc.ActionInterval): boolean;


        /**
         * @method getInnerAction
         * @return {cc.ActionInterval}
         */
        getInnerAction(): cc.ActionInterval;


        /**
         * @method RepeatForever
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Spawn
 */
declare namespace cc {
    class Spawn  extends ActionInterval {

        /**
         * @method init
         * @param {any[]} arrayOfActions
         * @return {boolean}
         */
        init(arrayOfActions: any[]): boolean;


        /**
         * @method initWithTwoActions
         * @param {cc.FiniteTimeAction} action1
         * @param {cc.FiniteTimeAction} action2
         * @return {boolean}
         */
        initWithTwoActions(action1: cc.FiniteTimeAction, action2: cc.FiniteTimeAction): boolean;


        /**
         * @method Spawn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class RotateTo
 */
declare namespace cc {
    class RotateTo  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {number} dstAngleX
         * @param {number} dstAngleY
         * @return {boolean}
         */
        initWithDuration(duration: number, dstAngleX: number, dstAngleY: number): boolean;


        /**
         * @method create
        * @param {number|number} duration
        * @param {number|number} dstAngle
        * @param {number} dstAngleY
        * @return {cc.RotateTo|cc.RotateTo}
*/
        create(duration: number, dstAngleX: number, dstAngleY: number): cc.RotateTo|cc.RotateTo;



        /**
         * @method RotateTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class RotateBy
 */
declare namespace cc {
    class RotateBy  extends ActionInterval {

        /**
         * @method initWithDuration
        * @param {number|number} duration
        * @param {number|number} deltaAngleZ_X
        * @param {number} deltaAngleZ_Y
        * @return {boolean|boolean}
*/
        initWithDuration(duration: number, deltaAngleZ_X: number, deltaAngleZ_Y: number): boolean|boolean;



        /**
         * @method create
        * @param {number|number} duration
        * @param {number|number} deltaAngleZ_X
        * @param {number} deltaAngleZ_Y
        * @return {cc.RotateBy|cc.RotateBy}
*/
        create(duration: number, deltaAngleZ_X: number, deltaAngleZ_Y: number): cc.RotateBy|cc.RotateBy;



        /**
         * @method RotateBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MoveBy
 */
declare namespace cc {
    class MoveBy  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {cc.Vec2} deltaPosition
         * @return {boolean}
         */
        initWithDuration(duration: number, deltaPosition: cc.Vec2): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {cc.Vec2} deltaPosition
         * @return {cc.MoveBy}
         */
        static create(duration: number, deltaPosition: cc.Vec2): cc.MoveBy;


        /**
         * @method MoveBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MoveTo
 */
declare namespace cc {
    class MoveTo  extends MoveBy {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {cc.Vec2} position
         * @return {boolean}
         */
        initWithDuration(duration: number, position: cc.Vec2): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {cc.Vec2} position
         * @return {cc.MoveTo}
         */
        static create(duration: number, position: cc.Vec2): cc.MoveTo;


        /**
         * @method MoveTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class SkewTo
 */
declare namespace cc {
    class SkewTo  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} t
         * @param {number} sx
         * @param {number} sy
         * @return {boolean}
         */
        initWithDuration(t: number, sx: number, sy: number): boolean;


        /**
         * @method create
         * @param {number} t
         * @param {number} sx
         * @param {number} sy
         * @return {cc.SkewTo}
         */
        static create(t: number, sx: number, sy: number): cc.SkewTo;


        /**
         * @method SkewTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class SkewBy
 */
declare namespace cc {
    class SkewBy  extends SkewTo {

        /**
         * @method initWithDuration
         * @param {number} t
         * @param {number} sx
         * @param {number} sy
         * @return {boolean}
         */
        initWithDuration(t: number, sx: number, sy: number): boolean;


        /**
         * @method create
         * @param {number} t
         * @param {number} deltaSkewX
         * @param {number} deltaSkewY
         * @return {cc.SkewBy}
         */
        static create(t: number, deltaSkewX: number, deltaSkewY: number): cc.SkewBy;


        /**
         * @method SkewBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class JumpBy
 */
declare namespace cc {
    class JumpBy  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {cc.Vec2} position
         * @param {number} height
         * @param {number} jumps
         * @return {boolean}
         */
        initWithDuration(duration: number, position: cc.Vec2, height: number, jumps: number): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {cc.Vec2} position
         * @param {number} height
         * @param {number} jumps
         * @return {cc.JumpBy}
         */
        static create(duration: number, position: cc.Vec2, height: number, jumps: number): cc.JumpBy;


        /**
         * @method JumpBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class JumpTo
 */
declare namespace cc {
    class JumpTo  extends JumpBy {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {cc.Vec2} position
         * @param {number} height
         * @param {number} jumps
         * @return {boolean}
         */
        initWithDuration(duration: number, position: cc.Vec2, height: number, jumps: number): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {cc.Vec2} position
         * @param {number} height
         * @param {number} jumps
         * @return {cc.JumpTo}
         */
        static create(duration: number, position: cc.Vec2, height: number, jumps: number): cc.JumpTo;


        /**
         * @method JumpTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class BezierBy
 */
declare namespace cc {
    class BezierBy  extends ActionInterval {

        /**
         * @method BezierBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class BezierTo
 */
declare namespace cc {
    class BezierTo  extends BezierBy {

        /**
         * @method BezierTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ScaleTo
 */
declare namespace cc {
    class ScaleTo  extends ActionInterval {

        /**
         * @method initWithDuration
        * @param {number|number|number} duration
        * @param {number|number|number} sx
        * @param {number|number} sy
        * @param {number} sz
        * @return {boolean|boolean|boolean}
*/
        initWithDuration(duration: number, sx: number, sy: number, sz: number): boolean|boolean|boolean;



        /**
         * @method create
        * @param {number|number|number} duration
        * @param {number|number|number} sx
        * @param {number|number} sy
        * @param {number} sz
        * @return {cc.ScaleTo|cc.ScaleTo|cc.ScaleTo}
*/
        create(duration: number, sx: number, sy: number, sz: number): cc.ScaleTo|cc.ScaleTo|cc.ScaleTo;



        /**
         * @method ScaleTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ScaleBy
 */
declare namespace cc {
    class ScaleBy  extends ScaleTo {

        /**
         * @method create
        * @param {number|number|number} duration
        * @param {number|number|number} sx
        * @param {number|number} sy
        * @param {number} sz
        * @return {cc.ScaleBy|cc.ScaleBy|cc.ScaleBy}
*/
        create(duration: number, sx: number, sy: number, sz: number): cc.ScaleBy|cc.ScaleBy|cc.ScaleBy;



        /**
         * @method ScaleBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Blink
 */
declare namespace cc {
    class Blink  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {number} blinks
         * @return {boolean}
         */
        initWithDuration(duration: number, blinks: number): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {number} blinks
         * @return {cc.Blink}
         */
        static create(duration: number, blinks: number): cc.Blink;


        /**
         * @method Blink
         * @constructor
         */
        constructor();


    }
}

/**
 * @class FadeTo
 */
declare namespace cc {
    class FadeTo  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {string} opacity
         * @return {boolean}
         */
        initWithDuration(duration: number, opacity: string): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {string} opacity
         * @return {cc.FadeTo}
         */
        static create(duration: number, opacity: string): cc.FadeTo;


        /**
         * @method FadeTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class FadeIn
 */
declare namespace cc {
    class FadeIn  extends FadeTo {

        /**
         * @method setReverseAction
         * @param {cc.FadeTo} ac
         */
        setReverseAction(ac: cc.FadeTo): void;


        /**
         * @method create
         * @param {number} d
         * @return {cc.FadeIn}
         */
        static create(d: number): cc.FadeIn;


        /**
         * @method FadeIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class FadeOut
 */
declare namespace cc {
    class FadeOut  extends FadeTo {

        /**
         * @method setReverseAction
         * @param {cc.FadeTo} ac
         */
        setReverseAction(ac: cc.FadeTo): void;


        /**
         * @method create
         * @param {number} d
         * @return {cc.FadeOut}
         */
        static create(d: number): cc.FadeOut;


        /**
         * @method FadeOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TintTo
 */
declare namespace cc {
    class TintTo  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {string} red
         * @param {string} green
         * @param {string} blue
         * @return {boolean}
         */
        initWithDuration(duration: number, red: string, green: string, blue: string): boolean;


        /**
         * @method create
        * @param {number|number} duration
        * @param {cc.Color|string} color
        * @param {string} green
        * @param {string} blue
        * @return {cc.TintTo|cc.TintTo}
*/
        create(duration: number, red: string, green: string, blue: string): cc.TintTo|cc.TintTo;



        /**
         * @method TintTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TintBy
 */
declare namespace cc {
    class TintBy  extends ActionInterval {

        /**
         * @method initWithDuration
         * @param {number} duration
         * @param {number} deltaRed
         * @param {number} deltaGreen
         * @param {number} deltaBlue
         * @return {boolean}
         */
        initWithDuration(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): boolean;


        /**
         * @method create
         * @param {number} duration
         * @param {number} deltaRed
         * @param {number} deltaGreen
         * @param {number} deltaBlue
         * @return {cc.TintBy}
         */
        static create(duration: number, deltaRed: number, deltaGreen: number, deltaBlue: number): cc.TintBy;


        /**
         * @method TintBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class DelayTime
 */
declare namespace cc {
    class DelayTime  extends ActionInterval {

        /**
         * @method create
         * @param {number} d
         * @return {cc.DelayTime}
         */
        static create(d: number): cc.DelayTime;


        /**
         * @method DelayTime
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ReverseTime
 */
declare namespace cc {
    class ReverseTime  extends ActionInterval {

        /**
         * @method initWithAction
         * @param {cc.FiniteTimeAction} action
         * @return {boolean}
         */
        initWithAction(action: cc.FiniteTimeAction): boolean;


        /**
         * @method create
         * @param {cc.FiniteTimeAction} action
         * @return {cc.ReverseTime}
         */
        static create(action: cc.FiniteTimeAction): cc.ReverseTime;


        /**
         * @method ReverseTime
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TargetedAction
 */
declare namespace cc {
    class TargetedAction  extends ActionInterval {

        /**
         * @method getForcedTarget
        * @return {cc.Node|cc.Node}
*/
        getForcedTarget(): cc.Node|cc.Node;



        /**
         * @method initWithTarget
         * @param {cc.Node} target
         * @param {cc.FiniteTimeAction} action
         * @return {boolean}
         */
        initWithTarget(target: cc.Node, action: cc.FiniteTimeAction): boolean;


        /**
         * @method setForcedTarget
         * @param {cc.Node} forcedTarget
         */
        setForcedTarget(forcedTarget: cc.Node): void;


        /**
         * @method TargetedAction
         * @constructor
         */
        constructor();


    }
}

/**
 * @class CardinalSplineTo
 */
declare namespace cc {
    class CardinalSplineTo  extends ActionInterval {

        /**
         * @method updatePosition
         * @param {cc.Vec2} newPos
         */
        updatePosition(newPos: cc.Vec2): void;


        /**
         * @method CardinalSplineTo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class CardinalSplineBy
 */
declare namespace cc {
    class CardinalSplineBy  extends CardinalSplineTo {

        /**
         * @method CardinalSplineBy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class CatmullRomTo
 */
declare namespace cc {
    class CatmullRomTo  extends CardinalSplineTo {

    }
}

/**
 * @class CatmullRomBy
 */
declare namespace cc {
    class CatmullRomBy  extends CardinalSplineBy {

    }
}

/**
 * @class ActionEase
 */
declare namespace cc {
    class ActionEase  extends ActionInterval {

        /**
         * @method initWithAction
         * @param {cc.ActionInterval} action
         * @return {boolean}
         */
        initWithAction(action: cc.ActionInterval): boolean;


        /**
         * @method getInnerAction
         * @return {cc.ActionInterval}
         */
        getInnerAction(): cc.ActionInterval;


    }
}

/**
 * @class EaseRateAction
 */
declare namespace cc {
    class EaseRateAction  extends ActionEase {

        /**
         * @method setRate
         * @param {number} rate
         */
        setRate(rate: number): void;


        /**
         * @method initWithAction
         * @param {cc.ActionInterval} pAction
         * @param {number} fRate
         * @return {boolean}
         */
        initWithAction(pAction: cc.ActionInterval, fRate: number): boolean;


        /**
         * @method getRate
         * @return {number}
         */
        getRate(): number;


        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @param {number} rate
         * @return {cc.EaseRateAction}
         */
        static create(action: cc.ActionInterval, rate: number): cc.EaseRateAction;


    }
}

/**
 * @class EaseIn
 */
declare namespace cc {
    class EaseIn  extends EaseRateAction {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @param {number} rate
         * @return {cc.EaseIn}
         */
        static create(action: cc.ActionInterval, rate: number): cc.EaseIn;


        /**
         * @method EaseIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseOut
 */
declare namespace cc {
    class EaseOut  extends EaseRateAction {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @param {number} rate
         * @return {cc.EaseOut}
         */
        static create(action: cc.ActionInterval, rate: number): cc.EaseOut;


        /**
         * @method EaseOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseInOut
 */
declare namespace cc {
    class EaseInOut  extends EaseRateAction {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @param {number} rate
         * @return {cc.EaseInOut}
         */
        static create(action: cc.ActionInterval, rate: number): cc.EaseInOut;


        /**
         * @method EaseInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseExponentialIn
 */
declare namespace cc {
    class EaseExponentialIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseExponentialIn}
         */
        static create(action: cc.ActionInterval): cc.EaseExponentialIn;


        /**
         * @method EaseExponentialIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseExponentialOut
 */
declare namespace cc {
    class EaseExponentialOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseExponentialOut}
         */
        static create(action: cc.ActionInterval): cc.EaseExponentialOut;


        /**
         * @method EaseExponentialOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseExponentialInOut
 */
declare namespace cc {
    class EaseExponentialInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseExponentialInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseExponentialInOut;


        /**
         * @method EaseExponentialInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseSineIn
 */
declare namespace cc {
    class EaseSineIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseSineIn}
         */
        static create(action: cc.ActionInterval): cc.EaseSineIn;


        /**
         * @method EaseSineIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseSineOut
 */
declare namespace cc {
    class EaseSineOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseSineOut}
         */
        static create(action: cc.ActionInterval): cc.EaseSineOut;


        /**
         * @method EaseSineOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseSineInOut
 */
declare namespace cc {
    class EaseSineInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseSineInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseSineInOut;


        /**
         * @method EaseSineInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseElastic
 */
declare namespace cc {
    class EaseElastic  extends ActionEase {

        /**
         * @method setPeriod
         * @param {number} fPeriod
         */
        setPeriod(fPeriod: number): void;


        /**
         * @method initWithAction
         * @param {cc.ActionInterval} action
         * @param {number} period
         * @return {boolean}
         */
        initWithAction(action: cc.ActionInterval, period: number): boolean;


        /**
         * @method getPeriod
         * @return {number}
         */
        getPeriod(): number;


    }
}

/**
 * @class EaseElasticIn
 */
declare namespace cc {
    class EaseElasticIn  extends EaseElastic {

        /**
         * @method create
        * @param {cc.ActionInterval|cc.ActionInterval} action
        * @param {number} period
        * @return {cc.EaseElasticIn|cc.EaseElasticIn}
*/
        create(action: cc.ActionInterval, period: number): cc.EaseElasticIn|cc.EaseElasticIn;



        /**
         * @method EaseElasticIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseElasticOut
 */
declare namespace cc {
    class EaseElasticOut  extends EaseElastic {

        /**
         * @method create
        * @param {cc.ActionInterval|cc.ActionInterval} action
        * @param {number} period
        * @return {cc.EaseElasticOut|cc.EaseElasticOut}
*/
        create(action: cc.ActionInterval, period: number): cc.EaseElasticOut|cc.EaseElasticOut;



        /**
         * @method EaseElasticOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseElasticInOut
 */
declare namespace cc {
    class EaseElasticInOut  extends EaseElastic {

        /**
         * @method create
        * @param {cc.ActionInterval|cc.ActionInterval} action
        * @param {number} period
        * @return {cc.EaseElasticInOut|cc.EaseElasticInOut}
*/
        create(action: cc.ActionInterval, period: number): cc.EaseElasticInOut|cc.EaseElasticInOut;



        /**
         * @method EaseElasticInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBounce
 */
declare namespace cc {
    class EaseBounce  extends ActionEase {

    }
}

/**
 * @class EaseBounceIn
 */
declare namespace cc {
    class EaseBounceIn  extends EaseBounce {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBounceIn}
         */
        static create(action: cc.ActionInterval): cc.EaseBounceIn;


        /**
         * @method EaseBounceIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBounceOut
 */
declare namespace cc {
    class EaseBounceOut  extends EaseBounce {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBounceOut}
         */
        static create(action: cc.ActionInterval): cc.EaseBounceOut;


        /**
         * @method EaseBounceOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBounceInOut
 */
declare namespace cc {
    class EaseBounceInOut  extends EaseBounce {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBounceInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseBounceInOut;


        /**
         * @method EaseBounceInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBackIn
 */
declare namespace cc {
    class EaseBackIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBackIn}
         */
        static create(action: cc.ActionInterval): cc.EaseBackIn;


        /**
         * @method EaseBackIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBackOut
 */
declare namespace cc {
    class EaseBackOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBackOut}
         */
        static create(action: cc.ActionInterval): cc.EaseBackOut;


        /**
         * @method EaseBackOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBackInOut
 */
declare namespace cc {
    class EaseBackInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBackInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseBackInOut;


        /**
         * @method EaseBackInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseBezierAction
 */
declare namespace cc {
    class EaseBezierAction  extends ActionEase {

        /**
         * @method setBezierParamer
         * @param {number} p0
         * @param {number} p1
         * @param {number} p2
         * @param {number} p3
         */
        setBezierParamer(p0: number, p1: number, p2: number, p3: number): void;


        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseBezierAction}
         */
        static create(action: cc.ActionInterval): cc.EaseBezierAction;


        /**
         * @method EaseBezierAction
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuadraticActionIn
 */
declare namespace cc {
    class EaseQuadraticActionIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuadraticActionIn}
         */
        static create(action: cc.ActionInterval): cc.EaseQuadraticActionIn;


        /**
         * @method EaseQuadraticActionIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuadraticActionOut
 */
declare namespace cc {
    class EaseQuadraticActionOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuadraticActionOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuadraticActionOut;


        /**
         * @method EaseQuadraticActionOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuadraticActionInOut
 */
declare namespace cc {
    class EaseQuadraticActionInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuadraticActionInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuadraticActionInOut;


        /**
         * @method EaseQuadraticActionInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuarticActionIn
 */
declare namespace cc {
    class EaseQuarticActionIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuarticActionIn}
         */
        static create(action: cc.ActionInterval): cc.EaseQuarticActionIn;


        /**
         * @method EaseQuarticActionIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuarticActionOut
 */
declare namespace cc {
    class EaseQuarticActionOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuarticActionOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuarticActionOut;


        /**
         * @method EaseQuarticActionOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuarticActionInOut
 */
declare namespace cc {
    class EaseQuarticActionInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuarticActionInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuarticActionInOut;


        /**
         * @method EaseQuarticActionInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuinticActionIn
 */
declare namespace cc {
    class EaseQuinticActionIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuinticActionIn}
         */
        static create(action: cc.ActionInterval): cc.EaseQuinticActionIn;


        /**
         * @method EaseQuinticActionIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuinticActionOut
 */
declare namespace cc {
    class EaseQuinticActionOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuinticActionOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuinticActionOut;


        /**
         * @method EaseQuinticActionOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseQuinticActionInOut
 */
declare namespace cc {
    class EaseQuinticActionInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseQuinticActionInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseQuinticActionInOut;


        /**
         * @method EaseQuinticActionInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCircleActionIn
 */
declare namespace cc {
    class EaseCircleActionIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCircleActionIn}
         */
        static create(action: cc.ActionInterval): cc.EaseCircleActionIn;


        /**
         * @method EaseCircleActionIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCircleActionOut
 */
declare namespace cc {
    class EaseCircleActionOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCircleActionOut}
         */
        static create(action: cc.ActionInterval): cc.EaseCircleActionOut;


        /**
         * @method EaseCircleActionOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCircleActionInOut
 */
declare namespace cc {
    class EaseCircleActionInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCircleActionInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseCircleActionInOut;


        /**
         * @method EaseCircleActionInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCubicActionIn
 */
declare namespace cc {
    class EaseCubicActionIn  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCubicActionIn}
         */
        static create(action: cc.ActionInterval): cc.EaseCubicActionIn;


        /**
         * @method EaseCubicActionIn
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCubicActionOut
 */
declare namespace cc {
    class EaseCubicActionOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCubicActionOut}
         */
        static create(action: cc.ActionInterval): cc.EaseCubicActionOut;


        /**
         * @method EaseCubicActionOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class EaseCubicActionInOut
 */
declare namespace cc {
    class EaseCubicActionInOut  extends ActionEase {

        /**
         * @method create
         * @param {cc.ActionInterval} action
         * @return {cc.EaseCubicActionInOut}
         */
        static create(action: cc.ActionInterval): cc.EaseCubicActionInOut;


        /**
         * @method EaseCubicActionInOut
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ActionInstant
 */
declare namespace cc {
    class ActionInstant  extends FiniteTimeAction {

    }
}

/**
 * @class Show
 */
declare namespace cc {
    class Show  extends ActionInstant {

        /**
         * @method create
         * @return {cc.Show}
         */
        static create(): cc.Show;


        /**
         * @method Show
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Hide
 */
declare namespace cc {
    class Hide  extends ActionInstant {

        /**
         * @method create
         * @return {cc.Hide}
         */
        static create(): cc.Hide;


        /**
         * @method Hide
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ToggleVisibility
 */
declare namespace cc {
    class ToggleVisibility  extends ActionInstant {

        /**
         * @method create
         * @return {cc.ToggleVisibility}
         */
        static create(): cc.ToggleVisibility;


        /**
         * @method ToggleVisibility
         * @constructor
         */
        constructor();


    }
}

/**
 * @class RemoveSelf
 */
declare namespace cc {
    class RemoveSelf  extends ActionInstant {

        /**
         * @method init
         * @param {boolean} isNeedCleanUp
         * @return {boolean}
         */
        init(isNeedCleanUp: boolean): boolean;


        /**
         * @method create
         * @return {cc.RemoveSelf}
         */
        static create(): cc.RemoveSelf;


        /**
         * @method RemoveSelf
         * @constructor
         */
        constructor();


    }
}

/**
 * @class FlipX
 */
declare namespace cc {
    class FlipX  extends ActionInstant {

        /**
         * @method initWithFlipX
         * @param {boolean} x
         * @return {boolean}
         */
        initWithFlipX(x: boolean): boolean;


        /**
         * @method create
         * @param {boolean} x
         * @return {cc.FlipX}
         */
        static create(x: boolean): cc.FlipX;


        /**
         * @method FlipX
         * @constructor
         */
        constructor();


    }
}

/**
 * @class FlipY
 */
declare namespace cc {
    class FlipY  extends ActionInstant {

        /**
         * @method initWithFlipY
         * @param {boolean} y
         * @return {boolean}
         */
        initWithFlipY(y: boolean): boolean;


        /**
         * @method create
         * @param {boolean} y
         * @return {cc.FlipY}
         */
        static create(y: boolean): cc.FlipY;


        /**
         * @method FlipY
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Place
 */
declare namespace cc {
    class Place  extends ActionInstant {

        /**
         * @method initWithPosition
         * @param {cc.Vec2} pos
         * @return {boolean}
         */
        initWithPosition(pos: cc.Vec2): boolean;


        /**
         * @method create
         * @param {cc.Vec2} pos
         * @return {cc.Place}
         */
        static create(pos: cc.Vec2): cc.Place;


        /**
         * @method Place
         * @constructor
         */
        constructor();


    }
}

/**
 * @class CallFunc
 */
declare namespace cc {
    class _CallFunc  extends ActionInstant {

        /**
         * @method execute
         */
        execute(): void;


        /**
         * @method CallFunc
         * @constructor
         */
        constructor();


    }
}

/**
 * @class CallFuncN
 */
declare namespace cc {
    class CallFunc  extends CallFunc {

        /**
         * @method CallFuncN
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ActionManager
 */
declare namespace cc {
    class ActionManager {

        /**
         * @method getActionByTag
         * @param {number} tag
         * @param {cc.Node} target
         * @return {cc.Action}
         */
        getActionByTag(tag: number, target: cc.Node): cc.Action;


        /**
         * @method removeActionByTag
         * @param {number} tag
         * @param {cc.Node} target
         */
        removeActionByTag(tag: number, target: cc.Node): void;


        /**
         * @method removeActionsByFlags
         * @param {unsigned int} flags
         * @param {cc.Node} target
         */
        removeActionsByFlags(flags: unsigned int, target: cc.Node): void;


        /**
         * @method removeAllActions
         */
        removeAllActions(): void;


        /**
         * @method addAction
         * @param {cc.Action} action
         * @param {cc.Node} target
         * @param {boolean} paused
         */
        addAction(action: cc.Action, target: cc.Node, paused: boolean): void;


        /**
         * @method resumeTarget
         * @param {cc.Node} target
         */
        resumeTarget(target: cc.Node): void;


        /**
         * @method update
         * @param {number} dt
         */
        update(dt: number): void;


        /**
         * @method pauseTarget
         * @param {cc.Node} target
         */
        pauseTarget(target: cc.Node): void;


        /**
         * @method getNumberOfRunningActionsInTarget
         * @param {cc.Node} target
         * @return {number}
         */
        getNumberOfRunningActionsInTarget(target: cc.Node): number;


        /**
         * @method removeAllActionsFromTarget
         * @param {cc.Node} target
         */
        removeAllActionsFromTarget(target: cc.Node): void;


        /**
         * @method resumeTargets
         * @param {any[]} targetsToResume
         */
        resumeTargets(targetsToResume: any[]): void;


        /**
         * @method removeAction
         * @param {cc.Action} action
         */
        removeAction(action: cc.Action): void;


        /**
         * @method removeAllActionsByTag
         * @param {number} tag
         * @param {cc.Node} target
         */
        removeAllActionsByTag(tag: number, target: cc.Node): void;


        /**
         * @method pauseAllRunningActions
         * @return {any[]}
         */
        pauseAllRunningActions(): any[];


        /**
         * @method ActionManager
         * @constructor
         */
        constructor();


    }
}

/**
 * @class AtlasNode
 */
declare namespace cc {
    class AtlasNode  extends Node {

        /**
         * @method updateAtlasValues
         */
        updateAtlasValues(): void;


        /**
         * @method initWithTileFile
         * @param {string} tile
         * @param {number} tileWidth
         * @param {number} tileHeight
         * @param {number} itemsToRender
         * @return {boolean}
         */
        initWithTileFile(tile: string, tileWidth: number, tileHeight: number, itemsToRender: number): boolean;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method setTextureAtlas
         * @param {cc.TextureAtlas} textureAtlas
         */
        setTextureAtlas(textureAtlas: cc.TextureAtlas): void;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method getQuadsToDraw
         * @return {number}
         */
        getQuadsToDraw(): number;


        /**
         * @method setTexture
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): void;


        /**
         * @method initWithTexture
         * @param {cc.Texture2D} texture
         * @param {number} tileWidth
         * @param {number} tileHeight
         * @param {number} itemsToRender
         * @return {boolean}
         */
        initWithTexture(texture: cc.Texture2D, tileWidth: number, tileHeight: number, itemsToRender: number): boolean;


        /**
         * @method setQuadsToDraw
         * @param {number} quadsToDraw
         */
        setQuadsToDraw(quadsToDraw: number): void;


        /**
         * @method create
         * @param {string} filename
         * @param {number} tileWidth
         * @param {number} tileHeight
         * @param {number} itemsToRender
         * @return {cc.AtlasNode}
         */
        static create(filename: string, tileWidth: number, tileHeight: number, itemsToRender: number): cc.AtlasNode;


        /**
         * @method AtlasNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ClippingNode
 */
declare namespace cc {
    class ClippingNode  extends Node {

        /**
         * @method hasContent
         * @return {boolean}
         */
        hasContent(): boolean;


        /**
         * @method setInverted
         * @param {boolean} inverted
         */
        setInverted(inverted: boolean): void;


        /**
         * @method setStencil
         * @param {cc.Node} stencil
         */
        setStencil(stencil: cc.Node): void;


        /**
         * @method getAlphaThreshold
         * @return {number}
         */
        getAlphaThreshold(): number;


        /**
         * @method init
         * @param {cc.Node} stencil
         * @return {boolean}
         */
        init(stencil: cc.Node): boolean;


        /**
         * @method getStencil
         * @return {cc.Node}
         */
        getStencil(): cc.Node;


        /**
         * @method setAlphaThreshold
         * @param {number} alphaThreshold
         */
        setAlphaThreshold(alphaThreshold: number): void;


        /**
         * @method isInverted
         * @return {boolean}
         */
        isInverted(): boolean;


        /**
         * @method create
        * @param {cc.Node} stencil
        * @return {cc.ClippingNode|cc.ClippingNode}
*/
        create(stencil: cc.Node): cc.ClippingNode|cc.ClippingNode;



        /**
         * @method ClippingNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class DrawNode
 */
declare namespace cc {
    class DrawNode  extends Node {

        /**
         * @method drawLine
         * @param {cc.Vec2} origin
         * @param {cc.Vec2} destination
         * @param {cc.Color} color
         */
        drawLine(origin: cc.Vec2, destination: cc.Vec2, color: cc.Color): void;


        /**
         * @method drawPoints
        * @param {cc.Vec2|cc.Vec2} position
        * @param {unsigned int|unsigned int} numberOfPoints
        * @param {number|cc.Color} pointSize
        * @param {cc.Color} color
*/
        drawPoints(position: cc.Vec2, numberOfPoints: unsigned int, pointSize: number, color: cc.Color): void;



        /**
         * @method drawRect
        * @param {cc.Vec2|cc.Vec2} p1
        * @param {cc.Vec2|cc.Vec2} p2
        * @param {cc.Vec2|cc.Color} p3
        * @param {cc.Vec2} p4
        * @param {cc.Color} color
*/
        drawRect(p1: cc.Vec2, p2: cc.Vec2, p3: cc.Vec2, p4: cc.Vec2, color: cc.Color): void;



        /**
         * @method drawSolidCircle
        * @param {cc.Vec2|cc.Vec2} center
        * @param {number|number} radius
        * @param {number|number} angle
        * @param {unsigned int|unsigned int} segments
        * @param {cc.Color|number} color
        * @param {number} scaleY
        * @param {cc.Color} color
*/
        drawSolidCircle(center: cc.Vec2, radius: number, angle: number, segments: unsigned int, scaleX: number, scaleY: number, color: cc.Color): void;



        /**
         * @method setLineWidth
         * @param {number} lineWidth
         */
        setLineWidth(lineWidth: number): void;


        /**
         * @method onDrawGLPoint
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} flags
         */
        onDrawGLPoint(transform: cc.AffineTransform, flags: unsigned int): void;


        /**
         * @method drawPolygon
         * @param {cc.Vec2} verts
         * @param {number} count
         * @param {cc.Color} fillColor
         * @param {number} borderWidth
         * @param {cc.Color} borderColor
         */
        drawPolygon(verts: cc.Vec2, count: number, fillColor: cc.Color, borderWidth: number, borderColor: cc.Color): void;


        /**
         * @method drawDot
         * @param {cc.Vec2} pos
         * @param {number} radius
         * @param {cc.Color} color
         */
        drawDot(pos: cc.Vec2, radius: number, color: cc.Color): void;


        /**
         * @method drawCatmullRom
         * @param {cc.Vec2} points
         * @param {unsigned int} segments
         * @param {cc.Color} color
         */
        drawCatmullRom(points: cc.Vec2, segments: unsigned int, color: cc.Color): void;


        /**
         * @method drawSegment
         * @param {cc.Vec2} from
         * @param {cc.Vec2} to
         * @param {number} radius
         * @param {cc.Color} color
         */
        drawSegment(from: cc.Vec2, to: cc.Vec2, radius: number, color: cc.Color): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method onDraw
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} flags
         */
        onDraw(transform: cc.AffineTransform, flags: unsigned int): void;


        /**
         * @method drawCircle
        * @param {cc.Vec2|cc.Vec2} center
        * @param {number|number} radius
        * @param {number|number} angle
        * @param {unsigned int|unsigned int} segments
        * @param {boolean|boolean} drawLineToCenter
        * @param {cc.Color|number} color
        * @param {number} scaleY
        * @param {cc.Color} color
*/
        drawCircle(center: cc.Vec2, radius: number, angle: number, segments: unsigned int, drawLineToCenter: boolean, scaleX: number, scaleY: number, color: cc.Color): void;



        /**
         * @method drawQuadBezier
         * @param {cc.Vec2} origin
         * @param {cc.Vec2} control
         * @param {cc.Vec2} destination
         * @param {unsigned int} segments
         * @param {cc.Color} color
         */
        drawQuadBezier(origin: cc.Vec2, control: cc.Vec2, destination: cc.Vec2, segments: unsigned int, color: cc.Color): void;


        /**
         * @method onDrawGLLine
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} flags
         */
        onDrawGLLine(transform: cc.AffineTransform, flags: unsigned int): void;


        /**
         * @method drawSolidPoly
         * @param {cc.Vec2} poli
         * @param {unsigned int} numberOfPoints
         * @param {cc.Color} color
         */
        drawSolidPoly(poli: cc.Vec2, numberOfPoints: unsigned int, color: cc.Color): void;


        /**
         * @method drawTriangle
         * @param {cc.Vec2} p1
         * @param {cc.Vec2} p2
         * @param {cc.Vec2} p3
         * @param {cc.Color} color
         */
        drawTriangle(p1: cc.Vec2, p2: cc.Vec2, p3: cc.Vec2, color: cc.Color): void;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method clear
         */
        clear(): void;


        /**
         * @method drawCardinalSpline
         * @param {cc.Vec2} config
         * @param {number} tension
         * @param {unsigned int} segments
         * @param {cc.Color} color
         */
        drawCardinalSpline(config: cc.Vec2, tension: number, segments: unsigned int, color: cc.Color): void;


        /**
         * @method drawSolidRect
         * @param {cc.Vec2} origin
         * @param {cc.Vec2} destination
         * @param {cc.Color} color
         */
        drawSolidRect(origin: cc.Vec2, destination: cc.Vec2, color: cc.Color): void;


        /**
         * @method getLineWidth
         * @return {number}
         */
        getLineWidth(): number;


        /**
         * @method drawPoint
         * @param {cc.Vec2} point
         * @param {number} pointSize
         * @param {cc.Color} color
         */
        drawPoint(point: cc.Vec2, pointSize: number, color: cc.Color): void;


        /**
         * @method drawCubicBezier
         * @param {cc.Vec2} origin
         * @param {cc.Vec2} control1
         * @param {cc.Vec2} control2
         * @param {cc.Vec2} destination
         * @param {unsigned int} segments
         * @param {cc.Color} color
         */
        drawCubicBezier(origin: cc.Vec2, control1: cc.Vec2, control2: cc.Vec2, destination: cc.Vec2, segments: unsigned int, color: cc.Color): void;


        /**
         * @method create
         * @return {cc.DrawNode}
         */
        static create(): cc.DrawNode;


        /**
         * @method DrawNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Label
 */
declare namespace cc {
    class Label  extends Node {

        /**
         * @method isClipMarginEnabled
         * @return {boolean}
         */
        isClipMarginEnabled(): boolean;


        /**
         * @method enableShadow
         */
        enableShadow(): void;


        /**
         * @method setDimensions
         * @param {number} width
         * @param {number} height
         */
        setDimensions(width: number, height: number): void;


        /**
         * @method getWidth
         * @return {number}
         */
        getWidth(): number;


        /**
         * @method getString
         * @return {string}
         */
        getString(): string;


        /**
         * @method getHeight
         * @return {number}
         */
        getHeight(): number;


        /**
         * @method disableEffect
        * @param {cc.LabelEffect} effect
*/
        disableEffect(effect: cc.LabelEffect): void;



        /**
         * @method setTTFConfig
         * @param {cc._ttfConfig} ttfConfig
         * @return {boolean}
         */
        setTTFConfig(ttfConfig: cc._ttfConfig): boolean;


        /**
         * @method getTextColor
         * @return {cc.Color}
         */
        getTextColor(): cc.Color;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method enableWrap
         * @param {boolean} enable
         */
        enableWrap(enable: boolean): void;


        /**
         * @method setWidth
         * @param {number} width
         */
        setWidth(width: number): void;


        /**
         * @method getAdditionalKerning
         * @return {number}
         */
        getAdditionalKerning(): number;


        /**
         * @method getBMFontSize
         * @return {number}
         */
        getBMFontSize(): number;


        /**
         * @method getMaxLineWidth
         * @return {number}
         */
        getMaxLineWidth(): number;


        /**
         * @method getHorizontalAlignment
         * @return {cc.TextHAlignment}
         */
        getHorizontalAlignment(): cc.TextHAlignment;


        /**
         * @method getShadowOffset
         * @return {cc.Vec2}
         */
        getShadowOffset(): cc.Vec2;


        /**
         * @method getLineSpacing
         * @return {number}
         */
        getLineSpacing(): number;


        /**
         * @method setClipMarginEnabled
         * @param {boolean} clipEnabled
         */
        setClipMarginEnabled(clipEnabled: boolean): void;


        /**
         * @method setString
         * @param {string} text
         */
        setString(text: string): void;


        /**
         * @method setSystemFontName
         * @param {string} font
         */
        setSystemFontName(font: string): void;


        /**
         * @method isWrapEnabled
         * @return {boolean}
         */
        isWrapEnabled(): boolean;


        /**
         * @method getOutlineSize
         * @return {number}
         */
        getOutlineSize(): number;


        /**
         * @method setBMFontFilePath
         * @param {string} bmfontDataString
         * @param {cc.SpriteFrame} spriteFrame
         * @param {cc.Vec2} imageOffset
         * @param {number} fontSize
         * @return {boolean}
         */
        setBMFontFilePath(bmfontDataString: string, spriteFrame: cc.SpriteFrame, imageOffset: cc.Vec2, fontSize: number): boolean;


        /**
         * @method initWithTTF
        * @param {cc._ttfConfig|string} ttfConfig
        * @param {string|string} text
        * @param {cc.TextHAlignment|number} hAlignment
        * @param {number|cc.Vec2} maxLineWidth
        * @param {cc.TextHAlignment} hAlignment
        * @param {cc.TextVAlignment} vAlignment
        * @return {boolean|boolean}
*/
        initWithTTF(text: string, fontFilePath: string, fontSize: number, dimensions: cc.Vec2, hAlignment: cc.TextHAlignment, vAlignment: cc.TextVAlignment): boolean|boolean;



        /**
         * @method setLineHeight
         * @param {number} height
         */
        setLineHeight(height: number): void;


        /**
         * @method setSystemFontSize
         * @param {number} fontSize
         */
        setSystemFontSize(fontSize: number): void;


        /**
         * @method setOverflow
         * @param {cc.Label.Overflow} overflow
         */
        setOverflow(overflow: cc.Label.Overflow): void;


        /**
         * @method enableStrikethrough
         */
        enableStrikethrough(): void;


        /**
         * @method updateContent
         */
        updateContent(): void;


        /**
         * @method getStringLength
         * @return {number}
         */
        getStringLength(): number;


        /**
         * @method setLineBreakWithoutSpace
         * @param {boolean} breakWithoutSpace
         */
        setLineBreakWithoutSpace(breakWithoutSpace: boolean): void;


        /**
         * @method getStringNumLines
         * @return {number}
         */
        getStringNumLines(): number;


        /**
         * @method enableOutline
         * @param {cc.Color} outlineColor
         * @param {number} outlineSize
         */
        enableOutline(outlineColor: cc.Color, outlineSize: number): void;


        /**
         * @method getShadowBlurRadius
         * @return {number}
         */
        getShadowBlurRadius(): number;


        /**
         * @method getEffectColor
         * @return {cc.Color}
         */
        getEffectColor(): cc.Color;


        /**
         * @method removeAllChildrenWithCleanup
         * @param {boolean} cleanup
         */
        removeAllChildrenWithCleanup(cleanup: boolean): void;


        /**
         * @method setCharMap
        * @param {cc.Texture2D|string|string} texture
        * @param {number|number} itemWidth
        * @param {number|number} itemHeight
        * @param {number|number} startCharMap
        * @return {boolean|boolean|boolean}
*/
        setCharMap(charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number): boolean|boolean|boolean;



        /**
         * @method getFontDefinition
         * @return {cc.FontDefinition}
         */
        getFontDefinition(): cc.FontDefinition;


        /**
         * @method getDimensions
         * @return {cc.Vec2}
         */
        getDimensions(): cc.Vec2;


        /**
         * @method setMaxLineWidth
         * @param {number} maxLineWidth
         */
        setMaxLineWidth(maxLineWidth: number): void;


        /**
         * @method getSystemFontName
         * @return {string}
         */
        getSystemFontName(): string;


        /**
         * @method setVerticalAlignment
         * @param {cc.TextVAlignment} vAlignment
         */
        setVerticalAlignment(vAlignment: cc.TextVAlignment): void;


        /**
         * @method setLineSpacing
         * @param {number} height
         */
        setLineSpacing(height: number): void;


        /**
         * @method getLineHeight
         * @return {number}
         */
        getLineHeight(): number;


        /**
         * @method getShadowColor
         * @return {cc.Color}
         */
        getShadowColor(): cc.Color;


        /**
         * @method getTTFConfig
         * @return {cc._ttfConfig}
         */
        getTTFConfig(): cc._ttfConfig;


        /**
         * @method enableItalics
         */
        enableItalics(): void;


        /**
         * @method setTextColor
         * @param {cc.Color} color
         */
        setTextColor(color: cc.Color): void;


        /**
         * @method getLetter
         * @param {number} lettetIndex
         * @return {cc.Sprite}
         */
        getLetter(lettetIndex: number): cc.Sprite;


        /**
         * @method setHeight
         * @param {number} height
         */
        setHeight(height: number): void;


        /**
         * @method isShadowEnabled
         * @return {boolean}
         */
        isShadowEnabled(): boolean;


        /**
         * @method enableGlow
         * @param {cc.Color} glowColor
         */
        enableGlow(glowColor: cc.Color): void;


        /**
         * @method getOverflow
         * @return {cc.Label.Overflow}
         */
        getOverflow(): cc.Label.Overflow;


        /**
         * @method getVerticalAlignment
         * @return {cc.TextVAlignment}
         */
        getVerticalAlignment(): cc.TextVAlignment;


        /**
         * @method setAdditionalKerning
         * @param {number} space
         */
        setAdditionalKerning(space: number): void;


        /**
         * @method getSystemFontSize
         * @return {number}
         */
        getSystemFontSize(): number;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method getTextAlignment
         * @return {cc.TextHAlignment}
         */
        getTextAlignment(): cc.TextHAlignment;


        /**
         * @method getBMFontFilePath
         * @return {string}
         */
        getBMFontFilePath(): string;


        /**
         * @method setHorizontalAlignment
         * @param {cc.TextHAlignment} hAlignment
         */
        setHorizontalAlignment(hAlignment: cc.TextHAlignment): void;


        /**
         * @method enableBold
         */
        enableBold(): void;


        /**
         * @method enableUnderline
         */
        enableUnderline(): void;


        /**
         * @method getLabelEffectType
         * @return {cc.LabelEffect}
         */
        getLabelEffectType(): cc.LabelEffect;


        /**
         * @method setFontDefinition
         * @param {cc.FontDefinition} textDefinition
         */
        setFontDefinition(textDefinition: cc.FontDefinition): void;


        /**
         * @method setAlignment
        * @param {cc.TextHAlignment|cc.TextHAlignment} hAlignment
        * @param {cc.TextVAlignment} vAlignment
*/
        setAlignment(hAlignment: cc.TextHAlignment, vAlignment: cc.TextVAlignment): void;



        /**
         * @method requestSystemFontRefresh
         */
        requestSystemFontRefresh(): void;


        /**
         * @method setBMFontSize
         * @param {number} fontSize
         */
        setBMFontSize(fontSize: number): void;


        /**
         * @method createWithBMFont
         * @param {string} bmfontString
         * @param {string} text
         * @param {cc.SpriteFrame} spriteFrame
         * @param {cc.TextHAlignment} hAlignment
         * @param {number} maxLineWidth
         * @param {cc.Vec2} imageOffset
         * @return {cc.Label}
         */
        static createWithBMFont(bmfontString: string, text: string, spriteFrame: cc.SpriteFrame, hAlignment: cc.TextHAlignment, maxLineWidth: number, imageOffset: cc.Vec2): cc.Label;


        /**
         * @method create
         * @return {cc.Label}
         */
        static create(): cc.Label;


        /**
         * @method createWithCharMap
        * @param {cc.Texture2D|string|string} texture
        * @param {number|number} itemWidth
        * @param {number|number} itemHeight
        * @param {number|number} startCharMap
        * @return {cc.Label|cc.Label|cc.Label}
*/
        createWithCharMap(charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: number): cc.Label|cc.Label|cc.Label;



        /**
         * @method createWithSystemFont
         * @param {string} text
         * @param {string} font
         * @param {number} fontSize
         * @param {cc.Vec2} dimensions
         * @param {cc.TextHAlignment} hAlignment
         * @param {cc.TextVAlignment} vAlignment
         * @return {cc.Label}
         */
        static createWithSystemFont(text: string, font: string, fontSize: number, dimensions: cc.Vec2, hAlignment: cc.TextHAlignment, vAlignment: cc.TextVAlignment): cc.Label;


        /**
         * @method createWithTTF
        * @param {cc._ttfConfig|string} ttfConfig
        * @param {string|string} text
        * @param {cc.TextHAlignment|number} hAlignment
        * @param {number|cc.Vec2} maxLineWidth
        * @param {cc.TextHAlignment} hAlignment
        * @param {cc.TextVAlignment} vAlignment
        * @return {cc.Label|cc.Label}
*/
        createWithTTF(text: string, fontFilePath: string, fontSize: number, dimensions: cc.Vec2, hAlignment: cc.TextHAlignment, vAlignment: cc.TextVAlignment): cc.Label|cc.Label;



        /**
         * @method Label
         * @constructor
         */
        constructor();


    }
}

/**
 * @class LabelTTF
 */
declare namespace cc {
    class LabelTTF  extends Node {

        /**
         * @method getRenderLabel
         * @return {cc.Label}
         */
        getRenderLabel(): cc.Label;


        /**
         * @method LabelTTF
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Layer
 */
declare namespace cc {
    class Layer  extends Node {

        /**
         * @method create
         * @return {cc.Layer}
         */
        static create(): cc.Layer;


        /**
         * @method Layer
         * @constructor
         */
        constructor();


    }
}

/**
 * @class LayerColor
 */
declare namespace cc {
    class LayerColor  extends Layer {

        /**
         * @method changeWidthAndHeight
         * @param {number} w
         * @param {number} h
         */
        changeWidthAndHeight(w: number, h: number): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method changeWidth
         * @param {number} w
         */
        changeWidth(w: number): void;


        /**
         * @method initWithColor
        * @param {cc.Color|cc.Color} color
        * @param {number} width
        * @param {number} height
        * @return {boolean|boolean}
*/
        initWithColor(color: cc.Color, width: number, height: number): boolean|boolean;



        /**
         * @method changeHeight
         * @param {number} h
         */
        changeHeight(h: number): void;


        /**
         * @method create
        * @param {cc.Color|cc.Color} color
        * @param {number} width
        * @param {number} height
        * @return {cc.LayerColor|cc.LayerColor|cc.LayerColor}
*/
        create(color: cc.Color, width: number, height: number): cc.LayerColor|cc.LayerColor|cc.LayerColor;



        /**
         * @method LayerColor
         * @constructor
         */
        constructor();


    }
}

/**
 * @class LayerGradient
 */
declare namespace cc {
    class LayerGradient  extends LayerColor {

        /**
         * @method getStartColor
         * @return {cc.Color}
         */
        getStartColor(): cc.Color;


        /**
         * @method isCompressedInterpolation
         * @return {boolean}
         */
        isCompressedInterpolation(): boolean;


        /**
         * @method getStartOpacity
         * @return {string}
         */
        getStartOpacity(): string;


        /**
         * @method setVector
         * @param {cc.Vec2} alongVector
         */
        setVector(alongVector: cc.Vec2): void;


        /**
         * @method setStartOpacity
         * @param {string} startOpacity
         */
        setStartOpacity(startOpacity: string): void;


        /**
         * @method setCompressedInterpolation
         * @param {boolean} compressedInterpolation
         */
        setCompressedInterpolation(compressedInterpolation: boolean): void;


        /**
         * @method setEndOpacity
         * @param {string} endOpacity
         */
        setEndOpacity(endOpacity: string): void;


        /**
         * @method getVector
         * @return {cc.Vec2}
         */
        getVector(): cc.Vec2;


        /**
         * @method setEndColor
         * @param {cc.Color} endColor
         */
        setEndColor(endColor: cc.Color): void;


        /**
         * @method initWithColor
        * @param {cc.Color|cc.Color} start
        * @param {cc.Color|cc.Color} end
        * @param {cc.Vec2} v
        * @return {boolean|boolean}
*/
        initWithColor(start: cc.Color, end: cc.Color, v: cc.Vec2): boolean|boolean;



        /**
         * @method getEndColor
         * @return {cc.Color}
         */
        getEndColor(): cc.Color;


        /**
         * @method getEndOpacity
         * @return {string}
         */
        getEndOpacity(): string;


        /**
         * @method setStartColor
         * @param {cc.Color} startColor
         */
        setStartColor(startColor: cc.Color): void;


        /**
         * @method create
        * @param {cc.Color|cc.Color} start
        * @param {cc.Color|cc.Color} end
        * @param {cc.Vec2} v
        * @return {cc.LayerGradient|cc.LayerGradient|cc.LayerGradient}
*/
        create(start: cc.Color, end: cc.Color, v: cc.Vec2): cc.LayerGradient|cc.LayerGradient|cc.LayerGradient;



        /**
         * @method LayerGradient
         * @constructor
         */
        constructor();


    }
}

/**
 * @class LayerMultiplex
 */
declare namespace cc {
    class LayerMultiplex  extends Layer {

        /**
         * @method initWithArray
         * @param {any[]} arrayOfLayers
         * @return {boolean}
         */
        initWithArray(arrayOfLayers: any[]): boolean;


        /**
         * @method switchToAndReleaseMe
         * @param {number} n
         */
        switchToAndReleaseMe(n: number): void;


        /**
         * @method addLayer
         * @param {cc.Layer} layer
         */
        addLayer(layer: cc.Layer): void;


        /**
         * @method switchTo
         * @param {number} n
         */
        switchTo(n: number): void;


        /**
         * @method LayerMultiplex
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItem
 */
declare namespace cc {
    class MenuItem  extends Node {

        /**
         * @method setEnabled
         * @param {boolean} value
         */
        setEnabled(value: boolean): void;


        /**
         * @method activate
         */
        activate(): void;


        /**
         * @method initWithCallback
         * @param {Function} callback
         * @return {boolean}
         */
        initWithCallback(callback: Function): boolean;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method selected
         */
        selected(): void;


        /**
         * @method isSelected
         * @return {boolean}
         */
        isSelected(): boolean;


        /**
         * @method setCallback
         * @param {Function} callback
         */
        setCallback(callback: Function): void;


        /**
         * @method unselected
         */
        unselected(): void;


        /**
         * @method rect
         * @return {cc.Rect}
         */
        rect(): cc.Rect;


        /**
         * @method MenuItem
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemLabel
 */
declare namespace cc {
    class MenuItemLabel  extends MenuItem {

        /**
         * @method setLabel
         * @param {cc.Node} node
         */
        setLabel(node: cc.Node): void;


        /**
         * @method getString
         * @return {string}
         */
        getString(): string;


        /**
         * @method getDisabledColor
         * @return {cc.Color}
         */
        getDisabledColor(): cc.Color;


        /**
         * @method setString
         * @param {string} label
         */
        setString(label: string): void;


        /**
         * @method initWithLabel
         * @param {cc.Node} label
         * @param {Function} callback
         * @return {boolean}
         */
        initWithLabel(label: cc.Node, callback: Function): boolean;


        /**
         * @method setDisabledColor
         * @param {cc.Color} color
         */
        setDisabledColor(color: cc.Color): void;


        /**
         * @method getLabel
         * @return {cc.Node}
         */
        getLabel(): cc.Node;


        /**
         * @method MenuItemLabel
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemAtlasFont
 */
declare namespace cc {
    class MenuItemAtlasFont  extends MenuItemLabel {

        /**
         * @method initWithString
         * @param {string} value
         * @param {string} charMapFile
         * @param {number} itemWidth
         * @param {number} itemHeight
         * @param {string} startCharMap
         * @param {Function} callback
         * @return {boolean}
         */
        initWithString(value: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string, callback: Function): boolean;


        /**
         * @method MenuItemAtlasFont
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemFont
 */
declare namespace cc {
    class MenuItemFont  extends MenuItemLabel {

        /**
         * @method setFontNameObj
         * @param {string} name
         */
        setFontNameObj(name: string): void;


        /**
         * @method getFontSizeObj
         * @return {number}
         */
        getFontSizeObj(): number;


        /**
         * @method setFontSizeObj
         * @param {number} size
         */
        setFontSizeObj(size: number): void;


        /**
         * @method initWithString
         * @param {string} value
         * @param {Function} callback
         * @return {boolean}
         */
        initWithString(value: string, callback: Function): boolean;


        /**
         * @method getFontNameObj
         * @return {string}
         */
        getFontNameObj(): string;


        /**
         * @method setFontName
         * @param {string} name
         */
        static setFontName(name: string): void;


        /**
         * @method getFontSize
         * @return {number}
         */
        static getFontSize(): number;


        /**
         * @method getFontName
         * @return {string}
         */
        static getFontName(): string;


        /**
         * @method setFontSize
         * @param {number} size
         */
        static setFontSize(size: number): void;


        /**
         * @method MenuItemFont
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemSprite
 */
declare namespace cc {
    class MenuItemSprite  extends MenuItem {

        /**
         * @method setEnabled
         * @param {boolean} bEnabled
         */
        setEnabled(bEnabled: boolean): void;


        /**
         * @method selected
         */
        selected(): void;


        /**
         * @method setNormalImage
         * @param {cc.Node} image
         */
        setNormalImage(image: cc.Node): void;


        /**
         * @method setDisabledImage
         * @param {cc.Node} image
         */
        setDisabledImage(image: cc.Node): void;


        /**
         * @method initWithNormalSprite
         * @param {cc.Node} normalSprite
         * @param {cc.Node} selectedSprite
         * @param {cc.Node} disabledSprite
         * @param {Function} callback
         * @return {boolean}
         */
        initWithNormalSprite(normalSprite: cc.Node, selectedSprite: cc.Node, disabledSprite: cc.Node, callback: Function): boolean;


        /**
         * @method setSelectedImage
         * @param {cc.Node} image
         */
        setSelectedImage(image: cc.Node): void;


        /**
         * @method getDisabledImage
         * @return {cc.Node}
         */
        getDisabledImage(): cc.Node;


        /**
         * @method getSelectedImage
         * @return {cc.Node}
         */
        getSelectedImage(): cc.Node;


        /**
         * @method getNormalImage
         * @return {cc.Node}
         */
        getNormalImage(): cc.Node;


        /**
         * @method unselected
         */
        unselected(): void;


        /**
         * @method MenuItemSprite
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemImage
 */
declare namespace cc {
    class MenuItemImage  extends MenuItemSprite {

        /**
         * @method setDisabledSpriteFrame
         * @param {cc.SpriteFrame} frame
         */
        setDisabledSpriteFrame(frame: cc.SpriteFrame): void;


        /**
         * @method setSelectedSpriteFrame
         * @param {cc.SpriteFrame} frame
         */
        setSelectedSpriteFrame(frame: cc.SpriteFrame): void;


        /**
         * @method setNormalSpriteFrame
         * @param {cc.SpriteFrame} frame
         */
        setNormalSpriteFrame(frame: cc.SpriteFrame): void;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithNormalImage
         * @param {string} normalImage
         * @param {string} selectedImage
         * @param {string} disabledImage
         * @param {Function} callback
         * @return {boolean}
         */
        initWithNormalImage(normalImage: string, selectedImage: string, disabledImage: string, callback: Function): boolean;


        /**
         * @method MenuItemImage
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MenuItemToggle
 */
declare namespace cc {
    class MenuItemToggle  extends MenuItem {

        /**
         * @method setSubItems
         * @param {any[]} items
         */
        setSubItems(items: any[]): void;


        /**
         * @method initWithItem
         * @param {cc.MenuItem} item
         * @return {boolean}
         */
        initWithItem(item: cc.MenuItem): boolean;


        /**
         * @method getSubItems
        * @return {any[]|any[]}
*/
        getSubItems(): any[]|any[];



        /**
         * @method getSelectedIndex
         * @return {unsigned int}
         */
        getSelectedIndex(): unsigned int;


        /**
         * @method addSubItem
         * @param {cc.MenuItem} item
         */
        addSubItem(item: cc.MenuItem): void;


        /**
         * @method getSelectedItem
         * @return {cc.MenuItem}
         */
        getSelectedItem(): cc.MenuItem;


        /**
         * @method setSelectedIndex
         * @param {unsigned int} index
         */
        setSelectedIndex(index: unsigned int): void;


        /**
         * @method MenuItemToggle
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Menu
 */
declare namespace cc {
    class Menu  extends Layer {

        /**
         * @method initWithArray
         * @param {any[]} arrayOfItems
         * @return {boolean}
         */
        initWithArray(arrayOfItems: any[]): boolean;


        /**
         * @method setEnabled
         * @param {boolean} value
         */
        setEnabled(value: boolean): void;


        /**
         * @method alignItemsVertically
         */
        alignItemsVertically(): void;


        /**
         * @method isEnabled
         * @return {boolean}
         */
        isEnabled(): boolean;


        /**
         * @method alignItemsHorizontally
         */
        alignItemsHorizontally(): void;


        /**
         * @method alignItemsHorizontallyWithPadding
         * @param {number} padding
         */
        alignItemsHorizontallyWithPadding(padding: number): void;


        /**
         * @method alignItemsVerticallyWithPadding
         * @param {number} padding
         */
        alignItemsVerticallyWithPadding(padding: number): void;


        /**
         * @method alignItemsInRowsWithArray
        * @param {any[]|number} columns
        * @param {string} args
*/
        alignItemsInRowsWithArray(rows: number, args: string): void;



        /**
         * @method alignItemsInColumnsWithArray
        * @param {any[]|number} rows
        * @param {string} args
*/
        alignItemsInColumnsWithArray(columns: number, args: string): void;



        /**
         * @method Menu
         * @constructor
         */
        constructor();


    }
}

/**
 * @class MotionStreak
 */
declare namespace cc {
    class MotionStreak  extends Node {

        /**
         * @method reset
         */
        reset(): void;


        /**
         * @method setTexture
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): void;


        /**
         * @method setMinSeg
         * @param {number} minSeg
         */
        setMinSeg(minSeg: number): void;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method tintWithColor
         * @param {cc.Color} colors
         */
        tintWithColor(colors: cc.Color): void;


        /**
         * @method getMinSeg
         * @return {number}
         */
        getMinSeg(): number;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method setFadeTime
         * @param {number} fade
         */
        setFadeTime(fade: number): void;


        /**
         * @method setStartingPositionInitialized
         * @param {boolean} bStartingPositionInitialized
         */
        setStartingPositionInitialized(bStartingPositionInitialized: boolean): void;


        /**
         * @method getFadeTime
         * @return {number}
         */
        getFadeTime(): number;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method isStartingPositionInitialized
         * @return {boolean}
         */
        isStartingPositionInitialized(): boolean;


        /**
         * @method isFastMode
         * @return {boolean}
         */
        isFastMode(): boolean;


        /**
         * @method getStroke
         * @return {number}
         */
        getStroke(): number;


        /**
         * @method initWithFade
        * @param {number|number} fade
        * @param {number|number} minSeg
        * @param {number|number} stroke
        * @param {cc.Color|cc.Color} color
        * @param {cc.Texture2D|string} texture
        * @return {boolean|boolean}
*/
        initWithFade(fade: number, minSeg: number, stroke: number, color: cc.Color, path: string): boolean|boolean;



        /**
         * @method setFastMode
         * @param {boolean} bFastMode
         */
        setFastMode(bFastMode: boolean): void;


        /**
         * @method setStroke
         * @param {number} stroke
         */
        setStroke(stroke: number): void;


        /**
         * @method create
        * @param {number|number} timeToFade
        * @param {number|number} minSeg
        * @param {number|number} strokeWidth
        * @param {cc.Color|cc.Color} strokeColor
        * @param {cc.Texture2D|string} texture
        * @return {cc.MotionStreak|cc.MotionStreak}
*/
        create(timeToFade: number, minSeg: number, strokeWidth: number, strokeColor: cc.Color, imagePath: string): cc.MotionStreak|cc.MotionStreak;



        /**
         * @method MotionStreak
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleBatchNode
 */
declare namespace cc {
    class ParticleBatchNode  extends Node {

        /**
         * @method setTexture
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): void;


        /**
         * @method initWithTexture
         * @param {cc.Texture2D} tex
         * @param {number} capacity
         * @return {boolean}
         */
        initWithTexture(tex: cc.Texture2D, capacity: number): boolean;


        /**
         * @method disableParticle
         * @param {number} particleIndex
         */
        disableParticle(particleIndex: number): void;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method setTextureAtlas
         * @param {cc.TextureAtlas} atlas
         */
        setTextureAtlas(atlas: cc.TextureAtlas): void;


        /**
         * @method initWithFile
         * @param {string} fileImage
         * @param {number} capacity
         * @return {boolean}
         */
        initWithFile(fileImage: string, capacity: number): boolean;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method removeAllChildrenWithCleanup
         * @param {boolean} doCleanup
         */
        removeAllChildrenWithCleanup(doCleanup: boolean): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method insertChild
         * @param {cc.ParticleSystem} system
         * @param {number} index
         */
        insertChild(system: cc.ParticleSystem, index: number): void;


        /**
         * @method removeChildAtIndex
         * @param {number} index
         * @param {boolean} doCleanup
         */
        removeChildAtIndex(index: number, doCleanup: boolean): void;


        /**
         * @method create
         * @param {string} fileImage
         * @param {number} capacity
         * @return {cc.ParticleBatchNode}
         */
        static create(fileImage: string, capacity: number): cc.ParticleBatchNode;


        /**
         * @method createWithTexture
         * @param {cc.Texture2D} tex
         * @param {number} capacity
         * @return {cc.ParticleBatchNode}
         */
        static createWithTexture(tex: cc.Texture2D, capacity: number): cc.ParticleBatchNode;


        /**
         * @method ParticleBatchNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSystem
 */
declare namespace cc {
    class _ParticleSystem  extends Node {

        /**
         * @method getStartSizeVar
         * @return {number}
         */
        getStartSizeVar(): number;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method isFull
         * @return {boolean}
         */
        isFull(): boolean;


        /**
         * @method getBatchNode
         * @return {cc.ParticleBatchNode}
         */
        getBatchNode(): cc.ParticleBatchNode;


        /**
         * @method getStartColor
         * @return {cc.Color}
         */
        getStartColor(): cc.Color;


        /**
         * @method getPositionType
         * @return {cc.ParticleSystem.PositionType}
         */
        getPositionType(): cc.ParticleSystem.PositionType;


        /**
         * @method setPosVar
         * @param {cc.Vec2} pos
         */
        setPosVar(pos: cc.Vec2): void;


        /**
         * @method getEndSpin
         * @return {number}
         */
        getEndSpin(): number;


        /**
         * @method setRotatePerSecondVar
         * @param {number} degrees
         */
        setRotatePerSecondVar(degrees: number): void;


        /**
         * @method getStartSpinVar
         * @return {number}
         */
        getStartSpinVar(): number;


        /**
         * @method getRadialAccelVar
         * @return {number}
         */
        getRadialAccelVar(): number;


        /**
         * @method getEndSizeVar
         * @return {number}
         */
        getEndSizeVar(): number;


        /**
         * @method setTangentialAccel
         * @param {number} t
         */
        setTangentialAccel(t: number): void;


        /**
         * @method getRadialAccel
         * @return {number}
         */
        getRadialAccel(): number;


        /**
         * @method setStartRadius
         * @param {number} startRadius
         */
        setStartRadius(startRadius: number): void;


        /**
         * @method setRotatePerSecond
         * @param {number} degrees
         */
        setRotatePerSecond(degrees: number): void;


        /**
         * @method setEndSize
         * @param {number} endSize
         */
        setEndSize(endSize: number): void;


        /**
         * @method getGravity
         * @return {cc.Vec2}
         */
        getGravity(): cc.Vec2;


        /**
         * @method resumeEmissions
         */
        resumeEmissions(): void;


        /**
         * @method getTangentialAccel
         * @return {number}
         */
        getTangentialAccel(): number;


        /**
         * @method setEndRadius
         * @param {number} endRadius
         */
        setEndRadius(endRadius: number): void;


        /**
         * @method getSpeed
         * @return {number}
         */
        getSpeed(): number;


        /**
         * @method pauseEmissions
         */
        pauseEmissions(): void;


        /**
         * @method getAngle
         * @return {number}
         */
        getAngle(): number;


        /**
         * @method setEndColor
         * @param {cc.Color} color
         */
        setEndColor(color: cc.Color): void;


        /**
         * @method setStartSpin
         * @param {number} spin
         */
        setStartSpin(spin: number): void;


        /**
         * @method setDuration
         * @param {number} duration
         */
        setDuration(duration: number): void;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method addParticles
         * @param {number} count
         */
        addParticles(count: number): void;


        /**
         * @method setTexture
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): void;


        /**
         * @method getPosVar
         * @return {cc.Vec2}
         */
        getPosVar(): cc.Vec2;


        /**
         * @method updateWithNoTime
         */
        updateWithNoTime(): void;


        /**
         * @method isBlendAdditive
         * @return {boolean}
         */
        isBlendAdditive(): boolean;


        /**
         * @method getSpeedVar
         * @return {number}
         */
        getSpeedVar(): number;


        /**
         * @method setPositionType
         * @param {cc.ParticleSystem.PositionType} type
         */
        setPositionType(type: cc.ParticleSystem.PositionType): void;


        /**
         * @method stopSystem
         */
        stopSystem(): void;


        /**
         * @method getSourcePosition
         * @return {cc.Vec2}
         */
        getSourcePosition(): cc.Vec2;


        /**
         * @method setLifeVar
         * @param {number} lifeVar
         */
        setLifeVar(lifeVar: number): void;


        /**
         * @method setTotalParticles
         * @param {number} totalParticles
         */
        setTotalParticles(totalParticles: number): void;


        /**
         * @method setEndColorVar
         * @param {cc.Color} color
         */
        setEndColorVar(color: cc.Color): void;


        /**
         * @method getAtlasIndex
         * @return {number}
         */
        getAtlasIndex(): number;


        /**
         * @method getStartSize
         * @return {number}
         */
        getStartSize(): number;


        /**
         * @method setStartSpinVar
         * @param {number} pinVar
         */
        setStartSpinVar(pinVar: number): void;


        /**
         * @method resetSystem
         */
        resetSystem(): void;


        /**
         * @method setAtlasIndex
         * @param {number} index
         */
        setAtlasIndex(index: number): void;


        /**
         * @method setTangentialAccelVar
         * @param {number} t
         */
        setTangentialAccelVar(t: number): void;


        /**
         * @method setEndRadiusVar
         * @param {number} endRadiusVar
         */
        setEndRadiusVar(endRadiusVar: number): void;


        /**
         * @method getEndRadius
         * @return {number}
         */
        getEndRadius(): number;


        /**
         * @method isActive
         * @return {boolean}
         */
        isActive(): boolean;


        /**
         * @method setRadialAccelVar
         * @param {number} t
         */
        setRadialAccelVar(t: number): void;


        /**
         * @method setStartSize
         * @param {number} startSize
         */
        setStartSize(startSize: number): void;


        /**
         * @method setSpeed
         * @param {number} speed
         */
        setSpeed(speed: number): void;


        /**
         * @method getStartSpin
         * @return {number}
         */
        getStartSpin(): number;


        /**
         * @method getResourceFile
         * @return {string}
         */
        getResourceFile(): string;


        /**
         * @method getRotatePerSecond
         * @return {number}
         */
        getRotatePerSecond(): number;


        /**
         * @method setEmitterMode
         * @param {cc.ParticleSystem.Mode} mode
         */
        setEmitterMode(mode: cc.ParticleSystem.Mode): void;


        /**
         * @method getDuration
         * @return {number}
         */
        getDuration(): number;


        /**
         * @method setSourcePosition
         * @param {cc.Vec2} pos
         */
        setSourcePosition(pos: cc.Vec2): void;


        /**
         * @method stop
         */
        stop(): void;


        /**
         * @method updateParticleQuads
         */
        updateParticleQuads(): void;


        /**
         * @method getEndSpinVar
         * @return {number}
         */
        getEndSpinVar(): number;


        /**
         * @method setBlendAdditive
         * @param {boolean} value
         */
        setBlendAdditive(value: boolean): void;


        /**
         * @method setLife
         * @param {number} life
         */
        setLife(life: number): void;


        /**
         * @method setAngleVar
         * @param {number} angleVar
         */
        setAngleVar(angleVar: number): void;


        /**
         * @method setRotationIsDir
         * @param {boolean} t
         */
        setRotationIsDir(t: boolean): void;


        /**
         * @method start
         */
        start(): void;


        /**
         * @method setEndSizeVar
         * @param {number} sizeVar
         */
        setEndSizeVar(sizeVar: number): void;


        /**
         * @method setAngle
         * @param {number} angle
         */
        setAngle(angle: number): void;


        /**
         * @method setBatchNode
         * @param {cc.ParticleBatchNode} batchNode
         */
        setBatchNode(batchNode: cc.ParticleBatchNode): void;


        /**
         * @method getTangentialAccelVar
         * @return {number}
         */
        getTangentialAccelVar(): number;


        /**
         * @method getEmitterMode
         * @return {cc.ParticleSystem.Mode}
         */
        getEmitterMode(): cc.ParticleSystem.Mode;


        /**
         * @method setEndSpinVar
         * @param {number} endSpinVar
         */
        setEndSpinVar(endSpinVar: number): void;


        /**
         * @method initWithFile
         * @param {string} plistFile
         * @return {boolean}
         */
        initWithFile(plistFile: string): boolean;


        /**
         * @method getAngleVar
         * @return {number}
         */
        getAngleVar(): number;


        /**
         * @method setStartColor
         * @param {cc.Color} color
         */
        setStartColor(color: cc.Color): void;


        /**
         * @method getRotatePerSecondVar
         * @return {number}
         */
        getRotatePerSecondVar(): number;


        /**
         * @method getEndSize
         * @return {number}
         */
        getEndSize(): number;


        /**
         * @method getLife
         * @return {number}
         */
        getLife(): number;


        /**
         * @method isPaused
         * @return {boolean}
         */
        isPaused(): boolean;


        /**
         * @method setSpeedVar
         * @param {number} speed
         */
        setSpeedVar(speed: number): void;


        /**
         * @method setAutoRemoveOnFinish
         * @param {boolean} var
         */
        setAutoRemoveOnFinish(var: boolean): void;


        /**
         * @method setGravity
         * @param {cc.Vec2} g
         */
        setGravity(g: cc.Vec2): void;


        /**
         * @method postStep
         */
        postStep(): void;


        /**
         * @method setEmissionRate
         * @param {number} rate
         */
        setEmissionRate(rate: number): void;


        /**
         * @method getEndColorVar
         * @return {cc.Color}
         */
        getEndColorVar(): cc.Color;


        /**
         * @method getRotationIsDir
         * @return {boolean}
         */
        getRotationIsDir(): boolean;


        /**
         * @method getEmissionRate
         * @return {number}
         */
        getEmissionRate(): number;


        /**
         * @method getEndColor
         * @return {cc.Color}
         */
        getEndColor(): cc.Color;


        /**
         * @method getLifeVar
         * @return {number}
         */
        getLifeVar(): number;


        /**
         * @method setStartSizeVar
         * @param {number} sizeVar
         */
        setStartSizeVar(sizeVar: number): void;


        /**
         * @method getStartRadius
         * @return {number}
         */
        getStartRadius(): number;


        /**
         * @method getParticleCount
         * @return {unsigned int}
         */
        getParticleCount(): unsigned int;


        /**
         * @method getStartRadiusVar
         * @return {number}
         */
        getStartRadiusVar(): number;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method setStartColorVar
         * @param {cc.Color} color
         */
        setStartColorVar(color: cc.Color): void;


        /**
         * @method setEndSpin
         * @param {number} endSpin
         */
        setEndSpin(endSpin: number): void;


        /**
         * @method setRadialAccel
         * @param {number} t
         */
        setRadialAccel(t: number): void;


        /**
         * @method initWithDictionary
        * @param {{}|{}} dictionary
        * @param {string} dirname
        * @return {boolean|boolean}
*/
        initWithDictionary(dictionary: {}, dirname: string): boolean|boolean;



        /**
         * @method isAutoRemoveOnFinish
         * @return {boolean}
         */
        isAutoRemoveOnFinish(): boolean;


        /**
         * @method getTotalParticles
         * @return {number}
         */
        getTotalParticles(): number;


        /**
         * @method setStartRadiusVar
         * @param {number} startRadiusVar
         */
        setStartRadiusVar(startRadiusVar: number): void;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method getEndRadiusVar
         * @return {number}
         */
        getEndRadiusVar(): number;


        /**
         * @method getStartColorVar
         * @return {cc.Color}
         */
        getStartColorVar(): cc.Color;


        /**
         * @method create
         * @param {string} plistFile
         * @return {cc.ParticleSystem}
         */
        static create(plistFile: string): cc.ParticleSystem;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSystem}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSystem;


        /**
         * @method ParticleSystem
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSystemQuad
 */
declare namespace cc {
    class ParticleSystem  extends ParticleSystem {

        /**
         * @method setDisplayFrame
         * @param {cc.SpriteFrame} spriteFrame
         */
        setDisplayFrame(spriteFrame: cc.SpriteFrame): void;


        /**
         * @method setTextureWithRect
         * @param {cc.Texture2D} texture
         * @param {cc.Rect} rect
         */
        setTextureWithRect(texture: cc.Texture2D, rect: cc.Rect): void;


        /**
         * @method listenRendererRecreated
         * @param {cc.EventCustom} event
         */
        listenRendererRecreated(event: cc.EventCustom): void;


        /**
         * @method create
        * @param {string|{}} filename
        * @return {cc.ParticleSystemQuad|cc.ParticleSystemQuad|cc.ParticleSystemQuad}
*/
        create(dictionary: {}): cc.ParticleSystemQuad|cc.ParticleSystemQuad|cc.ParticleSystemQuad;



        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSystemQuad}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSystemQuad;


        /**
         * @method ParticleSystemQuad
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleFire
 */
declare namespace cc {
    class ParticleFire  extends ParticleSystemQuad {

        /**
         * @method create
         * @return {cc.ParticleFire}
         */
        static create(): cc.ParticleFire;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleFire}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleFire;


        /**
         * @method ParticleFire
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleFireworks
 */
declare namespace cc {
    class ParticleFireworks  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleFireworks}
         */
        static create(): cc.ParticleFireworks;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleFireworks}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleFireworks;


        /**
         * @method ParticleFireworks
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSun
 */
declare namespace cc {
    class ParticleSun  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleSun}
         */
        static create(): cc.ParticleSun;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSun}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSun;


        /**
         * @method ParticleSun
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleGalaxy
 */
declare namespace cc {
    class ParticleGalaxy  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleGalaxy}
         */
        static create(): cc.ParticleGalaxy;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleGalaxy}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleGalaxy;


        /**
         * @method ParticleGalaxy
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleFlower
 */
declare namespace cc {
    class ParticleFlower  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleFlower}
         */
        static create(): cc.ParticleFlower;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleFlower}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleFlower;


        /**
         * @method ParticleFlower
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleMeteor
 */
declare namespace cc {
    class ParticleMeteor  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleMeteor}
         */
        static create(): cc.ParticleMeteor;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleMeteor}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleMeteor;


        /**
         * @method ParticleMeteor
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSpiral
 */
declare namespace cc {
    class ParticleSpiral  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleSpiral}
         */
        static create(): cc.ParticleSpiral;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSpiral}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSpiral;


        /**
         * @method ParticleSpiral
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleExplosion
 */
declare namespace cc {
    class ParticleExplosion  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleExplosion}
         */
        static create(): cc.ParticleExplosion;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleExplosion}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleExplosion;


        /**
         * @method ParticleExplosion
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSmoke
 */
declare namespace cc {
    class ParticleSmoke  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleSmoke}
         */
        static create(): cc.ParticleSmoke;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSmoke}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSmoke;


        /**
         * @method ParticleSmoke
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleSnow
 */
declare namespace cc {
    class ParticleSnow  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleSnow}
         */
        static create(): cc.ParticleSnow;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleSnow}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleSnow;


        /**
         * @method ParticleSnow
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParticleRain
 */
declare namespace cc {
    class ParticleRain  extends ParticleSystemQuad {

        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method initWithTotalParticles
         * @param {number} numberOfParticles
         * @return {boolean}
         */
        initWithTotalParticles(numberOfParticles: number): boolean;


        /**
         * @method create
         * @return {cc.ParticleRain}
         */
        static create(): cc.ParticleRain;


        /**
         * @method createWithTotalParticles
         * @param {number} numberOfParticles
         * @return {cc.ParticleRain}
         */
        static createWithTotalParticles(numberOfParticles: number): cc.ParticleRain;


        /**
         * @method ParticleRain
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ProtectedNode
 */
declare namespace cc {
    class ProtectedNode  extends Node {

        /**
         * @method addProtectedChild
        * @param {cc.Node|cc.Node|cc.Node} child
        * @param {number|number} localZOrder
        * @param {number} tag
*/
        addProtectedChild(child: cc.Node, localZOrder: number, tag: number): void;



        /**
         * @method disableCascadeColor
         */
        disableCascadeColor(): void;


        /**
         * @method removeProtectedChildByTag
         * @param {number} tag
         * @param {boolean} cleanup
         */
        removeProtectedChildByTag(tag: number, cleanup: boolean): void;


        /**
         * @method reorderProtectedChild
         * @param {cc.Node} child
         * @param {number} localZOrder
         */
        reorderProtectedChild(child: cc.Node, localZOrder: number): void;


        /**
         * @method removeAllProtectedChildrenWithCleanup
         * @param {boolean} cleanup
         */
        removeAllProtectedChildrenWithCleanup(cleanup: boolean): void;


        /**
         * @method disableCascadeOpacity
         */
        disableCascadeOpacity(): void;


        /**
         * @method sortAllProtectedChildren
         */
        sortAllProtectedChildren(): void;


        /**
         * @method getProtectedChildByTag
         * @param {number} tag
         * @return {cc.Node}
         */
        getProtectedChildByTag(tag: number): cc.Node;


        /**
         * @method removeProtectedChild
         * @param {cc.Node} child
         * @param {boolean} cleanup
         */
        removeProtectedChild(child: cc.Node, cleanup: boolean): void;


        /**
         * @method removeAllProtectedChildren
         */
        removeAllProtectedChildren(): void;


        /**
         * @method create
         * @return {cc.ProtectedNode}
         */
        static create(): cc.ProtectedNode;


        /**
         * @method ProtectedNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Sprite
 */
declare namespace cc {
    class Sprite  extends Node {

        /**
         * @method setSpriteFrame
        * @param {cc.SpriteFrame|string} newFrame
*/
        setSpriteFrame(spriteFrameName: string): void;



        /**
         * @method setTexture
        * @param {cc.Texture2D|string} texture
*/
        setTexture(filename: string): void;



        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


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
         * @method setRotationSkewX
         * @param {number} rotationX
         */
        setRotationSkewX(rotationX: number): void;


        /**
         * @method setRotationSkewY
         * @param {number} rotationY
         */
        setRotationSkewY(rotationY: number): void;


        /**
         * @method getResourceType
         * @return {number}
         */
        getResourceType(): number;


        /**
         * @method initWithTexture
        * @param {cc.Texture2D|cc.Texture2D|cc.Texture2D} texture
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @return {boolean|boolean|boolean}
*/
        initWithTexture(texture: cc.Texture2D, rect: cc.Rect, rotated: boolean): boolean|boolean|boolean;



        /**
         * @method getBatchNode
         * @return {cc.SpriteBatchNode}
         */
        getBatchNode(): cc.SpriteBatchNode;


        /**
         * @method getOffsetPosition
         * @return {cc.Vec2}
         */
        getOffsetPosition(): cc.Vec2;


        /**
         * @method removeAllChildrenWithCleanup
         * @param {boolean} cleanup
         */
        removeAllChildrenWithCleanup(cleanup: boolean): void;


        /**
         * @method setTextureRect
        * @param {cc.Rect|cc.Rect} rect
        * @param {boolean} rotated
        * @param {cc.Vec2} untrimmedSize
*/
        setTextureRect(rect: cc.Rect, rotated: boolean, untrimmedSize: cc.Vec2): void;



        /**
         * @method initWithSpriteFrameName
         * @param {string} spriteFrameName
         * @return {boolean}
         */
        initWithSpriteFrameName(spriteFrameName: string): boolean;


        /**
         * @method isFrameDisplayed
         * @param {cc.SpriteFrame} frame
         * @return {boolean}
         */
        isFrameDisplayed(frame: cc.SpriteFrame): boolean;


        /**
         * @method getAtlasIndex
         * @return {number}
         */
        getAtlasIndex(): number;


        /**
         * @method setBatchNode
         * @param {cc.SpriteBatchNode} spriteBatchNode
         */
        setBatchNode(spriteBatchNode: cc.SpriteBatchNode): void;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method setDisplayFrameWithAnimationName
         * @param {string} animationName
         * @param {number} frameIndex
         */
        setDisplayFrameWithAnimationName(animationName: string, frameIndex: number): void;


        /**
         * @method setTextureAtlas
         * @param {cc.TextureAtlas} textureAtlas
         */
        setTextureAtlas(textureAtlas: cc.TextureAtlas): void;


        /**
         * @method getSpriteFrame
         * @return {cc.SpriteFrame}
         */
        getSpriteFrame(): cc.SpriteFrame;


        /**
         * @method getResourceName
         * @return {string}
         */
        getResourceName(): string;


        /**
         * @method isDirty
         * @return {boolean}
         */
        isDirty(): boolean;


        /**
         * @method setAtlasIndex
         * @param {number} atlasIndex
         */
        setAtlasIndex(atlasIndex: number): void;


        /**
         * @method setDirty
         * @param {boolean} dirty
         */
        setDirty(dirty: boolean): void;


        /**
         * @method isTextureRectRotated
         * @return {boolean}
         */
        isTextureRectRotated(): boolean;


        /**
         * @method getTextureRect
         * @return {cc.Rect}
         */
        getTextureRect(): cc.Rect;


        /**
         * @method initWithFile
        * @param {string|string} filename
        * @param {cc.Rect} rect
        * @return {boolean|boolean}
*/
        initWithFile(filename: string, rect: cc.Rect): boolean|boolean;



        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method getTextureAtlas
         * @return {cc.TextureAtlas}
         */
        getTextureAtlas(): cc.TextureAtlas;


        /**
         * @method initWithSpriteFrame
         * @param {cc.SpriteFrame} spriteFrame
         * @return {boolean}
         */
        initWithSpriteFrame(spriteFrame: cc.SpriteFrame): boolean;


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
         * @method setVertexRect
         * @param {cc.Rect} rect
         */
        setVertexRect(rect: cc.Rect): void;


        /**
         * @method Sprite
         * @constructor
         */
        constructor();


    }
}

/**
 * @class RenderTexture
 */
declare namespace cc {
    class RenderTexture  extends Node {

        /**
         * @method setVirtualViewport
         * @param {cc.Vec2} rtBegin
         * @param {cc.Rect} fullRect
         * @param {cc.Rect} fullViewport
         */
        setVirtualViewport(rtBegin: cc.Vec2, fullRect: cc.Rect, fullViewport: cc.Rect): void;


        /**
         * @method clearStencil
         * @param {number} stencilValue
         */
        clearStencil(stencilValue: number): void;


        /**
         * @method getClearDepth
         * @return {number}
         */
        getClearDepth(): number;


        /**
         * @method getClearStencil
         * @return {number}
         */
        getClearStencil(): number;


        /**
         * @method end
         */
        end(): void;


        /**
         * @method setClearStencil
         * @param {number} clearStencil
         */
        setClearStencil(clearStencil: number): void;


        /**
         * @method setSprite
         * @param {cc.Sprite} sprite
         */
        setSprite(sprite: cc.Sprite): void;


        /**
         * @method getSprite
         * @return {cc.Sprite}
         */
        getSprite(): cc.Sprite;


        /**
         * @method isAutoDraw
         * @return {boolean}
         */
        isAutoDraw(): boolean;


        /**
         * @method setKeepMatrix
         * @param {boolean} keepMatrix
         */
        setKeepMatrix(keepMatrix: boolean): void;


        /**
         * @method setClearFlags
         * @param {unsigned int} clearFlags
         */
        setClearFlags(clearFlags: unsigned int): void;


        /**
         * @method begin
         */
        begin(): void;


        /**
         * @method saveToFile
        * @param {string|string} filename
        * @param {cc.Image.Format|boolean} format
        * @param {boolean|Function} isRGBA
        * @param {Function} callback
        * @return {boolean|boolean}
*/
        saveToFile(filename: string, format: cc.Image.Format, isRGBA: boolean, callback: Function): boolean|boolean;



        /**
         * @method setAutoDraw
         * @param {boolean} isAutoDraw
         */
        setAutoDraw(isAutoDraw: boolean): void;


        /**
         * @method setClearColor
         * @param {cc.Color} clearColor
         */
        setClearColor(clearColor: cc.Color): void;


        /**
         * @method beginWithClear
        * @param {number|number|number} r
        * @param {number|number|number} g
        * @param {number|number|number} b
        * @param {number|number|number} a
        * @param {number|number} depthValue
        * @param {number} stencilValue
*/
        beginWithClear(r: number, g: number, b: number, a: number, depthValue: number, stencilValue: number): void;



        /**
         * @method clearDepth
         * @param {number} depthValue
         */
        clearDepth(depthValue: number): void;


        /**
         * @method getClearColor
         * @return {cc.Color}
         */
        getClearColor(): cc.Color;


        /**
         * @method clear
         * @param {number} r
         * @param {number} g
         * @param {number} b
         * @param {number} a
         */
        clear(r: number, g: number, b: number, a: number): void;


        /**
         * @method getClearFlags
         * @return {unsigned int}
         */
        getClearFlags(): unsigned int;


        /**
         * @method newImage
         * @return {cc.Image}
         */
        newImage(): cc.Image;


        /**
         * @method setClearDepth
         * @param {number} clearDepth
         */
        setClearDepth(clearDepth: number): void;


        /**
         * @method initWithWidthAndHeight
        * @param {number|number} w
        * @param {number|number} h
        * @param {cc.Texture2D.PixelFormat|cc.Texture2D.PixelFormat} format
        * @param {unsigned int} depthStencilFormat
        * @return {boolean|boolean}
*/
        initWithWidthAndHeight(w: number, h: number, format: cc.Texture2D.PixelFormat, depthStencilFormat: unsigned int): boolean|boolean;



        /**
         * @method create
        * @param {number|number|number} w
        * @param {number|number|number} h
        * @param {cc.Texture2D.PixelFormat|cc.Texture2D.PixelFormat} format
        * @param {unsigned int} depthStencilFormat
        * @return {cc.RenderTexture|cc.RenderTexture|cc.RenderTexture}
*/
        create(w: number, h: number, format: cc.Texture2D.PixelFormat, depthStencilFormat: unsigned int): cc.RenderTexture|cc.RenderTexture|cc.RenderTexture;



        /**
         * @method RenderTexture
         * @constructor
         */
        constructor();


    }
}

/**
 * @class GLProgram
 */
declare namespace cc {
    class GLProgram {

        /**
         * @method getFragmentShaderLog
         * @return {string}
         */
        getFragmentShaderLog(): string;


        /**
         * @method bindAttribLocation
         * @param {string} attributeName
         * @param {unsigned int} index
         */
        bindAttribLocation(attributeName: string, index: unsigned int): void;


        /**
         * @method getUniformLocationForName
         * @param {string} name
         * @return {number}
         */
        getUniformLocationForName(name: string): number;


        /**
         * @method use
         */
        use(): void;


        /**
         * @method getVertexShaderLog
         * @return {string}
         */
        getVertexShaderLog(): string;


        /**
         * @method getUniform
         * @param {string} name
         * @return {cc.Uniform}
         */
        getUniform(name: string): cc.Uniform;


        /**
         * @method initWithByteArrays
        * @param {string|string} vShaderByteArray
        * @param {string|string} fShaderByteArray
        * @param {string} compileTimeDefines
        * @return {boolean|boolean}
*/
        initWithByteArrays(vShaderByteArray: string, fShaderByteArray: string, compileTimeDefines: string): boolean|boolean;



        /**
         * @method getProgram
         * @return {unsigned int}
         */
        getProgram(): unsigned int;


        /**
         * @method setUniformLocationWith2f
        * @param {number|number|number|number} location
        * @param {number|number|number|number} f1
        * @param {number|number|number} f2
        * @param {number|number} f3
        * @param {number} f4
*/
        setUniformLocationWith2f(location: number, f1: number, f2: number, f3: number, f4: number): void;



        /**
         * @method initWithFilenames
        * @param {string|string} vShaderFilename
        * @param {string|string} fShaderFilename
        * @param {string} compileTimeDefines
        * @return {boolean|boolean}
*/
        initWithFilenames(vShaderFilename: string, fShaderFilename: string, compileTimeDefines: string): boolean|boolean;



        /**
         * @method setUniformsForBuiltins
        * @param {cc.AffineTransform} modelView
*/
        setUniformsForBuiltins(modelView: cc.AffineTransform): void;



        /**
         * @method updateUniforms
         */
        updateUniforms(): void;


        /**
         * @method link
         * @return {boolean}
         */
        link(): boolean;


        /**
         * @method reset
         */
        reset(): void;


        /**
         * @method getProgramLog
         * @return {string}
         */
        getProgramLog(): string;


        /**
         * @method getAttribLocation
         * @param {string} attributeName
         * @return {number}
         */
        getAttribLocation(attributeName: string): number;


        /**
         * @method getUniformLocation
         * @param {string} attributeName
         * @return {number}
         */
        getUniformLocation(attributeName: string): number;


        /**
         * @method setUniformLocationWith2i
        * @param {number|number|number|number} location
        * @param {number|number|number|number} i1
        * @param {number|number|number} i2
        * @param {number|number} i3
        * @param {number} i4
*/
        setUniformLocationWith2i(location: number, i1: number, i2: number, i3: number, i4: number): void;



        /**
         * @method createWithByteArrays
        * @param {string|string} vShaderByteArray
        * @param {string|string} fShaderByteArray
        * @param {string} compileTimeDefines
        * @return {cc.GLProgram|cc.GLProgram}
*/
        createWithByteArrays(vShaderByteArray: string, fShaderByteArray: string, compileTimeDefines: string): cc.GLProgram|cc.GLProgram;



        /**
         * @method createWithFilenames
        * @param {string|string} vShaderFilename
        * @param {string|string} fShaderFilename
        * @param {string} compileTimeDefines
        * @return {cc.GLProgram|cc.GLProgram}
*/
        createWithFilenames(vShaderFilename: string, fShaderFilename: string, compileTimeDefines: string): cc.GLProgram|cc.GLProgram;



        /**
         * @method GLProgram
         * @constructor
         */
        constructor();


    }
}

/**
 * @class GLProgramCache
 */
declare namespace cc {
    class ShaderCache {

        /**
         * @method notifyAllGLProgramsCreated
         */
        notifyAllGLProgramsCreated(): void;


        /**
         * @method loadDefaultGLPrograms
         */
        loadDefaultGLPrograms(): void;


        /**
         * @method reloadDefaultGLProgramsRelativeToLights
         */
        reloadDefaultGLProgramsRelativeToLights(): void;


        /**
         * @method addGLProgram
         * @param {cc.GLProgram} program
         * @param {string} key
         */
        addGLProgram(program: cc.GLProgram, key: string): void;


        /**
         * @method reloadDefaultGLPrograms
         */
        reloadDefaultGLPrograms(): void;


        /**
         * @method getGLProgram
         * @param {string} key
         * @return {cc.GLProgram}
         */
        getGLProgram(key: string): cc.GLProgram;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {cc.GLProgramCache}
         */
        static getInstance(): cc.GLProgramCache;


        /**
         * @method GLProgramCache
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TextureCache
 */
declare namespace cc {
    class TextureCache {

        /**
         * @method reloadTexture
         * @param {string} fileName
         * @return {boolean}
         */
        reloadTexture(fileName: string): boolean;


        /**
         * @method unbindAllImageAsync
         */
        unbindAllImageAsync(): void;


        /**
         * @method removeTextureForKey
         * @param {string} key
         */
        removeTextureForKey(key: string): void;


        /**
         * @method removeAllTextures
         */
        removeAllTextures(): void;


        /**
         * @method addImageAsync
         * @param {string} filepath
         * @param {Function} callback
         */
        addImageAsync(filepath: string, callback: Function): void;


        /**
         * @method getAllTextures
         * @return {any[]}
         */
        getAllTextures(): any[];


        /**
         * @method getDescription
         * @return {string}
         */
        getDescription(): string;


        /**
         * @method getCachedTextureInfo
         * @return {string}
         */
        getCachedTextureInfo(): string;


        /**
         * @method addImage
        * @param {cc.Image|string} image
        * @param {string} key
        * @return {cc.Texture2D|cc.Texture2D}
*/
        addImage(image: cc.Image, key: string): cc.Texture2D|cc.Texture2D;



        /**
         * @method unbindImageAsync
         * @param {string} filename
         */
        unbindImageAsync(filename: string): void;


        /**
         * @method getTextureForKey
         * @param {string} key
         * @return {cc.Texture2D}
         */
        getTextureForKey(key: string): cc.Texture2D;


        /**
         * @method getTextureFilePath
         * @param {cc.Texture2D} texture
         * @return {string}
         */
        getTextureFilePath(texture: cc.Texture2D): string;


        /**
         * @method renameTextureWithKey
         * @param {string} srcName
         * @param {string} dstName
         */
        renameTextureWithKey(srcName: string, dstName: string): void;


        /**
         * @method removeUnusedTextures
         */
        removeUnusedTextures(): void;


        /**
         * @method removeTexture
         * @param {cc.Texture2D} texture
         */
        removeTexture(texture: cc.Texture2D): void;


        /**
         * @method waitForQuit
         */
        waitForQuit(): void;


        /**
         * @method TextureCache
         * @constructor
         */
        constructor();


    }
}

/**
 * @class Device
 */
declare namespace cc {
    class Device {

        /**
         * @method setAccelerometerEnabled
         * @param {boolean} isEnabled
         */
        static setAccelerometerEnabled(isEnabled: boolean): void;


        /**
         * @method setAccelerometerInterval
         * @param {number} interval
         */
        static setAccelerometerInterval(interval: number): void;


        /**
         * @method setKeepScreenOn
         * @param {boolean} keepScreenOn
         */
        static setKeepScreenOn(keepScreenOn: boolean): void;


        /**
         * @method vibrate
         * @param {number} duration
         */
        static vibrate(duration: number): void;


        /**
         * @method getDPI
         * @return {number}
         */
        static getDPI(): number;


    }
}

/**
 * @class SAXParser
 */
declare namespace cc {
    class PlistParser {

        /**
         * @method init
         * @param {string} encoding
         * @return {boolean}
         */
        init(encoding: string): boolean;


    }
}

/**
 * @class Application
 */
declare namespace cc {
    class Application {

        /**
         * @method getTargetPlatform
         * @return {cc.ApplicationProtocol.Platform}
         */
        getTargetPlatform(): cc.ApplicationProtocol.Platform;


        /**
         * @method getCurrentLanguage
         * @return {cc.LanguageType}
         */
        getCurrentLanguage(): cc.LanguageType;


        /**
         * @method openURL
         * @param {string} url
         * @return {boolean}
         */
        openURL(url: string): boolean;


        /**
         * @method getVersion
         * @return {string}
         */
        getVersion(): string;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {cc.Application}
         */
        static getInstance(): cc.Application;


    }
}

/**
 * @class SpriteBatchNode
 */
declare namespace cc {
    class SpriteBatchNode  extends Node {

        /**
         * @method appendChild
         * @param {cc.Sprite} sprite
         */
        appendChild(sprite: cc.Sprite): void;


        /**
         * @method addSpriteWithoutQuad
         * @param {cc.Sprite} child
         * @param {number} z
         * @param {number} aTag
         * @return {cc.SpriteBatchNode}
         */
        addSpriteWithoutQuad(child: cc.Sprite, z: number, aTag: number): cc.SpriteBatchNode;


        /**
         * @method reorderBatch
         * @param {boolean} reorder
         */
        reorderBatch(reorder: boolean): void;


        /**
         * @method initWithTexture
         * @param {cc.Texture2D} tex
         * @param {number} capacity
         * @return {boolean}
         */
        initWithTexture(tex: cc.Texture2D, capacity: number): boolean;


        /**
         * @method getBlendFunc
         * @return {cc.BlendFunc}
         */
        getBlendFunc(): cc.BlendFunc;


        /**
         * @method lowestAtlasIndexInChild
         * @param {cc.Sprite} sprite
         * @return {number}
         */
        lowestAtlasIndexInChild(sprite: cc.Sprite): number;


        /**
         * @method atlasIndexForChild
         * @param {cc.Sprite} sprite
         * @param {number} z
         * @return {number}
         */
        atlasIndexForChild(sprite: cc.Sprite, z: number): number;


        /**
         * @method setTextureAtlas
         * @param {cc.TextureAtlas} textureAtlas
         */
        setTextureAtlas(textureAtlas: cc.TextureAtlas): void;


        /**
         * @method initWithFile
         * @param {string} fileImage
         * @param {number} capacity
         * @return {boolean}
         */
        initWithFile(fileImage: string, capacity: number): boolean;


        /**
         * @method getTexture
         * @return {cc.Texture2D}
         */
        getTexture(): cc.Texture2D;


        /**
         * @method increaseAtlasCapacity
         */
        increaseAtlasCapacity(): void;


        /**
         * @method insertQuadFromSprite
         * @param {cc.Sprite} sprite
         * @param {number} index
         */
        insertQuadFromSprite(sprite: cc.Sprite, index: number): void;


        /**
         * @method setTexture
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): void;


        /**
         * @method rebuildIndexInOrder
         * @param {cc.Sprite} parent
         * @param {number} index
         * @return {number}
         */
        rebuildIndexInOrder(parent: cc.Sprite, index: number): number;


        /**
         * @method highestAtlasIndexInChild
         * @param {cc.Sprite} sprite
         * @return {number}
         */
        highestAtlasIndexInChild(sprite: cc.Sprite): number;


        /**
         * @method removeChildAtIndex
         * @param {number} index
         * @param {boolean} doCleanup
         */
        removeChildAtIndex(index: number, doCleanup: boolean): void;


        /**
         * @method removeSpriteFromAtlas
         * @param {cc.Sprite} sprite
         */
        removeSpriteFromAtlas(sprite: cc.Sprite): void;


        /**
         * @method setBlendFunc
         * @param {cc.BlendFunc} blendFunc
         */
        setBlendFunc(blendFunc: cc.BlendFunc): void;


        /**
         * @method create
         * @param {string} fileImage
         * @param {number} capacity
         * @return {cc.SpriteBatchNode}
         */
        static create(fileImage: string, capacity: number): cc.SpriteBatchNode;


        /**
         * @method createWithTexture
         * @param {cc.Texture2D} tex
         * @param {number} capacity
         * @return {cc.SpriteBatchNode}
         */
        static createWithTexture(tex: cc.Texture2D, capacity: number): cc.SpriteBatchNode;


        /**
         * @method SpriteBatchNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class SpriteFrameCache
 */
declare namespace cc {
    class SpriteFrameCache {

        /**
         * @method reloadTexture
         * @param {string} plist
         * @return {boolean}
         */
        reloadTexture(plist: string): boolean;


        /**
         * @method addSpriteFramesWithFileContent
         * @param {string} plist_content
         * @param {cc.Texture2D} texture
         */
        addSpriteFramesWithFileContent(plist_content: string, texture: cc.Texture2D): void;


        /**
         * @method addSpriteFrame
         * @param {cc.SpriteFrame} frame
         * @param {string} frameName
         */
        addSpriteFrame(frame: cc.SpriteFrame, frameName: string): void;


        /**
         * @method addSpriteFramesWithFile
        * @param {string|string|string} plist
        * @param {string|cc.Texture2D} textureFileName
*/
        addSpriteFramesWithFile(plist: string, texture: cc.Texture2D): void;



        /**
         * @method getSpriteFrameByName
         * @param {string} name
         * @return {cc.SpriteFrame}
         */
        getSpriteFrameByName(name: string): cc.SpriteFrame;


        /**
         * @method removeSpriteFramesFromFile
         * @param {string} plist
         */
        removeSpriteFramesFromFile(plist: string): void;


        /**
         * @method init
         * @return {boolean}
         */
        init(): boolean;


        /**
         * @method removeSpriteFrames
         */
        removeSpriteFrames(): void;


        /**
         * @method removeUnusedSpriteFrames
         */
        removeUnusedSpriteFrames(): void;


        /**
         * @method removeSpriteFramesFromFileContent
         * @param {string} plist_content
         */
        removeSpriteFramesFromFileContent(plist_content: string): void;


        /**
         * @method removeSpriteFrameByName
         * @param {string} name
         */
        removeSpriteFrameByName(name: string): void;


        /**
         * @method isSpriteFramesWithFileLoaded
         * @param {string} plist
         * @return {boolean}
         */
        isSpriteFramesWithFileLoaded(plist: string): boolean;


        /**
         * @method removeSpriteFramesFromTexture
         * @param {cc.Texture2D} texture
         */
        removeSpriteFramesFromTexture(texture: cc.Texture2D): void;


        /**
         * @method destroyInstance
         */
        static destroyInstance(): void;


        /**
         * @method getInstance
         * @return {cc.SpriteFrameCache}
         */
        static getInstance(): cc.SpriteFrameCache;


    }
}

/**
 * @class TextFieldTTF
 */
declare namespace cc {
    class TextFieldTTF  extends Label {

        /**
         * @method getCharCount
         * @return {unsigned int}
         */
        getCharCount(): unsigned int;


        /**
         * @method setCursorChar
         * @param {string} cursor
         */
        setCursorChar(cursor: string): void;


        /**
         * @method setSecureTextEntry
         * @param {boolean} value
         */
        setSecureTextEntry(value: boolean): void;


        /**
         * @method setCursorEnabled
         * @param {boolean} enabled
         */
        setCursorEnabled(enabled: boolean): void;


        /**
         * @method getColorSpaceHolder
         * @return {cc.Color}
         */
        getColorSpaceHolder(): cc.Color;


        /**
         * @method initWithPlaceHolder
        * @param {string|string} placeholder
        * @param {string|cc.Vec2} fontName
        * @param {number|cc.TextHAlignment} fontSize
        * @param {string} fontName
        * @param {number} fontSize
        * @return {boolean|boolean}
*/
        initWithPlaceHolder(placeholder: string, dimensions: cc.Vec2, alignment: cc.TextHAlignment, fontName: string, fontSize: number): boolean|boolean;



        /**
         * @method appendString
         * @param {string} text
         */
        appendString(text: string): void;


        /**
         * @method getPasswordTextStyle
         * @return {string}
         */
        getPasswordTextStyle(): string;


        /**
         * @method setPasswordTextStyle
         * @param {string} text
         */
        setPasswordTextStyle(text: string): void;


        /**
         * @method setColorSpaceHolder
        * @param {cc.Color|cc.Color} color
*/
        setColorSpaceHolder(color: cc.Color): void;



        /**
         * @method detachWithIME
         * @return {boolean}
         */
        detachWithIME(): boolean;


        /**
         * @method setPlaceHolder
         * @param {string} text
         */
        setPlaceHolder(text: string): void;


        /**
         * @method setCursorFromPoint
         * @param {cc.Vec2} point
         */
        setCursorFromPoint(point: cc.Vec2): void;


        /**
         * @method isSecureTextEntry
         * @return {boolean}
         */
        isSecureTextEntry(): boolean;


        /**
         * @method getPlaceHolder
         * @return {string}
         */
        getPlaceHolder(): string;


        /**
         * @method setCursorPosition
         * @param {unsigned int} cursorPosition
         */
        setCursorPosition(cursorPosition: unsigned int): void;


        /**
         * @method attachWithIME
         * @return {boolean}
         */
        attachWithIME(): boolean;


        /**
         * @method textFieldWithPlaceHolder
        * @param {string|string} placeholder
        * @param {string|cc.Vec2} fontName
        * @param {number|cc.TextHAlignment} fontSize
        * @param {string} fontName
        * @param {number} fontSize
        * @return {cc.TextFieldTTF|cc.TextFieldTTF}
*/
        textFieldWithPlaceHolder(placeholder: string, dimensions: cc.Vec2, alignment: cc.TextHAlignment, fontName: string, fontSize: number): cc.TextFieldTTF|cc.TextFieldTTF;



        /**
         * @method TextFieldTTF
         * @constructor
         */
        constructor();


    }
}

/**
 * @class ParallaxNode
 */
declare namespace cc {
    class ParallaxNode  extends Node {

        /**
         * @method addChild
         * @param {cc.Node} child
         * @param {number} z
         * @param {cc.Vec2} parallaxRatio
         * @param {cc.Vec2} positionOffset
         */
        addChild(child: cc.Node, z: number, parallaxRatio: cc.Vec2, positionOffset: cc.Vec2): void;


        /**
         * @method removeAllChildrenWithCleanup
         * @param {boolean} cleanup
         */
        removeAllChildrenWithCleanup(cleanup: boolean): void;


        /**
         * @method create
         * @return {cc.ParallaxNode}
         */
        static create(): cc.ParallaxNode;


        /**
         * @method ParallaxNode
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXObject
 */
declare namespace cc {
    class TMXObject {

        /**
         * @method getGid
         * @return {unsigned int}
         */
        getGid(): unsigned int;


        /**
         * @method setObjectName
         * @param {string} name
         */
        setObjectName(name: string): void;


        /**
         * @method getObjectSize
         * @return {cc.Vec2}
         */
        getObjectSize(): cc.Vec2;


        /**
         * @method getProperty
         * @param {string} propertyName
         * @return {cc.Value}
         */
        getProperty(propertyName: string): cc.Value;


        /**
         * @method getObjectVisible
         * @return {boolean}
         */
        getObjectVisible(): boolean;


        /**
         * @method getType
         * @return {cc.TMXObjectType}
         */
        getType(): cc.TMXObjectType;


        /**
         * @method getId
         * @return {number}
         */
        getId(): number;


        /**
         * @method getObjectRotation
         * @return {number}
         */
        getObjectRotation(): number;


        /**
         * @method getProperties
         * @return {{}}
         */
        getProperties(): {};


        /**
         * @method getOffset
         * @return {cc.Vec2}
         */
        getOffset(): cc.Vec2;


        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method getObjectName
         * @return {string}
         */
        getObjectName(): string;


        /**
         * @method getNode
         * @return {cc.Node}
         */
        getNode(): cc.Node;


        /**
         * @method TMXObject
         * @constructor
         * @param {{}} objectInfo
         * @param {cc.TMXMapInfo} mapInfo
         * @param {cc.Vec2} groupSize
         * @param {cc.Color} color
         */
        constructor(objectInfo: {}, mapInfo: cc.TMXMapInfo, groupSize: cc.Vec2, color: cc.Color);


    }
}

/**
 * @class TMXObjectImage
 */
declare namespace cc {
    class TMXObjectImage  extends Sprite {

        /**
         * @method TMXObjectImage
         * @constructor
         * @param {cc.TMXObject} container
         * @param {cc.TMXMapInfo} mapInfo
         */
        constructor(container: cc.TMXObject, mapInfo: cc.TMXMapInfo);


    }
}

/**
 * @class TMXObjectShape
 */
declare namespace cc {
    class TMXObjectShape  extends DrawNode {

        /**
         * @method TMXObjectShape
         * @constructor
         * @param {cc.TMXObject} container
         * @param {cc.TMXMapInfo} mapInfo
         * @param {cc.Color} color
         */
        constructor(container: cc.TMXObject, mapInfo: cc.TMXMapInfo, color: cc.Color);


    }
}

/**
 * @class TMXObjectGroup
 */
declare namespace cc {
    class TMXObjectGroup  extends Node {

        /**
         * @method setPositionOffset
         * @param {cc.Vec2} offset
         */
        setPositionOffset(offset: cc.Vec2): void;


        /**
         * @method getProperty
         * @param {string} propertyName
         * @return {cc.Value}
         */
        getProperty(propertyName: string): cc.Value;


        /**
         * @method getPositionOffset
         * @return {cc.Vec2}
         */
        getPositionOffset(): cc.Vec2;


        /**
         * @method getObject
         * @param {string} objectName
         * @return {cc.TMXObject}
         */
        getObject(objectName: string): cc.TMXObject;


        /**
         * @method getObjects
         * @return {any[]}
         */
        getObjects(): any[];


        /**
         * @method setGroupName
         * @param {string} groupName
         */
        setGroupName(groupName: string): void;


        /**
         * @method getProperties
        * @return {{}|{}}
*/
        getProperties(): {}|{};



        /**
         * @method getGroupName
         * @return {string}
         */
        getGroupName(): string;


        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method TMXObjectGroup
         * @constructor
         * @param {cc.TMXObjectGroupInfo} groupInfo
         * @param {cc.TMXMapInfo} mapInfo
         */
        constructor(groupInfo: cc.TMXObjectGroupInfo, mapInfo: cc.TMXMapInfo);


    }
}

/**
 * @class TMXLayerInfo
 */
declare namespace cc {
    class TMXLayerInfo {

        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method getProperties
         * @return {{}}
         */
        getProperties(): {};


        /**
         * @method TMXLayerInfo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXObjectGroupInfo
 */
declare namespace cc {
    class TMXObjectGroupInfo {

        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method getProperties
         * @return {{}}
         */
        getProperties(): {};


        /**
         * @method TMXObjectGroupInfo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXTilesetInfo
 */
declare namespace cc {
    class TMXTilesetInfo {

        /**
         * @method getRectForGID
         * @param {unsigned int} gid
         * @return {cc.Rect}
         */
        getRectForGID(gid: unsigned int): cc.Rect;


        /**
         * @method TMXTilesetInfo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXMapInfo
 */
declare namespace cc {
    class TMXMapInfo {

        /**
         * @method getAllChildren
        * @return {any[]|any[]}
*/
        getAllChildren(): any[]|any[];



        /**
         * @method getHexSideLength
         * @return {number}
         */
        getHexSideLength(): number;


        /**
         * @method setTileSize
         * @param {cc.Vec2} tileSize
         */
        setTileSize(tileSize: cc.Vec2): void;


        /**
         * @method getOrientation
         * @return {number}
         */
        getOrientation(): number;


        /**
         * @method setObjectGroups
         * @param {any[]} groups
         */
        setObjectGroups(groups: any[]): void;


        /**
         * @method setLayers
         * @param {any[]} layers
         */
        setLayers(layers: any[]): void;


        /**
         * @method parseXMLFile
         * @param {string} xmlFilename
         * @return {boolean}
         */
        parseXMLFile(xmlFilename: string): boolean;


        /**
         * @method getParentElement
         * @return {number}
         */
        getParentElement(): number;


        /**
         * @method setTMXFileName
         * @param {string} fileName
         */
        setTMXFileName(fileName: string): void;


        /**
         * @method parseXMLString
         * @param {string} xmlString
         * @return {boolean}
         */
        parseXMLString(xmlString: string): boolean;


        /**
         * @method getLayers
        * @return {any[]|any[]}
*/
        getLayers(): any[]|any[];



        /**
         * @method getStaggerAxis
         * @return {number}
         */
        getStaggerAxis(): number;


        /**
         * @method setHexSideLength
         * @param {number} hexSideLength
         */
        setHexSideLength(hexSideLength: number): void;


        /**
         * @method initWithTMXFile
         * @param {string} tmxFile
         * @return {boolean}
         */
        initWithTMXFile(tmxFile: string): boolean;


        /**
         * @method getParentGID
         * @return {number}
         */
        getParentGID(): number;


        /**
         * @method getTilesets
        * @return {any[]|any[]}
*/
        getTilesets(): any[]|any[];



        /**
         * @method setParentElement
         * @param {number} element
         */
        setParentElement(element: number): void;


        /**
         * @method initWithXML
         * @param {string} tmxString
         * @param {string} resourcePath
         * @return {boolean}
         */
        initWithXML(tmxString: string, resourcePath: string): boolean;


        /**
         * @method setParentGID
         * @param {number} gid
         */
        setParentGID(gid: number): void;


        /**
         * @method getLayerAttribs
         * @return {number}
         */
        getLayerAttribs(): number;


        /**
         * @method getTileSize
         * @return {cc.Vec2}
         */
        getTileSize(): cc.Vec2;


        /**
         * @method setAllChildren
         * @param {any[]} children
         */
        setAllChildren(children: any[]): void;


        /**
         * @method getTileProperties
         * @return {{}}
         */
        getTileProperties(): {};


        /**
         * @method isStoringCharacters
         * @return {boolean}
         */
        isStoringCharacters(): boolean;


        /**
         * @method getExternalTilesetFileName
         * @return {string}
         */
        getExternalTilesetFileName(): string;


        /**
         * @method getObjectGroups
        * @return {any[]|any[]}
*/
        getObjectGroups(): any[]|any[];



        /**
         * @method getTMXFileName
         * @return {string}
         */
        getTMXFileName(): string;


        /**
         * @method setStaggerIndex
         * @param {number} staggerIndex
         */
        setStaggerIndex(staggerIndex: number): void;


        /**
         * @method setCurrentString
         * @param {string} currentString
         */
        setCurrentString(currentString: string): void;


        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method setOrientation
         * @param {number} orientation
         */
        setOrientation(orientation: number): void;


        /**
         * @method setTileProperties
         * @param {{}} tileProperties
         */
        setTileProperties(tileProperties: {}): void;


        /**
         * @method setMapSize
         * @param {cc.Vec2} mapSize
         */
        setMapSize(mapSize: cc.Vec2): void;


        /**
         * @method getCurrentString
         * @return {string}
         */
        getCurrentString(): string;


        /**
         * @method setStoringCharacters
         * @param {boolean} storingCharacters
         */
        setStoringCharacters(storingCharacters: boolean): void;


        /**
         * @method setStaggerAxis
         * @param {number} staggerAxis
         */
        setStaggerAxis(staggerAxis: number): void;


        /**
         * @method getMapSize
         * @return {cc.Vec2}
         */
        getMapSize(): cc.Vec2;


        /**
         * @method setTilesets
         * @param {any[]} tilesets
         */
        setTilesets(tilesets: any[]): void;


        /**
         * @method getProperties
        * @return {{}|{}}
*/
        getProperties(): {}|{};



        /**
         * @method getStaggerIndex
         * @return {number}
         */
        getStaggerIndex(): number;


        /**
         * @method setLayerAttribs
         * @param {number} layerAttribs
         */
        setLayerAttribs(layerAttribs: number): void;


        /**
         * @method create
         * @param {string} tmxFile
         * @return {cc.TMXMapInfo}
         */
        static create(tmxFile: string): cc.TMXMapInfo;


        /**
         * @method createWithXML
         * @param {string} tmxString
         * @param {string} resourcePath
         * @return {cc.TMXMapInfo}
         */
        static createWithXML(tmxString: string, resourcePath: string): cc.TMXMapInfo;


        /**
         * @method TMXMapInfo
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXLayer
 */
declare namespace cc {
    class TMXLayer  extends SpriteBatchNode {

        /**
         * @method getTileGIDAt
         * @param {cc.Vec2} tileCoordinate
         * @param {cc.TMXTileFlags_} flags
         * @return {unsigned int}
         */
        getTileGIDAt(tileCoordinate: cc.Vec2, flags: cc.TMXTileFlags_): unsigned int;


        /**
         * @method getPositionAt
         * @param {cc.Vec2} tileCoordinate
         * @return {cc.Vec2}
         */
        getPositionAt(tileCoordinate: cc.Vec2): cc.Vec2;


        /**
         * @method setLayerOrientation
         * @param {number} orientation
         */
        setLayerOrientation(orientation: number): void;


        /**
         * @method setTileOpacity
         * @param {string} opacity
         */
        setTileOpacity(opacity: string): void;


        /**
         * @method releaseMap
         */
        releaseMap(): void;


        /**
         * @method getLayerSize
         * @return {cc.Vec2}
         */
        getLayerSize(): cc.Vec2;


        /**
         * @method setMapTileSize
         * @param {cc.Vec2} size
         */
        setMapTileSize(size: cc.Vec2): void;


        /**
         * @method getLayerOrientation
         * @return {number}
         */
        getLayerOrientation(): number;


        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method setLayerName
         * @param {string} layerName
         */
        setLayerName(layerName: string): void;


        /**
         * @method removeTileAt
         * @param {cc.Vec2} tileCoordinate
         */
        removeTileAt(tileCoordinate: cc.Vec2): void;


        /**
         * @method initWithTilesetInfo
         * @param {cc.TMXTilesetInfo} tilesetInfo
         * @param {cc.TMXLayerInfo} layerInfo
         * @param {cc.TMXMapInfo} mapInfo
         * @return {boolean}
         */
        initWithTilesetInfo(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): boolean;


        /**
         * @method setupTiles
         */
        setupTiles(): void;


        /**
         * @method setTileGID
        * @param {unsigned int|unsigned int} gid
        * @param {cc.Vec2|cc.Vec2} tileCoordinate
        * @param {cc.TMXTileFlags_} flags
*/
        setTileGID(gid: unsigned int, tileCoordinate: cc.Vec2, flags: cc.TMXTileFlags_): void;



        /**
         * @method getMapTileSize
         * @return {cc.Vec2}
         */
        getMapTileSize(): cc.Vec2;


        /**
         * @method getProperty
         * @param {string} propertyName
         * @return {cc.Value}
         */
        getProperty(propertyName: string): cc.Value;


        /**
         * @method setLayerSize
         * @param {cc.Vec2} size
         */
        setLayerSize(size: cc.Vec2): void;


        /**
         * @method getLayerName
         * @return {string}
         */
        getLayerName(): string;


        /**
         * @method setTileSet
         * @param {cc.TMXTilesetInfo} info
         */
        setTileSet(info: cc.TMXTilesetInfo): void;


        /**
         * @method getTileSet
         * @return {cc.TMXTilesetInfo}
         */
        getTileSet(): cc.TMXTilesetInfo;


        /**
         * @method getProperties
        * @return {{}|{}}
*/
        getProperties(): {}|{};



        /**
         * @method getTileAt
         * @param {cc.Vec2} tileCoordinate
         * @return {cc.Sprite}
         */
        getTileAt(tileCoordinate: cc.Vec2): cc.Sprite;


        /**
         * @method create
         * @param {cc.TMXTilesetInfo} tilesetInfo
         * @param {cc.TMXLayerInfo} layerInfo
         * @param {cc.TMXMapInfo} mapInfo
         * @return {cc.TMXLayer}
         */
        static create(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): cc.TMXLayer;


        /**
         * @method TMXLayer
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TMXTiledMap
 */
declare namespace cc {
    class TMXTiledMap  extends Node {

        /**
         * @method getProperty
         * @param {string} propertyName
         * @return {cc.Value}
         */
        getProperty(propertyName: string): cc.Value;


        /**
         * @method getLayerNum
         * @return {number}
         */
        getLayerNum(): number;


        /**
         * @method setMapSize
         * @param {cc.Vec2} mapSize
         */
        setMapSize(mapSize: cc.Vec2): void;


        /**
         * @method getObjectGroup
         * @param {string} groupName
         * @return {cc.TMXObjectGroup}
         */
        getObjectGroup(groupName: string): cc.TMXObjectGroup;


        /**
         * @method getObjectGroups
         * @return {any[]}
         */
        getObjectGroups(): any[];


        /**
         * @method getResourceFile
         * @return {string}
         */
        getResourceFile(): string;


        /**
         * @method initWithTMXFile
         * @param {string} tmxFile
         * @return {boolean}
         */
        initWithTMXFile(tmxFile: string): boolean;


        /**
         * @method getTileSize
         * @return {cc.Vec2}
         */
        getTileSize(): cc.Vec2;


        /**
         * @method getMapSize
         * @return {cc.Vec2}
         */
        getMapSize(): cc.Vec2;


        /**
         * @method initWithXML
         * @param {string} tmxString
         * @param {string} resourcePath
         * @return {boolean}
         */
        initWithXML(tmxString: string, resourcePath: string): boolean;


        /**
         * @method getProperties
         * @return {{}}
         */
        getProperties(): {};


        /**
         * @method getPropertiesForGID
        * @param {number|number} GID
        * @param {cc.Value} value
        * @return {boolean|cc.Value}
*/
        getPropertiesForGID(GID: number, value: cc.Value): boolean|cc.Value;



        /**
         * @method setTileSize
         * @param {cc.Vec2} tileSize
         */
        setTileSize(tileSize: cc.Vec2): void;


        /**
         * @method setProperties
         * @param {{}} properties
         */
        setProperties(properties: {}): void;


        /**
         * @method getLayer
         * @param {string} layerName
         * @return {cc.TMXLayer}
         */
        getLayer(layerName: string): cc.TMXLayer;


        /**
         * @method getMapOrientation
         * @return {number}
         */
        getMapOrientation(): number;


        /**
         * @method setMapOrientation
         * @param {number} mapOrientation
         */
        setMapOrientation(mapOrientation: number): void;


        /**
         * @method create
         * @param {string} tmxFile
         * @return {cc.TMXTiledMap}
         */
        static create(tmxFile: string): cc.TMXTiledMap;


        /**
         * @method createWithXML
         * @param {string} tmxString
         * @param {string} resourcePath
         * @return {cc.TMXTiledMap}
         */
        static createWithXML(tmxString: string, resourcePath: string): cc.TMXTiledMap;


        /**
         * @method TMXTiledMap
         * @constructor
         */
        constructor();


    }
}

/**
 * @class TileMapAtlas
 */
declare namespace cc {
    class TileMapAtlas  extends AtlasNode {

        /**
         * @method initWithTileFile
         * @param {string} tile
         * @param {string} mapFile
         * @param {number} tileWidth
         * @param {number} tileHeight
         * @return {boolean}
         */
        initWithTileFile(tile: string, mapFile: string, tileWidth: number, tileHeight: number): boolean;


        /**
         * @method releaseMap
         */
        releaseMap(): void;


        /**
         * @method getTileAt
         * @param {cc.Vec2} position
         * @return {cc.Color}
         */
        getTileAt(position: cc.Vec2): cc.Color;


        /**
         * @method setTile
         * @param {cc.Color} tile
         * @param {cc.Vec2} position
         */
        setTile(tile: cc.Color, position: cc.Vec2): void;


        /**
         * @method create
         * @param {string} tile
         * @param {string} mapFile
         * @param {number} tileWidth
         * @param {number} tileHeight
         * @return {cc.TileMapAtlas}
         */
        static create(tile: string, mapFile: string, tileWidth: number, tileHeight: number): cc.TileMapAtlas;


        /**
         * @method TileMapAtlas
         * @constructor
         */
        constructor();


    }
}

/**
 * @class BaseJSAction
 */
declare namespace cc {
    class BaseJSAction  extends Action {

        /**
         * @method BaseJSAction
         * @constructor
         */
        constructor();


    }
}

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

/**
 * @class VideoPlayer
 */
declare namespace ccui {
    class VideoPlayer  extends Widget {

        /**
         * @method getFileName
         * @return {string}
         */
        getFileName(): string;


        /**
         * @method getURL
         * @return {string}
         */
        getURL(): string;


        /**
         * @method play
         */
        play(): void;


        /**
         * @method setKeepAspectRatioEnabled
         * @param {boolean} enable
         */
        setKeepAspectRatioEnabled(enable: boolean): void;


        /**
         * @method currentTime
         * @return {number}
         */
        currentTime(): number;


        /**
         * @method stop
         */
        stop(): void;


        /**
         * @method setFullScreenEnabled
         * @param {boolean} fullscreen
         */
        setFullScreenEnabled(fullscreen: boolean): void;


        /**
         * @method setFileName
         * @param {string} videoPath
         */
        setFileName(videoPath: string): void;


        /**
         * @method setURL
         * @param {string} _videoURL
         */
        setURL(_videoURL: string): void;


        /**
         * @method isKeepAspectRatioEnabled
         * @return {boolean}
         */
        isKeepAspectRatioEnabled(): boolean;


        /**
         * @method onPlayEvent
         * @param {number} event
         */
        onPlayEvent(event: number): void;


        /**
         * @method isFullScreenEnabled
         * @return {boolean}
         */
        isFullScreenEnabled(): boolean;


        /**
         * @method addEventListener
         * @param {Function} callback
         */
        addEventListener(callback: Function): void;


        /**
         * @method duration
         * @return {number}
         */
        duration(): number;


        /**
         * @method isPlaying
         * @return {boolean}
         */
        isPlaying(): boolean;


        /**
         * @method seekTo
         * @param {number} sec
         */
        seekTo(sec: number): void;


        /**
         * @method create
         * @return {cc.experimental.ui.VideoPlayer}
         */
        static create(): cc.experimental.ui.VideoPlayer;


        /**
         * @method VideoPlayer
         * @constructor
         */
        constructor();


    }
}

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

/**
 * @class GraphicsNode
 */
declare namespace cc {
    class GraphicsNode  extends Node {

        /**
         * @method quadraticCurveTo
         * @param {number} cx
         * @param {number} cy
         * @param {number} x
         * @param {number} y
         */
        quadraticCurveTo(cx: number, cy: number, x: number, y: number): void;


        /**
         * @method moveTo
         * @param {number} x
         * @param {number} y
         */
        moveTo(x: number, y: number): void;


        /**
         * @method lineTo
         * @param {number} x
         * @param {number} y
         */
        lineTo(x: number, y: number): void;


        /**
         * @method stroke
         */
        stroke(): void;


        /**
         * @method arc
         * @param {number} cx
         * @param {number} cy
         * @param {number} r
         * @param {number} startAngle
         * @param {number} endAngle
         * @param {boolean} counterclockwise
         */
        arc(cx: number, cy: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean): void;


        /**
         * @method setLineJoin
         * @param {creator.LineJoin} join
         */
        setLineJoin(join: creator.LineJoin): void;


        /**
         * @method close
         */
        close(): void;


        /**
         * @method ellipse
         * @param {number} cx
         * @param {number} cy
         * @param {number} rx
         * @param {number} ry
         */
        ellipse(cx: number, cy: number, rx: number, ry: number): void;


        /**
         * @method setLineWidth
         * @param {number} width
         */
        setLineWidth(width: number): void;


        /**
         * @method fill
         */
        fill(): void;


        /**
         * @method getStrokeColor
         * @return {cc.Color}
         */
        getStrokeColor(): cc.Color;


        /**
         * @method setLineCap
         * @param {creator.LineCap} cap
         */
        setLineCap(cap: creator.LineCap): void;


        /**
         * @method circle
         * @param {number} cx
         * @param {number} cy
         * @param {number} r
         */
        circle(cx: number, cy: number, r: number): void;


        /**
         * @method roundRect
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @param {number} r
         */
        roundRect(x: number, y: number, w: number, h: number, r: number): void;


        /**
         * @method draw
         * @param {cc.Renderer} renderer
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} flags
         */
        draw(renderer: cc.Renderer, transform: cc.AffineTransform, flags: unsigned int): void;


        /**
         * @method bezierCurveTo
         * @param {number} c1x
         * @param {number} c1y
         * @param {number} c2x
         * @param {number} c2y
         * @param {number} x
         * @param {number} y
         */
        bezierCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): void;


        /**
         * @method arcTo
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} radius
         */
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;


        /**
         * @method fillRect
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        fillRect(x: number, y: number, w: number, h: number): void;


        /**
         * @method onDraw
         * @param {cc.AffineTransform} transform
         * @param {unsigned int} flags
         */
        onDraw(transform: cc.AffineTransform, flags: unsigned int): void;


        /**
         * @method setFillColor
         * @param {cc.Color} color
         */
        setFillColor(color: cc.Color): void;


        /**
         * @method getFillColor
         * @return {cc.Color}
         */
        getFillColor(): cc.Color;


        /**
         * @method beginPath
         */
        beginPath(): void;


        /**
         * @method setDeviceRatio
         * @param {number} ratio
         */
        setDeviceRatio(ratio: number): void;


        /**
         * @method rect
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         */
        rect(x: number, y: number, w: number, h: number): void;


        /**
         * @method getMiterLimit
         * @return {number}
         */
        getMiterLimit(): number;


        /**
         * @method getLineJoin
         * @return {creator.LineJoin}
         */
        getLineJoin(): creator.LineJoin;


        /**
         * @method getLineCap
         * @return {creator.LineCap}
         */
        getLineCap(): creator.LineCap;


        /**
         * @method setMiterLimit
         * @param {number} miterLimit
         */
        setMiterLimit(miterLimit: number): void;


        /**
         * @method clear
         */
        clear(): void;


        /**
         * @method getDeviceRatio
         * @return {number}
         */
        getDeviceRatio(): number;


        /**
         * @method getLineWidth
         * @return {number}
         */
        getLineWidth(): number;


        /**
         * @method setStrokeColor
         * @param {cc.Color} color
         */
        setStrokeColor(color: cc.Color): void;


        /**
         * @method create
         * @return {creator.GraphicsNode}
         */
        static create(): creator.GraphicsNode;


        /**
         * @method GraphicsNode
         * @constructor
         */
        constructor();


    }
}

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
