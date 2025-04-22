import "dotenv/config";

export const getEnv = <T>(key: keyof typeof process.env): T => {
  return process.env[key] as T;
};

export const ENV = {
  // Database
  DATABASE_NAME: getEnv<string>("DATABASE_NAME"),
  DATABASE_HOST: getEnv<string>("DATABASE_HOST"),
  DATABASE_PORT: getEnv<number>("DATABASE_PORT"),
  DATABASE_USER: getEnv<string>("DATABASE_USER"),
  DATABASE_PASSWORD: getEnv<string>("DATABASE_PASSWORD"),

  // Server
  SERVER_PORT: getEnv<number>("SERVER_PORT"),
  NODE_ENV: getEnv<"development" | "production" | "test">("NODE_ENV"),
};
