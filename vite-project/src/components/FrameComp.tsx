type FrameProps = {
    colorBgOne: string;
    colorBgTwo: string;
    urlImg: string;
    data: {content: string}
}

export default function FrameComp({ colorBgOne, colorBgTwo, urlImg, data }: FrameProps) {
    return (
        <div className="frame">

            <div className="para-quote" 
              style={{background: `linear-gradient(30deg, ${colorBgOne}, ${colorBgTwo}`}}
            >
              {urlImg && data.content ? (
                <div className="para-img">
                  <p className="layer-quote">{data?.content}</p>
                  <img src={urlImg} width={800} height={450} alt="img" className="img" />
                </div>
                ) : data?.content ? data.content : urlImg ? (
                  <img src={urlImg} width={800} height={450} alt="img" className="img" />
                ) : null
              }
            </div>
          
        </div>
    )
}
