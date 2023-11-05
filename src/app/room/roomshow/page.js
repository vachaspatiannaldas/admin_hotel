"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchRoom, roomDelete } from "@/app/redux/roomslice";
import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Nav from "@/app/nav/page";
export default function Roomshow() {
    
    const {rooms} = useSelector((state) => state.RoomOperation)
    const dispatch = useDispatch();  
    
    useEffect(()=>{
        dispatch(fetchRoom());
    },[dispatch])

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
  {/* Basic Bootstrap Table */}
  <div className="card">
   <div className='d-flex'>
    <h5 className="card-header">Room Table</h5>
    <Link href="/room/addroom" className='mt-3'><button className='btn btn-primary'>Add Room</button></Link>
   </div>
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Status</th>
            <th>Price</th>
            {/* <th>Hotel id</th>
            <th>Hotel Sector id</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
        {rooms && rooms.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.images}</td>
            <td>{user.description}</td>
            <td>{user.status}</td>
            <td>{user.price}</td>
            {/* <td>{user.hotel_id}</td>
            <td>{user.hotel_sector_id}</td> */}
            <td>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn p-0 dropdown-toggle hide-arrow"
                  data-bs-toggle="dropdown"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  {/* <Link className="dropdown-item" href={`/Category/editcategory/${user.id}`}>
                    <i className="bx bx-edit-alt me-2" /> Edit
                  </Link> */}
                  <a class="dropdown-item" href="javascript:void(0);" onClick={() => dispatch(roomDelete(user.id))}>
                    <i class="bx bx-trash me-1"></i> Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  {/*/ Basic Bootstrap Table */}

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
