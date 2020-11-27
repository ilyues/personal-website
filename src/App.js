import "./App.css";

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
            <b>Hello!</b> I’m a first-year studying <b>computer science</b> at
            UC Berkeley, where I’m also a software developer at Codebase, and a
            graphic designer at Innovative Design. I’m interested in{" "}
            <b>engendering creativity</b> and uplifting communities through
            tech.
          </p>
          <p>
            I freelance as an artist and designer making illustrations and
            paintings with both digital and traditional mediums. I have
            completed design projects in graphic design, branding, architecture,
            and character design.
          </p>

          <p>
            I’m committed to clean design. I’m well versed in idea initiation,
            user research, concept development, prototyping, and visual
            communication — it’s what I love most.{" "}
          </p>
          <p>
            I also write, with poems published annually by Clerestory Press in
            Redraft. I volunteer my time to write (and illustrate) for Tearaway.
            A novel is in the works.
          </p>

          <p>
            If there’s an opportunity to make the world a brighter place, let me
            know.
          </p>
        </div>

        <div className="links">
          come find me: <br />
          inbox / linkedin / github / twitter / portfolio / resume
        </div>
      </div>
      <div className="large-circle">{""}</div>
      <div className="circle"></div>
      <div className="circle-glow">
        <span>huh</span>
      </div>
      <svg className="path1" viewBox="-80 -25 200 200">
        <path
          fill="none"
          stroke="#8F90FF"
          stroke-width="0.1"
          d="M41.8,-67.1C50,-59.8,49.6,-41.1,52.5,-26.4C55.4,-11.7,61.6,-1,62.3,10.4C62.9,21.8,57.9,33.8,49.9,43.5C41.9,53.2,30.9,60.6,19,63.8C7,67,-6,66,-13,57.8C-20,49.6,-20.9,34.2,-25.6,24.5C-30.4,14.9,-39.1,10.9,-47.4,2.3C-55.7,-6.3,-63.6,-19.5,-61.8,-30.2C-60,-41,-48.5,-49.3,-36.6,-54.9C-24.7,-60.6,-12.3,-63.6,2.2,-67C16.8,-70.5,33.6,-74.5,41.8,-67.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className="path2" viewBox="50 -10 200 200">
        <path
          fill="none"
          stroke="#8F90FF"
          stroke-width="0.1"
          d="M31,-55.6C37.7,-49.9,38.9,-36.5,36.5,-26C34.1,-15.4,28.2,-7.7,28.9,0.5C29.7,8.6,37.3,17.3,39.7,27.8C42.1,38.4,39.4,50.9,31.9,53.8C24.4,56.6,12.2,49.8,2.4,45.6C-7.3,41.3,-14.7,39.7,-25.2,38.6C-35.8,37.6,-49.6,37.1,-50.8,30.7C-52,24.4,-40.7,12.2,-31.7,5.2C-22.6,-1.8,-15.9,-3.6,-12.6,-6.3C-9.3,-9,-9.4,-12.7,-7.8,-21.3C-6.3,-30,-3.1,-43.7,4.5,-51.5C12.2,-59.3,24.3,-61.3,31,-55.6Z"
          transform="translate(100 100) rotate(-20  10 0)"
        />
      </svg>
    </div>
  );
}

export default App;
