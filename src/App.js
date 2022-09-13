import "./assets/css/index.css";
import logo from "./assets/img/logoNCC.png";
import cssIcon from "./assets/img/css-icon.png";
import htmlIcon from "./assets/img/html-icon.png";
import urlIcon from "./assets/img/url-icon.png";
import GroupContent from "./GroupContent";

const sidebar = ["home", "service", "news", "blog", "contact"];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.";

const imgContent = [cssIcon, htmlIcon, urlIcon];
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        {/* <div className="icon-mobile">MENU</div> */}
        <ul>
          {sidebar.map((item, index) => {
            return (
              <li key={index} className={item === "news" ? "active" : ""}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="main">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="group-1">
            <h2>Lorem ipsum dolor sit asmet?</h2>
            <p>{lorem}</p>
          </div>
          <div className="row">
            {imgContent.map((item, index) => {
              return (
                <div key={index} className="col col-3 col-sm-1 col-md-1">
                  <GroupContent image={item} lorem={lorem} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer">
          <div className="content">Copyright &copy; 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
