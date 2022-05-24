import { createSelector } from 'reselect';

const authStateSelector = (state) => state.auth 

const isAuthenticatedSelector = () => 
  createSelector(authStateSelector, state => !!state.user);

export {
  isAuthenticatedSelector,
}