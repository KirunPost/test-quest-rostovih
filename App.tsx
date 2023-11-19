/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// сделана навигация между двумя экранами 
import React, { useState } from 'react';

import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';


function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<'Home' | 'Details'>('Home');

  const handleNavigate = () => {
    setCurrentPage(currentPage === 'Home' ? 'Details' : 'Home');
  };

  return (
    <>
      {currentPage === 'Home' && <HomeScreen onNavigate={handleNavigate} />}
      {currentPage === 'Details' && <GalleryScreen onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
