# React Intro

## Class Components

Instead of using *Function Components* you can use *Class Components*.

```javascript
  <script type="text/babel">

    const Lake = ({name}) => <h1>{name}</h1>;

    class App extends React.Component {
      render() {
        return (
            <div>
              <Lake name="Lake 1" />
              <Lake name="Lake 2" />
              <Lake name="Lake 3" />
              <Lake name="Lake 4" />
            </div>
        )
      }
    }

    ReactDOM.render(
      <App />,
      document.getElementById("root")
    );
  </script>
```

## Component State

When a component state changes, the render function will be called again to re-render the state change.

## Binding an event to the UI element

```javascript
class App extends React.Component {
        state = {
          loggedIn: false
        }
        logIn = () => this.setState({loggedIn: true});
        logOut = () => this.setState({loggedIn: false});
        render() {
          return (
              <div>
                <button onClick={this.logIn}>Log in</button>
                <button onClick={this.logOut}>Log out</button>
                <div>The user is {this.state.loggedIn ? "logged in" : "not logged in"}.</div>
                <Lake name="Lake 1" />
                <Lake name="Lake 2" />
                <Lake name="Lake 3" />
                <Lake name="Lake 4" />
              </div>
          )
        }
      }
```
