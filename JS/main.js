      

     function verif() {
        let nom = document.getElementById("name").value
        let email = document.getElementById("email").value
        let passwd = document.getElementById("pwrd").value
        let cpasswd = document.getElementById("cpwrd").value
        if (nom.length <= 60) {
            let emailptn =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            
              if (emailptn.test(email)) {
                 if (passwd !== cpasswd) {
                     alert("Votre mot de passe ne correspont pas")
                 } else {
                     alert("Le mot de passe est correct")
                 }
              } else {
                  alert("Email n'est pas au bon format")
              }
        } else {
             alert ("Votre Nom doit avoir au plus 60 caracteres")
        }
     }