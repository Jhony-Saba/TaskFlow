

export default function Home() {
  const num1 =100;
  const num2 =100;
  return (<> <h1>Jhony saba</h1>
  
  <h6>
  <Sum num1={num1} num2={500}/></h6>
  </>
  );
}
function Sum (Props){
  if(typeof Props.num1 === "number" && typeof Props.num2 == "number") 
     return Number.parseInt(Props.num1)+
  Number.parseInt(Props.num2);
    else 
      return "INVALIED TYPE ENTER A NUMBER"


}
