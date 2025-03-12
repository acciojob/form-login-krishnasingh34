let form = document.querySelector('form')
let fname = document.querySelector('#fname')
let lname = document.querySelector('#lname')
form.addEventListener('submit', getFormvalue)
function getFormvalue(e) {
    //Write your code here
	e.preventDefault()
            let firstname = fname.value
            let lastname = lname.value
            alert(firstname+lastname)
}