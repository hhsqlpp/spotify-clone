import Modal from 'antd/lib/modal/Modal';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrack } from '../redux/actions/album';

interface IProps {
    visible: boolean;
    album_id: number;
    artist: string;
    setVisible: Function;
}

interface IFormState {
    name: string;
    lyrics: string;
    audio: any;
    picture: any;
}

const AddTrack: FC<IProps> = ({ visible, album_id, artist, setVisible }) => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState<IFormState>({
        name: '',
        lyrics: '',
        audio: '',
        picture: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (!file) return;

        setFormState({
            ...formState,
            [e.target.name]: file[0],
        });
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', formState.name);
        formData.append('artist', artist);
        formData.append('lyrics', formState.lyrics);
        formData.append('album_id', String(album_id));
        formData.append('picture', formState.picture);
        formData.append('audio', formState.audio);

        dispatch(addTrack(formData) as any);

        setFormState({
            name: '',
            lyrics: '',
            audio: '',
            picture: '',
        });
        setVisible(false);
    };

    return (
        <Modal className='add-track' visible={visible} onCancel={() => setVisible(false)}>
            <form className='create-album__form' onSubmit={submit}>
                <div className='create-album__form-item'>
                    <label htmlFor='name'>Название</label>
                    <input
                        className='form-control'
                        type='text'
                        id={'name'}
                        name={'name'}
                        value={formState.name}
                        onChange={onChange}
                    />
                </div>
                <div className='create-album__form-item'>
                    <label htmlFor='lyrics'>Тест</label>
                    <input
                        className='form-control'
                        type='text'
                        id={'lyrics'}
                        name={'lyrics'}
                        value={formState.lyrics}
                        onChange={onChange}
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
                <div className='create-album__form-item'>
                    <label htmlFor='audio'>Трек</label>
                    <input
                        className='form-control'
                        type='file'
                        accept='audio/*'
                        id={'audio'}
                        name={'audio'}
                        onChange={uploadFile}
                    />
                </div>
                <button className='create-album__form-btn' type='submit'>
                    Создать
                </button>
            </form>
        </Modal>
    );
};

export default AddTrack;
