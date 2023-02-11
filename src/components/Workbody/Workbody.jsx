import './workbody.css';
import { FiArrowUpRight } from 'react-icons/fi';


const Workbody = ({eduBodyImg,bckColor,uniName,pos,uniYear}) => {
    return (
        <div className="Workbody">
            <div className="work_body">
                <div className="workBodys">
                    <div style={{backgroundColor:bckColor}} className="expImg">
                        <img  src={eduBodyImg} alt="" />
                    </div>
                    <div className="div">
                        <div className="workBodyHead">
                            <h3>{uniName}</h3>
                            <FiArrowUpRight className='ss' />
                        </div>

                        <div className="workYear">
                            <p>{pos}</p>
                            <ul>
                                <li>{uniYear}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default Workbody;