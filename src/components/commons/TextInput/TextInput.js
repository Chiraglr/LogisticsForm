import React,{Component} from 'react';

class TextInput extends Component{
    render(){
        const {className, placeHolder, onChange, value} = this.props;
        return(
            <input className={className} type="text" placeHolder={placeHolder} value={value} onChange={(e)=>onChange(e.target.value)}/>
        );
    }
}

export default TextInput;
