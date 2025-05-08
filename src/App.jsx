import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import { BinanceSocket } from './realtime/binanceSocket';
// import MockSocket from './mocks/mockSocket';

const App = () => {
  const dispatch = useDispatch();
  const assetIds = useSelector((state) => state.crypto.map((asset) => asset.id));

  useEffect(() => {
    const useRealSocket = true; 
    const socket = useRealSocket
      ? new BinanceSocket(dispatch, assetIds)
      : new MockSocket(dispatch, assetIds);

    socket.start();
    return () => socket.stop();
  }, [dispatch, assetIds]);

  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
