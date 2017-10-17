  // add real time listener
  /*
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      updateUserUI(firebaseUser);
    } else {
      console.log('not logged in'); 
      nbBtnLogout.classList.add('hide');
      nbBtnLogin.classList.remove('hide');
      nbBtnSignUp.classList.remove('hide');  
    }
  });
  */
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      updateUserUI(user);
    }
    
  });

  function updateUserUI(firebaseUser) {
      console.log(firebaseUser);
      sessionStorage.setItem("UniqueID",firebaseUser.uid);
      console.log("Unique Id: " + sessionStorage.getItem("UniqueID"));
      var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
      console.log(favorite);
      btnLogout.classList.remove('hide');
      nbBtnLogout.classList.remove('hide');
      nbBtnLogin.classList.add('hide');
      nbBtnSignUp.classList.add('hide');
      console.log("blah");
      $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ");
  }


  // ==== JEREMY'S CODE ==== //
  // firebase.auth().onAuthStateChanged(function(firebaseUser) {
  //     console.log(firebaseUser);
  //     sessionStorage.setItem("UniqueID",firebaseUser.uid);
  //     console.log("Unique Id: " + sessionStorage.getItem("UniqueID"));
  //     var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
  //     console.log(favorite);
  //     btnLogout.classList.remove('hide');
  //     nbBtnLogout.classList.remove('hide');
  //     nbBtnLogin.classList.add('hide');
  //     nbBtnSignUp.classList.add('hide');
  //     console.log("blah");
  //     $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ");

  // }, function(error) {
  // }, function(complete) {

  // });

  // ===================After 6:59 pm Tuesday ======

    // add real time listener
  /*
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      updateUserUI(firebaseUser);
    } else {
      console.log('not logged in'); 
      nbBtnLogout.classList.add('hide');
      nbBtnLogin.classList.remove('hide');
      nbBtnSignUp.classList.remove('hide');  
    }
  });
  */
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      updateUserUI(user);
    }
    
  });

  function updateUserUI(firebaseUser) {
      console.log(firebaseUser);
      sessionStorage.setItem("UniqueID",firebaseUser.uid);
      console.log("Unique Id: " + sessionStorage.getItem("UniqueID"));
      var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
      console.log(favorite);
      btnLogout.classList.remove('hide');
      nbBtnLogout.classList.remove('hide');
      nbBtnLogin.classList.add('hide');
      nbBtnSignUp.classList.add('hide');
      console.log("blah");
      $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ");
  }


  // ==== JEREMY'S CODE ==== //
  // firebase.auth().onAuthStateChanged(function(firebaseUser) {
  //     console.log(firebaseUser);
  //     sessionStorage.setItem("UniqueID",firebaseUser.uid);
  //     console.log("Unique Id: " + sessionStorage.getItem("UniqueID"));
  //     var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
  //     console.log(favorite);
  //     btnLogout.classList.remove('hide');
  //     nbBtnLogout.classList.remove('hide');
  //     nbBtnLogin.classList.add('hide');
  //     nbBtnSignUp.classList.add('hide');
  //     console.log("blah");
  //     $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ");

  // }, function(error) {
  // }, function(complete) {


// ** 8:14 PM COPY ** //

  // add real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      sessionStorage.setItem("UniqueID",firebaseUser.uid);
      console.log("Unique Id: " + sessionStorage.getItem("UniqueID"));
      var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
      console.log(favorite);
      btnLogout.classList.remove('hide');
      nbBtnLogout.classList.remove('hide');
      nbBtnLogin.classList.add('hide');
      nbBtnSignUp.classList.add('hide');
      console.log("blah")}.then(function(firebaseUser){
      $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ")});

    } else {
      console.log('not logged in'); 
      nbBtnLogout.classList.add('hide');
      nbBtnLogin.classList.remove('hide');
      nbBtnSignUp.classList.remove('hide');  
    }
  });