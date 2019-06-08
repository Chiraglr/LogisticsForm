import React,{Component} from 'react';
import Form from '../Form/Form';
import DatePicker from 'react-date-picker';
import './LogisticsContainer.scss';

class LogisticsContainer extends Component{
    render(){
        const {content, onChange} = this.props;
        return(
            <div className="logistics-container">
                <div className="logistics-content-holder">
                    <div className="form-container">
                        <Form formTitle="Billing Address" filter="BillingAddress" address={content.BillingAddress} onChange={onChange}/>
                        <Form formTitle="Shipping Address" filter="ShippingAddress" address={content.ShippingAddress} onChange={onChange}/>
                    </div>
                    <div className="date-container">
                        <div className="date">
                            <p className="date-title">Order Date</p>
                            <DatePicker
                            value={content.OrderDate}
                            onChange={(date)=>{onChange('OrderDate',date)}}
                            />
                        </div>
                        <div className="date">
                            <p className="date-title">Expected Delivery</p>
                            <DatePicker
                            value={content.ExpectedDelivery}
                            onChange={(date)=>{onChange('ExpectedDelivery',date)}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogisticsContainer;