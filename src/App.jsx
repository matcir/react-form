import { useState } from 'react'

function App() {

  const initial_articles = [
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

  // const initial_articles = [
  //   "apple",
  //   "bread",
  //   "water",
  //   "sausage",
  //   "cucumber"
  // ]

  const [newArticle, setNewArticle] = useState("")
  const [articles, setArticles] = useState(initial_articles)

  function handleSubmit(e){
    e.preventDefault()
    setArticles([...articles, {id:(articles.length+1), name:newArticle, description:""}])
  }


  return (
    <>
      <div className='container'>
          <h1>Articoli</h1>

          <ul className='mt-3 list-group'>
            {articles.map((article) => (
              <li key={article.id} className='list-group-item'>{article.name}</li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <div className='d-flex'>
              <input type="text" className='form-control mt-2' placeholder='inserisci un nuovo articolo' value={newArticle} onChange={e => setNewArticle(e.target.value)}/>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </form>
      </div>
    </>
  )
}

export default App
