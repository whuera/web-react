import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const url = "http://localhost:8080/users"
    const [users, setUsers] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setUsers(responseJSON)
        console.log(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div className="App">
            Hola Mundo 2!!
            <ul>
                {!users ? 'Cargando....' :
                    users.map((user, index) => {
                            return <li>{user.firstName}</li>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default App;
