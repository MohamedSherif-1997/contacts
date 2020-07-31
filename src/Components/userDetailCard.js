import React from "react";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
    alignItem: "center",
  },
  typography: {
    fontSize: "20px",
    fontFamily: ' "Times New Roman", Times, serif',
    padding: "4px 0px 2px 0px",
  },
}));

export default function UserDetailCard(props) {
  const classes = useStyles();
  const { userDetail } = props;
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              fontSize="large"
            >
              {userDetail.name[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          subheader={<h3 style={{ color: "black" }}>{userDetail.date}</h3>}
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" className={classes.typography}>
            Name: {userDetail.name}
          </Typography>
          <Divider />
          <Typography variant="body2" className={classes.typography}>
            EmailId: {userDetail.email_id}
          </Typography>
          <Divider />
          <Typography variant="body2" className={classes.typography}>
            Phone Number:{userDetail.phone_number}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
