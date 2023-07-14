import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./styles.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const fetchData = res.data;
        setData(fetchData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {data.map((ele, index) => {
            return (
              <List
                key={ele.id}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "grey"
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={ele.name} src="/broken-image.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={ele.name}
                    secondary={
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {ele.phone}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
