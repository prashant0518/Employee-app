import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './login.css';
import { NavLink } from 'react-router-dom';
import Dashboard from './dashboard';
import { login } from '../actions/authActions';
import { userInfo } from '../actions/action';
import { userInfo1 } from '../actions/authActions';

const LoginPage = () => {
    const dispatch = useDispatch()
    const [loginInfo, setLoginInfo] = useState({ userEmail: "", password: "" });
    const [allentries, setAllentries] = useState([]);
    const [error, setError] = useState(false);
    const userRef = useRef(null);
    const passwordRef = useRef(null)
    const Admin = {
        Loginuser: "Test",
        password: "123"
    }
    const submithandle = (e) => {
        e.preventDefault();
        let username = userRef.current.value;
        let passwordInfo = passwordRef.current.value;


        if (username && passwordInfo) {

            dispatch(login({ username, password: passwordInfo }))
            dispatch(userInfo({ username, password: passwordInfo }))
        }
        else {
            setError(true);
        }

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
        <div className="container login p-5 rounded-pill" >
            <div className="row login-row  p-5">
                <div className="col-md-6">
                    <img src="https://image.freepik.com/free-vector/group-business-people-avatar-character_24877-57314.jpg" style={{ width: "35rem" }} alt=""></img>
                </div>
                <div className="col-md-6 mt-5 ">
                    <form action="/login">
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label me-auto " >Username</label>
                            <input type="email" value={loginInfo.userEmail} ref={userRef} className="form-control " required name="username" onChange={(e) => setLoginInfo({ ...loginInfo, userEmail: e.target.value })} id="useremail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpass" className="form-label"> Password</label>
                            <input type="password" value={loginInfo.password} ref={passwordRef} className="form-control" required name="password" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} id="userpass" />
                        </div>
                        <button className="btn btn-primary mt-4" onClick={submithandle}>Login</button>

                        {error ? <p className="mt-3 text-danger">Fill the Login Information</p> : ""}

                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
