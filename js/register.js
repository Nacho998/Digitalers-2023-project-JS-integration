users = JSON.parse(localStorage.getItem('users'))

const usersForm = document.getElementById('registerForm')

usersForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const elm = usersForm.elements

    const inputEmail = event.target.elements.email.value
    const inputPass = event.target.elements.password.value
    const inputPass2 = event.target.elements.confirmPassword.value

    const userExist = users.find(usr => {

        if(usr.email === inputEmail) {
            return true
        }
        return false
    })

    if(userExist) {

        Swal.fire("Registro incorrecto", "El correo con el que se quiere registrar ya está en uso", "error")
        return
    }

    if(inputPass !== inputPass2) {

        Swal.fire("Las contraseñas no coinciden", "Las contraseñas deben coincidir", "error")
        return
    }

    const newUser = {
        id: crypto.randomUUID(),
        fullName: elm.fullName.value,
        email: elm.email.value,
        password: elm.password.value,
        birthDate: elm.birthDate.value,
        creationDate: creationDate(),
        province: elm.province.value,
        observations: elm.observations.value,
        role: 'ROLE_CLIENT'
    }

    users.push(newUser)

    Swal.fire({
        icon: 'success',
        title: 'Usted se registró exitosamente',
        text: 'En breve será redireccionado al Login'
    })

    localStorage.setItem('users', JSON.stringify(users))
    usersForm.reset()

    setTimeout(() => {
        window.location.href = '/pages/login/login.html'
    }, 500);
})

function creationDate() {
    const date = new Date()
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    let month = date.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    const year = date.getFullYear()

    const formatedDate = `${day}-${month}-${year}`

    return formatedDate
}