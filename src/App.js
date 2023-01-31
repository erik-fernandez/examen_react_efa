import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import { Inicio } from './pages/Inicio'
import { ConsultorDetail } from './pages/ConsultorDetail'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio nombre={'Erik'} apPaterno={'Fernández'} apMaterno={'Ariza'}/>} />
        <Route path="consultorDetail" element={<ConsultorDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
