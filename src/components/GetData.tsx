
const DataAtual = (props) => {


  function dataAtual(){
    const now = new Date();
    const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    const data =  ("Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() );
    
    return data
  }

  return (

    <>
    {dataAtual()}
    </>

  )

}
export default DataAtual
