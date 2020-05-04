import React, { Component } from "react"
import { render } from "react-dom"

const skiData = {
  total: 10,
  powder: 20,
  backcountry: 15,
  goal: 100
}

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }
  render(){
    const {total, powder, backcountry, goal} = this.props;
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
          <p>Goal progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}


render(
  <SkiDayCounter 
    total={skiData.total} 
    powder={skiData.powder} 
    backcountry={skiData.backcountry} 
    goal={skiData.goal} />,
  document.getElementById('root')
)
