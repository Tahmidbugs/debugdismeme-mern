import React from "react";
import "./feed.css";
function CreateMeme({ setModalvisible, setCustomMeme }) {
  const [template, setTemplate] = React.useState(null);
  const [topCaption, setTopCaption] = React.useState("");
  const [bottomCaption, setBottomCaption] = React.useState("");
  const templates=[1,2,3,4,5,7];
  return (
    <div className="modalContent">
      <div className="modalWrapper">
        {!template ? (
          <div className="templateSelect">
            <h3 className="templateSelectText">Select a template</h3>
            <div className="templates">
              {templates.map((template, index) => (

                <img
                src={require(`../../../assets/memetemplates/${template}.jpg`)}
                alt="template"
                className="template"
                onClick={() =>
                  setTemplate(require(`../../../assets/memetemplates/${template}.jpg`))
                }
                style={{ cursor: "pointer" }}
                />
              ))}
              
            </div>
            <div className="modalButtons">
              <button
                className="BackButton"
                onClick={() => setModalvisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="templateEdit">
            <input
              type="text"
              placeholder="Enter top caption"
              className="captionInput"
              value={topCaption}
              onChange={(e) => setTopCaption(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter bottom caption"
              className="captionInput"
              value={bottomCaption}
              onChange={(e) => setBottomCaption(e.target.value)}
            />

            <img src={template} alt="template" className="selectedTemplate" />

            {topCaption && <h1 className="topCaption">{topCaption}</h1>}
            {bottomCaption && (
              <h1 className="bottomCaption">{bottomCaption}</h1>
            )}
            <div className="createOrBackButtons">
              <button className="BackButton" onClick={() => setTemplate(null)}>
                Select Template
              </button>
              <button
                className="CreateMemeButton"
                onClick={() => {
                  setModalvisible(false);
                  setCustomMeme({ template, topCaption, bottomCaption });
                }}
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateMeme;
