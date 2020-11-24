// Generated from src/parser/rpn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rpnListener = require('./rpnListener').rpnListener;
var rpnVisitor = require('./rpnVisitor').rpnVisitor;

var grammarFileName = "rpn.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u018f\u0147\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0003\u0002\u0007\u0002\\\n\u0002\f\u0002\u000e",
    "\u0002_\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002c\n\u0002\f\u0002",
    "\u000e\u0002f\u000b\u0002\u0007\u0002h\n\u0002\f\u0002\u000e\u0002k",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "}\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0007\t\u008b\n\t\f\t\u000e\t\u008e\u000b\t\u0003\t\u0003\t\u0007\t",
    "\u0092\n\t\f\t\u000e\t\u0095\u000b\t\u0003\t\u0003\t\u0007\t\u0099\n",
    "\t\f\t\u000e\t\u009c\u000b\t\u0003\t\u0003\t\u0007\t\u00a0\n\t\f\t\u000e",
    "\t\u00a3\u000b\t\u0005\t\u00a5\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0007",
    "\n\u00ab\n\n\f\n\u000e\n\u00ae\u000b\n\u0003\n\u0003\n\u0007\n\u00b2",
    "\n\n\f\n\u000e\n\u00b5\u000b\n\u0003\n\u0003\n\u0007\n\u00b9\n\n\f\n",
    "\u000e\n\u00bc\u000b\n\u0003\n\u0003\n\u0007\n\u00c0\n\n\f\n\u000e\n",
    "\u00c3\u000b\n\u0003\n\u0005\n\u00c6\n\n\u0003\n\u0007\n\u00c9\n\n\f",
    "\n\u000e\n\u00cc\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u00d2\n\u000b\f\u000b\u000e\u000b\u00d5\u000b\u000b\u0003\u000b",
    "\u0007\u000b\u00d8\n\u000b\f\u000b\u000e\u000b\u00db\u000b\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0007\r\u00e1\n\r\f\r\u000e\r\u00e4\u000b",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0007\u000e\u00ea\n\u000e",
    "\f\u000e\u000e\u000e\u00ed\u000b\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0100\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0119\n",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003",
    "%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003",
    "*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003-\u0002\u0002.\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDFHJLNPRTVX\u0002\u001b\u0003\u0002\u0004\u0005\u0003",
    "\u0002\t\n\u0004\u0002\t\t\u000bW\u0003\u0002\\]\u0003\u0002^z\u0003",
    "\u0002{\u0098\u0003\u0002\u0099\u00be\u0003\u0002\u00bf\u00c5\u0003",
    "\u0002\u00c6\u00ca\u0003\u0002\u00cb\u00d2\u0003\u0002\u00d3\u00d8\u0003",
    "\u0002\u00d9\u00e4\u0003\u0002\u00e5\u00f7\u0003\u0002\u00f8\u00fd\u0003",
    "\u0002\u00fe\u0109\u0003\u0002\u010a\u010c\u0003\u0002\u010d\u0116\u0003",
    "\u0002\u0117\u011a\u0003\u0002\u011b\u011e\u0003\u0002\u011f\u0120\u0003",
    "\u0002\u0121\u0129\u0003\u0002\u012a\u0133\u0003\u0002\u0134\u015d\u0004",
    "\u0002__\u015e\u016a\u0003\u0002\u016b\u0183\u0002\u0151\u0002]\u0003",
    "\u0002\u0002\u0002\u0004|\u0003\u0002\u0002\u0002\u0006~\u0003\u0002",
    "\u0002\u0002\b\u0080\u0003\u0002\u0002\u0002\n\u0082\u0003\u0002\u0002",
    "\u0002\f\u0084\u0003\u0002\u0002\u0002\u000e\u0086\u0003\u0002\u0002",
    "\u0002\u0010\u0088\u0003\u0002\u0002\u0002\u0012\u00a8\u0003\u0002\u0002",
    "\u0002\u0014\u00cf\u0003\u0002\u0002\u0002\u0016\u00dc\u0003\u0002\u0002",
    "\u0002\u0018\u00de\u0003\u0002\u0002\u0002\u001a\u00e7\u0003\u0002\u0002",
    "\u0002\u001c\u00f0\u0003\u0002\u0002\u0002\u001e\u00f2\u0003\u0002\u0002",
    "\u0002 \u00f4\u0003\u0002\u0002\u0002\"\u00f6\u0003\u0002\u0002\u0002",
    "$\u00f8\u0003\u0002\u0002\u0002&\u00fa\u0003\u0002\u0002\u0002(\u00ff",
    "\u0003\u0002\u0002\u0002*\u0101\u0003\u0002\u0002\u0002,\u0118\u0003",
    "\u0002\u0002\u0002.\u011a\u0003\u0002\u0002\u00020\u011c\u0003\u0002",
    "\u0002\u00022\u011e\u0003\u0002\u0002\u00024\u0120\u0003\u0002\u0002",
    "\u00026\u0122\u0003\u0002\u0002\u00028\u0124\u0003\u0002\u0002\u0002",
    ":\u0126\u0003\u0002\u0002\u0002<\u0128\u0003\u0002\u0002\u0002>\u012a",
    "\u0003\u0002\u0002\u0002@\u012c\u0003\u0002\u0002\u0002B\u012e\u0003",
    "\u0002\u0002\u0002D\u0130\u0003\u0002\u0002\u0002F\u0132\u0003\u0002",
    "\u0002\u0002H\u0134\u0003\u0002\u0002\u0002J\u0136\u0003\u0002\u0002",
    "\u0002L\u0138\u0003\u0002\u0002\u0002N\u013a\u0003\u0002\u0002\u0002",
    "P\u013c\u0003\u0002\u0002\u0002R\u013e\u0003\u0002\u0002\u0002T\u0140",
    "\u0003\u0002\u0002\u0002V\u0142\u0003\u0002\u0002\u0002X\u0144\u0003",
    "\u0002\u0002\u0002Z\\\u0007\u0003\u0002\u0002[Z\u0003\u0002\u0002\u0002",
    "\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^i\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`d\u0005",
    "\u0004\u0003\u0002ac\u0007\u0003\u0002\u0002ba\u0003\u0002\u0002\u0002",
    "cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002g`\u0003\u0002",
    "\u0002\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002j\u0003\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002",
    "\u0002l}\u0005\u0006\u0004\u0002m}\u0005\b\u0005\u0002n}\u0005\n\u0006",
    "\u0002o}\u0005\f\u0007\u0002p}\u0005\u000e\b\u0002q}\u0005\u0010\t\u0002",
    "r}\u0005\u0012\n\u0002s}\u0005\u0016\f\u0002t}\u0005\u0018\r\u0002u",
    "}\u0005\u001a\u000e\u0002v}\u0005\u001c\u000f\u0002w}\u0005\u001e\u0010",
    "\u0002x}\u0005 \u0011\u0002y}\u0005\"\u0012\u0002z}\u0005$\u0013\u0002",
    "{}\u0005&\u0014\u0002|l\u0003\u0002\u0002\u0002|m\u0003\u0002\u0002",
    "\u0002|n\u0003\u0002\u0002\u0002|o\u0003\u0002\u0002\u0002|p\u0003\u0002",
    "\u0002\u0002|q\u0003\u0002\u0002\u0002|r\u0003\u0002\u0002\u0002|s\u0003",
    "\u0002\u0002\u0002|t\u0003\u0002\u0002\u0002|u\u0003\u0002\u0002\u0002",
    "|v\u0003\u0002\u0002\u0002|w\u0003\u0002\u0002\u0002|x\u0003\u0002\u0002",
    "\u0002|y\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002",
    "\u0002\u0002}\u0005\u0003\u0002\u0002\u0002~\u007f\t\u0002\u0002\u0002",
    "\u007f\u0007\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u018a\u0002\u0002",
    "\u0081\t\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u018b\u0002\u0002",
    "\u0083\u000b\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u018c\u0002\u0002",
    "\u0085\r\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u018e\u0002\u0002",
    "\u0087\u000f\u0003\u0002\u0002\u0002\u0088\u008c\u0007\u0006\u0002\u0002",
    "\u0089\u008b\u0007\u0003\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002",
    "\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002",
    "\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0093\u0005\u0014\u000b\u0002",
    "\u0090\u0092\u0007\u0003\u0002\u0002\u0091\u0090\u0003\u0002\u0002\u0002",
    "\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u00a4\u0003\u0002\u0002\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u009a\u0007\u0007\u0002\u0002",
    "\u0097\u0099\u0007\u0003\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002",
    "\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002",
    "\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u00a1\u0005(\u0015\u0002",
    "\u009e\u00a0\u0007\u0003\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002",
    "\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002",
    "\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u0096\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007\b\u0002\u0002\u00a7\u0011\u0003\u0002\u0002\u0002",
    "\u00a8\u00ac\u0007\u0006\u0002\u0002\u00a9\u00ab\u0007\u0003\u0002\u0002",
    "\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002",
    "\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002",
    "\u00ad\u00af\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002",
    "\u00af\u00b3\t\u0003\u0002\u0002\u00b0\u00b2\u0007\u0003\u0002\u0002",
    "\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002",
    "\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002",
    "\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002",
    "\u00b6\u00c5\u0005\u0014\u000b\u0002\u00b7\u00b9\u0007\u0003\u0002\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bd\u00c1\u0007\u0007\u0002\u0002\u00be\u00c0\u0007\u0003\u0002\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002",
    "\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002",
    "\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002",
    "\u00c4\u00c6\u0005(\u0015\u0002\u00c5\u00ba\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00ca\u0003\u0002\u0002\u0002",
    "\u00c7\u00c9\u0007\u0003\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
    "\u00c9\u00cc\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002",
    "\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\b\u0002\u0002",
    "\u00ce\u0013\u0003\u0002\u0002\u0002\u00cf\u00d9\u0007\u018d\u0002\u0002",
    "\u00d0\u00d2\u0007\u0003\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002",
    "\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6\u0003\u0002\u0002\u0002",
    "\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d8\u0007\u018d\u0002\u0002",
    "\u00d7\u00d3\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002",
    "\u00da\u0015\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\t\u0004\u0002\u0002\u00dd\u0017\u0003\u0002\u0002\u0002",
    "\u00de\u00e2\u0007X\u0002\u0002\u00df\u00e1\u0005\u0004\u0003\u0002",
    "\u00e0\u00df\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002",
    "\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002",
    "\u00e3\u00e5\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\u0007Y\u0002\u0002\u00e6\u0019\u0003\u0002\u0002\u0002",
    "\u00e7\u00eb\u0007Z\u0002\u0002\u00e8\u00ea\u0005\u0004\u0003\u0002",
    "\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002",
    "\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002",
    "\u00ec\u00ee\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0007Y\u0002\u0002\u00ef\u001b\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0007\u0185\u0002\u0002\u00f1\u001d\u0003\u0002\u0002\u0002",
    "\u00f2\u00f3\u0007\u0186\u0002\u0002\u00f3\u001f\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0007[\u0002\u0002\u00f5!\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0007\u0187\u0002\u0002\u00f7#\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0007\u0188\u0002\u0002\u00f9%\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0007\u0189\u0002\u0002\u00fb\'\u0003\u0002\u0002\u0002\u00fc",
    "\u0100\u0005*\u0016\u0002\u00fd\u0100\u0005,\u0017\u0002\u00fe\u0100",
    "\u0005X-\u0002\u00ff\u00fc\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003",
    "\u0002\u0002\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u0100)\u0003",
    "\u0002\u0002\u0002\u0101\u0102\t\u0005\u0002\u0002\u0102+\u0003\u0002",
    "\u0002\u0002\u0103\u0119\u0005.\u0018\u0002\u0104\u0119\u00050\u0019",
    "\u0002\u0105\u0119\u00052\u001a\u0002\u0106\u0119\u00054\u001b\u0002",
    "\u0107\u0119\u00056\u001c\u0002\u0108\u0119\u00058\u001d\u0002\u0109",
    "\u0119\u0005:\u001e\u0002\u010a\u0119\u0005<\u001f\u0002\u010b\u0119",
    "\u0005> \u0002\u010c\u0119\u0005@!\u0002\u010d\u0119\u0005B\"\u0002",
    "\u010e\u0119\u0005D#\u0002\u010f\u0119\u0005F$\u0002\u0110\u0119\u0005",
    "H%\u0002\u0111\u0119\u0005J&\u0002\u0112\u0119\u0005L\'\u0002\u0113",
    "\u0119\u0005N(\u0002\u0114\u0119\u0005P)\u0002\u0115\u0119\u0005R*\u0002",
    "\u0116\u0119\u0005T+\u0002\u0117\u0119\u0005V,\u0002\u0118\u0103\u0003",
    "\u0002\u0002\u0002\u0118\u0104\u0003\u0002\u0002\u0002\u0118\u0105\u0003",
    "\u0002\u0002\u0002\u0118\u0106\u0003\u0002\u0002\u0002\u0118\u0107\u0003",
    "\u0002\u0002\u0002\u0118\u0108\u0003\u0002\u0002\u0002\u0118\u0109\u0003",
    "\u0002\u0002\u0002\u0118\u010a\u0003\u0002\u0002\u0002\u0118\u010b\u0003",
    "\u0002\u0002\u0002\u0118\u010c\u0003\u0002\u0002\u0002\u0118\u010d\u0003",
    "\u0002\u0002\u0002\u0118\u010e\u0003\u0002\u0002\u0002\u0118\u010f\u0003",
    "\u0002\u0002\u0002\u0118\u0110\u0003\u0002\u0002\u0002\u0118\u0111\u0003",
    "\u0002\u0002\u0002\u0118\u0112\u0003\u0002\u0002\u0002\u0118\u0113\u0003",
    "\u0002\u0002\u0002\u0118\u0114\u0003\u0002\u0002\u0002\u0118\u0115\u0003",
    "\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0118\u0117\u0003",
    "\u0002\u0002\u0002\u0119-\u0003\u0002\u0002\u0002\u011a\u011b\t\u0006",
    "\u0002\u0002\u011b/\u0003\u0002\u0002\u0002\u011c\u011d\t\u0007\u0002",
    "\u0002\u011d1\u0003\u0002\u0002\u0002\u011e\u011f\t\b\u0002\u0002\u011f",
    "3\u0003\u0002\u0002\u0002\u0120\u0121\t\t\u0002\u0002\u01215\u0003\u0002",
    "\u0002\u0002\u0122\u0123\t\n\u0002\u0002\u01237\u0003\u0002\u0002\u0002",
    "\u0124\u0125\t\u000b\u0002\u0002\u01259\u0003\u0002\u0002\u0002\u0126",
    "\u0127\t\f\u0002\u0002\u0127;\u0003\u0002\u0002\u0002\u0128\u0129\t",
    "\r\u0002\u0002\u0129=\u0003\u0002\u0002\u0002\u012a\u012b\t\u000e\u0002",
    "\u0002\u012b?\u0003\u0002\u0002\u0002\u012c\u012d\t\u000f\u0002\u0002",
    "\u012dA\u0003\u0002\u0002\u0002\u012e\u012f\t\u0010\u0002\u0002\u012f",
    "C\u0003\u0002\u0002\u0002\u0130\u0131\t\u0011\u0002\u0002\u0131E\u0003",
    "\u0002\u0002\u0002\u0132\u0133\t\u0012\u0002\u0002\u0133G\u0003\u0002",
    "\u0002\u0002\u0134\u0135\t\u0013\u0002\u0002\u0135I\u0003\u0002\u0002",
    "\u0002\u0136\u0137\t\u0014\u0002\u0002\u0137K\u0003\u0002\u0002\u0002",
    "\u0138\u0139\t\u0015\u0002\u0002\u0139M\u0003\u0002\u0002\u0002\u013a",
    "\u013b\t\u0016\u0002\u0002\u013bO\u0003\u0002\u0002\u0002\u013c\u013d",
    "\t\u0017\u0002\u0002\u013dQ\u0003\u0002\u0002\u0002\u013e\u013f\t\u0018",
    "\u0002\u0002\u013fS\u0003\u0002\u0002\u0002\u0140\u0141\t\u0019\u0002",
    "\u0002\u0141U\u0003\u0002\u0002\u0002\u0142\u0143\t\u001a\u0002\u0002",
    "\u0143W\u0003\u0002\u0002\u0002\u0144\u0145\u0007\u0184\u0002\u0002",
    "\u0145Y\u0003\u0002\u0002\u0002\u0017]di|\u008c\u0093\u009a\u00a1\u00a4",
    "\u00ac\u00b3\u00ba\u00c1\u00c5\u00ca\u00d3\u00d9\u00e2\u00eb\u00ff\u0118"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", "'False'", "'True'", "'('", "','", "')'", 
                     "'>'", "'&gt;'", "'+'", "'-'", "'/'", "'*'", "'%'", 
                     "'++'", "'--'", "'/-/'", "'neg'", "'=='", "'!='", "'<'", 
                     "'>='", "'<='", "'?'", "'&'", "'|'", "'^'", "'~'", 
                     "'>>'", "'<<'", "'!'", "'NOT'", "'&&'", "'AND'", "'||'", 
                     "'OR'", "'abs'", "'int'", "'flr'", "'rng'", "'cos'", 
                     "'lg'", "'min'", "'sin'", "'acos'", "'ctg'", "'ln'", 
                     "'sqr'", "'asin'", "'eps'", "'log'", "'pi'", "'sqrt'", 
                     "'atg2'", "'exp'", "'max'", "'pow'", "'tg'", "'atg'", 
                     "'div'", "'ceil'", "'near'", "'dnor'", "'d360'", "'rdeg'", 
                     "'rddg'", "'dgrd'", "'rnor'", "'case'", "'lc'", "'uc'", 
                     "'cap'", "'chr'", "'ord'", "'scat'", "'schr'", "'scmp'", 
                     "'scmi'", "'sstr'", "'ssub'", "'symb'", "'b'", "'c'", 
                     "'d'", "'p'", "'r'", "'if{'", "'}'", "'els{'", "'quit'", 
                     "'bool'", "'boolean'", "'meter'", "'meters'", "'m'", 
                     "'centimeter'", "'centimeters'", "'cm'", "'kilometer'", 
                     "'kilometers'", "'km'", "'millimeter'", "'millimeters'", 
                     "'mile'", "'miles'", "'decimile'", "'decimiles'", "'nautical mile'", 
                     "'nautical miles'", "'nmile'", "'nmiles'", "'decinmile'", 
                     "'decinmiles'", "'foot'", "'feet'", "'ft'", "'inch'", 
                     "'inches'", "'in'", "'yard'", "'yards'", "'square inch'", 
                     "'square inches'", "'sq in'", "'in2'", "'square feet'", 
                     "'square foot'", "'sq ft'", "'ft2'", "'square yard'", 
                     "'square yards'", "'sq yd'", "'yd2'", "'square meter'", 
                     "'square meters'", "'sq m'", "'m2'", "'square centimeter'", 
                     "'square centimeters'", "'sq cm'", "'cm2'", "'square kilometer'", 
                     "'square kilometers'", "'sq km'", "'km2'", "'square millimeter'", 
                     "'square millimeters'", "'sq mm'", "'mm2'", "'square mile'", 
                     "'square miles'", "'cubic inch'", "'cubic inches'", 
                     "'cu in'", "'in3'", "'cubic foot'", "'cubic feet'", 
                     "'cu ft'", "'ft3'", "'cubic yard'", "'cubic yards'", 
                     "'cu yd'", "'yd3'", "'cubic mile'", "'cubic miles'", 
                     "'cubic millimeter'", "'cubic millimeters'", "'cu mm'", 
                     "'mm3'", "'cubic centimeter'", "'cubic centimeters'", 
                     "'cu cm'", "'cm3'", "'meter cubed'", "'meters cubed'", 
                     "'cubic meter'", "'cubic meters'", "'cu m'", "'m3'", 
                     "'cubic kilometer'", "'cubic kilometers'", "'cu km'", 
                     "'km3'", "'liter'", "'liters'", "'gallon'", "'gallons'", 
                     "'quart'", "'quarts'", "'meter cubed per second'", 
                     "'meters cubed per second'", "'gallon per hour'", "'gallons per hour'", 
                     "'gph'", "'liter per hour'", "'liters per hour'", "'kelvin'", 
                     "'rankine'", "'farenheit'", "'fahrenheit'", "'celsius'", 
                     "'radian'", "'radians'", "'round'", "'rounds'", "'degree'", 
                     "'degrees'", "'grad'", "'grads'", "'degree latitude'", 
                     "'degrees latitude'", "'degree longitude'", "'degrees longitude'", 
                     "'meter latitude'", "'meters latitude'", "'radian per second'", 
                     "'radians per second'", "'revolution per minute'", 
                     "'revolutions per minute'", "'rpm'", "'rpms'", "'minute per round'", 
                     "'minutes per round'", "'nice minute per round'", "'nice minutes per round'", 
                     "'degree per second'", "'degrees per second'", "'meter per second'", 
                     "'meters/second'", "'m/s'", "'meter per minute'", "'meters per minute'", 
                     "'feet/second'", "'feet/minute'", "'ft/min'", "'kilometer/hour'", 
                     "'kilometers/hour'", "'kilometers per hour'", "'kph'", 
                     "'knot'", "'knots'", "'mile per hour'", "'miles per hour'", 
                     "'mph'", "'mach'", "'machs'", "'meter per second squared'", 
                     "'meters per second squared'", "'gforce'", "'g force'", 
                     "'feet per second squared'", "'foot per second squared'", 
                     "'second'", "'seconds'", "'minute'", "'minutes'", "'hour'", 
                     "'hours'", "'day'", "'days'", "'hour over 10'", "'hours over 10'", 
                     "'year'", "'years'", "'watt'", "'watts'", "'ft lb per second'", 
                     "'kilogram'", "'kilograms'", "'kg'", "'slug'", "'slugs'", 
                     "'geepound'", "'geepounds'", "'pound'", "'pounds'", 
                     "'lbs'", "'kilogram per second'", "'kilograms per second'", 
                     "'pound per hour'", "'pounds per hour'", "'ampere'", 
                     "'amperes'", "'amp'", "'amps'", "'volt'", "'volts'", 
                     "'hertz'", "'Hz'", "'kilohertz'", "'KHz'", "'megahertz'", 
                     "'MHz'", "'frequency BCD32'", "'frequency BCD16'", 
                     "'frequency ADF BCD32'", "'kilogram per cubic meter'", 
                     "'kilograms per cubic meter'", "'slug per cubic feet'", 
                     "'slugs per cubic feet'", "'slug/ft3'", "'slug per cubic foot'", 
                     "'slugs per cubic foot'", "'pound per gallon'", "'pounds per gallon'", 
                     "'lbs/gallon'", "'pascal'", "'pascals'", "'Pa'", "'newton per square meter'", 
                     "'newtons per square meter'", "'kilopascal'", "'kpa'", 
                     "'kilogram force per square centimeter'", "'kgFSqCm'", 
                     "'millimeter of mercury'", "'millimeters of mercury'", 
                     "'mmHg'", "'centimeter of mercury'", "'centimeters of mercury'", 
                     "'cmHg'", "'inch of mercury'", "'inches of mercury'", 
                     "'inHg'", "'atmosphere'", "'atmospheres'", "'atm'", 
                     "'millimeter of water'", "'millimeters of water'", 
                     "'pound-force per square inch'", "'psi'", "'pound-force per square foot'", 
                     "'psf'", "'bar'", "'bars'", "'millibar'", "'millibars'", 
                     "'mbar'", "'mbars'", "'hectopascal'", "'hectopascals'", 
                     "'boost cmHg'", "'boost inHg'", "'boost psi'", "'slug feet squared'", 
                     "'slugs feet squared'", "'kilogram meter squared'", 
                     "'kilograms meter squared'", "'newton meter'", "'newton'", 
                     "'nm'", "'foot-pound'", "'foot pound'", "'ft-lbs'", 
                     "'foot-pounds'", "'lbf-feet'", "'kilogram meter'", 
                     "'kilogram meters'", "'kgf meter'", "'kgf meters'", 
                     "'poundal feet'", "'part'", "'half'", "'halfs'", "'third'", 
                     "'thirds'", "'percent'", "'percentage'", "'percent over 100'", 
                     "'bel'", "'bels'", "'decibel'", "'decibels'", "'more_than_a_half'", 
                     "'times'", "'ratio'", "'number'", "'numbers'", "'scaler'", 
                     "'position'", "'enum'", "'bco16'", "'mask'", "'flags'", 
                     "'per radian'", "'per degree'", "'string'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "LABEL", "GOTO", "STORE", "LOAD", "STORE_POP", "HEXADECIMAL", 
                      "DECIMAL", "OCTAL", "ID_PART", "STRING", "WS" ];

