function Nav1() {
  return (
    <div>
      <div className="Nav1">
        <nav>
          <img src="./images/starbucks.png" alt="Starbucks Logo"></img>
          <a href="./App.js"> Home</a>
          <a href="./Order.js"> Order</a>
          <a href="./Pay.js"> Pay</a>
        </nav>
      </div>
      <div className="search-container">
        <img src="./images/search.svg"></img>
        <input
          _ngcontent-eye-c103=""
          type="text"
          placeholder="Looking for something specific?"
        ></input>
      </div>
      <hr></hr>
    </div>
  );
}
export default Nav1;
