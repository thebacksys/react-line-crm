import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Link
} from "@material-ui/core";

import * as loginActions from "./../../actions/login.action";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [account, setAccount] = React.useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          <p>ลงทะเบียน</p>
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => {
            e.preventDefault();
            dispatch(loginActions.login({ ...account, ...props }));
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.username}
            onChange={e => {
              setAccount({
                ...account,
                username: e.target.value
              });
            }}
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.password}
            onChange={e => {
              setAccount({
                ...account,
                password: e.target.value
              });
            }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          {loginReducer.error && (
            <Alert severity="error">{loginReducer.result}</Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            เข้าสู่ระบบ
          </Button>
        </form>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            props.history.push("/resetpassword");
          }}
        >
          ขอรหัสผ่านใหม่
        </Link>
      </CardContent>
    </Card>
  );
}
