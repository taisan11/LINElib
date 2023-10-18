// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lineNotifyToken } from "../notify_oauth.ts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { clientid, clientsecret, code, redirect_uri } from "./env.ts";

const log = new Log();
log.info("a", clientid);
log.info("a", clientsecret);
log.info("a", redirect_uri);
log.info("a", code);

const Aaa = lineNotifyToken({
  clientid: clientid,
  clientsecret: clientsecret,
  redirect_uri: redirect_uri,
  code: code,
});
console.log(Aaa);
