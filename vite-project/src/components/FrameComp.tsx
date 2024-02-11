import { Spinner } from '@chakra-ui/spinner';
import './styles/FrameComp.css';

type FrameProps = {
    colorBgOne: string;
    colorBgTwo: string;
    urlImg: string;
    data: {content: string};
    isLoading: boolean;
}

export default function FrameComp({ colorBgOne, colorBgTwo, urlImg, data, isLoading }: FrameProps) {
  
  if (isLoading) {
    return (
      <div style={{position: "absolute", top: "300px"}}>
        <Spinner />
      </div>
  )};

  return (
    <div className="frame">

      <div className="para-quote" 
        style={{background: `linear-gradient(30deg, ${colorBgOne}, ${colorBgTwo}`}}
      >
        {urlImg && data.content ? (
          <div className="para-img">
            <p className="layer-quote">{data?.content}</p>
            <img src={urlImg} width={680} height={430} alt="picsum img " className="img" />
          </div>
          ) : data?.content ? data.content : urlImg ? (
            <img src={urlImg} width={680} height={430} alt="picsum img " className="img" />
          ) : null
        }
      </div>
      
    </div>
  )
}
