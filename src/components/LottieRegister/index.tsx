
"use client"
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/register.json';
import style from "./style.module.css"

const LottieAnimation = () => {

    return (
        <div className={style.lottie}>
            <Lottie animationData={animationData} />
        </div>
    );
};

export default LottieAnimation;