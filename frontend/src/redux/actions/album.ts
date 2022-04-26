import { AlbumActionTypes } from './../../types/album';
import { Dispatch } from 'react';
import { AlbumAction } from '../../types/album';

export default function fetchAlbum(id: string) {
    return function (dispatch: Dispatch<AlbumAction>) {
        dispatch({ type: AlbumActionTypes.SET_LOADING_START });

        fetch('http://localhost:5000/albums/' + id)
            .then((data) => data.json())
            .then((data) => {
                dispatch({ type: AlbumActionTypes.SET_ALBUM, payload: data });
            })
            .finally(() => {
                dispatch({ type: AlbumActionTypes.SET_LOADING_END });
            });
    };
}
