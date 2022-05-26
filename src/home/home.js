import React from 'react';
import {Grid} from "@material-ui/core";
import monster1 from "../picture/1.png";
import monster2 from "../picture/2.png";
import monster3 from "../picture/3.png";
import monster4 from "../picture/4.png";
import arrow from "../picture/arrow-2.png"

const Home = () => {
    return (
        <>
            <Grid container style={{marginTop: '60px', height: 'calc(100vh - 60px)'}}>
                <Grid justifyContent={'center'} alignItems={'center'} className={'welcome'} container item lg={6}>
                    <h1>Welcome to Monster <br/> Toys store</h1>
                    <img className={'monster1'} alt={'monster-pic'} src={monster1}/>
                    <img className={'monster2'} alt={'monster-pic'} src={monster2}/>
                </Grid>
                <Grid justifyContent={'center'} alignItems={'center'} className={'introduction'} container item lg={6}>
                    <h3>
                        This Website<br/>
                        Is Designed Just For<br/>
                        <i><u>Dr.Yashar Bani Hashem</u></i><br/>
                        By <u>Mohadese Ganjalinia</u><br/>
                        With: <u>Html</u>, <u>Css</u>, <u>javaScript</u>, <u>React.js</u>,<br/> <u>material-UI</u>,
                        <u>ReactRouter</u> and <u>API</u> 💪🏻
                    </h3>
                    <img className={'monster3'} alt={'monster-pic'} src={monster3}/>
                    <img className={'monster4'} alt={'monster-pic'} src={monster4}/>
                    <img className={'arrow'} alt={'arrow'} src={arrow} width={130} height={130}/>
                    <span>Click this and <br/>Let's go to shop 🤩</span>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;