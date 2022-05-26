import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

const Monster = ({username, name, email, id}) => {

    return (
        <Card className={"card"} style={{maxWidth: 265}}>
            <img src={`https://robohash.org/` + username} alt={'monsters'}/>
            <CardContent style={{paddingBottom: '15px'}}>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="caption">
                    {email}
                </Typography>
                <Grid className={'buy'} container item justifyContent={"space-between"} alignItems={"center"}>
                    <Link to={`/monsters/${id}`} className={'link'}>
                        <button>
                            Buy
                        </button>
                    </Link>
                    <span>
                        1$
                    </span>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Monster