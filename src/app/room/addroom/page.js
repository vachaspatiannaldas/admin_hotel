"use client";
import { useEffect } from "react";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addRoom, fetchHotelgetid, fetchHotelsectorgetid, setDescription, setImages, setName, setStatus, setPrice, setHotelid, setHotelsectorid } from "@/app/redux/roomslice";
export default function page() {
  const { name, images, description, status, price, hotel_id, hotel_sector_id, hotelsectoridshow, hotelidshow } = useSelector(
    (state) => state.RoomOperation
  );
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(fetchHotelgetid());
    dispatch(fetchHotelsectorgetid());
  },[dispatch])


  // const handleImageChange = (value) => {
  //   const updatedImages = [...value];
  //   dispatch(setImages(updatedImages));
  // };

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
      status: status,
      price: price,
      hotel_id: hotel_id,
      hotel_sector_id: hotel_sector_id,
    };
    dispatch(addRoom(data));
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
                      <h5 className="mb-0">Add Room</h5>
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
                        <label className="form-label" for="basic-icon-default-fullname"> Price</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            {/* <i className="bx bx-user"></i> */}
                          </span>
                          <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-icon-default-fullname2"
                            onChange={(e) => dispatch(setPrice(e.target.value))}
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
                                    hotelsectoridshow.map((obj)=>{
                                        return (
                                            <option value={obj.id}>{obj.hotelsectorname}</option>
                                                )
                                    })
                                }
                              </select>
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
                                    hotelidshow.map((obj)=>{
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
