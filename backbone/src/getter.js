alert("55555");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

// Add Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDde8Rjjwv9Q5vEPJ9cCFrVieC4LOHJU7o",
  authDomain: "socio-c4ca0.firebaseapp.com",
  databaseURL: "https://socio-c4ca0-default-rtdb.firebaseio.com",
  projectId: "socio-c4ca0",
  storageBucket: "socio-c4ca0.appspot.com",
  messagingSenderId: "748492692615",
  appId: "1:748492692615:web:0fded2a17529fee1926c22",
  measurementId: "G-PHDH8N5WNY",
};

//initialising firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
//reference your database(create the database)
//here getterFormDB stores the object returned by rhs.
var getterFormDB = firebase.database().ref("getterForm");

//to capture the current location of the contributor :----->
let userLatitude;
let userLongitude;
document.getElementById("loc_detect_g").addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    // console.log(userLatitude, userLongitude);
  });
});

//adding event listener to form so that the function named getterFormFunc(as written below )gets invoked after clicking the submit button.
document
  .getElementById("getterForm")
  .addEventListener("submit", getterFormFunc);
function getterFormFunc(e) {
  e.preventDefault();
  var name_g = getElementVal("name_g");
  var email_g = getElementVal("email_g");
  var phone_g = getElementVal("phone_g");
  var age_g = getElementVal("age_g");
  var dog = getElementVal("dog");
  var cat = getElementVal("cat");
  var bird = getElementVal("bird");
  var others = getElementVal("others");
  var latitude_g = userLatitude;
  var longitude_g = userLongitude;

  //calling the saver function to save all the data into the firebase...
  getterDataSaver(
    name_g,
    email_g,
    phone_g,
    age_g,
    dog,
    cat,
    bird,
    others,
    latitude_g,
    longitude_g
  );
  //to display the successful submission messsage...
  //changing the display property of the css of element with class name alert so that after clicking submit , its display property changes...
  document.querySelector(".alert").style.display = "block";

  //removing the submitted message after 5000ms....
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  //refreshing the form after successful submission...
  document.getElementById("getterForm").reset();
}

//a function to save all the details of the form to the firebase.
var getterDataSaver = (
  name_g,
  email_g,
  phone_g,
  age_g,
  dog,
  cat,
  bird,
  others,
  latitude_g,
  longitude_g
) => {
  var newGetterForm = getterFormDB.push();
  newGetterForm.set({
    name_g: name_g,
    email_g: email_g,
    phone_g: phone_g,
    age_g: age_g,
    dog: dog,
    cat: cat,
    bird: bird,
    others: others,
    latitude_g: latitude_g,
    longitude_g: longitude_g,
  });
};

//a function which returns the value returned by any html element by taking its id value as parameter...
const getElementVal = (id) => {
  if (document.getElementById(id) != null)
    return document.getElementById(id).value;
};
