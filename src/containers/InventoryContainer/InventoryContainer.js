import React,{Component} from 'react';
import { connect } from 'react-redux';
import Inventory from '../Inventory/Inventory';
import Button from '../../components/commons/Button/Button';
import './InventoryContainer.scss';

const mapStateToProps = (state) => {
    return {
    products: state.products,
    }
};

class InventoryContainer extends Component{
    state = {
        orders: [{
            productID: '',
            productName: '',
            unitPrice: '',
            qty: '',
            totalPrice: '',
            notes: '',
        }],
    }

    deleteOrder = (index)=>{
        const {orders} = this.state;
        if(orders.length===1){
            this.setState({orders: [{
                productID: '',
                productName: '',
                unitPrice: '',
                qty: '',
                totalPrice: '',
                notes: '',
            }]});
            return;
        }
        orders.splice(index,1);
        this.setState({orders,});
        return;
    }

    onChange = (index,fieldName,value) => {
        const {orders} = this.state;
        if(fieldName==='productName'){
            return;
        }
        if(fieldName==='unitPrice' || fieldName==='qty'){
            if(isNaN(Number(value))){
                return;
            }else{
                orders[index][fieldName] = value;
                orders[index].totalPrice = (Number(orders[index].qty)*Number(orders[index].unitPrice)).toString();
                this.setState({orders,});
                return;
            }
        }
        if(fieldName==='productID'){
            if(isNaN(Number(value))){
                return;
            }
        }
        orders[index][fieldName] = value;
        this.setState({orders: orders});
        return;
    }

    addProduct = () =>{
        const {orders} = this.state;
        orders.push({
            productID: '',
            productName: '',
            unitPrice: '',
            qty: '',
            totalPrice: '',
            notes: '',
        });
        this.setState({
            orders,
        });
    }

    onClickAutoFill = (index) =>{
        const {products} = this.props;
        const {orders} = this.state;
        products.ids.forEach((id,i)=>{
            if(Number(orders[index].productID)===id){
                orders[index].productName = products.relatedInfo[i].product_name;
                orders[index].unitPrice = products.relatedInfo[i].unit_price.toString();
                orders[index].qty = products.relatedInfo[i].qty.toString();
                orders[index].totalPrice = (Number(orders[index].qty)*Number(orders[index].unitPrice)).toString();
                this.setState({orders,});
                return;
            }
        });
    }

    onClickSave = () => {
        const {orders} = this.state;
        const {onSave} = this.props;
        orders.forEach((order)=>{
            if(order.productID==='' || order.productName==='' || order.unitPrice==='' || order.qty===''){
                console.log('please enter all fields');
                return;
            }
        });
        onSave(this.state,this.rerender);
    }

    rerender = ()=>{
        this.setState({
            orders: [{
                productID: '',
                productName: '',
                unitPrice: '',
                qty: '',
                totalPrice: '',
                notes: '',
            }],
        });
    }

    render(){
        const {orders} = this.state;
        return(
            <div className="inventory-container">
                <div className="inventory-content-holder">
                    <Inventory orders={orders} deleteOrder={this.deleteOrder} onChange={this.onChange} onClickAutoFill={this.onClickAutoFill}/>
                    <div className="inventory-options">
                        <div className="add-container">
                            <Button className="add-product" text="ADD PRODUCT" onClick={this.addProduct}/>
                        </div>
                        <div className="save-container">
                            <Button className="save" text="SAVE" onClick={this.onClickSave}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
  )(InventoryContainer);