const root = ReactDOM.createRoot(
  document.getElementById('body')
);

const heroImage = "/pics/airshow/5D6A0535.jpg"
const bottomRightImage = "/pics/airshow/5D6A0503.jpg"
const bottomRightText = "Learn a little bit about Ryan Robinson..."
const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolormagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum."


const aboutPage = (
  <div><div className="heroImage">
    <img loading="eager" src={heroImage}></img>
  </div>
    <div className=" aboutBody">
      <div className="aboutRobbyHeader">
        <p>{bottomRightText}</p>
      </div>
      <div className="aboutRobbySecondLevel">
        <div className="aboutRobbyBody">
          <p>{aboutText}</p>
        </div>
        <div className="aboutRobbyPicture">
          <img loading="lazy" src={bottomRightImage}></img>
        </div>
      </div>
    </div>
  </div>
)

root.render(aboutPage);