import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
const log = new Log();

const urlm: string = "https://notify-bot.line.me/oauth/authorize";
// ?response_type=code&client_id=[client_id]&redirect_uri=[redirect_uri]&scope=notify&state=[state]

export async function lineNotify(
    params: {
      clientid: string;
      redirect_uri: string;
      state: string;
    
    },
  ) {
    const { clientid, redirect_uri ,state } = params;
    // 内容とトークンcheck
    if (!clientid || !redirect_uri || !state) {
        
        throw new Error("Required fields are missing.");
    }
  
    const body = new URLSearchParams();
    const url: string = urlm + "?response_type=code&client_id=" + clientid + "&redirect_uri=" + redirect_uri + "&scope=notify&state=" + state;
    try {
      return await ky.get(url, { body }).json();
    } catch (error) {
      log.error(`${error}`);
      return error;
      return await error.response.json();
    }
  }  