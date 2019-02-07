import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  MEETINGS_GET_MEETINGS_BEGIN,
  MEETINGS_GET_MEETINGS_SUCCESS,
  MEETINGS_GET_MEETINGS_FAILURE,
  MEETINGS_GET_MEETINGS_DISMISS_ERROR,
} from '../../../../src/features/meetings/redux/constants';

import {
  getMeetings,
  dismissGetMeetingsError,
  reducer,
} from '../../../../src/features/meetings/redux/getMeetings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('meetings/redux/getMeetings', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getMeetings succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getMeetings())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', MEETINGS_GET_MEETINGS_BEGIN);
        expect(actions[1]).toHaveProperty('type', MEETINGS_GET_MEETINGS_SUCCESS);
      });
  });

  it('dispatches failure action when getMeetings fails', () => {
    const store = mockStore({});

    return store.dispatch(getMeetings({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', MEETINGS_GET_MEETINGS_BEGIN);
        expect(actions[1]).toHaveProperty('type', MEETINGS_GET_MEETINGS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetMeetingsError', () => {
    const expectedAction = {
      type: MEETINGS_GET_MEETINGS_DISMISS_ERROR,
    };
    expect(dismissGetMeetingsError()).toEqual(expectedAction);
  });

  it('handles action type MEETINGS_GET_MEETINGS_BEGIN correctly', () => {
    const prevState = { getMeetingsPending: false };
    const state = reducer(
      prevState,
      { type: MEETINGS_GET_MEETINGS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getMeetingsPending).toBe(true);
  });

  it('handles action type MEETINGS_GET_MEETINGS_SUCCESS correctly', () => {
    const prevState = { getMeetingsPending: true };
    const state = reducer(
      prevState,
      { type: MEETINGS_GET_MEETINGS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getMeetingsPending).toBe(false);
  });

  it('handles action type MEETINGS_GET_MEETINGS_FAILURE correctly', () => {
    const prevState = { getMeetingsPending: true };
    const state = reducer(
      prevState,
      { type: MEETINGS_GET_MEETINGS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getMeetingsPending).toBe(false);
    expect(state.getMeetingsError).toEqual(expect.anything());
  });

  it('handles action type MEETINGS_GET_MEETINGS_DISMISS_ERROR correctly', () => {
    const prevState = { getMeetingsError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: MEETINGS_GET_MEETINGS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getMeetingsError).toBe(null);
  });
});

