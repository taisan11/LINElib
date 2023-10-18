import "https://deno.land/std@0.191.0/dotenv/load.ts";
const {
    clientid,
    clientsecret,
    redirect_uri
} = Deno.env.toObject();

export { clientid, clientsecret, redirect_uri };
