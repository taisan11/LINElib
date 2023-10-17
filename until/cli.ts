import { Log } from "https://pax.deno.dev/kawarimidoll/deno-tl-log";
import { lineNotify } from "../notify.ts";

const log = new Log();

export async function send(message: string, token: string): Promise<void> {
  if (!message || !token) {
    log.error("Error: message or token is empty.");
    Deno.exit(1);
  }
  log.info(message, token);
  log.info(
    await lineNotify({
      message: message,
      token: token,
    }),
  );
}
