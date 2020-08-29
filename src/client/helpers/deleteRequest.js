export const deleteRequest = (api, body) => {
  fetch(`${api}`, {
    method: "DELETE",
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