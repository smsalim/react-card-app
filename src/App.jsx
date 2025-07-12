import './App.css'
import Card from './Card'

function App(){
  const cards = [
    {id : 1, title:"Card 1", content:"content"},
    {id : 2, title:"Card 2", content:"content"},
    {id : 3, title:"Card 3", content:"content"},
    {id : 4, title:"Card 4", content:"content"},
    {id : 5, title:"Card 5", content:"content"}
  ]
    const CardGenerator=()=>{
      cards.push({title:"Card Title",content:"Content"})
      console.log(cards)
    }

  return (
    <>
      <div className='card-container'>
        {cards.map((card)=>{
          return (
            <Card key={card.id} title={card.title} content={card.content}></Card>
        )
        })}
      </div>
      <button onClick={CardGenerator}>Card Generator</button>
    </>
  )
}

export default App
