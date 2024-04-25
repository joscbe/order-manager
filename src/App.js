import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PedidosPage } from './pages/Pedidos/PedidosPage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { SideBarPartial } from './partials/SidebarPartial/SidebarPartial';
import { AppContext } from './store/AppContext';

const initialState = {
  orders: [],
  type: null
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial className="header" />
          <SideBarPartial className="sidebar" />
          <div className='content'>
            <Routes>
              <Route path='/' element={<PedidosPage />} />
            </Routes>
          </div>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
