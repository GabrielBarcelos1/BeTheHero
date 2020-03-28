import React, { useState } from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link,useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [nameError,setNameError] = useState('clean')
    const [emailError,setEmailError] = useState('clean')
    const [whatsappError,setWhatsappError] = useState('clean')
    const [cityError,setCityError] = useState('clean')
    const [ufError,setUfError] = useState('clean')

    const history = useHistory()

    async function handleRegister(e) {
       
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        try{
        const response = await api.post('ongs', data)
        alert(`Seu id de acesso ${response.data.id}`)
        history.push('/')
        }catch{
            if(name==''){
            setNameError('error')
            }
            if(email==''){
            setEmailError('error')
            }
            if(whatsapp=='' || whatsapp.length<11){
            setWhatsappError('error')
            }
            if(city==''){
            setCityError('error')
            }
            if(uf==''||uf.length!=2 ){
            setUfError('error')
            }
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua Ong</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                    Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        className={nameError}
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                    className={emailError}
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                    className={whatsappError}
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                        className={cityError}
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                        className={ufError}
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}