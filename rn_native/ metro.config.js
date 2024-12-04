module.exports = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    },
    resolver: {
        sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json'],
    },
};