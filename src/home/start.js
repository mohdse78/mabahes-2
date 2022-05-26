import React from 'react';
import arrow from '../picture/arrow.png'

const Start = () => {
    return (
        <div className={'start-container'}>
            <h2>
                Hi Dr. Bani Hashem🤩
                <br/>
                I'm mohadese Ganjali Nia 😄
                <br/>
                please click on the introduction button to start 😃
            </h2>
            <p>Click this</p>
            <img alt={'arrow'} src={arrow} width={200} height={200}/>
        </div>
    );
};

export default Start;