import type { ZodError } from "zod";

type UnexpectedError = {
  kind: "unexpected";
  message: string;
};

type ValidationError<T> = {
  kind: "validation";
  error: ZodError<T>;
};

export type { UnexpectedError, ValidationError };
