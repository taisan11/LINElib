// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lineNotifyoAuth } from "../notify_oauth.ts";

const clientid = Deno.env.get("clientid") as string;
const clientsecret = Deno.env.get("clientsecret") as string;
const redirect_uri = Deno.env.get("redirect_uri") as string;

const Aaa = lineNotifyoAuth({
  clientid: clientid,
  clientsecret: clientsecret,
  redirect_uri: redirect_uri,
  state: "test",
});
console.log(Aaa);