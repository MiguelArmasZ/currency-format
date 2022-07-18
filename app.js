const $ = (element) => document.querySelector(element)

const form = $('.form')
const input = $('.input')
const result = $('.result')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const amount = Number(input.value).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
  })

  result.innerHTML = amount
  input.value = ''
})
