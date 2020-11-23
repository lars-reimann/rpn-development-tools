// @ts-ignore
import antlr4 from "antlr4"
import {rpnLexer as RpnLexer} from "./rpnLexer"
import {rpnParser as RpnParser} from "./rpnParser"
import {rpnVisitor as RpnVisitor} from "./rpnVisitor"
import {AstNode, Literal} from "../model/astNodes";

export default function parse(program: string): AstNode[] {
    const chars = new antlr4.InputStream(program);
    const lexer = new RpnLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new RpnParser(tokens);
    const parseTree = parser.program()
    const astCreator = new AstCreator()
    parseTree.accept(astCreator)
    console.log(astCreator.nodes)
    return astCreator.nodes
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

    visitAction(ctx: any) {
        // @ts-ignore
        this.visitChildren(ctx)
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
}