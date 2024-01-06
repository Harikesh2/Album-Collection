import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

};

//Initializing the firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//Initialize firebase Authentication and get a reference to the service

const auth = getAuth(app);
