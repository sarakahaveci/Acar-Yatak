  
import React, { useState, useEffect } from 'react'
import Login from './Login'
import AdminPanel from './AdminPanel'
import axios from 'axios'
import useBaseUrl from '../../useBaseUrl'

const Admin = () => {

    const baseUrl = useBaseUrl();

    const [ isLogedin, setisLogedin ] = useState(false);

    useEffect(() => {
        verificationCheck()
    })

    const verificationCheck = async() =>{

        const config = {
          headers :{
            auth_token : localStorage.getItem("auth_token")
          }
        }
        const fetchedData = await axios.post(`${baseUrl}/login/verify`, {}, config )
        if(fetchedData.data.message === 'true'){
          setisLogedin(true)
        }
    }

    return (
        <>
            {
                isLogedin ? <AdminPanel/> : <Login/>
            }
        </>
    )
}

export default Admin