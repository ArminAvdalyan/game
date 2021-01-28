import React, {Component} from "react";

import "./HomePage.scss";
import IconPaper from "../../assets/icon-paper.svg";
import IconScissors from "../../assets/icon-scissors.svg";
import IconRock from "../../assets/icon-rock.svg";

class Home extends Component {
  render() {
    return (
      <div className="home" >
        <img data-id="paper" className="home-paper" src={IconPaper} alt="paper" onClick={(e) => this.props.onclick(e)} />
        <img data-id="scissors" className="home-scissors" src={IconScissors} alt="scissors" onClick={(e) => this.props.onclick(e)} />
        <img data-id="rock" className="home-rock" src={IconRock} alt="rock" onClick={(e) => this.props.onclick(e)} />
      </div>
    )
  }
}

export default Home;