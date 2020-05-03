# React Intro

## Render components from list

```javascript
  <script type="text/babel">

    const lakeList = [
      "Lake 1",
      "Lake 2",
      "Lake 3"
    ];

    const App = ({lakes}) => (
      <ul>
        {lakes.map(lake =>
          <li>{lake}</li>
        )}
      </ul>
    );

    ReactDOM.render(
      <App lakes={lakeList} />,
      document.getElementById("root")
    );
  </script>
```

This leads to this warning:

```cmd
Warning: Each child in a list should have a unique "key" prop.
```

To solve this warning, use a **key** for each list item:

String example:

```javascript
  const lakeList = [
    "Lake 1",
    "Lake 2",
    "Lake 3"
  ];

  const App = ({lakes}) => (
    <ul>
      {lakes.map((lake, i) => 
        <li key={i}>{lake}</li>
      )}
    </ul>
  );
```

Object example:

```javascript
  const lakeList = [
    {id: 1, name: "Lake 1", trailhead: "TH1"},
    {id: 2, name: "Lake 2", trailhead: "TH2"},
    {id: 3, name: "Lake 3", trailhead: "TH3"}
  ];

  const App = ({lakes}) => (
    <ul>
      {lakes.map(lake => 
        <li key={lake.id}>{lake.name}</li>
      )}
    </ul>
  );
```
