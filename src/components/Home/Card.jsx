import Image from "next/image";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose
} from "react-icons/ai";
import "styles/Home/Popup.module.css";
import "styles/Home/Team.module.css";

const Card = ({ data }) => {
  const {
    id,
    name,
    position,
    img,
    links: { link1, link2, link3 },
    modal: { team, logo, slogan, desc },
  } = data;

  const [popup, setPopup] = useState(null);

  const toggleModal = (id) => {
    if (popup === id) {
      return setPopup(null);
    }
    setPopup(id);
  };

  return (
    <>
      <div
        onClick={() => toggleModal(id)}
        onKeyDown={() => toggleModal(id)}
        role="button"
        tabIndex="0"
        className="card"
        style={{
          backgroundImage: `url(${`/images/Team/${img})`}`,
        }}
      >
        <div className="card-border">
          <div className="card-info">
            <h3>{name}</h3>
            <p>{position}</p>
          </div>

          <div className="social-links">
            {!link1 ? (
              <></>
            ) : (
              <a href={link1} target="_blank" rel="noreferrer" title="LinkedIn">
                <AiFillLinkedin />
              </a>
            )}
            {!link2 ? (
              <></>
            ) : (
              <a href={link2} target="_blank" rel="noreferrer" title="Github">
                <AiFillGithub />
              </a>
            )}
            {!link3 ? (
              <></>
            ) : (
              <a
                href={link3}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <AiFillInstagram />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal Container */}
      {popup && (
        <div className="modal">
          <div
            onClick={() => toggleModal()}
            onKeyDown={() => toggleModal()}
            aria-label="Popup Modal"
            role="button"
            tabIndex="0"
            className="overlay"
          ></div>
          <div className="modal-content">
            <div className="modal-head">
              {logo && (
                <Image
                  className="modal-logo"
                  src={`images/teamlogo/${logo}`}
                  alt="Team Logo"
                  loading="lazy"
                />
              )}
              <span>
                <h3>{team}</h3>
                {slogan && <q>{slogan}</q>}
              </span>
              <div
                className="close-modal"
                onClick={() => toggleModal()}
                onKeyDown={() => toggleModal()}
                role="button"
                tabIndex="0"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="modal-body">
              <Image src={`/images/Team/${img}`} alt="" loading="lazy" />
              <div>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <hr />
                <p>{desc}</p>
                <div className="socials">
                  {!link1 ? (
                    <></>
                  ) : (
                    <a
                      href={link1}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <AiFillLinkedin />
                    </a>
                  )}
                  {!link2 ? (
                    <></>
                  ) : (
                    <a
                      href={link2}
                      target="_blank"
                      rel="noreferrer"
                      title="Github"
                    >
                      <AiFillGithub />
                    </a>
                  )}
                  {!link3 ? (
                    <></>
                  ) : (
                    <a
                      href={link3}
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
