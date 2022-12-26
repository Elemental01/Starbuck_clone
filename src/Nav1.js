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
      <div class="search-container">
        <input
          type="text"
          placeholder="Looking for something specific.."
          name="search-text"
        ></input>
        <button class="search-button"></button>
        <hr></hr>
      </div>
    </div>
  );
}
export default Nav1;
