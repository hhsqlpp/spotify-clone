import { TrackActionTypes } from './../../types/track';
import { Dispatch } from 'react';
import { TrackAction } from '../../types/track';
import axios from 'axios';

export default function fetchTrack(id: string) {
    return function (dispatch: Dispatch<TrackAction>) {
        dispatch({ type: TrackActionTypes.SET_LOADING_START });

        axios
            .get('http://localhost:5000/tracks/' + id)
            .then((data) => {
                dispatch({ type: TrackActionTypes.SET_TRACK, payload: data.data });
            })
            .finally(() => {
                dispatch({ type: TrackActionTypes.SET_LOADING_END });
            });
    };
}
