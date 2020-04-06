// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZ4Vf6poopZrBDrbBXEhyr6DDeEDzWfuw",
    authDomain: "carsharebel.firebaseapp.com",
    databaseURL: "https://carsharebel.firebaseio.com",
    projectId: "carsharebel",
    storageBucket: "carsharebel.appspot.com",
    messagingSenderId: "435911136805",
    appId: "1:435911136805:web:3264e3ae9b49798b3fd1cc",
    measurementId: "G-TBSRDEXZJ4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Create stuff about messages collections
let messagesRef = firebase.database().ref("messages");

// Create form submit listener
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get input values
    let name = getInputValues("name");
    let email = getInputValues("email");
    let phone = getInputValues("phone");
    let termsCheckbox = getInputValues("termsCheckbox");
    let message = getInputValues("message");

    // Save message
    saveMessage(name, email, phone, termsCheckbox, message);

    // Show alert
    document.querySelector(".sendAlert").style.opacity = "1";

    // Hide alert
    setTimeout(function() {
        document.querySelector(".sendAlert").style.opacity = "0";

    }, 3000)

    // Clear form
    document.getElementById("contactForm").reset();
}

// Create function to get form values
function getInputValues(id) {
    return document.getElementById(id).value;
}

// Create funct to save message to firebase
function saveMessage(name, email, phone, termsCheckbox, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        termsCheckbox: termsCheckbox,
        message: message
    });
}