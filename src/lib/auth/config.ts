import { createServerFn } from "@tanstack/react-start";
import { emailAndPasswordEnabled } from "./email-password";

const env = (key: string): string | undefined => {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
};

export type AuthMethodConfig = {
  enabled: boolean;
  emailPassword: boolean;
  google: boolean;
  grokBroker: boolean;
};

export const getAuthMethods = createServerFn({ method: "GET" }).handler(
  (): AuthMethodConfig => {
    const enabled = env("VITE_AUTH_ENABLED") !== "false";
    const google = Boolean(env("GOOGLE_CLIENT_ID") && env("GOOGLE_CLIENT_SECRET"));
    const grokBroker = env("GROK_AUTH_BROKER_ENABLED") === "true";

    return {
      enabled,
      emailPassword: enabled && emailAndPasswordEnabled,
      google: enabled && google,
      grokBroker: enabled && grokBroker,
    };
  },
);
