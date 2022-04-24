import { TrackAction, TrackActionTypes } from './../../types/track';
import { ITrackState } from '../../types/track';

const initialState: ITrackState = {
    track: {
        _id: 0,
        name: '',
        artist: '',
        album: '',
        lyrics: '',
        audio: '',
        picture: '',
        listens: '',
        comments: '',
    },
    loading: false,
};

export default function trackReducer(state = initialState, action: TrackAction) {
    switch (action.type) {
        case TrackActionTypes.SET_TRACK:
            return {
                ...state,
                track: action.payload,
            };
        case TrackActionTypes.SET_LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case TrackActionTypes.SET_LOADING_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
