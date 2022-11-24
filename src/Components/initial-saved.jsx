export default initialsaved = (props) => {
  return (
    <div>
      <div className="popup fixed top-10 left-0 bg-slate-900 w-0 clicke whitespace-nowrap z-10">
        <p className="text-white bg-green-600 ml-4 py-4 w-0 text-center overflow-hidden scale-110 translate-x-1">
          Saved
        </p>
      </div>
      <div className="min-h-screen bg-slate-600 grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
        <User name="Zubair " age={21} email="zubair@gmail.com" />
        <User name="Ahti " age={21} email="zubair@gmail.com" />
        <User name="Abdullah " age={21} email="zubair@gmail.com" />
        <User name="Usman " age={21} email="zubair@gmail.com" />
        <User name="Hamzi " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
        <User name="Zainab " age={21} email="zubair@gmail.com" />
      </div>
    </div>
  );
};
const handleClick = () => {
  console.log("Clicked");
  document.querySelector(".clicke").classList.add("clicked");
  document.querySelector(".clicke").classList.remove("clicke");
  setTimeout(() => {
    document.querySelector(".clicked").classList.add("clicke");
    document.querySelector(".clicked").classList.remove("clicked");
  }, 2000);
};
const User = (props) => {
  return (
    <div
      className="col-span-1 bg-slate-800 p-3 m-2 transition-all duration-300 ease-out opacity-80 hover:opacity-100 cursor-pointer flex flex-col justify-center items-center"
      onClick={handleClick}
    >
      <h1 className="text-lg text-white font-bold">{props.name}</h1>
      <h1 className="text-cyan-300">{props.age}</h1>
      <h1 className="text-green-500">{props.email}</h1>
    </div>
  );
};
