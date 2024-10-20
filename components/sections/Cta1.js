import Link from "next/link";

export default function Cta1({
  primaryHeading,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <>
      <section className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta__wrapper m-0">
                <div className="section__title white-title">
                  <h2 className="title tg-svg"> {primaryHeading} </h2>
                </div>
                <div className="cta__desc">
                  <p>{description}</p>
                </div>
                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                  <Link
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=919500498547&text=Hello%2C%20I%20was%20exploring%20your%20website%20and%20am%20interested%20in%20learning%20more%20about%20your%20services."
                    className="btn white-btn tg-svg"
                  >
                    <span className="text">
                      {" "}
                      {buttonText || "Connect with us"}{" "}
                    </span>{" "}
                    <span
                      className="svg-icon"
                      id="cta-btn"
                      data-svg-icon="assets/img/icons/btn-arrow.svg"
                    />
                  </Link>
                </div>
                <img
                  className="object"
                  src="/assets/img/objects/cta_shape01.svg"
                  style={{ left: 25, top: "-35px" }}
                  alt="Object"
                  data-aos="fade-down"
                  data-aos-delay={400}
                />
                <img
                  className="object"
                  src="/assets/img/objects/cta_shape02.svg"
                  style={{ right: "-20px", bottom: "-80px" }}
                  alt="Object"
                  data-aos="fade-up"
                  data-aos-delay={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
