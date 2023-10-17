// import * as mod from "https://deno.land/std/flags/mod.ts";
import { send } from "../until/cli.ts";

const naiyou = Deno.args[0];
const sendto = Deno.args[1];

send(naiyou, sendto);
