import './job.css';

const Job = ({head3,content1,col}) => {
    return (
        <div className="Job">

            <h4 style={{color:col}}>{head3}</h4>
                <div style={{ marginTop: '10px' }}>
                    <h1>{content1}</h1>
                </div>
              
    


        </div>

    )
}

export default Job;