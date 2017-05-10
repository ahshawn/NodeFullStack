var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://source.unsplash.com/1600x900/?cloud",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum quis lectus rutrum consectetur. Aenean dapibus aliquet mi at fringilla. Etiam scelerisque neque at porta viverra. Vestibulum eu ante velit. Fusce vestibulum, lorem ac sagittis euismod, nulla magna consectetur nulla, non feugiat leo enim sit amet velit. Aenean porttitor id magna eu porta. Aliquam vel erat quam. Vivamus auctor massa justo, ac elementum elit fermentum a. Suspendisse nec nibh nunc. Ut efficitur iaculis leo, at aliquet massa dapibus nec. Vestibulum est enim, iaculis eget consectetur vitae, congue in ex. Pellentesque id magna et est porta interdum ut convallis neque."
    },
    {
        name: "Desert Mesa", 
        image: "https://source.unsplash.com/1600x900/?desert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum quis lectus rutrum consectetur. Aenean dapibus aliquet mi at fringilla. Etiam scelerisque neque at porta viverra. Vestibulum eu ante velit. Fusce vestibulum, lorem ac sagittis euismod, nulla magna consectetur nulla, non feugiat leo enim sit amet velit. Aenean porttitor id magna eu porta. Aliquam vel erat quam. Vivamus auctor massa justo, ac elementum elit fermentum a. Suspendisse nec nibh nunc. Ut efficitur iaculis leo, at aliquet massa dapibus nec. Vestibulum est enim, iaculis eget consectetur vitae, congue in ex. Pellentesque id magna et est porta interdum ut convallis neque."
    },
    {
        name: "Canyon Floor", 
        image: "https://source.unsplash.com/1600x900/?canyon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ipsum quis lectus rutrum consectetur. Aenean dapibus aliquet mi at fringilla. Etiam scelerisque neque at porta viverra. Vestibulum eu ante velit. Fusce vestibulum, lorem ac sagittis euismod, nulla magna consectetur nulla, non feugiat leo enim sit amet velit. Aenean porttitor id magna eu porta. Aliquam vel erat quam. Vivamus auctor massa justo, ac elementum elit fermentum a. Suspendisse nec nibh nunc. Ut efficitur iaculis leo, at aliquet massa dapibus nec. Vestibulum est enim, iaculis eget consectetur vitae, congue in ex. Pellentesque id magna et est porta interdum ut convallis neque."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;