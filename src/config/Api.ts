import axios from "axios";

export class Api {
  private headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  private api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: this.headers
  });
}
