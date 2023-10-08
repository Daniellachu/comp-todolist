import "./styles.css";
import Playlist from "./components/tasklist";
import calendar from "./icons/calendar.png";
export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={calendar} alt="calendar" />
        <h1 className="title">Doodle to do!</h1>
      </div>
      <p>Task management app by daniellachu</p>
      <Playlist />
    </div>
  );
}
