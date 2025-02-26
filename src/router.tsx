import {Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/nav'
import PrivacyPolicy from './pages/privacy-policy'
import TermsConditions from './pages/terms-conditions'
import ReturnRefundPolicy from './pages/return-refund'
import Footer from './components/footer'
import Plans from './pages/plans'

export default function App() {
  return (
      <div className='bg-background bg-flex min-h-screen overflow-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <Nav/>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home/>} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/terms" element={<TermsConditions/>} />
            <Route path="/return" element={<ReturnRefundPolicy/>} />
        </Routes>
        <div className="mt-24">
            <Footer />
            </div>
      </div>
  )
}
