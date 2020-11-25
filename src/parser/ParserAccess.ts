// @ts-ignore
import antlr4 from "antlr4"
import {rpnLexer as RpnLexer} from "./rpnLexer"
import {rpnParser as RpnParser} from "./rpnParser"
import {rpnVisitor as RpnVisitor} from "./rpnVisitor"
import {
    Action,
    Goto,
    Jump,
    JumpIfFalse,
    Label,
    Literal,
    Load,
    Operator,
    Program,
    Quit,
    Store,
    StorePop,
    VariableAccess,
    VariableAssignment
} from "../model/astNodes";
import {Ace, Range as AceRange} from "ace-builds";

export default function parse(program: string): Program {
    const chars = new antlr4.InputStream(program);
    const lexer = new RpnLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new RpnParser(tokens);
    const parseTree = parser.program()
    const astCreator = new AstCreator()
    parseTree.accept(astCreator)
    return new Program(astCreator.nodes)
}

class AstCreator extends RpnVisitor {
    readonly nodes: Action[]

    constructor() {
        super();
        this.nodes = []
    }

    private static getLocation(ctx: any): Ace.Range {
        return new AceRange(ctx.start.line, ctx.start.column, ctx.end.line, ctx.end.column)
    }

    visitProgram(ctx: any) {
        for (const action of ctx.sequence().action()) {
            this.visitAction(action)
        }
    }

    visitBooleanLiteral(ctx: any) {
        const value = ctx.getText() === 'True'
        this.nodes.push(new Literal(value, AstCreator.getLocation(ctx)))
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
    }

    visitAssignment(ctx: any) {
        const name = ctx.id().getText()
        const specifiedType = ctx.type()?.getText()

        this.nodes.push(new VariableAssignment(name, specifiedType))
    }

    visitOperator(ctx: any) {
        this.nodes.push(new Operator(ctx.getText()))
    }

    visitIfAction(ctx: any) {
        const startIf = this.nodes.length

        console.log(ctx);

        for (const action of ctx.trueActions.children) {
            this.visitAction(action)
        }

        const startFalseBranch = this.nodes.length + 2
        this.nodes.splice(startIf, 0, new JumpIfFalse(startFalseBranch))

        for (const action of ctx.falseActions?.children ?? []) {
            this.visitAction(action)
        }

        const endIf = this.nodes.length + 2
        this.nodes.splice(startFalseBranch - 1, 0, new Jump(endIf))
    }

    visitLabel(ctx: any) {
        const index = Number.parseInt(ctx.getText().replace(":", ""), 10)
        this.nodes.push(new Label(index))
    }

    visitGotoAction(ctx: any) {
        const index = Number.parseInt(ctx.getText().replace("g", ""), 10)
        this.nodes.push(new Goto(index))
    }

    visitQuit(ctx: any) {
        this.nodes.push(new Quit())
    }

    visitStore(ctx: any) {
        const index = Number.parseInt(ctx.getText().replace("s", ""), 10)
        this.nodes.push(new Store(index))
    }

    visitLoad(ctx: any) {
        const index = Number.parseInt(ctx.getText().replace("l", ""), 10)
        this.nodes.push(new Load(index))
    }

    visitStorePop(ctx: any) {
        const index = Number.parseInt(ctx.getText().replace("sp", ""), 10)
        this.nodes.push(new StorePop(index))
    }
}