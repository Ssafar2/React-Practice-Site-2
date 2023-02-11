import './header.css';

import { BsArrowRightShort } from 'react-icons/bs';
import Profile from '../../img/profile.png';
import Logo1 from '../../img/logo1.png';
import Logo2 from '../../img/logo2.png';
import Logo3 from '../../img/logo3.png';
import Logo4 from '../../img/logo4.png';
import serviceLogo from '../../img/serviceLogo.jpg';
import serviceLogo2 from '../../img/serviceLogo2.png';
import serviceLogo3 from '../../img/serviceLogo3.jpg';
import Design from '../../img/design.png';
import Design2 from '../../img/design2.png';
import Design3 from '../../img/design3.png';

import Service from '../serviceCard/Services';
import DesignCard from '../designCard/DesignCard';
import Job from '../jobInfo/Job';

const Header = () => {

    return (
        <div className='Header'>
            <nav>
                <h3>Portfolio qurucusu</h3>
                <ul>
                    <li>Haqqımızda</li>
                    <li>Servis</li>
                    <li>Proyekt</li>
                    <li>Blog</li>

                    <li>Sifariş edin</li>
                    <BsArrowRightShort size={25} />

                </ul>
            </nav>



            <div className='headerInfo'>
                
                <div className='headerHead'>
                    <h2>İnsanları sevindirən</h2>
                    <h2>və ruhlandıran məhsullar hazırlayıram</h2>
                    <p>Salam! Mən Sahib, Bakıda fəaliyyət göstərən məhsul dizayneriyəm. Sürətlə böyüyən startaplar üçün istifadəçi dostu interfeyslər yaradıram.</p>
                    <div className='Button2'>
                        <button typeof='button'>Sifariş edin</button>
                        <button>CV yüklə</button>
                        <BsArrowRightShort size={30} />
                    </div>
                </div>
                <div className='headerImg'>
                    <img src={Profile} alt="Profile" height={'700px'} />
                </div>

            </div>


            <div className="headerSection">
                <p className='logosPar'>Bizə güvənənlər</p>
                <div className="logos">
                    <div className="allLogo">
                        <img src={Logo1} alt="logo1" />
                        <img src={Logo2} alt="logo2" />
                        <img src={Logo3} alt="logo3" />
                        <img src={Logo4} alt="logo4" />
                    </div>
                </div>
                <div className="services">

                    <div className='serviceHeader'>
                        <Job head3='SERVİSLƏR'
                            col='#FF5E69'
                            content1='Problemləri həll edən dizayn,hər dəfə bir məhsul.'
                            chClass='serviceHeader'
                        />
                    </div>


                    <div className="allService">
                        <Service head='Sizin üçün nə edə bilərəm'
                            par='İstifadəçilərinizin bəyəndiyi daha sürətli, daha yaxşı məhsullar. Təqdim etdiyim bütün xidmətlər bunlardır:'
                            li1='Dizayn Strategiyası'
                            li2='Vep və Mobil Proqram Dizaynı'
                            li3='Front-End Development'
                            logo1={serviceLogo} />


                        <Service head='Əla bildiyim proqramlar'
                            par='Mükəmməl işi görmək üçün hər bir dizaynerə düzgün alətlər lazımdır. Şükürlər olsun ki, mən çoxdilliyəm.'
                            li1='Sketch'
                            li2='Webflow'
                            li3='Figma'
                            logo1={serviceLogo2} />


                        <Service head='Nə gözləmək olar'
                            par='Mən məhsullar dizayn edirəm thar daha gözəldir. Mən onları göndərilə bilən və istifadə edilə bilən hala gətirirəm.'
                            li1=' Təmiz və işlək'
                            li2=' Cihaz və istifadəçi dostu '
                            li3=' Effektiv və saxlanıla bilən'
                            logo1={serviceLogo3} />

                    </div>
                </div>

                <div className="projects">
                    <div className="projInfo">
                        <Job head3='PROYEKTLƏR'
                            col='#B16CEA'
                            content1='Nəticə gətirirəm. Müştərilərim sübutdur.'

                            chClass='projInfo'
                        />
                        <div className="projBtn">
                            <button type='button'>Bütün layihələrə baxın</button>
                        </div>

                    </div>

                    <div className="designCards">
                        <DesignCard pic={Design}
                            head='BRENDLƏŞMƏ'
                            head2='Yenidən Markalama' />

                        <DesignCard pic={Design2}
                            head='MƏHSUL DİZAYN'
                            head2='Datadash Məhsul dizaynı' />

                        <DesignCard pic={Design3}
                            head='VEB DİZAYN'
                            head2='Qarğıdalı Veb Dizayn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;