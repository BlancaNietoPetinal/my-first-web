import React, {useEffect, useState} from 'react'

function App() {
  const [sentence, setSentence] = useState('');
  useEffect( () => {
    fetch('/api').then( response => setSentence(response) )
  }, [])
  return (
    <div>
    </div>
  );
}

export default App;
