import styles from './server.module.css';
import apiGet from '../api/get';



const Page = async() => {
  
  const Data = await apiGet().then(data => {
    //console.log(data)
    return data
  })

  console.log(Data)
  return (
    <div className={styles.bod}>

    {Data.map((el) => {
      return (
        <div key={el.id} className={styles.list}>
         {el.name}
        </div>
      )
    })}
    </div>
  )
}

export default Page