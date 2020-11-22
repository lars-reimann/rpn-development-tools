grammar rpn;

/**********************************************************************************************************************
 * Parser Rules
 **********************************************************************************************************************/

rpn
    : token*
    ;

token
    : literal
    | LABEL
    | variableAccess
    | assignment
    | commonOperator
    | comparisonOperator
    | bitwiseOperator
    | logicalOperator
    | numericalOperator
    | specialOperators
    | stringOperator
    | stackOperator
    ;

literal
    : NUMBER
    | STRING
    ;

variableAccess
    : '(' ID ',' type ')'
    ;

type
    : booleanType
    | numberType
    | stringType
    ;

booleanType
    : 'bool' | 'boolean'
    ;

numberType
    : distanceType
    | areaType
    | volumeType
    | volumeRateType
    | temperatureType
    | angleType
    | globalPositionType
    | angularVelocityType
    | speedType
    | accelerationType
    | timeType
    | powerType
    | weightType
    | weightRateType
    | electricalCurrentType
    | electricalPotentialType
    | frequencyType
    | densityType
    | pressureType
    | torqueType
    | miscellaneousType
    ;

distanceType
    : 'meter' | 'meters' | 'm'
    | 'centimeter' | 'centimeters' | 'cm'
    | 'kilometer' | 'kilometers' | 'km'
    | 'millimeter' | 'millimeters'
    | 'mile' | 'miles'
    | 'decimile' | 'decimiles'
    | 'nautical mile' | 'nautical miles' | 'nmile' | 'nmiles'
    | 'decinmile' | 'decinmiles'
    | 'foot' | 'feet' | 'ft'
    | 'inch' | 'inches' | 'in'
    | 'yard' | 'yards'
    ;

areaType
    : 'square inch' | 'square inches' | 'sq in' | 'in2'
    | 'square feet' | 'square foot' | 'sq ft' | 'ft2'
    | 'square yard' | 'square yards' | 'sq yd' | 'yd2'
    | 'square meter' | 'square meters' | 'sq m' | 'm2'
    | 'square centimeter' | 'square centimeters' | 'sq cm' | 'cm2'
    | 'square kilometer' | 'square kilometers' | 'sq km' | 'km2'
    | 'square millimeter' | 'square millimeters' | 'sq mm' | 'mm2'
    | 'square mile' | 'square miles'
    ;

volumeType
    : 'cubic inch' | 'cubic inches' | 'cu in' | 'in3'
    | 'cubic foot' | 'cubic feet' | 'cu ft' | 'ft3'
    | 'cubic yard' | 'cubic yards' | 'cu yd' | 'yd3'
    | 'cubic mile' | 'cubic miles'
    | 'cubic millimeter' | 'cubic millimeters' | 'cu mm' | 'mm3'
    | 'cubic centimeter' | 'cubic centimeters' | 'cu cm' | 'cm3'
    | 'meter cubed' | 'meters cubed' | 'cubic meter' | 'cubic meters' | 'cu m' | 'm3'
    | 'cubic kilometer' | 'cubic kilometers' | 'cu km' | 'km3'
    | 'liter' | 'liters'
    | 'gallon' | 'gallons'
    | 'quart' | 'quarts'
    ;

volumeRateType
    : 'meter cubed per second' | 'meters cubed per second'
    | 'gallon per hour' | 'gallons per hour' | 'gph'
    | 'liter per hour' | 'liters per hour'
    ;

temperatureType
    : 'kelvin'
    | 'rankine'
    | 'farenheit' | 'fahrenheit'
    | 'celsius'
    ;

angleType
    : 'radian' | 'radians'
    | 'round' | 'rounds'
    | 'degree' | 'degrees'
    | 'grad' | 'grads'
    ;

globalPositionType
    : 'degree latitude' | 'degrees latitude'
    | 'degree longitude' | 'degrees longitude'
    | 'meter latitude' | 'meters latitude'
    ;

angularVelocityType
    : 'radian per second' | 'radians per second'
    | 'revolution per minute' | 'revolutions per minute' | 'rpm' | 'rpms'
    | 'minute per round' | 'minutes per round'
    | 'nice minute per round' | 'nice minutes per round'
    | 'degree per second' | 'degrees per second'
    ;

speedType
    : 'meter per second' | 'meters/second' | 'm/s'
    | 'meter per minute' | 'meters per minute'
    | 'feet/second'
    | 'feet/minute' | 'ft/min'
    | 'kilometer/hour' | 'kilometers/hour' | 'kilometers per hour' | 'kph'
    | 'knot' | 'knots'
    | 'mile per hour' | 'miles per hour' | 'mph'
    | 'mach' | 'machs'
    ;

accelerationType
    : 'meter per second squared' | 'meters per second squared'
    | 'gforce' | 'g force'
    | 'feet per second squared' | 'foot per second squared'
    ;

timeType
    : 'second' | 'seconds'
    | 'minute' | 'minutes'
    | 'hour' | 'hours'
    | 'day' | 'days'
    | 'hour over 10' | 'hours over 10'
    | 'year' | 'years'
    ;

powerType
    : 'watt' | 'watts'
    | 'ft lb per second'
    ;

weightType
    : 'kilogram' | 'kilograms' | 'kg'
    | 'slug' | 'slugs' | 'geepound' | 'geepounds'
    | 'pound' | 'pounds' | 'lbs'
    ;

weightRateType
    : 'kilogram per second' | 'kilograms per second'
    | 'pound per hour' | 'pounds per hour'
    ;

electricalCurrentType
    : 'ampere' | 'amperes' | 'amp' | 'amps'
    ;

electricalPotentialType
    : 'volt' | 'volts'
    ;

