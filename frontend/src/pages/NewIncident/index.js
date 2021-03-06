import React, {useState} from 'react'
import logoImg from '../../assets/logo.svg'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from  'react-icons/fi'
import api from '../../services/api'

import './style.css'


export default function Register(){
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [value, setValue] = useState()
    const [titleError, setTitleError] = useState('clean')
    const [descriptionError, setDescriptionError] = useState('clean')
    const [valueError, setValueError] = useState('clean')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    async function handleNewIncidente(e){
        e.preventDefault()
        const data={
            title,
            description,
            value
        }
        try{
          await  api.post('incidents',data,{
              headers:{
                  Authorization: ongId
              }
              
          })
          history.push('/profile')
        }catch(err){
            if(title == undefined){
            setTitleError('error')
            }
            if(description == undefined){
                setDescriptionError('error')
                }
                if(value == undefined ||  isNaN(parseInt(value))){
                    setValueError('error')
                    }
            
        }

    }
    
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className="back-link"to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncidente}>
                    <input 
                    className={titleError}
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                    <textarea
                     className={descriptionError}
                     placeholder="Decrição"
                     value={description}
                     onChange={e=> setDescription(e.target.value)}
                     />
                    <input
                    className={valueError}
                     placeholder="Valor em reais"
                     value={value}
                    onChange={e=> setValue(e.target.value)}
                     />
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}