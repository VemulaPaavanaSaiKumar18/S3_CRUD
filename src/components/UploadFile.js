import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

const UploadFile = () => {
  const [file, setFile] = useState();
  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post("http://localhost:3000/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(await result.data);
  };
  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
        margin: "auto",
        width: "9rem",
      }}
    >
      <form onSubmit={submit} component="form" noValidate autoComplete="off">
        <TextField onChange={fileSelected} type="file" />
        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
};

export default UploadFile;
