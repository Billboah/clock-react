import './App.css';
import Time from './time';
import Discription from './quotes';
import Detail from './detail';

function App() {
  function handleClick() {
    let arrow = document.querySelector('.arrow');
    let expand = document.querySelector('.expand');
    let discription = document.querySelector('.discription');
    let app = document.querySelector('.app');

    let details = document.querySelector('.details');
    let detailsSetting = details.style.display;

    if (detailsSetting === 'block') {
      discription.style.display = 'block';
      details.style.display = 'none';
      app.style.height = '100%';
      expand.firstChild.nodeValue = 'more';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      discription.style.display = 'none';
      details.style.display = 'block';
      app.style.height = '40%';
      expand.firstChild.nodeValue = 'less';
      arrow.style.transform = 'rotate(180deg)';
    }
  }

  return (
    <div className="clock-app">
      <div className="app">
        <Discription />
        <div className="time_section">
          <Time />
          <section className="button">
            <button className="expand" onClick={handleClick}>
              more
              <img
                src="https://images.squarespace-cdn.com/content/v1/5a593284a8b2b0e04f3568f0/1534374735178-B3SM4ABNOKKQSSU8NYHS/arrow-down.png"
                alt="arrow icon"
                aria-hidden="true"
                className="arrow"
              />
            </button>
          </section>
        </div>
      </div>
      <Detail />
    </div>
  );
}

export default App;
