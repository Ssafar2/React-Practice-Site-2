import './footer.css';
import { IoIosMail } from 'react-icons/io';
import Job from '../jobInfo/Job';
import Footercard from '../footerCards/Footercard';


const Footer = () => {
    return (
        <div className="Footer">
            <div className="footerHead">
                <Job head3='FAQ'
                    col='#FF8A56'
                    content1='Tez-tez soruşulan suallar' />
            </div>
            <div className="footerBody">
                <div className="fLeft">
                    <Footercard fcardHead='Hansı növ layihələri qəbul edirsiniz?' />
                    <Footercard fcardHead='Sizin saatlıq tarifiniz nədir?' />
                    <Footercard fcardHead='Hansı saat qurşağında işləyirsiniz?' />
                    <Footercard fcardHead='Layihə üçün tipik vaxt qrafiki nədir?' />

                </div>

                <div className="fRight">
                    <Footercard fcardHead='Layihələr üçün necə ödəniş edirsiniz?' />
                    <Footercard fcardHead='Dizayn prosesiniz necə görünür?' />
                    <Footercard fcardHead='Müvəffəqiyyəti ölçmək üçün hansı ölçülərdən istifadə edirsiniz?' />
                    <Footercard fcardHead='Layihə başa çatdıqdan sonra mənə kömək lazım olsa nə etməli?' />
                </div>
            </div>

            <div className="footerBottom">
                <div className="fBottomHead">
                    <h1>Bir şey vurmağa hazırsınız?</h1>
                    <h1>Gəlin zəng edək.</h1>
                </div>
                <div className="fBottomInfo">
                    <div className="fBottomInfoleft">
                        <h3>Portfolio Qurucusu</h3>
                        <p>4353 Delaware Avenue, San Francisco, USA</p>
                        <div className="mail">
                            <IoIosMail size={40} />
                            <p>sahib.safarali22@gmail.com</p>
                        </div>
                    </div>
                    <div className="fBottomInfoRight">
                        <div className="start">
                            <p>Haqqımda</p>
                            <p>Əlaqə</p>
                            <p>Dribbble</p>
                        </div>
                        <div className="middle">
                            <p>Servis</p>
                            <p>Bloq</p>
                            <p>İnstagram</p>
                        </div>
                        <div className="end">
                            <p>Təcrübə</p>
                            <p>Proyektlər</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                </div>

                <div className="fBottomEnd">
                    <p>© Bütün hüquqlar qorunur. Sumit Hegde. Veb axını / Şəkil Lisenziyası Məlumatı / Təlimatlar / Dəyişikliklər Qrupu / Stil Bələdçisi ilə təchiz edilmişdir</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;