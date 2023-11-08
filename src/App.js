import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { MainPage } from './Pages/MainPage';
import { persistor, store } from './Redux/store';

export const backLink = 'http://localhost:5000'

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
              {/* <Route exact path='/profile' element={<Profile />} /> */}
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
