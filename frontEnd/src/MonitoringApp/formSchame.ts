import { z } from "zod";

export const formSchema = z
  .object({
    profileImg: z.string().optional(),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    name: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    password: z.string().optional(),
    passwordConfirm: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is not the same as confirm password",
        path: ["passwordConfirm"],
      });
    }
  });
