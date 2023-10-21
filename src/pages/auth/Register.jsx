import React, { useEffect, useState } from "react";
import whiteLogo from "../../assets/img/logo-white.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authApiSlice";
import { standardSweetalert } from "../../utils/sreetAlert";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/auth/authSlice";

const Register = () => {
  const {error, message} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    cpassword: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.cpassword || !input.password) {
      return createToast('All Fields are required!', 'error')
    }
    if (input.password != input.cpassword) {
      return createToast( 
        "Confirm password not match",
        "warn"
      );
    } else {
      dispatch(
        createUser({
          name: input.name,
          email: input.email,
          password: input.password,
        })
      );
      setInput({
        name: "",
        email: "",
        cpassword: "",
        password: "",
      });
      
    }
  };

  useEffect(() => {
    if(error){
      createToast(error)
      dispatch(setMessageEmpty())
    }
    if(message){
      createToast(message, "success")
      dispatch(setMessageEmpty())

    }
  }, [error, message])

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={whiteLogo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleRegister}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={input.cpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
                    <span>Register with</span>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google"></i>
                    </a>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div className="text-center dont-have">
                    Already have an account?{" "}
                    <Link to="/login" href="login.html">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
