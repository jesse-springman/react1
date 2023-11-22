import Maiusculo from './component/uppercase/uppercase.js';
import Botao from './component/botao/botao.js';
import './App.css';

function App() {
  return (
    <div  className='cont' >
    <Maiusculo  text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus  dolore, tenetur modi enim totam iste nisi facilis inventore sunt provident autem animi quisquam repellat cumque nostrum. Sint, maxime corporis.'>
   </Maiusculo> 


   <Botao label='O botão foi pressionado'></Botao>
  </div>
  );
}

export default App;
