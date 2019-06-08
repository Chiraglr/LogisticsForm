import React,{Component} from 'react';
import ProductIdInput from '../../components/ProductIdInput/ProductIdInput';
import TextInput from '../../components/commons/TextInput/TextInput';
import Button from '../../components/commons/Button/Button';
import './InventoryRecord.scss';

class InventoryRecord extends Component{
    render(){
        const {content, index, deleteOrder,onChange, onClickAutoFill} = this.props;
        return(
            <div className="inventory-record">
                <ProductIdInput value={content.productID} onChange={(value)=>onChange(index,'productID',value)} onClickAutoFill={onClickAutoFill} />
                <TextInput className="input product-name-input" placeHolder="" onChange={(value)=>onChange(index,'productName',value)} value={content.productName}/>
                <TextInput className="input qty-input" placeHolder="" onChange={(value)=>onChange(index,'qty',value)} value={content.qty}/>
                <TextInput className="input unit-price-input" placeHolder="" onChange={(value)=>onChange(index,'unitPrice',value)} value={content.unitPrice}/>
                <TextInput className="input total-price-input" placeHolder="" value={content.totalPrice} onChange={()=>{}}/>
                <textarea className="input notes-input" onChange={()=>{}} />
                <Button className="delete" text="DELETE" onClick={()=>deleteOrder(index)}/>
            </div>
        );
    }
}

export default InventoryRecord;