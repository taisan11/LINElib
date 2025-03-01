// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lineNotifyoAuth, lineNotifyToken } from "../notify_oauth.ts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { open } from "https://deno.land/x/open@v0.0.6/index.ts";
import { clientid, clientsecret, redirect_uri } from "./env.ts";

const log = new Log();
log.info("a", clientid);
log.info("a", clientsecret);
log.info("a", redirect_uri);

const Aaa = lineNotifyoAuth({
  clientid: clientid,
  clientsecret: clientsecret,
  redirect_uri: redirect_uri,
  state: "test",
});
await open(Aaa);

//codeの読み込み
console.log("%cコードを取得してください%cやり方は下をどうぞ", "color:red");
console.log(
  "Please enter the value of the 'code' parameter in the URL, which should be in the format '?code=xxxx'.",
);
const code = prompt("Please enter your code:");
console.log("code:", code);
if (code !== null) {
  lineNotifyToken({
    clientid: clientid,
    clientsecret: clientsecret,
    redirect_uri: redirect_uri,
    code: code,
  });
}
