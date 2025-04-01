import {  TextField } from "@mui/material";

type Props={
    name:string;
    type:string;
    label:string
}
function Customizedinput(props:Props) {
  return <TextField  sx={{width:'400px',borderRadius:10,"& .MuiInputBase-input": {
          color: "white", // Change the text color inside the input field
        },
        "& .MuiInputLabel-root": {
          color: "white", // Change the label color
        },fontSize:20, marginTop:'15px', margin:'normal'}} name={props.name} label={props.label} type={props.type} />
}

export default Customizedinput
 