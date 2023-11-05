const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

import axios from "axios";

export const fetchRoom = createAsyncThunk('fetchRoom', async()=>{
    var tokenid=sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/room',config);
    return response.data;
});

export const fetchHotelsectorgetid = createAsyncThunk('fetchHotelsectorgetid', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/hotelsectorgetid');
    return response.data;
});



export const fetchHotelgetid = createAsyncThunk('fetchHotelgetid', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/hotelgetid');
    return response.data;
});


export const fetchHotelroombook = createAsyncThunk('fetchHotelroombook', async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/booking');
    return response.data;
});

export const addRoom = createAsyncThunk('addRoom', async (data)=>{
    //console.log(data);
    var tokenid=sessionStorage.getItem('username');
    const token = tokenid; // Replace with your actual token

    const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
    };
                const formData = new FormData();
                formData.append('name',data.name);
                formData.append('description',data.description);
                formData.append('status',data.status);
                formData.append('price',data.price);
                formData.append('hotel_id',data.hotel_id);
                formData.append('hotel_sector_id',data.hotel_sector_id);

                data.images.forEach((image) => {
                    formData.append('images[]', image); // Use array syntax to handle multiple files
                });

                console.log("room images :: ",data);

    const response = await axios.post('http://127.0.0.1:8000/api/room/',formData,config)
    return response.data;
});

export const roomDelete = createAsyncThunk('roomDelete', async(id)=>{
    const response= await axios.delete(`http://127.0.0.1:8000/api/room/${id}`);
    return response.data;
});

export const RoomOperation = createSlice({
    name:'RoomOperation',
    initialState:{
        name:'',
        images:[],
        description:'',
        status:'active',
        price:'',
        hotel_id:'',
        hotel_sector_id:'',
        rooms:[],
        hotelsectoridshow:[],
        hotelidshow:[],
        hotelroombookshow:[]
    },
    reducers:{
        setName:(state,payload)=>{
            state.name=payload.payload;
        },    
        setImages:(state,payload)=>{
            state.images=payload.payload;
        },      
        setDescription:(state,payload)=>{
            state.description=payload.payload;
        },      
        setStatus:(state,payload)=>{
            state.status=payload.payload;
        },      
        setPrice:(state,payload)=>{
            state.price=payload.payload;
        },
        setHotelid:(state,payload)=>{
            state.hotel_id=payload.payload;
        },
        setHotelsectorid:(state,payload)=>{
            state.hotel_sector_id=payload.payload;
        },
    },
    extraReducers:{
        [fetchRoom.fulfilled]:(state,action)=>{
            state.rooms = action.payload;
        },
        [fetchHotelsectorgetid.fulfilled]:(state,action)=>{
            state.hotelsectoridshow = action.payload;
        },
        [fetchHotelgetid.fulfilled]:(state,action)=>{
            state.hotelidshow = action.payload;
        },
        [fetchHotelroombook.fulfilled]:(state,action)=>{
            state.hotelroombookshow = action.payload;
        },
        [addRoom.fulfilled]:()=>{
            alert("Data added successfully");
            window.location.href="/room/roomshow";
        },
        [roomDelete.fulfilled]:()=>{
            alert("Data Deleted Successfully");
        },
    }
});

export const {setName, setDescription, setImages, setStatus, setHotelid, setHotelsectorid, setPrice} = RoomOperation.actions;

export default RoomOperation.reducer;