
"use client"
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/task.json';


const LottieAnimation = () => {

    return (
        <div>
            <Lottie animationData={animationData} />
        </div>
    );
};

export default LottieAnimation;