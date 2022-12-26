// import React from 'react'
// import './Testimonials.scss';

// function Testimonials() {
//   return (
//     <div className='testimonials' id='testimonials'>
//     <div className="testimonial_title">
//       <h1>About</h1>
//     </div>
//     <div className="testimonial-container">
//       <div className="card">
          
//           <img className='img' src="assets/Avi.jpg" alt="" />
       
//         <div className="card-title">
//         <p><h4>I' am Avanish</h4> Hello everyone, hope you all are doing good and its my pleasure to present you guys my very own portfolio, I am a web developer from Prayagraj India. Currently I am looking for an entry level position in any reputed organisation. I have completed my graduation(B.tech) in the year 2020. Talking about me I am very enthusiastic, kind, fun loving guy who loves to code, dance, cook and I never hold myself back from taking any challenges life throws at me. If you like my work kindly give your valuable response thank you.</p>
//         </div>
        
//       </div>
//     </div>
     
//     </div>
//   )
// }

// export default Testimonials



import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Avanish Srivas",
      title: "Web Developer",
      img:
        "assets/Avi.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Hello everyone, hope you all are doing good and its my pleasure to present you guys my very own portfolio, I am a web developer from Prayagraj India. Currently I am looking for an entry level position in any reputed organisation. I have completed my graduation(B.tech) in the year 2020. If you like my work kindly give your valuable response thank you. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}