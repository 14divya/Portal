import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import styled from 'styled-components';

function Product() {
    let location = useLocation();
    console.log(location.search);
    var id = location.search.substring(1);
    console.log(id);
    var [details, setDetails] = useState([]);


    // getProductDetails();

    useEffect(() => {
        axios.get("http://localhost:42342/product/id/" + id)
            .then(res => {
                console.log(res.data);
                details = res.data;
                console.log(details);
                setDetails(res.data);
            })
    }, [])

    const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    const Button1 = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    function openTab(e) {
        window.open(e.target.name);
    }

    function rotationFunc() {
        
        var rot = document.getElementsByClassName('rotation')[0];
        console.log(details[0].rotation);
        for (let i=0;i<details[0].rotation.length;i++) {
            console.log(details[0].rotation[i].substring(45));
            const div = document.createElement('div');
            div.className = 'mySlides';
            var img = document.createElement('img');

            img.style.margin = '0 auto';
            
            div.appendChild(img);
            img.src = details[0].rotation[i].substring(45);
            img.style.width = '100%';
            rot.appendChild(div);

            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 500); // Change image every 2 seconds
            }


        }
    }

    async function onAccept() {
        var title = details[0].title;
        var category = details[0].category;
        var description = details[0].description;
        var features = details[0].features;
        var applications = details[0].applications;
        var images = details[0].images;
        var document = details[0].document;
        var rotation = details[0].rotation;

        
            const { status, data } = await axios.post("http://localhost:42342/approved/create",
                {
                    title: title,
                    category: category,
                    description: description,
                    features: features,
                    applications: applications,
                    images: images,
                    document: document,
                    rotation: rotation,

                }).then(res => {
                    alert("Item inserted");
                    window.location.replace("/admin");
                    console.log(res.data);
                })
        
    }

    async function onReject() {
        var id = details[0]._id;
        console.log(id);
        await axios.delete("http://localhost:42342/product/delete/" + id)
            .then(() => {
                alert("Item deleted");
                window.location.replace("/admin");
            })
    }

    const proDetails = details.map((detail, index) => {
        var image1 = detail.images[0].substring(45)
        var image2 = detail.images[1].substring(45)
        var image3 = detail.images[2].substring(45)
        var image4 = detail.images[3].substring(45)
        console.log(detail.document.substring(45));
        var document = detail.document.substring(45) + '#view=fit&toolbar=0&zoom=100'


        return <div>
            <div key={index}>

                <div className="row">
                    <div className='col-md-6' style={{ border: '1px solid black' }}>
                        <div className='row' style={{ margin: 'auto 0', border: '1px solid black' }}>
                            <div className='col-md-3' style={{ border: '1px solid black', width: '50%' }}>
                                <img src={image1} style={{ width: '100%', height: '100%', margin: 'auto' }} />
                            </div>
                            <div className='col-md-3' style={{ border: '1px solid black', width: '50%' }}>
                                <img src={image2} style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div><br />
                        <div className='row' style={{ margin: 'auto 0' }}>
                            <div className='col-md-3' style={{ border: '1px solid black', width: '50%' }}>
                                <img src={image3} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className='col-md-3' style={{ border: '1px solid black', width: '50%' }}>
                                <img src={image4} style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div><br />
                    </div>
                    <div className="col-md-6">
                        <p className='productHeading'><h3>Title:</h3><p> {detail.title}</p></p>
                        <p className='productCategory'><h3>Category:</h3> <p>{detail.category}</p></p>
                        <p className='productDescription'><h3>Description: </h3><p>{detail.description}</p></p>
                        <p className='productFeatures'><h3>Features: </h3><p>{detail.features}</p></p>
                        <p className='productApplications'><h3>Applications: </h3><p>{detail.applications}</p></p>
                        <Button name={document} onClick={openTab} href="#" type='application/pdf' width="100%" height="600px" style={{ margin: 'auto' }}>Product Details</Button>
                        <Button onClick={rotationFunc} width="100%" height="600px" style={{ margin: 'auto' }}>View 360 model</Button><br />
                        <div className='rotation' style={{ margin: 'auto', padding: '20%' }}>

                        </div>
                        <Button className='accept' onClick={onAccept}>Accept</Button>
                        <Button1 className='reject' onClick={onReject}>Reject</Button1>



                    </div>
                </div>



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
                                    <Link className="nav-link" to="/about" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Contact</Link>
                                </li>
                            </ul>
                            <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link to="/login"><button className="btn btn-primary " style={{ width: '150px' }} type="button">Login</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid productDetails">
                    {proDetails}
                </div>


            </div>
        </React.Fragment>
    )
}
export default Product;
