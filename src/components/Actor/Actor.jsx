const Actor = ({ actor, handleCart }) => {
  const { image, name, role, country, salary } = actor;
  return (
    <div className="space-y-6 border border-black p-4 rounded-2xl my-5 w-2/3 mx-auto">
      <img src={image} alt="" className="w-20 rounded-full mx-auto" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{country}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ,sapiente.</p>
      <div className="flex item-center justify-around">
        <p>Salary: ${salary}</p>
        <p>Role: {role}</p>
      </div>
      <button className="text-xl font-bold text-white p-2 bg-black" onClick={() =>handleCart(actor)}>Buy!!!</button>
    </div>
  );
};

export default Actor;
