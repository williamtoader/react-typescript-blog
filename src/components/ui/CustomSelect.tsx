import React, { Component } from "react";

class CustomSelect extends Component<{options: Array<{key: String, text: String}>, onChange: Function}, {hidden: Boolean, currentOption: string}> {


  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      currentOption: ""
    };
    this.handleOption = this.handleOption.bind(this);
    this.option = this.option.bind(this);
  }

  handleOption(key: string): void  {
    this.props.onChange(key);
    this.setState({
      currentOption: key,
      hidden: true
    });
  }

  option(data) {
    return (
        <button
            className="custom-select-option flex items-center h-auto py-2 px-3 text-sm bg-white hover:bg-gray-200 border-b border-black tracking-wide uppercase"
            onClick={() => {this.handleOption(data.key);}} key={data.key}
        >
          {data.text}
        </button>
    );
  }

  render() {
    return (
      <div className={`font-ui tracking-wide uppercase`}>
        <div className="relative">
          <button
              className={`flex items-center h-8 pl-3 pr-2 border-b border-black focus:outline-none`}
              onClick={() => this.setState({hidden : !this.state.hidden})}
              onBlur={(e) => {
                if(e.relatedTarget === null || e.relatedTarget.className.indexOf("custom-select-option") === -1) this.setState({hidden : true})}
              }
          >
            <span className="text-sm leading-none tracking-wide uppercase">
              {this.props.options.filter(o => o.key === this.state.currentOption)[0].text}
            </span>
            <svg
              className="w-4 h-4 mt-px ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={`absolute flex z-50 flex-col w-40 mt-1 shadow-lg ${this.state.hidden ? "hidden" : ""}`}>
            {this.props.options.map(this.option)}
          </div>
        </div>
      </div>
    );
  }
}

export default CustomSelect;
