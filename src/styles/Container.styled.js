import styled from 'styled-components';
//images
import city from '../Images/city.jpg';
import night from '../Images/night.jpg';
import first from '../Images/first.jpg';
import second from '../Images/second.jpg';
import third from '../Images/third.jpg';
import fourth from '../Images/fourth.jpg';
import fifth from '../Images/fifth.jpg';

const arr = [city, night, third, first, second, fourth, fifth];

export const getImage = () => {
      return arr[Math.floor(Math.random() * arr.length)];
}
export const Container = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background-color:whitesmoke;
      padding:
      width:40%;
      min-height:20%;
      border-radius:25px;
      padding:2%;
      font-style:italic;
      font-weight:bold;
      @media only screen and (max-width: 768px) {
        width:80%;
        min-height:40%;
  }
`
export const Main = styled.div`
        height:100vh;
        background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)),url(${(props) => props.f});
        background-size:cover;
        background-position:center;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        font-family: 'Lato', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
       font-family: 'Source Serif 4', sans-serif;
       font-weight:300;
       `