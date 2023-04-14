import { Switch } from "@mui/material";

export default function getApiHost() {
  let apihost = '';
  switch(process.env.REACT_APP_NODE_ENV) {
    case 'production':
      apihost = '';
      break;
    default:
      apihost = 'http://localhost:3000';
      break;
  }
  return apihost;
}
