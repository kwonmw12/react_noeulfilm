import interviewDBlink from '../json/review.json';


const Review = (props) => {
  const interviewjson = interviewDBlink[props.objnm];
  return (
    <section className="section py-5 text-center" id={props.contentid}>
      <h3 data-aos="fade-down" data-aos-duration="2000"> {props.title} </h3>
      <p data-aos="fade-up" data-aos-duration="2000">노을필름을 이용하신 고객님들의 소리</p>
      <div className="py-5 container-md text-start">
        <ul>
          {
            interviewjson.map(function (value, index) {
              //this조심할것
              return (
                <li key={'interview' + index} data-aos="fade-right">
                  <strong className='d-block border-bottom py-2 ' role="button" onClick={e => { console.log(e.target.nextSibling.classList.toggle('d-none')) }}>{value.subject}</strong>
                  <p className='py-3 d-none'>{value.content}</p>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Review;