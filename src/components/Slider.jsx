import { useEffect, useState } from 'react';
import { sliderImages } from '../sliderImages';
import './Slider.style.css';

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(slider);
  }, [currentImage]);

  const handleNext = () => {
    const newIndex = currentImage === sliderImages.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  return (
    <section className="slider">
      <div className="slider-frame">
        {sliderImages.map((image, index) => {
          return (
            <div
              key={index}
              className={`slider-image ${currentImage === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
    </section>
  );
}

export default Slider;
