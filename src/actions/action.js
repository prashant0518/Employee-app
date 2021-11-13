
export const fetchLoad=()=>{
    return{
        type:"LOADING_F"
    }
}

export const setemployees = (items) => {
    return {
        type: "SET_EMPLOYEES",
        payload: items
    }

}

export const setsingleEmployee = (items) => {
    return {
        type: "SET_SINGLE_EMP",
        payload: items
    }

}

export const removeSingleitem = (id) => {
    return {
        type: "REMOVE_SINGLE_ITEM",
        payload: id
    }

}

export const removeitems = (id) => {
    return {
        type: "REMOVE_ITEMS",
        payload: id
    }

}

export const addemployee = (data) => {
    console.log("hi",data)
    return {
        type: "ADD_EMPLOYEE",
        payload:data
     
    }

}

export const editEmployee = (data,id) => {
    console.log("hi",data)
    return {
        type: "EDIT_EMPLOYEE",
        payload:{data,id}
     
    }

}

export const userInfo = (data) => {
    console.log("userinfo",data)
    return {
        type: "USER_INFO",
        payload:data
     
    }

}


