import * as yup from 'yup'

import useForm from "../../../../lib/forms/hooks/useForm"
import {Input} from '../../../../lib/forms/Fields'

import * as S from './Styled'

function SimpleForm() {
  const {Form} = useForm({
    defaultValues: {
      email: ''
    },
    validation: {
      name: yup.string().required('Required'),
      email: yup.string().email().required('Required')
    },
    onSubmit: (data: any) => console.log('data', data)
  })

  return (
    <S.Wrapper>
      <S.Title>Simple Form</S.Title>
      <Form>
        <Input label="Name" name="name" />
        <Input label="Email" name="email" type="email" />
        <S.SubmitButton>Submit</S.SubmitButton>
      </Form>
    </S.Wrapper>
  )
}

export default SimpleForm