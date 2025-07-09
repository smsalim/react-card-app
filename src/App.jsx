import './App.css'


function App(){
  const cards = [
    {id : 1, title:"Card 1", content:"content"},
    {id : 2, title:"Card 2", content:"content"},
    {id : 3, title:"Card 3", content:"content"},
    {id : 4, title:"Card 4", content:"content"},
    {id : 5, title:"Card 5", content:"content"}
  ]
  return (
    <>
      <div className='card-container'>
        {cards.map((card)=>{
          return (
          <div key={card.id} className='card'>
          <h1>{card.title}</h1>
          <p>{card.content}</p>
        </div>
        )
        })}
      </div>
    </>
  )
}

export default App
