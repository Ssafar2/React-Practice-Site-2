import './section.css';
import { BsArrowRightShort } from 'react-icons/bs';
import BlogCards from '../blogCards/BlogCards';
import Button from '../button/Button';
import Job from '../jobInfo/Job';

const Section1 = () => {

    return (
        <div className='Section1'>
            <div className="section1Left">

                <Job head3='BLOQLAR'
                    col='#FFA84B'
                    content1='SON BLOQLAR'/>

                <div className='lookAll'>
                    <h4>Hamısına baxmaq</h4>
                    <BsArrowRightShort size={20} />
                </div>
            </div>

            <div className="buttonGroup">
                <Button  buttonColor='#FFFFFF'
                iconColor='#000000'
                />
            </div>


            <div className="section1Right">
                <BlogCards time='16 Aprel,2021 .6 dəq'
                    blogHead='Dizaynerlər üçün sizə lazım olan hər şeyi əhatə edən dizayn məsləhətləri'
                />

                <BlogCards time='22 Fevral,2022 .2 dəq'
                    blogHead='Veb dizayn müştərilərinizlə necə münasibət qurmaq olar'
                />

                <BlogCards time='15 İyun 2022, 30 dəq'
                    blogHead='2021-in ən yaxşı 6 pulsuz veb sayt maketi alətləri'
                />

                <BlogCards time='21 Noyabr 2022, 42 dəq'
                    blogHead='2021-ci ildə qarşısını almaq üçün loqo dizayn tendensiyaları'
                />

                <BlogCards time='27 Noyabr 2022, 38 dəq'
                    blogHead='22 ən yaxşı UI dizayn aləti'
                />

            </div>
        </div>
    )
}

export default Section1;