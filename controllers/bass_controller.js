// REQUIRE
// ==================================================
const express = require("express"); // pull in express again within the controller so that we can use the Router() method
const router = express.Router(); // utilize the Router() express method to create our routes. the "router" constant in this case is an object.
const bassesModel = require("../models/basses.js"); // Import the model (burgers.js) to use its (more specific) database functions.
// ==================================================


// / GET ROUTE
// ==================================================
router.get("/", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("GET request received");
    bassesModel.all(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    });
});
// ==================================================

// /japan GET ROUTE
// ==================================================
router.get("/japan", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("GET request received");
    bassesModel.japan(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    });
});
// ==================================================

// /usa GET ROUTE
// ==================================================
router.get("/usa", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("GET request received");
    bassesModel.usa(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    });
});
// ==================================================

// /precision GET ROUTE
// ==================================================
router.get("/precision", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("GET request received");
    bassesModel.precision(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    });
});
// ==================================================

// /finder GET ROUTE
// ==================================================
router.get("/finder", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("/finder GET request received");
    // bassesModel.precision(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
    //     const hbsObject = { // create an object that will be fed into our handlebars res.render below
    //         basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    // });
    res.render("finder");
});
// ==================================================

// /api-logic GET ROUTE
// ==================================================
router.get("/api-logic", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("/api-logic GET request received");
    // bassesModel.precision(function(data) { // use the 'all' query from the burgers model, feed it the only argument needed (a callback function)
    //     const hbsObject = { // create an object that will be fed into our handlebars res.render below
    //         basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject); // for this route, render the index template, and feed the hbsObject data into the templates via handlebars.
    // });
    res.render("api-logic");
});
// ==================================================

// /api GET ROUTEs
// ==================================================

router.get("/api/all", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("API GET ALL request received");
    var column = req.params.column;
    var match = req.params.match;
    bassesModel.all(function(data) {
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        // console.log(hbsObject);
        res.json(hbsObject);
    });
});

router.get("/api/:column/:match", function(req,res) { // adding this get() method to our router object. looking for a GET to the root so we can display the page/app
    console.log("API GET COLUMN + MATCH request received");
    var column = req.params.column;
    var match = req.params.match;
    bassesModel.api(column,match,function(data) {
        const hbsObject = { // create an object that will be fed into our handlebars res.render below
            basses: data // make the data object that comes back from the mysql query the value for the "burgers" key in this object that we'll loop through with handlebars
        };
        // console.log(hbsObject);
        res.json(hbsObject);
    });
});

// ==================================================


// TODO: POST ROUTE
// ==================================================
// router.post("/", function(req,res) { // adding this post() method to our router object. looking for a POST to the root so we can add an entry to DB
//     console.log("POST request received");
//     burgersModel.createSimple(req.body.burger_name, function(result) { // use the 'createSimple' query from the burgers model, feed it the newBurger value from the POST body, and then feed it a callback function
//         console.log(result);
//         // TODO: Do we actually need to return this?
//         res.json({ id: result.insertId });
//     });
// });
// ==================================================


// TODO: PUT ROUTE
// ==================================================
// router.put("/:id", function(req,res) { // adding this put() method to our router object. looking for a PUT to the root so we can update an entry in DB
//     console.log("PUT request received");
//     burgersModel.updateSimple(req.params.id, function(result) { // use the 'updateSimple' query from the burgers model to set a burger to 'true' for devoured. Feed it the burger ID from the PUT request, and then feed it a callback function
//         if (result.changedRows === 0) { // if this is true, then something went wrong
//             return res.status(404).end();
//         } 
//         return res.status(200).end(); // return a 200 server status if everything went okay.
//     });
// });
// ==================================================


// MODULE.EXPORTS
// ==================================================
module.exports = router; // pass this router object (that holds all our routes) through whenever burger_controller.js is imported
// ==================================================