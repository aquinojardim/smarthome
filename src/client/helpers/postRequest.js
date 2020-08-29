export default function postRequest (api, body) {
  fetch(`${api}`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(data => {
    return data
  })
  .catch(err => {
    console.log('an error occured trying to post info');
    throw err;
  })
}