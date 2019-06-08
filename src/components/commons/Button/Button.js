import React,{Component} from 'react';
import './Button.scss';

class Button extends Component {
    render(){
        const {text, bgncolor, className, onClick} = this.props;
        return(
            <div className="button">
                <button className={className} style={{backgroundColor: bgncolor}} onClick={()=>onClick()}>{text}</button>
            </div>
        );
    }
}

export default Button;