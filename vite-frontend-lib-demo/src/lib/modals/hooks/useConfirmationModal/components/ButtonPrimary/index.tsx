import * as T from './types'

function ButtonPrimary({onClick, children}: T.Props) : JSX.Element {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default ButtonPrimary