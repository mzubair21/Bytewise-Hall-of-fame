const Card = (props) => {
  return (
    <div
      className=" col-span-1 rounded-xl bg-slate-800 p-3 m-2 transition-all duration-300 ease-out opacity-80 hover:opacity-100 cursor-pointer flex flex-col justify-center items-center space-y-2 pt-6 pb-6"
      // onClick={handleClick}
      onClick={() => handleClick(props)}
    >
      <img
        className="bg-white/90 shrink-0 object-center object-contain ring-2 ring-white rounded-full w-32 h-32"
        src={props.img}
        alt={props.name + "image"}
      ></img>
      <h1 className="text-lg pt-4 text-white font-bold">{props.name}</h1>
      <h1 className="text-cyan-300">{props.role}</h1>
      <h1 className="text-green-500">{props.email}</h1>
    </div>
  );
};
const handleClick = (props) => {
  console.log("Clicked");
  props.handleName(props.name);
  var popup = document.querySelector(".clicke");
  if (popup != null) {
    document.querySelector(".clicke").classList.add("clicked");
    document.querySelector(".clicke").classList.remove("clicke");
    setTimeout(() => {
      document.querySelector(".clicked").classList.add("clicke");
      document.querySelector(".clicked").classList.remove("clicked");
    }, 3000);
  }
};
export default Card;