var ruleNames =  [ "program", "action", "booleanLiteral", "hexadecimalLiteral", 
                   "decimalLiteral", "octalLiteral", "stringLiteral", "variableAccess", 
                   "assignment", "id", "operator", "ifAction", "elseAction", 
                   "label", "gotoAction", "quit", "store", "load", "storePop", 
                   "type", "booleanType", "numberType", "distanceType", 
                   "areaType", "volumeType", "volumeRateType", "temperatureType", 
                   "angleType", "globalPositionType", "angularVelocityType", 
                   "speedType", "accelerationType", "timeType", "powerType", 
                   "weightType", "weightRateType", "electricalCurrentType", 
                   "electricalPotentialType", "frequencyType", "densityType", 
                   "pressureType", "torqueType", "miscellaneousType", "stringType" ];

function rpnParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rpnParser.prototype = Object.create(antlr4.Parser.prototype);
rpnParser.prototype.constructor = rpnParser;

Object.defineProperty(rpnParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

rpnParser.EOF = antlr4.Token.EOF;
rpnParser.T__0 = 1;
rpnParser.T__1 = 2;
rpnParser.T__2 = 3;
rpnParser.T__3 = 4;
rpnParser.T__4 = 5;
rpnParser.T__5 = 6;
rpnParser.T__6 = 7;
rpnParser.T__7 = 8;
rpnParser.T__8 = 9;
rpnParser.T__9 = 10;
rpnParser.T__10 = 11;
rpnParser.T__11 = 12;
rpnParser.T__12 = 13;
rpnParser.T__13 = 14;
rpnParser.T__14 = 15;
rpnParser.T__15 = 16;
rpnParser.T__16 = 17;
rpnParser.T__17 = 18;
rpnParser.T__18 = 19;
rpnParser.T__19 = 20;
rpnParser.T__20 = 21;
rpnParser.T__21 = 22;
rpnParser.T__22 = 23;
rpnParser.T__23 = 24;
rpnParser.T__24 = 25;
rpnParser.T__25 = 26;
rpnParser.T__26 = 27;
rpnParser.T__27 = 28;
rpnParser.T__28 = 29;
rpnParser.T__29 = 30;
rpnParser.T__30 = 31;
rpnParser.T__31 = 32;
rpnParser.T__32 = 33;
rpnParser.T__33 = 34;
rpnParser.T__34 = 35;
rpnParser.T__35 = 36;
rpnParser.T__36 = 37;
rpnParser.T__37 = 38;
rpnParser.T__38 = 39;
rpnParser.T__39 = 40;
rpnParser.T__40 = 41;
rpnParser.T__41 = 42;
rpnParser.T__42 = 43;
rpnParser.T__43 = 44;
rpnParser.T__44 = 45;
rpnParser.T__45 = 46;
rpnParser.T__46 = 47;
rpnParser.T__47 = 48;
rpnParser.T__48 = 49;
rpnParser.T__49 = 50;
rpnParser.T__50 = 51;
rpnParser.T__51 = 52;
rpnParser.T__52 = 53;
rpnParser.T__53 = 54;
rpnParser.T__54 = 55;
rpnParser.T__55 = 56;
rpnParser.T__56 = 57;
rpnParser.T__57 = 58;
rpnParser.T__58 = 59;
rpnParser.T__59 = 60;
rpnParser.T__60 = 61;
rpnParser.T__61 = 62;
rpnParser.T__62 = 63;
rpnParser.T__63 = 64;
rpnParser.T__64 = 65;
rpnParser.T__65 = 66;
rpnParser.T__66 = 67;
rpnParser.T__67 = 68;
rpnParser.T__68 = 69;
rpnParser.T__69 = 70;
rpnParser.T__70 = 71;
rpnParser.T__71 = 72;
rpnParser.T__72 = 73;
rpnParser.T__73 = 74;
rpnParser.T__74 = 75;
rpnParser.T__75 = 76;
rpnParser.T__76 = 77;
rpnParser.T__77 = 78;
rpnParser.T__78 = 79;
rpnParser.T__79 = 80;
rpnParser.T__80 = 81;
rpnParser.T__81 = 82;
rpnParser.T__82 = 83;
rpnParser.T__83 = 84;
rpnParser.T__84 = 85;
rpnParser.T__85 = 86;
rpnParser.T__86 = 87;
rpnParser.T__87 = 88;
rpnParser.T__88 = 89;
rpnParser.T__89 = 90;
rpnParser.T__90 = 91;
rpnParser.T__91 = 92;
rpnParser.T__92 = 93;
rpnParser.T__93 = 94;
rpnParser.T__94 = 95;
rpnParser.T__95 = 96;
rpnParser.T__96 = 97;
rpnParser.T__97 = 98;
rpnParser.T__98 = 99;
rpnParser.T__99 = 100;
rpnParser.T__100 = 101;
rpnParser.T__101 = 102;
rpnParser.T__102 = 103;
rpnParser.T__103 = 104;
rpnParser.T__104 = 105;
rpnParser.T__105 = 106;
rpnParser.T__106 = 107;
rpnParser.T__107 = 108;
rpnParser.T__108 = 109;
rpnParser.T__109 = 110;
rpnParser.T__110 = 111;
rpnParser.T__111 = 112;
rpnParser.T__112 = 113;
rpnParser.T__113 = 114;
rpnParser.T__114 = 115;
rpnParser.T__115 = 116;
rpnParser.T__116 = 117;
rpnParser.T__117 = 118;
rpnParser.T__118 = 119;
rpnParser.T__119 = 120;
rpnParser.T__120 = 121;
rpnParser.T__121 = 122;
rpnParser.T__122 = 123;
rpnParser.T__123 = 124;
rpnParser.T__124 = 125;
rpnParser.T__125 = 126;
rpnParser.T__126 = 127;
rpnParser.T__127 = 128;
rpnParser.T__128 = 129;
rpnParser.T__129 = 130;
rpnParser.T__130 = 131;
rpnParser.T__131 = 132;
rpnParser.T__132 = 133;
rpnParser.T__133 = 134;
rpnParser.T__134 = 135;
rpnParser.T__135 = 136;
rpnParser.T__136 = 137;
rpnParser.T__137 = 138;
rpnParser.T__138 = 139;
rpnParser.T__139 = 140;
rpnParser.T__140 = 141;
rpnParser.T__141 = 142;
rpnParser.T__142 = 143;
rpnParser.T__143 = 144;
rpnParser.T__144 = 145;
rpnParser.T__145 = 146;
rpnParser.T__146 = 147;
rpnParser.T__147 = 148;
rpnParser.T__148 = 149;
rpnParser.T__149 = 150;
rpnParser.T__150 = 151;
rpnParser.T__151 = 152;
rpnParser.T__152 = 153;
rpnParser.T__153 = 154;
rpnParser.T__154 = 155;
rpnParser.T__155 = 156;
rpnParser.T__156 = 157;
rpnParser.T__157 = 158;
rpnParser.T__158 = 159;
rpnParser.T__159 = 160;
rpnParser.T__160 = 161;
rpnParser.T__161 = 162;
rpnParser.T__162 = 163;
rpnParser.T__163 = 164;
rpnParser.T__164 = 165;
rpnParser.T__165 = 166;
rpnParser.T__166 = 167;
rpnParser.T__167 = 168;
rpnParser.T__168 = 169;
rpnParser.T__169 = 170;
rpnParser.T__170 = 171;
rpnParser.T__171 = 172;
rpnParser.T__172 = 173;
rpnParser.T__173 = 174;
rpnParser.T__174 = 175;
rpnParser.T__175 = 176;
rpnParser.T__176 = 177;
rpnParser.T__177 = 178;
rpnParser.T__178 = 179;
rpnParser.T__179 = 180;
rpnParser.T__180 = 181;
rpnParser.T__181 = 182;
rpnParser.T__182 = 183;
rpnParser.T__183 = 184;
rpnParser.T__184 = 185;
rpnParser.T__185 = 186;
rpnParser.T__186 = 187;
rpnParser.T__187 = 188;
rpnParser.T__188 = 189;
rpnParser.T__189 = 190;
rpnParser.T__190 = 191;
rpnParser.T__191 = 192;
rpnParser.T__192 = 193;
rpnParser.T__193 = 194;
rpnParser.T__194 = 195;
rpnParser.T__195 = 196;
rpnParser.T__196 = 197;
rpnParser.T__197 = 198;
rpnParser.T__198 = 199;
rpnParser.T__199 = 200;
rpnParser.T__200 = 201;
rpnParser.T__201 = 202;
rpnParser.T__202 = 203;
rpnParser.T__203 = 204;
rpnParser.T__204 = 205;
rpnParser.T__205 = 206;
rpnParser.T__206 = 207;
rpnParser.T__207 = 208;
rpnParser.T__208 = 209;
rpnParser.T__209 = 210;
rpnParser.T__210 = 211;
rpnParser.T__211 = 212;
rpnParser.T__212 = 213;
rpnParser.T__213 = 214;
rpnParser.T__214 = 215;
rpnParser.T__215 = 216;
rpnParser.T__216 = 217;
rpnParser.T__217 = 218;
rpnParser.T__218 = 219;
rpnParser.T__219 = 220;
rpnParser.T__220 = 221;
rpnParser.T__221 = 222;
rpnParser.T__222 = 223;
rpnParser.T__223 = 224;
rpnParser.T__224 = 225;
rpnParser.T__225 = 226;
rpnParser.T__226 = 227;
rpnParser.T__227 = 228;
rpnParser.T__228 = 229;
rpnParser.T__229 = 230;
rpnParser.T__230 = 231;
rpnParser.T__231 = 232;
rpnParser.T__232 = 233;
rpnParser.T__233 = 234;
rpnParser.T__234 = 235;
rpnParser.T__235 = 236;
rpnParser.T__236 = 237;
rpnParser.T__237 = 238;
rpnParser.T__238 = 239;
rpnParser.T__239 = 240;
rpnParser.T__240 = 241;
rpnParser.T__241 = 242;
rpnParser.T__242 = 243;
rpnParser.T__243 = 244;
rpnParser.T__244 = 245;
rpnParser.T__245 = 246;
rpnParser.T__246 = 247;
rpnParser.T__247 = 248;
rpnParser.T__248 = 249;
rpnParser.T__249 = 250;
rpnParser.T__250 = 251;
rpnParser.T__251 = 252;
rpnParser.T__252 = 253;
rpnParser.T__253 = 254;
rpnParser.T__254 = 255;
rpnParser.T__255 = 256;
rpnParser.T__256 = 257;
rpnParser.T__257 = 258;
rpnParser.T__258 = 259;
rpnParser.T__259 = 260;
rpnParser.T__260 = 261;
rpnParser.T__261 = 262;
rpnParser.T__262 = 263;
rpnParser.T__263 = 264;
rpnParser.T__264 = 265;
rpnParser.T__265 = 266;
rpnParser.T__266 = 267;
rpnParser.T__267 = 268;
rpnParser.T__268 = 269;
rpnParser.T__269 = 270;
rpnParser.T__270 = 271;
rpnParser.T__271 = 272;
rpnParser.T__272 = 273;
rpnParser.T__273 = 274;
rpnParser.T__274 = 275;
rpnParser.T__275 = 276;
rpnParser.T__276 = 277;
rpnParser.T__277 = 278;
rpnParser.T__278 = 279;
rpnParser.T__279 = 280;
rpnParser.T__280 = 281;
rpnParser.T__281 = 282;
rpnParser.T__282 = 283;
rpnParser.T__283 = 284;
rpnParser.T__284 = 285;
rpnParser.T__285 = 286;
rpnParser.T__286 = 287;
rpnParser.T__287 = 288;
rpnParser.T__288 = 289;
rpnParser.T__289 = 290;
rpnParser.T__290 = 291;
rpnParser.T__291 = 292;
rpnParser.T__292 = 293;
rpnParser.T__293 = 294;
rpnParser.T__294 = 295;
rpnParser.T__295 = 296;
rpnParser.T__296 = 297;
rpnParser.T__297 = 298;
rpnParser.T__298 = 299;
rpnParser.T__299 = 300;
rpnParser.T__300 = 301;
rpnParser.T__301 = 302;
rpnParser.T__302 = 303;
rpnParser.T__303 = 304;
rpnParser.T__304 = 305;
rpnParser.T__305 = 306;
rpnParser.T__306 = 307;
rpnParser.T__307 = 308;
rpnParser.T__308 = 309;
rpnParser.T__309 = 310;
rpnParser.T__310 = 311;
rpnParser.T__311 = 312;
rpnParser.T__312 = 313;
rpnParser.T__313 = 314;
rpnParser.T__314 = 315;
rpnParser.T__315 = 316;
rpnParser.T__316 = 317;
rpnParser.T__317 = 318;
rpnParser.T__318 = 319;
rpnParser.T__319 = 320;
rpnParser.T__320 = 321;
rpnParser.T__321 = 322;
rpnParser.T__322 = 323;
rpnParser.T__323 = 324;
rpnParser.T__324 = 325;
rpnParser.T__325 = 326;
rpnParser.T__326 = 327;
rpnParser.T__327 = 328;
rpnParser.T__328 = 329;
rpnParser.T__329 = 330;
rpnParser.T__330 = 331;
rpnParser.T__331 = 332;
rpnParser.T__332 = 333;
rpnParser.T__333 = 334;
rpnParser.T__334 = 335;
rpnParser.T__335 = 336;
rpnParser.T__336 = 337;
rpnParser.T__337 = 338;
rpnParser.T__338 = 339;
rpnParser.T__339 = 340;
rpnParser.T__340 = 341;
rpnParser.T__341 = 342;
rpnParser.T__342 = 343;
rpnParser.T__343 = 344;
rpnParser.T__344 = 345;
rpnParser.T__345 = 346;
rpnParser.T__346 = 347;
rpnParser.T__347 = 348;
rpnParser.T__348 = 349;
rpnParser.T__349 = 350;
rpnParser.T__350 = 351;
rpnParser.T__351 = 352;
rpnParser.T__352 = 353;
rpnParser.T__353 = 354;
rpnParser.T__354 = 355;
rpnParser.T__355 = 356;
rpnParser.T__356 = 357;
rpnParser.T__357 = 358;
rpnParser.T__358 = 359;
rpnParser.T__359 = 360;
rpnParser.T__360 = 361;
rpnParser.T__361 = 362;
rpnParser.T__362 = 363;
rpnParser.T__363 = 364;
rpnParser.T__364 = 365;
rpnParser.T__365 = 366;
rpnParser.T__366 = 367;
rpnParser.T__367 = 368;
rpnParser.T__368 = 369;
rpnParser.T__369 = 370;
rpnParser.T__370 = 371;
rpnParser.T__371 = 372;
rpnParser.T__372 = 373;
rpnParser.T__373 = 374;
rpnParser.T__374 = 375;
rpnParser.T__375 = 376;
rpnParser.T__376 = 377;
rpnParser.T__377 = 378;
rpnParser.T__378 = 379;
rpnParser.T__379 = 380;
rpnParser.T__380 = 381;
rpnParser.T__381 = 382;
rpnParser.T__382 = 383;
rpnParser.T__383 = 384;
rpnParser.T__384 = 385;
rpnParser.T__385 = 386;
rpnParser.LABEL = 387;
rpnParser.GOTO = 388;
rpnParser.STORE = 389;
rpnParser.LOAD = 390;
rpnParser.STORE_POP = 391;
rpnParser.HEXADECIMAL = 392;
rpnParser.DECIMAL = 393;
rpnParser.OCTAL = 394;
rpnParser.ID_PART = 395;
rpnParser.STRING = 396;
rpnParser.WS = 397;

rpnParser.RULE_program = 0;
rpnParser.RULE_action = 1;
rpnParser.RULE_booleanLiteral = 2;
rpnParser.RULE_hexadecimalLiteral = 3;
rpnParser.RULE_decimalLiteral = 4;
rpnParser.RULE_octalLiteral = 5;
rpnParser.RULE_stringLiteral = 6;
rpnParser.RULE_variableAccess = 7;
rpnParser.RULE_assignment = 8;
rpnParser.RULE_id = 9;
rpnParser.RULE_operator = 10;
rpnParser.RULE_ifAction = 11;
rpnParser.RULE_elseAction = 12;
rpnParser.RULE_label = 13;
rpnParser.RULE_gotoAction = 14;
rpnParser.RULE_quit = 15;
rpnParser.RULE_store = 16;
rpnParser.RULE_load = 17;
rpnParser.RULE_storePop = 18;
rpnParser.RULE_type = 19;
rpnParser.RULE_booleanType = 20;
rpnParser.RULE_numberType = 21;
rpnParser.RULE_distanceType = 22;
rpnParser.RULE_areaType = 23;
rpnParser.RULE_volumeType = 24;
rpnParser.RULE_volumeRateType = 25;
rpnParser.RULE_temperatureType = 26;
rpnParser.RULE_angleType = 27;
rpnParser.RULE_globalPositionType = 28;
rpnParser.RULE_angularVelocityType = 29;
rpnParser.RULE_speedType = 30;
rpnParser.RULE_accelerationType = 31;
rpnParser.RULE_timeType = 32;
rpnParser.RULE_powerType = 33;
rpnParser.RULE_weightType = 34;
rpnParser.RULE_weightRateType = 35;
rpnParser.RULE_electricalCurrentType = 36;
rpnParser.RULE_electricalPotentialType = 37;
rpnParser.RULE_frequencyType = 38;
rpnParser.RULE_densityType = 39;
rpnParser.RULE_pressureType = 40;
rpnParser.RULE_torqueType = 41;
rpnParser.RULE_miscellaneousType = 42;
rpnParser.RULE_stringType = 43;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.action = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActionContext);
    } else {
        return this.getTypedRuleContext(ActionContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.ProgramContext = ProgramContext;

rpnParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rpnParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 88;
            this.match(rpnParser.T__0);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.T__1) | (1 << rpnParser.T__2) | (1 << rpnParser.T__3) | (1 << rpnParser.T__6) | (1 << rpnParser.T__8) | (1 << rpnParser.T__9) | (1 << rpnParser.T__10) | (1 << rpnParser.T__11) | (1 << rpnParser.T__12) | (1 << rpnParser.T__13) | (1 << rpnParser.T__14) | (1 << rpnParser.T__15) | (1 << rpnParser.T__16) | (1 << rpnParser.T__17) | (1 << rpnParser.T__18) | (1 << rpnParser.T__19) | (1 << rpnParser.T__20) | (1 << rpnParser.T__21) | (1 << rpnParser.T__22) | (1 << rpnParser.T__23) | (1 << rpnParser.T__24) | (1 << rpnParser.T__25) | (1 << rpnParser.T__26) | (1 << rpnParser.T__27) | (1 << rpnParser.T__28) | (1 << rpnParser.T__29) | (1 << rpnParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (rpnParser.T__31 - 32)) | (1 << (rpnParser.T__32 - 32)) | (1 << (rpnParser.T__33 - 32)) | (1 << (rpnParser.T__34 - 32)) | (1 << (rpnParser.T__35 - 32)) | (1 << (rpnParser.T__36 - 32)) | (1 << (rpnParser.T__37 - 32)) | (1 << (rpnParser.T__38 - 32)) | (1 << (rpnParser.T__39 - 32)) | (1 << (rpnParser.T__40 - 32)) | (1 << (rpnParser.T__41 - 32)) | (1 << (rpnParser.T__42 - 32)) | (1 << (rpnParser.T__43 - 32)) | (1 << (rpnParser.T__44 - 32)) | (1 << (rpnParser.T__45 - 32)) | (1 << (rpnParser.T__46 - 32)) | (1 << (rpnParser.T__47 - 32)) | (1 << (rpnParser.T__48 - 32)) | (1 << (rpnParser.T__49 - 32)) | (1 << (rpnParser.T__50 - 32)) | (1 << (rpnParser.T__51 - 32)) | (1 << (rpnParser.T__52 - 32)) | (1 << (rpnParser.T__53 - 32)) | (1 << (rpnParser.T__54 - 32)) | (1 << (rpnParser.T__55 - 32)) | (1 << (rpnParser.T__56 - 32)) | (1 << (rpnParser.T__57 - 32)) | (1 << (rpnParser.T__58 - 32)) | (1 << (rpnParser.T__59 - 32)) | (1 << (rpnParser.T__60 - 32)) | (1 << (rpnParser.T__61 - 32)) | (1 << (rpnParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (rpnParser.T__63 - 64)) | (1 << (rpnParser.T__64 - 64)) | (1 << (rpnParser.T__65 - 64)) | (1 << (rpnParser.T__66 - 64)) | (1 << (rpnParser.T__67 - 64)) | (1 << (rpnParser.T__68 - 64)) | (1 << (rpnParser.T__69 - 64)) | (1 << (rpnParser.T__70 - 64)) | (1 << (rpnParser.T__71 - 64)) | (1 << (rpnParser.T__72 - 64)) | (1 << (rpnParser.T__73 - 64)) | (1 << (rpnParser.T__74 - 64)) | (1 << (rpnParser.T__75 - 64)) | (1 << (rpnParser.T__76 - 64)) | (1 << (rpnParser.T__77 - 64)) | (1 << (rpnParser.T__78 - 64)) | (1 << (rpnParser.T__79 - 64)) | (1 << (rpnParser.T__80 - 64)) | (1 << (rpnParser.T__81 - 64)) | (1 << (rpnParser.T__82 - 64)) | (1 << (rpnParser.T__83 - 64)) | (1 << (rpnParser.T__84 - 64)) | (1 << (rpnParser.T__85 - 64)) | (1 << (rpnParser.T__87 - 64)) | (1 << (rpnParser.T__88 - 64)))) !== 0) || ((((_la - 387)) & ~0x1f) == 0 && ((1 << (_la - 387)) & ((1 << (rpnParser.LABEL - 387)) | (1 << (rpnParser.GOTO - 387)) | (1 << (rpnParser.STORE - 387)) | (1 << (rpnParser.LOAD - 387)) | (1 << (rpnParser.STORE_POP - 387)) | (1 << (rpnParser.HEXADECIMAL - 387)) | (1 << (rpnParser.DECIMAL - 387)) | (1 << (rpnParser.OCTAL - 387)) | (1 << (rpnParser.STRING - 387)))) !== 0)) {
            this.state = 94;
            this.action();
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rpnParser.T__0) {
                this.state = 95;
                this.match(rpnParser.T__0);
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ActionContext.prototype.hexadecimalLiteral = function() {
    return this.getTypedRuleContext(HexadecimalLiteralContext,0);
};

ActionContext.prototype.decimalLiteral = function() {
    return this.getTypedRuleContext(DecimalLiteralContext,0);
};

ActionContext.prototype.octalLiteral = function() {
    return this.getTypedRuleContext(OctalLiteralContext,0);
};

ActionContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

ActionContext.prototype.variableAccess = function() {
    return this.getTypedRuleContext(VariableAccessContext,0);
};

ActionContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

ActionContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

ActionContext.prototype.ifAction = function() {
    return this.getTypedRuleContext(IfActionContext,0);
};

ActionContext.prototype.elseAction = function() {
    return this.getTypedRuleContext(ElseActionContext,0);
};

ActionContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ActionContext.prototype.gotoAction = function() {
    return this.getTypedRuleContext(GotoActionContext,0);
};

ActionContext.prototype.quit = function() {
    return this.getTypedRuleContext(QuitContext,0);
};

ActionContext.prototype.store = function() {
    return this.getTypedRuleContext(StoreContext,0);
};

ActionContext.prototype.load = function() {
    return this.getTypedRuleContext(LoadContext,0);
};

ActionContext.prototype.storePop = function() {
    return this.getTypedRuleContext(StorePopContext,0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAction(this);
	}
};

ActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.ActionContext = ActionContext;

rpnParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rpnParser.RULE_action);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.booleanLiteral();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this.hexadecimalLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 108;
            this.decimalLiteral();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 109;
            this.octalLiteral();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 110;
            this.stringLiteral();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 111;
            this.variableAccess();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 112;
            this.assignment();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 113;
            this.operator();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 114;
            this.ifAction();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 115;
            this.elseAction();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 116;
            this.label();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 117;
            this.gotoAction();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 118;
            this.quit();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 119;
            this.store();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 120;
            this.load();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 121;
            this.storePop();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;


BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.BooleanLiteralContext = BooleanLiteralContext;

rpnParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rpnParser.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__1 || _la===rpnParser.T__2)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HexadecimalLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_hexadecimalLiteral;
    return this;
}

HexadecimalLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HexadecimalLiteralContext.prototype.constructor = HexadecimalLiteralContext;

HexadecimalLiteralContext.prototype.HEXADECIMAL = function() {
    return this.getToken(rpnParser.HEXADECIMAL, 0);
};

HexadecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterHexadecimalLiteral(this);
	}
};

HexadecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitHexadecimalLiteral(this);
	}
};

HexadecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitHexadecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.HexadecimalLiteralContext = HexadecimalLiteralContext;

rpnParser.prototype.hexadecimalLiteral = function() {

    var localctx = new HexadecimalLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, rpnParser.RULE_hexadecimalLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(rpnParser.HEXADECIMAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DecimalLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_decimalLiteral;
    return this;
}

DecimalLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL = function() {
    return this.getToken(rpnParser.DECIMAL, 0);
};

DecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.DecimalLiteralContext = DecimalLiteralContext;

rpnParser.prototype.decimalLiteral = function() {

    var localctx = new DecimalLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rpnParser.RULE_decimalLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(rpnParser.DECIMAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OctalLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_octalLiteral;
    return this;
}

OctalLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OctalLiteralContext.prototype.constructor = OctalLiteralContext;

OctalLiteralContext.prototype.OCTAL = function() {
    return this.getToken(rpnParser.OCTAL, 0);
};

OctalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitOctalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.OctalLiteralContext = OctalLiteralContext;

rpnParser.prototype.octalLiteral = function() {

    var localctx = new OctalLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, rpnParser.RULE_octalLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(rpnParser.OCTAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_stringLiteral;
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING = function() {
    return this.getToken(rpnParser.STRING, 0);
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStringLiteral(this);
	}
};

StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.StringLiteralContext = StringLiteralContext;

rpnParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rpnParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(rpnParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_variableAccess;
    return this;
}

VariableAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableAccessContext.prototype.constructor = VariableAccessContext;

VariableAccessContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

VariableAccessContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VariableAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterVariableAccess(this);
	}
};

VariableAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitVariableAccess(this);
	}
};

VariableAccessContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitVariableAccess(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.VariableAccessContext = VariableAccessContext;

rpnParser.prototype.variableAccess = function() {

    var localctx = new VariableAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, rpnParser.RULE_variableAccess);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(rpnParser.T__3);
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 135;
            this.match(rpnParser.T__0);
            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 141;
        this.id();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 142;
            this.match(rpnParser.T__0);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rpnParser.T__4) {
            this.state = 148;
            this.match(rpnParser.T__4);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rpnParser.T__0) {
                this.state = 149;
                this.match(rpnParser.T__0);
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 155;
            this.type();
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rpnParser.T__0) {
                this.state = 156;
                this.match(rpnParser.T__0);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 164;
        this.match(rpnParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

AssignmentContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.AssignmentContext = AssignmentContext;

rpnParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rpnParser.RULE_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(rpnParser.T__3);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 167;
            this.match(rpnParser.T__0);
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 173;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__6 || _la===rpnParser.T__7)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 174;
            this.match(rpnParser.T__0);
            this.state = 179;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 180;
        this.id();
        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rpnParser.T__0) {
                this.state = 181;
                this.match(rpnParser.T__0);
                this.state = 186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 187;
            this.match(rpnParser.T__4);
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===rpnParser.T__0) {
                this.state = 188;
                this.match(rpnParser.T__0);
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 194;
            this.type();

        }
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0) {
            this.state = 197;
            this.match(rpnParser.T__0);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 203;
        this.match(rpnParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.ID_PART = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rpnParser.ID_PART);
    } else {
        return this.getToken(rpnParser.ID_PART, i);
    }
};


IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.IdContext = IdContext;

rpnParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, rpnParser.RULE_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(rpnParser.ID_PART);
        this.state = 215;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===rpnParser.T__0) {
                    this.state = 206;
                    this.match(rpnParser.T__0);
                    this.state = 211;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 212;
                this.match(rpnParser.ID_PART); 
            }
            this.state = 217;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;


OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.OperatorContext = OperatorContext;

rpnParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, rpnParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.T__6) | (1 << rpnParser.T__8) | (1 << rpnParser.T__9) | (1 << rpnParser.T__10) | (1 << rpnParser.T__11) | (1 << rpnParser.T__12) | (1 << rpnParser.T__13) | (1 << rpnParser.T__14) | (1 << rpnParser.T__15) | (1 << rpnParser.T__16) | (1 << rpnParser.T__17) | (1 << rpnParser.T__18) | (1 << rpnParser.T__19) | (1 << rpnParser.T__20) | (1 << rpnParser.T__21) | (1 << rpnParser.T__22) | (1 << rpnParser.T__23) | (1 << rpnParser.T__24) | (1 << rpnParser.T__25) | (1 << rpnParser.T__26) | (1 << rpnParser.T__27) | (1 << rpnParser.T__28) | (1 << rpnParser.T__29) | (1 << rpnParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (rpnParser.T__31 - 32)) | (1 << (rpnParser.T__32 - 32)) | (1 << (rpnParser.T__33 - 32)) | (1 << (rpnParser.T__34 - 32)) | (1 << (rpnParser.T__35 - 32)) | (1 << (rpnParser.T__36 - 32)) | (1 << (rpnParser.T__37 - 32)) | (1 << (rpnParser.T__38 - 32)) | (1 << (rpnParser.T__39 - 32)) | (1 << (rpnParser.T__40 - 32)) | (1 << (rpnParser.T__41 - 32)) | (1 << (rpnParser.T__42 - 32)) | (1 << (rpnParser.T__43 - 32)) | (1 << (rpnParser.T__44 - 32)) | (1 << (rpnParser.T__45 - 32)) | (1 << (rpnParser.T__46 - 32)) | (1 << (rpnParser.T__47 - 32)) | (1 << (rpnParser.T__48 - 32)) | (1 << (rpnParser.T__49 - 32)) | (1 << (rpnParser.T__50 - 32)) | (1 << (rpnParser.T__51 - 32)) | (1 << (rpnParser.T__52 - 32)) | (1 << (rpnParser.T__53 - 32)) | (1 << (rpnParser.T__54 - 32)) | (1 << (rpnParser.T__55 - 32)) | (1 << (rpnParser.T__56 - 32)) | (1 << (rpnParser.T__57 - 32)) | (1 << (rpnParser.T__58 - 32)) | (1 << (rpnParser.T__59 - 32)) | (1 << (rpnParser.T__60 - 32)) | (1 << (rpnParser.T__61 - 32)) | (1 << (rpnParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (rpnParser.T__63 - 64)) | (1 << (rpnParser.T__64 - 64)) | (1 << (rpnParser.T__65 - 64)) | (1 << (rpnParser.T__66 - 64)) | (1 << (rpnParser.T__67 - 64)) | (1 << (rpnParser.T__68 - 64)) | (1 << (rpnParser.T__69 - 64)) | (1 << (rpnParser.T__70 - 64)) | (1 << (rpnParser.T__71 - 64)) | (1 << (rpnParser.T__72 - 64)) | (1 << (rpnParser.T__73 - 64)) | (1 << (rpnParser.T__74 - 64)) | (1 << (rpnParser.T__75 - 64)) | (1 << (rpnParser.T__76 - 64)) | (1 << (rpnParser.T__77 - 64)) | (1 << (rpnParser.T__78 - 64)) | (1 << (rpnParser.T__79 - 64)) | (1 << (rpnParser.T__80 - 64)) | (1 << (rpnParser.T__81 - 64)) | (1 << (rpnParser.T__82 - 64)) | (1 << (rpnParser.T__83 - 64)) | (1 << (rpnParser.T__84 - 64)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_ifAction;
    return this;
}

IfActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfActionContext.prototype.constructor = IfActionContext;

IfActionContext.prototype.action = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActionContext);
    } else {
        return this.getTypedRuleContext(ActionContext,i);
    }
};

IfActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterIfAction(this);
	}
};

IfActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitIfAction(this);
	}
};

IfActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitIfAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.IfActionContext = IfActionContext;

rpnParser.prototype.ifAction = function() {

    var localctx = new IfActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, rpnParser.RULE_ifAction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(rpnParser.T__85);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.T__1) | (1 << rpnParser.T__2) | (1 << rpnParser.T__3) | (1 << rpnParser.T__6) | (1 << rpnParser.T__8) | (1 << rpnParser.T__9) | (1 << rpnParser.T__10) | (1 << rpnParser.T__11) | (1 << rpnParser.T__12) | (1 << rpnParser.T__13) | (1 << rpnParser.T__14) | (1 << rpnParser.T__15) | (1 << rpnParser.T__16) | (1 << rpnParser.T__17) | (1 << rpnParser.T__18) | (1 << rpnParser.T__19) | (1 << rpnParser.T__20) | (1 << rpnParser.T__21) | (1 << rpnParser.T__22) | (1 << rpnParser.T__23) | (1 << rpnParser.T__24) | (1 << rpnParser.T__25) | (1 << rpnParser.T__26) | (1 << rpnParser.T__27) | (1 << rpnParser.T__28) | (1 << rpnParser.T__29) | (1 << rpnParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (rpnParser.T__31 - 32)) | (1 << (rpnParser.T__32 - 32)) | (1 << (rpnParser.T__33 - 32)) | (1 << (rpnParser.T__34 - 32)) | (1 << (rpnParser.T__35 - 32)) | (1 << (rpnParser.T__36 - 32)) | (1 << (rpnParser.T__37 - 32)) | (1 << (rpnParser.T__38 - 32)) | (1 << (rpnParser.T__39 - 32)) | (1 << (rpnParser.T__40 - 32)) | (1 << (rpnParser.T__41 - 32)) | (1 << (rpnParser.T__42 - 32)) | (1 << (rpnParser.T__43 - 32)) | (1 << (rpnParser.T__44 - 32)) | (1 << (rpnParser.T__45 - 32)) | (1 << (rpnParser.T__46 - 32)) | (1 << (rpnParser.T__47 - 32)) | (1 << (rpnParser.T__48 - 32)) | (1 << (rpnParser.T__49 - 32)) | (1 << (rpnParser.T__50 - 32)) | (1 << (rpnParser.T__51 - 32)) | (1 << (rpnParser.T__52 - 32)) | (1 << (rpnParser.T__53 - 32)) | (1 << (rpnParser.T__54 - 32)) | (1 << (rpnParser.T__55 - 32)) | (1 << (rpnParser.T__56 - 32)) | (1 << (rpnParser.T__57 - 32)) | (1 << (rpnParser.T__58 - 32)) | (1 << (rpnParser.T__59 - 32)) | (1 << (rpnParser.T__60 - 32)) | (1 << (rpnParser.T__61 - 32)) | (1 << (rpnParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (rpnParser.T__63 - 64)) | (1 << (rpnParser.T__64 - 64)) | (1 << (rpnParser.T__65 - 64)) | (1 << (rpnParser.T__66 - 64)) | (1 << (rpnParser.T__67 - 64)) | (1 << (rpnParser.T__68 - 64)) | (1 << (rpnParser.T__69 - 64)) | (1 << (rpnParser.T__70 - 64)) | (1 << (rpnParser.T__71 - 64)) | (1 << (rpnParser.T__72 - 64)) | (1 << (rpnParser.T__73 - 64)) | (1 << (rpnParser.T__74 - 64)) | (1 << (rpnParser.T__75 - 64)) | (1 << (rpnParser.T__76 - 64)) | (1 << (rpnParser.T__77 - 64)) | (1 << (rpnParser.T__78 - 64)) | (1 << (rpnParser.T__79 - 64)) | (1 << (rpnParser.T__80 - 64)) | (1 << (rpnParser.T__81 - 64)) | (1 << (rpnParser.T__82 - 64)) | (1 << (rpnParser.T__83 - 64)) | (1 << (rpnParser.T__84 - 64)) | (1 << (rpnParser.T__85 - 64)) | (1 << (rpnParser.T__87 - 64)) | (1 << (rpnParser.T__88 - 64)))) !== 0) || ((((_la - 387)) & ~0x1f) == 0 && ((1 << (_la - 387)) & ((1 << (rpnParser.LABEL - 387)) | (1 << (rpnParser.GOTO - 387)) | (1 << (rpnParser.STORE - 387)) | (1 << (rpnParser.LOAD - 387)) | (1 << (rpnParser.STORE_POP - 387)) | (1 << (rpnParser.HEXADECIMAL - 387)) | (1 << (rpnParser.DECIMAL - 387)) | (1 << (rpnParser.OCTAL - 387)) | (1 << (rpnParser.STRING - 387)))) !== 0)) {
            this.state = 221;
            this.action();
            this.state = 226;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 227;
        this.match(rpnParser.T__86);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_elseAction;
    return this;
}

ElseActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseActionContext.prototype.constructor = ElseActionContext;

ElseActionContext.prototype.action = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActionContext);
    } else {
        return this.getTypedRuleContext(ActionContext,i);
    }
};

ElseActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterElseAction(this);
	}
};

ElseActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitElseAction(this);
	}
};

ElseActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitElseAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.ElseActionContext = ElseActionContext;

rpnParser.prototype.elseAction = function() {

    var localctx = new ElseActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, rpnParser.RULE_elseAction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(rpnParser.T__87);
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.T__1) | (1 << rpnParser.T__2) | (1 << rpnParser.T__3) | (1 << rpnParser.T__6) | (1 << rpnParser.T__8) | (1 << rpnParser.T__9) | (1 << rpnParser.T__10) | (1 << rpnParser.T__11) | (1 << rpnParser.T__12) | (1 << rpnParser.T__13) | (1 << rpnParser.T__14) | (1 << rpnParser.T__15) | (1 << rpnParser.T__16) | (1 << rpnParser.T__17) | (1 << rpnParser.T__18) | (1 << rpnParser.T__19) | (1 << rpnParser.T__20) | (1 << rpnParser.T__21) | (1 << rpnParser.T__22) | (1 << rpnParser.T__23) | (1 << rpnParser.T__24) | (1 << rpnParser.T__25) | (1 << rpnParser.T__26) | (1 << rpnParser.T__27) | (1 << rpnParser.T__28) | (1 << rpnParser.T__29) | (1 << rpnParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (rpnParser.T__31 - 32)) | (1 << (rpnParser.T__32 - 32)) | (1 << (rpnParser.T__33 - 32)) | (1 << (rpnParser.T__34 - 32)) | (1 << (rpnParser.T__35 - 32)) | (1 << (rpnParser.T__36 - 32)) | (1 << (rpnParser.T__37 - 32)) | (1 << (rpnParser.T__38 - 32)) | (1 << (rpnParser.T__39 - 32)) | (1 << (rpnParser.T__40 - 32)) | (1 << (rpnParser.T__41 - 32)) | (1 << (rpnParser.T__42 - 32)) | (1 << (rpnParser.T__43 - 32)) | (1 << (rpnParser.T__44 - 32)) | (1 << (rpnParser.T__45 - 32)) | (1 << (rpnParser.T__46 - 32)) | (1 << (rpnParser.T__47 - 32)) | (1 << (rpnParser.T__48 - 32)) | (1 << (rpnParser.T__49 - 32)) | (1 << (rpnParser.T__50 - 32)) | (1 << (rpnParser.T__51 - 32)) | (1 << (rpnParser.T__52 - 32)) | (1 << (rpnParser.T__53 - 32)) | (1 << (rpnParser.T__54 - 32)) | (1 << (rpnParser.T__55 - 32)) | (1 << (rpnParser.T__56 - 32)) | (1 << (rpnParser.T__57 - 32)) | (1 << (rpnParser.T__58 - 32)) | (1 << (rpnParser.T__59 - 32)) | (1 << (rpnParser.T__60 - 32)) | (1 << (rpnParser.T__61 - 32)) | (1 << (rpnParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (rpnParser.T__63 - 64)) | (1 << (rpnParser.T__64 - 64)) | (1 << (rpnParser.T__65 - 64)) | (1 << (rpnParser.T__66 - 64)) | (1 << (rpnParser.T__67 - 64)) | (1 << (rpnParser.T__68 - 64)) | (1 << (rpnParser.T__69 - 64)) | (1 << (rpnParser.T__70 - 64)) | (1 << (rpnParser.T__71 - 64)) | (1 << (rpnParser.T__72 - 64)) | (1 << (rpnParser.T__73 - 64)) | (1 << (rpnParser.T__74 - 64)) | (1 << (rpnParser.T__75 - 64)) | (1 << (rpnParser.T__76 - 64)) | (1 << (rpnParser.T__77 - 64)) | (1 << (rpnParser.T__78 - 64)) | (1 << (rpnParser.T__79 - 64)) | (1 << (rpnParser.T__80 - 64)) | (1 << (rpnParser.T__81 - 64)) | (1 << (rpnParser.T__82 - 64)) | (1 << (rpnParser.T__83 - 64)) | (1 << (rpnParser.T__84 - 64)) | (1 << (rpnParser.T__85 - 64)) | (1 << (rpnParser.T__87 - 64)) | (1 << (rpnParser.T__88 - 64)))) !== 0) || ((((_la - 387)) & ~0x1f) == 0 && ((1 << (_la - 387)) & ((1 << (rpnParser.LABEL - 387)) | (1 << (rpnParser.GOTO - 387)) | (1 << (rpnParser.STORE - 387)) | (1 << (rpnParser.LOAD - 387)) | (1 << (rpnParser.STORE_POP - 387)) | (1 << (rpnParser.HEXADECIMAL - 387)) | (1 << (rpnParser.DECIMAL - 387)) | (1 << (rpnParser.OCTAL - 387)) | (1 << (rpnParser.STRING - 387)))) !== 0)) {
            this.state = 230;
            this.action();
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 236;
        this.match(rpnParser.T__86);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.LABEL = function() {
    return this.getToken(rpnParser.LABEL, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.LabelContext = LabelContext;

rpnParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, rpnParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(rpnParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GotoActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_gotoAction;
    return this;
}

GotoActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GotoActionContext.prototype.constructor = GotoActionContext;

GotoActionContext.prototype.GOTO = function() {
    return this.getToken(rpnParser.GOTO, 0);
};

GotoActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterGotoAction(this);
	}
};

GotoActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitGotoAction(this);
	}
};

GotoActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitGotoAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.GotoActionContext = GotoActionContext;

rpnParser.prototype.gotoAction = function() {

    var localctx = new GotoActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, rpnParser.RULE_gotoAction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(rpnParser.GOTO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_quit;
    return this;
}

QuitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuitContext.prototype.constructor = QuitContext;


QuitContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterQuit(this);
	}
};

QuitContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitQuit(this);
	}
};

QuitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitQuit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.QuitContext = QuitContext;

rpnParser.prototype.quit = function() {

    var localctx = new QuitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, rpnParser.RULE_quit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(rpnParser.T__88);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StoreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_store;
    return this;
}

StoreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoreContext.prototype.constructor = StoreContext;

StoreContext.prototype.STORE = function() {
    return this.getToken(rpnParser.STORE, 0);
};

StoreContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStore(this);
	}
};

StoreContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStore(this);
	}
};

StoreContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitStore(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.StoreContext = StoreContext;

rpnParser.prototype.store = function() {

    var localctx = new StoreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, rpnParser.RULE_store);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(rpnParser.STORE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_load;
    return this;
}

LoadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoadContext.prototype.constructor = LoadContext;

LoadContext.prototype.LOAD = function() {
    return this.getToken(rpnParser.LOAD, 0);
};

LoadContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterLoad(this);
	}
};

LoadContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitLoad(this);
	}
};

LoadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitLoad(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.LoadContext = LoadContext;

rpnParser.prototype.load = function() {

    var localctx = new LoadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, rpnParser.RULE_load);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(rpnParser.LOAD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StorePopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_storePop;
    return this;
}

StorePopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StorePopContext.prototype.constructor = StorePopContext;

StorePopContext.prototype.STORE_POP = function() {
    return this.getToken(rpnParser.STORE_POP, 0);
};

StorePopContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStorePop(this);
	}
};

StorePopContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStorePop(this);
	}
};

StorePopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitStorePop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.StorePopContext = StorePopContext;

