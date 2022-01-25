import { useEffect, useState } from 'react';
import { Button } from './styles/Button.styled.js';
import { Container, Main } from './styles/Container.styled.js';
import axios from 'axios';
import './App.css';
import { getImage } from './styles/Container.styled.js'

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, [])
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        const { advice } = res.data.slip;
        setAdvice(advice)
      }).catch(err => {
        console.log(err)
      })
    getImage();
  }
  return (
    <Main f={getImage}>
      <Container>
        <h1>{advice}</h1>
        <Button onClick={fetchAdvice}>
          NEW ADVICE!
        </Button>
        <h3>Crafted with ❤ by Rahul Yadav</h3>
      </Container>
    </Main>
  );
}

export default App;
