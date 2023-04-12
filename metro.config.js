// Learn more https://docs.expo.io/guides/customizing-metro
//const { getDefaultConfig } = require('expo/metro-config');

//module.exports = getDefaultConfig(__dirname);

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-css-transformer")
    },
    resolver: {
      sourceExts: [...sourceExts, "css"]
    }
  };
})();

