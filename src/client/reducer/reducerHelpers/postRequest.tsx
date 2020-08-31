/* eslint-disable no-console */
export default function postRequest(api:string, body:unknown):void {
  fetch(`${api}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.log('an error occured trying to post info');
      throw err;
    });
}
