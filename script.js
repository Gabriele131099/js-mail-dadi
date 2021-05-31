// //  function per E-mail

function checkEmail() {
    var email= ["gabrisanna.131099@gmail.com" , "mariorossi@gmail.com" , "gatanoesposito099@gmail.com" , "yanguh@gmail.com"]
    var emailUtente = document.getElementById("email").placeholder;
    var output = document.getElementById("invio")

    // for e if per controllare se la mail è presente


    var check = false; 

    for (var i = 0; i < email.length; i++) {
        if (email[i] === emailUtente) {
            check = true;
            break;
        }
    }
    if (check) {
        output.innerHTML += 'email corretta';
    } else {
        output.innerHTML += 'email sbagliatta!';
    }

}

// function dado

function randomDado() {
    var output = document.getElementById("run")
    


    var dadoPc= Math.random(0,5)
    var dadoUtente=Math.random(0,5)

    if (dadoUtente>dadoPc) {

        output.innerHTML= "hai vinto!"
        
    } else {
        output.innerHTML= "hai perso"

    }
    
}
