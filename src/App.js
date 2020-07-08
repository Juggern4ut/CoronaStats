import React from "react";
import Loader from "./Containers/Loader/Loader";
import Header from "./Containers/Layout/Header/Header";
import Main from "./Containers/Layout/Main/Main";
import Footer from "./Containers/Footer/Footer";

import world from "../src/img/world.png";
import ge from "../src/img/ge.png";

class App extends React.Component {
  state = {
    loading: true,
    globalEliteClick: 0,
    view: "cases",
    country1: "CH",
    country2: "DE",
    worldStats: {},
  };

  increaseGlobalEliteClicks = () => {
    const geClicks = this.state.globalEliteClick;
    this.setState({ globalEliteClick: geClicks + 1 });    
  };

  setWorldData = async () => {
    const res = await fetch(`https://corona-stats.online/?format=json`);
    const json = await res.json();

    let population = 0;
    let todayRecovered = 0;
    let tests = 0;

    json.data.forEach((country) => {
      population += country.population;
      todayRecovered += country.todayRecovered;
      tests += country.tests;
    });

    const worldStats = {
      ...json.worldStats,
      population: population,
      todayRecovered: todayRecovered,
      tests: tests,
      testsPerOneMillion: Math.round(tests / (population / 1000000)),
      oneTestPerPeople: Math.round(population / tests),
      oneDeathPerPeople: Math.round(population / json.worldStats.deaths),
      countryInfo: { iso2: "GLOB" },
    };

    this.setState({ worldStats });
  };

  updateStateOnCountryChange = (countryCode, second = false) => {
    this.setState({ loading: true });
    let cc =
      typeof countryCode != "string" ? countryCode.target.value : countryCode;

    if (cc === "") {
      if (second) {
        this.setState({ country2: "GLOB", loading: false });
      } else {
        this.setState({ country1: "GLOB", loading: false });
      }
      return true;
    }

    fetch(`https://corona-stats.online/${cc}?format=json`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (second) {
          this.setState({
            country2: json.data[0].countryInfo.iso2,
            data2: json.data,
            loading: false,
          });
        } else {
          this.setState({
            country1: json.data[0].countryInfo.iso2,
            data: json.data,
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.setWorldData();
    this.updateStateOnCountryChange("ch");
    this.updateStateOnCountryChange("de", true);
  }

  switchView = (view) => {
    this.setState({ view });
  };

  render() {
    let img1;
    let img2;
    let dt1;
    let dt2;
    if (this.state.data && this.state.data2) {

      let worldFlag = this.state.globalEliteClick > 9 ? ge : world;

      img1 =
        this.state.country1 === "GLOB"
          ? worldFlag
          : this.state.data[0].countryInfo.flag;
      img2 =
        this.state.country2 === "GLOB"
          ? worldFlag
          : this.state.data2[0].countryInfo.flag;

      dt1 =
        this.state.country1 === "GLOB"
          ? this.state.worldStats
          : this.state.data[0];

      dt2 =
        this.state.country2 === "GLOB"
          ? this.state.worldStats
          : this.state.data2[0];
    }

    const main =
      this.state.data && this.state.data2 ? (
        <Main
          flagClicked={this.increaseGlobalEliteClicks}
          switchView={this.switchView}
          image1={img1}
          image2={img2}
          changed={this.updateStateOnCountryChange}
          data={dt1}
          data2={dt2}
          view={this.state.view}
        />
      ) : (
        <main></main>
      );

    return (
      <div className="App">
        <Header />
        {main}
        <Loader loading={this.state.loading} />
        <Footer />
      </div>
    );
  }
}

export default App;
