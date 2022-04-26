export interface ITrack {
    _id: number;
    name: string;
    artist: string;
    album_name: string;
    album_id: string;
    lyrics: string;
    audio: string;
    picture: string;
    listens: string;
    comments: string;
}

export interface ITracksState {
    tracks: ITrack[];
    loading: boolean;
}

export enum TracksActionTypes {
    SET_TRACKS = 'SET_TRACKS',
    SET_LOADING_START = 'SET_LOADING_START',
    SET_LOADING_END = 'SET_LOADING_START',
}

export interface setTracks {
    type: TracksActionTypes.SET_TRACKS;
    payload: ITrack[];
}

export interface setLoadindStartTracks {
    type: TracksActionTypes.SET_LOADING_START;
}

export interface setLoadindEndTracks {
    type: TracksActionTypes.SET_LOADING_END;
}

export type TracksAction = setTracks | setLoadindEndTracks | setLoadindEndTracks;
