import {ReactNode, MouseEventHandler} from 'react'

export type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
