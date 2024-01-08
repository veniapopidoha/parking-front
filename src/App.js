import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { MainPage } from './Pages/MainPage';
import { persistor, store } from './Redux/store';
import { ChangePassword } from './Pages/ChangePassword';

export const backLink = 'https://parking-server-6bdb10e251c8.herokuapp.com'

function App() {
  return (
    <>
      {/* <Registration />
      <AddUser /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route exact path='/' element={<MainPage />} />
              <Route exact path='/password' element={<ChangePassword />} />
              {/* <Route exact path='/profile' element={<Profile />} /> */}
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
