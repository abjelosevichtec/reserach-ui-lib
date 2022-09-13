import {Args, Return} from 'react-cool-portal'

export type Props = Args & {
  handleOnConfirm?: Function
  CancelButton?: React.ElementType | undefined
  ConfirmButton?: React.ElementType | undefined
}

export type GenericReturn = Omit<Return & {
  Modal: Function
}, "Portal">

export type ModalProps = {
  title: String
  cancelBtnText: String
  confirmBtnText: String
}