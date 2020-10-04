'use strict'
const Robot = require('./models/robot');

const controller = ({place,commands})=>{
    console.log('controller place',place);
    const robot = new Robot(place);
    const result = robot.isOffGrid();
    console.log('result',result);
    return result;
}

module.exports = controller;