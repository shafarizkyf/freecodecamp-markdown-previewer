import { useEffect, useState } from "react";
import marked from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

marked.setOptions({
  breaks: true
});

const App = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchSample();
  }, [])

  const fetchSample = async () => {
    const response = await fetch('./markdown.txt');
    const data = await response.text();
    setInput(data);
  }

  const handleChange = ({target}) => {
    setInput(target.value);
  }

  return (
    <div id="app">
      <textarea id="editor" onChange={handleChange} value={input}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(input))}} />
    </div>
  )
}

export default App;
