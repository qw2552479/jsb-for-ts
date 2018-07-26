
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
