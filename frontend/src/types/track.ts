import { ITrack } from './tracks';

export interface ITrackState {
    track: ITrack;
    loading: boolean;
}

export enum TrackActionTypes {
    SET_TRACK = 'SET_TRACK',
    SET_LOADING_START = 'SET_LOADING_START',
    SET_LOADING_END = 'SET_LOADING_START',
}

export interface setTrack {
    type: TrackActionTypes.SET_TRACK;
    payload: ITrack[];
}

export interface setLoadindStartTrack {
    type: TrackActionTypes.SET_LOADING_START;
}

export interface setLoadindEndTrack {
    type: TrackActionTypes.SET_LOADING_END;
}

export type TrackAction = setTrack | setLoadindEndTrack | setLoadindEndTrack;
