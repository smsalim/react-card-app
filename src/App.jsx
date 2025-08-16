import { useState } from 'react'
import Card from './Card'
import Form from './Form'

function App(){
  const [cards, setCards] = useState([])

  const CardGenerator = (name, age) => {
    const newObject = {
      title: `${name}`,
      content: `${age}`
    }
    setCards([...cards, newObject])
  }

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center py-8">
      <div className="w-full max-w-md mb-8">
        <Form CardGenerator={CardGenerator} />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  )
}

export default App
