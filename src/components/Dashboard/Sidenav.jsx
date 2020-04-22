import React from 'react';
import '../../assets/styles/components/Dashboard/Sidenav.scss';

const Sidenav = () => (
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
      <div className="sidenav__profile-title text-light">Richard K</div>
    </div>
    <div className="row row--align-v-center row--align-h-center">
      <ul className="navList">
        <li className="navList__heading">
          álbumes<i className="fas fa-compact-disc"></i>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon">
              <i className="fas fa-compact-disc"></i>
            </span>
            <span className="navList__subheading-title">álbum 1</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">podcast 1</li>
            <li className="subList__item">podcast 2</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon">
              <i className="fas fa-compact-disc"></i>
            </span>
            <span className="navList__subheading-title">álbum 2</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">podcast 1</li>
            <li className="subList__item">podcast 2</li>
            <li className="subList__item">podcast 3</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon">
              <i className="fas fa-compact-disc"></i>
            </span>
            <span className="navList__subheading-title">álbum 3</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">podcast 1</li>
            <li className="subList__item">podcast 2</li>
          </ul>
        </li>

        <li className="navList__heading">
          mis acciones<i className="fas fa-mouse-pointer"></i>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon">
              <i className="fas fa-chart-bar"></i>
            </span>
            <span className="navList__subheading-title">analitica</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">Visualizaciones</li>
            <li className="subList__item">subs</li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidenav;
