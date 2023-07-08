import radioImg from '../images/radio.png';
import './Contact.style.css';

function Contact() {
  return (
    <section>
      <div className="container">
        <div className="contact-page-wrapper">
          <a href="https://t.me/ymnicavsetaki" target="_blank">
            <img src={radioImg} alt="radio img" className="radio-img" />
          </a>
          <h2>Thank you!</h2>
          <p>for vising my fake game store. </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
