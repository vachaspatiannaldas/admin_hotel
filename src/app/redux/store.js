import { configureStore } from "@reduxjs/toolkit";
import CategoryOperation from './slice'
import  VendorOperation  from "./vendorslice";
import  HotelOperation  from "./hotelslice";
import  RoomOperation  from "./roomslice";
import  HotelsectorOperation  from "./hotelsectorslice";
import HoteladminOperation from "./hoteladminslice";
import AdminLoginOperation from "./loginslice";
export const store = configureStore({
    reducer : {CategoryOperation:CategoryOperation, VendorOperation:VendorOperation, HotelOperation:HotelOperation, RoomOperation:RoomOperation, HotelsectorOperation: HotelsectorOperation, HoteladminOperation: HoteladminOperation, AdminLoginOperation: AdminLoginOperation,},
    middleware:getDefaultMiddleware=>getDefaultMiddleware({
        serializableCheck:false,
    })
})