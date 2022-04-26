import { ITrack } from './tracks';

export interface IAlbum {
    _id: number;
    name: string;
    artist: string;
    picture: string;
    listens: number;
    tracks: ITrack[];
}

export interface IAlbumsState {
    albums: IAlbum[];
    loading: boolean;
}

export enum AlbumsActionTypes {
    SET_ALBUMS = 'ALBUMS/SET_ALBUMS',
    SET_LOADING_START = 'ALBUMS/SET_LOADING_START',
    SET_LOADING_END = 'ALBUMS/SET_LOADING_END',
}

export interface setAlbums {
    type: AlbumsActionTypes.SET_ALBUMS;
    payload: IAlbum[];
}

export interface setLoadindStartAlbums {
    type: AlbumsActionTypes.SET_LOADING_START;
}

export interface setLoadindEndAlbums {
    type: AlbumsActionTypes.SET_LOADING_END;
}

export type AlbumsAction = setAlbums | setLoadindStartAlbums | setLoadindEndAlbums;
