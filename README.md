
## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:4000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:4000/people`. You should see an array with 2 people in it returned to you. This is an array that your **API** will be using to store our People Data.
- [ ] **LOOK** at your `people` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `people` and run `yarn` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.


## API documentation

### GET '/people'

- [ ] Retrieve an array all the People in the people DB by writing a `GET` to the endpoint `/people`.
- [ ] Double check that your response from the server is an array of people.

```js
[
  {
    name: 'Christine',
    age: 40,
    favoriteFood: 'Pizza',
    id: 0
  },
  {
    name: 'Amanda',
    age: 30,
    favoriteFood: 'Tacos'
  }
];
```

### POST '/people'

- [ ] Design the functionality to add a person to the people DB you'll need all three fields. `name`, `age`, and `favoriteFood`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
    name: 'Amanda',
    age: 30,
    favoriteFood: 'Tacos'
}
```

- [ ] Double check to make sure that a person is created correctly once your functionality is built out.





