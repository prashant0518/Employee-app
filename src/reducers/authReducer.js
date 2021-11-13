
const initialstate = {
    employees: [],
    loading: true,
    loginInfo:{},
    authorized :localStorage.getItem('login')?true:false
}
export const authReducer = (state = initialstate, { type, payload }) => {

    switch (type) {
        case 'login':
     
       return {...state,authorized:true,loginInfo:payload}

       case 'logout':
     
       return {...state,authorized:false}
        default:
            return state
    }


}