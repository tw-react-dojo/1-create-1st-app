export const getAstronauts = () =>
  fetch('https://api.open-notify.org/astros.json').then(response =>
    response.json()
  )