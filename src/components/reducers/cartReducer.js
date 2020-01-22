
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

import Item1 from '../../resources/images/img1.jpg'
import Item2 from '../../resources/images/img2.jpg'
import Item3 from '../../resources/images/img3.jpg'
import Item4 from '../../resources/images/img4.jpg'
import Item5 from '../../resources/images/img5.jpg'
import Item6 from '../../resources/images/img6.jpg'


const initState = {
    items: [
        {id:1,title:'Mavic Mini', desc: "249 g Ultralight | 30-min Max. Flight Time | 4 km HD Video Transmission | Vision Sensor + GPS Precise Hover | 3-Axis Gimbal 2.7K Camera | Simplified Recording & Editing", price:339,img:Item1},
        {id:2,title:'Mavic 2 Pro', desc: "Hasselblad Camera | 20 MP 1” CMOS Sensor | Adjustable Aperture | 10-bit Dlog-M colour profile | 10-bit HDR Video | Hyperlapse | 8 km 1080p Video Transmission | 31min flight time", price:1499,img:Item2},
        {id:3,title:'Mavic 2 Zoom', desc: "2× Optical Zoom Camera | 4× Lossless Zoom FHD Video | 48MP Super Resolution Photo | Dolly Zoom | Hyperlapse | 8 km 1080p Video Transmission | 31min flight time",price:1249,img: Item3},
        {id:4,title:'Mavic Air', desc: "32 MP Sphere Panoramas | Foldable & Portable | 3-Axis Gimbal & 4K Camera | 3-Directional Environment Sensing | SmartCapture | 21-Minute Flight Time", price:919,img:Item4},
        {id:5,title:'Mavic Pro Platinum', desc: "32 MP Sphere Panoramas | Foldable & Portable | 3-Axis Gimbal & 4K Camera | 3-Directional Environment Sensing | SmartCapture | 21-Minute Flight Time", price:1149,img: Item5},
        {id:6,title:'Mavic Pro', desc: "4K Camera | 12 MP Photos | 7 km Range | 65 kph Max Speed",price:999,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
