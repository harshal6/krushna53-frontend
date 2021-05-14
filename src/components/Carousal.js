import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Caroussal = () => {
  return (
    <ImageGallery
      items={images}
      autoPlay
      lazyLoad
      thumbnail={false}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets
    />
  );
};
export default Caroussal;
