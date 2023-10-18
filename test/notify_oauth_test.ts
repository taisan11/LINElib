// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lineNotifyoAuth } from "../notify_oauth.ts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { clientid, clientsecret, redirect_uri } from "./env.ts";

const log = new Log();
log.info("a",clientid);
log.info("a",clientsecret);
log.info("a",redirect_uri);

const Aaa = lineNotifyoAuth({
  clientid: clientid,
  clientsecret: clientsecret,
  redirect_uri: redirect_uri,
  state: "test",
});
console.log(Aaa);