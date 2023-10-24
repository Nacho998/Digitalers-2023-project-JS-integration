const products = JSON.parse(localStorage.getItem('items'))
const titlePag = document.querySelector('#titlePag')
const wrapper = document.querySelector('.wrapper-detail')
const search = window.location.search
const params = new URLSearchParams(search)
const idParams = params.get('identifier')

obtainProduct(idParams)

function obtainProduct(idToSearch) {

    const product = products.find(prd => {

        if (prd.id === idToSearch) {
            return true
        }
    })

    if (!product) {

        wrapper.innerHTML =
            `
        <div class="page-not-found">
            <img src="/assets/images/404.png"></img>
            <a href="/">Volver a inicio</a>
        </div>
        `
        return
    }

    titlePag.innerText = `CPU-Dealers - ${product.title}`

    wrapper.innerHTML =
        `
        <div class="product-detail">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-detail">
            <h1>${product.title}</h1>
            <span></span>
            <div class="product-price">
                <h2>$${product.price}</h2>
                <div>
                    <p>12 cuotas de: <strong>$${twelveFee()}</strong></p>
                    <p>6 coutas de: <strong>$${sixFee()}</strong></p>
                </div>
            </div>
            <span></span>
            <div class="product-description">
                <h4>DESCRIPCIÓN</h4>
                <p>${product.description}</p>
            </div>
            <span></span>
            <div class="product-actions">
                <a href="">COMPRAR</a>
                <a href="">AGREGAR AL CARRITO</a>
            </div>
        </div>
        `

        function twelveFee() {

            const fee = product.price / 12
            const fee2 = fee.toFixed(2)

            return fee2
        }

        function sixFee() {

            const fee = product.price / 6
            const fee2 = fee.toFixed(2)

            return fee2
        }
}