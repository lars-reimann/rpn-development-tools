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

// Enter a parse tree produced by rpnParser#program.
rpnListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by rpnParser#program.
rpnListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by rpnParser#action.
rpnListener.prototype.enterAction = function(ctx) {
};

// Exit a parse tree produced by rpnParser#action.
rpnListener.prototype.exitAction = function(ctx) {
};


// Enter a parse tree produced by rpnParser#booleanLiteral.
rpnListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#booleanLiteral.
rpnListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#hexadecimalLiteral.
rpnListener.prototype.enterHexadecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#hexadecimalLiteral.
rpnListener.prototype.exitHexadecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#decimalLiteral.
rpnListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#decimalLiteral.
rpnListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#octalLiteral.
rpnListener.prototype.enterOctalLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#octalLiteral.
rpnListener.prototype.exitOctalLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#stringLiteral.
rpnListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by rpnParser#stringLiteral.
rpnListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by rpnParser#variableAccess.
rpnListener.prototype.enterVariableAccess = function(ctx) {
};

// Exit a parse tree produced by rpnParser#variableAccess.
rpnListener.prototype.exitVariableAccess = function(ctx) {
};


// Enter a parse tree produced by rpnParser#assignment.
rpnListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by rpnParser#assignment.
rpnListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by rpnParser#id.
rpnListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by rpnParser#id.
rpnListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by rpnParser#operator.
rpnListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by rpnParser#operator.
rpnListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by rpnParser#ifAction.
rpnListener.prototype.enterIfAction = function(ctx) {
};

// Exit a parse tree produced by rpnParser#ifAction.
rpnListener.prototype.exitIfAction = function(ctx) {
};


// Enter a parse tree produced by rpnParser#elseAction.
rpnListener.prototype.enterElseAction = function(ctx) {
};

// Exit a parse tree produced by rpnParser#elseAction.
rpnListener.prototype.exitElseAction = function(ctx) {
};


// Enter a parse tree produced by rpnParser#label.
rpnListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by rpnParser#label.
rpnListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by rpnParser#gotoAction.
rpnListener.prototype.enterGotoAction = function(ctx) {
};

// Exit a parse tree produced by rpnParser#gotoAction.
rpnListener.prototype.exitGotoAction = function(ctx) {
};


// Enter a parse tree produced by rpnParser#quit.
rpnListener.prototype.enterQuit = function(ctx) {
};

// Exit a parse tree produced by rpnParser#quit.
rpnListener.prototype.exitQuit = function(ctx) {
};


// Enter a parse tree produced by rpnParser#store.
rpnListener.prototype.enterStore = function(ctx) {
};

// Exit a parse tree produced by rpnParser#store.
rpnListener.prototype.exitStore = function(ctx) {
};


// Enter a parse tree produced by rpnParser#load.
rpnListener.prototype.enterLoad = function(ctx) {
};

// Exit a parse tree produced by rpnParser#load.
rpnListener.prototype.exitLoad = function(ctx) {
};


// Enter a parse tree produced by rpnParser#storePop.
rpnListener.prototype.enterStorePop = function(ctx) {
};

// Exit a parse tree produced by rpnParser#storePop.
rpnListener.prototype.exitStorePop = function(ctx) {
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



exports.rpnListener = rpnListener;