// import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { open } from "https://deno.land/x/open@v0.0.6/index.ts";
const log = new Log();

/**
 * send to lineNotify
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
  // 内容とトークンcheck
  if (!clientid || !redirect_uri || !state || !clientsecret) {
    log.error("Required fields are missing.");
    throw new Error("Required fields are missing.");
  }
  const url =
    `https://notify-bot.line.me/oauth/authorize?=response_type=code&client_id=${clientid}&redirect_uri=${redirect_uri}&scope=notify&state=${state}`;
  try {
    await open(url);
    return "success?";
  } catch (error) {
    log.error(`${error}`);
    return error;
    // return await error.response.json();
  }
}
