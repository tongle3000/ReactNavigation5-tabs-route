module.exports = {
    bracketSpacing: false,
    jsxBracketSameLine: true,// 在jsx中把'>' 是否单独放一行
    trailingComma: 'all',

	tabWidth: 4, //默认就是 4.所以不用设置
	useTabs: true,
    semi: true, // 每行末尾自动添加分号
    bracketSpacing: true,
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    singleQuote: true, // 使用单引号代替双引号
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有

	jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
	endOfLine: "auto", // 结尾是 \n \r \n\r auto
	jsxBracketSameLine: false,
};

// module.exports = {

//   trailingComma: 'all',

//   // 字符串使用单引号
//   singleQuote: true,

//   // 每行末尾自动添加分号
//   semi: true,

//   // tab缩进大小,默认为2
// tabWidth: 4, //默认就是 4.所以不用设置
//   // 使用tab缩进，默认false
//   useTabs: true,

//   // 对象中打印空格 默认true
//   // true: { foo: bar }
//   // false: {foo: bar}
//   bracketSpacing: true,
//   // 箭头函数参数括号 默认avoid 可选 avoid| always
//   // avoid 能省略括号的时候就省略 例如x => x
//   // always 总是有括号
//   arrowParens: 'avoid',
//   // 换行长度，默认80
//   printWidth: 80,

//   // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
//   /*
//     <button
//        className="prettier-class"
//        id="prettier-id"
//        onClick={this.handleClick}>
//        Click Here
//     </button>
//      */
//   // 设置为false时
//   /*
//     <button
//         className="prettier-class"
//         id="prettier-id"
//         onClick={this.handleClick}
//     >
//         Click Here
//     </button>
//      */
//   // jsxBracketSameLine: false,
//   // proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
//   // endOfLine: "auto", // 结尾是 \n \r \n\r auto

//   // trailingComma: "none", // 在对象或数组最后一个元素后面是否加逗号
// };
