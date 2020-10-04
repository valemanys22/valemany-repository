'use strict'

const Grid = function(){
    const width = 5;
    const height = 5;

    const isOff = (a)=>{
        console.log('a',a);

        if(x > 5 || x < 0)return true;
        else if(y > 5 || y < 0)return true;
        return false;
    }
    return {isOff};
}

module.exports = Grid;