import React from 'react';
import Footer from './Components/customer_footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard';





import PaymentPage from './Pages/Guest/payment_page';
import ViewPayment from './Pages/Payment/view_payment';



import UpdatePayment from './Pages/Payment/update_payment';

import PaymentReportPage from './Pages/Payment/payment-report';


import DashboardPage from './Pages/Dashboard/PaymentDashboard';

function App() {
  return (
      <div>
        <Routes>
          
         
          <Route path="/payment-page" element={<PaymentPage />} />
        
          <Route path="/view-payment" element={<ViewPayment />} />
          <Route path="/update-payment/:id" element={<UpdatePayment />} />
         
       
     
          <Route path="/payment-report" element={<PaymentReportPage />} />   
             
        
          <Route path="/payment-dashboard" element={<DashboardPage/>} />
        

      

        </Routes>
        <Footer></Footer>
      </div>
  );
}

export default App;
