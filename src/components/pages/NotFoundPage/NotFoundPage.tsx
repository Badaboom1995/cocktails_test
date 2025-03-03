import React from 'react';
import { Link } from 'react-router';
import './NotFoundStyles.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <p className="not-found-page__title">Page not found</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFoundPage;
