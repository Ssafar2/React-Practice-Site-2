import './blogCards.css';
import { BsArrowRightShort } from 'react-icons/bs';

const BlogCards = ({time,blogHead}) => {
    return (
        <div className='BlogCards'>


            <h5 className='blogTime'>{time}</h5>


            <h4>{blogHead}</h4>

            <div className="articleBlog">
                <h5>Məqaləni oxu</h5>
                <BsArrowRightShort size={22}/>
            </div>

            <hr style={{color:'#FFFFFF',marginTop:'20px'}}/>

        </div>
    )
}

export default BlogCards;