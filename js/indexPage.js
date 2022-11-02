const root = ReactDOM.createRoot(
  document.getElementById('body')
);

const heroImage = 'pics/springfling/020A7136.jpg'
const bottomLeft = 'pics/bcfc/020A0905-2.jpg'
const bottomRight = 'pics/airshow/5D6A0497.jpg'
const middleBigText = "One of the influential photographers of our generation"
const middleSmallText = "Mid-tier Valorant player, could be better."

const bodyStuff = (
  <div>
    <div className="heroImage">
      <img src={heroImage}></img>
    </div>
    <div className="stupidQuoteDiv">
      <p>{middleBigText}</p>
      <h3>{middleSmallText}</h3>
    </div>
    <div className="secondPhoto">
      <img src={bottomLeft}></img>
      <img src={bottomRight} style={{ borderRadius: '0px 30% 0px 0px' }}></img>
    </div>
  </div >
);


root.render(bodyStuff);