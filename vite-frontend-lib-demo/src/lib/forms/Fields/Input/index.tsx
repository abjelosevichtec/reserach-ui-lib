import * as S from './Styled'

function Input({register, name, label, ...otherProps}: any) {
  return (
    <S.Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <S.InputField {...register(name)} {...otherProps}/>
    </S.Wrapper>
  )
}

export default Input