import mobile from '../images/image-hero-mobile.png';
import desktop from '../images/image-hero-desktop.png';

const Image = () => {
  return (
    <div className="mt-4 max-w-xl mx-auto lg:h-full ">
      <picture>
        <source srcSet={`${mobile} 1x`} media="(max-width: 1020px)" />
        <img
          srcSet={`${desktop} 2x`}
          alt="Artsy photo of guy on computer"
        />
      </picture>
    </div>
  );
};

export default Image;
