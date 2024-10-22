import * as Yup from "yup";

export const yupFormValuesSchema = Yup.object({
  name: Yup.string().required(),
  address: Yup.string(),
  age: Yup.number(),
});

export type YupFormValues = Yup.InferType<typeof yupFormValuesSchema>;
