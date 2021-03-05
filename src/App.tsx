import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlockList from './components/BlockList';
import AddNewBlock from './components/AddNewBlock';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={BlockList} />
        <Route path="/add_new_block" component={AddNewBlock} />
      </div>
    </Router>
  );
}
