import { combineReducers } from 'redux';
import trackReducer from './trackReducer';
import tracksReducer from './tracksReducer';

export const rootReducer = combineReducers({
    tracks: tracksReducer,
    track: trackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
