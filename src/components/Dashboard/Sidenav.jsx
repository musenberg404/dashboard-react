import React, { useState } from "react";
import { DASHBOARD_OPTIONS } from "../../constants/Dashboard";
import "../../assets/styles/components/Dashboard/Sidenav.scss";

const Sidenav = () => {
  const [activeOptions, setActiveOptions] = useState([]);

  const toggleMenu = (i) => {
    let updatedOptions = [];
    if (activeOptions.includes(i)) {
      updatedOptions = activeOptions.filter((option) => option !== i);
    } else {
      updatedOptions = [...activeOptions, i];
    }
    setActiveOptions(updatedOptions);
  };

  return (
    <aside className="sidenav">
      <div className="sidenav__brand">
        <i className="fas fa-microphone-alt"></i>
        <a className="sidenav__brand-link" href="#">
          RichardKJS
        </a>
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <div className="sidenav__profile">
        <div className="sidenav__profile-avatar"></div>
        <div className="sidenav__profile-title text-light">Richard M</div>
      </div>
      <div className="row row--align-v-center row--align-h-center">
        <ul className="navList">
          {DASHBOARD_OPTIONS.map(({ title, secondLevel }, i) => (
            <div key={`dashboardOption-${i}`}>
              <li className="navList__heading">
                {title}
                <i className="fas fa-compact-disc"></i>
              </li>
              {secondLevel &&
                secondLevel.length &&
                secondLevel.map(({ title, options }, j) => (
                  <li key={`dashboardOption-${i}-${j}`}>
                    <div
                      className={
                        activeOptions.includes(j)
                          ? "navList__subheading row row--align-v-center navList__subheading--open"
                          : "navList__subheading row row--align-v-center "
                      }
                      onClick={() => toggleMenu(j)}
                    >
                      <span className="navList__subheading-icon">
                        <i className="fas fa-compact-disc"></i>
                      </span>
                      <span className="navList__subheading-title">{title}</span>
                    </div>
                    <ul
                      className={
                        activeOptions.includes(j)
                          ? "subList"
                          : "subList subList--hidden"
                      }
                    >
                      {options.map(({ title }, k) => (
                        <li
                          className="subList__item"
                          key={`dashboardOption-${i}-${j}-${k}`}
                        >
                          {title}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidenav;
