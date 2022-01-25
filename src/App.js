import { useEffect, useState } from 'react';
import {Button} from './styles/Button.styled.js';
import { Container ,Main} from './styles/Container.styled.js';
import axios from 'axios';
import './App.css';

function App() {
  const [advice,setAdvice] = useState('');

  useEffect(() => {
     fetchAdvice();
  },[])
  const fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
      .then(res => {
          const {advice} = res.data.slip;
          setAdvice(advice)
      }).catch(err => {
          console.log(err)
      })
  }
  return (
    <Main>
     <Container>
       <h1>{advice}</h1>
       <Button onClick = {fetchAdvice}>
         NEW ADVICE!
       </Button>
     </Container>
    </Main>
  );
}

export default App;
