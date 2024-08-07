
import styles from "./formaReg.module.css";

import Header from "@/components/header/header";
import H1 from "@/components/forma/h1";
import Forma from "@/components/forma/forma";
import InputText from '@/components/forma/inputText';
import InputPassword from '@/components/forma/inputPassword';
import InputPassword2 from '@/components/forma/inputPassword2';
import Button from "@/components/forma/button";
import LinkComp from "@/components/forma/link";
// import apiPost from "../api/post"; apiPost={apiPost}

export default function Home() {

  return (
    <main className={styles.mainPageDiv}>
      <Header styles={styles}/>
      <H1/>
      <Forma styles={styles}>
      <InputText styles={styles}/>
      <InputPassword styles={styles}/>
      <InputPassword2 styles={styles}/>
      <Button styles={styles} >создать</Button>
      <LinkComp styles={styles} patchUrl={'/'}>войти</LinkComp>
      </Forma>
    </main>
  );
}
