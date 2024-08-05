import Image from "next/image";
import Loop from "./loop";
import Header from "./Header";
import Menu from "./Menu";
import Principal from "./PrincipalContent";

export default function Home() {
  return (<div>
    {/* <Loop></Loop> */}

    <Header></Header>
    <Menu></Menu>
    <Principal></Principal>

  </div>)
    
}
