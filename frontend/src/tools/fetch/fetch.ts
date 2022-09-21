import {
  fecthConfig,
  //  ResStatus,
  DataResponse,
} from "./interface";
export const apiURL = "http://[::1]:3001"

export const Fetch = async (fecthConfig: fecthConfig) => {
  try {
    const url = `${apiURL}${fecthConfig.path}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: fecthConfig.method,
      body:
        fecthConfig.method === "POST" || fecthConfig.method === "PUL"
          ? JSON.stringify(fecthConfig.data)
          : null,
    });
    const dataResponse = await res.json();

    return { status: res.status, result: dataResponse };
  } catch (error) {
    console.log("error", error);
    return { res: null, message: error };
  }
};
