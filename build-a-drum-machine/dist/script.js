const DrumPad = ({ drumKey, song, handleClick, url }) => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "drum-pad", id: song, onClick: handleClick(drumKey, song) },
    drumKey, /*#__PURE__*/
    React.createElement("audio", { className: "clip", src: url, id: drumKey })));


};
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: [
      {
        "key": "Q",
        "song": "Heater-1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

      {
        "key": "W",
        "song": "Heater-2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

      {
        "key": "E",
        "song": "Heater-3",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

      {
        "key": "A",
        "song": "Heater-4",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

      {
        "key": "S",
        "song": "Heater-6",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

      {
        "key": "D",
        "song": "Dsc_Oh",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

      {
        "key": "Z",
        "song": "Kick_n_Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

      {
        "key": "X",
        "song": "RP4_KICK_1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

      {
        "key": "C",
        "song": "Cev_H2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }],



      currentSongText: '' };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    // will click the button when the corresponding key pressed
    window.addEventListener('keypress', this.handleKeyPress);
  }
  // handler for the click button on the DrumPad Component
  handleButtonClick(key, song) {
    return () => {
      document.getElementById(key).play();
      this.setState({
        currentSongText: song });

    };
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { className: "app_title" }, /*#__PURE__*/
      React.createElement("h1", null, "Drum Machine App")), /*#__PURE__*/

      React.createElement("div", { className: "display-container" }, /*#__PURE__*/
      React.createElement("div", { id: "display-pads" },
      this.state.drumPads.map((item) => /*#__PURE__*/
      React.createElement(DrumPad, {
        song: item.song,
        key: item.key,
        drumKey: item.key,
        handleClick: this.handleButtonClick,
        url: item.url }))), /*#__PURE__*/



      React.createElement("p", { id: "display", className: "current-text" }, this.state.currentSongText))));



  }
  componentWillUnMount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    const pad = this.state.drumPads.find(
    item => item.key === e.key.toUpperCase());

    // click the button
    if (pad) document.getElementById(pad.song).click();
  }}



class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement(DrumMachine, null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));