import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Link, redirect } from 'react-router-dom';

function Login() {
    function login1() {
        var username = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const role = "staff";
        authorize(username, password, role);
    }
    function login2() {
        var username = document.getElementById("email1").value;
        console.log(username);
        var password = document.getElementById("password1").value;
        const role = "admin";
        authorize(username, password, role);
    }
    async function authorize(username, password, role) {
        const status = await axios.post("http://localhost:42342/user/login/", {
            email: username,
            password: password,
        }).then((res) => {
            console.log(res.data);
            if (res.data != null) {
                localStorage.setItem("username", res.data.name);
                if (res.data.role != role) {
                    alert("You are not authorized");
                }
                else if (res.data.role == "staff") {
                    window.location.replace("/staff");
                } else if (res.data.role == "admin") {
                    window.location.replace("/admin");
                }
                else {
                    alert("You are not authorized");
                }



            }
            else {
                alert("Invalid credentials");
            }
        })
    }

    return (
        <React.Fragment>
            <div>
                <div className="logo">
                    <img src="assets/images/EAPL.png" height="30px" className="eapllogo" alt="..." />
                    <img src="assets/images/kruger.png" className="partner" alt="..." />
                    <br />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" style={{ color: '#fff' }}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#about" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Products</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#contact" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container-fluid pt-5 loginForm">
                    <div className="card mx-auto border-0 loginCard">
                        <div className="card-header border-bottom-0 bg-transparent">
                            <ul className="nav nav-tabs justify-content-center pt-4" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active text-primary" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login"
                                        aria-selected="true">Staff</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-primary" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register"
                                        aria-selected="false">Admin</a>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body pb-4">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                                    <br />

                                    <h5>Hello, Staff</h5>
                                    <br />
                                    <br />
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="email" placeholder="Email" required autoFocus />
                                        </div>
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
                                        </div>
                                        <br />
                                        <div className="text-center pt-4">
                                            <button type="button" className="btn btn-primary" onClick={login1}>Login</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                                    <br />

                                    <h5>Hello, Admin</h5>
                                    <br />
                                    <br />
                                    <form>

                                        <div className="form-group">
                                            <input type="email" name="email" id="email1" className="form-control" placeholder="Email" required />
                                        </div>
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <input type="password" name="password" id="password1" className="form-control" placeholder="Password" required />
                                        </div>
                                        <br />


                                        <div className="text-center pt-4">
                                            <button type="button" className="btn btn-primary" onClick={login2}>Login</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <p id="invalid"></p>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container-fluid">EAPL&copy;Electronics Automation Private Limited</div>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Login;