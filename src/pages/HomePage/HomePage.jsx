import { checkToken } from '../../utilities/users-service';
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate.toLocaleDateString())
  }

function App() {
  return (
    <div className="App">
      <Typewriter 
      onInit={(typewriter) => {
        typewriter.typeString("Become Limitless").start();
      }}
      />
    </div>
  );
}

  return (
    <>
    <br></br>
      <h1>Limitless Stylus</h1>
      
    </>
  );
}