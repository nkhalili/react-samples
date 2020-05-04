# React Intro

## Ski day counter app

To simplify props usage, you can do this:

```javascript
class SkiDayCounter extends Component {
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
          <p>Goal: {goal}</p>
        </div>
      </section>
    )
  }
}
```