frequencyType
    : 'hertz' | 'Hz'
    | 'kilohertz' | 'KHz'
    | 'megahertz' | 'MHz'
    | 'frequency BCD32'
    | 'frequency BCD16'
    | 'frequency ADF BCD32'
    ;

densityType
    : 'kilogram per cubic meter' | 'kilograms per cubic meter'
    | 'slug per cubic feet' | 'slugs per cubic feet' | 'slug/ft3' | 'slug per cubic foot' | 'slugs per cubic foot'
    | 'pound per gallon' | 'pounds per gallon' | 'lbs/gallon'
    ;

pressureType
    : 'pascal' | 'pascals' | 'Pa'
    | 'newton per square meter' | 'newtons per square meter'
    | 'kilopascal' | 'kpa'
    | 'kilogram force per square centimeter' | 'kgFSqCm'
    | 'millimeter of mercury' | 'millimeters of mercury' | 'mmHg'
    | 'centimeter of mercury' | 'centimeters of mercury' | 'cmHg'
    | 'inch of mercury' | 'inches of mercury' | 'inHg'
    | 'atmosphere' | 'atmospheres' | 'atm'
    | 'millimeter of water' | 'millimeters of water'
    | 'pound-force per square inch' | 'psi'
    | 'pound-force per square foot' | 'psf'
    | 'bar' | 'bars'
    | 'millibar' | 'millibars' | 'mbar' | 'mbars' | 'hectopascal' | 'hectopascals'
    | 'boost cmHg'
    | 'boost inHg'
    | 'boost psi'
    | 'slug feet squared' | 'slugs feet squared'
    | 'kilogram meter squared' | 'kilograms meter squared'
    | 'millibar' | 'millibars' | 'mbar' | 'mbars' | 'hectopascal' | 'hectopascals'
    ;

torqueType
    : 'newton meter' | 'newton' | 'meters' | 'nm'
    | 'foot-pound' | 'foot pound' | 'ft-lbs' | 'foot-pounds'
    | 'lbf-feet'
    | 'kilogram meter' | 'kilogram meters' | 'kgf meter' | 'kgf meters'
    | 'poundal feet'
    ;

miscellaneousType
    : 'part'
    | 'half' | 'halfs'
    | 'third' | 'thirds'
    | 'percent' | 'percentage'
    | 'percent over 100'
    | 'bel' | 'bels'
    | 'decibel' | 'decibels'
    | 'more_than_a_half'
    | 'times'
    | 'ratio'
    | 'number' | 'numbers'
    | 'scaler'
    | 'position'
    | 'enum'
    | 'bco16'
    | 'mask'
    | 'flags'
    | 'per radian'
    | 'per degree'
    ;

stringType
    : 'string'
    ;

assignment
    : '(' ('>' | '&gt;') ID (',' type)? ')'
    ;

commonOperator
    : '+'
    | '-'
    | '/'
    | '*'
    | '%'
    | '++'
    | '--'
    | '/-/' | 'neg'
    ;

comparisonOperator
    : '=='
    | '!='
    | '>'
    | '<'
    | '>='
    | '<='
    | '?'
    ;

bitwiseOperator
    : '&'
    | '|'
    | '^'
    | '~'
    | '>>'
    | '<<'
    ;

logicalOperator
    : '!'  | 'NOT'
    | '&&' | 'AND'
    | '||' | 'OR'
    ;

numericalOperator
    : 'abs'
    | 'int'
    | 'flr'
    | 'rng'
    | 'cos'
    | 'lg'
    | 'min'
    | 'sin'
    | 'acos'
    | 'ctg'
    | 'ln'
    | 'sqr'
    | 'asin'
    | 'eps'
    | 'log'
    | 'pi'
    | 'sqrt'
    | 'atg2'
    | 'exp'
    | 'max'
    | 'pow'
    | 'tg'
    | 'atg'
    | 'div'
    | 'ceil'
    | 'near'
    ;

specialOperators
    : 'dnor' | 'd360' | 'rdeg'
    | 'rddg'
    | 'dgrd'
    | 'rnor'
    | ifStatement
    | elseStatement
    | 'quit'
    | GOTO
    | 'case'
    ;

ifStatement
    : 'if{' token* '}'
    ;

elseStatement
    : 'els{' token* '}'
    ;

stringOperator
    : 'lc'
    | 'uc'
    | 'cap'
    | 'chr'
    | 'ord'
    | 'scat'
    | 'schr'
    | 'scmp'
    | 'scmi'
    | 'sstr'
    | 'ssub'
    | 'symb'
    ;

stackOperator
    : 'b'
    | 'c'
    | 'd'
    | 'p'
    | 'r'
    | STORE
    | LOAD
    | STORE_POP
    ;


/**********************************************************************************************************************
 * Lexer Rules
 **********************************************************************************************************************/

ID
    : [a-zA-Z] | [a-zA-Z] [a-zA-Z0-9:_ ]* [a-zA-Z0-9:_]
    ;

LABEL
    : ':' IntegerDigits
    ;

GOTO
    : 'g' IntegerDigits
    ;

STORE
    : 's' IntegerDigits
    ;

LOAD
    : 'l' IntegerDigits
    ;

STORE_POP
    : 'sp' IntegerDigits
    ;

NUMBER
    : IntegerDigits '.' [0-9] [0-9_]*
    ;

STRING
	:	'"' (~["])* '"'
	;

WS
    : [ \t\r\n]+ -> skip
    ;

fragment IntegerDigits
    : ('0' | [1-9] [0-9]*)
    ;

fragment RegisterIndices
    : ([0-9] | [1-4] [0-9])
    ;
