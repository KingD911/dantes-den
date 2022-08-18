import { createApp } from 'vue'
import App from './App.vue'
import router from './js/routes.js'
import store from './js/store.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKOQewIL7yY-MfBVaaZ2JLJ2jsV1urtBY",
  authDomain: "vue-http-first-78a3d.firebaseapp.com",
  databaseURL: "https://vue-http-first-78a3d-default-rtdb.firebaseio.com",
  projectId: "vue-http-first-78a3d",
  storageBucket: "vue-http-first-78a3d.appspot.com",
  messagingSenderId: "214541223578",
  appId: "1:214541223578:web:6afc94a40d46f3c52e4123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
createApp(App).use(router).use(store).mount('#app')
