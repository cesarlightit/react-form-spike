import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";

import { useForm } from "react-hook-form";
import { ZodFormValues, zodFormValuesSchema } from "../schemas/zod";

export const HookZodForm: FC = () => {
  const [submittedValues, setSubmittedValues] = useState<ZodFormValues>();

  const form = useForm<ZodFormValues>({
    resolver: zodResolver(zodFormValuesSchema),
  });

  const onSubmit = (values: ZodFormValues) => {
    setSubmittedValues(values);
  };

  return (
    <div>
      <h1>react-hook-form & Zod</h1>
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
