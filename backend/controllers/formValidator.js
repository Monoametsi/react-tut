const formValidation = function(){

    this.checkEmpty = (input) => {
        let inputValue;

        if(!input){
            return false;
        }else{
            inputValue = input.trim();
            return inputValue;
        }
    }

    this.emailValidation = (input) => {
        const inputValue = input.trim();
        const mailRegex = /^[a-zA-Z0-9_\.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{1,15}$/
        const isValid = mailRegex.test(inputValue);

        if(!isValid){
            return false;
        }else{
            return inputValue;
        }

    }

    this.pwdValidation = (input) => {
        const inputValue = input.trim();

        if(inputValue.length < 6){
            return false;
        }else{
            return inputValue;
        }
    }
}

module.exports = {
    formValidation
}