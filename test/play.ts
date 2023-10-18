import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";

const log = new Log();
log.info("OK");
// ky.get("https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=XXX&redirect_uri=XXX&scope=notify&state=NO_STATE")
// https://fair-swan-75.deno.dev/?code=XXX&state=NO_STATEの形で返される
// const url: string = "https://notify-bot.line.me/oauth/token?grant_type=authorization_code&code=XXX&redirect_uri=XXX&client_id=XXXX&client_secret=XXXX"
log.info(
  ky.post("https://example.com"
  ).json(),
);
