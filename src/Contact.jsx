import React, { useState } from 'react';

const Contact = () =>{
    const [data,setData] = useState({
        fname : "",
        phone : "",
        email : "",
        msg : "",
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal) =>{
            return {
            ...preVal,
            [name] : value,
            };
        })
    }

    const fromSubmit = (e) =>{
        e.preventDefault();
        alert(
            ` My name is ${data.fname}. My mobile no is ${data.phone}. My email is ${data.email}. I want to say ${data.msg}`);
    }

    return(
        <>
            <div className = "my-5">
            <h1 className ="text-center">Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className= "col-md-6 col-10 mx-auto">
                    <form onSubmit = {fromSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Full Name
                        </label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        name ="fname"
                        value = {data.fname}
                        onChange = {InputEvent}
                        placeholder="name@example.com" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                         Phone
                        </label>
                        <input 
                        type="number" 
                        class="form-control" 
                        name ="phone"
                        value = {data.phone}
                        onChange = {InputEvent}id="exampleFormControlInput1" 
                        placeholder="mobile number" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                       Email
                        </label>
                        <input 
                        type="text" 
                        class="form-control" 
                        name ="email"
                        value = {data.email}
                        onChange = {InputEvent}
                        id="exampleFormControlInput1" 
                        placeholder="Email address" />
                    </div>

                  
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">
                        Message
                        </label>
                        <textarea class="form-control" 
                        id="exampleFormControlTextarea1" rows="3"
                        name ="msg"
                        value = {data.msg}
                        onChange = {InputEvent}
                        ></textarea>
                    </div>

                    <div class= "col-12">
                    <button class="btn btn-outline-primary" type="submit">
                    Submit form
                    </button>

                    </div>
                    </form>
                    </div>
                </div>           
            </div>
        </>
    );
   
}

export default Contact;