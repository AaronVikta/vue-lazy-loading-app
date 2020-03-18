module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "env",
      {
        "modules":false
      }
    ],
    "stage-3"
  ],
  plugins:[
    "syntax-dynamic-import"
  ]
}
