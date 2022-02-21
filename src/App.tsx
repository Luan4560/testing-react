import { useState } from "react"

function App() {
  const [list, setList] = useState(['Luan', 'Cássia', 'Isac'])
  const [newItem, setNewItem] = useState('')

  function addToList() {
    setList(state => [...state, newItem])
  }

  return (
    <>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" />
     <button onClick={addToList}>Adicionar</button>
     <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
     </ul>
    </>
  )
}

export default App
