import "jest-enzyme"
import "regenerator-runtime/runtime"

const { configure } = require("enzyme")
const EnzymeAdapter = require("enzyme-adapter-react-16")

configure({ adapter: new EnzymeAdapter() })
