// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact'; // Import Contact component

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       case 'skills':
//         return <Skills />;
//       case 'contact':
//         return <Contact />; // Render Contact component
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="app">
//       <Navbar setCurrentPage={setCurrentPage} />
//       {renderPage()}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/index.scss';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home />}
    </div>
  );
};

export default App;
