import React from "react";
import WeightRender from "./WeightRender";
import "./index.css";

class Weight extends React.Component {
  constructor() {
    super();

    this.state = {
      kilogram: 0,
      gram: 0,
      milligram: 0,
      ton: 0,
      pound: 0,
      ounce: 0,
      number: 0,
      unit: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.convert = this.convert.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;

    return this.setState({ [name]: value });
  }

  handleChangeSelect(event) {
    return this.setState({ unit: event.target.value });
  }

  convert(event) {
    event.preventDefault();

    if (this.state.unit === "kilogram") {
      const kilogram = this.state.number;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number * 1000;
      this.setState({ gram: gram });

      const milligram = this.state.number * 1000000;
      this.setState({ milligram: milligram });

      const ton = this.state.number * 0.001;
      this.setState({ ton: ton });

      const pound = this.state.number * 2.2046;
      this.setState({ pound: pound });

      const ounce = this.state.number * 35.274;
      this.setState({ ounce: ounce });
    } else if (this.state.unit === "gram") {
      const kilogram = this.state.number * 0.001;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number;
      this.setState({ gram: gram });

      const milligram = this.state.number * 1000;
      this.setState({ milligram: milligram });

      const ton = this.state.number * 0.000001;
      this.setState({ ton: ton });

      const pound = this.state.number * 0.0022046;
      this.setState({ pound: pound });

      const ounce = this.state.number * 0.035274;
      this.setState({ ounce: ounce });
    } else if (this.state.unit === "milligram") {
      const kilogram = this.state.number * 0.000001;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number * 0.001;
      this.setState({ gram: gram });

      const milligram = this.state.number;
      this.setState({ milligram: milligram });

      const ton = this.state.number * 0.00000000099;
      this.setState({ ton: ton });

      const pound = this.state.number * 0.0000022046;
      this.setState({ pound: pound });

      const ounce = this.state.number * 0.000035274;
      this.setState({ ounce: ounce });
    } else if (this.state.unit === "ton") {
      const kilogram = this.state.number * 1000;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number * 1000000;
      this.setState({ gram: gram });

      const milligram = this.state.number * 1000000000;
      this.setState({ milligram: milligram });

      const ton = this.state.number;
      this.setState({ ton: ton });

      const pound = this.state.number * 2204.6244;
      this.setState({ pound: pound });

      const ounce = this.state.number * 35273.99;
      this.setState({ ounce: ounce });
    } else if (this.state.unit === "pound") {
      const kilogram = this.state.number * 0.45359;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number * 453.59;
      this.setState({ gram: gram });

      const milligram = this.state.number * 453592;
      this.setState({ milligram: milligram });

      const ton = this.state.number * 0.00045392;
      this.setState({ ton: ton });

      const pound = this.state.number;
      this.setState({ pound: pound });

      const ounce = this.state.number * 16;
      this.setState({ ounce: ounce });
    } else if (this.state.unit === "ounce") {
      const kilogram = this.state.number * 0.028349;
      this.setState({ kilogram: kilogram });

      const gram = this.state.number * 28.349;
      this.setState({ gram: gram });

      const milligram = this.state.number * 28349.5;
      this.setState({ milligram: milligram });

      const ton = this.state.number * 0.00002834;
      this.setState({ ton: ton });

      const pound = this.state.number * 0.0625;
      this.setState({ pound: pound });

      const ounce = this.state.number;
      this.setState({ ounce: ounce });
    }
  }

  render() {
    return (
      <WeightRender
        data={this.state}
        handleChangeInput={this.handleChangeInput}
        handleChangeSelect={this.handleChangeSelect}
        convert={this.convert}
      />
    );
  }
}

export default Weight;
