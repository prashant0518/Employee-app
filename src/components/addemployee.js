import React, { useState,useEffect } from 'react'

import { addemployee } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle'

const AddEmployee = () => {
    const employee = useSelector(state => state.allreducer.employees)
    const dispatch = useDispatch();
    
    let myArr = Object.keys(employee[10]);
    
   let obj= myArr.reduce((acc,cur)=>{
  return {...acc,[cur]:""}
    },{})
    console.log("obj",obj);
  
  const [newEmployeeInfo,setNewEmployeeInfo] = useState(obj)
  const [error, setError] = useState(false);
   
  const handleSubmit =(e)=>{
        e.preventDefault();
        if(newEmployeeInfo.login){
            console.log(newEmployeeInfo);
            const a = newEmployeeInfo
        dispatch(addemployee(a));
        }else{
            setError(true);
            console.log("err");

        }
        // const a = {id:"120",login:"prashant"}
        setNewEmployeeInfo(obj);
       
    }
   
    useEffect(() => {
        let a = setTimeout(() => {
            setError(false);
        }, 3000)
   

        return () => {
            clearTimeout(a);
        }
    }, [error])
    return (
        <div className="container">
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Employee</button>

            <div className="modal fade" id="exampleModal" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Employee Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                                
                                <form onSubmit={handleSubmit}>
                                {myArr.map((item) => {
                                    // console.log(editEmployeeInfo[item])
                                    return <div className="mb-3">
                                        <label htmlFor={item} className="form-label text-capitalize" >{item}</label>
                                        <input type="text" className="form-control" id={item} value={newEmployeeInfo[item]} onChange={(e) => setNewEmployeeInfo({ ...newEmployeeInfo, [item]: e.target.value })} />
                                        {item == "login" ? <div id="emailHelp" className="form-text text"> mandatory</div> : ""}
                                    </div>

                                })}
                                <button type="submit" className="btn btn-success me-3" data-bs-dismiss="modal">Submit</button>
                            <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                
                                </form>
                            
                                
                          
                               
                            




                        
                       
                            {/* <button type="button" className="btn btn-primary" onClick={handlesubmit}>Save changes</button> */}
                            {/* {error ? <p className="mt-3 text-danger">Fill the Information</p> : ""} */}
                     
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
