// @ts-ignore
import antlr4 from "antlr4"
import {rpnLexer as RpnLexer} from "./rpnLexer"
import {rpnParser as RpnParser} from "./rpnParser"
import {rpnVisitor as RpnVisitor} from "./rpnVisitor"
import {AstNode, Literal, Operator, Program} from "../model/astNodes";

export default function parse(program: string): Program {
    const chars = new antlr4.InputStream(program);
    const lexer = new RpnLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new RpnParser(tokens);
    const parseTree = parser.program()
    const astCreator = new AstCreator()
    parseTree.accept(astCreator)
    return new Program(astCreator.nodes)
}

class AstCreator extends RpnVisitor {
    readonly nodes: AstNode[]

    constructor() {
        super();
        this.nodes = []
    }

    visitProgram(ctx: any) {
        for (const action of ctx.action()) {
            this.visitAction(action)
        }
    }

    visitNumberLiteral(ctx: any) {
        const value = parseFloat(ctx.NUMBER().getText())
        this.nodes.push(new Literal(value))
    }

    visitStringLiteral(ctx: any) {
        const text = ctx.STRING().getText()
        const value = text.slice(1, text.length - 1)
        this.nodes.push(new Literal(value))
    }

//     // Visit a parse tree produced by rpnParser#variableAccess.
//     rpnVisitor.prototype.visitVariableAccess = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#assignment.
//     rpnVisitor.prototype.visitAssignment = function(ctx) {
//         return this.visitChildren(ctx);
//     };

    visitOperator(ctx: any) {
        this.nodes.push(new Operator(ctx.getText()))
    }

// // Visit a parse tree produced by rpnParser#ifAction.
//     rpnVisitor.prototype.visitIfAction = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#elseAction.
//     rpnVisitor.prototype.visitElseAction = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#label.
//     rpnVisitor.prototype.visitLabel = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#gotoAction.
//     rpnVisitor.prototype.visitGotoAction = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#store.
//     rpnVisitor.prototype.visitStore = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#load.
//     rpnVisitor.prototype.visitLoad = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#storePop.
//     rpnVisitor.prototype.visitStorePop = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#type.
//     rpnVisitor.prototype.visitType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#booleanType.
//     rpnVisitor.prototype.visitBooleanType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#numberType.
//     rpnVisitor.prototype.visitNumberType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#distanceType.
//     rpnVisitor.prototype.visitDistanceType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#areaType.
//     rpnVisitor.prototype.visitAreaType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#volumeType.
//     rpnVisitor.prototype.visitVolumeType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#volumeRateType.
//     rpnVisitor.prototype.visitVolumeRateType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#temperatureType.
//     rpnVisitor.prototype.visitTemperatureType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#angleType.
//     rpnVisitor.prototype.visitAngleType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#globalPositionType.
//     rpnVisitor.prototype.visitGlobalPositionType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#angularVelocityType.
//     rpnVisitor.prototype.visitAngularVelocityType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#speedType.
//     rpnVisitor.prototype.visitSpeedType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#accelerationType.
//     rpnVisitor.prototype.visitAccelerationType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#timeType.
//     rpnVisitor.prototype.visitTimeType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#powerType.
//     rpnVisitor.prototype.visitPowerType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#weightType.
//     rpnVisitor.prototype.visitWeightType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#weightRateType.
//     rpnVisitor.prototype.visitWeightRateType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#electricalCurrentType.
//     rpnVisitor.prototype.visitElectricalCurrentType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#electricalPotentialType.
//     rpnVisitor.prototype.visitElectricalPotentialType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#frequencyType.
//     rpnVisitor.prototype.visitFrequencyType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#densityType.
//     rpnVisitor.prototype.visitDensityType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#pressureType.
//     rpnVisitor.prototype.visitPressureType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#torqueType.
//     rpnVisitor.prototype.visitTorqueType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#miscellaneousType.
//     rpnVisitor.prototype.visitMiscellaneousType = function(ctx) {
//         return this.visitChildren(ctx);
//     };
//
//
// // Visit a parse tree produced by rpnParser#stringType.
//     rpnVisitor.prototype.visitStringType = function(ctx) {
//         return this.visitChildren(ctx);
//     };

//     variableAccess
// | assignment
// | operator
// | ifAction
// | elseAction
// | label
// | gotoAction
// | store
// | load
// | storePop
}