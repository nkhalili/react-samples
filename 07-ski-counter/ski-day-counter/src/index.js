import React from "react"
import ReactDOM from "react-dom"

const skiData = {
  total: 10,
  powder: 20,
  backcountry: 15,
  goal: 100
}

class SkiDayCounter extends React.Component {
  render(){
    return (
      <section>
        <div>
          <p>Total: {this.props.total}</p>
        </div>
        <div>
          <p>Powder: {this.props.powder}</p>
        </div>
        <div>
          <p>Backcountry: {this.props.backcountry}</p>
        </div>
        <div>
          <p>Goal: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}


ReactDOM.render(
  <SkiDayCounter 
    total={skiData.total} 
    powder={skiData.powder} 
    backcountry={skiData.backcountry} 
    goal={skiData.goal} />,
  document.getElementById('root')
)
