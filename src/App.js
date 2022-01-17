import { useState, useEffect } from 'react';
import './App.css';

function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [userName, setUserName] = useState("");
const [message, setMessage] = useState("");


useEffect( () => {
  fetch(`https://8ball.delegator.com/magic/JSON/Is this true sup?`)
    .then(res => res.json())
    .then((jsonRes) => {
      setMessage(jsonRes.magic.answer);
    })
}, []);



  useEffect(() => {
    
    if (loggedIn) {
      // Imagine a call to a database here to get user info
      // Once that comes back (ie. once the promise resolves!), we set the user's name into state, to trigger a re-render and say SUP:
      setUserName("Solomon!");
    } else {
      // This happens if the user is logged OUT, so here, we set the userName state to be an empty string:
      setUserName("");
    }
 
  }, [loggedIn] );




// const handleClick = () => setLoggedIn( !loggedIn );


  return (
    <div className="App">
      <h1>Sup!</h1>

      <h3>Is this true sup!</h3>
      <p>The oracle says: {message}</p>

      <button onClick={() => setLoggedIn(!loggedIn) }>
        {loggedIn ? "Log out" : "Log In"}
      </button>


      {
        loggedIn
        ? <p>Sup! {userName}</p>
        : <p>Please log in so I can say whats up!</p>
      }

      
    </div>
  );
} 

export default App;