rpnParser.prototype.storePop = function() {

    var localctx = new StorePopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, rpnParser.RULE_storePop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(rpnParser.STORE_POP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.booleanType = function() {
    return this.getTypedRuleContext(BooleanTypeContext,0);
};

TypeContext.prototype.numberType = function() {
    return this.getTypedRuleContext(NumberTypeContext,0);
};

TypeContext.prototype.stringType = function() {
    return this.getTypedRuleContext(StringTypeContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.TypeContext = TypeContext;

rpnParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, rpnParser.RULE_type);
    try {
        this.state = 253;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rpnParser.T__89:
        case rpnParser.T__90:
            this.enterOuterAlt(localctx, 1);
            this.state = 250;
            this.booleanType();
            break;
        case rpnParser.T__91:
        case rpnParser.T__92:
        case rpnParser.T__93:
        case rpnParser.T__94:
        case rpnParser.T__95:
        case rpnParser.T__96:
        case rpnParser.T__97:
        case rpnParser.T__98:
        case rpnParser.T__99:
        case rpnParser.T__100:
        case rpnParser.T__101:
        case rpnParser.T__102:
        case rpnParser.T__103:
        case rpnParser.T__104:
        case rpnParser.T__105:
        case rpnParser.T__106:
        case rpnParser.T__107:
        case rpnParser.T__108:
        case rpnParser.T__109:
        case rpnParser.T__110:
        case rpnParser.T__111:
        case rpnParser.T__112:
        case rpnParser.T__113:
        case rpnParser.T__114:
        case rpnParser.T__115:
        case rpnParser.T__116:
        case rpnParser.T__117:
        case rpnParser.T__118:
        case rpnParser.T__119:
        case rpnParser.T__120:
        case rpnParser.T__121:
        case rpnParser.T__122:
        case rpnParser.T__123:
        case rpnParser.T__124:
        case rpnParser.T__125:
        case rpnParser.T__126:
        case rpnParser.T__127:
        case rpnParser.T__128:
        case rpnParser.T__129:
        case rpnParser.T__130:
        case rpnParser.T__131:
        case rpnParser.T__132:
        case rpnParser.T__133:
        case rpnParser.T__134:
        case rpnParser.T__135:
        case rpnParser.T__136:
        case rpnParser.T__137:
        case rpnParser.T__138:
        case rpnParser.T__139:
        case rpnParser.T__140:
        case rpnParser.T__141:
        case rpnParser.T__142:
        case rpnParser.T__143:
        case rpnParser.T__144:
        case rpnParser.T__145:
        case rpnParser.T__146:
        case rpnParser.T__147:
        case rpnParser.T__148:
        case rpnParser.T__149:
        case rpnParser.T__150:
        case rpnParser.T__151:
        case rpnParser.T__152:
        case rpnParser.T__153:
        case rpnParser.T__154:
        case rpnParser.T__155:
        case rpnParser.T__156:
        case rpnParser.T__157:
        case rpnParser.T__158:
        case rpnParser.T__159:
        case rpnParser.T__160:
        case rpnParser.T__161:
        case rpnParser.T__162:
        case rpnParser.T__163:
        case rpnParser.T__164:
        case rpnParser.T__165:
        case rpnParser.T__166:
        case rpnParser.T__167:
        case rpnParser.T__168:
        case rpnParser.T__169:
        case rpnParser.T__170:
        case rpnParser.T__171:
        case rpnParser.T__172:
        case rpnParser.T__173:
        case rpnParser.T__174:
        case rpnParser.T__175:
        case rpnParser.T__176:
        case rpnParser.T__177:
        case rpnParser.T__178:
        case rpnParser.T__179:
        case rpnParser.T__180:
        case rpnParser.T__181:
        case rpnParser.T__182:
        case rpnParser.T__183:
        case rpnParser.T__184:
        case rpnParser.T__185:
        case rpnParser.T__186:
        case rpnParser.T__187:
        case rpnParser.T__188:
        case rpnParser.T__189:
        case rpnParser.T__190:
        case rpnParser.T__191:
        case rpnParser.T__192:
        case rpnParser.T__193:
        case rpnParser.T__194:
        case rpnParser.T__195:
        case rpnParser.T__196:
        case rpnParser.T__197:
        case rpnParser.T__198:
        case rpnParser.T__199:
        case rpnParser.T__200:
        case rpnParser.T__201:
        case rpnParser.T__202:
        case rpnParser.T__203:
        case rpnParser.T__204:
        case rpnParser.T__205:
        case rpnParser.T__206:
        case rpnParser.T__207:
        case rpnParser.T__208:
        case rpnParser.T__209:
        case rpnParser.T__210:
        case rpnParser.T__211:
        case rpnParser.T__212:
        case rpnParser.T__213:
        case rpnParser.T__214:
        case rpnParser.T__215:
        case rpnParser.T__216:
        case rpnParser.T__217:
        case rpnParser.T__218:
        case rpnParser.T__219:
        case rpnParser.T__220:
        case rpnParser.T__221:
        case rpnParser.T__222:
        case rpnParser.T__223:
        case rpnParser.T__224:
        case rpnParser.T__225:
        case rpnParser.T__226:
        case rpnParser.T__227:
        case rpnParser.T__228:
        case rpnParser.T__229:
        case rpnParser.T__230:
        case rpnParser.T__231:
        case rpnParser.T__232:
        case rpnParser.T__233:
        case rpnParser.T__234:
        case rpnParser.T__235:
        case rpnParser.T__236:
        case rpnParser.T__237:
        case rpnParser.T__238:
        case rpnParser.T__239:
        case rpnParser.T__240:
        case rpnParser.T__241:
        case rpnParser.T__242:
        case rpnParser.T__243:
        case rpnParser.T__244:
        case rpnParser.T__245:
        case rpnParser.T__246:
        case rpnParser.T__247:
        case rpnParser.T__248:
        case rpnParser.T__249:
        case rpnParser.T__250:
        case rpnParser.T__251:
        case rpnParser.T__252:
        case rpnParser.T__253:
        case rpnParser.T__254:
        case rpnParser.T__255:
        case rpnParser.T__256:
        case rpnParser.T__257:
        case rpnParser.T__258:
        case rpnParser.T__259:
        case rpnParser.T__260:
        case rpnParser.T__261:
        case rpnParser.T__262:
        case rpnParser.T__263:
        case rpnParser.T__264:
        case rpnParser.T__265:
        case rpnParser.T__266:
        case rpnParser.T__267:
        case rpnParser.T__268:
        case rpnParser.T__269:
        case rpnParser.T__270:
        case rpnParser.T__271:
        case rpnParser.T__272:
        case rpnParser.T__273:
        case rpnParser.T__274:
        case rpnParser.T__275:
        case rpnParser.T__276:
        case rpnParser.T__277:
        case rpnParser.T__278:
        case rpnParser.T__279:
        case rpnParser.T__280:
        case rpnParser.T__281:
        case rpnParser.T__282:
        case rpnParser.T__283:
        case rpnParser.T__284:
        case rpnParser.T__285:
        case rpnParser.T__286:
        case rpnParser.T__287:
        case rpnParser.T__288:
        case rpnParser.T__289:
        case rpnParser.T__290:
        case rpnParser.T__291:
        case rpnParser.T__292:
        case rpnParser.T__293:
        case rpnParser.T__294:
        case rpnParser.T__295:
        case rpnParser.T__296:
        case rpnParser.T__297:
        case rpnParser.T__298:
        case rpnParser.T__299:
        case rpnParser.T__300:
        case rpnParser.T__301:
        case rpnParser.T__302:
        case rpnParser.T__303:
        case rpnParser.T__304:
        case rpnParser.T__305:
        case rpnParser.T__306:
        case rpnParser.T__307:
        case rpnParser.T__308:
        case rpnParser.T__309:
        case rpnParser.T__310:
        case rpnParser.T__311:
        case rpnParser.T__312:
        case rpnParser.T__313:
        case rpnParser.T__314:
        case rpnParser.T__315:
        case rpnParser.T__316:
        case rpnParser.T__317:
        case rpnParser.T__318:
        case rpnParser.T__319:
        case rpnParser.T__320:
        case rpnParser.T__321:
        case rpnParser.T__322:
        case rpnParser.T__323:
        case rpnParser.T__324:
        case rpnParser.T__325:
        case rpnParser.T__326:
        case rpnParser.T__327:
        case rpnParser.T__328:
        case rpnParser.T__329:
        case rpnParser.T__330:
        case rpnParser.T__331:
        case rpnParser.T__332:
        case rpnParser.T__333:
        case rpnParser.T__334:
        case rpnParser.T__335:
        case rpnParser.T__336:
        case rpnParser.T__337:
        case rpnParser.T__338:
        case rpnParser.T__339:
        case rpnParser.T__340:
        case rpnParser.T__341:
        case rpnParser.T__342:
        case rpnParser.T__343:
        case rpnParser.T__344:
        case rpnParser.T__345:
        case rpnParser.T__346:
        case rpnParser.T__347:
        case rpnParser.T__348:
        case rpnParser.T__349:
        case rpnParser.T__350:
        case rpnParser.T__351:
        case rpnParser.T__352:
        case rpnParser.T__353:
        case rpnParser.T__354:
        case rpnParser.T__355:
        case rpnParser.T__356:
        case rpnParser.T__357:
        case rpnParser.T__358:
        case rpnParser.T__359:
        case rpnParser.T__360:
        case rpnParser.T__361:
        case rpnParser.T__362:
        case rpnParser.T__363:
        case rpnParser.T__364:
        case rpnParser.T__365:
        case rpnParser.T__366:
        case rpnParser.T__367:
        case rpnParser.T__368:
        case rpnParser.T__369:
        case rpnParser.T__370:
        case rpnParser.T__371:
        case rpnParser.T__372:
        case rpnParser.T__373:
        case rpnParser.T__374:
        case rpnParser.T__375:
        case rpnParser.T__376:
        case rpnParser.T__377:
        case rpnParser.T__378:
        case rpnParser.T__379:
        case rpnParser.T__380:
        case rpnParser.T__381:
        case rpnParser.T__382:
        case rpnParser.T__383:
        case rpnParser.T__384:
            this.enterOuterAlt(localctx, 2);
            this.state = 251;
            this.numberType();
            break;
        case rpnParser.T__385:
            this.enterOuterAlt(localctx, 3);
            this.state = 252;
            this.stringType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BooleanTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_booleanType;
    return this;
}

BooleanTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanTypeContext.prototype.constructor = BooleanTypeContext;


BooleanTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterBooleanType(this);
	}
};

BooleanTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitBooleanType(this);
	}
};

BooleanTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitBooleanType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.BooleanTypeContext = BooleanTypeContext;

rpnParser.prototype.booleanType = function() {

    var localctx = new BooleanTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, rpnParser.RULE_booleanType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__89 || _la===rpnParser.T__90)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_numberType;
    return this;
}

NumberTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberTypeContext.prototype.constructor = NumberTypeContext;

NumberTypeContext.prototype.distanceType = function() {
    return this.getTypedRuleContext(DistanceTypeContext,0);
};

NumberTypeContext.prototype.areaType = function() {
    return this.getTypedRuleContext(AreaTypeContext,0);
};

NumberTypeContext.prototype.volumeType = function() {
    return this.getTypedRuleContext(VolumeTypeContext,0);
};

NumberTypeContext.prototype.volumeRateType = function() {
    return this.getTypedRuleContext(VolumeRateTypeContext,0);
};

NumberTypeContext.prototype.temperatureType = function() {
    return this.getTypedRuleContext(TemperatureTypeContext,0);
};

NumberTypeContext.prototype.angleType = function() {
    return this.getTypedRuleContext(AngleTypeContext,0);
};

NumberTypeContext.prototype.globalPositionType = function() {
    return this.getTypedRuleContext(GlobalPositionTypeContext,0);
};

NumberTypeContext.prototype.angularVelocityType = function() {
    return this.getTypedRuleContext(AngularVelocityTypeContext,0);
};

NumberTypeContext.prototype.speedType = function() {
    return this.getTypedRuleContext(SpeedTypeContext,0);
};

NumberTypeContext.prototype.accelerationType = function() {
    return this.getTypedRuleContext(AccelerationTypeContext,0);
};

NumberTypeContext.prototype.timeType = function() {
    return this.getTypedRuleContext(TimeTypeContext,0);
};

NumberTypeContext.prototype.powerType = function() {
    return this.getTypedRuleContext(PowerTypeContext,0);
};

NumberTypeContext.prototype.weightType = function() {
    return this.getTypedRuleContext(WeightTypeContext,0);
};

NumberTypeContext.prototype.weightRateType = function() {
    return this.getTypedRuleContext(WeightRateTypeContext,0);
};

NumberTypeContext.prototype.electricalCurrentType = function() {
    return this.getTypedRuleContext(ElectricalCurrentTypeContext,0);
};

NumberTypeContext.prototype.electricalPotentialType = function() {
    return this.getTypedRuleContext(ElectricalPotentialTypeContext,0);
};

NumberTypeContext.prototype.frequencyType = function() {
    return this.getTypedRuleContext(FrequencyTypeContext,0);
};

NumberTypeContext.prototype.densityType = function() {
    return this.getTypedRuleContext(DensityTypeContext,0);
};

NumberTypeContext.prototype.pressureType = function() {
    return this.getTypedRuleContext(PressureTypeContext,0);
};

NumberTypeContext.prototype.torqueType = function() {
    return this.getTypedRuleContext(TorqueTypeContext,0);
};

NumberTypeContext.prototype.miscellaneousType = function() {
    return this.getTypedRuleContext(MiscellaneousTypeContext,0);
};

NumberTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterNumberType(this);
	}
};

NumberTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitNumberType(this);
	}
};

NumberTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitNumberType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.NumberTypeContext = NumberTypeContext;

rpnParser.prototype.numberType = function() {

    var localctx = new NumberTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, rpnParser.RULE_numberType);
    try {
        this.state = 278;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 257;
            this.distanceType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.areaType();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 259;
            this.volumeType();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 260;
            this.volumeRateType();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 261;
            this.temperatureType();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 262;
            this.angleType();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 263;
            this.globalPositionType();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 264;
            this.angularVelocityType();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 265;
            this.speedType();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 266;
            this.accelerationType();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 267;
            this.timeType();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 268;
            this.powerType();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 269;
            this.weightType();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 270;
            this.weightRateType();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 271;
            this.electricalCurrentType();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 272;
            this.electricalPotentialType();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 273;
            this.frequencyType();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 274;
            this.densityType();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 275;
            this.pressureType();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 276;
            this.torqueType();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 277;
            this.miscellaneousType();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DistanceTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_distanceType;
    return this;
}

DistanceTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DistanceTypeContext.prototype.constructor = DistanceTypeContext;


DistanceTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterDistanceType(this);
	}
};

DistanceTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitDistanceType(this);
	}
};

DistanceTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitDistanceType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.DistanceTypeContext = DistanceTypeContext;

rpnParser.prototype.distanceType = function() {

    var localctx = new DistanceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, rpnParser.RULE_distanceType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        _la = this._input.LA(1);
        if(!(((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (rpnParser.T__91 - 92)) | (1 << (rpnParser.T__92 - 92)) | (1 << (rpnParser.T__93 - 92)) | (1 << (rpnParser.T__94 - 92)) | (1 << (rpnParser.T__95 - 92)) | (1 << (rpnParser.T__96 - 92)) | (1 << (rpnParser.T__97 - 92)) | (1 << (rpnParser.T__98 - 92)) | (1 << (rpnParser.T__99 - 92)) | (1 << (rpnParser.T__100 - 92)) | (1 << (rpnParser.T__101 - 92)) | (1 << (rpnParser.T__102 - 92)) | (1 << (rpnParser.T__103 - 92)) | (1 << (rpnParser.T__104 - 92)) | (1 << (rpnParser.T__105 - 92)) | (1 << (rpnParser.T__106 - 92)) | (1 << (rpnParser.T__107 - 92)) | (1 << (rpnParser.T__108 - 92)) | (1 << (rpnParser.T__109 - 92)) | (1 << (rpnParser.T__110 - 92)) | (1 << (rpnParser.T__111 - 92)) | (1 << (rpnParser.T__112 - 92)) | (1 << (rpnParser.T__113 - 92)) | (1 << (rpnParser.T__114 - 92)) | (1 << (rpnParser.T__115 - 92)) | (1 << (rpnParser.T__116 - 92)) | (1 << (rpnParser.T__117 - 92)) | (1 << (rpnParser.T__118 - 92)) | (1 << (rpnParser.T__119 - 92)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AreaTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_areaType;
    return this;
}

AreaTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AreaTypeContext.prototype.constructor = AreaTypeContext;


AreaTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAreaType(this);
	}
};

AreaTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAreaType(this);
	}
};

AreaTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAreaType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.AreaTypeContext = AreaTypeContext;

