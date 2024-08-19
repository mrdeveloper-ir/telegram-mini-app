import axios from "axios";

export const Logger = (log: any) => {
  axios.post(
    `https://a917-91-216-104-161.ngrok-free.app`,
    { data: log },
    {
      headers: {
        "ngrok-skip-browser-warning": "test",
        "User-Agent": "CUSTOM AS HELL",
      },
    }
  );
};
