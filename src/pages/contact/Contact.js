import { PageHeader, PageInnerHeader } from "../../components";
import "./style.css";
import { email, github } from "../../components/contacts/Contacts";
import Contact from "../../components/contacts/Contact";
import { xTwitter } from "../../components/icon";
// import { xTwitter, LinkedIn } from "../../components/icon";

function ContactPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div>
          <div>
            <div className="margin-bottom-70">
              <PageHeader title="Contact" description="Who am i?" />
            </div>
            <div className="margin-bottom-70">
              <div className="grid col-2 gap-10">
                <div>
                  <div>
                    <p>
                      I’m interested in freelance opportunities. However, if you
                      have other request or question, don’t hesitate to contact
                      me
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mob-remove-flex">
                  <div className="flex gap-10 mob-col">
                    <div className="border-grey padding-10">
                      <div>
                        <h3 className="font-16 font-400 padding-bottom-10">
                          Support me
                        </h3>
                        <p className="color-grey">4149500120690030</p>
                      </div>
                    </div>
                    <div className="border-grey padding-10">
                      <div>
                        <h3 className="font-16 font-400 padding-bottom-10">
                          Message me here
                        </h3>
                        <div className="flex flex-col gap-10">
                          <Contact
                            img={email}
                            title="abdellhay@gmail.com"
                            link="mailto:mohamedabdellhay1@gmail.com"
                          />
                          <Contact
                            img={github}
                            title="mohamedabdellhay"
                            link="https://www.github.com/mohamedabdellhay"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-bottom-70">
              <div>
                <PageInnerHeader title="all-media" />
              </div>
              <div>
                <a href="https://x.com/Abd_Ellhay" target="blank">
                  <div className="flex gap-5">
                    <span>{xTwitter}</span>
                    <span>@Abd_Ellhay</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
