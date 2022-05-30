import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Game() {
  return (
    <React.Fragment>
      <Title>Current Task</Title>
      <Typography component="p" variant="h4">
        Complete Milestone 1
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        by 30 May, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Start Timer
        </Link>
      </div>
    </React.Fragment>
  );
}
