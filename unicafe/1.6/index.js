import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Display = props => <div>{props.text} {props.value}</div>
  
  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToGood = goodValue => {
    setGood(goodValue)
  }

  const setToNeutral = neutralValue => {
    setNeutral(neutralValue)
  }

  const setToBad = badValue => {
    setBad(badValue)
  }

  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header header={"statistics"} />
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)