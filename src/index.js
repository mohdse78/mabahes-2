import React from 'react';
import ReactDOM from 'react-dom';
import "./monsters.css";
import MonstersList from "./Cards/monstersCard";
import {Grid} from "@material-ui/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResponsiveAppBar from "./app-bar/app-bar";
import {Card} from "./Cards/card";
import Home from "./home/home";
import Start from "./home/start";

function App() {
    return (
        <>
            <div>
                <Grid container justifyContent={"center"}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<ResponsiveAppBar/>}>
                                <Route path={"/"} element={<Start/>}/>
                                <Route path={"/home"} element={<Home/>}/>
                                <Route path={"/monsters"} element={<MonstersList/>}/>
                                <Route path={"monsters/:monsterID"} element={<Card/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Grid>
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))