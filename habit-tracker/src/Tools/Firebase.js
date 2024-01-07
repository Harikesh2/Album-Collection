import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDeQa3YnxYO0y2oCrA9-_Yq3QoTM3x0krU",
    authDomain: "habit-tracker-abca0.firebaseapp.com",
    projectId: "habit-tracker-abca0",
    storageBucket: "habit-tracker-abca0.appspot.com",
    messagingSenderId: "249620072892",
    appId: "1:249620072892:web:a351a4a2b43596f6fa03b9"
};

//Initializing the firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//Initialize firebase Authentication and get a reference to the service

const auth = getAuth(app);
