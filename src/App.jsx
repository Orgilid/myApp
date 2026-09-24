import "./App.css";
import MyButton from "./components/MyButton";
import Comment from "./components/Comment";

function App() {
  const studentClick = () => {
    alert("Оюутны мэдээллийг шүүж байна");
  };

  return (
    <div>
      <h1>React ажиллаж байна</h1>

      <MyButton n="Оюутны нэр" t="Шүүх" onClick={studentClick} />

      <MyButton />

      <Comment />
    </div>
  );
}

export default App;
