const path = require('path')
const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')

const mainSubDir = ''
function resolveSrc (file) {
  return path.resolve(__dirname, '../src', mainSubDir, file || '')
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 配置分包内抽取公共jsBundle，进一步降低主包体积
// 抽取规则如下
// 1. 模块被同一分包内2个或以上的chunk所引用
// 2. 能够抽取的模块体积总和>=10kB
// 3. 满足以上条件会将抽取后的bundle输出至dist的分包目录下
function getSubPackagesCacheGroups (packages) {
  let result = {}
  packages.forEach(root => {
    result[root] = {
      test: (module, chunks) => {
        return chunks.every(chunk => {
          return new RegExp(`^${root}\\/`).test(chunk.name)
        })
      },
      name: `${root}/bundle`,
      minChunks: 2,
      minSize: 10000,
      priority: 100,
      chunks: 'initial'
    }
  })
  return result
}

const webpackConf = {
  entry: {
    app: resolveSrc('app.mpx')
  },
  module: {
    rules: [
      {
        test: /\.(js|mpx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.mpx$/,
        use: MpxWebpackPlugin.loader({
          transRpx: {
            mode: 'only',
            comment: 'use rpx',
            include: resolve('src')
          }
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/@mpxjs')],
        exclude: [resolve('node_modules/@mpxjs/webpack-plugin')]
      },
      {
        test: /\.json$/,
        resourceQuery: /__component/,
        type: 'javascript/auto'
      },
      {
        test: /\.(wxs|qs|sjs|filter\.js)$/,
        loader: MpxWebpackPlugin.wxsPreLoader(),
        enforce: 'pre'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: MpxWebpackPlugin.urlLoader({
          name: 'img/[name][hash].[ext]'
        })
      }
    ]
  },
  output: {
    filename: '[name].js'
  },
  optimization: {
    runtimeChunk: {
      name: 'bundle'
    },
    noEmitOnErrors: false,
    splitChunks: {
      cacheGroups: {
        main: {
          name: 'bundle',
          minChunks: 2,
          chunks: 'initial'
        }
        // 分包内抽取bundle示例配置，传入分包root数组
        // ...getSubPackagesCacheGroups(Array<subpackage root>)
      }
    }
  },
  mode: 'none',
  resolve: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      common: resolve('src/common'),
      base: resolve('src/components/base')
    },
    extensions: ['.js', '.mpx'],
    modules: ['node_modules']
  }
}

module.exports = webpackConf
