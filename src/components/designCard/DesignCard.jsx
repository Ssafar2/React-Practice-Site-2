import './designCard.css';
import {BsArrowRightShort} from 'react-icons/bs';


const DesignCard = ({pic,head,head2}) => {

    return (
        <div className='DesignCard'>
            <div className="designImg">
                <img src={pic} alt="Design" />
            </div>
            <div className="designBody">
                <h5>{head}</h5>
                <h3>{head2}</h3>
                <div className="viewProj">
                    <p>Layihəyə Baxmaq</p>
                    <BsArrowRightShort size={20} />
                </div>
            </div>
        </div>
    )

}

export default DesignCard;