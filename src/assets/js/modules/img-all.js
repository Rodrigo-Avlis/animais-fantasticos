export default function initImgAll() {
  const images = require.context("../../img", false, /\.(png|jpe?g|svg)$/);

  const imgarray = images.keys().map(images);

  return imgarray;
}
