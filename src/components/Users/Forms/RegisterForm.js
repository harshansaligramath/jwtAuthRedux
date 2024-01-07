import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/slices/users/usersSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";

import "./RegistrationForm.css"

const RegisterForm = () => {
  //dispatch
  const dispatch = useDispatch();
  //dispatch
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  //---Destructuring---
  const { fullname, email, password } = formData;
  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({ fullname, email, password }));
  };
  //select store data
  const { user, error, loading } = useSelector((state) => state?.users);
  //redirect
  useEffect(() => {
    if (user) {
      window.location.href = "/login";
    }
  }, [user]);
  return (
    <>
      {/* <section>
        <div>
          <div>
            <div>
              <div>
                <h3>Signing up with social is super quick</h3>
            
                {error && <ErrorMsg message={error?.message} />}
                <p>Please, do not hesitate</p>
                <form onSubmit={onSubmitHandler}>
                  <input
                    name="fullname"
                    value={fullname}
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    type="password"
                    placeholder="Enter your password"
                  />
                  {loading ? <LoadingComponent /> : <button>Register</button>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <section className="section-container">
        <div className="form-container">
          <div className="title-container">
            <h3>Signing up with social is super quick</h3>
            {error && <ErrorMsg message={error?.message} />}
            <p>Please, do not hesitate</p>
          </div>

          <form onSubmit={onSubmitHandler}>
            <input
              className="input-field"
              name="fullname"
              value={fullname}
              onChange={onChangeHandler}
              type="text"
              placeholder="Full Name"
            />
            <input
              className="input-field"
              name="email"
              value={email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="input-field"
              name="password"
              value={password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Enter your password"
            />
            {loading ? <LoadingComponent /> : <button className="submit-button">Register</button>}
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
