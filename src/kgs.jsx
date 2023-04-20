
import deselected from './assets/deselected.png';
import React, {useState} from 'react';
export default function Kgs() {
    const [isClicked, setIsClicked] = useState(false);

  const toggleVerify = () => {
    setIsClicked(!isClicked);
  }

  const checkbox = isClicked ? deselected : deselected;
  return (
    <section id="about">
      <div >
        <div >
        <div onClick={toggleVerify}>
        <span><img alt={'mine'} src={checkbox} /></span>
        </div>
          <h1 >
            Hi, I'm Gowrisubha.
          </h1>
          <h6>I love to build amazing
            apps.</h6>
          <p className="mb-8 leading-relaxed">
           In this project I've created a Random Quote Generator in which users can also post their own Quotes!
          </p>
          
        </div>
        
      </div>
    </section>
  );
}
