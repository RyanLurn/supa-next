import type { ZodError } from "zod";

type UnexpectedError = {
  kind: "unexpected";
  message: string;
};

type ValidationError<T> = {
  kind: "validation";
  error: ZodError<T>;
};

type EmptySelectError = {
  kind: "empty-select";
  message: string;
};

type UnauthorizedError = {
  kind: "unauthorized";
  message: string;
};

export type {
  UnexpectedError,
  ValidationError,
  EmptySelectError,
  UnauthorizedError,
};
