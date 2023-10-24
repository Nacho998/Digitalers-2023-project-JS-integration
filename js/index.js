const productsToPaint = JSON.parse(localStorage.getItem('items')) || []
const amdContainer = document.querySelector('.amd-container')
const intelContainer = document.querySelector('.intel-container')


productsToPaint.forEach((prd) => {

    if(prd.category === 'CPU AMD') {

        amdContainer.innerHTML +=
        `
        <article class="custom-card">
            <div class="custom-card-header">
                <figure>
                    <img src="${prd.image}" alt="${prd.title}">
                </figure>
                <div class="custom-card-img-info">
                    <h2>${prd.category}</h2>
                    <p>${prd.description}</p>
                </div>
            </div>
            <div class="custom-card-main">
                <h2>${prd.title}</h2>
                <div class="custom-card-description">
                    <p>Descripción:</p>
                    <p>${prd.description}</p>
                </div>
                <div class="custom-card-prices">
                    <div class="custom-card-payments">${prd.creationDate}</div>
                    <div class="custom-card-price">$${prd.price}</div>
                </div>
            </div>
            <div class="custom-card-footer">
                <button class="custom-card-details"><a href="/pages/description-product/description.html?identifier=${prd.id}">Ver detalles</a></button>
                <button class="custom-card-buy"><a href="">Comprar</a></button>
            </div>
        </article>
        `
    }

    if(prd.category === 'CPU INTEL') {

        intelContainer.innerHTML +=
        `
        <article class="custom-card">
            <div class="custom-card-header">
                <figure>
                    <img src="${prd.image}" alt="${prd.title}">
                </figure>
                <div class="custom-card-img-info">
                    <h2>${prd.category}</h2>
                    <p>${prd.description}</p>
                </div>
            </div>
            <div class="custom-card-main">
                <h2>${prd.title}</h2>
                <div class="custom-card-description">
                    <p>Descripción:</p>
                    <p>${prd.description}</p>
                </div>
                <div class="custom-card-prices">
                    <div class="custom-card-payments">${prd.creationDate}</div>
                    <div class="custom-card-price">$${prd.price}</div>
                </div>
            </div>
            <div class="custom-card-footer">
                <button class="custom-card-details"><a href="/pages/description-product/description.html?identifier=${prd.id}">Ver detalles</a></button>
                <button class="custom-card-buy"><a href="">Comprar</a></button>
            </div>
        </article>
        `
    }
});