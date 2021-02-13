import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'   
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'

function Guest({ children }) {
    const redirect = useHistory()
    const [auth, setAuth] = useRecoilState(authenticated)

    useEffect(() => {
        if (auth.check) {
            redirect.push('/')
        }

    }, [auth])
    return children
}

export default Guest
