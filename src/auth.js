import React from "react"
import DOM from "react-dom"
import {connect} from "react-redux"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import withMobileDialog from "@material-ui/core/withMobileDialog"

export const SignIn = connect(
  (state, props) => state,
  (dispatch, props) => ({})
)((props) => (
  <Dialog open={true}>
    <DialogTitle>Sign In</DialogTitle>
    <DialogContent>
      <DialogContentText>
        <p>
        To access your wallet please enter your <b>Mnemonic Seed Phrase</b>.
        As <b>True Decentralized</b> software we do not store
        any account or passwords in offchain database.
        </p>
        <p>
        If you do not have wallet yet you can get one using <b>Sign Up</b> dialog.
        </p>
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="key"
        label="Mnemonic Seed"
        type="text"
        rows={2}
        multiline
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={event => props.onClose()} color="secondary">
        Cancel
      </Button>
      <Button onClick={event => props.onClose()} color="primary">
        Sign In
      </Button>
    </DialogActions>
  </Dialog>
))

export const SignUp = connect(
  (state, props) => state,
  (dispatch, props) => ({})
)(withMobileDialog()((props) => (
  <Dialog open={true} fullScreen={props.fullScreen}>
    <DialogTitle>Your Account has been created</DialogTitle>
    <DialogContent>
      <DialogContentText>
        <Typography variant="title" gutterBottom>
          Take Note of your Mnemonic Seed Phrase.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Below this you will find your thirteen word "Mnemonic Seed Phrase".
          Keeping this secure and private is very important, as it is the only way
          that you will be able to login to your account.
          As we don't store your private login key on the server there is no way to
          recover it if it is lost!
        </Typography>
        <Typography variant="body1">
          Your private login key can also never be changed, and if it is stolen or
          otherwise compromised, you will have to move your funds to a new account
          with a new private login key. Therefore, it is best that you backup your
          private login key by writing it down, perhaps obscuring it as part of a
          poem or letter, and storing it in multiple safe and secure places.
        </Typography>
        <Typography variant="title" gutterBottom gutterTop>
          Understand the Risks in Using this Service.
        </Typography>
        <Typography variant="body1">
          This is a web-based interface that allows you to use FlakeChain
          without running a full FlakeChain node. However, because this convenience
          comes at a cost: it is extremely difficult to securely deliver its code
          to your browser. This means that there is considerable risk in using this
          service for large amounts!
        </Typography>
        <Typography variant="body1">
          It is recommended that you treat this service as you would treat your
          actual wallet, and not store very large amounts in it. For long-term
          storage of FlakeChain you should create a cold wallet using
            <Button size="small" variant="outlined" href="#" style={{margin: "0 0.35em"}}>PaperFlake</Button>
          or similar.
        </Typography>
        <Typography variant="title" gutterBottom gutterTop>
          Your Credentials:
        </Typography>
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="key"
        label="Mnemonic Seed"
        type="text"
        rows={2}
        multiline
        fullWidth
        readOnly
        disabled
        value={"flake chain is only true decentralized crypto note modern tool supplier"}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={event => props.onClose()} color="secondary">
        Cancel
      </Button>
      <Button onClick={event => props.onClose()} color="primary">
        Continue
      </Button>
    </DialogActions>
  </Dialog>
)))
