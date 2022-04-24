import React, { FC } from 'react';
import { ITrack } from '../types/tracks';
import PlayImage from '../assets/play-button.svg';
import PauseImage from '../assets/pause-button.svg';
import { Link } from 'react-router-dom';

interface IProps {
    track: ITrack;
    number: number;
    active: boolean;
}

const TrackItem: FC<IProps> = ({ track, number, active }) => {
    return (
        <Link to={`/tracks/${track._id}`}>
            <div className='tracks-list__item'>
                <span className='tracks-list__item-index'>{++number}</span>
                <img src={`http://localhost:5000/${track.picture}`} alt='' />
                <div className='tracks-list__item-name'>
                    <p className='tracks-list__item-name__title'>{track.name}</p>
                    <p className='tracks-list__item-name__artist'>{track.artist}</p>
                </div>
                <p className='tracks-list__item-album'>True Love</p>
                <p className='tracks-list__item-listens'>{track.listens}</p>
                <p className='tracks-list__item-time'>3:48</p>
                <span className='tracks-list__item-state'>
                    <img src={active ? PauseImage : PlayImage} alt='' />
                </span>
            </div>
        </Link>
    );
};

export default TrackItem;
