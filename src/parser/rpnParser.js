// Generated from src/parser/rpn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rpnListener = require('./rpnListener').rpnListener;
var grammarFileName = "rpn.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u018a\u00ef\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002",
    "\u0007\u0002T\n\u0002\f\u0002\u000e\u0002W\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003e",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006r\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u008b\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u00be\n\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005",
    "%\u00d7\n%\u0003&\u0003&\u0007&\u00db\n&\f&\u000e&\u00de\u000b&\u0003",
    "&\u0003&\u0003\'\u0003\'\u0007\'\u00e4\n\'\f\'\u000e\'\u00e7\u000b\'",
    "\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003)\u0002\u0002*\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDFHJLNP\u0002!\u0003\u0002\u0188\u0189\u0003\u0002",
    "\u0006\u0007\u0003\u0002\b$\u0003\u0002%B\u0003\u0002Ch\u0003\u0002",
    "io\u0003\u0002pt\u0003\u0002u|\u0003\u0002}\u0082\u0003\u0002\u0083",
    "\u008e\u0003\u0002\u008f\u00a1\u0003\u0002\u00a2\u00a7\u0003\u0002\u00a8",
    "\u00b3\u0003\u0002\u00b4\u00b6\u0003\u0002\u00b7\u00c0\u0003\u0002\u00c1",
    "\u00c4\u0003\u0002\u00c5\u00c8\u0003\u0002\u00c9\u00ca\u0003\u0002\u00cb",
    "\u00d3\u0003\u0002\u00d4\u00dd\u0003\u0002\u00de\u0107\u0004\u0002\t",
    "\t\u0108\u0114\u0003\u0002\u0115\u012d\u0003\u0002\u012f\u0130\u0003",
    "\u0002\u0131\u0139\u0004\u0002\u012f\u012f\u013a\u013f\u0003\u0002\u0140",
    "\u0145\u0003\u0002\u0146\u014b\u0003\u0002\u014c\u0165\u0003\u0002\u0171",
    "\u017c\u0004\u0002\u017d\u0181\u0185\u0187\u0002\u00f5\u0002U\u0003",
    "\u0002\u0002\u0002\u0004d\u0003\u0002\u0002\u0002\u0006f\u0003\u0002",
    "\u0002\u0002\bh\u0003\u0002\u0002\u0002\nq\u0003\u0002\u0002\u0002\f",
    "s\u0003\u0002\u0002\u0002\u000e\u008a\u0003\u0002\u0002\u0002\u0010",
    "\u008c\u0003\u0002\u0002\u0002\u0012\u008e\u0003\u0002\u0002\u0002\u0014",
    "\u0090\u0003\u0002\u0002\u0002\u0016\u0092\u0003\u0002\u0002\u0002\u0018",
    "\u0094\u0003\u0002\u0002\u0002\u001a\u0096\u0003\u0002\u0002\u0002\u001c",
    "\u0098\u0003\u0002\u0002\u0002\u001e\u009a\u0003\u0002\u0002\u0002 ",
    "\u009c\u0003\u0002\u0002\u0002\"\u009e\u0003\u0002\u0002\u0002$\u00a0",
    "\u0003\u0002\u0002\u0002&\u00a2\u0003\u0002\u0002\u0002(\u00a4\u0003",
    "\u0002\u0002\u0002*\u00a6\u0003\u0002\u0002\u0002,\u00a8\u0003\u0002",
    "\u0002\u0002.\u00aa\u0003\u0002\u0002\u00020\u00ac\u0003\u0002\u0002",
    "\u00022\u00ae\u0003\u0002\u0002\u00024\u00b0\u0003\u0002\u0002\u0002",
    "6\u00b2\u0003\u0002\u0002\u00028\u00b4\u0003\u0002\u0002\u0002:\u00b6",
    "\u0003\u0002\u0002\u0002<\u00b8\u0003\u0002\u0002\u0002>\u00c1\u0003",
    "\u0002\u0002\u0002@\u00c3\u0003\u0002\u0002\u0002B\u00c5\u0003\u0002",
    "\u0002\u0002D\u00c7\u0003\u0002\u0002\u0002F\u00c9\u0003\u0002\u0002",
    "\u0002H\u00d6\u0003\u0002\u0002\u0002J\u00d8\u0003\u0002\u0002\u0002",
    "L\u00e1\u0003\u0002\u0002\u0002N\u00ea\u0003\u0002\u0002\u0002P\u00ec",
    "\u0003\u0002\u0002\u0002RT\u0005\u0004\u0003\u0002SR\u0003\u0002\u0002",
    "\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002",
    "\u0002\u0002V\u0003\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "Xe\u0005\u0006\u0004\u0002Ye\u0007\u0183\u0002\u0002Ze\u0005\b\u0005",
    "\u0002[e\u0005<\u001f\u0002\\e\u0005> \u0002]e\u0005@!\u0002^e\u0005",
    "B\"\u0002_e\u0005D#\u0002`e\u0005F$\u0002ae\u0005H%\u0002be\u0005N(",
    "\u0002ce\u0005P)\u0002dX\u0003\u0002\u0002\u0002dY\u0003\u0002\u0002",
    "\u0002dZ\u0003\u0002\u0002\u0002d[\u0003\u0002\u0002\u0002d\\\u0003",
    "\u0002\u0002\u0002d]\u0003\u0002\u0002\u0002d^\u0003\u0002\u0002\u0002",
    "d_\u0003\u0002\u0002\u0002d`\u0003\u0002\u0002\u0002da\u0003\u0002\u0002",
    "\u0002db\u0003\u0002\u0002\u0002dc\u0003\u0002\u0002\u0002e\u0005\u0003",
    "\u0002\u0002\u0002fg\t\u0002\u0002\u0002g\u0007\u0003\u0002\u0002\u0002",
    "hi\u0007\u0003\u0002\u0002ij\u0007\u0182\u0002\u0002jk\u0007\u0004\u0002",
    "\u0002kl\u0005\n\u0006\u0002lm\u0007\u0005\u0002\u0002m\t\u0003\u0002",
    "\u0002\u0002nr\u0005\f\u0007\u0002or\u0005\u000e\b\u0002pr\u0005:\u001e",
    "\u0002qn\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003\u0002",
    "\u0002\u0002r\u000b\u0003\u0002\u0002\u0002st\t\u0003\u0002\u0002t\r",
    "\u0003\u0002\u0002\u0002u\u008b\u0005\u0010\t\u0002v\u008b\u0005\u0012",
    "\n\u0002w\u008b\u0005\u0014\u000b\u0002x\u008b\u0005\u0016\f\u0002y",
    "\u008b\u0005\u0018\r\u0002z\u008b\u0005\u001a\u000e\u0002{\u008b\u0005",
    "\u001c\u000f\u0002|\u008b\u0005\u001e\u0010\u0002}\u008b\u0005 \u0011",
    "\u0002~\u008b\u0005\"\u0012\u0002\u007f\u008b\u0005$\u0013\u0002\u0080",
    "\u008b\u0005&\u0014\u0002\u0081\u008b\u0005(\u0015\u0002\u0082\u008b",
    "\u0005*\u0016\u0002\u0083\u008b\u0005,\u0017\u0002\u0084\u008b\u0005",
    ".\u0018\u0002\u0085\u008b\u00050\u0019\u0002\u0086\u008b\u00052\u001a",
    "\u0002\u0087\u008b\u00054\u001b\u0002\u0088\u008b\u00056\u001c\u0002",
    "\u0089\u008b\u00058\u001d\u0002\u008au\u0003\u0002\u0002\u0002\u008a",
    "v\u0003\u0002\u0002\u0002\u008aw\u0003\u0002\u0002\u0002\u008ax\u0003",
    "\u0002\u0002\u0002\u008ay\u0003\u0002\u0002\u0002\u008az\u0003\u0002",
    "\u0002\u0002\u008a{\u0003\u0002\u0002\u0002\u008a|\u0003\u0002\u0002",
    "\u0002\u008a}\u0003\u0002\u0002\u0002\u008a~\u0003\u0002\u0002\u0002",
    "\u008a\u007f\u0003\u0002\u0002\u0002\u008a\u0080\u0003\u0002\u0002\u0002",
    "\u008a\u0081\u0003\u0002\u0002\u0002\u008a\u0082\u0003\u0002\u0002\u0002",
    "\u008a\u0083\u0003\u0002\u0002\u0002\u008a\u0084\u0003\u0002\u0002\u0002",
    "\u008a\u0085\u0003\u0002\u0002\u0002\u008a\u0086\u0003\u0002\u0002\u0002",
    "\u008a\u0087\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002",
    "\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u000f\u0003\u0002\u0002\u0002",
    "\u008c\u008d\t\u0004\u0002\u0002\u008d\u0011\u0003\u0002\u0002\u0002",
    "\u008e\u008f\t\u0005\u0002\u0002\u008f\u0013\u0003\u0002\u0002\u0002",
    "\u0090\u0091\t\u0006\u0002\u0002\u0091\u0015\u0003\u0002\u0002\u0002",
    "\u0092\u0093\t\u0007\u0002\u0002\u0093\u0017\u0003\u0002\u0002\u0002",
    "\u0094\u0095\t\b\u0002\u0002\u0095\u0019\u0003\u0002\u0002\u0002\u0096",
    "\u0097\t\t\u0002\u0002\u0097\u001b\u0003\u0002\u0002\u0002\u0098\u0099",
    "\t\n\u0002\u0002\u0099\u001d\u0003\u0002\u0002\u0002\u009a\u009b\t\u000b",
    "\u0002\u0002\u009b\u001f\u0003\u0002\u0002\u0002\u009c\u009d\t\f\u0002",
    "\u0002\u009d!\u0003\u0002\u0002\u0002\u009e\u009f\t\r\u0002\u0002\u009f",
    "#\u0003\u0002\u0002\u0002\u00a0\u00a1\t\u000e\u0002\u0002\u00a1%\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\t\u000f\u0002\u0002\u00a3\'\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\t\u0010\u0002\u0002\u00a5)\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\t\u0011\u0002\u0002\u00a7+\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\t\u0012\u0002\u0002\u00a9-\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\t\u0013\u0002\u0002\u00ab/\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\t\u0014\u0002\u0002\u00ad1\u0003\u0002\u0002\u0002\u00ae\u00af\t\u0015",
    "\u0002\u0002\u00af3\u0003\u0002\u0002\u0002\u00b0\u00b1\t\u0016\u0002",
    "\u0002\u00b15\u0003\u0002\u0002\u0002\u00b2\u00b3\t\u0017\u0002\u0002",
    "\u00b37\u0003\u0002\u0002\u0002\u00b4\u00b5\t\u0018\u0002\u0002\u00b5",
    "9\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u012e\u0002\u0002\u00b7",
    ";\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0003\u0002\u0002\u00b9",
    "\u00ba\t\u0019\u0002\u0002\u00ba\u00bd\u0007\u0182\u0002\u0002\u00bb",
    "\u00bc\u0007\u0004\u0002\u0002\u00bc\u00be\u0005\n\u0006\u0002\u00bd",
    "\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u0005\u0002\u0002\u00c0",
    "=\u0003\u0002\u0002\u0002\u00c1\u00c2\t\u001a\u0002\u0002\u00c2?\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\t\u001b\u0002\u0002\u00c4A\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\t\u001c\u0002\u0002\u00c6C\u0003\u0002\u0002",
    "\u0002\u00c7\u00c8\t\u001d\u0002\u0002\u00c8E\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\t\u001e\u0002\u0002\u00caG\u0003\u0002\u0002\u0002\u00cb",
    "\u00d7\u0007\u0166\u0002\u0002\u00cc\u00d7\u0007\u0167\u0002\u0002\u00cd",
    "\u00d7\u0007\u0168\u0002\u0002\u00ce\u00d7\u0007\u0169\u0002\u0002\u00cf",
    "\u00d7\u0007\u016a\u0002\u0002\u00d0\u00d7\u0007\u016b\u0002\u0002\u00d1",
    "\u00d7\u0005J&\u0002\u00d2\u00d7\u0005L\'\u0002\u00d3\u00d7\u0007\u016c",
    "\u0002\u0002\u00d4\u00d7\u0007\u0184\u0002\u0002\u00d5\u00d7\u0007\u016d",
    "\u0002\u0002\u00d6\u00cb\u0003\u0002\u0002\u0002\u00d6\u00cc\u0003\u0002",
    "\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003\u0002",
    "\u0002\u0002\u00d6\u00cf\u0003\u0002\u0002\u0002\u00d6\u00d0\u0003\u0002",
    "\u0002\u0002\u00d6\u00d1\u0003\u0002\u0002\u0002\u00d6\u00d2\u0003\u0002",
    "\u0002\u0002\u00d6\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002",
    "\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d7I\u0003\u0002",
    "\u0002\u0002\u00d8\u00dc\u0007\u016e\u0002\u0002\u00d9\u00db\u0005\u0004",
    "\u0003\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002",
    "\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007\u016f\u0002\u0002\u00e0K\u0003\u0002",
    "\u0002\u0002\u00e1\u00e5\u0007\u0170\u0002\u0002\u00e2\u00e4\u0005\u0004",
    "\u0003\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002",
    "\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002",
    "\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0007\u016f\u0002\u0002\u00e9M\u0003\u0002",
    "\u0002\u0002\u00ea\u00eb\t\u001f\u0002\u0002\u00ebO\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\t \u0002\u0002\u00edQ\u0003\u0002\u0002\u0002\nU",
    "dq\u008a\u00bd\u00d6\u00dc\u00e5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "'bool'", "'boolean'", "'meter'", 
                     "'meters'", "'m'", "'centimeter'", "'centimeters'", 
                     "'cm'", "'kilometer'", "'kilometers'", "'km'", "'millimeter'", 
                     "'millimeters'", "'mile'", "'miles'", "'decimile'", 
                     "'decimiles'", "'nautical mile'", "'nautical miles'", 
                     "'nmile'", "'nmiles'", "'decinmile'", "'decinmiles'", 
                     "'foot'", "'feet'", "'ft'", "'inch'", "'inches'", "'in'", 
                     "'yard'", "'yards'", "'square inch'", "'square inches'", 
                     "'sq in'", "'in2'", "'square feet'", "'square foot'", 
                     "'sq ft'", "'ft2'", "'square yard'", "'square yards'", 
                     "'sq yd'", "'yd2'", "'square meter'", "'square meters'", 
                     "'sq m'", "'m2'", "'square centimeter'", "'square centimeters'", 
                     "'sq cm'", "'cm2'", "'square kilometer'", "'square kilometers'", 
                     "'sq km'", "'km2'", "'square millimeter'", "'square millimeters'", 
                     "'sq mm'", "'mm2'", "'square mile'", "'square miles'", 
                     "'cubic inch'", "'cubic inches'", "'cu in'", "'in3'", 
                     "'cubic foot'", "'cubic feet'", "'cu ft'", "'ft3'", 
                     "'cubic yard'", "'cubic yards'", "'cu yd'", "'yd3'", 
                     "'cubic mile'", "'cubic miles'", "'cubic millimeter'", 
                     "'cubic millimeters'", "'cu mm'", "'mm3'", "'cubic centimeter'", 
                     "'cubic centimeters'", "'cu cm'", "'cm3'", "'meter cubed'", 
                     "'meters cubed'", "'cubic meter'", "'cubic meters'", 
                     "'cu m'", "'m3'", "'cubic kilometer'", "'cubic kilometers'", 
                     "'cu km'", "'km3'", "'liter'", "'liters'", "'gallon'", 
                     "'gallons'", "'quart'", "'quarts'", "'meter cubed per second'", 
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
                     "'per radian'", "'per degree'", "'string'", "'>'", 
                     "'&gt;'", "'+'", "'-'", "'/'", "'*'", "'%'", "'++'", 
                     "'--'", "'/-/'", "'neg'", "'=='", "'!='", "'<'", "'>='", 
                     "'<='", "'?'", "'&'", "'|'", "'^'", "'~'", "'>>'", 
                     "'<<'", "'!'", "'NOT'", "'&&'", "'AND'", "'||'", "'OR'", 
                     "'abs'", "'int'", "'flr'", "'rng'", "'cos'", "'lg'", 
                     "'min'", "'sin'", "'acos'", "'ctg'", "'ln'", "'sqr'", 
                     "'asin'", "'eps'", "'log'", "'pi'", "'sqrt'", "'atg2'", 
                     "'exp'", "'max'", "'pow'", "'tg'", "'atg'", "'div'", 
                     "'ceil'", "'near'", "'dnor'", "'d360'", "'rdeg'", "'rddg'", 
                     "'dgrd'", "'rnor'", "'quit'", "'case'", "'if{'", "'}'", 
                     "'els{'", "'lc'", "'uc'", "'cap'", "'chr'", "'ord'", 
                     "'scat'", "'schr'", "'scmp'", "'scmi'", "'sstr'", "'ssub'", 
                     "'symb'", "'b'", "'c'", "'d'", "'p'", "'r'" ];

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
                      null, null, null, null, null, null, "ID", "LABEL", 
                      "GOTO", "STORE", "LOAD", "STORE_POP", "NUMBER", "STRING", 
                      "WS" ];

