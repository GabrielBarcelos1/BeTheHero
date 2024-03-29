import React, { useState, useEffect } from 'react'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'

export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(respose => {
            setIncidents(respose.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(incidents.filter(incidents => incidents.id !== id))
        }catch(err){
            alert("Erro ao deletar o caso, tente novamente")
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} />
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
                <button  onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id} >
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL' }).format(incident.value)}</p>
                        <button onClick={()=>handleDeleteIncident(incident.id)} type="button"  style={{background: 'white'}}>
                            <FiTrash2 size={20} color="#a8a8b3" style={{background: 'white'}} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}