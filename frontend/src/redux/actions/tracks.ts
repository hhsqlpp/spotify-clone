import { TracksAction, TracksActionTypes } from './../../types/tracks';
import { Dispatch } from 'react';
import axios from 'axios';

export default function fetchTracks() {
    return function (dispatch: Dispatch<TracksAction>) {
        dispatch({ type: TracksActionTypes.SET_LOADING_START });

        axios
            .get('http://localhost:5000/tracks')
            .then((data) => {
                dispatch({ type: TracksActionTypes.SET_TRACKS, payload: data.data });
            })
            .finally(() => {
                dispatch({ type: TracksActionTypes.SET_LOADING_END });
            });
    };
}
