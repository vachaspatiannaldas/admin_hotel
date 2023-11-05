"use client"
import { useEffect } from "react";
import Sidebar from '@/app/sidebar/page'
import Nav from '@/app/nav/page'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { addHoteladmin, fetchHotelid, fetchVendorid, setName, setContact, setEmail, setHotelid, setPassword, setVendorid } from '@/app/redux/hoteladminslice'
export default function page() {

  const { name, hotelidshow, vendoridshow, hotel_id, vendor_id, contact, email, password } = useSelector((state) => state.HoteladminOperation);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchHotelid());
    dispatch(fetchVendorid());
  }, [dispatch])

  console.log("vendors -- ", vendoridshow);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      hotel_id: hotel_id,
      vendor_id: vendor_id,
      contact: contact,
      email: email,
      password: password,
    };
    dispatch(addHoteladmin(data));
    console.log("dat === ", data);
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
                      <h5 className="mb-0">Add Hotel Admin</h5>
                      {/* <small className="text-muted float-end">Default label</small> */}
                    </div>
                    <div className="card-body">
                      {/* <form onSubmit={handleSubmit}> */}
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Name</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setName(e.target.value))
                            }
                          />
                        </div>
                      </div>

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Hotel</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setHotelid(e.target.value))
                            }
                            value={hotel_id}
                          >
                            {
                              hotelidshow.map((obj) => {
                                return (
                                  <option value={obj.id}>{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="mb-3">
                        <div class="form-group">
                          <label for="">Select Vendor</label>
                          <select
                            class="form-control"
                            name="status"
                            onChange={(e) =>
                              dispatch(setVendorid(e.target.value))
                            }
                            value={vendor_id}
                          >
                            {
                              vendoridshow.map((obj) => {
                                return (
                                  <option value={obj.id}>{obj.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Contact</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setContact(e.target.value))
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Email</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setEmail(e.target.value))
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname" >Password</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) =>
                              dispatch(setPassword(e.target.value))
                            }
                          />
                        </div>
                      </div>

                      <Link href="/hotelsector/showhotelsector"><button className="btn btn-primary" onClick={handleSubmit}>Submit</button></Link>

                      {/* </form> */}
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
  )
}
