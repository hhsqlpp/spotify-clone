import React, { FC, useState, useEffect } from 'react';
import { Drawer, Slider } from 'antd';
import PlayImage from '../assets/play-button.svg';
import PauseImage from '../assets/pause-button.svg';
import Volume from '../assets/volume.svg';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
    playTrack,
    pauseTrack,
    setDuration,
    setVolume,
    setCurrentTime,
} from '../redux/actions/player';
import { useDispatch } from 'react-redux';
import moment from 'moment';

let audio: any;

const Player: FC = () => {
    const { pause, volume, active, duration, currentTime } = useTypedSelector(
        (state) => state.player,
    );
    const dispatch = useDispatch();
    const [durationTime, setDurationTime] = useState<string>('');
    const [currentTimeState, setCurrentTimeState] = useState<string>('');

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            dispatch(playTrack());
            audio.play();
        }
    }, [active]);

    const play = () => {
        if (pause) {
            dispatch(playTrack());
            audio.play();
        } else {
            dispatch(pauseTrack());
            audio.pause();
        }
    };

    const setAudio = () => {
        if (active) {
            audio.src = `http://localhost:5000/${active.audio}`;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.ceil(audio.duration)));
                setDurationTime(moment.utc(Math.ceil(audio.duration) * 1000).format('mm:ss'));
            };
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
                setCurrentTimeState(
                    moment.utc(Math.ceil(audio.currentTime) * 1000).format('mm:ss'),
                );
            };
        }
    };

    const changeVolume = (e: number) => {
        audio.volume = e / 100;
        dispatch(setVolume(e));
    };

    const changeCurrentTime = (e: number) => {
        audio.currentTime = e;
        dispatch(setCurrentTime(e));
    };

    useEffect(() => {
        if (active) {
            if (currentTime === duration) {
                play();
                dispatch(setCurrentTime(0));
            }
        }
    }, [currentTime]);

    if (!active) {
        return null;
    }

    return (
        <div className={`player ${active && 'player__active'}`}>
            <div className='player-left'>
                <img src={`http://localhost:5000/${active.picture}`} alt='' />
                <div className='player-left__info'>
                    <p className='player-left__info-name'>{active?.name}</p>
                    <p className='player-left__info-artist'>{active?.artist}</p>
                </div>
            </div>
            <div className='player-center'>
                <img src={pause ? PlayImage : PauseImage} alt='' onClick={play} />
                <div className='player-center__slider'>
                    <span>{currentTimeState}</span>
                    <Slider value={currentTime} max={duration} onChange={changeCurrentTime} />
                    <span>{durationTime}</span>
                </div>
            </div>
            <div className='player-right'>
                <img src={Volume} alt='' />
                <Slider defaultValue={100} value={volume} onChange={changeVolume} />
            </div>
        </div>
    );
};

export default Player;
