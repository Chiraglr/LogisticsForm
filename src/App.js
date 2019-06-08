import React,{Component} from 'react';
import { connect } from 'react-redux';
import LogisticsContainer from './containers/LogisticsContainer/LogisticsContainer';
import InventoryContainer from './containers/InventoryContainer/InventoryContainer';
import { addOrder } from './actions/actions';
import './App.scss';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSave: (delivery,inventory) => dispatch(addOrder(Object.assign({},delivery,inventory)))
});

class App extends Component{
  state = {
    BillingAddress: {
      FirstName: '',
      LastName: '',
      AddressLine1: '',
      AddressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    },
    ShippingAddress: {
      FirstName: '',
      LastName: '',
      AddressLine1: '',
      AddressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    },
    OrderDate: null,
    ExpectedDelivery: null,
    // rerender: true,
  };

  onChange = (filterName1,value,filterName2)=>{
    if(filterName1==='BillingAddress' || filterName1==='ShippingAddress'){
      if(filterName2==='zipcode' && (value.length===7 || isNaN(Number(value)))){
        return;
      }
      this.setState({[filterName1]: Object.assign({},this.state[filterName1],{[filterName2]: value})});
      return;
    }
    this.setState({[filterName1]: value});
    return;
  }

  onSave = (inventory,rerender) => {
    const {onSave} = this.props;
    const {ShippingAddress, BillingAddress, OrderDate, ExpectedDelivery} = this.state;
    Object.values(ShippingAddress).forEach((input)=>{
      if(input===''){
        return;
      }
    });
    Object.values(BillingAddress).forEach((input)=>{
      if(input===''){
        return;
      }
    });
    if(OrderDate===null || ExpectedDelivery===null || OrderDate>ExpectedDelivery){
      return;
    }
    onSave(this.state,inventory);
    this.setState({
    BillingAddress: {
      FirstName: '',
      LastName: '',
      AddressLine1: '',
      AddressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    },
    ShippingAddress: {
      FirstName: '',
      LastName: '',
      AddressLine1: '',
      AddressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    },
    OrderDate: null,
    ExpectedDelivery: null,});
    rerender();
  }

  render(){
    // const {rerender} = this.state;
    return (
      <div className="edit-order-page">
        <LogisticsContainer content={this.state} onChange={this.onChange}/>
        <InventoryContainer onSave={this.onSave}/>
      </div>
    );
  }
}

// export default App;
export default connect(
  null,
  mapDispatchToProps,
)(App);