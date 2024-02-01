import React from "react";
import { Link } from "react-router-dom";
import "./footermenu.css";

const FooterMenu = () => {
  const navItems = ["Docs", "DoodleCollab", "Resources", "About", "Extra"];

  return (
    <section className="footermenu-section">
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
              {index === 0 && (
                <div className={`topics topics-${index}`}>
                  <ul>
                    <li>
                      <a href={`#topic-${index}-1`}>Installation</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-2`}>Theme Setup</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-3`}>Grid</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-4`}>Atoms</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-5`}>Molecules</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-6`}>Functions</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 1 && (
                <div className={`topics topics-${index}`}>
                  <ul>
                    <li>
                      <a href={`#topic-${index}-1`}>Features</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-2`}>Design</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-3`}>Devlopment</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 2 && (
                <div className={`topics topics-${index}`}>
                  <ul>
                    <li>
                      <a href={`#topic-${index}-1`}>Sketch File</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-2`}>Github</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 3 && (
                <div className={`topics topics-${index}`}>
                  <ul>
                    <li>
                      <a href={`#topic-${index}-1`}>Showcase</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-2`}>Contribute</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 4 && (
                <div className={`topics topics-${index}`}>
                  <ul>
                    <li>
                      <a href={`#topic-${index}-1`}>Blog</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-2`}>Need Help?</a>
                    </li>
                    <li>
                      <a href={`#topic-${index}-3`}>Give Feedback</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default FooterMenu;
