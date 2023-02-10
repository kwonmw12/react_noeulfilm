import mdpickDBlink from '../json/mdpick.json';

function Mdpick(props) {
  const mdpickjson = mdpickDBlink[props.objnm];
  return (
    <section className="section py-5 text-center" id={props.contentid}>
      <h3 data-aos="fade-down" > {props.title}</h3>
      <p data-aos="fade-up">{props.subtitle}</p>
      <div className="py-5 container col-md-12 text-start">
        <ul className='p-0'>
          {
            mdpickjson.map(function (value, index) {
              
              return (
                <article key={'mdp' + index} className='cards'>
                  <div data-aos="zoom-in" data-aos-duration="2000" className="card card--1 col-4">
                    <img src={value.bg[0]} />
                  <div className="card__info-hover">
                  </div>
                  <div className="card__img"></div>
                  <a href="#" className="card_link">
                    <div className="card__img--hover">
                    </div>
                  </a>
                  <div className="card__info">
                    <span className="card__title">{value.title[0]}</span>
                    <h3 className="card__content">{value.content[0]}</h3>
                    <span className="card__by">{value.cost[0]}
                      <a href="#" className="card__author" title="author">{value.unit}
                      </a>
                    </span>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2500" className="card card--2 col-sm-1 col-4">
                <img src={value.bg[1]} />
                  <div className="card__info-hover">
                  </div>
                  <div className="card__img"></div>
                  <a href="#" className="card_link">
                    <div className="card__img--hover">
                      
                    </div>
                  </a>
                  <div className="card__info">
                    <span className="card__title">{value.title[1]}</span>
                    <h3 className="card__content">{value.content[1]}</h3>
                    <span className="card__by">{value.cost[1]}
                      <a href="#" className="card__author" title="author">{value.unit}
                      </a>
                    </span>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" className="card card--3 col-sm-1 col-4 m-0">
                <img src={value.bg[2]} />
                  <div className="card__info-hover">
                  </div>
                  <div className="card__img"></div>
                  <a href="#" className="card_link">
                    <div className="card__img--hover">
                    </div>
                  </a>
                  <div className="card__info">
                    <span className="card__title">{value.title[2]}</span>
                    <h3 className="card__content">{value.content[2]}</h3>
                    <span className="card__by">{value.cost[2]}
                      <a href="#" className="card__author" title="author">{value.unit}
                      </a>
                    </span>
                  </div>
                </div>
                </article>

              )
            }
            )
          }
        </ul>
      </div>
    </section>
  );
};

export default Mdpick;