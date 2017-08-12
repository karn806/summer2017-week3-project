import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

function QuestionBox({ question, onQuestionChange }) {
  const style = { fontSize: 40 }
  return (
    <input
      type="text"
      value={question}
      onChange={(e) => onQuestionChange(e.target.value)}
      style={style}
    />
  )
}

function Answer({ answer }) {
  const style = { marginTop: 20 }
  return (
    answer ? (<div style={style}>Answer: {answer}</div>) : null
  )
}

export default class AskMe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: null
    }
  }

  onQuestionChange(value) {
    this.setState({ question: value, answer: null })
  }

  onAsk(question) {
    axios.post('/api', { question }).then((res) => {
      this.setState({ answer: res.data.answer })
    })
  }

  render() {
    const styles = {
      container: {
        padding: 30,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 10,
        display: 'inline-flex',
        flexDirection: 'column'
      }
    }

    const { question, answer } = this.state
    return (
      <div className="flex-center">
        <div style={styles.container}>
          <div>
            <QuestionBox
              question={question}
              onQuestionChange={this.onQuestionChange.bind(this)}
            />
            <input
              className="big"
              type="button"
              value="Ask AJ!"
              onClick={() => this.onAsk(question)}
            />
          </div>
          <div className="flex-center">
            <Answer answer={answer} />
          </div>
        </div>
      </div>
    )
  }
}