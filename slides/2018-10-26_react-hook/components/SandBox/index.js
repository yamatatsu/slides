import React, { Component, Fragment } from '../../node_modules/react'
import { Container, Row, Col } from 'react-grid-system'

import evalPipe from './evalPipe'
import Editor from './Editor'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.initial,
      result: evalPipe(props.initial)
    }
    this.eval()
  }
  setCode(code) { this.setState({ code }) }
  eval = () => {
    const result = evalPipe(this.state.code)
    console.log(result)
    this.setState({ result })
  }
  render() {
    const Sample = this.state.result
    return (
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <Editor
              onChange={(code) => this.setCode(code)}
              code={this.state.code}
              commands={[{
                name: 'exec',
                bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
                exec: () => this.eval(),
              }]}
            />
            <button onClick={this.eval}>
              render( cmd + enter )
            </button>
          </Col>
          <Col sm={12} md={4}>
            <p>ここに表示されます</p>
            {Sample && <Sample />}
          </Col>
        </Row>
      </Container>
    );
  }
}
