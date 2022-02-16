import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CustProfile from "./CustProfile";
import MakeTransaction from "./MakeTrans";
import TransactionHistory from "./TranscHistory";

import PayeeRegister  from "./PayeeRegister";
import ChangePass from "./ChangePass";
import { history } from "react-router-dom";
import BillPayment from "../customers/BillPayment";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 
  const [fragment, setfragment] = useState("PROFILE");

  const loadFragment = () => {
    switch (fragment) {
      case "PROFILE":
        return <CustProfile />;
      case "TRANSACTION":
        return <MakeTransaction />;
      case "HISTORY":
        return <TransactionHistory />;

      // case "CHANGEMOB":
      //   return <ChangeMobNo />;
      case "BILL_PAY":
            return <BillPayment />;
      case "PAYEE":
        return <PayeeRegister />;
      case "CHANGEPASS":
        return <ChangePass />;
      default:
        break;
    }
  };

  const onLogout = () => {
    sessionStorage.removeItem("customer");
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className="App">
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            
            <ListItem button onClick={(e) => setfragment("PROFILE")}>
            
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("TRANSACTION")}>
            
            <ListItemText primary="Make Transaction" />
          </ListItem>
          <ListItem button onClick={(e) => setfragment("HISTORY")}>
            
            <ListItemText primary="Transaction History" />
          </ListItem>
       
          <ListItem button onClick={(e) => setfragment("CHANGEPASS")}>
            
            <ListItemText primary="Change Password" />
          </ListItem>
         
          <ListItem button onClick={(e) => setfragment("BILL_PAY")}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Bill Payment" />
          </ListItem>
          <ListItem button onClick={onLogout}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          </Toolbar>
        </AppBar>
      </div>
     
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {loadFragment()}
      </main>
    </div>
  );
}
