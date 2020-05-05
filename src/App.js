import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Loading} from './components/Loading';
import AppRoutes from './AppRoutes';

function App() {
  const isLoading = useSelector(function(state){
    return state.App.isLoading
  })
  console.log(isLoading);
  return (
    <>
      <Header/>
      <AppRoutes/>
      <Footer/>
      <Loading 
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
