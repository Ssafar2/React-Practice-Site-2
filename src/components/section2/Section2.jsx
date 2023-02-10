import './section2.css';
import { GiBookmarklet } from "react-icons/gi";
import { GiDiscGolfBag } from "react-icons/gi";
import Job from '../jobInfo/Job';
import Edubody from '../eduBody/Edubody';
import Workbody from '../Workbody/Workbody';
import Button from '../button/Button';
import Work1 from '../../img/work.png';
import Work2 from '../../img/work2.png';
import Work3 from '../../img/work3.png';
import Work4 from '../../img/work4.png';
import Space from '../../img/space.png';
import Music from '../../img/music.png';
import Kingdom from '../../img/kingdom.png';
import Ceo from '../../img/ceo.png'
import Nail from '../../img/nail.png'


const Section2 = () => {
    return (
        <div className="Section2">
            <div className="section2Head">
                <div className="left">

                    <Job head3='MƏHSUL DİZAYNERİ'
                        col='#FF5E69'
                        content1='Bu mənəm!' />
                </div>

                <div className="right">
                    <p>Son 12 il ərzində mən startaplardan tutmuş Fortune 500 şirkətlərinə qədər müxtəlif müştərilərlə işləmişəm. Mən istifadəçiləri sevindirən və biznesin böyüməsinə kömək edən interfeyslər yaratmağı sevirəm.</p>
                </div>
            </div>
            <div className="works">
                <div className="worksImg">
                    <img src={Work1} alt="w1" />
                    <img src={Work2} alt="w2" />
                </div>
                <div className="littleImg">
                    <img src={Work3} alt="w3" />
                    <img src={Work4} alt="w4" />
                </div>
            </div>



            <div className="edu_work">
                <div className="edu">
                    <div className="eduHead">
                        <GiBookmarklet style={{ color: '#000000' }} size={40} />
                        <p>Təhsil</p>
                    </div>
                    <div className="edus">
                        <Edubody uniName='Stanford University'
                            uniYear='2013-2015'
                            pos='MSc (Human Computer Interaction)' />

                        <Edubody uniName='MIT Summer School'
                            uniYear='2013-2014'
                            pos='UX Training Bootcamp' />

                        <Edubody uniName='California State University'
                            uniYear='2009-2012'
                            pos='BSc in Software Engineering' />

                    </div>
                </div>


                <div className="exp">
                    <div className="workHead">
                        <GiDiscGolfBag style={{ color: '#000000' }} size={40} />
                        <p>İş Təcrübəsi</p>
                    </div>

                    <div className="workss">
                        <Workbody
                            eduBodyImg={Space}
                            bckColor='#FFB4E9'
                            uniName='SpaceFleet'
                            uniYear='April 2019 - Current'
                            pos='Senior Product Designer' />

                        <Workbody
                            eduBodyImg={Music}
                            bckColor='#A5BEFF'
                            uniName='MusicMash'
                            uniYear='April 2016 - May 2017'
                            pos='Information Architect' />

                        <Workbody
                            eduBodyImg={Kingdom}
                            bckColor='#FFC960'
                            uniName='Kingdom'
                            uniYear='April 2016 - May 2017'
                            pos='UI Designer' />
                    </div>
                </div>
            </div>

            <div className="ceo">
                <div className="ceoHead">
                    <Job head3='Rəylər'
                        col='#4353FF'
                        content1='Küçədə söz' />
                </div>

                <div className="ceoBody">
                    <div className="ceoImg">
                        <img src={Ceo} alt="ceo" />
                    </div>

                    <div className="ceoContent">
                        <img src={Nail} alt="nail" />

                        <h3>Jade bizə o qədər intuitiv proqram təminatı yaratmağa kömək etdi ki, onun üçün bir araşdırmaya ehtiyac qalmadı. O, parlaq dizaynla mürəkkəb məsələləri həll edirdi.</h3>

                        <div className="ceoInfo">
                            <div className="ceoFounde">
                                <h4>John Frankin</h4>
                                <p>Founder, Double Bunch</p>
                            </div>

                            <Button buttonColor='#000000'
                                iconColor='#FFFFFF' />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Section2;