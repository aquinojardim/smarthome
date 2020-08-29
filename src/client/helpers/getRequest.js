export default function getRequest (api){
  fetch(`${api}`, {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    return data
  })
  .catch(err => {
    console.log('an error occured trying to get info');
    throw err;
  })
}