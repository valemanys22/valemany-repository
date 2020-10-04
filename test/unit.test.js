const { expect } = require("chai");

const assert = require('assert');
const controller = require('../src/controller');

describe('controller scenario',function(){
    let data;
    let output;

    it('Should returns false when coordinates are in range' ,function(){
       data =  {
            "place" : {
                "x": "1",
                "y": "2",
                "o":"NORTH"
            },
            "commands":["MOVE","LEFT","RIGHT","REPORT"]
        }
        output = controller(data);
        console.log('output',output);
    /* assert.strictEqual(output,'Hola'); */
    expect(output).to.equal(false);
    })

    it('Should returns `true` when coordinates are outside of range' ,function(){
        data =  {
             "place" : {
                 "x": 6,
                 "y": 6,
                 "o":"WEST"
             },
             "commands":["MOVE","LEFT","RIGHT","REPORT"]
         }
         output = controller(data);
         console.log('output',output);
     /* assert.strictEqual(output,'Hola'); */
     expect(output).to.equal(true);
     })

     it('Should returns `not in place` when commands are not correct' ,function(){
        data =  {
             "place" : {
                 "x": 6,
                 "y": 6,
                 "o":"WEST"
             },
             "commands":["MOVE","LEFT","RIGHT","KILL"]
         }
         output = controller(data.commands);
         console.log('output',output);
     /* assert.strictEqual(output,'Hola'); */
     expect(output).to.equal('not in place');
     })
})