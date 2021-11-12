import MaskInput from "./components/MaskInput"
import MaskWrapper from "./components/MaskWrapper"
import { IMaskInputProps } from "./types"
import {
  prepareValueFromMask,
  prepareValueToMask,
} from "./utils"

export {
  MaskWrapper,
  prepareValueFromMask,
  prepareValueToMask,
}

export type TMaskProps = IMaskInputProps

export default MaskInput
