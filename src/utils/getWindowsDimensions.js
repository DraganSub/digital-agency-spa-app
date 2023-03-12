export default function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width
  }
}