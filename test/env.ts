import "https://deno.land/std@0.191.0/dotenv/load.ts";
const {
  clientid,
  clientsecret,
  redirect_uri,
  code,
} = Deno.env.toObject();

export { clientid, clientsecret, code, redirect_uri };
