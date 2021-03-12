import { Grid } from "@material-ui/core";
import React from "react";
import Scripts from "./Covid.module.css";
import { fetchData } from "../../Api";
import { Cards, Chart, CountryPicker } from "../../components";
import coronaImage from "../../assets/images/covid.png";

class Covid extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handelCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, countrys: country });
  };

  render() {
    const { data, countrys } = this.state;
    return (
      <div className="section pb_45 pt_30">
        <Grid item className="section_title mb_30">
          <span></span>
          <h1 className="section_title_text">Covid</h1>
        </Grid>
        <div className={Scripts.container}>
          <img className={Scripts.image} src={coronaImage} alt="COVID" />
          <Cards data={data} />
          <CountryPicker handelCountryChanges={this.handelCountryChange} />
          <Chart data={data} country={countrys} />
        </div>
      </div>
    );
  }
}

export default Covid;
