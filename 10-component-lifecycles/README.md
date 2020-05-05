# Component lifecycle

Check out react component lifecycle [here](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

- Mounting: when a component is added to the DOM
- Unmounting: whenever it's taken away

## Usage

You can add some component lifecycle methods to your **Class Component**. So, you can't use them in function components.

### render()

The only required lifecycle method is render().

Whenever the props or state of the app changes, the render method will be called.

### constructor()

The constructor is called before the component is *mounted*. It's a great place to **initialize the local state** (or use static property). You can also **bind event handler** methods to the component class (or use arrow functions).

### componentDidMount()

After render and before update. Right after the component is added to the DOM (check the link above).

### componentDidUpdate()

After your component has updated.

### componentWillUnmount()

Before any sort of cleaning of components. Removing from DOM.
