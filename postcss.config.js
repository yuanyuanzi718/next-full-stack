module.exports = {
  plugins: {
    // 将 CSS 组织为多个文件，并在构建时通过提前处理@import语句（而不是在浏览器中）将它们组合起来
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
