const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const userInfo = document.querySelector('.user-name')
const userAction = document.querySelector('.user-action')
const navLink = document.querySelector('.navbar-nav')

userInfo.innerText = currentUser ? currentUser.fullName : ''

if (currentUser) {

    userAction.innerHTML = `<img src="/assets/images/user-icon.png" alt="user-logo">`
    userAction.innerHTML += `<button class="btn btn-logout" onclick="logout()">Logout</button>`
    if (currentUser.role === 'ROLE_ADMIN') {

        const admPrdLink = document.createElement('li')
        admPrdLink.classList.add('nav-item')
        admPrdLink.id = 'nav-adm-prd'

        const admPrdLink2 = document.createElement('li')
        admPrdLink2.classList.add('nav-item')
        admPrdLink2.id = 'nav-adm-prd2'

        const url = window.location.pathname

        const link = document.createElement('a')
        link.classList.add('nav-link')
        link.href = '/pages/admin/admin-product/admin-product.html'
        link.innerText = 'PRODUCTOS'

        if(url.includes('admin-product.html')) link.classList.add('item-active')
            
        const link2 = document.createElement('a')
        link2.classList.add('nav-link')
        link2.href = '/pages/admin/admin-user/admin-user.html'
        link2.innerText = 'USUARIOS'

        if(url.includes('admin-user.html')) link2.classList.add('item-active')

        admPrdLink.appendChild(link)
        admPrdLink2.appendChild(link2)
        navLink.appendChild(admPrdLink)
        navLink.appendChild(admPrdLink2)

    }

} else {

    userAction.innerHTML = `<a class="btn btn-login" href="/pages/login/login.html">Login</a>`

}

function logout() {

    localStorage.removeItem('currentUser')
    setTimeout(() => {
        window.location.href = '/'
    }, 500)

}