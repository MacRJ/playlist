function Playlist(){
  console.log("I'm UP!")

// Random Art code for Splash Page
$.get("https://lit-fortress-6467.herokuapp.com/object", function(data){

$("#box1").append("<img src= images/" + image1(0, 5) + "></img")
$("#box2").append("<img src= images/" + image1(0, 5) + "></img")
$("#box3").append("<img src= images/" + image1(0, 5) + "></img")

function image1(min, max){
var random = Math.floor(Math.random() * (max - min));
for(var i = 0; i <data["results"].length; i++)
  for(var key in data["results"][random]){
    var images = data["results"][random]["cover_art"]
}
return (images)
}
})
// End of Code for random art on splash page


// populate image artwork Playlist page

$.get("https://lit-fortress-6467.herokuapp.com/object", function(data){
  for(var i =0; i <data["results"].length; i++){
    for(var k in data["results"]){
      var image = data["results"][i]["cover_art"]
    }
    $("#selectionBar").append("<div class='albumart' id='" + i + "'><img src='../images/" + image + "' alt = albumart></div>" )
  }






// Artist and Album Title to populate
$(".albumart").on("click", function(e){
var Id = jQuery(this).attr("id")
$.get("https://lit-fortress-6467.herokuapp.com/object", function(data){
// console.log(data)
  for(var i = 0; i < data["results"].length; i++){
    for(var k in data["results"]){
      var artistName = data["results"][Id]["artist"]
      var albumTitle =  data["results"][Id]["title"]
    }
  }
  $("#tracks").append("<div>" + artistName + ": " + albumTitle + "</div>")
})
})
})
// end

// clearbox
$("#clear").click(function(){
  $("#tracks").empty();
})
// clearbox

// post





















}
$(window).on("load", Playlist)
