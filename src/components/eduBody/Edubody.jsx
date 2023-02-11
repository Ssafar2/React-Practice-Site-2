import './eduBody.css';
import { FiArrowUpRight } from 'react-icons/fi';


const Edubody = ({uniName,pos,uniYear}) => {
    return (
        <div className="Edubody">

            <div className="edu_body">

                <div className="eduBodyHead">
                    <h3>{uniName}</h3>
                    <FiArrowUpRight className='ss' />
                </div>

                <div className="eduYear">
                    <p>{pos}</p>
                    <ul>
                        <li>{uniYear}</li>
                    </ul>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default Edubody;