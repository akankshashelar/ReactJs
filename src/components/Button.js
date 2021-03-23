import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DragHandleIcon from '@material-ui/icons/DragHandle';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 30,
    width: 100,
  },
}));

export default function Buttons(props) {
  const [spacing] = useState(1);

  const classes = useStyles();

  return (
    <div className="button">
      <Card variant="outlined" style={{borderRadius:3,
    borderColor:"blue"}}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <button name="7" onClick={(e) => props.onClick(e.target.name)}>
                  7
                </button>
              </Grid>
              <Grid item>
                <button name="8" onClick={(e) => props.onClick(e.target.name)}>
                  8
                </button>
              </Grid>
              <Grid item>
                <button name="9" onClick={(e) => props.onClick(e.target.name)}>9</button>
              </Grid>
              <Grid item>
                <button
                  name="+/-"
                  onClick={(e) => props.onClick(e.target.name)}
                >
                  +/-
                </button>
              </Grid>
              <Grid item>
                <button name="CE" onClick={(e) => props.onClick(e.target.name)}>
                  <ArrowForwardIcon />
                </button>{" "}
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <button name="4" onClick={(e) => props.onClick(e.target.name)}>
                  4
                </button>
              </Grid>
              <Grid item>
                <button name="5" onClick={(e) => props.onClick(e.target.name)}>
                  5
                </button>
              </Grid>
              <Grid item>
                <button name="6" onClick={(e) => props.onClick(e.target.name)}>
                  6
                </button>
              </Grid>
              <Grid item>
                <button name="*" onClick={(e) => props.onClick(e.target.name)}>
                  x
                </button>
              </Grid>
              <Grid item>
                <button name="/" onClick={(e) => props.onClick(e.target.name)}>
                  ÷
                </button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <button name="1" onClick={(e) => props.onClick(e.target.name)}>
                  1
                </button>
              </Grid>
              <Grid item>
                <button name="2" onClick={(e) => props.onClick(e.target.name)}>
                  2
                </button>
              </Grid>
              <Grid item>
                <button name="3" onClick={(e) => props.onClick(e.target.name)}>
                  3
                </button>
              </Grid>
              <Grid item>
                <button name="-" onClick={(e) => props.onClick(e.target.name)}>
                  -
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item>
                {/* <Paper className={classes.paper} onClick={()=>handaleCleare()}>C</Paper> */}
              </Grid>
              <Grid item>
                <button name="C" onClick={(e) => props.onClick(e.target.name)}>
                  C
                </button>
              </Grid>
              <Grid item>
                <button name="0" onClick={(e) => props.onClick(e.target.name)}>
                  0
                </button>
              </Grid>
              <Grid item>
                <button name="." onClick={(e) => props.onClick(e.target.name)}>
                  .
                </button>
              </Grid>
              <Grid item>
                <button name="+" onClick={(e) => props.onClick(e.target.name)}>
                  +
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item xs={3} style={{background:"blue"}} >
              <Paper className={classes.paper} onClick={() => props.onClick("=")} ><DragHandleIcon/></Paper>

                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
