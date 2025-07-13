import { useState } from 'react'
import './App.css'
import Card from './Card'

function App(){
  const [cards, setCards] = useState([{title:"Card 1", content:"content"}])

    const CardGenerator=()=>{
      const newObject = {
        title:`Card ${cards.length+1}`,
        content:`Content ${cards.length+1}`
      }
      setCards([...cards, newObject])
    }

  return (
    <>
      <div className='app'>
        <button onClick={CardGenerator}>Card Generator</button>
        <div className='card-container'>
          {cards.map((card, index)=>{
            return (<Card key={index} title={card.title} content={card.content}/>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
