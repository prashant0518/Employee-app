

export const login =(data)=> dispatch=>{ 
 localStorage.setItem("login",true)
    dispatch({type:"login",payload:data})
}

export const logout =()=> dispatch=>{ 
    localStorage.removeItem('login')
       dispatch({type:"logout"})
   }