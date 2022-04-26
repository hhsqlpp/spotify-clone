import React, { FC } from 'react';
import { IAlbum } from '../types/albums';
import { Link } from 'react-router-dom';
import PlayImage from '../assets/play-button.svg';

interface IProps {
    album: IAlbum;
}

const AlbumItem: FC<IProps> = ({ album }) => {
    return (
        <Link to={`/albums/${album._id}`}>
            <div className='albums-list__item'>
                <img
                    className='albums-list__item-photo'
                    src={`http://localhost:5000/${album.picture}`}
                    alt={album.name}
                />
                <p className='albums-list__item-name'>{album.name}</p>
                <img className='albums-list__item-play' src={PlayImage} alt='' />
            </div>
        </Link>
    );
};

export default AlbumItem;
