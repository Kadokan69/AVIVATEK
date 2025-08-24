module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css", "./"],
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          convertValues: true,
        },
      ],
    }),
  ],
};
