// Generated from src/parser/rpn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by rpnParser.

function rpnVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

rpnVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
rpnVisitor.prototype.constructor = rpnVisitor;

// Visit a parse tree produced by rpnParser#program.
rpnVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#sequence.
rpnVisitor.prototype.visitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#action.
rpnVisitor.prototype.visitAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#booleanLiteral.
rpnVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#hexadecimalLiteral.
rpnVisitor.prototype.visitHexadecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#decimalLiteral.
rpnVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#octalLiteral.
rpnVisitor.prototype.visitOctalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#stringLiteral.
rpnVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#variableAccess.
rpnVisitor.prototype.visitVariableAccess = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#assignment.
rpnVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#id.
rpnVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#operator.
rpnVisitor.prototype.visitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#ifAction.
rpnVisitor.prototype.visitIfAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#label.
rpnVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#gotoAction.
rpnVisitor.prototype.visitGotoAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#quit.
rpnVisitor.prototype.visitQuit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#store.
rpnVisitor.prototype.visitStore = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#load.
rpnVisitor.prototype.visitLoad = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#storePop.
rpnVisitor.prototype.visitStorePop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#type.
rpnVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#booleanType.
rpnVisitor.prototype.visitBooleanType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#numberType.
rpnVisitor.prototype.visitNumberType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#distanceType.
rpnVisitor.prototype.visitDistanceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#areaType.
rpnVisitor.prototype.visitAreaType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#volumeType.
rpnVisitor.prototype.visitVolumeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#volumeRateType.
rpnVisitor.prototype.visitVolumeRateType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#temperatureType.
rpnVisitor.prototype.visitTemperatureType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#angleType.
rpnVisitor.prototype.visitAngleType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#globalPositionType.
rpnVisitor.prototype.visitGlobalPositionType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#angularVelocityType.
rpnVisitor.prototype.visitAngularVelocityType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#speedType.
rpnVisitor.prototype.visitSpeedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#accelerationType.
rpnVisitor.prototype.visitAccelerationType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#timeType.
rpnVisitor.prototype.visitTimeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#powerType.
rpnVisitor.prototype.visitPowerType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#weightType.
rpnVisitor.prototype.visitWeightType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#weightRateType.
rpnVisitor.prototype.visitWeightRateType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#electricalCurrentType.
rpnVisitor.prototype.visitElectricalCurrentType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#electricalPotentialType.
rpnVisitor.prototype.visitElectricalPotentialType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#frequencyType.
rpnVisitor.prototype.visitFrequencyType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#densityType.
rpnVisitor.prototype.visitDensityType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#pressureType.
rpnVisitor.prototype.visitPressureType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#torqueType.
rpnVisitor.prototype.visitTorqueType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#miscellaneousType.
rpnVisitor.prototype.visitMiscellaneousType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rpnParser#stringType.
rpnVisitor.prototype.visitStringType = function(ctx) {
  return this.visitChildren(ctx);
};



exports.rpnVisitor = rpnVisitor;