import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './Home/Home';
import Stock from './Stock/Stock';
import Buyer from './Buyers/Buyers';
import Supplier from './Supplier/Supplier';
import Payment from './Payment/Payment';
import Customer from './Customers/Customers';
import Sales from './Sales/Sales';

function App() {
  return (
     <Router>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stock' element={<Stock/>}/>
        <Route path='/buyers' element={<Buyer/>}/>
        <Route path='/suppliers' element={<Supplier/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/customers' element={<Customer/>}/>
        <Route path='/sales' element={<Sales/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
