import Lottie from "lottie-react";
import dev from "../../assets/animations/dev.json";
//@ts-ignore
import profilePlaceHolder from "../../assets/images/profile-image-placeholder.png";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src={profilePlaceHolder} alt="" className="avatar" />
          <div className="icon-verified" />
        </div>
        <h1 className="title">Web Developer, Mobile Developer</h1>
        <p className="sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum
          ipsum ducimus facere eos beatae explicabo debitis vero! Amet quas
          iusto nemo labore animi voluptatem hic, corporis inventore error
          distinctio?
        </p>
        <div className="icons flex">
          <a
            href="https://linkedin.com/in"
            className="icon icon-linkedin"
            target="_blank"
          />
          <a
            href="https://github.com"
            className="icon icon-github"
            target="_blank"
          />
          <a
            href="https://leetcode.com"
            className="icon icon-leetcode"
            target="_blank"
          />
          <a
            href="https://www.hackerrank.com"
            className="icon icon-hackerrank"
            target="_blank"
          />
        </div>
      </div>
      <div className="right-section animation">
        <Lottie loop={false} className="animation-dev" animationData={dev} />
      </div>
    </section>
  );
}
