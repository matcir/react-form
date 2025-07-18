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

  const [newArticle, setNewArticle] = useState("")
  const [articles, setArticles] = useState(initial_articles)
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedName, setEditedName] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    setArticles([...articles, {id:(articles.length), name:newArticle, description:""}])
  }

  function handleDeleteClick(index){
    articles.splice(index, 1)
    setArticles([...articles])
    
  }

  function handleEditClick(index){
    setEditingIndex(index)
    setEditedName(articles[index].name)
  }

  function handleSaveClick(index) {

    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...updatedArticles[index],
      name: editedName
    }
    setArticles(updatedArticles)
    setEditingIndex(null); 
}

  return (
    <>
      <div className='container'>
          <h1>Articoli</h1>

          <ul className='mt-3 list-group'>
            {articles.map((article,index) => (
              <li key={index} className='d-flex justify-content-between list-group-item'>{editingIndex === index ? 
              (
                 <>
                  <input type="text" className="form-control" value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                  <button className='btn btn-success' onClick={() => handleSaveClick(index)}>Salva</button>
                  <button className='btn btn-secondar' onClick={() => setEditingIndex(null)}>Annulla</button>
                </>

              ) : (
                <>
                {article.name} 
                <div>
                  <button className='btn'><i className='bi bi-pencil'onClick={() => handleEditClick(index)}></i></button> 
                  <button className='btn'><i className='bi bi-trash'onClick={() => handleDeleteClick(index)}></i></button> 
                </div>
                </>
              )}
            </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <div className='d-flex mt-2'>
              <input type="text" className='form-control' placeholder='inserisci un nuovo articolo' value={newArticle} onChange={e => setNewArticle(e.target.value)}/>
              <button type='submit' className='btn btn-primary '>Save</button>
            </div>
          </form>
      </div>
    </>
  )
}

export default App
