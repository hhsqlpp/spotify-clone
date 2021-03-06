import { AlbumAction, AlbumActionTypes } from './../../types/album';
import { IAlbumState } from '../../types/album';
import { TracksActionTypes } from '../../types/tracks';

const initialState: IAlbumState = {
    album: {
        _id: 0,
        name: '',
        artist: '',
        picture: '',
        listens: 0,
        tracks: [],
    },
    loading: false,
};

export default function albumReducer(state = initialState, action: AlbumAction) {
    switch (action.type) {
        case AlbumActionTypes.SET_ALBUM:
            return {
                ...state,
                album: action.payload,
            };
        case AlbumActionTypes.ADD_TRACK:
            return {
                ...state,
                album: { ...state.album, tracks: [...state.album.tracks, action.payload] },
            };
        case AlbumActionTypes.SET_LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case AlbumActionTypes.SET_LOADING_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