var ruleNames =  [ "rpn", "token", "literal", "variableAccess", "type", 
                   "booleanType", "numberType", "distanceType", "areaType", 
                   "volumeType", "volumeRateType", "temperatureType", "angleType", 
                   "globalPositionType", "angularVelocityType", "speedType", 
                   "accelerationType", "timeType", "powerType", "weightType", 
                   "weightRateType", "electricalCurrentType", "electricalPotentialType", 
                   "frequencyType", "densityType", "pressureType", "torqueType", 
                   "miscellaneousType", "stringType", "assignment", "commonOperator", 
                   "comparisonOperator", "bitwiseOperator", "logicalOperator", 
                   "numericalOperator", "specialOperators", "ifStatement", 
                   "elseStatement", "stringOperator", "stackOperator" ];

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
rpnParser.ID = 384;
rpnParser.LABEL = 385;
rpnParser.GOTO = 386;
rpnParser.STORE = 387;
rpnParser.LOAD = 388;
rpnParser.STORE_POP = 389;
rpnParser.NUMBER = 390;
rpnParser.STRING = 391;
rpnParser.WS = 392;

rpnParser.RULE_rpn = 0;
rpnParser.RULE_token = 1;
rpnParser.RULE_literal = 2;
rpnParser.RULE_variableAccess = 3;
rpnParser.RULE_type = 4;
rpnParser.RULE_booleanType = 5;
rpnParser.RULE_numberType = 6;
rpnParser.RULE_distanceType = 7;
rpnParser.RULE_areaType = 8;
rpnParser.RULE_volumeType = 9;
rpnParser.RULE_volumeRateType = 10;
rpnParser.RULE_temperatureType = 11;
rpnParser.RULE_angleType = 12;
rpnParser.RULE_globalPositionType = 13;
rpnParser.RULE_angularVelocityType = 14;
rpnParser.RULE_speedType = 15;
rpnParser.RULE_accelerationType = 16;
rpnParser.RULE_timeType = 17;
rpnParser.RULE_powerType = 18;
rpnParser.RULE_weightType = 19;
rpnParser.RULE_weightRateType = 20;
rpnParser.RULE_electricalCurrentType = 21;
rpnParser.RULE_electricalPotentialType = 22;
rpnParser.RULE_frequencyType = 23;
rpnParser.RULE_densityType = 24;
rpnParser.RULE_pressureType = 25;
rpnParser.RULE_torqueType = 26;
rpnParser.RULE_miscellaneousType = 27;
rpnParser.RULE_stringType = 28;
rpnParser.RULE_assignment = 29;
rpnParser.RULE_commonOperator = 30;
rpnParser.RULE_comparisonOperator = 31;
rpnParser.RULE_bitwiseOperator = 32;
rpnParser.RULE_logicalOperator = 33;
rpnParser.RULE_numericalOperator = 34;
rpnParser.RULE_specialOperators = 35;
rpnParser.RULE_ifStatement = 36;
rpnParser.RULE_elseStatement = 37;
rpnParser.RULE_stringOperator = 38;
rpnParser.RULE_stackOperator = 39;


function RpnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_rpn;
    return this;
}

RpnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RpnContext.prototype.constructor = RpnContext;

RpnContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

RpnContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterRpn(this);
	}
};

RpnContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitRpn(this);
	}
};




rpnParser.RpnContext = RpnContext;

rpnParser.prototype.rpn = function() {

    var localctx = new RpnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rpnParser.RULE_rpn);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0 || ((((_la - 301)) & ~0x1f) == 0 && ((1 << (_la - 301)) & ((1 << (rpnParser.T__300 - 301)) | (1 << (rpnParser.T__302 - 301)) | (1 << (rpnParser.T__303 - 301)) | (1 << (rpnParser.T__304 - 301)) | (1 << (rpnParser.T__305 - 301)) | (1 << (rpnParser.T__306 - 301)) | (1 << (rpnParser.T__307 - 301)) | (1 << (rpnParser.T__308 - 301)) | (1 << (rpnParser.T__309 - 301)) | (1 << (rpnParser.T__310 - 301)) | (1 << (rpnParser.T__311 - 301)) | (1 << (rpnParser.T__312 - 301)) | (1 << (rpnParser.T__313 - 301)) | (1 << (rpnParser.T__314 - 301)) | (1 << (rpnParser.T__315 - 301)) | (1 << (rpnParser.T__316 - 301)) | (1 << (rpnParser.T__317 - 301)) | (1 << (rpnParser.T__318 - 301)) | (1 << (rpnParser.T__319 - 301)) | (1 << (rpnParser.T__320 - 301)) | (1 << (rpnParser.T__321 - 301)) | (1 << (rpnParser.T__322 - 301)) | (1 << (rpnParser.T__323 - 301)) | (1 << (rpnParser.T__324 - 301)) | (1 << (rpnParser.T__325 - 301)) | (1 << (rpnParser.T__326 - 301)) | (1 << (rpnParser.T__327 - 301)) | (1 << (rpnParser.T__328 - 301)) | (1 << (rpnParser.T__329 - 301)) | (1 << (rpnParser.T__330 - 301)) | (1 << (rpnParser.T__331 - 301)))) !== 0) || ((((_la - 333)) & ~0x1f) == 0 && ((1 << (_la - 333)) & ((1 << (rpnParser.T__332 - 333)) | (1 << (rpnParser.T__333 - 333)) | (1 << (rpnParser.T__334 - 333)) | (1 << (rpnParser.T__335 - 333)) | (1 << (rpnParser.T__336 - 333)) | (1 << (rpnParser.T__337 - 333)) | (1 << (rpnParser.T__338 - 333)) | (1 << (rpnParser.T__339 - 333)) | (1 << (rpnParser.T__340 - 333)) | (1 << (rpnParser.T__341 - 333)) | (1 << (rpnParser.T__342 - 333)) | (1 << (rpnParser.T__343 - 333)) | (1 << (rpnParser.T__344 - 333)) | (1 << (rpnParser.T__345 - 333)) | (1 << (rpnParser.T__346 - 333)) | (1 << (rpnParser.T__347 - 333)) | (1 << (rpnParser.T__348 - 333)) | (1 << (rpnParser.T__349 - 333)) | (1 << (rpnParser.T__350 - 333)) | (1 << (rpnParser.T__351 - 333)) | (1 << (rpnParser.T__352 - 333)) | (1 << (rpnParser.T__353 - 333)) | (1 << (rpnParser.T__354 - 333)) | (1 << (rpnParser.T__355 - 333)) | (1 << (rpnParser.T__356 - 333)) | (1 << (rpnParser.T__357 - 333)) | (1 << (rpnParser.T__358 - 333)) | (1 << (rpnParser.T__359 - 333)) | (1 << (rpnParser.T__360 - 333)) | (1 << (rpnParser.T__361 - 333)) | (1 << (rpnParser.T__362 - 333)) | (1 << (rpnParser.T__363 - 333)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (rpnParser.T__365 - 366)) | (1 << (rpnParser.T__366 - 366)) | (1 << (rpnParser.T__367 - 366)) | (1 << (rpnParser.T__368 - 366)) | (1 << (rpnParser.T__369 - 366)) | (1 << (rpnParser.T__370 - 366)) | (1 << (rpnParser.T__371 - 366)) | (1 << (rpnParser.T__372 - 366)) | (1 << (rpnParser.T__373 - 366)) | (1 << (rpnParser.T__374 - 366)) | (1 << (rpnParser.T__375 - 366)) | (1 << (rpnParser.T__376 - 366)) | (1 << (rpnParser.T__377 - 366)) | (1 << (rpnParser.T__378 - 366)) | (1 << (rpnParser.T__379 - 366)) | (1 << (rpnParser.T__380 - 366)) | (1 << (rpnParser.T__381 - 366)) | (1 << (rpnParser.T__382 - 366)) | (1 << (rpnParser.LABEL - 366)) | (1 << (rpnParser.GOTO - 366)) | (1 << (rpnParser.STORE - 366)) | (1 << (rpnParser.LOAD - 366)) | (1 << (rpnParser.STORE_POP - 366)) | (1 << (rpnParser.NUMBER - 366)) | (1 << (rpnParser.STRING - 366)))) !== 0)) {
            this.state = 80;
            this.token();
            this.state = 85;
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


function TokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_token;
    return this;
}

TokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenContext.prototype.constructor = TokenContext;

TokenContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

TokenContext.prototype.LABEL = function() {
    return this.getToken(rpnParser.LABEL, 0);
};

TokenContext.prototype.variableAccess = function() {
    return this.getTypedRuleContext(VariableAccessContext,0);
};

TokenContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

TokenContext.prototype.commonOperator = function() {
    return this.getTypedRuleContext(CommonOperatorContext,0);
};

TokenContext.prototype.comparisonOperator = function() {
    return this.getTypedRuleContext(ComparisonOperatorContext,0);
};

TokenContext.prototype.bitwiseOperator = function() {
    return this.getTypedRuleContext(BitwiseOperatorContext,0);
};

TokenContext.prototype.logicalOperator = function() {
    return this.getTypedRuleContext(LogicalOperatorContext,0);
};

TokenContext.prototype.numericalOperator = function() {
    return this.getTypedRuleContext(NumericalOperatorContext,0);
};

TokenContext.prototype.specialOperators = function() {
    return this.getTypedRuleContext(SpecialOperatorsContext,0);
};

TokenContext.prototype.stringOperator = function() {
    return this.getTypedRuleContext(StringOperatorContext,0);
};

TokenContext.prototype.stackOperator = function() {
    return this.getTypedRuleContext(StackOperatorContext,0);
};

TokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterToken(this);
	}
};

TokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitToken(this);
	}
};




rpnParser.TokenContext = TokenContext;

