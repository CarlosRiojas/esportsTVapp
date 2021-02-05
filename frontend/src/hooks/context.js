import { React,useState, createContext, useContext, useEffect } from 'react';

import { currentUserFunc } from '../services/auth';

export const AppContext = createContext()

export const AppCtxProvider = (props)=>{

    const[user,setUser] = useState(null)

    const [userUpdate,setUsrUpdate] = useState(false)
    
    
    useEffect(()=>{
        async function getSessionData() {
            const {data}= await currentUserFunc()
            login(data)
        }
        getSessionData()
        setUsrUpdate(false)

    },[userUpdate])

    const login = (userInfo) => {
        setUser(userInfo)
    }

    const signup = (userInfo)=> {
        setUser(userInfo)
    }

    const logout = () => {
        setUser(null)
    }

    const value= {user, login,logout,signup, setUsrUpdate}

    return <AppContext.Provider {...props} value={value}/>
}

export const useContextInfo = () => useContext(AppContext)