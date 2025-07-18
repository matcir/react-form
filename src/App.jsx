import { useState } from 'react'

function App() {

  const articles = [
    {
      id: 1,
      name: "apple",
      description: "fruit"
    },
    {
      id: 2,
      name: "bread",
      description: "bakery"
    },
    {
      id: 3,
      name: "water",
      description: "standard"
    },
    {
      id: 4,
      name: "sausage",
      description: "meat"
    },
    {
      id: 5,
      name: "cucumber",
      description: "vegetable"
    }
  ]

  return (
    <>
      <div className='container'>
          <h1>Articoli</h1>
          <ul className='mt-3 list-group'>
            {articles.map((article) => (
              <li key={article.id} className='list-group-item'>{article.name}</li>
            ))}

          </ul>
      </div>
    </>
  )
}

export default App
