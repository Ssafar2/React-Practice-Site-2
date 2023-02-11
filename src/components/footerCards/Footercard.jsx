import './footercard.css';
import { IoIosArrowDown } from 'react-icons/io'

const Footercard = ({ fcardHead }) => {

    return (
        <div className="Footercard">
   
                <div className="fcardHead">
                    <h3>{fcardHead}</h3>
                    <IoIosArrowDown className='fIcon' />
                </div>
                <hr />
        </div>
    )
}

export default Footercard;