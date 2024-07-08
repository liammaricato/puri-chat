import ollama from 'ollama'
import { useState } from 'react'
import puriImg from '/puri.png'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('Oi, eu sou o Puri! Mande uma mensagem')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setOutputText('')
    setLoading(true)
    setDisabled(true)

    await generateChatResponse(inputText)
    
    setInputText('')
    setDisabled(false)
  }

  async function generateChatResponse(inputText) {
    const message = { role: 'user', content: inputText }
    const response = await ollama.chat({ model: 'puri', messages: [message], stream: true })
  
    for await (const part of response) {
      setLoading(false)
      setOutputText(prevOutputText => prevOutputText + part.message.content)
    }
  }

  function checkSubmit(event) {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
    <>
      <div className='puri-container'>
        <p className='output'>
          {loading && <div className='loading'><div></div><div></div><div></div></div>}
          {outputText}
        </p>
        <img src={puriImg} className="puri" alt="Puri" />
      </div>
      <form onSubmit={handleSubmit}>
        <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={checkSubmit} disabled={disabled}></textarea>
        <input type="submit" disabled={disabled} />
      </form>
    </>
  )
}

export default App
