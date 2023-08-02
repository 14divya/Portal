import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function Staff() {

    // const [data, setData] = useState();
    // const [pid, setId] = useState();
    // const [images, setImages] = useState([]);
    // const [pdf, setPdf] = useState();
    // const [rotation, setRotation] = useState();

    var [data, setData] = useState([]);
    const [pid, setId] = useState();
    // const [images, setImages] = useState([]);
    // const [pdf, setPdf] = useState();
    // const [rotation, setRotation] = useState([]);
    const [product, setProduct] = useState();

    var images = []
    var pdf = ""
    var rotation = []

    const titleRef = useRef();
    const descRef = useRef();
    const featRef = useRef();
    const appRef = useRef();
    const catRef = useRef();
    const imageRef = useRef([]);
    const docRef = useRef([]);
    const rotationRef = useRef([]);

    useEffect(() => {
        axios.get(`http://localhost:42342/user/staff1eapl@gmail.com`)
            .then((res) => {
                setData(res.data.name);
            })
    }, [])

    // const handleImageUpload = (e) => {
    //     setImages(e.target.files);
    //     console.log(images);
    // }

    // const handlePdf = (e) => {
    //     setPdf(e.target.files);

    // }

    // const handleRotation = (e) => {
    //     setRotation(e.target.files);
    // }

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
        // setImages(e.target.files);
        images = e.target.files;
        console.log(images);
    }

    const handlePdf = (e) => {
        // setPdf(e.target.files);
        pdf = e.target.files;
        console.log(pdf);

    }

    const handleRotation = (e) => {
        // setRotation(e.target.files);
        rotation = e.target.files;
        console.log(rotation);
    }

    // const titleRef = useRef();
    // const descRef = useRef();
    // const featRef = useRef();
    // const appRef = useRef();
    // const catRef = useRef();
    // const imageRef = useRef();
    // const docRef = useRef();
    // const rotationRef = useRef();
    // const formData = new FormData();

    // function handleSubmit() {
    //     const title = titleRef.current.value;
    //     const desc = descRef.current.value;
    //     const feat = featRef.current.value;
    //     const app = appRef.current.value;
    //     const cat = document.getElementById("inputCat").value;
    //     const op="insert";
    //     // const images = document.querySelector;
    //     // const document = docRef.current.value;
    //     // const rotation = rotationRef.current.value;



    //     console.log(title, desc, feat, app, cat);
    //     addProductToDB(title, desc, feat, app, cat, op);
    //     // addImages(images);
    //     // addDocument(document);
    //     // addRotation(rotation);
    // }
    // async function addProductToDB(title, desc, feat, app, cat, op) {
    //     try {
    //         const { status, data } = await axios.post("http://localhost:42342/product/create",
    //             {
    //                 title: title,
    //                 category: cat,
    //                 description: desc,
    //                 features: feat,
    //                 applications: app,
    //                 op:op,
    //             }).then(res => {
    //                 // setId(res.data);
    //                 console.log("id before setting", res);
    //                 setId(res.data);
    //                 const id = res.data;
    //                 console.log("id after setting", res.data);
    //                 addImages(id);
    //             });
    //         if (status === 200) {
    //             alert(data.message);
    //             // console.log(res.json());
    //         }
    //     } catch (error) {
    //         alert(error);
    //     }
    // }
    // // const handleImageUpload = (event) => {
    // //     const file = event.target.files[0];

    // //     formData.append("file", file);
    // //     console.log(formData);
    // // }
    // async function addImages(id) {
    //     try {
    //         console.log(id);
    //         var formData = new FormData();
    //         for (const file of images) {
    //             formData.append('images', file);

    //         }


    //         const { status, data } = await axios.put("http://localhost:42342/product/upload/" + id,
    //             formData);
    //         addPdf(id);
    //     } catch (error) {
    //         alert(error);
    //     }
    // }
    // async function addPdf(id) {
    //     var formData = new FormData();
    //     for (const file of pdf) {
    //         formData.append('doc', file);

    //     }


    //     const { status, data } = await axios.put("http://localhost:42342/product/uploaddoc/" + id,
    //         formData);
    //     addRotation(id);

    // }
    // async function addRotation(id) {
    //     var formData = new FormData();
    //     for (const file of rotation) {
    //         formData.append('rotation', file);

    //     }


    //     const { status, data } = await axios.put("http://localhost:42342/product/upload/rotation/" + id,
    //         formData);
    // }

    function handleSubmit() {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const feat = featRef.current.value;
        const app = appRef.current.value;
        const cat = document.getElementById("inputCat").value;
        const op = "insert";
        const img = imageRef.current;
        const doc = docRef.current;
        const rotation = rotationRef.current;

        console.log(title, desc, feat, app, cat);
        addProductToDB(title, desc, feat, app, cat, op);
    }

    async function addProductToDB(title, desc, feat, app, cat, op) {
        try {
            const { status, data } = await axios.post("http://localhost:42342/product/create",
                {
                    title: title,
                    category: cat,
                    description: desc,
                    features: feat,
                    applications: app,
                    op: op,

                }).then(res => {
                    console.log("id before setting", res);
                    setId(res.data);
                    const id = res.data;
                    console.log("id after setting", res.data);
                    return res.data;
                    // addImages(id);
                }).then((id) => {
                    console.log(id);
                    var formData = new FormData();
                    for (const file of images) {
                        formData.append('images', file);
                    }

                    axios.put("http://localhost:42342/product/upload/" + id,
                        formData);
                    var formData = new FormData();
                    for (const file of pdf) {
                        formData.append('doc', file);
                    }

                    axios.put("http://localhost:42342/product/uploaddoc/" + id,
                        formData);
                    var formData = new FormData();
                    for (const file of rotation) {
                        formData.append('rotation', file);
                        console.log(formData);
                    }
                    axios.put("http://localhost:42342/product/upload/rotation/" + id,
                        formData);
                });
        




        
}catch (error) {
        alert(error);
    }
}

