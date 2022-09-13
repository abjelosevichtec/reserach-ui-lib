import React from 'react'

import * as T from './types'
import * as S from './Styled'

export default function Form({
  children,
  onSubmit,
  getFieldProps = () => {},
  handleSubmit = () => {},
  ...rest
}: T.Props) {
  if(!children) return <div />

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: JSX.Element) => {
        return child && child.props && child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                ...getFieldProps(rest, child.props.name)
              }
            })
          : child
      })}
    </S.FormWrapper>
  )
}