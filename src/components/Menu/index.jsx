import { useState , useEffect } from "react";
import styles from './menu.module.css'

export default ()=>{
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [click, setClick] = useState(0)
    const [IMC, setIMC] = useState(0)
    const [resultado, setResultado] = useState(false)


    useEffect(()=>{
        setIMC((peso)/(altura*altura/10000))
        
    },[peso,altura])

    useEffect(()=>{
        console.log(IMC)
        setResultado(!resultado)
    },[click])


    return(
        <div className={styles.menu}>
            <div className={styles.menu__item}>
                <input className={styles.input} type="number" name="" id="" placeholder="Seu peso (kg)" onChange={evento=>{setPeso(parseInt(evento.target.value))}}/>
            </div>
            <div className={styles.menu__item}>
                <input className={styles.input} type="number" name="" id="" placeholder="Sua altura (cm)" onChange={evento =>{setAltura(parseInt(evento.target.value))}}/>
            </div>
            <button onClick={()=>{setClick(click + 1)}} className={styles.button} type="button">Calcular IMC</button>
            {resultado === true ?
            ( <h1 className={styles.resultado}>Digite para obter o resultado</h1> ):
            (<h1 className={styles.resultado}>Seu IMC é de: {IMC.toFixed(1)}{IMC <= 18.5 && <h1>Baixo Peso</h1> }{IMC > 18.5 && IMC <= 24.9 &&<h1>Peso Normal</h1> }{IMC > 24.9 && IMC <= 29.9 &&<h1>Sobrepeso</h1> }{IMC > 29.9 && IMC <= 34.9 &&<h1>Obesidade Grau I</h1> }{IMC > 34.9 && IMC <= 39.9 &&<h1>Obesidade Grau II</h1> }{IMC > 39.9 &&<h1>Obesidade Grau III</h1> }</h1>)
            }
        </div>
    )
}