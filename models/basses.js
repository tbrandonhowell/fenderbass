// REQUIRE
// ==================================================
const orm = require("../config/orm.js"); // pulling in the ORM so we can make use of those mysql query templates
// ==================================================


// MODELS
// ==================================================
bassModels = { // creating a new object containing more specific functions for the controller to use
    all: function(cb) {
        orm.all("basses", function(res){
            cb(res);
        });
    },
    japan: function(cb) {
        orm.allWhere("basses", "gen_country", "Japan", function(res){
            cb(res);
        });
    },
    usa: function(cb) {
        orm.allWhere("basses", "gen_country", "USA", function(res){
            cb(res);
        });
    },
    precision: function(cb) {
        orm.allWhere("basses", "gen_type", "Precision", function(res){
            cb(res);
        });
    },
    api: function(incomingColumn,incomingMatch,cb) {
        orm.allWhere("basses",incomingColumn,incomingMatch,function(res){
            cb(res);
        });
    }
    // allWhereFresh: function(cb) { // create a more specific 'allWhere' function to get the uneaten burgers
    //     orm.allWhere("burgers", "devoured", false, function(res){ // use the 'allWhere' query template from the ORM
    //         cb(res);
    //     }); 
    // },
    // allWhereDevoured: function(cb) { // create a more specific 'allWhere' function to get the devoured burgers
    //     orm.allWhere("burgers", "devoured", true, function(res){
    //         cb(res);
    //     });
    // },
    // createSimple: function(newName, cb){ // create a more specific 'createSimple' function to create a new burger
    //     orm.createSimple("burgers", "burger_name", newName, function(res) {
    //         cb(res);
    //     });
    // },
    // updateSimple: function(updateID, cb){ // create a more specific 'updateSimple' function to update the 'devoured' status of a burger
    //     orm.updateSimple("burgers", "devoured", true, updateID, function(res) {
    //         cb(res);
    //     });
    // }
};
// ==================================================


// MODULE.EXPORTS
// ==================================================
module.exports = bassModels; // export these functions to the controller
// ==================================================