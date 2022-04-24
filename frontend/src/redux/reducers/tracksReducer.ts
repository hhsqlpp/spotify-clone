import { ITracksState, TracksAction, TracksActionTypes } from '../../types/tracks';

const initialState: ITracksState = {
    tracks: [],
    loading: false,
};

export default function tracksReducer(state = initialState, action: TracksAction) {
    switch (action.type) {
        case TracksActionTypes.SET_TRACKS:
            return {
                ...state,
                tracks: action.payload,
            };
        case TracksActionTypes.SET_LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case TracksActionTypes.SET_LOADING_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
