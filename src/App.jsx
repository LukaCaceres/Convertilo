import './App.css'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import Home from './pages/Home'
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
                        <Route path='/' element={<Home />} />
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
