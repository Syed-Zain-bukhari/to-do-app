// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsJPC7tEduUYvETwTpXYpEGC6QahMTsKg",
  authDomain: "todo-app-5d4f2.firebaseapp.com",
  databaseURL: "https://todo-app-5d4f2-default-rtdb.firebaseio.com",
  projectId: "todo-app-5d4f2",
  storageBucket: "todo-app-5d4f2.firebasestorage.app",
  messagingSenderId: "813156297160",
  appId: "1:813156297160:web:82225ec31b5280231bf8fd"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  

  var taskRef = firebase.database().ref("task").push(taskText);
  var taskId = taskRef.key;

  if (taskText === "") {
    alert("Please enter a task first");
    return;
  }

  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.textContent = taskText;

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    taskList.removeChild(li);
    firebase.database().ref("task/" + taskId ).remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
};
