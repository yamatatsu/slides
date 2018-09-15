import { transform } from '@babel/core/lib/transform'

const transformOptions = {
  inputSourceMap: false,
  babelrc: false,
  plugins: [
    [require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
  ],
}

export default function evalPipe(code) {
  eval(transform(code, transformOptions).code)
}
