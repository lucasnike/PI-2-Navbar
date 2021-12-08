const menu = document.querySelector('.menu')

menu.onclick = () => {
  console.log('OK')

  const nav = document.querySelector('nav')
  nav.classList.add('unvisible')

  const hiddenList = document.querySelector('.hiden-list')
  hiddenList.classList.remove('unvisible')
  hiddenList.classList.add('list-style')
}

const x = document.querySelector('.x')

x.onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.remove('unvisible')

  const hiddenList = document.querySelector('.hiden-list')
  hiddenList.classList.add('unvisible')
  hiddenList.classList.remove('list-style')
}