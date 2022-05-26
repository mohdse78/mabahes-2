import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import Monster from "./monster";
import SearchBox from "../search-box/searchBox";


const MonstersList = () => {
    const [monster, setMonster] = useState([{
        id: 1,
        name: '',
        username: '',
        email: ''
    }])
    const [filter, setFilter] = useState('')
    const getMonster = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => response.json())
            .then(data => setMonster(data))
    }
    useEffect(() => {
        document.title = 'monsters'
        getMonster()
    }, [])
    let filteredMonster = monster.filter(data => data.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <Grid container item justifyContent={"center"} lg={11} style={{marginTop: 60}}>
            <SearchBox set={setFilter}/>
            {filteredMonster.length !== 0 ?
                filteredMonster.map(item => (
                    <Grid key={item.id} container item lg={3} md={4} sm={6} xs={12}>
                        <Monster id={item.id} name={item.name} email={item.email} username={item.username}/>
                    </Grid>
                )) :
                <Grid container item justifyContent={"center"} className={"not-found"}>
                    <h2>Not found any monster!!!</h2>
                </Grid>
            }
        </Grid>
    )
}

export default MonstersList;