// @ts-nocheck
import {useMemo} from 'react'
import * as yup from 'yup'
import {useForm as useHookForm, FormProvider, UseFormReturn} from 'react-hook-form'

import Form from '../../components/Form'
import useYupValidationResolver from '../useYupValidationResolver'

type TFormWithProvider = {
  children: JSX.Element | JSX.Element[]
}

export function getFieldProps(hookFormProps: UseFormReturn | any, name: string) {
  if (!hookFormProps) {
    return
  }

  return {
    register: hookFormProps.register,
    control: hookFormProps.control,
    // fieldValue: hookFormProps.getValues(name),
    // setFieldValue: (val: string | number) => hookFormProps.setValue(name, val),
    error: hookFormProps.formState.errors[name],
  }
}

function FormWithProvider({children}: TFormWithProvider) {
  return (
    <FormProvider>
      <Form>{children}</Form>
    </FormProvider>
  )
}

function useForm(options = {}) {
  let resolver = options.resolver
  if (!resolver && options.validation) {
    const validationObj = useMemo(() => options.validation, [])
    resolver = useYupValidationResolver(yup.object(validationObj))
  }

  const formMethods = useHookForm({mode: 'all', ...options, resolver})

  Form.defaultProps = {
    ...formMethods,
    getFieldProps,
    onSubmit: options.onSubmit
  }

  FormProvider.defaultProps = {
    ...formMethods
  }

  return {Form, getFieldProps, FormProvider, FormWithProvider, ...formMethods}
}

export default useForm