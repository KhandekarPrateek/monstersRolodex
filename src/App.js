import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Cardslist from "./components/cardList/card_list.jsx";
import SearchBox from "./components/searchBox/search_box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    //key is basicaaly a unique string value given to these elemets that help
    //react to render and re render UI i.e only the object whose key changed will be renddered not whole
    //page
  }
  //mounting is the first time compponent is placed on the dom
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    //tolocale..function converts all to lower case
    let searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    console.log("render from main app ");
    //cast them on these names to make reacdable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filMonsters = monsters.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">My monsters rolodex</h1>
        <SearchBox
          onchange={onSearchChange}
          placeholder={"find_monsters"}
          className={"Monsters-Search-box"}
        />
        <Cardslist monsters={filMonsters} />
      </div>
    );
  }
}

export default App;

/*setState is asynchrounous i.e. it may run before or after a console.log in Onclick 
so we pass the fucntion isnide it isnetad of object */

/*benefit of passing function in event hadler is that the callback fuction ie the 
console.log(or any other callback ) is running synchronouy after the object is changed ,
 so use with function passing 
 NOTE also not using that callbcak is also not neccesray*/
