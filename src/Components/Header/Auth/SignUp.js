import React from "react";
import { Form, FormText } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "../Header";

class SignUp extends React.Component {
  render() {
    const Background =
      "https://media.istockphoto.com/photos/businessman-logging-on-to-a-password-protected-website-picture-id1325306868?b=1&k=20&m=1325306868&s=170667a&w=0&h=Nclr6aupv-xVdn6qZkHN_sPPsVFd_CLfWNyVbUVUUnI=";
    return (
      <div>
        <Routes>
          <Route path="" element={<Header />} />
          {/* <Route path="/" element={<App />} /> */}
        </Routes>
        <div className="d-lg-flex half">
          <div
            className="bg order-1 order-md-2"
            style={{ backgroundImage: `url(${Background})` }}
            //   style="background-image: url('images/bg_1.jpg');"
          ></div>
          <div className="contents order-2 order-md-1">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                  <h3>
                    SignUp to <strong>Company Name</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                  <Form action="#" method="post">
                    <div className="form-group first">
                      <FormText>Username</FormText>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        id="username"
                      />
                    </div>
                    <div className="form-group first">
                      <FormText>Email</FormText>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="your-email@gmail.com"
                        id="email"
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <FormText>Password</FormText>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        id="password1"
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <FormText>Confirmed Password</FormText>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirmed Password"
                        id="password2"
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn btn-block btn-primary"
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
