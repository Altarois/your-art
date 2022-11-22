import { useState } from "react";
import Card from "../../../Main/Cards";

const Description = ({description, subjects , meduims, materials, styles}) => {
  
    const [hideDescription, setHideDescription] = useState(false);
  const [hideDetail, setHideDetail] = useState(false);

  return (
    <Card>
        <div className="hide">
        <section
        className={hideDescription ? `Description fullInfo` : "Description"}
        onClick={() => setHideDescription(!hideDescription)}
      >
        <h2>DESCRIPTION</h2>
        <p>{description}</p>
      </section>
        <br />
      <section
        className={hideDetail ? `Detail fullInfo` : "Detail"}
        onClick={() => setHideDetail(!hideDetail)}
      >
        <h2>SUBJECT, STYLE, MEDUIM, MATERIALS</h2>
        {
            <p>
                <span>SUBJECT</span>
                {subjects.map((subject, index) => {
                return <> {subject} / </>
            })}
            </p>
            
        }
        {
            <p>
                <span>STYLE</span>
                {styles.map((style, index) => {
                return <> {style} / </>
            })}
            </p>
            
        }

        {
            <p>
                <span>MEDUIM</span>
                {meduims.map((meduim, index) => {
                return <> {meduim} / </>
            })}
            </p>
            
        }
        {
            <p>
                <span>MEDUIM</span>
                {materials.map((material, index) => {
                return <> {material} / </>
            })}
            </p>
            
        }
        
      </section>
        </div>
      
    </Card>
  );
};

export default Description;
