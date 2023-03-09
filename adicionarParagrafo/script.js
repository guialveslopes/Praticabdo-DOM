function adicionar() {
    const adicionar = document.querySelector('#adicionar')

    const p = document.createElement('p')

    p.innerText = 'Minha primeira manipulação DOM'

    adicionar.appendChild(p)
}