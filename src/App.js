import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

const URL = 'https://api.jokes.one/jod'

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
     // console.log(response)
    const joke = response.data.contents.jokes[0].joke
    setTitle(joke.title)
    setText(joke.text)

    }). catch(error=>{
      console.log(error)
      alert("retrieving joke failed")
    })
    
  }, [])
  
  return (
    <div className="App">
     <h3>joke of the day</h3> 
     <h4>{text}</h4>
     <h4>{title}</h4>
    </div>
  );
}

export default App;
