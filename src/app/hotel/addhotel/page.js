"use client";
import { useEffect } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addHotel, fetchHotelsectorid, setCity, setCountry, setDescription, setHotelsectorid, setImages, setLocation, setName, setPincode, setState } from "@/app/redux/hotelslice";
export default function page() {
  const { name, images, description, country, state, location, city, pincode, hotel_sector_id, hotelsectorshow} = useSelector(
    (state) => state.HotelOperation
  );
  const dispatch = useDispatch();


  useEffect(()=>{
        dispatch(fetchHotelsectorid());
  },[dispatch])

  const handleImageChange = (files) => {
    const fileList = Array.from(files);
    dispatch(setImages(fileList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      images: images,
      description: description,
      country: country,
      state: state,
      location: location,
      city: city,
      pincode: pincode,
      hotel_sector_id: hotel_sector_id,
    };
    dispatch(addHotel(data));
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
                      <h5 className="mb-0">Add Hotel</h5>
                      {/* <small className="text-muted float-end">
                        Default label
                      </small> */}
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label" for="basic-icon-default-fullname">Name</label>
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
                        <label className="form-label" for="basic-icon-default-fullname"> Description</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <textarea
                          rows="5"
                          cols="5"
                            name="description"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                          ></textarea>
                        </div>
                      </div>

                      <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-email">Images</label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input
                              type="file"
                              name="images"
                              accept="images/*"
                              id="basic-icon-default-email"
                              className="form-control"
                              multiple
                              placeholder=""
                              aria-label=""
                              aria-describedby="basic-icon-default-email2"
                              // onChange={(e)=>dispatch(setImages(e.target.files))}
                              onChange={(e) => handleImageChange(e.target.files)}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-fullname"> Country</label>
                            <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text">
                                {/* <i className="bx bx-user"></i> */}
                            </span>
                            <input
                                type="text"
                                name="country"
                                className="form-control"
                                id="basic-icon-default-fullname"
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-icon-default-fullname2"
                                onChange={(e) => dispatch(setCountry(e.target.value))}
                            />
                            </div>
                        </div>
                    
                        <div className="mb-3">
                            <label className="form-label" for="basic-icon-default-fullname"> State</label>
                            <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text">
                                {/* <i className="bx bx-user"></i> */}
                            </span>
                            <input
                                type="text"
                                name="state"
                                className="form-control"
                                id="basic-icon-default-fullname"
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-icon-default-fullname2"
                                onChange={(e) => dispatch(setState(e.target.value))}
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
                            <label className="form-label" for="basic-icon-default-fullname"> Pincode</label>
                            <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text">
                                {/* <i className="bx bx-user"></i> */}
                            </span>
                            <input
                                type="number"
                                name="pincode"
                                className="form-control"
                                id="basic-icon-default-fullname"
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-icon-default-fullname2"
                                onChange={(e) => dispatch(setPincode(e.target.value))}
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

                        <div class="mb-3">
                            <div class="form-group">
                              <label for="">Select Hotel Sector</label>
                              <select
                                class="form-control"
                                name="status"
                                onChange={(e) =>
                                  dispatch(setHotelsectorid(e.target.value))
                                }
                                value={hotel_sector_id}
                              >
                                 {
                                    hotelsectorshow.map((obj)=>{
                                        return (
                                            <option value={obj.id}>{obj.name}</option>
                                                )
                                    })
                                }
                              </select>
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
