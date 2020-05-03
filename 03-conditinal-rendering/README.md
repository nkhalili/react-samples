# React Intro

## Conditional rendering

How to render components base on conditions.

```javascript
  <script type="text/babel">
    const Lake = ({name}) => <h1>{name}</h1>;
    const SkiResort = ({name}) => <h1>{name}</h1>;

    const App = ({summer}) => (
      <div>
        {summer
          ? <Lake name="Lake 1" />
          : <SkiResort name="Ski Resort 1" />}
      </div>
    )

    ReactDOM.render(
      <App summer={false} />,
      document.getElementById("root")
    );
  </script>
```
