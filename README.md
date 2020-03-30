### This is my React play ground
Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context API
API:
- React.createContext
- Context.Provider
- Context.Consumer
- useContext

Context uses reference identity to determine when to re-render. Don't do like this!
 
`<Context.Provider value={{something: 'something'}}>`

Code above will re-render all consumers every time the Provider re-renders because a new object is always created.

Note: passing `undefined` as a Provider value does not cause consuming components to use `defaultValue`.

If I need to update the context from a component that is nested deeply,
I can pass a function down through the context to allow consumers to update the context.

Hook `useContext(MyContext)` is equivalent to `static contextType = MyContext` in a class, or to `<MyContext.Consumer>`.

## Higher-Order Component
HOC is a function that takes a component and returns a new component. Transforms a component into another component.





