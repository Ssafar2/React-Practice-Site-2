import './button.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Button = ({ buttonColor, iconColor }) => {
    return (
        <div className="Button3">
            <button style={{ backgroundColor: buttonColor }} type='button'>
                <IoIosArrowBack size={22} style={{ color: iconColor }} />
            </button>
            
            <button style={{ backgroundColor: buttonColor }} type='button'>
                <IoIosArrowForward size={22} style={{ color: iconColor }} />
            </button>
        </div>
    )
}

export default Button;