import WindowControls from "#components/WindowControls";
import { gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Gallery = () => {
  const data = gallery;

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
      </div>
      <div className="p-5 space-y-6 bg-white">
        <ul className="grid grid-cols-3 gap-4">
          {data.map(({ img, id }) => (
            <li key={id}>
              <img src={img} alt="" className={`col-${id} rounded`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
