# React Intro

## Create elements with React

1. Add react js files to your page (react.js & react-dom.js)

2. Use ReactDOM.render method to add elements

```javascript
    <script type="text/javascript">
      ReactDOM.render(
        React.createElement(
          "div", 
          null,
          React.createElement(
            "h1",
            null,
            "Hello again!"
          )
        ),
        document.getElementById("root")
      );
    </script>
```

## Use babel.js

1. Add babel.js in addition to react references

2. Use JSX syntax instead of createElement for simplicity

```javascript
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello from JSX!</h1>,
        document.getElementById("root")
      );
    </script>
```

## Function components

```javascript
    <script type="text/babel">

      const Hello = () =>
        <div className="heading">
          <h1>Welcome to React</h1>
        </div>

      ReactDOM.render(
        <Hello />,
        document.getElementById("root")
      );
    </script>
```

## Props object

Provides data for function components

```javascript
  <script type="text/babel">
    const Hello = (props) => {
        console.log(props);
        return (
        <div className="heading">
          <h1>Welcome to {props.library}</h1>
          <p>{props.message}</p>
        </div>
      )}
  </script>
```

**React components** are *functions* that takes in some *data* as an argument and returns *React elements* or *a user interface*.
