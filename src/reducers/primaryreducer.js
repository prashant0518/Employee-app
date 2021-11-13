


const initialstate = {
    employees: [],
    loading: true,
    loginInfo:{}
}

export const setemployeereducer = (state = initialstate, { type, payload }) => {
    if (type == "SET_EMPLOYEES") {

        return { ...state, employees: payload }
    }
 if(type=="LOADING_F"){
        return{...state,loading:false}
    }
if(type=="REMOVE_SINGLE_ITEM"){
    console.log("a");
    let newItems = state.employees.filter((item) => item.id !== payload);
    return { ...state, employees: newItems }
}
if(type=="REMOVE_ITEMS")
{
    return { ...state, employees:[] }

}
if(type=="EDIT_EMPLOYEE")

{
    let index = state.employees.findIndex((el)=>el.id==payload.id)
    if(index>-1)return {...state,employees:[...state.employees.slice(0,index),{...state.employees[index],...payload.data},...state.employees.slice(index+1)]}
     else return state

}
if(type=="ADD_EMPLOYEE"){
    console.log("add employee",payload)

    let newEmployees = [payload,...state.employees]
    console.log(newEmployees);
    return {...state,employees:newEmployees}
    }
if(type=="USER_INFO"){
    return {...state,loginInfo:payload}

    }

    return state
}


// export const addemployeeReducer =(state=initialstate,{type})=>{

// return state
// }

// export const removeitems = (state = initialstate, { type }) => {
//     switch (type) {
//         case "REMOVE_ITEMS":


//         default:
//             return state
//     }
// }

// export const removesinglereducer = (state = initialstate, { type, payload }) => {
//     switch (type) {


//         case :
           


//         default:
//             return state
//     }
// }