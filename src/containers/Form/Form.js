import React,{Component} from 'react';
import TextInput from '../../components/commons/TextInput/TextInput';
import './Form.scss';

class Form extends Component{
    render(){
        const {formTitle, address, onChange, filter} = this.props;
        return(
            <div className="form">
                <p className="form-title">{formTitle}</p>
                <TextInput className="input-field" placeHolder="First Name" value={address.FirstName} onChange={(value)=>{onChange(filter,value,'FirstName')}}/>
                <TextInput className="input-field" placeHolder="Last Name" value={address.LastName} onChange={(value)=>{onChange(filter,value,'LastName')}}/>
                <TextInput className="input-field" placeHolder="Address line 1" value={address.AddressLine1} onChange={(value)=>{onChange(filter,value,'AddressLine1')}}/>
                <TextInput className="input-field" placeHolder="Address line 2" value={address.AddressLine2} onChange={(value)=>{onChange(filter,value,'AddressLine2')}}/>
                <TextInput className="input-field" placeHolder="City" value={address.city} onChange={(value)=>{onChange(filter,value,'city')}}/>
                <TextInput className="input-field" placeHolder="State" value={address.state} onChange={(value)=>{onChange(filter,value,'state')}}/>
                <TextInput className="input-field" placeHolder="Zipcode" value={address.zipcode} onChange={(value)=>{onChange(filter,value,'zipcode')}}/>
                <TextInput className="input-field" placeHolder="Country" value={address.country} onChange={(value)=>{onChange(filter,value,'country')}}/>
            </div>
        );
    }
}

export default Form;