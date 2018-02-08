import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDWcjXiJwdN1vW7yy3fsCxlEwm90SQ7QjU",
  authDomain: "itinerary-9ea4c.firebaseapp.com",
  databaseURL: "https://itinerary-9ea4c.firebaseio.com",
  projectId: "itinerary-9ea4c",
  storageBucket: "itinerary-9ea4c.appspot.com",
  messagingSenderId: "1019431257456"
};

export const firebaseApp = firebase.initializeApp(config);
