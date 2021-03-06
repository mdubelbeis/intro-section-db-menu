import mobile from '../images/image-hero-mobile.png';
import desktop from '../images/image-hero-desktop.png';

const Image = () => {
  return (
    <div className="max-w-lg mx-auto">
      <picture>
        <source srcSet={`${mobile} 1x`} media="(max-width: 1020px)" />
        <img
          srcSet={`${desktop} 2x`}
          src={desktop}
          alt="guy on computer"
        />
      </picture>
    </div>
  );
};

export default Image;
