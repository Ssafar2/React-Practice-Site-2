import './onepage.css'
import { Header, Section1, Section2, Footer } from './components/index'

const Onepage = () => {

    return (
        <div className='Onepage'>


            <header>
                <Header />
            </header>

            <section>
                <Section1 />
            </section>

            <section>
                <Section2 />
            </section>

            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Onepage;