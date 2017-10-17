//global variables
var marker;
var infoWindow1;
var infoWindow2;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzgRe2qa6Q8latl74anLMAAOs9s6D3fX4",
  authDomain: "surfnturf-1505590651992.firebaseapp.com",
  databaseURL: "https://surfnturf-1505590651992.firebaseio.com",
  projectId: "surfnturf-1505590651992",
  storageBucket: "surfnturf-1505590651992.appspot.com",
  messagingSenderId: "1078434011414"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("value",function(snapshot){
   console.log(snapshot.val());
})

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.823, lng: -117.283},
    zoom: 10,
    gestureHandling: 'greedy',
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });


   // Add markers to the map.
    database.ref("/spitCast").on("child_added", function(childSnapshot, prevChildKey) {

       var myLat = childSnapshot.val().lat;
       var myLng = childSnapshot.val().lng;
       var myPosition = childSnapshot.val();
       var myLatLng = "{lat: " + myLat + ", lng: " + myLng + "}";
       var locationName = childSnapshot.val().spot_name;
       var spotId = childSnapshot.val().spot_id;

      var marker = new google.maps.Marker({
      position: myPosition,
      map: map,
      reference: locationName,
      idNum: spotId});

        //display() is the ajax call for spitcast to display spot information
        function display(){
        var location = spotNum;
        var queryURL = "http://api.spitcast.com/api/spot/forecast/" + location + "/";
        var queryURL2 = "http://api.spitcast.com/api/county/swell/san-diego/";
        var queryURL3 = "http://api.spitcast.com/api/county/wind/san-diego/";
        var queryURL4 = "http://api.spitcast.com/api/county/tide/san-diego/";
        var queryURL5 = "http://api.spitcast.com/api/county/water-temperature/san-diego/";
          //ajax call
          $.ajax({
            url: queryURL,
            method: "GET"
          })
          .done(function(response){
            console.log(response);

            $.ajax({
              url: queryURL2,
              method: "GET"
            })
            .done(function(response2){
              console.log(response2);


              $.ajax({
                url: queryURL3,
                method: "GET"
              })
              .done(function(response3){
                console.log(response3);

                $.ajax({
                  url: queryURL4,
                  method: "GET"
                })
                .done(function(response4){
                  console.log(response4);

                  $.ajax({
                    url: queryURL5,
                    method: "GET"
                  })
                  .done(function(response5){
                    console.log(response5);

                      var dir=null;
                      var amSwellDir = response2[6][5].dir;
                      var midSwellDir = response2[12][5].dir;
                      var pmSwellDir = response2[17][5].dir;

                      if (amSwellDir >= 0 && amSwellDir < 45){
                        dir = "NNE";
                      } else if (amSwellDir >= 45 && amSwellDir < 90){
                       dir="NE";
                      }else if(amSwellDir >= 90 && amSwellDir < 135){
                        dir ="SE";
                      }else if(amSwellDir >= 135 && amSwellDir < 180){
                        dir="SSE";
                      }else if(amSwellDir >= 180 && amSwellDir < 225){
                        dir="SSW";
                      }else if (amSwellDir >= 225 && amSwellDir < 270){
                        dir="SW";
                      }else if(amSwellDir >= 270 && amSwellDir < 315){
                        dir="NW";
                      }else if(amSwellDir >= 315 && amSwellDir < 360){
                        dir="NNW";
                      }

                      if (midSwellDir >= 0 && midSwellDir < 45){
                        dir = "NNE";
                      } else if (midSwellDir >= 45 && midSwellDir < 90){
                       dir="NE";
                      }else if(midSwellDir >= 90 && midSwellDir < 135){
                        dir ="SE";
                      }else if(midSwellDir >= 135 && midSwellDir < 180){
                        dir="SSE";
                      }else if(midSwellDir >= 180 && midSwellDir < 225){
                        dir="SSW";
                      }else if (midSwellDir >= 225 && midSwellDir < 270){
                        dir="SW";
                      }else if(midSwellDir >= 270 && midSwellDir < 315){
                        dir="NW";
                      }else if(midSwellDir >= 315 && midSwellDir < 360){
                        dir="NNW";
                      }

                      if (pmSwellDir >= 0 && pmSwellDir < 45){
                        dir = "NNE";
                      } else if (pmSwellDir >= 45 && pmSwellDir < 90){
                       dir="NE";
                      }else if(pmSwellDir >= 90 && pmSwellDir < 135){
                        dir ="SE";
                      }else if(pmSwellDir >= 135 && pmSwellDir < 180){
                        dir="SSE";
                      }else if(pmSwellDir >= 180 && pmSwellDir < 225){
                        dir="SSW";
                      }else if (pmSwellDir >= 225 && pmSwellDir < 270){
                        dir="SW";
                      }else if(pmSwellDir >= 270 && pmSwellDir < 315){
                        dir="NW";
                      }else if(pmSwellDir >= 315 && pmSwellDir < 360){
                        dir="NNW";
                      }

                      var displayBox = '<div id="infoWindow"><h3>'
                      + response[0].spot_name +'</h3><p>Morning Conditions: '
                      + response[5].size+'ft' + '</br> Shape: ' + response[5].shape_full
                      + '</br> Swell Direction: '+ dir + '</br> Wind: ' + response3[5].speed_kts + '</br> Tide: ' + response4[5].tide_meters + '</br>'
                      +'</p><p>Midday Conditions: '
                      + response[12].size+'ft' + '</br> Shape: ' + response[12].shape_full
                      +'</br> Swell Direction: '+ dir + '</br> Wind: ' + response3[12].speed_kts + '</br> Tide: ' + response4[12].tide_meters + '</br>'
                      +'</p><p>Dusk Conditions :'
                      + response[17].size+'ft' + '</br> Shape: ' + response[17].shape_full
                      +'</br> Swell Direction: '+ dir + '</br> Wind: ' + response3[17].speed_kts + '</br> Tide: ' + response4[17].tide_meters + '</br>'
                      +'</p>' +  '<p> Water Temp: ' + response5.fahrenheit + '</br> Wetsuit: ' + response5.wetsuit + '</p></div>';

                      


                      var infoWindow1 = new google.maps.InfoWindow({
                              content: displayBox
                            });
                      infoWindow1.open(map, marker);
                      console.log(marker);
                    });
                  });
                });
              });
            });
          
        }

      var spotNum;
      // marker clicked functions
      marker.addListener('click', function(e){
        spotNum = marker.idNum;
        display();
        console.log("marker clicked");
        infoWindow2.close(map, marker);
      });


      document.getElementById('search').onclick = function() {
          event.preventDefault();
          var searchValue = document.getElementById("searchval").value.trim();
          console.log(searchValue);
        
          var isFound = false;

          database.ref().child('spitCast').on("value", function(snapshot) {
              console.log(snapshot.val());

              var surfLocs = snapshot.val();

              Object.keys(surfLocs).forEach(function(key) {
                
                console.log(searchValue);
                console.log(surfLocs[key].spot_name);
                if (surfLocs[key].spot_name.toLowerCase() == searchValue){
                  console.log("match found");
                  isFound = true;
                  

                  var myLatLng = {lat: surfLocs[key].lat, lng: surfLocs[key].lng};

                  marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    reference: surfLocs[key].spot_name,
                    idNum: surfLocs[key].spot_id
                  });
                  spotNum = marker.idNum;
                }
              });
              if(isFound == true){
                display();
              }
              else if(isFound == false){
                var errorBox = '<div id="infoWindow"><h3>Sorry, No search results found :(</h3>';
                //var latlng = map.getCenter();

                var infoWindow3 = new google.maps.InfoWindow({
                      content: errorBox
                    });
                    infoWindow3.open(map);

              }
              });
          }

      // mouse over funtions
      var infoWindow2 = new google.maps.InfoWindow({
      content: '<p>'+ marker.reference +'</p>'
      });

      marker.addListener('mouseover', function(e){
        infoWindow2.open(map, marker);
      });
      marker.addListener('mouseout', function(e){
        infoWindow2.close(map, marker);
      });
    });

  function placeMarker(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    console.log(marker.position.lat());
    console.log(marker.position.lng());
    map.panTo(position);
    var objPosition = {
      lat: marker.position.lat(),
      lng: marker.position.lng()
    }
    database.ref("/userSpots").push(objPosition);
  }
}

/******/
 //Login Modal Function
 /******/
 // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
var loginBtn = $("#btnLogin");
loginBtn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
$(".close").on('click', function(){
  modal.style.display = "none";
})
// span.onclick = function() {
//     modal.style.display = "none";
// }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/******/
 //Signup Modal Function
 /******/
 // Get the modal
var modalSignUp = document.getElementById('signUpModal');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    modalSignUp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
$(".close").on('click', function(){
  modalSignUp.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}

