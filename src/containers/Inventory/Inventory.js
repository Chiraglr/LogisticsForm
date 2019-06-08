import React,{Component} from 'react';
import InventoryRecord from '../InventoryRecord/InventoryRecord';
import './Inventory.scss';

class Inventory extends Component{
    render(){
        let {orders, deleteOrder, onChange, onClickAutoFill} = this.props;
        orders = orders.map((record,index)=>{
            return <InventoryRecord index={index} content={record} deleteOrder={deleteOrder} onChange={onChange} onClickAutoFill={() => onClickAutoFill(index)} />
        });
        return(
            <div className="inventory">
                <div className="inventory-titles">
                    <p className="product-id title">Product ID</p>
                    <p className="product-name title">Product Name</p>
                    <p className="qty title">QTY</p>
                    <p className="unit-price title">Unit Price</p>
                    <p className="total-price title">Total Price</p>
                    <p className="notes title">Notes</p>
                    <p className="remove title">-</p>
                </div>
                {orders}
            </div>
        );
    }
}

export default Inventory;