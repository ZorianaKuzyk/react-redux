import React, { Component } from "react";
import "./CreatePost.css";
import store from "../../redux/store";
import { connect, useDispatch } from "react-redux";
import reducer from "../../redux/reducer.js";
import {
  changeMessage,
  changeReTweet,
  changeLike,
  addPost,
} from "../../redux/actions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      avatar: "",
      nickname: "",
      date: "",
      content: "",
      image: "",
    };
  }

  avatarID = 3;
  nameDropDown = [
    "Dart Weider",
    "Sky Walker",
    "Sheev Palpatine",
    "Leia Organa",
  ];

  componentWillMount() {
    this.storeUnsubscribe = store.subscribe(() => {
      this.updateData();
    });
  }

  componentDidMount() {
    this.updateData();
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
    this.setState({ name: this.nameDropDown[0] });
    this.setState({ nickname: "" });
    this.setState({ content: "" });
    this.setState({ image: "" });
  }

  updateData = () => {
    const getRnd = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = [
      "jan.",
      "feb.",
      "mar.",
      "apr.",
      "may",
      "jun.",
      "jul.",
      "aug.",
      "sep.",
      "oct.",
      "nov.",
      "dec.",
    ];
    const st = store.getState();
    this.setState({ id: st.length + 1 });
    this.setState({
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/640px-Star_Wars_-_Darth_Vader.jpg",
    });
    this.setState({ date: day + " " + strMonth[month] });
  };

  handleAvatar = async (e) => {
    if (this.avatarID >= 3) this.avatarID = 0;
    else this.avatarID += 1;
    const avasURL = [
      "https://pyxis.nymag.com/v1/imgs/4d8/c4e/bbc064d8c5de88e8dabf468bccaddf0c47-12-star-wars-1.rsquare.w700.jpg",
      "https://media.vanityfair.com/photos/5a3aa292577ffb294a25338c/master/w_2560%2Cc_limit/star-wars-last-jedi-luke-skywalker-character-change.jpg",
      "https://cdn.vox-cdn.com/thumbor/set2js5lcnKY2Mtu41k9PkNBHoA=/0x0:1200x675/1200x800/filters:focal(409x69:601x261)/cdn.vox-cdn.com/uploads/chorus_image/image/65928705/star2.0.jpeg",
      "https://media.gq-magazine.co.uk/photos/631f43b4a406fc4939966bae/16:9/pass/Star-Wars-1-.jpg",
    ];
    await this.setState({ avatar: avasURL[this.avatarID] });
  };

  handleDropDown = async (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span
              className="create_card_header_avatar"
              onClick={this.handleAvatar}
            >
              <img src={this.state.avatar} />
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <form id="add_post">
                  <select
                    className="create_hero_name"
                    value={this.state.name}
                    onChange={this.handleDropDown}
                  >
                    <option value={this.nameDropDown[0]}>Dart Weider</option>
                    <option value={this.nameDropDown[1]}>Sky Walker</option>
                    <option value={this.nameDropDown[2]}>
                      Sheev Palpatine
                    </option>
                    <option value={this.nameDropDown[3]}>Leia Organa</option>
                  </select>
                  <input
                    className="create_hero_nick"
                    placeholder="Nickname..."
                    defaultValue={this.state.nickname}
                    onChange={(e) => (this.state.nickname = e.target.value)}
                  ></input>
                  &bull; {this.state.date}
                  <input
                    className="create_hero_text"
                    placeholder="Text..."
                    onChange={(e) => (this.state.content = e.target.value)}
                  ></input>
                  <input
                    className="create_card_url"
                    placeholder="Picture URL..."
                    onChange={(e) => (this.state.image = e.target.value)}
                  ></input>
                </form>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>
        </div>

        <div>
          <button
            className="create_publish_btn"
            type="submit"
            onClick={async () => {
              await this.setState({ nickname: "@" + this.state.nickname });
              await this.props.addPost(this.state);
              await this.setState({ nickname: "" });
              await this.setState({ name: this.nameDropDown[0] });
              await this.setState({ image: "" });
              document.getElementById("add_post").reset();
            }}
          >
            Create post
          </button>
        </div>
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    //   message: state.message,
  };
};

const getDispatchToProps = (dispatch) => {
  return {
    addPost: (arg) => dispatch(addPost(arg)),
  };
};

export default connect(getStateToProps, getDispatchToProps)(CreatePost);
