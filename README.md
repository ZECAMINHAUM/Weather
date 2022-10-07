# Weather App

A simple project in React with Typescript using some packages for demonstrate a simply arch.

<img width="1376" alt="Captura de Tela 2022-08-01 às 15 19 08" src="https://user-images.githubusercontent.com/28874522/182216762-64316df0-dc2c-4ab8-94ae-e3631583e65c.png">

### Folder Arch
 The objective here is try to implement the most clean structure to scale at some point this project. May be not the best, but I think that work's just fine. Now I'm gonna describe how I did:

*First of all, I'm using create react app, so, the base structure has already been configured, like the folder SRC and Public*

######  src
- components (For components, as the name itself describes)
    * containers (for big components that not repeat)
- services (for endpoint groups)
- utils (helpers in project, like axios instance)
- pages (again, the name is self explanatory)
- tests (the arch inside here is trick, you can just throw the component for test here or you can organize as the main src)


### Run
Just make sure that you already have run `npm ci` for install the modules, then you can keep going
- Run: `npm run start`
- Tests: `npm run test`
### Using
 - [React]()
 - [Material UI]()
 - [Axios]()
 - [Testing Library]()
