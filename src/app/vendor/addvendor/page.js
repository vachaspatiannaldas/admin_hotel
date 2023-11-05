"use client";
import React from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addVendor,
  setCity,
  setContact,
  setEmail,
  setLocation,
  setName,
  setPassword,
  setProfile,
  setStatus
} from "@/app/redux/vendorslice";
export default function page() {
  const { name, email, contact, location, city, password, status, profile } = useSelector(
    (state) => state.VendorOperation
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: contact,
      location: location,
      city: city,
      password: password,
      status: status,
      profile: profile,
    };
    dispatch(addVendor(data));
  };
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          {/* Layout container */}
          <div className="layout-page">
            <Nav />
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Add Vendor</h5>
                     
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname">Vendor Name</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setName(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Email</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Contact</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setContact(e.target.value))}
                          />
                        </div>
                      </div>
                    
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Location</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="location"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setLocation(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> City</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setCity(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Password</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                          />
                        </div>
                      </div>
                      <div class="mb-3">
                            <div class="form-group">
                              <label for="">Select Status</label>
                              <select
                                class="form-control"
                                name="status"
                                onChange={(e) =>
                                  dispatch(setStatus(e.target.value))
                                }
                                value={status}
                              >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </div>
                          </div>
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname"> Profile</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="file"
                            name="profile"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e)=>dispatch(setProfile(e.target.files[0]))}
                          />
                        </div>
                      </div>
                      {/* <Link href="/Category/categoryshow"> */}
                        <button
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      {/* </Link> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / Layout page */}
        </div>

        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
      </div>
      {/* / Layout wrapper */}
    </>
  );
}
