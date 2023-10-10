import React from "react";
import doctor1 from '../../assets/img/doctors/doctor-thumb-01.jpg'
import patient1 from '../../assets/img/patients/patient1.jpg'
import ModalPopup from "../../components/ModalPopUp/ModalPopup";
const User = () => {
  return (
    <>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Users</li>
            </ul>
          </div>
        </div>
      </div>
        <ModalPopup target="userModalPopUp">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut odit excepturi quod provident dolorum neque facilis maxime nostrum quae ea ipsa sunt magni, dolor explicabo et eaque possimus natus debitis accusantium quo itaque minima aspernatur! Earum dicta, commodi eligendi ea pariatur quibusdam. Et nulla eaque saepe assumenda vitae asperiores deleniti vel iste tenetur in nesciunt soluta rem, earum commodi ducimus pariatur dolores qui dolorem error ipsa corrupti. Perferendis fuga quis magnam inventore ullam neque? Repellat ducimus dolores recusandae et consequuntur distinctio quasi quo, facere ipsa fugiat optio culpa eaque obcaecati eum omnis adipisci praesentium quisquam alias beatae! Voluptatum, ipsa tenetur!</p>
        </ModalPopup>
      <div className="row">
        <div className="col-md-12">
            <button className="btn btn-primary mb-2" data-target="#userModalPopUp" data-toggle="modal">Add New User</button>
          {/* <!-- Recent Orders --> */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Patient Name</th>
                      <th>Apointment Time</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={doctor1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={patient1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            checked
                          />
                          <label for="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">$200.00</td>
                    </tr>
                     <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={doctor1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={patient1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            checked
                          />
                          <label for="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">$200.00</td>
                    </tr> <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={doctor1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={patient1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            checked
                          />
                          <label for="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">$200.00</td>
                    </tr> <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={doctor1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={patient1}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            checked
                          />
                          <label for="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">$200.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- /Recent Orders --> */}
        </div>
      </div>
      {/* <!-- /Page Header --> */}
    </>
  );
};

export default User;
