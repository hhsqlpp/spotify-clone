import { AlbumsAction, AlbumsActionTypes } from './../../types/albums';
import { Dispatch } from 'react';
import axios from 'axios';

export default function fetchAlbums() {
    return function (dispatch: Dispatch<AlbumsAction>) {
        dispatch({ type: AlbumsActionTypes.SET_LOADING_START });

        axios
            .get('http://localhost:5000/albums/')
            .then((data) => {
                dispatch({ type: AlbumsActionTypes.SET_ALBUMS, payload: data.data });
            })
            .finally(() => {
                dispatch({ type: AlbumsActionTypes.SET_LOADING_END });
            });
    };
}
