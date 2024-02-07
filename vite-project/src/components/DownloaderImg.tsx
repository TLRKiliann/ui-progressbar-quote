import type { PhotoProps } from "../lib/definitions";

type DownloaderImgProps = {
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

export default function DownloaderImg({ hollyBooly, handleBoolBoxImg, photos, handleDownloadImg }: DownloaderImgProps) {
    return (
        <>
            {hollyBooly.boolBoxImg === true ? (
              <div className="container-img">
                <div className="box-img">

                  <span onClick={handleBoolBoxImg} className="close-span">X</span>
                  <h4>Download an image: </h4>
              
                  {photos.map((photo: PhotoProps) => (
                    <span key={photo.id} onClick={() => handleDownloadImg(photo.id)}>➡️ {photo.name}</span>
                  ))}

                </div>
              </div>
              ) : null
            }

            <div>
              <button type="button" onClick={handleBoolBoxImg}>
                Open img box
              </button>
            </div>
        </>
    )
}
