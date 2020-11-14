# Note Taker
![License](https://img.shields.io/badge/license-MIT-blue.svg "License Badge")

## Description

An application that can be used to write, save, and delete notes from a JSON file using Express.js. This allows the user to organize thoughts and to keep track of tasks. 

The application is deployed on Heroku here: [Note Taker](https://stormy-depths-87128.herokuapp.com/)

![screenshot](https://github.com/zeroshii/Note-Taker/blob/main/Develop/public/assets/screenshot.png)

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Process](#process)
- [License](#license)

## Technologies
- HTML5
- CSS3
- Bootstrap
- JavaScript
- Node.js
- JSON
- Express.js
- UUID

 ## Installation
Read the documentations of the required Technologies above and implement them in the appropriate files, then type in Terminal or Git Bash:
```
npm install
```

## Process

* The following HTML routes were created:

  * GET `/notes` - Returns the `notes.html` file.

  * GET `*` - Returns the `index.html` file

* The application uses a `db.json` file on the backend to store and retrieve notes using the `fs` module.

* The following API routes created:

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. Each note is given a unique `id` when it's saved. In order to delete a note, notes are read from the `db.json` file and then removed with the given `id` property.

## License
Copyright, 2020, Garman Kwan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



