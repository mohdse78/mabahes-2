import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Card = () => {

    function notify() {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Promise is pending',
                success: 'Done✔ Congratulations❤',
                error: 'Promise rejected 🤯'
            }
        )
    }

    const [information, setInformation] = useState([{
        id: 1,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    }])
    const params = useParams()

    const getMonster = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterID}`)
            .then(response => response.json())
            .then(data => setInformation(data))
    }

    useEffect(() => {
        document.title = "monsters | Card"
        getMonster()
    }, [])
    return (
        <Grid container item justifyContent={"center"} lg={10} style={{marginTop: 80}}>
            <Grid container item lg={10}
                  style={{border: '1px solid black', borderRadius: "10px", backgroundColor: 'white'}}>
                <Grid container item justifyContent={"center"} className={'boxMonster'}>
                    <img alt={'monster'} src={`https://robohash.org/` + information.username}/>
                </Grid>
                <div style={{margin: 20}} className={'information'}>
                    <h2>{information.name}</h2>
                    <h4>{information.username}</h4>
                    <h4>{information.phone}</h4>
                    <h4>{information.website}</h4>
                    <h4>{information.email}</h4>
                    <h4>Price : 1$</h4>
                </div>
                <Grid container item>
                    <button className={'buy-card'} onClick={notify}>
                        Buy
                    </button>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        rtl={false}
                        theme={"colored"}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}