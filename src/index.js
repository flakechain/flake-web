import React from "react"
import ReactDOM from "react-dom"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div class="lead">
<h1 class="font light h1 upper">flakechain</h1>
<h2 class="mono light h2 upper">thin wallet</h2>
<h1 class="font light h1 spaced">❄︎</h1>
</div>

      <Grid container spacing={16} style={{marginBottom: "5em"}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Paper>
            <Button variant="contained" color="primary" fullWidth>
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
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
