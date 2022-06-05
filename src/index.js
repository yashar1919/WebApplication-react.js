import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import './index.css';   //file css k padding o margin haye default ro hazf mikone

render(<App />, document.getElementById("root"));
