// loads background
import React, {Component} from 'React';
import allBackgrounds from './background.json';
import './Background.css';

// parent container
class Background extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allBG = allBackgrounds;
    const { onSelectionChange } = this.props;

    return (
      <div className="bg-images" id="js-bg-images">
        { allBG.map( ( bg, i ) =>

          <button className="button" data-url={bg.url} onClick={onSelectionChange} key={i}>
            <img className="bg" src={bg.url} />
            <span className="name">{bg.name}</span>
          </button>

        ) }
      </div>
    );
  }
}

export default Background;
