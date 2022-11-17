const root = ReactDOM.createRoot(
  document.getElementById('header')
);


const topLeftLogo = "RRP Dashboard";
const headerIconOne = "EVENT MANAGEMENT";
const headerIconTwo = "INQUIRY DASHBOARD";
const headerIconThree = "WEBSITE MANAGEMENT";
const inquireButton = "INQUIRE";



const headerTaskbar = (
  <header className="header">
    <div className="topLeftLogo">
      <p>{topLeftLogo}</p>
    </div>
    <div className="headerIcons">
      <div className="headerIcon">
        <a href="dashboard.html">
          <p>{headerIconOne}</p>
        </a>
      </div>

      <div className="headerIcon">
        <a href="inquirydashboard.html">
          <p>{headerIconTwo}</p>
        </a>
      </div>

      <div className="headerIcon">
        <a href="dashboard.html">
          <p>{headerIconThree}</p>
        </a>
      </div>
    </div>
    {/* <div className="inquireButtonDiv">
      <div className="inquireButton">
        <a href="/html/inquire.html">
          <p>{inquireButton}</p>
        </a>
      </div>
    </div> */}
  </header>
);


root.render(headerTaskbar);