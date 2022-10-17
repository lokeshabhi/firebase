<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home page</title>
</head>
<body>
    <h1>logged in</h1>
<script src="index.js"></script>
    <!-- firebase sdk link goes here -->
    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCaWvndjmrZ2lGArUUxF_vDW_BYPOWnZtY",
        authDomain: "projects-list-b6bfc.firebaseapp.com",
        projectId: "projects-list-b6bfc",
        storageBucket: "projects-list-b6bfc.appspot.com",
        messagingSenderId: "1070207882038",
        appId: "1:1070207882038:web:f79986848f3c1810105997",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      import { getDatabase, ref, set , get, child, update, remove} 
      from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

      const db = getDatabase();

    //   insert data
    function inSertData(){
        set(ref(db, "users/"+ 0),
        {
            name:"krishna"
        })
        .then(() =>{
            alert("data stored successfully");
        })
        .catch((error)=>
        {
            alert("unsuccessful",error);
        })
    }

    //read data
    function readData(){
        const dbref = ref(db);
        get (child(dbref, "users/" + 1)).then((snapshot)=>
        {
            if(snapshot.exists())
            {
                console.log(snapshot.val().age);
                console.log(snapshot.val().name);
                console.log(snapshot.val().email);
            }
        })
    }
    readData();
</script>
</body>
</html>
