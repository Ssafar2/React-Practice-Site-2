import './footercard.css';
import { IoIosArrowDown } from 'react-icons/io'

const Footercard = ({ fcardHead }) => {

    return (
        <div className="Footercard">
   
                <div className="fcardHead">
                    <h3>{fcardHead}</h3>
                    <IoIosArrowDown size={22} />
                </div>
                <hr />
        </div>
    )
}

export default Footercard;