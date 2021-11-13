import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeitems, removeSingleitem, setemployees, fetchLoad} from '../actions/action';
import { MdCancel } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import AddEmployee from './addemployee';
import Edit from './edit';
import { Link } from 'react-router-dom';
import './login.css';
import { logout } from '../actions/authActions';

const Dashboard = () => {
    const user = useSelector(state => state.allreducer.employees);
    const userInfo = useSelector(state => state.allreducer.loginInfo);
    const userInfo1 = useSelector(state => state.authReducer.loginInfo);
    const loading = useSelector(state => state.allreducer.loading);




    const { authorized } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();
    const logoutF = () => {
        dispatch(logout());

    }
    // const dispatch = useDispatch();
    const fetchData = async () => {
        const resp = await axios.get("https://api.github.com/users").catch((err) => console.log(err));
        console.log(resp.data);
        dispatch(setemployees(resp.data))
        dispatch(fetchLoad());
       

    }
    useEffect(() => {
        fetchData();
    }, [])
    const clickhandler = (id) => {
        dispatch(removeSingleitem(id));
    }
    if(loading) return <h1>Loading...</h1>

    if (user.length == 0) {
        return <div className="container text-danger fs-2 mt-5">List is empty</div>
    }
    return (
        <div className='container  '>
            
            <h2 className="mt-5 display-4">Employees Details</h2>
            <div className=" ">
                <p>

                    <button className="btn fs-3 about  text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <FaUserAlt />
                    </button>
                </p>
                <div className="collapse about-info" id="collapseExample">
                    <div className="card card-body d-flex">
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/1?v=4" className="img-about rounded-circle mb-2"></img>
                        </div>
                        <div>
                            <h6 className="text-capitalize display-6 fs-4">{userInfo1.username}</h6>
                        </div>
                        <a className="btn btn-secondary" onClick={logoutF}>{authorized ? "Logout" : "Login"}</a>

                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="mb-5 d-flex justify-content-center">
                    <div>
                        <button type="button" className="btn btn-danger me-4" onClick={() => dispatch(removeitems())}>Clear List</button>
                    </div>
                    <div>
                        <AddEmployee />
                    </div>

                </div>

                {user.map((item) => {
                    const { login, id, url, html_url, avatar_url, followers_url,following_url } = item;
                    console.log("id", id)
                    return <div className="col-md-12 d-flex justify-content-around mb-5 p-3 me-2  " style={{ border: ".05rem solid grey", boxShadow: "3px 5px 15px rgb(41, 146, 207)" }} key={id}>

                        <div>
                            <img src={avatar_url} className="card-img-top  rounded-circle " style={{ width: "8rem" }} alt="..." />
                            <h5 className="text-capitalize  mt-3"><i>{login}</i></h5>
                        </div>
                        <a href={followers_url} className="text-decoration-none text-muted fs-4 display-4display-4">Followers</a>
                        <a href={following_url} className="text-decoration-none text-muted fs-4 display-4display-4">Following</a>
                        <div>
                            <div className="d-flex align-items-md-start mb-4">

                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href={html_url} className="btn btn-outline-secondary mb-2 me-2" >Github Link</a>
                                <Link to={`/employee/${id}`}>  <a className="btn btn-outline-danger" >More Details</a></Link>



                            </div>
                            <div className="ms-3">
                                <Edit num={id} />

                            </div>
                            <div>

                                <button type="button" className="mt-3 border-0 fs-3 text-dark" onClick={() => clickhandler(id)} ><MdCancel /></button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Dashboard
