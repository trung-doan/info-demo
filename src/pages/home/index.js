import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "./index.css";

export function Home() {
  const [msbn, setMsbn] = useState('00001');

  const _handleChange = (event) => {
    setMsbn(event.target.value);
  }

  const _handleClick = () => {
    window.location.href = `./list/${msbn}`;
  }

  return (
    <div className="home-container">
      <div className="search">
        <TextField className="component" label="MSBN (Vd: 00001)" variant="outlined" onChange={_handleChange} />
        <Button className="component" variant="contained" onClick={_handleClick}>Get</Button>
      </div>
    </div>
  );
}
