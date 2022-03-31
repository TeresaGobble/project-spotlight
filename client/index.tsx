import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App';
import './index.css'

const container = document.getElementById('app-root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(<App />);