// async function addImages(id) {
// try {
//     console.log(id);
//     var formData = new FormData();
//     for (const file of images) {
//         formData.append('images', file);
//     }

//     const { status, data } = await axios.put("http://localhost:42342/product/upload/" + id,
//         formData);
//     addPdf(id);
// } catch (error) {
//     alert(error);
// }
// }

// async function addPdf(id) {
// var formData = new FormData();
// for (const file of pdf) {
//     formData.append('doc', file);
// }

// const { status, data } = await axios.put("http://localhost:42342/product/uploaddoc/" + id,
//     formData);
// addRotation(id);
// }

// async function addRotation(id) {
//     var formData = new FormData();
//     for (const file of rotation) {
//         formData.append('rotation', file);
//     }

//     const { status, data } = await axios.put("http://localhost:42342/product/upload/rotation/" + id,
//         formData);
// }
const butn = document.getElementById('toggleForm');
// document.onload() = document.getElementById('AddProduct').style.display = 'none';
const handleOnClick = (e) => {
    const form = document.getElementById('AddProduct');

    if (form.style.visibility === 'hidden') {

        form.style.visibility = 'visible';
    } else {

        form.style.visibility = 'hidden';
    }
};
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
            <br />
            <div className="container">
                <h2>Welcome {data}</h2>
                <br />
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: '100%' }}>
                            <img src="assets/images/add_product.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Insert</h5>
                                <Link to="/staff"><Button id="toggleForm" onClick={handleOnClick} className="btn btn-primary">Add a product</Button></Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col">
                        <div className="card" style={{ width: '100%' }}>
                            <img src="assets/images/update_image.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Modify</h5>
                                <Link to="/modify"><Button className="btn btn-primary">Modify a product</Button></Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col">
                        <div className="card" style={{ width: '100%' }}>
                            <img src="assets/images/delete_product.png" className="card-img-top" alt="..." style={{ width: '50%', height: '50%', margin: 'auto', padding: '30px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Remove</h5>
                                <Link to="/remove"><Button className="btn btn-primary">Remove a product</Button></Link>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <Link to='/allproducts'><Button style={{ backgroundColor: 'orange', color: 'black' }}>View all products&nbsp;&nbsp;<i className='fa fa-arrow-right' /></Button></Link>
            <br />
            <br />
            <div className="container" id="AddProduct" style={{ visibility: 'hidden' }}>
                <h1>Add Product</h1>
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
        </div >
    </React.Fragment >
)
}
export default Staff;