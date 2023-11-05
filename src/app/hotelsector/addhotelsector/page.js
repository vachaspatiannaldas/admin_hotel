"use client"
import React from 'react'
import Sidebar from '@/app/sidebar/page'
import Nav from '@/app/nav/page'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { addHotelsector, setName, setStatus } from '@/app/redux/hotelsectorslice'
export default function page() {

    const { name, status } = useSelector((state) => state.HotelsectorOperation);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          name: name,
          status: status,
        };
        dispatch(addHotelsector(data));
        console.log("dat === ",data);
      };
  return (
    <>
      {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
     <Sidebar/>
      {/* Layout container */}
      <div className="layout-page">
        <Nav/>
      <div className="container mt-4">
      <div className="row">
  <div className="col-md-6">
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Add Hotel Sector</h5>
        {/* <small className="text-muted float-end">Default label</small> */}
      </div>
      <div className="card-body">
        {/* <form onSubmit={handleSubmit}> */}
                        <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-icon-default-fullname"
                            >
                              name
                            </label>
                            <div className="input-group input-group-merge">
                              <span
                                id="basic-icon-default-fullname2"
                                className="input-group-text"
                              >
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
