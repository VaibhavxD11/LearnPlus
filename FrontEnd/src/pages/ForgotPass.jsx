import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Breadcrumb } from "../components";


const ForgotPassword = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: ""

    });
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:8080/forgotpassword";
            const { data: res } = await axios.post(url, data);
            //console.log("Yes");
            setData("");
            console.log(res.data);
            navigate("/login");

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
            <Breadcrumb current="Forgot Password" />
            <section className="login">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <div className="box">
                                <h2 className="text-center fs-4 mb-5 fw-bold">
                                    Forgot Password
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3 ">
                                        <input
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <button type="submit" className="theme-btn w-100 my-4" onClick={handleSubmit} >
                                        Submit
                                    </button>
                                    <p className="text-center">
                                        We'll send you a password reset link
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ForgotPassword;

