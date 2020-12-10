import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}
  
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
        {props.text} {props.value}
    </div>
  )
}

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

  if (good+neutral+bad === 0) {
    return (
      <div>
        <Header header={"give feedback"} />
        <Button handleClick={() => setToGood(good + 1)} text="good" />
        <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setToBad(bad + 1)} text="bad" />
        <Header header={"statistics"} />
        <p>No feedback given</p>
        </div>
    )
  }
  
  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header header={"statistics"} />
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good+neutral+bad} />
      <Statistics text="average" value={(good-bad)/(good+neutral+bad)} />
      <Statistics text="positive" value={good*100/(good+neutral+bad)+' %'} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)