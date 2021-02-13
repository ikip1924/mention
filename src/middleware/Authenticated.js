import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'   
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'

function Authenticated({ children }) {
    const redirect = useHistory()
    const [auth, setAuth] = useRecoilState(authenticated)

    useEffect(() => {
        if (!auth.check) {
            redirect.push('/login')
        }

    }, [auth])
    return children
}

export default Authenticated
