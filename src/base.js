import React from 'react'
import Rebase from 're-base';
import firebase from 'firebase'


const app = firebase.initializeApp({
    apiKey: "AIzaSyAuG56XlvQWIeBAC1tvkhk90AOHczouAvU",
    authDomain: "flashcards-cc.firebaseapp.com",
    databaseURL: "https://flashcards-cc.firebaseio.com",
    projectId: "flashcards-cc",
    storageBucket: "flashcards-cc.appspot.com",
    messagingSenderId: "604662125920"
})

const base = Rebase.createClass(app.database())

export default base;