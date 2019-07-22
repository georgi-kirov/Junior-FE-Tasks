var validation = (function() {
    $('#submit-btn').prop('disabled',true);
    $('#email').focus();

    function emailValidation() {
        let emailValue = $('#email').val();

        if (emailValue !== '') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
                $('#email-error-msg').addClass("hidden");
                return true;
            }
    
            $('#email-error-msg').removeClass("hidden");
            return false;
        }
    }

    function passwordValidation() {
        let passwordValue = $('#password').val();

        if (passwordValue !== '') {
            if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(passwordValue) ) {
                $('#password-error-msg').addClass("hidden") ;
                return true;
            }
    
            $('#password-error-msg').removeClass("hidden") ;
            return false;
        }
    }

    function validateform(){
        let isValidEmail = emailValidation(),
            isValidPassword = passwordValidation();

        if (isValidEmail && isValidPassword){   
            $('#submit-btn').prop('disabled',false);
        } else {
            $('#submit-btn').prop('disabled',true);
        }
    }

    function submitInformation() {
        let emailValue = $('#email').val();
        let passwordValue = $('#password').val();

        alert('Email: ' + emailValue + '\n' + 'Password: ' + passwordValue)
    }

    return {
        validateform: validateform,
        submitInformation: submitInformation
    }
})();

$(document).ready(function(){
    document.getElementById('myForm').addEventListener('keyup', validation.validateform);
    document.getElementById('submit-btn').addEventListener('click', validation.submitInformation);
}); 