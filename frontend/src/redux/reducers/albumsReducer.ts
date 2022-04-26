import { IAlbumsState, AlbumsAction, AlbumsActionTypes } from '../../types/albums';

const initialState: IAlbumsState = {
    albums: [],
    loading: false,
};

export default function AlbumsReducer(state = initialState, action: AlbumsAction) {
    switch (action.type) {
        case AlbumsActionTypes.SET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
            };
        case AlbumsActionTypes.SET_LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case AlbumsActionTypes.SET_LOADING_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
