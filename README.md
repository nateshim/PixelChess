# Project Overview

## Project Name
---
Puzzle Chess

## Project Description
---
Web hosted chess game where users can solve chess puzzles and submit their own.

## Wireframes
---
![Home Wireframe Desktop](https://i.ibb.co/McPj0Hn/Home.png)
![Game Wireframe Desktop](https://i.ibb.co/S65crBZ/Game.png)
![NewPuzzleForm Wireframe Desktop](https://i.ibb.co/pfSFJL8/NewLevel.png)
![Home Mobile](https://i.ibb.co/56s5GkG/X-1.png)
![Game Mobile](https://i.ibb.co/p4srcMd/X-2.png)
![NewPuzzleForm Mobile](https://i.ibb.co/cLZc5g3/X-3.png)

## Component Hierarchy
---

![Component Hierarchy](https://i.ibb.co/GcwDbPv/Untitled-Diagram-drawio.png)

## API and Data Sample
---

```
await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Table%201`, headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
})
```

```
{
  "records": [
    {
      "id": "recaZ7JV0GwxJC0NB",
      "fields": {
        "initialBoardState": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "numMovesNeeded": "1",
        "moves": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "author": "nateshim",
        "name": "fakepuzzle"
      },
      "createdTime": "2021-09-17T23:16:06.000Z"
    }
  ]
}
```

## MVP

* Set Up Routes/Links and all web pages
* Set up axios to make calls to the API
* Render chess puzzles
* Enable users to GET and POST chess puzzles on the site

### Post-MVP
* CSS Transitions/Animations 

## Project Schedule
---

|Day| Deliverable| Status |
|-      |:--:|   -:|
|8/30/21| Project Approval/Backend | In Progress |
|8/31/21| Backend/Frontend | In Progress |
|9/1/21| Frontend/Styling | In Progress |
|9/2/21| Post-MVP Content | In Progress |

## Timeframes

|Component| Priority| Estimated Time | Time Invested | Actual Time |
|-        |  :--:   |  :--:          |   :--:        |           -:|
|Essential HTML|M|3hrs|3hrs|TBD|
|Axios|H|3hrs|1hr|TBD|
|JS|H|3hrs|3hrs|TBD|
|Essential CSS|L|3hrs|1hr|TBD|
|Responsive Behavior|H|3hrs|3hrs|TBD|
|Extra/Decorative HTML|L|3hrs|2hrs|TBD|
|Extra/Decorative CSS|L|3hrs|2hrs|TBD|
|Post-MVP Content|M|3hrs|3hrs|TBD|
|Total| H | 24hrs|18hrs|TBD|

