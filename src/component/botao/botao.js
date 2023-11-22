import './botao.css'

const Botao = ({label}) =>{

    const alerta=(conteudo)=>{
        alert(`A label desse botão é : ${conteudo}`)
      }


    return(
        <button className='btn' onClick={()=>alerta(label)}>Clique Aqui</button>
    )
}

export default Botao