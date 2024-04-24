import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PedidosPage } from './pages/Pedidos/PedidosPage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { SideBarPartial } from './partials/SidebarPartial/SidebarPartial';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial className="header" />
        <SideBarPartial className="sidebar" />
        <div className='content'>
          <Routes>
            <Route path='/' element={<PedidosPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
