import React, { useState, useEffect } from 'react';
import { onlineManager } from '@tanstack/react-query';
import './OfflineWarningStyles.scss';

const OfflineWarning: React.FC = () => {
  const [isOnline, setIsOnline] = useState(onlineManager.isOnline());

  useEffect(() => {
    const unsubscribe = onlineManager.subscribe(setIsOnline);
    return () => unsubscribe();
  }, []);

  if (!isOnline) {
    return <div className="offline-warning">You are offline</div>;
  }

  return null;
};

export default OfflineWarning;
