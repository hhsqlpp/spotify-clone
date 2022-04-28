import { IAlbum } from './albums';
import { ITrack } from './tracks';

export interface IAlbumState {
    album: IAlbum;
    loading: boolean;
}

export enum AlbumActionTypes {
    SET_ALBUM = 'ALBUM/SET_ALBUM',
    ADD_TRACK = 'ALBUM/ADD_TRACK',
    SET_LOADING_START = 'ALBUM/SET_LOADING_START',
    SET_LOADING_END = 'ALBUM/SET_LOADING_END',
}

export interface setAlbum {
    type: AlbumActionTypes.SET_ALBUM;
    payload: IAlbum;
}

export interface addTrack {
    type: AlbumActionTypes.ADD_TRACK;
    payload: ITrack;
}

export interface setLoadindStartAlbum {
    type: AlbumActionTypes.SET_LOADING_START;
}

export interface setLoadindEndAlbum {
    type: AlbumActionTypes.SET_LOADING_END;
}

export type AlbumAction = setAlbum | addTrack | setLoadindStartAlbum | setLoadindEndAlbum;
