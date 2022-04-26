import { AlbumsAction, AlbumsActionTypes } from './../../types/albums';
import { Dispatch } from 'react';

export default function fetchAlbums() {
    return function (dispatch: Dispatch<AlbumsAction>) {
        dispatch({ type: AlbumsActionTypes.SET_LOADING_START });

        fetch('http://localhost:5000/albums')
            .then((data) => data.json())
            .then((data) => {
                dispatch({ type: AlbumsActionTypes.SET_ALBUMS, payload: data });
            })
            .finally(() => {
                dispatch({ type: AlbumsActionTypes.SET_LOADING_END });
            });
    };
}
