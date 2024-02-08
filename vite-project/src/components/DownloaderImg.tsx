import type { PhotoProps } from "../lib/definitions";
import './styles/DownloaderImg.css';

type DownloaderImgProps = {
  colorBgOne: string;
  colorBgTwo: string;
  hollyBooly: {
      boolBoxImg: boolean;
  }
  handleBoolBoxImg: () => void;
  photos: {
      id: number;
      name: string;
  }[]
  handleDownloadImg: (id: number) => void; 
}

export default function DownloaderImg({ colorBgOne, colorBgTwo, hollyBooly, handleBoolBoxImg, photos, handleDownloadImg }: DownloaderImgProps) {
    return (
        <>
            {hollyBooly.boolBoxImg === true ? (
              <div className="container-img">
                <div className="box-img" style={{background: `linear-gradient(30deg, ${colorBgOne}, ${colorBgTwo})`}}>

                  <div className="box-inner">
                    <span onClick={handleBoolBoxImg} className="close-span">X</span>
                    <h4>Choose an image :</h4>
                
                    {photos.map((photo: PhotoProps) => (
                      <span key={photo.id} onClick={() => handleDownloadImg(photo.id)}>➡️ &nbsp;Image: {photo.name}</span>
                    ))}
                  </div>

                </div>
              </div>
              ) : null
            }

            <div>
              <button type="button" onClick={handleBoolBoxImg}>
                Download
              </button>
            </div>
        </>
    )
}
