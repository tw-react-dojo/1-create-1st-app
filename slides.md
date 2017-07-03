#React Dojo #1

### Wifi (twguest): 

begin hark sauce editor sign
#### Hosted by ThoughtWorks / Presented by @cris7ian

#### `npm install -g create-react-app`

---

# What is React?

---

> React is a framework for building SPA in a declarative and component-based way.

---

# Create React App

- Built by Dan Abramov (creator of Redux).
- Create React apps with no build configuration.

---

# Installation

```
npm install -g create-react-app

create-react-app dojo
cd dojo
npm start
```

---

#[fit] How many people are in Space?

#### http://react-dojo.herokuapp.com

---

# Space API

API: http://api.open-notify.org/
Endpoint: http://api.open-notify.org/astros.json

---

# JSX

---

# The State

---

# Fetch API
```js
fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(result => ...)
  .catch(error => ...)
```
---

#[fit] Custom Components
---

# Build it and serve it

```
npm run build
npm install -g serve
serve -s build
```
