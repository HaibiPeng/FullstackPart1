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
  const total = props.value.Good + props.value.Neutral + props.value.Bad;
  return (
    <div>
    <div>good {props.value.Good}</div>
    <div>neutral {props.value.Neutral}</div>
    <div>bad {props.value.Bad}</div>
    <div>all {props.value.Good + props.value.Neutral + props.value.Bad}</div>
    <div>average {(props.value.Good-props.value.Bad)/total}</div>
    <div>positive {props.value.Good*100/total + ' %'}</div>
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

  const value = {
    Good : good,
    Neutral: neutral,
    Bad : bad
  }

  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header header={"statistics"} />
      <Statistics value={value} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)