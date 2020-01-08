## webpack

### 使用 loader

- webpack.config.js
- import 'css-loader!style-loader!./style.css'
- webpack --module-bind 'css=style-loader!css-loader'
