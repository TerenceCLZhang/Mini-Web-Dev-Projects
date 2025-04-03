import "./Testimonials.css";

function Testimonial({ testimonial }) {
  const getImage = (name) => {
    name = name.replace(/[^a-zA-Z]/g, "");
    return `src/assets/${name}.jpeg`;
  };

  return (
    <div className="testimonial">
      <p className="testimonial-msg">"{testimonial.testimonial}"</p>
      <div className="person-info">
        <img
          src={getImage(testimonial.name)}
          alt={testimonial.name}
          className="profile-pic"
        />
        <div className="person-details">
          <h1 className="name">{testimonial.name}</h1>
          <h2 className="occupation">{testimonial.occupation}</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
