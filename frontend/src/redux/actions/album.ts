import { AlbumActionTypes } from './../../types/album';
import { Dispatch } from 'react';
import { AlbumAction } from '../../types/album';
import axios from 'axios';
import { notification } from 'antd';

export default function fetchAlbum(id: string) {
    return function (dispatch: Dispatch<AlbumAction>) {
        dispatch({ type: AlbumActionTypes.SET_LOADING_START });

        axios
            .get('http://localhost:5000/albums/' + id)
            .then((data) => {
                dispatch({ type: AlbumActionTypes.SET_ALBUM, payload: data.data });
            })
            .finally(() => {
                dispatch({ type: AlbumActionTypes.SET_LOADING_END });
            });
    };
}

export function addTrack(data: any) {
    return function (dispatch: Dispatch<AlbumAction>) {
        dispatch({ type: AlbumActionTypes.SET_LOADING_START });

        axios
            .post('http://localhost:5000/tracks', data)
            .then((data) => {
                dispatch({ type: AlbumActionTypes.ADD_TRACK, payload: data.data });
            })
            .finally(() => {
                dispatch({ type: AlbumActionTypes.SET_LOADING_END });
                notification.success({ message: 'Вы успешно добавили трек' });
            });
    };
}
