import { Logoo } from "@/components/layout";

const Logo = () => {
    return (
      <Logoo className="flex items-center flex-col" >
        <div className="flex items-center justify-center cursor-pointer">
          <div className="text-blue-600 font-bold text-3xl">SMS</div>
          <div className="text-green-700 font-bold text-3xl pl-1">SERVICES</div>
        </div>
  
        <p>VOTRE VOITURE <span className="text-blue-600">VOTRE IMAGE</span></p>
      </Logoo>
    );
  };
  
  export default Logo;