import React, { Component, Fragment } from 'react'

import evalPipe from './evalPipe'
import Editor from './Editor'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { code: `// type your code...\n1 |> console.log` }
  }
  setCode(code) { this.setState({ code }) }
  eval() { evalPipe(this.state.code) }
  render() {
    return (
      <Fragment>
        <Editor
          onChange={(code) => this.setCode(code)}
          code={this.state.code}
          commands={[{
            name: 'exec',
            bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
            exec: () => this.eval(),
          }]}
        />
        <button onClick={() => this.eval()}>
          exec( cmd + enter )
        </button>
      </Fragment>
    );
  }
}
