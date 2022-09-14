import Typewriter from 'typewriter-effect';
import "./HomePage.css";

export default function HomePage() {
  


  return (
    <>
    <br></br>
      <div className="TypeWriter">
      <Typewriter 
      onInit={(typewriter) => {
        typewriter.typeString("Become Limitless")
        .pauseFor(3000)
        .deleteAll()
        .pauseFor(2000)
        .typeString("Limitless Stylus")
        .start();
      }}
      />
    </div>
    </>
  );
}