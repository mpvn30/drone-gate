  
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import CartButtons from './CartButtons'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

      let addedItems = this.props.items.length ? (
        this.props.items.map(item => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.desc}</p>
            </div>
            
          )
        })
      ) : (
        <p>Your Cart is empty!</p>
      )

      return(
        <div>
          {addedItems}
          <CartButtons />
        </div>
      )
    }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)