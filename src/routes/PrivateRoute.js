
import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ element: Element, isAuthenticated, redirectTo = '/login', ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to={redirectTo} />}
    />
  );
}

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;

