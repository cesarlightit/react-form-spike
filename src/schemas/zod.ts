import { z } from "zod";

export const zodFormValuesSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  age: z.number().optional(),
});

export type ZodFormValues = z.infer<typeof zodFormValuesSchema>;
