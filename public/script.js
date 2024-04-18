// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getStorage, ref as stRef } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";


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
const storage = getStorage(app)

const submitDetails = () => {
    let details = {
        name: studentName.value,
        id: studentId.value,
        gender: gender.value
    }
    
    
    if (studentName.value == "" || studentId.value == "" || gender.value == "") {
        alert("Fill up man")
    } else {
        let dbref = ref(database, `students/5`)
        let done = set(dbref, details)
        if (done) {
            success.style.display = 'block'
            setTimeout(()=>{
                success.style.display = 'none'
            },3000)
        } else {
            alert('not saved')
        }
    }
}
window.submitDetails = submitDetails

const submitAccount = () => {
    let accDetails = {
        accName: accName.value,
        accNum: accNum.value,
        bank: bank.value
    }

    if (accName.value == "" || accNum.value == "" || bank.value == "") {
        alert("Fill up da details")
    } else {
        let dbref = ref(database, `bankDetails/0`)
        let done = set(dbref, accDetails)
        if (done) {
            network.style.display = 'block'
            setTimeout(()=>{
                network.style.display = 'none'
            },3000)
        } else {
            alert('not saved')
        }
    }

}
window.submitAccount = submitAccount

let studentRef = ref(database, 'students')
// let accRef = ref(database, 'bankDetails')

onValue(studentRef,(task)=>{
    const data = task.val()
    console.log(data);
    data.map((student)=>{
        display.innerHTML += `
            <div class="p-2 m-2 shadow-sm row">
                <p class="col">Name: ${student.name}</p>
                <p class="col">ID: ${student.id}</p>
                <p class="col">Gender: ${student.gender}</p>
            </div>
        `
    })
})