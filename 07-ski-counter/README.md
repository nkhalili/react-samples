# React Intro

## Ski day counter app - Class component

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

## Function component

```javascript
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
```
