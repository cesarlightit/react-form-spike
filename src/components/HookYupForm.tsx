import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YupFormValues, yupFormValuesSchema } from "../schemas/yup";
import { useState } from "react";

export const HookYupForm = () => {
  const [submittedValues, setSubmittedValues] = useState<YupFormValues>();

  const form = useForm({
    resolver: yupResolver(yupFormValuesSchema),
  });

  const onSubmit = (rawValues: YupFormValues) => {
    const values = yupFormValuesSchema.cast(rawValues);
    setSubmittedValues(values);
  };

  return (
    <div>
      <h1>react-hook-form & Yup</h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <pre>
          {Object.entries(form.formState.errors).map(
            ([key, value]) => `${key}: "${value.message}"`
          )}
        </pre>
        <div>
          <input type="text" {...form.register("name")} />
        </div>
        <div>
          <input type="text" {...form.register("address")} />
          <button
            type="button"
            onClick={() => {
              form.setValue("address", undefined);
            }}
          >
            X
          </button>
        </div>
        <div>
          <input type="text" {...form.register("age")} />
        </div>
        <button type="submit">Send</button>
      </form>
      {submittedValues && (
        <pre>{JSON.stringify(submittedValues, undefined, 2)}</pre>
      )}
    </div>
  );
};
