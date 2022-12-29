import BoxA from "./BoxA";
import BoxB from "./BoxB";
import BoxC from "./BoxC";
import BoxD from "./BoxD";
import Footer from "./Footer";

function Content() {
  return (
    <div>
      <BoxA></BoxA>
      <BoxB></BoxB>
      <BoxC></BoxC>
      <BoxD></BoxD>
      <div className="divider"></div>
      <Footer></Footer>
    </div>
  );
}
export default Content;
