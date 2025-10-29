import * as z from "zod";

const oauthErrorSchema = z.enum(["access_denied"]);

export { oauthErrorSchema };
