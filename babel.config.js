module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                // 属性是个对象, 里面是一些配置项.
                root: ['./src'],
                alias: {
                    // 别名的配置, 是个对象.
                    '@/utils': './src/utils',
                    '@/pages': './src/pages',
                    '@/navigator': './src/navigator',
                    '@/models': './src/models',
                    '@/config': './src/config',
                    '@/components': './src/components',
                    '@/assets': './src/assets',
                },
            },
        ],
    ],
};
