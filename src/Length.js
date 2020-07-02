import React from "react";
import "./index.css";
import LengthRender from "./LengthRender";
class Length extends React.Component {
  constructor() {
    super();

    this.state = {
      meter: 0,
      kilometer: 0,
      centimeter: 0,
      millimeter: 0,
      inch: 0,
      foot: 0,
      yard: 0,
      mile: 0,
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

    if (this.state.unit === "meter") {
      const meter = this.state.number;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.001;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 100;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 1000;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 39.37;
      this.setState({ inch: inch });

      const foot = this.state.number * 3.28;
      this.setState({ foot: foot });

      const yard = this.state.number * 1.09;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.000621;
      this.setState({ mile: mile });
    } else if (this.state.unit === "kilometer") {
      const meter = this.state.number * 1000;
      this.setState({ meter: meter });

      const kilometer = this.state.number;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 100000;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 1000000;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 39370.078;
      this.setState({ inch: inch });

      const foot = this.state.number * 3280.839;
      this.setState({ foot: foot });

      const yard = this.state.number * 1093.613;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.621;
      this.setState({ mile: mile });
    } else if (this.state.unit === "centimeter") {
      const meter = this.state.number * 0.01;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.00001;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 10;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 0.3937;
      this.setState({ inch: inch });

      const foot = this.state.number * 0.0328;
      this.setState({ foot: foot });

      const yard = this.state.number * 0.0109;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.00000621;
      this.setState({ mile: mile });
    } else if (this.state.unit === "millimeter") {
      const meter = this.state.number * 0.001;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.000001;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 0.1;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 0.03937;
      this.setState({ inch: inch });

      const foot = this.state.number * 0.00328;
      this.setState({ foot: foot });

      const yard = this.state.number * 0.00109;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.000000621;
      this.setState({ mile: mile });
    } else if (this.state.unit === "inch") {
      const meter = this.state.number * 0.0254;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.0000254;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 2.54;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 25.4;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number;
      this.setState({ inch: inch });

      const foot = this.state.number * 0.0833;
      this.setState({ foot: foot });

      const yard = this.state.number * 0.02777;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.0000157;
      this.setState({ mile: mile });
    } else if (this.state.unit === "foot") {
      const meter = this.state.number * 0.3048;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.0003048;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 30.48;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 304.8;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 12;
      this.setState({ inch: inch });

      const foot = this.state.number;
      this.setState({ foot: foot });

      const yard = this.state.number * 0.333;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.000189;
      this.setState({ mile: mile });
    } else if (this.state.unit === "yard") {
      const meter = this.state.number * 0.9144;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 0.0009144;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 91.44;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 914.4;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 36;
      this.setState({ inch: inch });

      const foot = this.state.number * 3;
      this.setState({ foot: foot });

      const yard = this.state.number;
      this.setState({ yard: yard });

      const mile = this.state.number * 0.000568;
      this.setState({ mile: mile });
    } else if (this.state.unit === "mile") {
      const meter = this.state.number * 1609.35;
      this.setState({ meter: meter });

      const kilometer = this.state.number * 1.609;
      this.setState({ kilometer: kilometer });

      const centimeter = this.state.number * 160935;
      this.setState({ centimeter: centimeter });

      const millimeter = this.state.number * 1609350;
      this.setState({ millimeter: millimeter });

      const inch = this.state.number * 63360.236;
      this.setState({ inch: inch });

      const foot = this.state.number * 5280.019;
      this.setState({ foot: foot });

      const yard = this.state.number * 1760.006;
      this.setState({ yard: yard });

      const mile = this.state.number;
      this.setState({ mile: mile });
    }
  }

  render() {
    return (
      <LengthRender
        data={this.state}
        handleChangeInput={this.handleChangeInput}
        handleChangeSelect={this.handleChangeSelect}
        convert={this.convert}
      />
    );
  }
}

export default Length;
