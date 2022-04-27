import React, { FC, useState, useEffect } from 'react';
import { Drawer, Slider } from 'antd';
import PlayImage from '../assets/play-button.svg';
import PauseImage from '../assets/pause-button.svg';
import Volume from '../assets/volume.svg';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { playTrack, pauseTrack, setDuration, setVolume, setCurrentTime, setActive } from "../redux/actions/player";
import { useDispatch } from "react-redux";

let audio: any;

const Player: FC = () => {
    const {pause, volume, active, duration, currentTime} = useTypedSelector((state) => state.player);
    const dispatch = useDispatch()

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            dispatch(playTrack());
        }
    }, [active])

    const play = () => {
        if (pause) {
            dispatch(playTrack())
            audio.play();
        } else {
            dispatch(pauseTrack())
            audio.pause();
        }
    }

    const setAudio = () => {
        if (active) {
            audio.src = `http://localhost:5000/${active.audio}`;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.ceil(audio.duration)));
            }
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
            }
        }
    }

    const changeVolume = (e: number) => {
        audio.volume = e / 100;
        dispatch(setVolume(e));
    }

    const changeCurrentTime = (e: number) => {
        audio.currentTime = e;
        dispatch(setCurrentTime(e));
    }

    if(!active) {
        return null;
    }

    return (
        <Drawer
            placement={'bottom'}
            closable={true}
            visible={true}
            key={'bottom'}
            className='player'>
            <div className='player-left'>
                <img
                    src='http://localhost:5000/image/917dffd0-a89d-43bf-8005-265a74be57ff.jpg'
                    alt=''
                />
                <div className='player-left__info'>
                    <p className='player-left__info-name'>{active?.name}</p>
                    <p className='player-left__info-artist'>{active?.artist}</p>
                </div>
            </div>
            <div className='player-center'>
                <img src={pause ? PlayImage : PauseImage} alt='' onClick={play} />
                <div className="player-center__slider">
                  <span>{currentTime}</span>
                  <Slider value={currentTime} max={duration} onChange={changeCurrentTime} />
                  <span>{duration}</span>
                </div>
            </div>
            <div className='player-right'>
                <img src={Volume} alt='' />
                <Slider defaultValue={100} value={volume} onChange={changeVolume} />
            </div>
        </Drawer>
    );
};

export default Player;
