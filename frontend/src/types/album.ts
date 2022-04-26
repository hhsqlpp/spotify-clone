import { IAlbum } from './albums';

export interface IAlbumState {
    album: IAlbum;
    loading: boolean;
}

export enum AlbumActionTypes {
    SET_ALBUM = 'ALBUM/SET_ALBUM',
    SET_LOADING_START = 'ALBUM/SET_LOADING_START',
    SET_LOADING_END = 'ALBUM/SET_LOADING_END',
}

export interface setAlbum {
    type: AlbumActionTypes.SET_ALBUM;
    payload: IAlbum;
}

export interface setLoadindStartAlbum {
    type: AlbumActionTypes.SET_LOADING_START;
}

export interface setLoadindEndAlbum {
    type: AlbumActionTypes.SET_LOADING_END;
}

export type AlbumAction = setAlbum | setLoadindStartAlbum | setLoadindEndAlbum;
