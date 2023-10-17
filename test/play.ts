import ky from "https://cdn.skypack.dev/ky?dts";
import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";

const log = new Log();

ky.post("https://notify-api.line.me/api/notify").json