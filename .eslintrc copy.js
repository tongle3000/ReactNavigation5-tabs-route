module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	// parserOptions: {
    //     // project: './tsconfig.json',
    //     // sourceType: "module", 
    //     ecmaFeatures: {
    //         experimentalObjectRestSpread: true,//启用对对象的扩展
    //         jsx: true,                       //启用jsx语法
    //         globalReturn:true,               //允许return在全局使用
    //         impliedStrict:true               //启用严格校验模式
    //     }
    // },
	rules: {
		// 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        // "comma-dangle": [1, "never"],


		// 'import/no-unresolved': [2, {commonjs: true, amd: true}],
        // 'import/named': 2,
        // 'import/namespace': 2,
        // 'import/default': 2,
        // 'import/export': 2,
		// 'eol-last': [2,'always'],
		// allow async-await
		// 'generator-star-spacing': 'off',
		// allow debugger during development
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		/*
		0 或’off’：  关闭规则。
		1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
		2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
		 */
		// 以下为该项目自定义部分
		// 'indent': [2,4], //缩进风格 - 开启缩进4格

		// 'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格 - 开启
		// 'no-const-assign': 2, //禁止修改const声明的变量 - 开启
		// 'space-before-function-paren': [0, 'always'], //函数定义时括号前面要有空格 - 关闭
		
		// 'camelcase': 0, //强制驼峰法命名 - 关闭
		// 'no-undef': 0, //不能有未定义的变量 - 关闭
		// 'no-alert': 0, //禁止使用alert confirm prompt - 关闭
		// 'arrow-parens': 0, //箭头函数用小括号括起来 - 关闭
		// 'array-bracket-spacing': [2, 'never'], // 不允许数组括号内的空格
	}
};
