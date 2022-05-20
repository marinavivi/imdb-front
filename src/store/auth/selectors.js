import { createSelector } from 'reselect';

const definesState = (state) => state.auth.user || null;

const makeSelectUser = () => {
  createSelector(definesState, (substate) => substate.user);
}

export {
  makeSelectUser,
}