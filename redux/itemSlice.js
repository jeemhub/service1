import { createSlice } from '@reduxjs/toolkit'
export const ProductSlice = createSlice({
  name: 'Product',
  initialState:{
    productSlice:[],
    count:0,
  },
  reducers: {
    Removeall:(state,action)=>{
      state.productSlice=[];
      state.count=0;
    },
    AddProduct: (state, action) => {
      state.productSlice.push(action.payload);
      state.count=  state.productSlice.length;
    },
    RemoveProduct:(state,action)=>{
        const newarr=[]
        for(let i = 0;i<state.productSlice.length;i++){
            if(state.productSlice[i].title != action.payload){
                newarr.push(state.productSlice[i])
            }
        }
    state.productSlice=newarr;
    state.count=  state.productSlice.length;
    
    }
  
  },
})

export const { AddProduct,RemoveProduct,Removeall } = ProductSlice.actions

export default ProductSlice.reducer