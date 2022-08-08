function validate(){
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('username').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zip = document.getElementById('zip').value
    let tnc = document.getElementById('tnc')
    let validationString = /^[A-Za-z]+$/

    if(firstName.length >= 1 && firstName.length <=20 && firstName.match(validationString)){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    if(lastName.length >= 1 && lastName.length <=20 && lastName.match(validationString)){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    if(email.length >= 8 && email.includes('@') && email.includes('.') && email.slice(email.lastIndexOf('.')+1).length >1 && email.slice(email.lastIndexOf('.')+1).length <= 3 && email[email.lastIndexOf('@')+1]!='.' && email[email.indexOf('.')+1] != '.'){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }

    if(city.length > 2 && city.length <= 20 && city.match(validationString)){
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }

    if(state)
    {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }
    else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
    }

    if(zip.length == 6 && zip > 0)
    {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }
    else{
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
    }

    if(tnc.checked){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
    }
}
