let preChargedUsers = [
    {
        id: 'a64a11ec-80ce-403b-aa40-2baf81a44bfb',
        fullName: 'Admin',
        email: 'admin@admin.com',
        password: 'admin',
        birthDate: '26-09-1998',
        creationDate: '01-01-2023',
        province: 'Tucuman',
        observations: 'Administrador del sitio web CPU-Dealers',
        role: 'ROLE_ADMIN'
    },
    {
        id: 'ca26d45d-4f7e-445b-826d-92984af9b167',
        fullName: 'Juan Perez',
        email: 'juanperez@example.com',
        password: 'alfabeta',
        birthDate: '04-12-2001',
        creationDate: '01-01-2023',
        province: 'Buenos Aires',
        observations: 'Cliente regular del sitio web CPU-Dealers',
        role: 'ROLE_CLIENT'
    },
    {
        id: '3b2e58e1-234f-4842-8ba9-a2ed4a997c2e',
        fullName: 'Maria Garcia',
        email: 'mariagarcia@example.com',
        password: 'alfabeta',
        birthDate: '31-01-1990',
        creationDate: '01-01-2023',
        province: 'Formosa',
        observations: 'Cliente regular del sitio web CPU-Dealers',
        role: 'ROLE_CLIENT'
    },
    {
        id: 'e20b60f4-026a-4912-9e19-a094de75ae8f',
        fullName: 'Carlos Rodriguez',
        email: 'carlosrodriguez@example.com',
        password: 'alfabeta',
        birthDate: '09-07-1994',
        creationDate: '01-01-2023',
        province: 'Rio Negro',
        observations: 'Cliente regular del sitio web CPU-Dealers',
        role: 'ROLE_CLIENT'
    }
]

if(localStorage.getItem('users') === null) {

    localStorage.setItem('users', JSON.stringify(preChargedUsers))

}

const users = JSON.parse(localStorage.getItem('users'))

const loginForm = document.getElementById('login')

loginForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const emailInp = event.target.elements.email.value
    const passInp = event.target.elements.password.value

    const userExist = users.find(usr => {

        if(usr.email === emailInp) {
            return true
        }

        return false
    })

    if(!userExist || userExist.password !== passInp) {

        Swal.fire("Login incorrecto", "Los datos ingresados son incorrectos", "error")
        return

    }

    Swal.fire("Login Correcto", "En breve será redireccionado", "success")

    delete userExist.password

    localStorage.setItem('currentUser', JSON.stringify(userExist))

    setTimeout(() => {
        window.location.href = '/'
    }, 1000);

})