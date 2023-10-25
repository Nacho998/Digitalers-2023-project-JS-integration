let products = JSON.parse(localStorage.getItem('items'))

let editID

const btn = document.querySelector('.submit-form')
const btnCancel = document.getElementById('cancel')
const cancelBtn = document.getElementById('cancel')
const closeModal = document.querySelector('.modal-close')
const tableBody = document.getElementById('table-body')

paintTable(products)

const filterInput = document.getElementById('filter')
const productsForm = document.getElementById('productsForm')

productsForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const elm = productsForm.elements

    let id

    if (editID) {
        id = editID
    } else {
        id = crypto.randomUUID()
    }

    const newProduct = {
        id: id,
        image: elm.image.value,
        title: elm.title.value,
        description: elm.description.value,
        price: elm.price.valueAsNumber,
        category: elm.category.value,
        creationDate: obtainedDate()
    }

    if (editID) {

        const index = products.findIndex(product => {
            return product.id === editID
        })

        products[index] = newProduct
        editID = undefined
        btn.innerText = 'Agregar producto'
        btn.classList.remove('btn-success')

    } else {
        products.push(newProduct)
    }

    Swal.fire({
        icon: 'success',
        title: 'Producto agregado/editado exitosamente',
        text: 'El producto se añadió o modificó de forma corresta'
    })

    paintTable(products)

    localStorage.setItem('items', JSON.stringify(products))

    productsForm.reset()
    elm.title.focus()
})

function paintTable(array) {

    tableBody.innerHTML = ''

    array.forEach(function (prd) {

        tableBody.innerHTML +=
            `<tr>
                <td><img src="${prd.image}" alt="${prd.title}"></td>
                <td>${prd.title}</td>
                <td>${prd.description}</td>
                <td>${prd.category}</td>
                <td><strong>$${prd.price}</strong></td>
                <td>
                    <div class="btn-admin">
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct('${prd.id}')">
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="editProduct('${prd.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                </td>
            </tr>`
    })
}

btnCancel.addEventListener('click', () => {

    productsForm.reset()
    editID = undefined
    btn.innerText = 'Agregar producto'
    btn.classList.remove('btn-success')
})

closeModal.addEventListener('click', () => {

    productsForm.reset()
    editID = undefined
    btn.innerText = 'Agregar producto'
    btn.classList.remove('btn-success')
})

filterInput.addEventListener('keyup', (event) => {

    const search = event.target.value.toLowerCase()

    const result = products.filter((product) => {

        const title = product.title.toLowerCase()

        if(title.includes(search)) {
            return true
        }
        return false
    })
    paintTable(result)
})

const deleteProduct = (idToSearch) => {

    Swal.fire({

        title: 'Borrar producto',
        icon: 'error',
        text: 'Realmente desea elminar el producto?',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Borrar',

    }).then((result) => {

        if (result.isConfirmed) {

            const findedIndex = products.findIndex((productFindIndex) => {

                if (productFindIndex.id === idToSearch) {
                    return true
                }
                return false
            })

            products.splice(findedIndex, 1)
            paintTable(products)
            localStorage.setItem('items', JSON.stringify(products))

            Swal.fire('Borrado', 'El producto fué borrado', 'success')
        }
    })
}


const editProduct = function (receivedID) {

    const productToEdit = products.find((prod) => {

        if (prod.id === receivedID) {
            return true
        }
        
    })

    if (!productToEdit) return

    editID = productToEdit.id

    const elements = productsForm.elements

    elements.image.value = productToEdit.image
    elements.title.value = productToEdit.title
    elements.description.value = productToEdit.description
    elements.price.value = productToEdit.price
    elements.category.value = productToEdit.category

    btn.innerText = 'Editar producto'
    btn.classList.add('btn-success')
}

function obtainedDate() {
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

    const formatedDate = `${year}-${month}-${day}`

    return formatedDate
}