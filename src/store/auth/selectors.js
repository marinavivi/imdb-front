import { createSelector } from 'reselect';

const isAuthenticatedSelector = () =>
  createSelector(state => state.auth.user);

export {
  isAuthenticatedSelector,
}