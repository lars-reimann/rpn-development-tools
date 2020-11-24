// @ts-ignore
import antlr4 from "antlr4"
import {rpnLexer as RpnLexer} from "./rpnLexer"
import {rpnParser as RpnParser} from "./rpnParser"
import {rpnVisitor as RpnVisitor} from "./rpnVisitor"
import {AstNode, Literal, Operator, Program, VariableAccess} from "../model/astNodes";

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
        console.log(ctx.errorCode);
        console.log(ctx.action());
        for (const action of ctx.action()) {
            this.visitAction(action)
        }
    }

    visitBooleanLiteral(ctx: any) {
        const value = ctx.getText() === 'True'
        this.nodes.push(new Literal(value))
    }

    visitHexadecimalLiteral(ctx: any) {
        const value = Number.parseInt(ctx.HEXADECIMAL().getText(), 16)
        this.nodes.push(new Literal(value))
    }

    visitDecimalLiteral(ctx: any) {
        const value = Number.parseFloat(ctx.DECIMAL().getText())
        this.nodes.push(new Literal(value))
    }

    visitOctalLiteral(ctx: any) {
        const value = Number.parseInt(ctx.OCTAL().getText(), 8)
        this.nodes.push(new Literal(value))
    }

    visitStringLiteral(ctx: any) {
        const text = ctx.STRING().getText()
        const value = text.slice(1, text.length - 1)
        this.nodes.push(new Literal(value))
    }

    visitVariableAccess(ctx: any) {
        const name = ctx.id().getText()
        const specifiedType = ctx.type()

        let type: "boolean" | "number" | "string"
        if (!specifiedType) {
            type = "number"
        } else {
            const specifiedTypeText = specifiedType.getText().toLowerCase()
            if (specifiedTypeText === "string") {
                type = "string"
            } else if (specifiedTypeText === "bool" || specifiedTypeText === "boolean") {
                type = "boolean"
            } else {
                type = "number"
            }
        }

        this.nodes.push(new VariableAccess(name, type))
    };


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
//     // Visit a parse tree produced by rpnParser#quit.
//     rpnVisitor.prototype.visitQuit = function(ctx) {
//         return this.visitChildren(ctx);
//     };
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
}