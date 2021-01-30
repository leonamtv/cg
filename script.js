let wrapper = document.getElementById('wrapper')

for ( let elem of wrapper.children ) 
    elem.addEventListener('click', (event) => { window.open ( elem.id + '/index.html', "_blank" ) })

const dark_button = document.getElementById('dark')
const light_button = document.getElementById('light')

const body = document.body

const set_dark =  () => {
    localStorage.setItem('theme', 'dark')
    body.classList.remove('light')
    body.classList.add('dark')
}

const set_light = () => {
    localStorage.setItem('theme', 'light')
    body.classList.remove('dark')
    body.classList.add('light')
}

let theme = localStorage.getItem('theme')

if ( theme ) {
    if ( theme == 'dark' ) set_dark()
    else if ( theme == 'light' ) set_light()
}

dark_button.onclick = set_dark
light_button.onclick = set_light

const logo = document.getElementById('logo')
logo.addEventListener('click', (event) => { window.open ( 'https://leonamtv.github.io/leonamtv/', '_blank' ) });