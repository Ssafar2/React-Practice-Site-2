import './services.css';


const Service = ({head,par,li1,li2,li3,logo1}) => {

    return (

        <div className='Service'>

            <div className='serviceCards'>

                <div className="serviceLogo1">
                    <img src={logo1} alt="serviceLogo" />
        
                </div>

                <h3 className="serviceHead2">{head}</h3>
                <p>{par}</p>

                <ul className='servUl'>
                    <li><h4>{li1}</h4></li>
                    <li><h4>{li2}</h4></li>
                    <li><h4>{li3}</h4></li>
                </ul>

            </div>
        </div>
    )

}

export default Service;