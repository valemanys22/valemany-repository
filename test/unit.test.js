const { expect } = require("chai");

const assert = require('assert');
const controller = require('../src/controller');

describe('controller scenario',()=>{
    let data;
    let output;

    it('Should returns `not in place` when' ,function(){
       data =  {
            "place" : {
                "x": "",
                "y": "",
                "o":""
            },
            "COMMANDS":["MOVE","LEFT","RIGHT","REPORT"]
        }
        output = controller(data);
        console.log('output',output);
    /* assert.strictEqual(output,'Hola'); */
    expect(output).to.equal(false);
    })

    it('Should returns `not in place` when' ,function(){
        data =  {
             "place" : {
                 "x": 1,
                 "y": 2,
                 "o":""
             },
             "COMMANDS":["MOVE","LEFT","RIGHT","REPORT"]
         }
         output = controller(data);
         console.log('output',output);
     /* assert.strictEqual(output,'Hola'); */
     expect(output).to.equal(true);
     })
})