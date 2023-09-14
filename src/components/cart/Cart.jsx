const Cart = ({ item }) => {
  console.log(item);
  return (
    <div className="w-1/3 text-center">
      <h1 className="text-4xl font-bold">Cart:</h1>
      {
        item.map((actor, idx) => (
          <div key={idx} className="flex items-center justify-between gap-6">
            <img src={actor.image} alt="" className="w-10 rounded-full"/>
            <p>{actor.name}</p>
            <p>{actor.salary}$</p>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;
