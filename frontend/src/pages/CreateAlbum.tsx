import { notification } from 'antd';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import fetchTrack from '../redux/actions/track';

interface IFormState {
    name: string;
    artist: string;
    picture: any;
}

const CreateAlbum: FC = () => {
    const { id } = useParams();
    const { track, loading } = useTypedSelector((state) => state.track);
    const dispatch = useDispatch();
    const [formState, setFormState] = useState<IFormState>({
        name: '',
        artist: '',
        picture: '',
    });

    useEffect(() => {
        if (id) {
            dispatch(fetchTrack(id) as any);
        }
    }, [id]);

    const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const picture = e.target.files;

        if (!picture) return;

        setFormState({
            ...formState,
            picture: picture[0],
        });
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', formState.name);
        formData.append('artist', formState.artist);
        formData.append('picture', formState.picture);

        axios.post('http://localhost:5000/albums', formData).then(() => {
            notification.success({ message: 'Вы успешно создали альбом' });
            setFormState({
                name: '',
                artist: '',
                picture: '',
            });
        });
    };

    return (
        <div className='create-album'>
            <div className='container'>
                <h1 className='create-album__title'>Добавить альбом</h1>
                <form className='create-album__form' onSubmit={submit}>
                    <div className='create-album__form-item'>
                        <label htmlFor='name'>Название</label>
                        <input
                            className='form-control'
                            type='text'
                            id={'name'}
                            name={'name'}
                            value={formState.name}
                            onChange={changeState}
                        />
                    </div>
                    <div className='create-album__form-item'>
                        <label htmlFor='artist'>Автор</label>
                        <input
                            className='form-control'
                            type='text'
                            id={'artist'}
                            name={'artist'}
                            value={formState.artist}
                            onChange={changeState}
                        />
                    </div>
                    <div className='create-album__form-item'>
                        <label htmlFor='picture'>Изображение</label>
                        <input
                            className='form-control'
                            type='file'
                            accept='image/*'
                            id={'picture'}
                            name={'picture'}
                            onChange={uploadFile}
                        />
                    </div>
                    <button className='create-album__form-btn' type='submit'>
                        Создать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAlbum;
