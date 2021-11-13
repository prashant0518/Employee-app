import React, { useState,useEffect, useRef } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle'
import { editEmployee } from '../actions/action';

const Edit = ({ num }) => {
    const subRef = useRef(null);
    const user = useSelector(state => state.allreducer.employees);
    const dispatch = useDispatch();
     console.log("num",num)
    const singleUser = user.find((el) => el.id === num) || {}
    console.log(num, singleUser);

    const [editEmployeeInfo, setEditEmployeeInfo] = useState(singleUser);

    useEffect(() => {
        setEditEmployeeInfo(singleUser)
        console.log("a");
 }, [JSON.stringify(singleUser),num])

    const arr = Object.keys(singleUser);
    const editSubmit = (e) => {
        e.preventDefault();
        if (editEmployeeInfo.login) {
            dispatch(editEmployee(editEmployeeInfo, num));

        }
    }

   
   

    console.log("arr", arr);

    return (
        <div className="container">
            <div ref={subRef}>
            <button type="button" className="mt-3 border-0 fs-3  me-3"  data-bs-toggle="modal" data-bs-target={`#edit${num}`} ><AiTwotoneEdit /></button>
            </div>
            <div className="modal fade" id={`edit${num}`} >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Employee Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={editSubmit}>
                                {arr.map((item) => {
                                    console.log(editEmployeeInfo[item])
                                    return <div className="mb-3">
                                        <label htmlFor={item} className="form-label text-capitalize" >{item}</label>
                                        <input type="text" className="form-control" id={item} value={editEmployeeInfo[item]} onChange={(e) => setEditEmployeeInfo({ ...editEmployeeInfo, [item]: e.target.value })} />
                                        {item == "login" ? <div id="emailHelp" className="form-text text"> mandatory</div> : ""}
                                    </div>

                                })}

                                <button type="submit" className="btn btn-success me-3" data-bs-dismiss="modal">Submit</button>
                                <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>


                            </form>







                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit
