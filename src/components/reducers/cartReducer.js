import img1 from '../../resources/images/img1.jpg'

const initialState = {
    items: [
        {id:1, name: "name", desc: "249 g Ultralight | 30-min Max. Flight Time | 4 km HD Video Transmission | Vision Sensor + GPS Precise Hover | 3-Axis Gimbal 2.7K Camera | Simplified Recording & Editing", price: 399, img: img1 },
        {id:2, name: "name2", desc: "249 g Ultralight | 30-min Max. Flight Time | 4 km HD Video Transmission | Vision Sensor + GPS Precise Hover | 3-Axis Gimbal 2.7K Camera | Simplified Recording & Editing", price: 200, img: img1 },
        {id:3, name: "name2", desc: "249 g Ultralight | 30-min Max. Flight Time | 4 km HD Video Transmission | Vision Sensor + GPS Precise Hover | 3-Axis Gimbal 2.7K Camera | Simplified Recording & Editing ", price: 200, img: img1 }
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;