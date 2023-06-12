import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = {
    test: /\.(?:js|jsx|mjs|cjs|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]]
      }
    }
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader]
}
