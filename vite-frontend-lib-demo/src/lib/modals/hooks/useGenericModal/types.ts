import {ReactNode} from 'react'
import {Return} from 'react-cool-portal'

export type GenericReturn = Omit<Return & {
  Modal: Function
}, "Portal">

export type ModalProps = {
  children: ReactNode
}