import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "./cardContainer";

class Cardslist extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-monster">
        {monsters.map((monsters) => {
          return <CardContainer monster={monsters} />;
        })}
      </div>
    );
  }
}
export default Cardslist;
//NOTE we can ony return one component from parent level component
//i.e not more than two divs from same return value

/*component tree :parent comp has child comp and so on ,react renders from top to 
down level */
