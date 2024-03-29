import React ,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './style.css'
import api from '../../services/api'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
export default function Logon() {
    const [email, setEmail] = useState('')
    const [password,setPasword] = useState('')
    const [classError,setClassError] = useState('hidden')
    const history = useHistory()
    

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions',{ email, password })

            const {id} = await api.get(`ong/${email}`)

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        }catch(err){
            setClassError('error')
        }

    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input
                    className={classError}
                     placeholder="Digite seu email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                      />
                      <input
                    className={classError}
                    type='password'
                     placeholder="Digite sua senha"
                     value={password}
                     onChange={e => setPasword(e.target.value)}
                      />
                      <div className={classError} >Login Inválido, tente novamente</div>
                    <button type="submit" className="button">Entrar</button>
                <Link className="back-link"to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />

        </div>
    )
}