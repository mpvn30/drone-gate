import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

const styles = theme => ({
    container: {
        width: "100%",
        height: "100px",
    },
    collection: {
        display: "flex",
        height: "75px",
        width: "50%",
        margin: "0 80%",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    checkout: {
        width: "50%",
        margin: "0 80%",
    }
  });

class CartButtons extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        const { classes } = this.props
        return(
            <div className={classes.container}>
                <div className={classes.collection}>
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className={classes.checkout}>
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartButtons));
