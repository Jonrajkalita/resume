const scriptURL = 'https://script.google.com/macros/s/AKfycbxeJ4Si0QChB3n2C3Ndxd3BOVLsm92lzNxOuuUsHwNaAElaQ-93hn31reRda6Fd4VhL/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Submiting Detailes...."))
  .catch(error => console.error('Error', error.message))
})
