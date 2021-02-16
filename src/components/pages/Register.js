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

import * as registerActions from "./../../actions/register.action";
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

export default function Register(props) {
  const classes = useStyles();
  const [account, setAccount] = React.useState({
    fullname: "",
    mobile: "",
    customerCode: "",
    email: "",
    address: ""
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(({ registerReducer }) => registerReducer);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://www.iphouses.com/assets/brands/img/hygiene/banner/logo-hygiene.png`}
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
            dispatch(registerActions.register({ ...account, ...props }));
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.fullname}
            onChange={e => {
              setAccount({
                ...account,
                fullname: e.target.value
              });
            }}
            id="fullname"
            label="ชื่อ-นามสกุล"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.mobile}
            onChange={e => {
              setAccount({
                ...account,
                mobile: e.target.value
              });
            }}
            name="mobile"
            label="เบอร์โทรศัพท์"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.customerCode}
            onChange={e => {
              setAccount({
                ...account,
                customerCode: e.target.value
              });
            }}
            name="customerCode"
            label="รหัสลูกค้า"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.email}
            onChange={e => {
              setAccount({
                ...account,
                email: e.target.value
              });
            }}
            name="email"
            label="อีเมล"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.address}
            onChange={e => {
              setAccount({
                ...account,
                address: e.target.value
              });
            }}
            name="address"
            label="ที่อยู่"
          />

          {registerReducer.error && (
            <Alert severity="error">{registerReducer.result}</Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SUBMIT
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
