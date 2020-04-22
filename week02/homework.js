// Number 整数
const reg = /\d{1, }/g;

// Number 小数
const reg = /\.|\d/g;

// Number 二进制
const reg = /^[01]+$/g;

// Number 八进制
const reg = /^[0-7]+$/g;

// Number 十六进制
const reg = /^0[xX][0-9a-fA-F]+$/g;

// Number
const reg = /^(\d|\.)|(^[01]+$)|(^[0-7]+$)|(^0[xX][0-9a-fA-F]+$)/g;

// string Unicode
const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E])[\u0021-\u007E]{6,16}$/g;

// string ASCII
const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x21-\x7E]{6,16}$/g;

// string ' "
const reg = /(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*/;

// string
const reg = /(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E])[\u0021-\u007E]{6,16}$)|(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x21-\x7E]{6,16}$)|((?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*)/g;

// UTF8 Encoding

function encodeUTF(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (let i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    if (c === "%") {
      const hex = code.charAt(i + 1) + code.charAt(i + 2);
      const hexVal = parseInt(hex, 16);
      bytes.push(hexVal);
      i += 2;
    } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}
