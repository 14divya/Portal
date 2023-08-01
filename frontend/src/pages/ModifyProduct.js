import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function ModifyProduct() {

    var [data, setData] = useState([]);
    const [pid, setId] = useState();
    const [images, setImages] = useState([]);
    const [pdf, setPdf] = useState();
    const [rotation, setRotation] = useState();
    const [product, setProduct] = useState();

    const titleRef = useRef();
    const descRef = useRef();
    const featRef = useRef();
    const appRef = useRef();
    const catRef = useRef();
    const imageRef = useRef([]);
    const docRef = useRef([]);
    const rotationRef = useRef([]);

    const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    const handleImageUpload = (e) => {
        setImages(e.target.files);
        console.log(images);
    }

    const handlePdf = (e) => {
        setPdf(e.target.files);
        console.log(pdf);

    }

    const handleRotation = (e) => {
        setRotation(e.target.files);
    }

    var clickFn = function (e) {
        var btn = document.getElementById("productTitle")
        console.log(e.target.innerText);
        var text = e.target.innerText;
        btn.textContent = text;
        var activeLink = document.querySelector(".option .active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        activeLink.classList.add("active");
        getDetails(text);
    }

    async function getDetails(text) {
        var list = document.getElementById("productList")
        var details = axios.get("http://localhost:42342/approved/" + text)
            .then(res => {
                console.log(res);
                console.log(res.data[0]._id);
                setData(res.data);
            })
    }

    var products = data;

    var proDetails = products.map((product, index) => {
        return <div>
            <div key={index}>
                <br />
                <li className="list-group-item" style={{ textAlign: 'left', padding: '20px', margin: 'auto', fontSize: '20px' }}>{product.title}
                    <div style={{ float: 'right', margin: 'auto', display: 'inline-block', top: '0px', right: '0px' }}>
                    <button type="button" className="btn btn-primary" id="toggleForm">Update</button>
                    </div>
                </li>
                <br />
            </div>
        </div>
    })

    function handleSubmit() {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const feat = featRef.current.value;
        const app = appRef.current.value;
        const cat = document.getElementById("inputCat").value;
        const op = "modify";
        const img = imageRef.current;
        const doc = docRef.current;
        const rotation = rotationRef.current;

        console.log(title, desc, feat, app, cat, img, doc, rotation);
        addProductToDB(title, desc, feat, app, cat, op, img, doc, rotation);
    }

    async function addProductToDB(title, desc, feat, app, cat, op, img, doc, rotation) {
        try {
            const { status, data } = await axios.post("http://localhost:42342/product/updateCreate",
                {
                    title: title,
                    category: cat,
                    description: desc,
                    features: feat,
                    applications: app,
                    op: op,
                    images: img,
                    document: doc,
                    rotation: rotation,
                }).then(res => {
                    console.log("id before setting", res);
                    setId(res.data);
                    const id = res.data;
                    console.log("id after setting", res.data);
                    addImages(id);
                });
            if (status === 200) {
                alert(data.message);
            }
        } catch (error) {
            alert(error);
        }
    }

    async function addImages(id) {
        try {
            console.log(id);
            var formData = new FormData();
            for (const file of images) {
                formData.append('images', file);
            }

            const { status, data } = await axios.put("http://localhost:42342/product/upload/" + id,
                formData);
            addPdf(id);
        } catch (error) {
            alert(error);
        }
    }

    async function addPdf(id) {
        var formData = new FormData();
        for (const file of pdf) {
            formData.append('doc', file);
        }

        const { status, data } = await axios.put("http://localhost:42342/product/uploaddoc/" + id,
            formData);
        addRotation(id);
    }

    async function addRotation(id) {
        var formData = new FormData();
        for (const file of rotation) {
            formData.append('rotation', file);
        }

        const { status, data } = await axios.put("http://localhost:42342/product/upload/rotation/" + id,
            formData);
    }

    function handleOnClick(e) {
        // setProductId(e);
        var id = e;
        console.log(id);
        getProductWithId(id)
    };

    async function getProductWithId(id) {
        var details = await axios.get("http://localhost:42342/approved/id/" + id)
            .then(res => {
                console.log(res.data[0].title);
                var product = res.data[0];
                console.log(product.rotation);
                autofillForm(product.title, product.category, product.description, product.features, product.applications, product.images, product.document, product.rotation);
            })
    }

    function autofillForm(title, category, description, features, applications, images, document, rotation) {
        titleRef.current.value = title;
        catRef.current.value = category;
        descRef.current.value = description;
        featRef.current.value = features;
        appRef.current.value = applications;
        console.log(images);
        imageRef.current = images;
        console.log(imageRef.current);
        docRef.current = document;
        console.log(docRef.current);
        console.log(rotation);
        rotationRef.current = rotation;
        console.log(rotationRef.current);
        // setProduct(title,category,description,features, applications,images,document,rotation)

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
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products" tabIndex="-1" aria-disabled="true">Products</Link>
                                </li>
                            </ul>
                            <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" style={{ color: 'white', backgroundColor: 'coral' }} type="submit">Search</button>
                                <Link className="sign" to="/signup"><button className="btn btn-primary me-md-2 sign" style={{ width: '150px' }} type="button">Sign up</button></Link>
                                <Link to="/login"><button className="btn btn-primary " style={{ width: '150px' }} type="button">Login</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 dropdown">
                            <ul className="list-group dropdown-options" id="list">
                                <li className="option"><a href="#" className="list-group-item active" aria-current="true" value="electronic_timers" onMouseDown={clickFn}>Electronic Timers</a></li>
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
                            <div className="container" id="AddProduct">
                                <h1>Update Product</h1>
                                <br />
                                <div id="addForm" className="display-flex-column Form" enctype="multipart/form-data">
                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-4">
                                            <input ref={titleRef} className="form-control" id="inputTitle" placeholder={"Enter title"} />
                                        </div>

                                        <label htmlFor="inputCat" className='col-sm-2 col-form-label'>Category</label>
                                        <div className="col-sm-4">
                                            <select ref={catRef} id="inputCat" className="form-control">
                                                <option selected>Select...</option>
                                                <option value="Electronic Timers">Electronic Timers</option>
                                                <option>Time Switch</option>
                                                <option>Sequential Timers</option>
                                                <option>Combination Timers</option>
                                                <option>Digital Timers</option>
                                                <option>Preset Counters</option>
                                                <option>Digital Non-Contact Tachometers</option>
                                                <option>Programmable Alarm Annunciators</option>
                                                <option>Protection Relays</option>
                                                <option>Switch Mode Power Supplies</option>
                                                <option>Energy Meters</option>
                                                <option>Temperature Controllers</option>
                                                <option>Photo Sensing Relays</option>
                                                <option>Light Switches</option>

                                            </select>
                                        </div>

                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <input ref={descRef} className="form-control" id="inputDesc" placeholder={"Enter description"} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="feat" className="col-sm-2 col-form-label">Features</label>
                                        <div className="col-sm-10">
                                            <input ref={featRef} className="form-control" id="inputFeat" placeholder={"Enter features"} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="app" className="col-sm-2 col-form-label">Applications</label>
                                        <div className="col-sm-10">
                                            <input ref={appRef} className="form-control" id="inputApp" placeholder={"Enter applications"} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="formFileMultiple" className="col-sm-2 col-form-label">Images</label>
                                        <div className="col-sm-10" >
                                            <input ref={imageRef} name="images" className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImageUpload} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="customFile" className="col-sm-2 col-form-label">Document</label>
                                        <div className="col-sm-10">
                                            <input ref={docRef} name="doc" className="form-control" type="file" id="customFile" onChange={handlePdf} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label htmlFor="formFileMultiple1" className="col-sm-2 col-form-label">360 Rotation <br /> (Enter 36 images)</label>
                                        <div className="col-sm-10">
                                            <input ref={rotationRef} name="rotation" className="form-control" type="file" id="formFileMultiple1" multiple onChange={handleRotation} />
                                        </div>
                                    </div>
                                    <br />
                                    <Button label={"Submit"} onClick={handleSubmit}>Submit</Button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ModifyProduct;