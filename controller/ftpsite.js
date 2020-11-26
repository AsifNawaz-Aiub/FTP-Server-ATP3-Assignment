const express = require("express");
const router = express.Router();
const moviesModel = require.main.require("./models/moviesModel");
const tvseriesModel = require.main.require("./models/tvseriesModel");

router.get("/", (req,res ) => {

    moviesModel.getByAction(function (results) {
       var actionMovies=results;
       moviesModel.getByThriller(function (results) {
        var thrillerMovies=results;
        moviesModel.getByComedy(function (results) {
            var comedyMovies=results;
            tvseriesModel.getByAction(function (results) {
                var actionTvSeries=results;
                tvseriesModel.getByThriller(function (results) {
                    var thrillerTvSeries=results;
                    tvseriesModel.getByComedy(function (results) {
                        var comedyTvSeries=results;
                        res.render("ftpsite/index",{actionMovies : actionMovies, thrillerMovies : thrillerMovies, comedyMovies : comedyMovies,actionTvSeries : actionTvSeries,thrillerTvSeries : thrillerTvSeries,comedyTvSeries : comedyTvSeries });
                        });
                    });
             
                });
         
            });
 
         });

      });
   
});

  
module.exports = router;