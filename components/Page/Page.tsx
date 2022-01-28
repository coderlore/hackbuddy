import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { DarkContext } from '../../context/DarkContext';

interface IPage {
  children?: React.ReactNode;
}

export default function Page({ children }: IPage) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`main ${darkMode ? 'dark' : 'light'}`}>
        <DarkContext.Provider value={darkMode}>
          <Header setDarkMode={setDarkMode} />
        </DarkContext.Provider>
        {children}
        <Footer />
      </div>
    </>
  );
}
