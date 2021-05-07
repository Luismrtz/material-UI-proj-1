import { configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ImageTypes, TabTypes } from './type';


const itemData: ImageTypes[]= [
    {
      id: 1,
      img: '/images/canyon_1920.jpg',
      title: 'Bed',
    },
    {
        id: 2,
      img: '/images/hiker_640.jpg',
      title: 'Books',
    },
    {
        id: 3,
      img: '/images/canyon_1920.jpg',
      title: 'Sink',
    },
    {
        id: 4,
      img: '/images/hiker_640.jpg',
      title: 'Kitchen',
    },
    {
        id: 5,
      img: '/images/canyon_1920.jpg',
      title: 'Blinds',
    },
    {
        id: 6,
      img: '/images/hiker_640.jpg',
      title: 'Chairs',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    //   title: 'Laptop',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //   title: 'Doors',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //   title: 'NotDoors',
    // },
   
  
  ];

  const tabData: TabTypes[]= [
    {
      id: 1,
        price: 3,
      title: 'Bed',
      type: 1,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way. This is a description of tips and tricks.  Sending multiple greetings your way. This is a description of tips and tricks.  Sending multiple greetings your way.'
    },
    {
        id: 2,
      price: 6,
      title: 'Books',
      type: 2,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way.'
    },
    {
        id: 3,
        price: 8,
      title: 'Sink',
      type: 1,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way.'
    },
    {
        id: 4,
      price: 0,
      title: 'Kitchen',
      type: 2,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way.'
    },
    {
        id: 5,
      price: 4,
      title: 'Blinds',
      type: 2,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way.'
    },
    {
        id: 6,
      price: 10,
      title: 'Chairs',
      type: 1,
      desc: 'This is a description of tips and tricks.  Sending multiple greetings your way.'
    },

  
  ];

const selectImageSlice = createSlice({
    name: 'selectImage',
    initialState: itemData,
    reducers: {
        select: (state, {payload}: PayloadAction<{id: string}>) => {
                //* Note, NOT doing a filter here because it will filter stack unless refresh
                //* instead, save this till calling a proper axios call to db
                //* the db call should be calling the specific entry by it's  ' :id ' 
        //    const qwop = state.filter(filt => filt.id === payload.id);
            return state
            
        
        }

        },
});
const selectTabbingsSlice = createSlice({
    name: 'selectTabbing',
    initialState: tabData,
    reducers: {
        select: (state, {payload}: PayloadAction<{id: string}>) => {
            return state
            
        
        }

        },
});

export const {
    
    select: selectTicketActionCreator
} = selectImageSlice.actions;


export const {
    select: selectTabbingActionCreator
} = selectTabbingsSlice.actions;


const reducer = {
    switching: selectTabbingsSlice.reducer,
    select: selectImageSlice.reducer,

};

export default configureStore({
    reducer
});