import "./App.css";
import flowers from "./Bee.jpg";

function App() {
  window.onload = function () {
    let btn = document.querySelector(".circle-glow", ".circle");
    btn.onmousemove = function (e) {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    };
  };

  return (
    <div className="App">
      <div className="cont">
        <div className="name">Isabel 玥 Li</div>
        <div className="tagline">
          in four words: designer, developer, artist, writer.
        </div>
        <div className="descrip">
          <p>
            <b>Hello!</b> I’m a first-year studying computer science at{" "}
            <a
              href="https://www.berkeley.edu/"
              target="_blank"
              rel="noreferrer"
            >
              UC Berkeley
            </a>
            , where I’m also a software developer at{" "}
            <a
              href="https://codebase.berkeley.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Codebase
            </a>
            , and a graphic designer at{" "}
            <a
              href="https://innovativedesign.club/club"
              target="_blank"
              rel="noreferrer"
            >
              Innovative Design
            </a>
            . I’m interested in <b>engendering creativity</b> and{" "}
            <b>uplifting communities</b> through tech.
          </p>
          <p>
            I{" "}
            <a href="https://isabel.li/" target="_blank" rel="noreferrer">
              freelance
            </a>{" "}
            as an artist and designer making illustrations and paintings with
            both digital and traditional mediums. I have completed design
            projects in graphic design, branding, architecture, and character
            design.
          </p>

          <p>
            I also write, with poems published annually by Clerestory Press in{" "}
            <a
              href="http://clerestorypress.co.nz/"
              target="_blank"
              rel="noreferrer"
            >
              Redraft
            </a>
            . I volunteer my time to write (and illustrate) for{" "}
            <a href="https://tearaway.co.nz/" target="_blank" rel="noreferrer">
              Tearaway NZ
            </a>
            . A novel is in the works.
          </p>

          <p>
            If there’s an opportunity to make the world a brighter place,{" "}
            <b>let me know.</b>
          </p>
        </div>

        <div className="links">
          come find me:
          <div className="links-container">
            <div className="link-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=ilyues@berkeley.edu"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/isabel-li/"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>{" "}
              <a
                href="https://github.com/ilyues"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>{" "}
              <a
                href="https://twitter.com/ILYUES"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>{" "}
            </div>
            <div className="text-links">
              <a href="https://isabel.li/" rel="noreferrer" target="_blank">
                creative portfolio
              </a>{" "}
              /{" "}
              <a
                href="https://www.dropbox.com/s/xeqxu0wj6s9txhe/ISABEL%20LI%20RESUME%20%3A%20FA20.pdf?dl=0"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="photograph">
        <div className="sticky"></div>
        <div className="flowerbox">
          <img
            className="flowers"
            src={flowers}
            alt="me, looking at five-dollar tulips"
          />
        </div>
      </div>

      <div className="large-circle">{""}</div>

      <div className="circle"></div>
      <div className="circle-glow">{""}</div>

      <svg className="path1" viewBox="-80 -25 200 200">
        <path
          fill="none"
          stroke="#C2CD0A"
          d="M41.8,-67.1C50,-59.8,49.6,-41.1,52.5,-26.4C55.4,-11.7,61.6,-1,62.3,10.4C62.9,21.8,57.9,33.8,49.9,43.5C41.9,53.2,30.9,60.6,19,63.8C7,67,-6,66,-13,57.8C-20,49.6,-20.9,34.2,-25.6,24.5C-30.4,14.9,-39.1,10.9,-47.4,2.3C-55.7,-6.3,-63.6,-19.5,-61.8,-30.2C-60,-41,-48.5,-49.3,-36.6,-54.9C-24.7,-60.6,-12.3,-63.6,2.2,-67C16.8,-70.5,33.6,-74.5,41.8,-67.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className="path2" viewBox="50 -10 200 200">
        <path
          fill="none"
          stroke="#C2CD0A"
          d="M31,-55.6C37.7,-49.9,38.9,-36.5,36.5,-26C34.1,-15.4,28.2,-7.7,28.9,0.5C29.7,8.6,37.3,17.3,39.7,27.8C42.1,38.4,39.4,50.9,31.9,53.8C24.4,56.6,12.2,49.8,2.4,45.6C-7.3,41.3,-14.7,39.7,-25.2,38.6C-35.8,37.6,-49.6,37.1,-50.8,30.7C-52,24.4,-40.7,12.2,-31.7,5.2C-22.6,-1.8,-15.9,-3.6,-12.6,-6.3C-9.3,-9,-9.4,-12.7,-7.8,-21.3C-6.3,-30,-3.1,-43.7,4.5,-51.5C12.2,-59.3,24.3,-61.3,31,-55.6Z"
          transform="translate(100 100) rotate(-20  10 0)"
        />
      </svg>
    </div>
  );
}

export default App;
