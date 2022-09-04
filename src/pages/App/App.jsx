import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import OnlineShopPage from '../OnlineShopPage/OnlineShopPage';
import ReturnPolicyPage from '../ReturnPolicyPage/ReturnPolicyPage';
import PrivacyPolicyPage from '../PrivacyPolicyPage/PrivacyPolicyPage';
import FaqPage from '../FaqPage/FaqPage';
import AboutUsPage from '../AboutUsPage/AboutUsPage'
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/OnlineShop' element={<OnlineShopPage />} />
            <Route path='/ProductsDetails' element={<ProductDetailsPage />} />
            <Route path='/' element={<HomePage />} />

          
            <Route path='/AboutUs' element={<AboutUsPage />} />
            <Route path='/FAQ' element={<FaqPage />} />
            <Route path='/PrivacyPolicyPage' element={<PrivacyPolicyPage />} />
            <Route path='/ReturnPolicyPage' element={<ReturnPolicyPage />} />
            
          </Routes>
          <Footer/>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
