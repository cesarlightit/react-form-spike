import { Field, FieldProps, Form, Formik } from "formik";
import { FC, useState } from "react";
import { YupFormValues, yupFormValuesSchema } from "../schemas/yup";

type CustomTextInputProps = FieldProps & { placeholder?: string };

const CustomTextInput = ({
  field: { value, ...field },
  placeholder,
}: CustomTextInputProps) => {
  return (
    <div>
      <input {...field} placeholder={placeholder} value={value || ""} />
    </div>
  );
};

export const FormikForm: FC = () => {
  const [submittedValues, setSubmittedValues] = useState<YupFormValues>();

  const onSubmit = (rawValues: YupFormValues) => {
    const values = yupFormValuesSchema.cast(rawValues);
    setSubmittedValues(values);
  };

  return (
    <Formik
      validationSchema={yupFormValuesSchema}
      onSubmit={onSubmit}
      initialValues={{
        name: "",
      }}
    >
      {({ errors }) => (
        <Form>
          <h1>Formik & Yup</h1>
          <pre>
            {Object.entries(errors).map(([key, value]) => `${key}: "${value}"`)}
          </pre>
          <Field name="name">
            {({ field, meta }: FieldProps) => {
              return (
                <div>
                  <input type="text" placeholder="Name" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              );
            }}
          </Field>
          <Field name="address">
            {({ field, meta, form }: FieldProps) => {
              return (
                <div>
                  <input type="text" placeholder="Name" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                  <button
                    type="button"
                    onClick={() => form.setFieldValue("address", "")}
                  >
                    X
                  </button>
                </div>
              );
            }}
          </Field>
          <Field name="age" placeholder="Age" component={CustomTextInput} />
          <button type="submit">Send</button>
          {submittedValues && (
            <pre>{JSON.stringify(submittedValues, undefined, 2)}</pre>
          )}
        </Form>
      )}
    </Formik>
  );
};
