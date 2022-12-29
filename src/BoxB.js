function BoxB() {
  return (
    <section className="box box-b bg-secondary grid-col-2">
      <img src="./images/boxb.png" alt="img"></img>
      <div className="box-text">
        <h2 className="text-xl">New to the nice list</h2>
        <p className="text-md">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almondmilk Latte.
        </p>
        <a
          href="https://www.starbucks.com/menu/product/517/hot"
          className="btn btn-light-outline"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
export default BoxB;
