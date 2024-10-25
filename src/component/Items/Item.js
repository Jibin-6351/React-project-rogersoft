import "./Item.css";

function Item({ Product }) {
  return (
    <div className="item-main">
      <div>
        <img src={Product.image} alt="not found " className="image" />
      </div>
      <p>{Product.title}</p>
      <span className="price">{Product.price}</span>
      <button className="btn ">BUY</button>
    </div>
  );
}
export default Item;
