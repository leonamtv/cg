let wrapper = document.getElementById('wrapper')
for ( let elem of wrapper.children ) 
    elem.addEventListener('click', (event) => { window.open ( elem.id + '/index.html', "_blank" ) })

const dark_button = document.getElementById('dark')
const light_button = document.getElementById('light')

const body = document.body

dark_button.onclick = () => {
    body.classList.remove('light')
    body.classList.add('dark')
}

light_button.onclick = () => {
    body.classList.remove('dark')
    body.classList.add('light')
}

const logo = document.getElementById('logo')
logo.addEventListener('click', (event) => { window.open ( 'https://leonamtv.github.io/leonamtv/', '_blank' ) });