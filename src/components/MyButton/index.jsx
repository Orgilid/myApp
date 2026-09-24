import "./style.css";

const MyButton = (props) => {
  // Default function
  const handleClick = () => {
    alert("Та товчийг дарлаа");
  };

  return (
    <div>
      <span>{props.n ? props.n : "Мэдээлэл"}</span>
      <br />

      <input
        className="MyButton"
        onClick={props.onClick ? props.onClick : handleClick}
        type="button"
        value={props.t ? props.t : "Харуулах"}
      />
    </div>
  );
};

export default MyButton;
