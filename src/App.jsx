import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import Hero from "./components/Hero.jsx";
import video from "./images/video.mp4";
import vanillastyle from "./stylecss.module.css";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={vanillastyle.ahero}>
        <video autoPlay loop muted playsInline className={vanillastyle.avid}>
          <source src={video} type="video/mp4"></source>
        </video>
        <div className={`${styles.boxWidth} ${vanillastyle.anav}`}>
          <Navbar />
        </div>
        <div className={vanillastyle.headiv}>
          <Hero />
        </div>
        <p className={`max-w-[700px] mt-5 ${vanillastyle.headp}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={`bg-primary`}>
        <div
          className={`${styles.boxWidth}  ${styles.paddingX}`}
          style={{
            display: "flex",
            flexWrap: "auto",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Stats />
        </div>

        <div className={`bg-white ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <Business />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <Billing />
          </div>
        </div>

        <div className={`bg-white ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <CardDeal />
          </div>
        </div>

        <div className={`bg-primary  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}  ${styles.paddingX}`}>
            <Testimonials />
          </div>
        </div>

        <div className={`bg-white ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
