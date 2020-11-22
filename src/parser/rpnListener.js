// Generated from src/parser/rpn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by rpnParser.
function rpnListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

rpnListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
rpnListener.prototype.constructor = rpnListener;

// Enter a parse tree produced by rpnParser#rpn.
rpnListener.prototype.enterRpn = function(ctx) {
};

// Exit a parse tree produced by rpnParser#rpn.
rpnListener.prototype.exitRpn = function(ctx) {
};


// Enter a parse tree produced by rpnParser#token.
rpnListener.prototype.enterToken = function(ctx) {
};

// Exit a parse tree produced by rpnParser#token.
rpnListener.prototype.exitToken = function(ctx) {
};


// Enter a parse tree produced by rpnParser#literal.
rpnListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#literal.
rpnListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#variableAccess.
rpnListener.prototype.enterVariableAccess = function(ctx) {
};

// Exit a parse tree produced by rpnParser#variableAccess.
rpnListener.prototype.exitVariableAccess = function(ctx) {
};


// Enter a parse tree produced by rpnParser#type.
rpnListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#type.
rpnListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#booleanType.
rpnListener.prototype.enterBooleanType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#booleanType.
rpnListener.prototype.exitBooleanType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#numberType.
rpnListener.prototype.enterNumberType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#numberType.
rpnListener.prototype.exitNumberType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#distanceType.
rpnListener.prototype.enterDistanceType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#distanceType.
rpnListener.prototype.exitDistanceType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#areaType.
rpnListener.prototype.enterAreaType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#areaType.
rpnListener.prototype.exitAreaType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#volumeType.
rpnListener.prototype.enterVolumeType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#volumeType.
rpnListener.prototype.exitVolumeType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#volumeRateType.
rpnListener.prototype.enterVolumeRateType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#volumeRateType.
rpnListener.prototype.exitVolumeRateType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#temperatureType.
rpnListener.prototype.enterTemperatureType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#temperatureType.
rpnListener.prototype.exitTemperatureType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#angleType.
rpnListener.prototype.enterAngleType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#angleType.
rpnListener.prototype.exitAngleType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#globalPositionType.
rpnListener.prototype.enterGlobalPositionType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#globalPositionType.
rpnListener.prototype.exitGlobalPositionType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#angularVelocityType.
rpnListener.prototype.enterAngularVelocityType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#angularVelocityType.
rpnListener.prototype.exitAngularVelocityType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#speedType.
rpnListener.prototype.enterSpeedType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#speedType.
rpnListener.prototype.exitSpeedType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#accelerationType.
rpnListener.prototype.enterAccelerationType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#accelerationType.
rpnListener.prototype.exitAccelerationType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#timeType.
rpnListener.prototype.enterTimeType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#timeType.
rpnListener.prototype.exitTimeType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#powerType.
rpnListener.prototype.enterPowerType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#powerType.
rpnListener.prototype.exitPowerType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#weightType.
rpnListener.prototype.enterWeightType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#weightType.
rpnListener.prototype.exitWeightType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#weightRateType.
rpnListener.prototype.enterWeightRateType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#weightRateType.
rpnListener.prototype.exitWeightRateType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#electricalCurrentType.
rpnListener.prototype.enterElectricalCurrentType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#electricalCurrentType.
rpnListener.prototype.exitElectricalCurrentType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#electricalPotentialType.
rpnListener.prototype.enterElectricalPotentialType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#electricalPotentialType.
rpnListener.prototype.exitElectricalPotentialType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#frequencyType.
rpnListener.prototype.enterFrequencyType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#frequencyType.
rpnListener.prototype.exitFrequencyType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#densityType.
rpnListener.prototype.enterDensityType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#densityType.
rpnListener.prototype.exitDensityType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#pressureType.
rpnListener.prototype.enterPressureType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#pressureType.
rpnListener.prototype.exitPressureType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#torqueType.
rpnListener.prototype.enterTorqueType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#torqueType.
rpnListener.prototype.exitTorqueType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#miscellaneousType.
rpnListener.prototype.enterMiscellaneousType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#miscellaneousType.
rpnListener.prototype.exitMiscellaneousType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#stringType.
rpnListener.prototype.enterStringType = function(ctx) {
};

// Exit a parse tree produced by rpnParser#stringType.
rpnListener.prototype.exitStringType = function(ctx) {
};


// Enter a parse tree produced by rpnParser#assignment.
rpnListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by rpnParser#assignment.
rpnListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by rpnParser#commonOperator.
rpnListener.prototype.enterCommonOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#commonOperator.
rpnListener.prototype.exitCommonOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#comparisonOperator.
rpnListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#comparisonOperator.
rpnListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#bitwiseOperator.
rpnListener.prototype.enterBitwiseOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#bitwiseOperator.
rpnListener.prototype.exitBitwiseOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#logicalOperator.
rpnListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#logicalOperator.
rpnListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#numericalOperator.
rpnListener.prototype.enterNumericalOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#numericalOperator.
rpnListener.prototype.exitNumericalOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#specialOperators.
rpnListener.prototype.enterSpecialOperators = function(ctx) {
};

// Exit a parse tree produced by rpnParser#specialOperators.
rpnListener.prototype.exitSpecialOperators = function(ctx) {
};


// Enter a parse tree produced by rpnParser#ifStatement.
rpnListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by rpnParser#ifStatement.
rpnListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by rpnParser#elseStatement.
rpnListener.prototype.enterElseStatement = function(ctx) {
};

// Exit a parse tree produced by rpnParser#elseStatement.
rpnListener.prototype.exitElseStatement = function(ctx) {
};


// Enter a parse tree produced by rpnParser#stringOperator.
rpnListener.prototype.enterStringOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#stringOperator.
rpnListener.prototype.exitStringOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#stackOperator.
rpnListener.prototype.enterStackOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#stackOperator.
rpnListener.prototype.exitStackOperator = function(ctx) {
};



exports.rpnListener = rpnListener;