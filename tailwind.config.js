module.exports = {
  mode: "jit",
  darkMode: false, // 'media' or 'class'
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        myBgColor: "#FFFFFF", // 全体の背景色
        myBgColorDark: "#EBEBEB", // 背景色より少し濃い色
        myTextColor: "#06283D",
        myTagColor: "#B6E388",
        myBlogListBgColor: "#F5F5F5",
        myBlogContentBgColor: "#F5F5F5",
        myBlogContentBgColorHover: "#EFEFEF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
