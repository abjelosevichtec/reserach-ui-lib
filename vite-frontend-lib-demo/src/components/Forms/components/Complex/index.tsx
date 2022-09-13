import * as yup from 'yup'

import useForm from "../../../../lib/forms/hooks/useForm"
import {Input} from '../../../../lib/forms/Fields'
import Email from './components/Email'
import ComComponent from './components/ComComponent'

import * as S from './Styled'

function ComplexForm() {
  const {FormWithProvider} = useForm({
    defaultValues: {
      email: '',
      lastName: 'Default Last Name'
    },
    validation: {
      name: yup.string().required('Required'),
      email: yup.string().email().required('Required')
    },
    onSubmit: (data: any) => console.log('data', data)
  })

  return (
    <S.Wrapper>
      <S.Title>Complex Form</S.Title>
      <FormWithProvider>
        <Input label="Name lvl 1" name="name" />
        <Email />
        <ComComponent />
        <S.SubmitButton>Submit</S.SubmitButton>
      </FormWithProvider>
    </S.Wrapper>
  )
}

export default ComplexForm