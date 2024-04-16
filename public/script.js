// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoF1UTc3cBeAm37YVLKqiXXsyeeJKHpfY",
    authDomain: "databasy-289d7.firebaseapp.com",
    projectId: "databasy-289d7",
    storageBucket: "databasy-289d7.appspot.com",
    messagingSenderId: "896354768409",
    appId: "1:896354768409:web:2869b806a7864404cabc88",
    databaseURL: "https://databasy-289d7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const submitDetails = () => {
    let details = {
        name: studentName.value,
        id: studentId.value,
        gender: gender.value
    }
    
    
    if (studentName.value == "" || studentId.value == "" || gender.value == "") {
        alert("Fill up man")
    } else {
        let dbref = ref(database, 'students/2')
        let done = set(dbref, details)
        if (done) {
            success.style.display = 'block'
        } else {
            alert('not saved')
        }
    }

}
window.submitDetails = submitDetails