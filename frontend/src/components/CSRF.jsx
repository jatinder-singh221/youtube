import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function CSRF() {
    const [csrfValue, setcsrfValue] = useState('')

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000')
        setcsrfValue(getCookie('csrftoken'))
    }, [])
    return (
        <input type="hidden" name = 'csrfmiddlewaretoken' value={csrfValue}  />
    )
}
