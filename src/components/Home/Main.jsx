import React from 'react';

import '../../assets/styles/components/Dashboard/Main.scss';

const Main = () => (
  
  <main className="main">
    <div className="main-header">
      <div className="main-header__intro-wrapper">
        <div className="main-header__welcome">
          <div className="main-header__welcome-title text-light">Bienvenido, <strong>Richard</strong></div>
          <div className="main-header__welcome-subtitle text-light"><i>"Lo que no se mide, no crece"</i></div>
        </div>
        <div className="quickview">
          <div className="quickview__item">
            <div className="quickview__item-total">41</div>
            <div className="quickview__item-description">
              <i className="far fa-eye"></i>
              <span className="text-light">Visualizaciones</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">64</div>
            <div className="quickview__item-description">
              <i className="far fa-comment"></i>
              <span className="text-light">Mensajes</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">+122K</div>
            <div className="quickview__item-description">
              <i className="fas fa-heart"></i>
              <span className="text-light">Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-overview">
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--document">
           <i className="fas fa-compact-disc"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">Crear <strong>Álbum</strong></h3>
          <p className="overviewCard-subtitle">Crea una sección</p>
        </div>
      </div>
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--calendar">
           <i className="fas fa-plus"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">Sube <strong>Podcast</strong></h3>
          <p className="overviewCard-subtitle">Sube algo increible</p>
        </div>
      </div>
      
     
    </div> 
    <div className="main__cards">
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">Comentarios <strong>recientes</strong>
          </div>
          <div className="settings">
            
            <div className="settings__block"><i className="fas fa-window-close"></i></div>
          </div>
        </div>
        <div className="card__main">
          <div className="card__row">
            <div className="card__icon"><i className="far fa-comment"></i></div>
            <div className="card__time">
              <div>ayer</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Jonathan G</div>
              <div className="card__description">¿Entonces no deberia utilizar css-grid?</div>
              <div className="card__note">Podcast 34</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="far fa-comment"></i></div>
            <div className="card__time">
              <div>ayer</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Richard K</div>
              <div className="card__description">De acuerdo en el minuto 1:39</div>
              <div className="card__note">Podcast 342</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="far fa-comment"></i></div>
            <div className="card__time">
              <div>ayer</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Marcela R</div>
              <div className="card__description">En mi experiencia en Python...</div>
              <div className="card__note">Podcast 344</div>
            </div>
        
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">Recientes <strong>Publicaciones</strong>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-window-close"></i></div>
          </div>
        </div>
        <div className="card">
          <div className="documents">
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">Podcast 1</div>
              <div className="document__date">07/16/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">Podcast 1</div>
              <div className="document__date">09/04/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">Podcast 1</div>
              <div className="document__date">10/10/2018</div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="card card--finance">
        <div className="card__header">
          <div className="card__header-title text-light">Mis <strong>metricas</strong>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-window-close"></i></div>
          </div>
        </div>
        <div id="chartdiv"></div>
      </div>
    </div> 
  </main>
)

export default Main