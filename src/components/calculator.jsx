import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function calculator() {
    const [Data, SetData] = useState([])
    const btn = (event) => {
        SetData(Data + event.target.value)
    }
    const Clear = () => {
        SetData('')
    }
    const Result = () => {

        try {
            
           SetData(eval(Data))
    

        }
        catch {
            toast.error("Error", {
                position: toast.POSITION.TOP_CENTER
            })

        }
    }

    const sin = () => {
        let SinResult = Math.sin((Math.PI * Data / 180))
         SetData(SinResult)
    }
    const tan = () => {
        let TanRessult = ((Math.PI*Data/180))
        SetData(TanRessult)
    }
    const cos = () => {
        let CosRessult = Math.cos((Math.PI*Data/180))
        SetData(CosRessult)
    }
    const percentage = () => {
        let result = (Data) / 100
        SetData(result)
    }
    const plusorminus=()=>{
        let result=Data*-1
        SetData(result)
    }
    const Back = () => {
        let Back = Data.slice(0,-1)
        console.log(Back);
        SetData(Back)
    }

    return (
        <div>
            <h1 className='heading'>Calculator</h1>
            <div className='main-div'>
                <div className='cal-div'>
                    <input className='input' type="text" placeholder='' value={Data} />
                    <div className='main-btn'>
                        <button className='btn btn3' onClick={Clear} >AC</button>
                        <button className='btn btn3' onClick={Back}  >C</button>
                        <button className='btn btn3' value='sin' onClick={percentage}  >%</button>
                        <button className='btn btn1'  onClick={plusorminus}   >+/-</button>
                        <button className='btn ' onClick={sin}   >sin</button>
                        <button className='btn ' onClick={tan}   >tan</button>
                        <button className='btn ' value='' onClick={cos} >cos</button>
                        <button className='btn btn1' value='/' onClick={btn}>/</button>
                        <button className='btn' value='7' onClick={btn}  >7</button>
                        <button className='btn' value='8' onClick={btn}  >8</button>
                        <button className='btn' value='9' onClick={btn}  >9</button>
                        <button className='btn btn1' value='*' onClick={btn}>x</button>
                        <button className='btn' value='4' onClick={btn}  >4</button>
                        <button className='btn' value='5' onClick={btn}  >5</button>
                        <button className='btn' value='6' onClick={btn}  >6</button>
                        <button className='btn btn1' value='-' onClick={btn}  >-</button>
                        <button className='btn' value='1' onClick={btn}  >1</button>
                        <button className='btn' value='2' onClick={btn}  >2</button>
                        <button className='btn' value='3' onClick={btn}  >3</button>
                        <button className='btn btn1' value='+' onClick={btn}  >+</button>
                        <button className='btn btn2' value='0' onClick={btn}  >0</button>
                        <button className='btn' value='.' onClick={btn}  >.</button>
                        <button className='btn btn1'      onClick={Result} >=</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default calculator