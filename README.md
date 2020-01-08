## webpack

### 使用 loader

- webpack.config.js
- import 'css-loader!style-loader!./style.css'
- webpack --module-bind 'css=style-loader!css-loader'

> 使用 webpack-dev-server
>
> > npm i webpack-dev-server -D
> > devServer 添加至 config
> > "start": "webpack-dev-server --hot --inline"