rpnParser.prototype.token = function() {

    var localctx = new TokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rpnParser.RULE_token);
    try {
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.match(rpnParser.LABEL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
            this.variableAccess();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 89;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 90;
            this.commonOperator();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 91;
            this.comparisonOperator();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 92;
            this.bitwiseOperator();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 93;
            this.logicalOperator();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 94;
            this.numericalOperator();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 95;
            this.specialOperators();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 96;
            this.stringOperator();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 97;
            this.stackOperator();
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


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NUMBER = function() {
    return this.getToken(rpnParser.NUMBER, 0);
};

LiteralContext.prototype.STRING = function() {
    return this.getToken(rpnParser.STRING, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitLiteral(this);
	}
};




rpnParser.LiteralContext = LiteralContext;

rpnParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rpnParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.NUMBER || _la===rpnParser.STRING)) {
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

VariableAccessContext.prototype.ID = function() {
    return this.getToken(rpnParser.ID, 0);
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




rpnParser.VariableAccessContext = VariableAccessContext;

rpnParser.prototype.variableAccess = function() {

    var localctx = new VariableAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, rpnParser.RULE_variableAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(rpnParser.T__0);
        this.state = 103;
        this.match(rpnParser.ID);
        this.state = 104;
        this.match(rpnParser.T__1);
        this.state = 105;
        this.type();
        this.state = 106;
        this.match(rpnParser.T__2);
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




rpnParser.TypeContext = TypeContext;

rpnParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rpnParser.RULE_type);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rpnParser.T__3:
        case rpnParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.booleanType();
            break;
        case rpnParser.T__5:
        case rpnParser.T__6:
        case rpnParser.T__7:
        case rpnParser.T__8:
        case rpnParser.T__9:
        case rpnParser.T__10:
        case rpnParser.T__11:
        case rpnParser.T__12:
        case rpnParser.T__13:
        case rpnParser.T__14:
        case rpnParser.T__15:
        case rpnParser.T__16:
        case rpnParser.T__17:
        case rpnParser.T__18:
        case rpnParser.T__19:
        case rpnParser.T__20:
        case rpnParser.T__21:
        case rpnParser.T__22:
        case rpnParser.T__23:
        case rpnParser.T__24:
        case rpnParser.T__25:
        case rpnParser.T__26:
        case rpnParser.T__27:
        case rpnParser.T__28:
        case rpnParser.T__29:
        case rpnParser.T__30:
        case rpnParser.T__31:
        case rpnParser.T__32:
        case rpnParser.T__33:
        case rpnParser.T__34:
        case rpnParser.T__35:
        case rpnParser.T__36:
        case rpnParser.T__37:
        case rpnParser.T__38:
        case rpnParser.T__39:
        case rpnParser.T__40:
        case rpnParser.T__41:
        case rpnParser.T__42:
        case rpnParser.T__43:
        case rpnParser.T__44:
        case rpnParser.T__45:
        case rpnParser.T__46:
        case rpnParser.T__47:
        case rpnParser.T__48:
        case rpnParser.T__49:
        case rpnParser.T__50:
        case rpnParser.T__51:
        case rpnParser.T__52:
        case rpnParser.T__53:
        case rpnParser.T__54:
        case rpnParser.T__55:
        case rpnParser.T__56:
        case rpnParser.T__57:
        case rpnParser.T__58:
        case rpnParser.T__59:
        case rpnParser.T__60:
        case rpnParser.T__61:
        case rpnParser.T__62:
        case rpnParser.T__63:
        case rpnParser.T__64:
        case rpnParser.T__65:
        case rpnParser.T__66:
        case rpnParser.T__67:
        case rpnParser.T__68:
        case rpnParser.T__69:
        case rpnParser.T__70:
        case rpnParser.T__71:
        case rpnParser.T__72:
        case rpnParser.T__73:
        case rpnParser.T__74:
        case rpnParser.T__75:
        case rpnParser.T__76:
        case rpnParser.T__77:
        case rpnParser.T__78:
        case rpnParser.T__79:
        case rpnParser.T__80:
        case rpnParser.T__81:
        case rpnParser.T__82:
        case rpnParser.T__83:
        case rpnParser.T__84:
        case rpnParser.T__85:
        case rpnParser.T__86:
        case rpnParser.T__87:
        case rpnParser.T__88:
        case rpnParser.T__89:
        case rpnParser.T__90:
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
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.numberType();
            break;
        case rpnParser.T__299:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
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




rpnParser.BooleanTypeContext = BooleanTypeContext;

rpnParser.prototype.booleanType = function() {

    var localctx = new BooleanTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, rpnParser.RULE_booleanType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__3 || _la===rpnParser.T__4)) {
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




rpnParser.NumberTypeContext = NumberTypeContext;

rpnParser.prototype.numberType = function() {

    var localctx = new NumberTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rpnParser.RULE_numberType);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 115;
            this.distanceType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            this.areaType();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.volumeType();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 118;
            this.volumeRateType();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 119;
            this.temperatureType();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 120;
            this.angleType();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 121;
            this.globalPositionType();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 122;
            this.angularVelocityType();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 123;
            this.speedType();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 124;
            this.accelerationType();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 125;
            this.timeType();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 126;
            this.powerType();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 127;
            this.weightType();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 128;
            this.weightRateType();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 129;
            this.electricalCurrentType();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 130;
            this.electricalPotentialType();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 131;
            this.frequencyType();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 132;
            this.densityType();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 133;
            this.pressureType();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 134;
            this.torqueType();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 135;
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




rpnParser.DistanceTypeContext = DistanceTypeContext;

rpnParser.prototype.distanceType = function() {

    var localctx = new DistanceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, rpnParser.RULE_distanceType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        _la = this._input.LA(1);
        if(!(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (rpnParser.T__5 - 6)) | (1 << (rpnParser.T__6 - 6)) | (1 << (rpnParser.T__7 - 6)) | (1 << (rpnParser.T__8 - 6)) | (1 << (rpnParser.T__9 - 6)) | (1 << (rpnParser.T__10 - 6)) | (1 << (rpnParser.T__11 - 6)) | (1 << (rpnParser.T__12 - 6)) | (1 << (rpnParser.T__13 - 6)) | (1 << (rpnParser.T__14 - 6)) | (1 << (rpnParser.T__15 - 6)) | (1 << (rpnParser.T__16 - 6)) | (1 << (rpnParser.T__17 - 6)) | (1 << (rpnParser.T__18 - 6)) | (1 << (rpnParser.T__19 - 6)) | (1 << (rpnParser.T__20 - 6)) | (1 << (rpnParser.T__21 - 6)) | (1 << (rpnParser.T__22 - 6)) | (1 << (rpnParser.T__23 - 6)) | (1 << (rpnParser.T__24 - 6)) | (1 << (rpnParser.T__25 - 6)) | (1 << (rpnParser.T__26 - 6)) | (1 << (rpnParser.T__27 - 6)) | (1 << (rpnParser.T__28 - 6)) | (1 << (rpnParser.T__29 - 6)) | (1 << (rpnParser.T__30 - 6)) | (1 << (rpnParser.T__31 - 6)) | (1 << (rpnParser.T__32 - 6)) | (1 << (rpnParser.T__33 - 6)))) !== 0))) {
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




rpnParser.AreaTypeContext = AreaTypeContext;

rpnParser.prototype.areaType = function() {

    var localctx = new AreaTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rpnParser.RULE_areaType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        _la = this._input.LA(1);
        if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (rpnParser.T__34 - 35)) | (1 << (rpnParser.T__35 - 35)) | (1 << (rpnParser.T__36 - 35)) | (1 << (rpnParser.T__37 - 35)) | (1 << (rpnParser.T__38 - 35)) | (1 << (rpnParser.T__39 - 35)) | (1 << (rpnParser.T__40 - 35)) | (1 << (rpnParser.T__41 - 35)) | (1 << (rpnParser.T__42 - 35)) | (1 << (rpnParser.T__43 - 35)) | (1 << (rpnParser.T__44 - 35)) | (1 << (rpnParser.T__45 - 35)) | (1 << (rpnParser.T__46 - 35)) | (1 << (rpnParser.T__47 - 35)) | (1 << (rpnParser.T__48 - 35)) | (1 << (rpnParser.T__49 - 35)) | (1 << (rpnParser.T__50 - 35)) | (1 << (rpnParser.T__51 - 35)) | (1 << (rpnParser.T__52 - 35)) | (1 << (rpnParser.T__53 - 35)) | (1 << (rpnParser.T__54 - 35)) | (1 << (rpnParser.T__55 - 35)) | (1 << (rpnParser.T__56 - 35)) | (1 << (rpnParser.T__57 - 35)) | (1 << (rpnParser.T__58 - 35)) | (1 << (rpnParser.T__59 - 35)) | (1 << (rpnParser.T__60 - 35)) | (1 << (rpnParser.T__61 - 35)) | (1 << (rpnParser.T__62 - 35)) | (1 << (rpnParser.T__63 - 35)))) !== 0))) {
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




rpnParser.VolumeTypeContext = VolumeTypeContext;

rpnParser.prototype.volumeType = function() {

    var localctx = new VolumeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, rpnParser.RULE_volumeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        _la = this._input.LA(1);
        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (rpnParser.T__64 - 65)) | (1 << (rpnParser.T__65 - 65)) | (1 << (rpnParser.T__66 - 65)) | (1 << (rpnParser.T__67 - 65)) | (1 << (rpnParser.T__68 - 65)) | (1 << (rpnParser.T__69 - 65)) | (1 << (rpnParser.T__70 - 65)) | (1 << (rpnParser.T__71 - 65)) | (1 << (rpnParser.T__72 - 65)) | (1 << (rpnParser.T__73 - 65)) | (1 << (rpnParser.T__74 - 65)) | (1 << (rpnParser.T__75 - 65)) | (1 << (rpnParser.T__76 - 65)) | (1 << (rpnParser.T__77 - 65)) | (1 << (rpnParser.T__78 - 65)) | (1 << (rpnParser.T__79 - 65)) | (1 << (rpnParser.T__80 - 65)) | (1 << (rpnParser.T__81 - 65)) | (1 << (rpnParser.T__82 - 65)) | (1 << (rpnParser.T__83 - 65)) | (1 << (rpnParser.T__84 - 65)) | (1 << (rpnParser.T__85 - 65)) | (1 << (rpnParser.T__86 - 65)) | (1 << (rpnParser.T__87 - 65)) | (1 << (rpnParser.T__88 - 65)) | (1 << (rpnParser.T__89 - 65)) | (1 << (rpnParser.T__90 - 65)) | (1 << (rpnParser.T__91 - 65)) | (1 << (rpnParser.T__92 - 65)) | (1 << (rpnParser.T__93 - 65)) | (1 << (rpnParser.T__94 - 65)) | (1 << (rpnParser.T__95 - 65)))) !== 0) || ((((_la - 97)) & ~0x1f) == 0 && ((1 << (_la - 97)) & ((1 << (rpnParser.T__96 - 97)) | (1 << (rpnParser.T__97 - 97)) | (1 << (rpnParser.T__98 - 97)) | (1 << (rpnParser.T__99 - 97)) | (1 << (rpnParser.T__100 - 97)) | (1 << (rpnParser.T__101 - 97)))) !== 0))) {
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




rpnParser.VolumeRateTypeContext = VolumeRateTypeContext;

rpnParser.prototype.volumeRateType = function() {

    var localctx = new VolumeRateTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, rpnParser.RULE_volumeRateType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        _la = this._input.LA(1);
        if(!(((((_la - 103)) & ~0x1f) == 0 && ((1 << (_la - 103)) & ((1 << (rpnParser.T__102 - 103)) | (1 << (rpnParser.T__103 - 103)) | (1 << (rpnParser.T__104 - 103)) | (1 << (rpnParser.T__105 - 103)) | (1 << (rpnParser.T__106 - 103)) | (1 << (rpnParser.T__107 - 103)) | (1 << (rpnParser.T__108 - 103)))) !== 0))) {
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




rpnParser.TemperatureTypeContext = TemperatureTypeContext;

rpnParser.prototype.temperatureType = function() {

    var localctx = new TemperatureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, rpnParser.RULE_temperatureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        _la = this._input.LA(1);
        if(!(((((_la - 110)) & ~0x1f) == 0 && ((1 << (_la - 110)) & ((1 << (rpnParser.T__109 - 110)) | (1 << (rpnParser.T__110 - 110)) | (1 << (rpnParser.T__111 - 110)) | (1 << (rpnParser.T__112 - 110)) | (1 << (rpnParser.T__113 - 110)))) !== 0))) {
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




rpnParser.AngleTypeContext = AngleTypeContext;

rpnParser.prototype.angleType = function() {

    var localctx = new AngleTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, rpnParser.RULE_angleType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        _la = this._input.LA(1);
        if(!(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (rpnParser.T__114 - 115)) | (1 << (rpnParser.T__115 - 115)) | (1 << (rpnParser.T__116 - 115)) | (1 << (rpnParser.T__117 - 115)) | (1 << (rpnParser.T__118 - 115)) | (1 << (rpnParser.T__119 - 115)) | (1 << (rpnParser.T__120 - 115)) | (1 << (rpnParser.T__121 - 115)))) !== 0))) {
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




rpnParser.GlobalPositionTypeContext = GlobalPositionTypeContext;

rpnParser.prototype.globalPositionType = function() {

    var localctx = new GlobalPositionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, rpnParser.RULE_globalPositionType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(!(((((_la - 123)) & ~0x1f) == 0 && ((1 << (_la - 123)) & ((1 << (rpnParser.T__122 - 123)) | (1 << (rpnParser.T__123 - 123)) | (1 << (rpnParser.T__124 - 123)) | (1 << (rpnParser.T__125 - 123)) | (1 << (rpnParser.T__126 - 123)) | (1 << (rpnParser.T__127 - 123)))) !== 0))) {
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




rpnParser.AngularVelocityTypeContext = AngularVelocityTypeContext;

rpnParser.prototype.angularVelocityType = function() {

    var localctx = new AngularVelocityTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, rpnParser.RULE_angularVelocityType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        _la = this._input.LA(1);
        if(!(((((_la - 129)) & ~0x1f) == 0 && ((1 << (_la - 129)) & ((1 << (rpnParser.T__128 - 129)) | (1 << (rpnParser.T__129 - 129)) | (1 << (rpnParser.T__130 - 129)) | (1 << (rpnParser.T__131 - 129)) | (1 << (rpnParser.T__132 - 129)) | (1 << (rpnParser.T__133 - 129)) | (1 << (rpnParser.T__134 - 129)) | (1 << (rpnParser.T__135 - 129)) | (1 << (rpnParser.T__136 - 129)) | (1 << (rpnParser.T__137 - 129)) | (1 << (rpnParser.T__138 - 129)) | (1 << (rpnParser.T__139 - 129)))) !== 0))) {
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




rpnParser.SpeedTypeContext = SpeedTypeContext;

rpnParser.prototype.speedType = function() {

    var localctx = new SpeedTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, rpnParser.RULE_speedType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        _la = this._input.LA(1);
        if(!(((((_la - 141)) & ~0x1f) == 0 && ((1 << (_la - 141)) & ((1 << (rpnParser.T__140 - 141)) | (1 << (rpnParser.T__141 - 141)) | (1 << (rpnParser.T__142 - 141)) | (1 << (rpnParser.T__143 - 141)) | (1 << (rpnParser.T__144 - 141)) | (1 << (rpnParser.T__145 - 141)) | (1 << (rpnParser.T__146 - 141)) | (1 << (rpnParser.T__147 - 141)) | (1 << (rpnParser.T__148 - 141)) | (1 << (rpnParser.T__149 - 141)) | (1 << (rpnParser.T__150 - 141)) | (1 << (rpnParser.T__151 - 141)) | (1 << (rpnParser.T__152 - 141)) | (1 << (rpnParser.T__153 - 141)) | (1 << (rpnParser.T__154 - 141)) | (1 << (rpnParser.T__155 - 141)) | (1 << (rpnParser.T__156 - 141)) | (1 << (rpnParser.T__157 - 141)) | (1 << (rpnParser.T__158 - 141)))) !== 0))) {
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




rpnParser.AccelerationTypeContext = AccelerationTypeContext;

rpnParser.prototype.accelerationType = function() {

    var localctx = new AccelerationTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, rpnParser.RULE_accelerationType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        _la = this._input.LA(1);
        if(!(((((_la - 160)) & ~0x1f) == 0 && ((1 << (_la - 160)) & ((1 << (rpnParser.T__159 - 160)) | (1 << (rpnParser.T__160 - 160)) | (1 << (rpnParser.T__161 - 160)) | (1 << (rpnParser.T__162 - 160)) | (1 << (rpnParser.T__163 - 160)) | (1 << (rpnParser.T__164 - 160)))) !== 0))) {
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




rpnParser.TimeTypeContext = TimeTypeContext;

rpnParser.prototype.timeType = function() {

    var localctx = new TimeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, rpnParser.RULE_timeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        _la = this._input.LA(1);
        if(!(((((_la - 166)) & ~0x1f) == 0 && ((1 << (_la - 166)) & ((1 << (rpnParser.T__165 - 166)) | (1 << (rpnParser.T__166 - 166)) | (1 << (rpnParser.T__167 - 166)) | (1 << (rpnParser.T__168 - 166)) | (1 << (rpnParser.T__169 - 166)) | (1 << (rpnParser.T__170 - 166)) | (1 << (rpnParser.T__171 - 166)) | (1 << (rpnParser.T__172 - 166)) | (1 << (rpnParser.T__173 - 166)) | (1 << (rpnParser.T__174 - 166)) | (1 << (rpnParser.T__175 - 166)) | (1 << (rpnParser.T__176 - 166)))) !== 0))) {
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




rpnParser.PowerTypeContext = PowerTypeContext;

rpnParser.prototype.powerType = function() {

    var localctx = new PowerTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, rpnParser.RULE_powerType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        _la = this._input.LA(1);
        if(!(((((_la - 178)) & ~0x1f) == 0 && ((1 << (_la - 178)) & ((1 << (rpnParser.T__177 - 178)) | (1 << (rpnParser.T__178 - 178)) | (1 << (rpnParser.T__179 - 178)))) !== 0))) {
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




rpnParser.WeightTypeContext = WeightTypeContext;

rpnParser.prototype.weightType = function() {

    var localctx = new WeightTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, rpnParser.RULE_weightType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        _la = this._input.LA(1);
        if(!(((((_la - 181)) & ~0x1f) == 0 && ((1 << (_la - 181)) & ((1 << (rpnParser.T__180 - 181)) | (1 << (rpnParser.T__181 - 181)) | (1 << (rpnParser.T__182 - 181)) | (1 << (rpnParser.T__183 - 181)) | (1 << (rpnParser.T__184 - 181)) | (1 << (rpnParser.T__185 - 181)) | (1 << (rpnParser.T__186 - 181)) | (1 << (rpnParser.T__187 - 181)) | (1 << (rpnParser.T__188 - 181)) | (1 << (rpnParser.T__189 - 181)))) !== 0))) {
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




rpnParser.WeightRateTypeContext = WeightRateTypeContext;

rpnParser.prototype.weightRateType = function() {

    var localctx = new WeightRateTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, rpnParser.RULE_weightRateType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        _la = this._input.LA(1);
        if(!(((((_la - 191)) & ~0x1f) == 0 && ((1 << (_la - 191)) & ((1 << (rpnParser.T__190 - 191)) | (1 << (rpnParser.T__191 - 191)) | (1 << (rpnParser.T__192 - 191)) | (1 << (rpnParser.T__193 - 191)))) !== 0))) {
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




rpnParser.ElectricalCurrentTypeContext = ElectricalCurrentTypeContext;

rpnParser.prototype.electricalCurrentType = function() {

    var localctx = new ElectricalCurrentTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, rpnParser.RULE_electricalCurrentType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        _la = this._input.LA(1);
        if(!(((((_la - 195)) & ~0x1f) == 0 && ((1 << (_la - 195)) & ((1 << (rpnParser.T__194 - 195)) | (1 << (rpnParser.T__195 - 195)) | (1 << (rpnParser.T__196 - 195)) | (1 << (rpnParser.T__197 - 195)))) !== 0))) {
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




rpnParser.ElectricalPotentialTypeContext = ElectricalPotentialTypeContext;

rpnParser.prototype.electricalPotentialType = function() {

    var localctx = new ElectricalPotentialTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, rpnParser.RULE_electricalPotentialType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__198 || _la===rpnParser.T__199)) {
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




rpnParser.FrequencyTypeContext = FrequencyTypeContext;

rpnParser.prototype.frequencyType = function() {

    var localctx = new FrequencyTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, rpnParser.RULE_frequencyType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        _la = this._input.LA(1);
        if(!(((((_la - 201)) & ~0x1f) == 0 && ((1 << (_la - 201)) & ((1 << (rpnParser.T__200 - 201)) | (1 << (rpnParser.T__201 - 201)) | (1 << (rpnParser.T__202 - 201)) | (1 << (rpnParser.T__203 - 201)) | (1 << (rpnParser.T__204 - 201)) | (1 << (rpnParser.T__205 - 201)) | (1 << (rpnParser.T__206 - 201)) | (1 << (rpnParser.T__207 - 201)) | (1 << (rpnParser.T__208 - 201)))) !== 0))) {
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




rpnParser.DensityTypeContext = DensityTypeContext;

rpnParser.prototype.densityType = function() {

    var localctx = new DensityTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, rpnParser.RULE_densityType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        _la = this._input.LA(1);
        if(!(((((_la - 210)) & ~0x1f) == 0 && ((1 << (_la - 210)) & ((1 << (rpnParser.T__209 - 210)) | (1 << (rpnParser.T__210 - 210)) | (1 << (rpnParser.T__211 - 210)) | (1 << (rpnParser.T__212 - 210)) | (1 << (rpnParser.T__213 - 210)) | (1 << (rpnParser.T__214 - 210)) | (1 << (rpnParser.T__215 - 210)) | (1 << (rpnParser.T__216 - 210)) | (1 << (rpnParser.T__217 - 210)) | (1 << (rpnParser.T__218 - 210)))) !== 0))) {
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




rpnParser.PressureTypeContext = PressureTypeContext;

rpnParser.prototype.pressureType = function() {

    var localctx = new PressureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, rpnParser.RULE_pressureType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        _la = this._input.LA(1);
        if(!(((((_la - 220)) & ~0x1f) == 0 && ((1 << (_la - 220)) & ((1 << (rpnParser.T__219 - 220)) | (1 << (rpnParser.T__220 - 220)) | (1 << (rpnParser.T__221 - 220)) | (1 << (rpnParser.T__222 - 220)) | (1 << (rpnParser.T__223 - 220)) | (1 << (rpnParser.T__224 - 220)) | (1 << (rpnParser.T__225 - 220)) | (1 << (rpnParser.T__226 - 220)) | (1 << (rpnParser.T__227 - 220)) | (1 << (rpnParser.T__228 - 220)) | (1 << (rpnParser.T__229 - 220)) | (1 << (rpnParser.T__230 - 220)) | (1 << (rpnParser.T__231 - 220)) | (1 << (rpnParser.T__232 - 220)) | (1 << (rpnParser.T__233 - 220)) | (1 << (rpnParser.T__234 - 220)) | (1 << (rpnParser.T__235 - 220)) | (1 << (rpnParser.T__236 - 220)) | (1 << (rpnParser.T__237 - 220)) | (1 << (rpnParser.T__238 - 220)) | (1 << (rpnParser.T__239 - 220)) | (1 << (rpnParser.T__240 - 220)) | (1 << (rpnParser.T__241 - 220)) | (1 << (rpnParser.T__242 - 220)) | (1 << (rpnParser.T__243 - 220)) | (1 << (rpnParser.T__244 - 220)) | (1 << (rpnParser.T__245 - 220)) | (1 << (rpnParser.T__246 - 220)) | (1 << (rpnParser.T__247 - 220)) | (1 << (rpnParser.T__248 - 220)) | (1 << (rpnParser.T__249 - 220)) | (1 << (rpnParser.T__250 - 220)))) !== 0) || ((((_la - 252)) & ~0x1f) == 0 && ((1 << (_la - 252)) & ((1 << (rpnParser.T__251 - 252)) | (1 << (rpnParser.T__252 - 252)) | (1 << (rpnParser.T__253 - 252)) | (1 << (rpnParser.T__254 - 252)) | (1 << (rpnParser.T__255 - 252)) | (1 << (rpnParser.T__256 - 252)) | (1 << (rpnParser.T__257 - 252)) | (1 << (rpnParser.T__258 - 252)) | (1 << (rpnParser.T__259 - 252)) | (1 << (rpnParser.T__260 - 252)))) !== 0))) {
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




rpnParser.TorqueTypeContext = TorqueTypeContext;

rpnParser.prototype.torqueType = function() {

    var localctx = new TorqueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, rpnParser.RULE_torqueType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__6 || ((((_la - 262)) & ~0x1f) == 0 && ((1 << (_la - 262)) & ((1 << (rpnParser.T__261 - 262)) | (1 << (rpnParser.T__262 - 262)) | (1 << (rpnParser.T__263 - 262)) | (1 << (rpnParser.T__264 - 262)) | (1 << (rpnParser.T__265 - 262)) | (1 << (rpnParser.T__266 - 262)) | (1 << (rpnParser.T__267 - 262)) | (1 << (rpnParser.T__268 - 262)) | (1 << (rpnParser.T__269 - 262)) | (1 << (rpnParser.T__270 - 262)) | (1 << (rpnParser.T__271 - 262)) | (1 << (rpnParser.T__272 - 262)) | (1 << (rpnParser.T__273 - 262)))) !== 0))) {
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




rpnParser.MiscellaneousTypeContext = MiscellaneousTypeContext;

rpnParser.prototype.miscellaneousType = function() {

    var localctx = new MiscellaneousTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, rpnParser.RULE_miscellaneousType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        _la = this._input.LA(1);
        if(!(((((_la - 275)) & ~0x1f) == 0 && ((1 << (_la - 275)) & ((1 << (rpnParser.T__274 - 275)) | (1 << (rpnParser.T__275 - 275)) | (1 << (rpnParser.T__276 - 275)) | (1 << (rpnParser.T__277 - 275)) | (1 << (rpnParser.T__278 - 275)) | (1 << (rpnParser.T__279 - 275)) | (1 << (rpnParser.T__280 - 275)) | (1 << (rpnParser.T__281 - 275)) | (1 << (rpnParser.T__282 - 275)) | (1 << (rpnParser.T__283 - 275)) | (1 << (rpnParser.T__284 - 275)) | (1 << (rpnParser.T__285 - 275)) | (1 << (rpnParser.T__286 - 275)) | (1 << (rpnParser.T__287 - 275)) | (1 << (rpnParser.T__288 - 275)) | (1 << (rpnParser.T__289 - 275)) | (1 << (rpnParser.T__290 - 275)) | (1 << (rpnParser.T__291 - 275)) | (1 << (rpnParser.T__292 - 275)) | (1 << (rpnParser.T__293 - 275)) | (1 << (rpnParser.T__294 - 275)) | (1 << (rpnParser.T__295 - 275)) | (1 << (rpnParser.T__296 - 275)) | (1 << (rpnParser.T__297 - 275)) | (1 << (rpnParser.T__298 - 275)))) !== 0))) {
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




rpnParser.StringTypeContext = StringTypeContext;

rpnParser.prototype.stringType = function() {

    var localctx = new StringTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, rpnParser.RULE_stringType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(rpnParser.T__299);
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

AssignmentContext.prototype.ID = function() {
    return this.getToken(rpnParser.ID, 0);
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




rpnParser.AssignmentContext = AssignmentContext;

rpnParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, rpnParser.RULE_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(rpnParser.T__0);
        this.state = 183;
        _la = this._input.LA(1);
        if(!(_la===rpnParser.T__300 || _la===rpnParser.T__301)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 184;
        this.match(rpnParser.ID);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===rpnParser.T__1) {
            this.state = 185;
            this.match(rpnParser.T__1);
            this.state = 186;
            this.type();
        }

        this.state = 189;
        this.match(rpnParser.T__2);
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


function CommonOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_commonOperator;
    return this;
}

CommonOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommonOperatorContext.prototype.constructor = CommonOperatorContext;


CommonOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterCommonOperator(this);
	}
};

CommonOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitCommonOperator(this);
	}
};




rpnParser.CommonOperatorContext = CommonOperatorContext;

rpnParser.prototype.commonOperator = function() {

    var localctx = new CommonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, rpnParser.RULE_commonOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        _la = this._input.LA(1);
        if(!(((((_la - 303)) & ~0x1f) == 0 && ((1 << (_la - 303)) & ((1 << (rpnParser.T__302 - 303)) | (1 << (rpnParser.T__303 - 303)) | (1 << (rpnParser.T__304 - 303)) | (1 << (rpnParser.T__305 - 303)) | (1 << (rpnParser.T__306 - 303)) | (1 << (rpnParser.T__307 - 303)) | (1 << (rpnParser.T__308 - 303)) | (1 << (rpnParser.T__309 - 303)) | (1 << (rpnParser.T__310 - 303)))) !== 0))) {
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


function ComparisonOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_comparisonOperator;
    return this;
}

ComparisonOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonOperatorContext.prototype.constructor = ComparisonOperatorContext;


ComparisonOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterComparisonOperator(this);
	}
};

ComparisonOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitComparisonOperator(this);
	}
};




rpnParser.ComparisonOperatorContext = ComparisonOperatorContext;

rpnParser.prototype.comparisonOperator = function() {

    var localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, rpnParser.RULE_comparisonOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        _la = this._input.LA(1);
        if(!(((((_la - 301)) & ~0x1f) == 0 && ((1 << (_la - 301)) & ((1 << (rpnParser.T__300 - 301)) | (1 << (rpnParser.T__311 - 301)) | (1 << (rpnParser.T__312 - 301)) | (1 << (rpnParser.T__313 - 301)) | (1 << (rpnParser.T__314 - 301)) | (1 << (rpnParser.T__315 - 301)) | (1 << (rpnParser.T__316 - 301)))) !== 0))) {
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


function BitwiseOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_bitwiseOperator;
    return this;
}

BitwiseOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BitwiseOperatorContext.prototype.constructor = BitwiseOperatorContext;


BitwiseOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterBitwiseOperator(this);
	}
};

BitwiseOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitBitwiseOperator(this);
	}
};




rpnParser.BitwiseOperatorContext = BitwiseOperatorContext;

rpnParser.prototype.bitwiseOperator = function() {

    var localctx = new BitwiseOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, rpnParser.RULE_bitwiseOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        _la = this._input.LA(1);
        if(!(((((_la - 318)) & ~0x1f) == 0 && ((1 << (_la - 318)) & ((1 << (rpnParser.T__317 - 318)) | (1 << (rpnParser.T__318 - 318)) | (1 << (rpnParser.T__319 - 318)) | (1 << (rpnParser.T__320 - 318)) | (1 << (rpnParser.T__321 - 318)) | (1 << (rpnParser.T__322 - 318)))) !== 0))) {
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


function LogicalOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_logicalOperator;
    return this;
}

LogicalOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalOperatorContext.prototype.constructor = LogicalOperatorContext;


LogicalOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterLogicalOperator(this);
	}
};

LogicalOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitLogicalOperator(this);
	}
};




rpnParser.LogicalOperatorContext = LogicalOperatorContext;

rpnParser.prototype.logicalOperator = function() {

    var localctx = new LogicalOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, rpnParser.RULE_logicalOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        _la = this._input.LA(1);
        if(!(((((_la - 324)) & ~0x1f) == 0 && ((1 << (_la - 324)) & ((1 << (rpnParser.T__323 - 324)) | (1 << (rpnParser.T__324 - 324)) | (1 << (rpnParser.T__325 - 324)) | (1 << (rpnParser.T__326 - 324)) | (1 << (rpnParser.T__327 - 324)) | (1 << (rpnParser.T__328 - 324)))) !== 0))) {
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


function NumericalOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_numericalOperator;
    return this;
}

NumericalOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericalOperatorContext.prototype.constructor = NumericalOperatorContext;


NumericalOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterNumericalOperator(this);
	}
};

NumericalOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitNumericalOperator(this);
	}
};




rpnParser.NumericalOperatorContext = NumericalOperatorContext;

rpnParser.prototype.numericalOperator = function() {

    var localctx = new NumericalOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, rpnParser.RULE_numericalOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        _la = this._input.LA(1);
        if(!(((((_la - 330)) & ~0x1f) == 0 && ((1 << (_la - 330)) & ((1 << (rpnParser.T__329 - 330)) | (1 << (rpnParser.T__330 - 330)) | (1 << (rpnParser.T__331 - 330)) | (1 << (rpnParser.T__332 - 330)) | (1 << (rpnParser.T__333 - 330)) | (1 << (rpnParser.T__334 - 330)) | (1 << (rpnParser.T__335 - 330)) | (1 << (rpnParser.T__336 - 330)) | (1 << (rpnParser.T__337 - 330)) | (1 << (rpnParser.T__338 - 330)) | (1 << (rpnParser.T__339 - 330)) | (1 << (rpnParser.T__340 - 330)) | (1 << (rpnParser.T__341 - 330)) | (1 << (rpnParser.T__342 - 330)) | (1 << (rpnParser.T__343 - 330)) | (1 << (rpnParser.T__344 - 330)) | (1 << (rpnParser.T__345 - 330)) | (1 << (rpnParser.T__346 - 330)) | (1 << (rpnParser.T__347 - 330)) | (1 << (rpnParser.T__348 - 330)) | (1 << (rpnParser.T__349 - 330)) | (1 << (rpnParser.T__350 - 330)) | (1 << (rpnParser.T__351 - 330)) | (1 << (rpnParser.T__352 - 330)) | (1 << (rpnParser.T__353 - 330)) | (1 << (rpnParser.T__354 - 330)))) !== 0))) {
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


function SpecialOperatorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_specialOperators;
    return this;
}

SpecialOperatorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecialOperatorsContext.prototype.constructor = SpecialOperatorsContext;

SpecialOperatorsContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

SpecialOperatorsContext.prototype.elseStatement = function() {
    return this.getTypedRuleContext(ElseStatementContext,0);
};

SpecialOperatorsContext.prototype.GOTO = function() {
    return this.getToken(rpnParser.GOTO, 0);
};

SpecialOperatorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterSpecialOperators(this);
	}
};

SpecialOperatorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitSpecialOperators(this);
	}
};




rpnParser.SpecialOperatorsContext = SpecialOperatorsContext;

rpnParser.prototype.specialOperators = function() {

    var localctx = new SpecialOperatorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, rpnParser.RULE_specialOperators);
    try {
        this.state = 212;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rpnParser.T__355:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.match(rpnParser.T__355);
            break;
        case rpnParser.T__356:
            this.enterOuterAlt(localctx, 2);
            this.state = 202;
            this.match(rpnParser.T__356);
            break;
        case rpnParser.T__357:
            this.enterOuterAlt(localctx, 3);
            this.state = 203;
            this.match(rpnParser.T__357);
            break;
        case rpnParser.T__358:
            this.enterOuterAlt(localctx, 4);
            this.state = 204;
            this.match(rpnParser.T__358);
            break;
        case rpnParser.T__359:
            this.enterOuterAlt(localctx, 5);
            this.state = 205;
            this.match(rpnParser.T__359);
            break;
        case rpnParser.T__360:
            this.enterOuterAlt(localctx, 6);
            this.state = 206;
            this.match(rpnParser.T__360);
            break;
        case rpnParser.T__363:
            this.enterOuterAlt(localctx, 7);
            this.state = 207;
            this.ifStatement();
            break;
        case rpnParser.T__365:
            this.enterOuterAlt(localctx, 8);
            this.state = 208;
            this.elseStatement();
            break;
        case rpnParser.T__361:
            this.enterOuterAlt(localctx, 9);
            this.state = 209;
            this.match(rpnParser.T__361);
            break;
        case rpnParser.GOTO:
            this.enterOuterAlt(localctx, 10);
            this.state = 210;
            this.match(rpnParser.GOTO);
            break;
        case rpnParser.T__362:
            this.enterOuterAlt(localctx, 11);
            this.state = 211;
            this.match(rpnParser.T__362);
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


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitIfStatement(this);
	}
};




rpnParser.IfStatementContext = IfStatementContext;

rpnParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, rpnParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(rpnParser.T__363);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0 || ((((_la - 301)) & ~0x1f) == 0 && ((1 << (_la - 301)) & ((1 << (rpnParser.T__300 - 301)) | (1 << (rpnParser.T__302 - 301)) | (1 << (rpnParser.T__303 - 301)) | (1 << (rpnParser.T__304 - 301)) | (1 << (rpnParser.T__305 - 301)) | (1 << (rpnParser.T__306 - 301)) | (1 << (rpnParser.T__307 - 301)) | (1 << (rpnParser.T__308 - 301)) | (1 << (rpnParser.T__309 - 301)) | (1 << (rpnParser.T__310 - 301)) | (1 << (rpnParser.T__311 - 301)) | (1 << (rpnParser.T__312 - 301)) | (1 << (rpnParser.T__313 - 301)) | (1 << (rpnParser.T__314 - 301)) | (1 << (rpnParser.T__315 - 301)) | (1 << (rpnParser.T__316 - 301)) | (1 << (rpnParser.T__317 - 301)) | (1 << (rpnParser.T__318 - 301)) | (1 << (rpnParser.T__319 - 301)) | (1 << (rpnParser.T__320 - 301)) | (1 << (rpnParser.T__321 - 301)) | (1 << (rpnParser.T__322 - 301)) | (1 << (rpnParser.T__323 - 301)) | (1 << (rpnParser.T__324 - 301)) | (1 << (rpnParser.T__325 - 301)) | (1 << (rpnParser.T__326 - 301)) | (1 << (rpnParser.T__327 - 301)) | (1 << (rpnParser.T__328 - 301)) | (1 << (rpnParser.T__329 - 301)) | (1 << (rpnParser.T__330 - 301)) | (1 << (rpnParser.T__331 - 301)))) !== 0) || ((((_la - 333)) & ~0x1f) == 0 && ((1 << (_la - 333)) & ((1 << (rpnParser.T__332 - 333)) | (1 << (rpnParser.T__333 - 333)) | (1 << (rpnParser.T__334 - 333)) | (1 << (rpnParser.T__335 - 333)) | (1 << (rpnParser.T__336 - 333)) | (1 << (rpnParser.T__337 - 333)) | (1 << (rpnParser.T__338 - 333)) | (1 << (rpnParser.T__339 - 333)) | (1 << (rpnParser.T__340 - 333)) | (1 << (rpnParser.T__341 - 333)) | (1 << (rpnParser.T__342 - 333)) | (1 << (rpnParser.T__343 - 333)) | (1 << (rpnParser.T__344 - 333)) | (1 << (rpnParser.T__345 - 333)) | (1 << (rpnParser.T__346 - 333)) | (1 << (rpnParser.T__347 - 333)) | (1 << (rpnParser.T__348 - 333)) | (1 << (rpnParser.T__349 - 333)) | (1 << (rpnParser.T__350 - 333)) | (1 << (rpnParser.T__351 - 333)) | (1 << (rpnParser.T__352 - 333)) | (1 << (rpnParser.T__353 - 333)) | (1 << (rpnParser.T__354 - 333)) | (1 << (rpnParser.T__355 - 333)) | (1 << (rpnParser.T__356 - 333)) | (1 << (rpnParser.T__357 - 333)) | (1 << (rpnParser.T__358 - 333)) | (1 << (rpnParser.T__359 - 333)) | (1 << (rpnParser.T__360 - 333)) | (1 << (rpnParser.T__361 - 333)) | (1 << (rpnParser.T__362 - 333)) | (1 << (rpnParser.T__363 - 333)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (rpnParser.T__365 - 366)) | (1 << (rpnParser.T__366 - 366)) | (1 << (rpnParser.T__367 - 366)) | (1 << (rpnParser.T__368 - 366)) | (1 << (rpnParser.T__369 - 366)) | (1 << (rpnParser.T__370 - 366)) | (1 << (rpnParser.T__371 - 366)) | (1 << (rpnParser.T__372 - 366)) | (1 << (rpnParser.T__373 - 366)) | (1 << (rpnParser.T__374 - 366)) | (1 << (rpnParser.T__375 - 366)) | (1 << (rpnParser.T__376 - 366)) | (1 << (rpnParser.T__377 - 366)) | (1 << (rpnParser.T__378 - 366)) | (1 << (rpnParser.T__379 - 366)) | (1 << (rpnParser.T__380 - 366)) | (1 << (rpnParser.T__381 - 366)) | (1 << (rpnParser.T__382 - 366)) | (1 << (rpnParser.LABEL - 366)) | (1 << (rpnParser.GOTO - 366)) | (1 << (rpnParser.STORE - 366)) | (1 << (rpnParser.LOAD - 366)) | (1 << (rpnParser.STORE_POP - 366)) | (1 << (rpnParser.NUMBER - 366)) | (1 << (rpnParser.STRING - 366)))) !== 0)) {
            this.state = 215;
            this.token();
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 221;
        this.match(rpnParser.T__364);
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


function ElseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_elseStatement;
    return this;
}

ElseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatementContext.prototype.constructor = ElseStatementContext;

ElseStatementContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

ElseStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterElseStatement(this);
	}
};

ElseStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitElseStatement(this);
	}
};




rpnParser.ElseStatementContext = ElseStatementContext;

rpnParser.prototype.elseStatement = function() {

    var localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, rpnParser.RULE_elseStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(rpnParser.T__365);
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rpnParser.T__0 || ((((_la - 301)) & ~0x1f) == 0 && ((1 << (_la - 301)) & ((1 << (rpnParser.T__300 - 301)) | (1 << (rpnParser.T__302 - 301)) | (1 << (rpnParser.T__303 - 301)) | (1 << (rpnParser.T__304 - 301)) | (1 << (rpnParser.T__305 - 301)) | (1 << (rpnParser.T__306 - 301)) | (1 << (rpnParser.T__307 - 301)) | (1 << (rpnParser.T__308 - 301)) | (1 << (rpnParser.T__309 - 301)) | (1 << (rpnParser.T__310 - 301)) | (1 << (rpnParser.T__311 - 301)) | (1 << (rpnParser.T__312 - 301)) | (1 << (rpnParser.T__313 - 301)) | (1 << (rpnParser.T__314 - 301)) | (1 << (rpnParser.T__315 - 301)) | (1 << (rpnParser.T__316 - 301)) | (1 << (rpnParser.T__317 - 301)) | (1 << (rpnParser.T__318 - 301)) | (1 << (rpnParser.T__319 - 301)) | (1 << (rpnParser.T__320 - 301)) | (1 << (rpnParser.T__321 - 301)) | (1 << (rpnParser.T__322 - 301)) | (1 << (rpnParser.T__323 - 301)) | (1 << (rpnParser.T__324 - 301)) | (1 << (rpnParser.T__325 - 301)) | (1 << (rpnParser.T__326 - 301)) | (1 << (rpnParser.T__327 - 301)) | (1 << (rpnParser.T__328 - 301)) | (1 << (rpnParser.T__329 - 301)) | (1 << (rpnParser.T__330 - 301)) | (1 << (rpnParser.T__331 - 301)))) !== 0) || ((((_la - 333)) & ~0x1f) == 0 && ((1 << (_la - 333)) & ((1 << (rpnParser.T__332 - 333)) | (1 << (rpnParser.T__333 - 333)) | (1 << (rpnParser.T__334 - 333)) | (1 << (rpnParser.T__335 - 333)) | (1 << (rpnParser.T__336 - 333)) | (1 << (rpnParser.T__337 - 333)) | (1 << (rpnParser.T__338 - 333)) | (1 << (rpnParser.T__339 - 333)) | (1 << (rpnParser.T__340 - 333)) | (1 << (rpnParser.T__341 - 333)) | (1 << (rpnParser.T__342 - 333)) | (1 << (rpnParser.T__343 - 333)) | (1 << (rpnParser.T__344 - 333)) | (1 << (rpnParser.T__345 - 333)) | (1 << (rpnParser.T__346 - 333)) | (1 << (rpnParser.T__347 - 333)) | (1 << (rpnParser.T__348 - 333)) | (1 << (rpnParser.T__349 - 333)) | (1 << (rpnParser.T__350 - 333)) | (1 << (rpnParser.T__351 - 333)) | (1 << (rpnParser.T__352 - 333)) | (1 << (rpnParser.T__353 - 333)) | (1 << (rpnParser.T__354 - 333)) | (1 << (rpnParser.T__355 - 333)) | (1 << (rpnParser.T__356 - 333)) | (1 << (rpnParser.T__357 - 333)) | (1 << (rpnParser.T__358 - 333)) | (1 << (rpnParser.T__359 - 333)) | (1 << (rpnParser.T__360 - 333)) | (1 << (rpnParser.T__361 - 333)) | (1 << (rpnParser.T__362 - 333)) | (1 << (rpnParser.T__363 - 333)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (rpnParser.T__365 - 366)) | (1 << (rpnParser.T__366 - 366)) | (1 << (rpnParser.T__367 - 366)) | (1 << (rpnParser.T__368 - 366)) | (1 << (rpnParser.T__369 - 366)) | (1 << (rpnParser.T__370 - 366)) | (1 << (rpnParser.T__371 - 366)) | (1 << (rpnParser.T__372 - 366)) | (1 << (rpnParser.T__373 - 366)) | (1 << (rpnParser.T__374 - 366)) | (1 << (rpnParser.T__375 - 366)) | (1 << (rpnParser.T__376 - 366)) | (1 << (rpnParser.T__377 - 366)) | (1 << (rpnParser.T__378 - 366)) | (1 << (rpnParser.T__379 - 366)) | (1 << (rpnParser.T__380 - 366)) | (1 << (rpnParser.T__381 - 366)) | (1 << (rpnParser.T__382 - 366)) | (1 << (rpnParser.LABEL - 366)) | (1 << (rpnParser.GOTO - 366)) | (1 << (rpnParser.STORE - 366)) | (1 << (rpnParser.LOAD - 366)) | (1 << (rpnParser.STORE_POP - 366)) | (1 << (rpnParser.NUMBER - 366)) | (1 << (rpnParser.STRING - 366)))) !== 0)) {
            this.state = 224;
            this.token();
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 230;
        this.match(rpnParser.T__364);
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


function StringOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_stringOperator;
    return this;
}

StringOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringOperatorContext.prototype.constructor = StringOperatorContext;


StringOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStringOperator(this);
	}
};

StringOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStringOperator(this);
	}
};




rpnParser.StringOperatorContext = StringOperatorContext;

rpnParser.prototype.stringOperator = function() {

    var localctx = new StringOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, rpnParser.RULE_stringOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        _la = this._input.LA(1);
        if(!(((((_la - 367)) & ~0x1f) == 0 && ((1 << (_la - 367)) & ((1 << (rpnParser.T__366 - 367)) | (1 << (rpnParser.T__367 - 367)) | (1 << (rpnParser.T__368 - 367)) | (1 << (rpnParser.T__369 - 367)) | (1 << (rpnParser.T__370 - 367)) | (1 << (rpnParser.T__371 - 367)) | (1 << (rpnParser.T__372 - 367)) | (1 << (rpnParser.T__373 - 367)) | (1 << (rpnParser.T__374 - 367)) | (1 << (rpnParser.T__375 - 367)) | (1 << (rpnParser.T__376 - 367)) | (1 << (rpnParser.T__377 - 367)))) !== 0))) {
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


function StackOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rpnParser.RULE_stackOperator;
    return this;
}

StackOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StackOperatorContext.prototype.constructor = StackOperatorContext;

StackOperatorContext.prototype.STORE = function() {
    return this.getToken(rpnParser.STORE, 0);
};

StackOperatorContext.prototype.LOAD = function() {
    return this.getToken(rpnParser.LOAD, 0);
};

StackOperatorContext.prototype.STORE_POP = function() {
    return this.getToken(rpnParser.STORE_POP, 0);
};

StackOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.enterStackOperator(this);
	}
};

StackOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rpnListener ) {
        listener.exitStackOperator(this);
	}
};




rpnParser.StackOperatorContext = StackOperatorContext;

rpnParser.prototype.stackOperator = function() {

    var localctx = new StackOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, rpnParser.RULE_stackOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        _la = this._input.LA(1);
        if(!(((((_la - 379)) & ~0x1f) == 0 && ((1 << (_la - 379)) & ((1 << (rpnParser.T__378 - 379)) | (1 << (rpnParser.T__379 - 379)) | (1 << (rpnParser.T__380 - 379)) | (1 << (rpnParser.T__381 - 379)) | (1 << (rpnParser.T__382 - 379)) | (1 << (rpnParser.STORE - 379)) | (1 << (rpnParser.LOAD - 379)) | (1 << (rpnParser.STORE_POP - 379)))) !== 0))) {
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


exports.rpnParser = rpnParser;
