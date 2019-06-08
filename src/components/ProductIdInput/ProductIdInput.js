import React,{Component} from 'react';
import TextInput from '../commons/TextInput/TextInput';
import Button from '../commons/Button/Button';
import 'font-awesome/css/font-awesome.min.css';
import './ProductIdInput.scss';

class ProductIdInput extends Component{
    render(){
        const {value, onChange, onClickAutoFill} = this.props;
        return(
            <div className="product-id-input-container">
                <TextInput className="product-id-input" placeHolder="" value={value} onChange={onChange}/>
                <Button className="autofill" text={<i className="fa fa-arrows-h" aria-hidden="true"></i>} onClick={onClickAutoFill}/>
            </div>
        );
    }
}

export default ProductIdInput;