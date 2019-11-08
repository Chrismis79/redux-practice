1. What problem does the context API help solve?

        --The context API provides a way store state in one place then pass props around your application to any component, eliminating the need for prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        -Actions return JS objects that contain information that is sent to the store. They are the only source of information for the store. 
        -Reducers are pure functions that take in the state and an action, and returns a new state.
        -Store is the one centralized place where state is stored. Single source of truth means that the only way to change data displayed is to dispatch redux action which will change the state within the reducer, but leave the initial state untouched.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

        -Application state is global and can be passed around anywhere in your application without relying on props drilling. Good to use in large scale applications with complicated state/data management.
        -Component State is local and the data is only available to that component and its children through props drilling. Good to use if only that complonent needs the data or in smaller apps with less complicated state/data management.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        -Thunk is a middleware used to handle async actions, like API calls. Thunk allows you to a function from the action creator instead of an action(object).

1. What is your favorite state management system you've learned and this sprint? Please explain why!
        -I think Redux is my favorite even though it is intimidating! I like what it does with the API calls. It does seem a bit more cumbersome, but definately more powerful than context API.