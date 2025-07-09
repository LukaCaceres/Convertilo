import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='min-h-screen flex flex-col rubik-400'>
            <Router>
                <header>
                    <NavbarComponent />
                </header>

                <main className='flex-grow'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/nosotros' element={<AboutPage />} />
                        <Route path='/contacto' element={<ContactPage />} />
                    </Routes>

                </main>

                <footer>
                    <FooterComponent />
                </footer>

            </Router>
        </div>
    )
}

export default App
