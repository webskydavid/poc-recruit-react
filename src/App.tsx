import React, { FC, useEffect } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlockList from './components/BlockList';
import AddNewBlock from './components/form/AddNewBlock';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

const DebugObserver: FC = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    const vals = snapshot.getNodes_UNSTABLE({ isModified: true });
    for (const node of vals) {
      console.debug(node.key, snapshot.getLoadable(node).contents);
    }
  }, [snapshot]);

  return null;
};

export default function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Router>
        <div className="app">
          <Route exact path="/" component={BlockList} />
          <Route path="/add_new_block" component={AddNewBlock} />
        </div>
      </Router>
    </RecoilRoot>
  );
}
