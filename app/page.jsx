import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/header/header';
import H1 from '@/components/forma/h1';
import Forma from '@/components/forma/forma';
import InputText from '@/components/forma/inputText';
import InputPassword from '@/components/forma/inputPassword';
import Button from "@/components/forma/button";
import LinkComp from "@/components/forma/link";

export default function Main() {
  return (
    <main className={styles.mainPageDiv}>
      <Header styles={styles}/>
      <H1/>
      <Forma styles={styles}>
      <InputText styles={styles}/>
      <InputPassword styles={styles}/>
      <Button styles={styles}>войти</Button>
      <LinkComp styles={styles} patchUrl={'/client'} >зарегистрация</LinkComp>
      </Forma>
     
    </main>
  )
}
// contr+shift+p settings настройки
// shift+alt+t перевод выделеной строки на русский
//contr+1 скриншот
// OneDrive/'Рабочий стол'/

// npm run dev
// git add ./
// git commit -am '
//  git push
// git log
// git stash
// git push -f origin HEAD~1:main 
// npm run build
// Удолить локально коммит 
// git reset HEAD~


// npx prisma
// npx prisma init
// npx prisma db pull
// mkdir -p prisma/migrations/0_init
// npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
// npx prisma migrate resolve --applied 0_init~

// npx prisma studio