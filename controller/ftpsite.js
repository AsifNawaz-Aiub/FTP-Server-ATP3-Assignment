const express = require("express");
const router = express.Router();
const moviesModel = require.main.require("./models/moviesModel");

router.get("/", (req,res ) => {

    moviesModel.getByAction(function (results) {
       var actionMovies=results;
       moviesModel.getByThriller(function (results) {
        var thrillerMovies=results;
        moviesModel.getByComedy(function (results) {
            var comedyrMovies=results;
            res.render("ftpsite/index",{actionMovies : actionMovies, thrillerMovies : thrillerMovies, comedyrMovies : comedyrMovies});
            });
 
         });

      });
   
});


module.exports = router;