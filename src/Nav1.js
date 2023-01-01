function Nav1() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-fixed" />
          <a href="index.html">
            <img src="./images/logo.svg"></img>
          </a>

          <ul className="navbar-nav-left">
            <li>
              <a href="https://www.starbucks.com/menu">Menu</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/rewards">Rewards</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/gift">Gift Cards</a>
            </li>
          </ul>
          <ul className="navbar-nav-right">
            <li>
              <a href="https://www.starbucks.ca/store-locator?map=57.751076,-101.645508,4z">
                <img src="./images/marker.svg" alt />
              </a>
            </li>
            <li>
              <a href="https://www.starbucks.ca/store-locator?map=57.751076,-101.645508,4z">
                <span>Find a store</span>
              </a>
            </li>
            <a href="https://www.starbucks.ca/account/signin?returnUrl=https%3A%2F%2Fwww.starbucks.ca%2Fstore-locator%3Fmap%3D57.751076%2C-101.645508%2C4z">
              <li>
                <button className="btn btn-dark-outline">sign in</button>
              </li>
            </a>
            <a href="https://www.starbucks.ca/account/create">
              <li>
                <button className="btn btn-dark">join now</button>
              </li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="mobile-menu hidden" id="menu">
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Rewards</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
        <div className="mobile-menu-bottom">
          <button className="btn btn-dark-outline">Sign in</button>
          <button className="btn btn-dark">Join now</button>
          <div>
            <a href="#">
              <img src="img/marker.svg" alt />
              <span>Find a store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav1;
