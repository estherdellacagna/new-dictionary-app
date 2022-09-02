import React from 'react';
import './App.css';

//.first-color { 
	//background: #e7eaf6; 
//}
	
//.second-color { 
	//background: #a2a8d3; 
//}

//.third-color { 
	//background: #38598b; 
//}

//.fourth-color { 
//	background: #113f67; //

import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="Smile"/>
      </main>
      <footer className="app-footer">
        <small>This project was coded by: Esther Della Cagna</small>
      </footer>
    </div>
  );
}


