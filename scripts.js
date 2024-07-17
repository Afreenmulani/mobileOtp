// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWy52z0z4F5sLxdMJwTfy_at65lz6fIxw",
    authDomain: "otp-project-27f1b.firebaseapp.com",
    projectId: "otp-project-27f1b",
    storageBucket: "otp-project-27f1b.appspot.com",
    messagingSenderId: "927312506521",
    appId: "1:927312506521:web:18dc807ddb318789d95208",
    measurementId: "G-8QCZ2R2RBS"
  };
firebase.initializeApp(firebaseConfig);
render();

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function phoneAuth() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
    }).catch(function(error) {
        alert(error.message);
    });
}

function codeverify() {
    var code = document.getElementById('verificationcode').value;
    confirmationResult.confirm(code).then(function() {
        document.querySelector('.p-conf').style.display = 'block';
        document.querySelector('.n-conf').style.display = 'none';
    }).catch(function() {
        document.querySelector('.p-conf').style.display = 'none';
        document.querySelector('.n-conf').style.display = 'block';
    });
}
