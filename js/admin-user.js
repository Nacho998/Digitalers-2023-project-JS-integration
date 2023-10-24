users = JSON.parse(localStorage.getItem('users')) || preChargedUsers

if (JSON.parse(localStorage.getItem('users')) === null) {
    localStorage.setItem('users', JSON.stringify(users))
}

let tableBody = document.getElementById('table-body-users')

paintUsers(users)

const filterUsers = document.getElementById('filterUser')

function paintUsers(array) {

    tableBody.innerHTML = ''

    array.forEach((usr) => {

        tableBody.innerHTML +=
        `<tr>
            <td>${usr.fullName}</td>
            <td>${usr.email}</td>
            <td>${usr.role}</td>
            <td>${usr.creationDate}</td>
            <td>
                <div class="text-center">
                    <button class="btn btn-danger" onclick="deleteUser('${usr.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>`
    })
}

filterUsers.addEventListener('keyup', (event) => {

    const search = event.target.value.toLowerCase()

    const result = users.filter((user) => {

        const name = user.fullName.toLowerCase()

        if(name.includes(search)) {
            return true
        }
        return false
    })
    paintUsers(result)
})

const deleteUser = (idTorSearch) => {

    Swal.fire({

        title: 'Borrar usuario',
        icon: 'error',
        text: 'Realmente desea elminar este usuario?',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Borrar',

    }).then((result) => {

        if(result.isConfirmed) {

            const findedIndex = users.findIndex((userFindIndex) => {

                if(userFindIndex.id === idTorSearch) {
                    return true
                }
                return false
            })

            users.splice(findedIndex, 1)
            paintUsers(users)
            localStorage.setItem('users', JSON.stringify(users))

            Swal.fire('Borrado', 'El usuario fué borrado exitosamente', 'success')
        }
    })
}

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