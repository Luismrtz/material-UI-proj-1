import { configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ImageTypes, TabTypes } from './type';


const itemData: ImageTypes[]= [
 
    {
      id: 1,
      img: '/images/library_1920.jpg',
      imgSmall: '/images/library_640.jpg',
      title: 'Books',
      altImg1: '/images/book_640.jpg',
      altImg2: '/images/watch_640.jpg',
    },
    
    {
        id: 2,
        img: '/images/bricks_1920.jpg',
      imgSmall: '/images/bricks_640.jpg',
      title: 'Room',
            altImg1: '/images/writingpad_640.jpg',
      altImg2: '/images/calculator_640.jpg',
    },
    {
      id: 3,
      img: '/images/computer_1280.jpg',
      imgSmall: '/images/computer_640.jpg',
      title: 'Peripherals',
            altImg1: '/images/book_640.jpg',
      altImg2: '/images/watch_640.jpg',
    },
    {
        id: 4,
        img: '/images/furniture_1920.jpg',
      imgSmall: '/images/furniture_640.jpg',
      title: 'Chair',
            altImg1: '/images/writingpad_640.jpg',
      altImg2: '/images/calculator_640.jpg',
    },
    {
      id: 5,
      img: '/images/office_1920.jpg',
      imgSmall: '/images/office_640.jpg',
      title: 'Desk',
            altImg1: '/images/book_640.jpg',
      altImg2: '/images/watch_640.jpg',
    },
    {
        id: 6,
        img: '/images/startup_1920.jpg',
      imgSmall: '/images/startup_640.jpg',
      title: 'Board',
            altImg1: '/images/writingpad_640.jpg',
      altImg2: '/images/calculator_640.jpg',
    },


   
  
  ];

  const tabData: TabTypes[]= [
    {
      id: 1,
        price: 3,
      title: 'Laptop',
      type: 1,
      desc: 'Item description for the item listed.  Currently a laptop. '
    },
    {
        id: 2,
      price: 6,
      title: 'Chair',
      type: 2,
      desc: 'Item description for the item listed.  Currently a chair.'
    },
    {
        id: 3,
        price: 8,
      title: 'Pen',
      type: 1,
      desc: 'Item description for the item listed.  Currently a pen.'
    },
    {
        id: 4,
      price: 0,
      title: 'Pencil',
      type: 2,
      desc: 'Item description for the item listed.  Currently a pencil.'
    },
    {
        id: 5,
      price: 4,
      title: 'Desk',
      type: 2,
      desc: 'Item description for the item listed.  Currently a desk.'
    },
    {
        id: 6,
      price: 10,
      title: 'Cabinet',
      type: 1,
      desc: 'Item description for the item listed.  Currently a cabinet.'
    },
    {
      id: 7,
    price: 10,
    title: 'Board',
    type: 1,
    desc: 'Item description for the item listed.  Currently a board.'
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