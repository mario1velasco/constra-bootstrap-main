module.exports = {
  content: [
    './theme/**/*.html',
    './source/**/*.html',
    './source/**/*.htm',
    './theme/js/**/*.js'
  ],
  css: [
    './theme/plugins/bootstrap/bootstrap.min.css',
    './theme/plugins/fontawesome/css/all.min.css',
    './theme/plugins/slick/slick.css',
    './theme/plugins/slick/slick-theme.css',
    './theme/css/style.css'
  ],
  output: './theme/css/',
  safelist: {
    standard: [
      /^(collapse|show|collapsing)$/,
      /^(carousel|slide|active)$/,
      /^(btn)(-.*)?$/,
      /^(modal|fade|display)$/,
      /^(nav|navbar)(-.*)?$/,
      /^fa(s|r|l|d)?(-.*)?$/,
      /^animate/,
      /^slick/
    ]
  },
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  keyframes: true,
  fontFace: true
};
