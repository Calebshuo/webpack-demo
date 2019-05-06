// @babel/preset-env转换后的代码。
// index.js
"use strict";
var _message = _interopRequireDefault(require("./message.js"))
function _interopRequireDefault(obj) { 
  return obj && obj.__esModule ? obj : { "default": obj }; 
}
console.log(_message["default"]);

// message.js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _word = require("./word.js");
var message = "say ".concat(_word.word);
var _default = message;
exports["default"] = _default;

// word.js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.word = void 0;
var word = 'hello';
exports.word = word;


//原代码
//index.js
import message from './message.js' 
console.log(message)

//message.js
import { word } from './word.js'
const message = `say ${word}`
export default message

//word.js
export const word = 'hello'
