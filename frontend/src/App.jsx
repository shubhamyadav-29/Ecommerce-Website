import { useEffect,useState } from "react";

function App(){
  const [message,setMessage]=useState('');


useEffect(() => {
   fetch('http://localhost:8000/api')
  .then(response => response.json())
  .then(data => setMessage(data.message))
  .catch(error => console.error('Error Fetching message:',error))
},[]);

return(
  <div>
    <h1>Message From backend:</h1>
    <p>{message || 'Loading....'}</p>
  </div>
)
}

export default App;