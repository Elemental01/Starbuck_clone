function BoxC() {
  return (
    <section className="box box-c bg-secondary grid-col-2 grid-reversed">
      <img src="./images/box-c.png" alt="img"></img>
      <div className="box-test">
        <h2 className="text-xl">Merry moment</h2>
        <p className="text-md">
          {" "}
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
        </p>
        <a
          className="btn btn-light-outline"
          href="https://starbucks.in/ordering"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
export default BoxC;
