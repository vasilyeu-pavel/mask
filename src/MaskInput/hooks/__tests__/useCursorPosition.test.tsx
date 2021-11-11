import React from "react"
import { configure, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { typeCasting } from "../../types"
import useCursorPosition, { IProps } from "../useCursorPosition"

configure({ adapter: new Adapter() })

const setCursorPosition = jest.fn()
const cursorPosition = 1

const props = typeCasting<IProps>({
  setCursorPosition,
  cursorPosition,
  isFocus: false,
})

const Component = (props: IProps) => {
  useCursorPosition(props)

  return null
}

describe("useCursorPosition", () => {
  let fakeElement = {}
  const addEventListener = jest.fn()
  const removeEventListener = jest.fn()
  const setSelectionRange = jest.fn()

  beforeEach(() => {
    fakeElement = { addEventListener, setSelectionRange, removeEventListener }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should call addEventListener in effect", () => {
    jest.spyOn(React, "useRef").mockImplementationOnce(() => ({ current: fakeElement }))

    mount(<Component {...props} />)
    expect(addEventListener).toHaveBeenCalled()
  })

  it("should call remove in effect", () => {
    jest.spyOn(React, "useRef").mockImplementationOnce(() => ({ current: fakeElement }))

    const component = mount(<Component {...props} />)

    component.unmount()
    expect(removeEventListener).toHaveBeenCalled()
  })

  it("should not call setSelectionRange in effect", () => {
    jest.spyOn(React, "useRef")
      .mockImplementationOnce(() => ({ current: fakeElement }))

    mount(<Component {...props} />)
    expect(setSelectionRange).not.toHaveBeenCalledWith(cursorPosition, cursorPosition)
  })

  it("should call setSelectionRange in effect", () => {
    jest.spyOn(React, "useRef")
      .mockImplementationOnce(() => ({ current: fakeElement }))

    mount(<Component {...props} isFocus />)
    expect(setSelectionRange).toHaveBeenCalledWith(cursorPosition, cursorPosition)
  })
})