rpnParser.prototype.areaType = function() {

    var localctx = new AreaTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, rpnParser.RULE_areaType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        _la = this._input.LA(1);
        if(!(((((_la - 121)) & ~0x1f) == 0 && ((1 << (_la - 121)) & ((1 << (rpnParser.T__120 - 121)) | (1 << (rpnParser.T__121 - 121)) | (1 << (rpnParser.T__122 - 121)) | (1 << (rpnParser.T__123 - 121)) | (1 << (rpnParser.T__124 - 121)) | (1 << (rpnParser.T__125 - 121)) | (1 << (rpnParser.T__126 - 121)) | (1 << (rpnParser.T__127 - 121)) | (1 << (rpnParser.T__128 - 121)) | (1 << (rpnParser.T__129 - 121)) | (1 << (rpnParser.T__130 - 121)) | (1 << (rpnParser.T__131 - 121)) | (1 << (rpnParser.T__132 - 121)) | (1 << (rpnParser.T__133 - 121)) | (1 << (rpnParser.T__134 - 121)) | (1 << (rpnParser.T__135 - 121)) | (1 << (rpnParser.T__136 - 121)) | (1 << (rpnParser.T__137 - 121)) | (1 << (rpnParser.T__138 - 121)) | (1 << (rpnParser.T__139 - 121)) | (1 << (rpnParser.T__140 - 121)) | (1 << (rpnParser.T__141 - 121)) | (1 << (rpnParser.T__142 - 121)) | (1 << (rpnParser.T__143 - 121)) | (1 << (rpnParser.T__144 - 121)) | (1 << (rpnParser.T__145 - 121)) | (1 << (rpnParser.T__146 - 121)) | (1 << (rpnParser.T__147 - 121)) | (1 << (rpnParser.T__148 - 121)) | (1 << (rpnParser.T__149 - 121)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VolumeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_volumeType;
    return this;
}

VolumeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VolumeTypeContext.prototype.constructor = VolumeTypeContext;


VolumeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterVolumeType(this);
	}
};

VolumeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitVolumeType(this);
	}
};

VolumeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitVolumeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.VolumeTypeContext = VolumeTypeContext;

rpnParser.prototype.volumeType = function() {

    var localctx = new VolumeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, rpnParser.RULE_volumeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        _la = this._input.LA(1);
        if(!(((((_la - 151)) & ~0x1f) == 0 && ((1 << (_la - 151)) & ((1 << (rpnParser.T__150 - 151)) | (1 << (rpnParser.T__151 - 151)) | (1 << (rpnParser.T__152 - 151)) | (1 << (rpnParser.T__153 - 151)) | (1 << (rpnParser.T__154 - 151)) | (1 << (rpnParser.T__155 - 151)) | (1 << (rpnParser.T__156 - 151)) | (1 << (rpnParser.T__157 - 151)) | (1 << (rpnParser.T__158 - 151)) | (1 << (rpnParser.T__159 - 151)) | (1 << (rpnParser.T__160 - 151)) | (1 << (rpnParser.T__161 - 151)) | (1 << (rpnParser.T__162 - 151)) | (1 << (rpnParser.T__163 - 151)) | (1 << (rpnParser.T__164 - 151)) | (1 << (rpnParser.T__165 - 151)) | (1 << (rpnParser.T__166 - 151)) | (1 << (rpnParser.T__167 - 151)) | (1 << (rpnParser.T__168 - 151)) | (1 << (rpnParser.T__169 - 151)) | (1 << (rpnParser.T__170 - 151)) | (1 << (rpnParser.T__171 - 151)) | (1 << (rpnParser.T__172 - 151)) | (1 << (rpnParser.T__173 - 151)) | (1 << (rpnParser.T__174 - 151)) | (1 << (rpnParser.T__175 - 151)) | (1 << (rpnParser.T__176 - 151)) | (1 << (rpnParser.T__177 - 151)) | (1 << (rpnParser.T__178 - 151)) | (1 << (rpnParser.T__179 - 151)) | (1 << (rpnParser.T__180 - 151)) | (1 << (rpnParser.T__181 - 151)))) !== 0) || ((((_la - 183)) & ~0x1f) == 0 && ((1 << (_la - 183)) & ((1 << (rpnParser.T__182 - 183)) | (1 << (rpnParser.T__183 - 183)) | (1 << (rpnParser.T__184 - 183)) | (1 << (rpnParser.T__185 - 183)) | (1 << (rpnParser.T__186 - 183)) | (1 << (rpnParser.T__187 - 183)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VolumeRateTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_volumeRateType;
    return this;
}

VolumeRateTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VolumeRateTypeContext.prototype.constructor = VolumeRateTypeContext;


VolumeRateTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterVolumeRateType(this);
	}
};

VolumeRateTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitVolumeRateType(this);
	}
};

VolumeRateTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitVolumeRateType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.VolumeRateTypeContext = VolumeRateTypeContext;

rpnParser.prototype.volumeRateType = function() {

    var localctx = new VolumeRateTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, rpnParser.RULE_volumeRateType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        _la = this._input.LA(1);
        if(!(((((_la - 189)) & ~0x1f) == 0 && ((1 << (_la - 189)) & ((1 << (rpnParser.T__188 - 189)) | (1 << (rpnParser.T__189 - 189)) | (1 << (rpnParser.T__190 - 189)) | (1 << (rpnParser.T__191 - 189)) | (1 << (rpnParser.T__192 - 189)) | (1 << (rpnParser.T__193 - 189)) | (1 << (rpnParser.T__194 - 189)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TemperatureTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_temperatureType;
    return this;
}

TemperatureTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemperatureTypeContext.prototype.constructor = TemperatureTypeContext;


TemperatureTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterTemperatureType(this);
	}
};

TemperatureTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitTemperatureType(this);
	}
};

TemperatureTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitTemperatureType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.TemperatureTypeContext = TemperatureTypeContext;

rpnParser.prototype.temperatureType = function() {

    var localctx = new TemperatureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, rpnParser.RULE_temperatureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        _la = this._input.LA(1);
        if(!(((((_la - 196)) & ~0x1f) == 0 && ((1 << (_la - 196)) & ((1 << (rpnParser.T__195 - 196)) | (1 << (rpnParser.T__196 - 196)) | (1 << (rpnParser.T__197 - 196)) | (1 << (rpnParser.T__198 - 196)) | (1 << (rpnParser.T__199 - 196)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AngleTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_angleType;
    return this;
}

AngleTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AngleTypeContext.prototype.constructor = AngleTypeContext;


AngleTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAngleType(this);
	}
};

AngleTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAngleType(this);
	}
};

AngleTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAngleType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.AngleTypeContext = AngleTypeContext;

rpnParser.prototype.angleType = function() {

    var localctx = new AngleTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, rpnParser.RULE_angleType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        _la = this._input.LA(1);
        if(!(((((_la - 201)) & ~0x1f) == 0 && ((1 << (_la - 201)) & ((1 << (rpnParser.T__200 - 201)) | (1 << (rpnParser.T__201 - 201)) | (1 << (rpnParser.T__202 - 201)) | (1 << (rpnParser.T__203 - 201)) | (1 << (rpnParser.T__204 - 201)) | (1 << (rpnParser.T__205 - 201)) | (1 << (rpnParser.T__206 - 201)) | (1 << (rpnParser.T__207 - 201)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GlobalPositionTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_globalPositionType;
    return this;
}

GlobalPositionTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GlobalPositionTypeContext.prototype.constructor = GlobalPositionTypeContext;


GlobalPositionTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterGlobalPositionType(this);
	}
};

GlobalPositionTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitGlobalPositionType(this);
	}
};

GlobalPositionTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitGlobalPositionType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.GlobalPositionTypeContext = GlobalPositionTypeContext;

rpnParser.prototype.globalPositionType = function() {

    var localctx = new GlobalPositionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, rpnParser.RULE_globalPositionType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        _la = this._input.LA(1);
        if(!(((((_la - 209)) & ~0x1f) == 0 && ((1 << (_la - 209)) & ((1 << (rpnParser.T__208 - 209)) | (1 << (rpnParser.T__209 - 209)) | (1 << (rpnParser.T__210 - 209)) | (1 << (rpnParser.T__211 - 209)) | (1 << (rpnParser.T__212 - 209)) | (1 << (rpnParser.T__213 - 209)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AngularVelocityTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_angularVelocityType;
    return this;
}

AngularVelocityTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AngularVelocityTypeContext.prototype.constructor = AngularVelocityTypeContext;


AngularVelocityTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAngularVelocityType(this);
	}
};

AngularVelocityTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAngularVelocityType(this);
	}
};

AngularVelocityTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAngularVelocityType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.AngularVelocityTypeContext = AngularVelocityTypeContext;

rpnParser.prototype.angularVelocityType = function() {

    var localctx = new AngularVelocityTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, rpnParser.RULE_angularVelocityType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        _la = this._input.LA(1);
        if(!(((((_la - 215)) & ~0x1f) == 0 && ((1 << (_la - 215)) & ((1 << (rpnParser.T__214 - 215)) | (1 << (rpnParser.T__215 - 215)) | (1 << (rpnParser.T__216 - 215)) | (1 << (rpnParser.T__217 - 215)) | (1 << (rpnParser.T__218 - 215)) | (1 << (rpnParser.T__219 - 215)) | (1 << (rpnParser.T__220 - 215)) | (1 << (rpnParser.T__221 - 215)) | (1 << (rpnParser.T__222 - 215)) | (1 << (rpnParser.T__223 - 215)) | (1 << (rpnParser.T__224 - 215)) | (1 << (rpnParser.T__225 - 215)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SpeedTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_speedType;
    return this;
}

SpeedTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpeedTypeContext.prototype.constructor = SpeedTypeContext;


SpeedTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterSpeedType(this);
	}
};

SpeedTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitSpeedType(this);
	}
};

SpeedTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitSpeedType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.SpeedTypeContext = SpeedTypeContext;

rpnParser.prototype.speedType = function() {

    var localctx = new SpeedTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, rpnParser.RULE_speedType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        _la = this._input.LA(1);
        if(!(((((_la - 227)) & ~0x1f) == 0 && ((1 << (_la - 227)) & ((1 << (rpnParser.T__226 - 227)) | (1 << (rpnParser.T__227 - 227)) | (1 << (rpnParser.T__228 - 227)) | (1 << (rpnParser.T__229 - 227)) | (1 << (rpnParser.T__230 - 227)) | (1 << (rpnParser.T__231 - 227)) | (1 << (rpnParser.T__232 - 227)) | (1 << (rpnParser.T__233 - 227)) | (1 << (rpnParser.T__234 - 227)) | (1 << (rpnParser.T__235 - 227)) | (1 << (rpnParser.T__236 - 227)) | (1 << (rpnParser.T__237 - 227)) | (1 << (rpnParser.T__238 - 227)) | (1 << (rpnParser.T__239 - 227)) | (1 << (rpnParser.T__240 - 227)) | (1 << (rpnParser.T__241 - 227)) | (1 << (rpnParser.T__242 - 227)) | (1 << (rpnParser.T__243 - 227)) | (1 << (rpnParser.T__244 - 227)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AccelerationTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_accelerationType;
    return this;
}

AccelerationTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AccelerationTypeContext.prototype.constructor = AccelerationTypeContext;


AccelerationTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterAccelerationType(this);
	}
};

AccelerationTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitAccelerationType(this);
	}
};

AccelerationTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitAccelerationType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.AccelerationTypeContext = AccelerationTypeContext;

rpnParser.prototype.accelerationType = function() {

    var localctx = new AccelerationTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, rpnParser.RULE_accelerationType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        _la = this._input.LA(1);
        if(!(((((_la - 246)) & ~0x1f) == 0 && ((1 << (_la - 246)) & ((1 << (rpnParser.T__245 - 246)) | (1 << (rpnParser.T__246 - 246)) | (1 << (rpnParser.T__247 - 246)) | (1 << (rpnParser.T__248 - 246)) | (1 << (rpnParser.T__249 - 246)) | (1 << (rpnParser.T__250 - 246)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TimeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_timeType;
    return this;
}

TimeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeTypeContext.prototype.constructor = TimeTypeContext;


TimeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterTimeType(this);
	}
};

TimeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitTimeType(this);
	}
};

TimeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitTimeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.TimeTypeContext = TimeTypeContext;

rpnParser.prototype.timeType = function() {

    var localctx = new TimeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, rpnParser.RULE_timeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        _la = this._input.LA(1);
        if(!(((((_la - 252)) & ~0x1f) == 0 && ((1 << (_la - 252)) & ((1 << (rpnParser.T__251 - 252)) | (1 << (rpnParser.T__252 - 252)) | (1 << (rpnParser.T__253 - 252)) | (1 << (rpnParser.T__254 - 252)) | (1 << (rpnParser.T__255 - 252)) | (1 << (rpnParser.T__256 - 252)) | (1 << (rpnParser.T__257 - 252)) | (1 << (rpnParser.T__258 - 252)) | (1 << (rpnParser.T__259 - 252)) | (1 << (rpnParser.T__260 - 252)) | (1 << (rpnParser.T__261 - 252)) | (1 << (rpnParser.T__262 - 252)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PowerTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_powerType;
    return this;
}

PowerTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerTypeContext.prototype.constructor = PowerTypeContext;


PowerTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterPowerType(this);
	}
};

PowerTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitPowerType(this);
	}
};

PowerTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitPowerType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.PowerTypeContext = PowerTypeContext;

rpnParser.prototype.powerType = function() {

    var localctx = new PowerTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, rpnParser.RULE_powerType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        _la = this._input.LA(1);
        if(!(((((_la - 264)) & ~0x1f) == 0 && ((1 << (_la - 264)) & ((1 << (rpnParser.T__263 - 264)) | (1 << (rpnParser.T__264 - 264)) | (1 << (rpnParser.T__265 - 264)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WeightTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_weightType;
    return this;
}

WeightTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WeightTypeContext.prototype.constructor = WeightTypeContext;


WeightTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterWeightType(this);
	}
};

WeightTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitWeightType(this);
	}
};

WeightTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitWeightType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.WeightTypeContext = WeightTypeContext;

rpnParser.prototype.weightType = function() {

    var localctx = new WeightTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, rpnParser.RULE_weightType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        _la = this._input.LA(1);
        if(!(((((_la - 267)) & ~0x1f) == 0 && ((1 << (_la - 267)) & ((1 << (rpnParser.T__266 - 267)) | (1 << (rpnParser.T__267 - 267)) | (1 << (rpnParser.T__268 - 267)) | (1 << (rpnParser.T__269 - 267)) | (1 << (rpnParser.T__270 - 267)) | (1 << (rpnParser.T__271 - 267)) | (1 << (rpnParser.T__272 - 267)) | (1 << (rpnParser.T__273 - 267)) | (1 << (rpnParser.T__274 - 267)) | (1 << (rpnParser.T__275 - 267)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WeightRateTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_weightRateType;
    return this;
}

WeightRateTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WeightRateTypeContext.prototype.constructor = WeightRateTypeContext;


WeightRateTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterWeightRateType(this);
	}
};

WeightRateTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitWeightRateType(this);
	}
};

WeightRateTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitWeightRateType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.WeightRateTypeContext = WeightRateTypeContext;

rpnParser.prototype.weightRateType = function() {

    var localctx = new WeightRateTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, rpnParser.RULE_weightRateType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        _la = this._input.LA(1);
        if(!(((((_la - 277)) & ~0x1f) == 0 && ((1 << (_la - 277)) & ((1 << (rpnParser.T__276 - 277)) | (1 << (rpnParser.T__277 - 277)) | (1 << (rpnParser.T__278 - 277)) | (1 << (rpnParser.T__279 - 277)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElectricalCurrentTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_electricalCurrentType;
    return this;
}

ElectricalCurrentTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElectricalCurrentTypeContext.prototype.constructor = ElectricalCurrentTypeContext;


ElectricalCurrentTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterElectricalCurrentType(this);
	}
};

ElectricalCurrentTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitElectricalCurrentType(this);
	}
};

ElectricalCurrentTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitElectricalCurrentType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.ElectricalCurrentTypeContext = ElectricalCurrentTypeContext;

rpnParser.prototype.electricalCurrentType = function() {

    var localctx = new ElectricalCurrentTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, rpnParser.RULE_electricalCurrentType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(!(((((_la - 281)) & ~0x1f) == 0 && ((1 << (_la - 281)) & ((1 << (rpnParser.T__280 - 281)) | (1 << (rpnParser.T__281 - 281)) | (1 << (rpnParser.T__282 - 281)) | (1 << (rpnParser.T__283 - 281)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElectricalPotentialTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_electricalPotentialType;
    return this;
}

ElectricalPotentialTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElectricalPotentialTypeContext.prototype.constructor = ElectricalPotentialTypeContext;


ElectricalPotentialTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterElectricalPotentialType(this);
	}
};

ElectricalPotentialTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitElectricalPotentialType(this);
	}
};

ElectricalPotentialTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitElectricalPotentialType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.ElectricalPotentialTypeContext = ElectricalPotentialTypeContext;

rpnParser.prototype.electricalPotentialType = function() {

    var localctx = new ElectricalPotentialTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, rpnParser.RULE_electricalPotentialType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__284 || _la===rpnParser.T__285)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FrequencyTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_frequencyType;
    return this;
}

FrequencyTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FrequencyTypeContext.prototype.constructor = FrequencyTypeContext;


FrequencyTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterFrequencyType(this);
	}
};

FrequencyTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitFrequencyType(this);
	}
};

FrequencyTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitFrequencyType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.FrequencyTypeContext = FrequencyTypeContext;

rpnParser.prototype.frequencyType = function() {

    var localctx = new FrequencyTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, rpnParser.RULE_frequencyType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        _la = this._input.LA(1);
        if(!(((((_la - 287)) & ~0x1f) == 0 && ((1 << (_la - 287)) & ((1 << (rpnParser.T__286 - 287)) | (1 << (rpnParser.T__287 - 287)) | (1 << (rpnParser.T__288 - 287)) | (1 << (rpnParser.T__289 - 287)) | (1 << (rpnParser.T__290 - 287)) | (1 << (rpnParser.T__291 - 287)) | (1 << (rpnParser.T__292 - 287)) | (1 << (rpnParser.T__293 - 287)) | (1 << (rpnParser.T__294 - 287)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DensityTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_densityType;
    return this;
}

DensityTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DensityTypeContext.prototype.constructor = DensityTypeContext;


DensityTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterDensityType(this);
	}
};

DensityTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitDensityType(this);
	}
};

DensityTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitDensityType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.DensityTypeContext = DensityTypeContext;

rpnParser.prototype.densityType = function() {

    var localctx = new DensityTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, rpnParser.RULE_densityType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        _la = this._input.LA(1);
        if(!(((((_la - 296)) & ~0x1f) == 0 && ((1 << (_la - 296)) & ((1 << (rpnParser.T__295 - 296)) | (1 << (rpnParser.T__296 - 296)) | (1 << (rpnParser.T__297 - 296)) | (1 << (rpnParser.T__298 - 296)) | (1 << (rpnParser.T__299 - 296)) | (1 << (rpnParser.T__300 - 296)) | (1 << (rpnParser.T__301 - 296)) | (1 << (rpnParser.T__302 - 296)) | (1 << (rpnParser.T__303 - 296)) | (1 << (rpnParser.T__304 - 296)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PressureTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_pressureType;
    return this;
}

PressureTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PressureTypeContext.prototype.constructor = PressureTypeContext;


PressureTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterPressureType(this);
	}
};

PressureTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitPressureType(this);
	}
};

PressureTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitPressureType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.PressureTypeContext = PressureTypeContext;

rpnParser.prototype.pressureType = function() {

    var localctx = new PressureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, rpnParser.RULE_pressureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        _la = this._input.LA(1);
        if(!(((((_la - 306)) & ~0x1f) == 0 && ((1 << (_la - 306)) & ((1 << (rpnParser.T__305 - 306)) | (1 << (rpnParser.T__306 - 306)) | (1 << (rpnParser.T__307 - 306)) | (1 << (rpnParser.T__308 - 306)) | (1 << (rpnParser.T__309 - 306)) | (1 << (rpnParser.T__310 - 306)) | (1 << (rpnParser.T__311 - 306)) | (1 << (rpnParser.T__312 - 306)) | (1 << (rpnParser.T__313 - 306)) | (1 << (rpnParser.T__314 - 306)) | (1 << (rpnParser.T__315 - 306)) | (1 << (rpnParser.T__316 - 306)) | (1 << (rpnParser.T__317 - 306)) | (1 << (rpnParser.T__318 - 306)) | (1 << (rpnParser.T__319 - 306)) | (1 << (rpnParser.T__320 - 306)) | (1 << (rpnParser.T__321 - 306)) | (1 << (rpnParser.T__322 - 306)) | (1 << (rpnParser.T__323 - 306)) | (1 << (rpnParser.T__324 - 306)) | (1 << (rpnParser.T__325 - 306)) | (1 << (rpnParser.T__326 - 306)) | (1 << (rpnParser.T__327 - 306)) | (1 << (rpnParser.T__328 - 306)) | (1 << (rpnParser.T__329 - 306)) | (1 << (rpnParser.T__330 - 306)) | (1 << (rpnParser.T__331 - 306)) | (1 << (rpnParser.T__332 - 306)) | (1 << (rpnParser.T__333 - 306)) | (1 << (rpnParser.T__334 - 306)) | (1 << (rpnParser.T__335 - 306)) | (1 << (rpnParser.T__336 - 306)))) !== 0) || ((((_la - 338)) & ~0x1f) == 0 && ((1 << (_la - 338)) & ((1 << (rpnParser.T__337 - 338)) | (1 << (rpnParser.T__338 - 338)) | (1 << (rpnParser.T__339 - 338)) | (1 << (rpnParser.T__340 - 338)) | (1 << (rpnParser.T__341 - 338)) | (1 << (rpnParser.T__342 - 338)) | (1 << (rpnParser.T__343 - 338)) | (1 << (rpnParser.T__344 - 338)) | (1 << (rpnParser.T__345 - 338)) | (1 << (rpnParser.T__346 - 338)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TorqueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_torqueType;
    return this;
}

TorqueTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TorqueTypeContext.prototype.constructor = TorqueTypeContext;


TorqueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterTorqueType(this);
	}
};

TorqueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitTorqueType(this);
	}
};

TorqueTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitTorqueType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.TorqueTypeContext = TorqueTypeContext;

rpnParser.prototype.torqueType = function() {

    var localctx = new TorqueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, rpnParser.RULE_torqueType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__92 || ((((_la - 348)) & ~0x1f) == 0 && ((1 << (_la - 348)) & ((1 << (rpnParser.T__347 - 348)) | (1 << (rpnParser.T__348 - 348)) | (1 << (rpnParser.T__349 - 348)) | (1 << (rpnParser.T__350 - 348)) | (1 << (rpnParser.T__351 - 348)) | (1 << (rpnParser.T__352 - 348)) | (1 << (rpnParser.T__353 - 348)) | (1 << (rpnParser.T__354 - 348)) | (1 << (rpnParser.T__355 - 348)) | (1 << (rpnParser.T__356 - 348)) | (1 << (rpnParser.T__357 - 348)) | (1 << (rpnParser.T__358 - 348)) | (1 << (rpnParser.T__359 - 348)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MiscellaneousTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_miscellaneousType;
    return this;
}

MiscellaneousTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiscellaneousTypeContext.prototype.constructor = MiscellaneousTypeContext;


MiscellaneousTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterMiscellaneousType(this);
	}
};

MiscellaneousTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitMiscellaneousType(this);
	}
};

MiscellaneousTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitMiscellaneousType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.MiscellaneousTypeContext = MiscellaneousTypeContext;

rpnParser.prototype.miscellaneousType = function() {

    var localctx = new MiscellaneousTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, rpnParser.RULE_miscellaneousType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        _la = this._input.LA(1);
        if(!(((((_la - 361)) & ~0x1f) == 0 && ((1 << (_la - 361)) & ((1 << (rpnParser.T__360 - 361)) | (1 << (rpnParser.T__361 - 361)) | (1 << (rpnParser.T__362 - 361)) | (1 << (rpnParser.T__363 - 361)) | (1 << (rpnParser.T__364 - 361)) | (1 << (rpnParser.T__365 - 361)) | (1 << (rpnParser.T__366 - 361)) | (1 << (rpnParser.T__367 - 361)) | (1 << (rpnParser.T__368 - 361)) | (1 << (rpnParser.T__369 - 361)) | (1 << (rpnParser.T__370 - 361)) | (1 << (rpnParser.T__371 - 361)) | (1 << (rpnParser.T__372 - 361)) | (1 << (rpnParser.T__373 - 361)) | (1 << (rpnParser.T__374 - 361)) | (1 << (rpnParser.T__375 - 361)) | (1 << (rpnParser.T__376 - 361)) | (1 << (rpnParser.T__377 - 361)) | (1 << (rpnParser.T__378 - 361)) | (1 << (rpnParser.T__379 - 361)) | (1 << (rpnParser.T__380 - 361)) | (1 << (rpnParser.T__381 - 361)) | (1 << (rpnParser.T__382 - 361)) | (1 << (rpnParser.T__383 - 361)) | (1 << (rpnParser.T__384 - 361)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_stringType;
    return this;
}

StringTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringTypeContext.prototype.constructor = StringTypeContext;


StringTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStringType(this);
	}
};

StringTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStringType(this);
	}
};

StringTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rpnVisitor ) {
        return visitor.visitStringType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rpnParser.StringTypeContext = StringTypeContext;

rpnParser.prototype.stringType = function() {

    var localctx = new StringTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, rpnParser.RULE_stringType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(rpnParser.T__385);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.rpnParser = rpnParser;
