import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TrainList from './components/TrainList';
import { getTrains } from './api';

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const trainData = await getTrains();
      setTrains(trainData);
    };
    fetchTrains();
  }, []);

  return (
    <div>
      <Header />
      <TrainList trains={trains} />
    </div>
  );
};

export default App;
