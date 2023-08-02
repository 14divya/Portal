import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function Admin() {

    var data1 = localStorage.getItem("username");
    var [productDetails, setProductDetails] = useState([]);

    const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    function handleInsertion() {
        getProductsTitles("insert");
    }

    function handleModification() {
        getProductsTitles("modify");
    }

    function handleDeletion() {
        getProductsTitles("delete");
    }

    async function getProductsTitles(op) {
        await axios.get("http://localhost:42342/product/operation/" + op)
            .then(res => {
                console.log(res.data);
                setProductDetails(res.data);
                productDetails = res.data;
                console.log(productDetails);
            })
    }

    var products = productDetails;

    const proDetails = productDetails.map((product, index) => {
        return <div>
            <div key={index}>
                <br />
                <li className="list-group-item" style={{ textAlign: 'left', padding: '20px', margin: 'auto', fontSize: '20px' }}>{product.title}
                    <div style={{ float: 'right', margin: 'auto', display: 'inline-block', top: '0px', right: '0px' }}>
                        <Link to={{ pathname: '/product', search: product._id }}><button type="button" className="btn btn-primary" id="toggleForm">View</button></Link>
                    </div>
                </li>
                <br />
            </div>
        </div>
    })

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
                            <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link to="/login"><button className="btn btn-primary " style={{ width: '150px' }} type="button">Log out</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <div className="container">
                    <h2>Welcome {data1}</h2>
                    <br />
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ width: '100%' }}>
                                <img src="/assets/images/add_product.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                                <div className="card-body">
                                    <Button className="card-title" onClick={handleInsertion} >View Insertions</Button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="col">
                            <div className="card" style={{ width: '100%' }}>
                                <img src="assets/images/update_image.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                                <div className="card-body">
                                    <Button className="card-title" onClick={handleModification}>View Modifications</Button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="col">
                            <div className="card" style={{ width: '100%' }}>
                                <img src="assets/images/delete_product.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                                <div className="card-body">
                                    <Button className="card-title" onClick={handleDeletion}>View Deletions</Button>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <Link to='/products'><Button style={{ backgroundColor: 'orange', color: 'black' }}>View all products&nbsp;&nbsp;<i className='fa fa-arrow-right' /></Button></Link>
                <br />
                <br />
                <div className="col-md-12">
                    <h2 className="h2" id="productTitle"></h2>
                    <ul id="productList">
                        {proDetails}
                    </ul>
                </div>
                <footer>
                    <div className="container-fluid">EAPL&copy;Electronics Automation Private Limited</div>
                </footer>
            </div>
        </React.Fragment>
    )
}
export default Admin;