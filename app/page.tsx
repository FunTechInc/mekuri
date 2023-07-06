import { LinkList, Nav } from "./_component/Nav";
import s from "./home.module.scss";

const Home = () => {
   return (
      <>
         <Nav pathName="home" />
         <main className={`ly_main ${s.main}`}>
            <video
               className={`${s.video}`}
               src="/logo-movie.mp4"
               loop
               muted
               autoPlay
               width={1200}
               height={677}
               playsInline={true}></video>
            <div className={s.linkWrapper}>
               <LinkList pathName="home" />
            </div>
         </main>
      </>
   );
};

export default Home;
