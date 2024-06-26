import styles from './Project.module.css'

import Loading from '../layout/Loading'

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Project() {

    const{ id } = useParams()
    
    const [project, setProject] = useState([])

    useEffect (() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch(err => console.log(err)) 
        
    }, [id])

    return (
        <>
            {project.name ? 
                (<p>{project.name}</p>) : (
                    <Loading/>
                )
            }
        </>

    )
}

export default Project