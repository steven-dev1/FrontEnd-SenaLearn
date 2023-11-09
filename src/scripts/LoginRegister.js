const desktopRegisterBtn = document.getElementById('desktop-register-btn')
const registerInputPassword = document.getElementById('input-repeat-password-register')
const span = document.getElementById('span-repeat-password')

// desktopRegisterBtn.addEventListener('click', () => {
    
// })

function onChangePassword() {
    const valueFirstInput = document.getElementById('input-password-register').value
    const valueRegister = registerInputPassword.value
    if (valueRegister != valueFirstInput) {
        span.textContent = "Las contraseñas no coinciden"
    }
}

