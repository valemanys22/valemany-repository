"use strict"

const Grid = require('../models/grid');

const Robot = function ({x,y,o,commands}) {
    this.orientation = o;
    this.currentX= x;
    this.currentY= y;
    this.command = commands;
}

Robot.prototype.isOffGrid = function(){
    return Grid().isOff(this.currentX,this.currentY);
} 

Robot.prototype.checkCommand = function(){
    /* aquí la lógica */
  return 'not in place';
} 

Robot.prototype.execInstruction = function (step) {
    if (step !== "F") {
        this.orientation = robotTurns(this.orientation, step)
        this.vector = coordinateVectors(this.orientation)
    }
    else this.currentPosition = [this.currentPosition[0] + this.vector[0], this.currentPosition[1] + this.vector[1]]
    return this.currentPosition
}

module.exports = Robot;