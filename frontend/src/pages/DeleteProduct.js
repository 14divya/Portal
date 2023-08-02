import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function DeleteProduct() {

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



    var [data1, setData1] = useState([]);
    const [pid, setId] = useState();
    const [images, setImages] = useState([]);
    const [pdf, setPdf] = useState();
    const [rotation, setRotation] = useState([]);
    const [products, setProducts] = useState([]);
    var [details, setDetails] = useState([]);

    function openTab(e) {
        window.open(e.target.name);
    }

    function rotationFunc() {

        var rot = document.getElementsByClassName('rotation')[0];
        console.log(details[0].rotation);
        for (let i = 0; i < details[0].rotation.length; i++) {
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


    var clickFn = function (e) {
        var btn = document.getElementById("productTitle")
        console.log(e.target.innerText);
        var text = e.target.innerText;
        btn.textContent = text;
        // var activeLink = document.querySelector(".option .active");
        // if (activeLink) {
        //     activeLink.classList.remove("active");
        // }
        // activeLink.classList.add("active");
        getDetails(text);
    }

    async function getDetails(text) {
        var list = document.getElementById("productList")
        var details = await axios.get("http://localhost:42342/approved/" + text)
            .then(res => {
                try {
                    console.log(res);
                    console.log(res.data[0]._id);
                    console.log(res.data);
                    console.log(res.data[0]);
                    setData1(res.data);
                    data1 = res.data;
                    console.log(data1);
                } catch (error) {
                    alert("No product to display");
                }
            })
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
        var op = "delete"


        const { status, data } = await axios.post("http://localhost:42342/product/updateCreate",
            {
                title: title,
                category: category,
                description: description,
                features: features,
                applications: applications,
                images: images,
                document: document,
                rotation: rotation,
                op: op,

            }).then(res => {
                alert("Request sent");
                window.location.replace("/staff");
                console.log(res.data);
                var id = details[0]._id;
                console.log(id);

            })

    }

    async function onReject() {
        var id = details[0]._id;
        console.log(id);
        window.location.replace("/staff");

    }

    var proDetails = data1.map((product, index) => {
        console.log(product.title);
        return <div>
            <div key={index}>
                <br />
                <li className="list-group-item" style={{ textAlign: 'left', padding: '20px', margin: 'auto', fontSize: '20px' }}>{product.title}
                    <div style={{ float: 'right', margin: 'auto', display: 'inline-block', top: '0px', right: '0px' }}>
                        <button type="button" className="btn btn-primary" id="toggleForm" onClick={handleOnClick}>View</button>
                    </div>
                </li>
                <br />
            </div>
        </div>
    })

    function handleOnClick(e) {
        // setProductId(e);
        // var id = e;
        console.log(data1[0]._id);
        getProductWithId(data1[0]._id);
    };

    async function getProductWithId(id) {
        await axios.get("http://localhost:42342/approved/id/" + id)
            .then(res => {
                console.log(res.data[0]);
                // var product = res.data[0];
                // console.log(product.rotation);
                console.log(data1[0].title)
                console.log(data1[0].category)
                console.log(res.data)
                setDetails(res.data)
            })
    }

    const productDetails = details.map((detail, index) => {
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
                        <Button className='accept' onClick={onAccept}>Send Request</Button><br/>
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
                                <Link to="/login"><button className="btn btn-primary " style={{ width: '150px' }} type="button">Logout</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 dropdown">
                            <ul className="list-group dropdown-options" id="list">
                                <li className="option"><a href="#" className="list-group-item" aria-current="true" value="electronic_timers" onMouseDown={clickFn}>Electronic Timers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="time_switches" onMouseDown={clickFn}>Time Switches</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="combination_timers" onMouseDown={clickFn}>Combination Timers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="digital_timers" onMouseDown={clickFn}>Digital Timers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="sequential_timers" onMouseDown={clickFn}>Sequential Timers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="preset_counters" onMouseDown={clickFn}>Preset Counters</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="digital_non_contact_tachometers" onMouseDown={clickFn}>Digital Non-Contact Tachometers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="programmable_alarm_annunciators" onMouseDown={clickFn}>Programmable Alarm Annunciators</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="protection_relays" onMouseDown={clickFn}>Protection Relays</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="switch_mode_power_supplies" onMouseDown={clickFn}>Switch Mode Power Supplies</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="energy_meters" onMouseDown={clickFn}>Energy Meters</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="temperature_controllers" onMouseDown={clickFn}>Temperature Controllers</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="photo_sensing_relays" onMouseDown={clickFn}>Photo Sensing Relays</a></li>
                                <li className="option"><a href="#" className="list-group-item" value="light_switches" onMouseDown={clickFn}>Light Switches</a></li>
                            </ul>
                        </div>
                        <div className="col-md-10">
                            <h2 className="h2" id="productTitle"></h2>
                            <ul id="productList">
                                {proDetails}
                            </ul>
                            <div className="container-fluid productDetails">
                                {productDetails}
                            </div>
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


export default DeleteProduct;