### This is my React play ground
Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context API
API:
- React.createContext
- Context.Provider
- Context.Consumer

Context uses reference identity to determine when to re-render. Don't do like this!
 
`<Context.Provider value={{something: 'something'}}>`

Code above will re-render all consumers every time the Provider re-renders because a new object is always created.
