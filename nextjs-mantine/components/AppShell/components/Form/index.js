import { useState } from "react";

import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  LoadingOverlay,
} from "@mantine/core";
import { createFormContext } from "@mantine/form";

const [FormProvider, useFormContext, useForm] = createFormContext();

function InnerComponent() {
  const form = useFormContext();
  return <TextInput label="Your name" {...form.getInputProps("name")} />;
}

function SubmitButton() {
  const form = useFormContext();

  console.log("form", form);

  return (
    <Group position="right" mt="md">
      <Button
        type="submit"
        disabled={!form.isValid()}
        loading={form.isSubmitting}
      >
        Submit
      </Button>
    </Group>
  );
}

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      name: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length === 0 ? "Invalid value" : null),
      termsOfService: (value) => (value === false ? "Invalid value" : null),
    },
  });

  const formSubmited = (values) => {
    setIsSubmitting(true);

    console.log("values", values);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Box sx={{ maxWidth: 300, position: "relative" }} mx="auto">
      {/* <LoadingOverlay visible={isSubmitting} overlayBlur={0} /> */}
      <FormProvider form={{ ...form, isSubmitting }}>
        <form onSubmit={form.onSubmit(formSubmited)}>
          <TextInput
            styles={{
              root: {
                position: "relative",
                marginBottom: 40,
              },
              error: {
                width: "fit-content",
                display: "inline",
                position: "absolute",
              },
              input: {
                marginBottom: 5,
              },
              description: {
                position: "absolute",
                right: 0,
                display: "inline",
              },
            }}
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            description={`Chars left: ${10 - form.values.email.length}`}
            onBlur={form.validate}
            maxLength={10}
            inputWrapperOrder={["label", "input", "error", "description"]}
            {...form.getInputProps("email")}
          />

          <InnerComponent />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <SubmitButton />
        </form>
      </FormProvider>
    </Box>
  );
}

export default Form;
