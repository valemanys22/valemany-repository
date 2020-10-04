'use strict'
const Robot = require('./models/robot');

const controller = ({place,commands})=>{

        console.log('commands',commands);
        
        const robot = new Robot(place,commands);
        if(place)return robot.isOffGrid();
        else if(commands)return robot.checkCommand();
}

module.exports = controller;