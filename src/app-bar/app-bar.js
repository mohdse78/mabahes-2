import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";

const pages = [
  { name: "Introduction", direct: "/home" },
  { name: "Monsters", direct: "/monsters" },
];

const ResponsiveAppBar = () => {
  return (
    <>
      <AppBar color={"primary"}>
        <Grid container alignItems={"center"}>
          <Grid
            container
            item
            lg={8}
            md={4}
            sm={4}
            xs={4}
            style={{ padding: "10px 0 10px 30px" }}
            justifyContent={"flex-start"}
          >
            <Link className={'link-header'} to={'/'}>
              <Typography
                style={{ fontWeight: "bolder", cursor: "pointer" }}
                variant="h6"
              >
                MONSTER TOYS
              </Typography>
            </Link>
          </Grid>
          <Grid
            container
            item
            lg={4}
            md={8}
            sm={8}
            xs={12}
            justifyContent={"flex-end"}
          >
            <Box>
              {pages.map((page) => (
                <Tooltip key={page.name} title={`Open ` + page.name}>
                  <Link className={"link"} to={page.direct}>
                    <Button style={{ color: "white", padding: "0 30px" }}>
                      {page.name}
                    </Button>
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      <Outlet />
    </>
  );
};
export default ResponsiveAppBar;
