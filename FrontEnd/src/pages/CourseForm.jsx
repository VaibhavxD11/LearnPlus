import React, { useState, useRef } from "react";
import axios from 'axios';


const CourseForm = () => {

    const [inputFields, setInputFields] = useState([""]);
    const [inputData, setInputData] = useState({});

    const addInputField = () => {
        setInputFields((prevFields) => [...prevFields, `Input ${prevFields.length + 1}`]);
    };

    const removeInputField = () => {
        if (inputFields.length > 1) {
            setInputFields((prevFields) => prevFields.slice(0, -1));
        }
    };
   

    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setData({ ...data, [name]: value });
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const formattedData = {};

    for (const key in inputData) {
        const input = inputData[key];
        const [category, ...inputs] = input.split(":").map((item) => item.trim());

        if (category) {
            if (!formattedData[category]) {
                formattedData[category] = [];
            }

            if (inputs.length > 0) {
                formattedData[category] = formattedData[category].concat(inputs.join(",").split(",").map((item) => item.trim()));
            }
        }
    }

    const courses = {};
    for (const category in formattedData) {
        const inputs = formattedData[category];
        courses[category] = inputs;
    }

    const [data, setData] = useState({ });
    const handleNewChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });

    };
    formattedData['name'] = data.name || '';
    formattedData['rank'] = data.rank || '';
    formattedData['description'] = data.description || '';
    formattedData['link'] = data.link || '';

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formattedData);
        console.log(courses);
        const data = {
            name: formattedData['name'],
            rank: formattedData['rank'],
            description: formattedData['description'],
            link: formattedData['link'],
            courses,
        };
        try {
            const url = "http://localhost:8080/admin";
            const { data: res } = await axios.post(url, data);
            
            console.log(res.message);

        }
        catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {

                console.log(error.response.data.message);
            }
        
        }

    }

    return (
        <>
            <section className="courseform">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <div className="box">
                                <h2 className="text-center fs-4 mb-5 fw-bold">
                                    Add College
                                </h2>
                                <form id="myform" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={data.name}
                                            onChange={handleNewChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="number"
                                            name="rank"
                                            value={data.rank}
                                            onChange={handleNewChange}
                                            placeholder="NIRF Ranking"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea
                                            placeholder="Description"
                                            name="description"
                                            value={data.description}
                                            onChange={handleNewChange}
                                            required
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="link"
                                            value={data.link}
                                            onChange={handleNewChange}
                                            placeholder="Youtube Link"
                                            className="form-control"
                                        />
                                        <br></br>
                                        <span id="note-text">Note - To add a Program follow format (Programme : Stream1, Stream2...)</span>
                                    </div>
                                    
                                    
                                    {inputFields.map((field, index) => (
                                        <div className="form-group mb-3" id="addcourse" key={index}>
                                            
                                            <textarea
                                                type="text"
                                                name={`input${index}`}
                                                required
                                                onChange={handleChange}
                                                placeholder="Enter your Input"
                                                className="form-control"
                                            >
                                            </textarea>

                                        </div>
                                    ))}

                                    {
                                        (
                                            <div className="d-flex justify-content-center my-3">
                                                <button type="button" id="addInput" onClick={addInputField}><i class="fa fa-plus"></i> Add Input</button>
                                                <button type="button" id="removeInput" onClick={removeInputField}><i class="fa fa-minus"></i> Remove Input</button>
                                            </div>
                                        )
                                    }

                                    <button type="submit" className="theme-btn w-100 my-4" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CourseForm;