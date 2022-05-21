import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from 'react-modal/lib/components/Modal';


 const container =  document.getElementById('root');
 Modal.setAppElement('#root');
 const root = createRoot(container);
 document.title = 'Black Jack Game'
 root.render(<App />)
