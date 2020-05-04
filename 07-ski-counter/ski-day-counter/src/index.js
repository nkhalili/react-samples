import React from "react"
import { render } from "react-dom"

const skiData = {
  total: 10,
  powder: 20,
  backcountry: 15,
  goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

const SkiDayCounter = ({total, powder, backcountry, goal}) => {
  return (
    <section>
      <div>
        <p>Total: {total}</p>
      </div>
      <div>
        <p>Powder: {powder}</p>
      </div>
      <div>
        <p>Backcountry: {backcountry}</p>
      </div>
      <div>
        <p>Goal progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  )
}

render(
  <SkiDayCounter 
    total={skiData.total} 
    powder={skiData.powder} 
    backcountry={skiData.backcountry} 
    goal={skiData.goal} />,
  document.getElementById('root')
)
