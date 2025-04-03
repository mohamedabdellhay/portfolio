// import logo from "./logo.svg";
import { PageHeader, PageInnerHeader } from "../../components";
import { Skills } from "../../data";
import Skill from "../../components/skills/Skill";
import "./style.css";
import Facts from "../../components/facts/Facts";
import { isMobile } from "../../util/isMobile";

function About() {
  return (
    <div className="page-content">
      <div className="container">
        <div>
          <div>
            <PageHeader title="about me" description="Who am i?" />
          </div>
          <div className="grid col-2 gap-30 align-center mob-flex">
            <div>
              <p className="color-grey margin-bottom-20 ln-height-25">
                Hello, i’m Elias!
              </p>
              <p className="color-grey margin-bottom-20 ln-height-25">
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </p>
              <p className="color-grey  ln-height-25">
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src="./images/Group 50.png"
                alt=""
                style={{ maxHeight: "505px" }}
              />
            </div>
          </div>
          <div>
            <div>
              <PageInnerHeader title="Skills" />
            </div>
            <div>
              <div
                className="grid gap-10"
                style={{
                  gridTemplateColumns: isMobile()
                    ? ""
                    : `repeat(${Skills.length}, 1fr)`,
                }}
              >
                {Skills.map((ele) => (
                  <Skill name={ele.name} list={ele.list} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <PageInnerHeader title="my-fun-facts" />
            </div>
            <div>
              <div className={isMobile() ? `` : `custom-grid`}>
                <div>
                  <div>
                    <Facts />
                  </div>
                </div>
                {!isMobile() && (
                  <div className="flex justify-end mob-none">
                    <img
                      src="./images/Group 53.png"
                      alt=""
                      style={{ maxHeight: "170px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
