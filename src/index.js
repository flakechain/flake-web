import React from "react"
import DOM from "react-dom"
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { withStyles } from "@material-ui/core/styles"
import {SignIn, SignUp} from "./auth"
import API from "./api"

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const reducer = (state, action) => state

const App = connect(
  (state, props) => ({}),
  (dispatch, props) => ({
    onClick: () => {
      API.getStatus().catch(console.error)
    }
  })
)(props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className="lead">
      <h1 className="font light h1 upper">flakechain</h1>
      <h2 className="mono light h2 upper">thin wallet</h2>
      <h1 className="font light h1 spaced">❄︎</h1>
    </div>
    <Grid container spacing={16} style={{marginBottom: "5em"}}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Paper>
          <Button onClick={event => props.onClick()} variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Paper>
          <Button variant="contained" color="secondary" fullWidth>
            Sign Up
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  </MuiThemeProvider>
))

DOM.render(<Provider store={createStore(reducer)}><App /></Provider>, document.querySelector("#app"))
