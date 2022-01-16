# StreamerMarketData

# Answering the questions:
#### What happens in case the websocket disconnects? How would you go further to keep the live data available or inform the user? Please discuss the challenges.

According to the WebSocket protocol, once the websocket disconnects, the connection is closed.
In order to keep the data available for the user even when the connection is closed, I would either implement ping-pong strategy (trying to reconnect to the Web-Socket to keep receiving the messages after the connection failure), or store the data at the client-side (in order to at least be able to show previously received data). For the client-side data storage, I would consider the following options:
- Using LocalStorage
- Using some client-side database like indexedDB, in combination with Service Worker

#### What happens if a user adds an instrument multiple times to their list? Please discuss possible challenges and mitigations.
Once this happens, a user will send a subscription message request to the open web-socket connection and will continue receiving the responses for the specified messages.
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
