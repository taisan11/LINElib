import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
const log = new Log();

/**
 * lineNotifyoAuthCodeGenerate
 * @module lineNotifyoAuth
 * @param {string} clientid - clientidを設定
 * @param {string} clientsecret - clientsecretを設定
 * @param {string} redirect_uri - redirect_uriを設定
 * @param {string} state - stateを設定
 * @return {string} - URLを返すブラウザなどでログインしcodeを取得してください
 */
export function lineNotifyoAuth(
  params: {
    clientid: string;
    clientsecret: string;
    redirect_uri: string;
    state: string;
  },
) {
  const { clientid, redirect_uri, state, clientsecret } = params;
  // check
  if (!clientid || !redirect_uri || !state || !clientsecret) {
    const errorMessage = "Required fields are missing.";
    log.error(errorMessage);
    return errorMessage;
  }
  const url =
    `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientid}&redirect_uri=${redirect_uri}&scope=notify&state=${state}`;
  log.info(url);
    return url;
}

//POST https://notify-bot.line.me/oauth/token?grant_type=authorization_code&
export async function lineNotifyToken(
  params: {
    clientid: string;
    clientsecret: string;
    redirect_uri: string;
    code: string;
  },
) {
  const { clientid, clientsecret, redirect_uri, code } = params;
  // check
  if (!clientid || !clientsecret || !redirect_uri || !code) {
    const errorMessage = "Required fields are missing.";
    log.error(errorMessage);
  }
  const url =
    `https://notify-bot.line.me/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${clientid}&client_secret=${clientsecret}`;
  log.info(url);
  try {
    return await ky.post(url).json();
  } catch (error) {
    log.error(`${error}`);
    return error;
    // return await error.response.json();
  }
}
