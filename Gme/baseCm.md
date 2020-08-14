npx create-react-app --template typescript
cd client
sudo npm start

mkdir components
1. touch layout.tsx:
import React, { Component } from "react"; 
export class Layout extends Component {
     render() {
          return (
              <>
              hi
              </>
          )
     }
    }

2. index.tsx (local service worker):
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Layout } from './components/layout';
ReactDOM.render(
    <Layout />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

3. mkdir models> Item.tsx:
export class RestoModel { public constructor(public restName?: string) {} }

4. data retrieval recepie:
build a model in model folder-
game-model.tsx-
export class GameModel { 
    public constructor(
        public name?: string
        ) {} }
new games component-
import React, { Component } from "react";
import { GameModel } from "../models/game-model";
// import { NavLink } from "react-router-dom";
interface gameState {
  games: GameModel[];
}
export class Games extends Component<any, gameState> {
  public constructor(props: any) {
    super(props);
    this.state = { games: [] };
  }
  public componentDidMount(): void {
    fetch("http://localhost:3006/api/games")
      .then((response) => response.json())
      .then((games) => this.setState({ games }))
      .catch((err) => alert(err.message));
  }
  public render(): JSX.Element {
    return (
      <div>
        Here are our {this.state.games.length} games
        {this.state.games.map((game) => (
          // <NavLink to={"/salaries-per-emp/" + rev.id} key={rev.id}>
          <div className="rev">
            name: {game.name} <br />
            {game}
          </div>
          // </NavLink>
        ))}
      </div>
    );  }}


42. base layout ready:
import React from 'react';
import { BookModel } from '../models/Book';
interface bookState {
    books: BookModel[];
  }
class Layout extends React.Component<any, bookState> {
    public constructor(props: any) {
        super(props);
        this.state = { books: [] };
      }
      public componentDidMount(): void {
        fetch("http://localhost:3000/api/books")
          .then((response) => response.json())
          .then((books) => this.setState({ books }))
          .catch((err) => alert(err.message));
      }
      public render(): JSX.Element {
        return ( 
            <>
            <h1>
            here are our {this.state.books.length} books:
            </h1>
            </>
         );
    }
}
export default Layout;

5. extend into tabular data:


6. sample 


table key locate

7. insert comment - base install:
ChangeEvent - import React, { Component, ChangeEvent } from "react"; 
it will look like this- watch closely the diff between state and interface-
interface gameState {
    games: GameModel[],
    scores: ScoreModel[],
    comments: CommentModel[],
    comment: CommentModel
  };
  export class Layout extends Component<any, gameState> {
    public constructor(props: any) {
        super(props);
        this.state = { games: [],
             scores: [],
              comments: [],
            comment:  new CommentModel()
 };

 8. each input key in insert form gets a function above render inside export comp-
 private setEmployeeID = (args: ChangeEvent
) => {
const employeeID = +args.target.value;
const salary = { ...this.state.salary };
salary.employeeID = employeeID;
this.setState({ salary });
};

9. select sample-
       {this.state.books.map(book =>
        <option key={book.bookID} value={book.bookID}>
            {book.bookName + " " + book.bookName}
        </option>
    )}

    10. f