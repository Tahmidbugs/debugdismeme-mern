import React from "react";
import "./feed.css";
function CreateMeme({ setModalvisible, setCustomMeme, modalVisible }) {
  const [template, setTemplate] = React.useState(null);
  const [topCaption, setTopCaption] = React.useState("");
  const [bottomCaption, setBottomCaption] = React.useState("");
  const templates=[1,2,3,4,5,7];
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/64ku.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [top, setTop]= React.useState([])
  
  
    React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setAllMemes(data.data.memes))
    }, []);
  
    // console.log(allMemes[2].url)
    
   const randomize =(e)=>{
    e.preventDefault();
  const shuffled = [...allMemes].sort(() => Math.random() - 0.5);
  setAllMemes(shuffled);
   }   

  
  return (
    <div className="modalContent">
      <div className="modalWrapper">
        {!template ? (
          <div className="templateSelect">
            {/* <h3 className="templateSelectText">Select a template</h3> */}
            <div className="templates">
             
              {allMemes.slice(0,5).map((template, index) => (

                <img
                src={template.url}
                alt="template"
                key={index}
                className="template"
                onClick={() =>
                  setTemplate(template.url)
                }
                style={{ cursor: "pointer" }}
                />
              ))}
              <span ><button onClick={randomize} className="template">Randomize</button></span>
              
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
                Go back
              </button>
              <button
                className="CreateMemeButton"
                onClick={() => {
                  setModalvisible(false);
                  setCustomMeme({ template, topCaption, bottomCaption });
                }}
                data-dismiss="modal"
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
