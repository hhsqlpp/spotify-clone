import { combineReducers } from 'redux';
import AlbumsReducer from './albumsReducer';
import trackReducer from './trackReducer';
import tracksReducer from './tracksReducer';
import albumReducer from './albumReducer';

export const rootReducer = combineReducers({
    tracks: tracksReducer,
    track: trackReducer,
    albums: AlbumsReducer,
    album: albumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
