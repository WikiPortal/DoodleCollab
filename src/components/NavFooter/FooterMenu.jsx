import React from "react";

const FooterMenu = () => {
  const navItems = ["Docs", "DoodleCollab", "Resources", "About", "Extra"];

  return (
    <section className="flex flex-col items-center p-0">
      <nav>
        <ul className=" flex flex-wrap justify-start m-0 p-0 list-none">
          {navItems.map((item, index) => (
            <li className="mr-0" key={index}>
              <p className="font-bold text-xl ml-[70px] mt-[60px] -mb-10">{item}</p>
              {index === 0 && (
                <div className={`m-[70px] topics-${index}`}>
                  <ul className="flex flex-col m-0 p-0 list-none">
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-1`}>Installation</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-2`}>Theme Setup</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-3`}>Grid</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-4`}>Atoms</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-5`}>Molecules</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-6`}>Functions</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 1 && (
                <div className={`m-[70px] topics-${index}`}>
                  <ul className="flex flex-col m-0 p-0 list-none">
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-1`}>Features</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-2`}>Design</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-3`}>Devlopment</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 2 && (
                <div className={`m-[70px] topics-${index}`}>
                  <ul className="flex flex-col m-0 p-0 list-none">
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-1`}>Sketch File</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-2`}>Github</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 3 && (
                <div className={`m-[70px] topics-${index}`}>
                  <ul className="flex flex-col m-0 p-0 list-none">
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-1`}>Showcase</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-2`}>Contribute</a>
                    </li>
                  </ul>
                </div>
              )}
              {index === 4 && (
                <div className={`m-[70px] topics-${index}`}>
                  <ul className="flex flex-col m-0 p-0 list-none">
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-1`}>Blog</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-2`}>Need Help?</a>
                    </li>
                    <li className="mb-2.5">
                      <a className="no-underline font-semibold text-sm" href={`#topic-${index}-3`}>Give Feedback</a>
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
