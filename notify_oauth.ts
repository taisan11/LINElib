// import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { open } from "https://deno.land/x/open@v0.0.6/index.ts";
const log = new Log();

/**
 * lineNotifyoAuthCodeGenerate
 * @module lineNotifyoAuth
 * @param {string} clientid - clientidを設定
 * @param {string} clientsecret - clientsecretを設定
 * @param {string} redirect_uri - redirect_uriを設定
 * @param {string} state - stateを設定
 * @return {string} - success?を返す
 */
export async function lineNotifyoAuth(
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
  }
  const url =
    `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientid}&redirect_uri=${redirect_uri}&scope=notify&state=${state}`;
  log.info(url);
  try {
    await open(url);
    return "success?";
  } catch (error) {
    log.error(`${error}`);
    return error;
    // return await error.response.json();
  }
}
