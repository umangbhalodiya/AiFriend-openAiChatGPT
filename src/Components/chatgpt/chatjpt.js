import React, { useState } from "react";
import "./chatgpt.css";
import { apis } from "../ApiObjects/apis";
const { Configuration, OpenAIApi } = require("openai");

const Chatgpt = () => {
  const configuration = new Configuration({
    apiKey: " ", //  <----- put your API key here   //    visit and register at  (https://beta.openai.com/account/api-keys) for Api keys
  });
  const openai = new OpenAIApi(configuration);
  const [response, setResponse] = useState("");
  const [api, setApi] = useState({});
  const [sectionType, setSectionType] = useState("select");

  const handleApi = (value) => {
    let newObj = {
      name: { ...api.name },
      props: { ...api.props, prompt: value },
    };
    setApi(newObj);
  };
  const handleSubmit = async () => {
    const response = await openai.createCompletion(api.props);
    setResponse(response.data.choices[0].text);
  };

  const handleBack = () => {
    setSectionType("select");
    setApi({});
    setResponse("");
  };

  return (
    <div>
      <div className="gpt-container">
        <div className="gpt-text">Ask a Question to your AI friend</div>
        {sectionType === "select" && (
          <div className="section-types">
            <div className="api-boxes">
              {apis.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="api-item"
                    style={{ background: item.name.color }}
                    onClick={() => {
                      setSectionType("inputs");
                      setApi(item);
                    }}
                  >
                    {item?.name?.title}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {sectionType === "inputs" && (
          <div className="section-inputs">
            <div className="gpt-api" style={{ color: api?.name?.color }}>
              {api?.name?.title}
            </div>
            <div className="gpt-input">
              <input
                className="gpt-input-box"
                placeholder="Ask your question here"
                type="text"
                onChange={(e) => {
                  handleApi(e.target.value);
                }}
              />
            </div>
            <div className="btn-grp">
              <button
                className="gpt-btn-blue"
                onClick={() => {
                  handleBack();
                }}
              >
                Back
              </button>
              <button
                className="gpt-btn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>

            <div className="gpt-response">
              <i> {response}.</i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatgpt;
