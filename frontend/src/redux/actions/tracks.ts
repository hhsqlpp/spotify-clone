import { TracksAction, TracksActionTypes } from './../../types/tracks';
import { Dispatch } from 'react';

export default function fetchTracks() {
    return function (dispatch: Dispatch<TracksAction>) {
        dispatch({ type: TracksActionTypes.SET_LOADING_START });

        fetch('http://localhost:5000/tracks')
            .then((data) => data.json())
            .then((data) => {
                dispatch({ type: TracksActionTypes.SET_TRACKS, payload: data });
            })
            .finally(() => {
                dispatch({ type: TracksActionTypes.SET_LOADING_END });
            });
    };
}
