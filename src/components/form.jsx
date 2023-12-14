import React, { useState } from "react";
import bgimg from "../assets/image-2.jpg";
import { useForm } from "react-hook-form";


export default function Form() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
    const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      rememberMe: ''
    });
    const handleFirstNameChange = (event) => {
      setFormValues({
        ...formValues,
        firstName: event.target.value,
      });
    };
    const handleLastNameChange = (event) => {
      setFormValues({
        ...formValues,
        lastName: event.target.value,
      });
    };
    const handleemailAddressChange = (event) => {
        setFormValues({
          ...formValues,
          emailAddress: event.target.value,
        });
      };
      const handlepasswordChange = (event) => {
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
      };
      const handlerememberMeChange = (event) => {
        setFormValues({
          ...formValues,
          rememberMe: event.target.value,
        });
      };
   

  return (
    <section className="signup">
      <div>
        <img src={bgimg} alt="" />
        <div class="text">
          <h2 class="img-text">
            {" "}
            Building exceptional services with Back Office Support and Business
            Perfomance
          </h2>
        </div>
      </div>
      <div className="register">
        <div>
          <h2>Create Account</h2>
          <p>
            <span>Build an exceptional business</span>
          </p>
        </div>
        <div>
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>

            <div className="content">
              <div className="text-input">
                <label className="form-label">First Name</label>
                <div className="input-field bold">
                <input  type="text" value={formValues.firstName} placeholder="Ogoluwa" readOnly
                onChange={handleFirstNameChange}/>
                    </div>
              </div>
              
              <div className="text-input">
                <label className="form-label">Last Name</label>
                <div className="input-field">
                <input className="form-input" type="text" placeholder="Enter your last name" />
                    </div>
              </div>
        
              
            </div>
            <div className="content">
            <div className="content-input">
              <label className="form-label">Email Address</label>
              <div className="input-field">
              <input type="email" placeholder="Enter your email address" />
                </div>
            </div>
            </div>
            <div className="content">
            <div className="content-input">
              <label className="form-label">Password</label>
              <div className="input-field">
              <input type="text" placeholder="Enter your password" />
                </div>
            </div>
            </div>
    
           <div className="remember">
           <label><input type="checkbox"></input> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
                <div>
                <button  type="submit" className="btn">Sign Up</button>
            <div className="Alt-signup">
              <p>
                Got an account? <a href="#">Sign in</a>
              </p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
