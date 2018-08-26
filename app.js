$(function () {
  $("#fruit-form").submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeJSON(); // include serializeJSON
    console.log(data);
    var firebaseRef = firebase.database().ref("Fruits");
    firebaseRef.push(data);
    console.log("Insert Success.");

    displayData();

    return false;
  });
});

function displayData() {
  var firebaseRef = firebase.database().ref("Fruits").orderByKey();
  firebaseRef.once('value').then(function (dataSnapshot) {
    dataSnapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      // console.log(childData);
    });

  });
}


function delOnClick() {
  var firebaseRef = firebase.database().ref("Fruits/-LKqH5xy_3gRDf5o8ell");
  firebaseRef.remove().then(function () {
    console.log("Remove success.");
  }).catch(function () {
    console.log("Remove failed: " + error.message);
  });
}

function updataData() {
  var firebaseRef = firebase.database().ref("Fruits/-LKp1WxxmVXGDaI2qjPQ");
  firebaseRef.update({
    name: "Rambutan",
    details: "Lorem ipsum dolor sit amet,At vero eos et accusam et justo duo dolores et ea rebum.  consetetur sadipscing elitr,  Lorem ipsum dolor sit amet"
  });

  console.log("Update success.");
}

window.onload = function () {
  displayData();
}