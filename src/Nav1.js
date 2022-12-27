import "./searchico.css";
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

        <div className="search-container">
          <img src="./images/search.svg" alt="search img"></img>
          <form action="" className="searchbar">
            <input
              type="text"
              placeholder="Looking for something specific?"
            ></input>
          </form>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default Nav1;
