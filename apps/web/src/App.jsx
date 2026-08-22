import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './components/SidebarProvider';

function App() {
    return (
        <SidebarProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/jobs/:category" element={<CategoryPage />} />
                    <Route path="/jobs/:category/:post" element={<CategoryPage />} />
                </Routes>
            </Router>
        </SidebarProvider>
    );
}

export default App;
