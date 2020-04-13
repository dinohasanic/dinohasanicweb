import React, { useRef, useEffect } from "react"
import Divider from "../../components/divider"

const JourneySection = () => {
  const sectionEl = useRef(null);
  const topPanelEl = useRef(null);
  const handleEl = useRef(null);
  const contentEl = useRef(null);
  const bottomPanelEl = useRef(null);

  useEffect(() => {
    if (!!sectionEl.current) {
      var parent = sectionEl.current,
        topPanel = topPanelEl.current,
        bottomPanel = bottomPanelEl.current,
        handle = handleEl.current,
        delta = 0;

      // We are adding 100px here because we did -100px margin on parent to fit under projects
      parent.style.height = 100 + contentEl.current.offsetHeight + "px";
      bottomPanel.style.height = 100 + contentEl.current.offsetHeight + "px";
      topPanel.style.height = 100 + contentEl.current.offsetHeight + "px";
    }
    function handleMouseMoveEvent(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + delta + 'px';
    }

    parent.addEventListener('mousemove', handleMouseMoveEvent)
    return () => {
      parent.removeEventListener('mousemove', handleMouseMoveEvent)
    }
  }, [sectionEl])
  return (
    <section className="journey-section" ref={sectionEl}>
      <div className="journey-container bottom" ref={bottomPanelEl}>
        <div className="content-container">
          <div className="content" ref={contentEl}>
            <h2 className="secondary-header text-white" style={{ marginTop: "2rem", paddingBottom: "2rem" }}>A little bit about<br></br>my programming</h2>
            <Divider />
            <p className="main-text text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            <Divider />
            <p className="main-text text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.</p>
            <Divider />
            <p className="main-text text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <Divider />
            <p className="main-text text-white">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years. Various versions have evolved over the years. Various versions have evolved over the years. Various versions have evolved over the years.</p>
            <Divider />
            <p className="main-text text-white">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
            <Divider />
            <p className="main-text text-white"><strong>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model.</strong></p>
          </div>
        </div>
      </div>

      <div className="journey-container top" ref={topPanelEl}>
        <div className="content-container">
          <div className="content">
            <h2 className="secondary-header" style={{ marginTop: "2rem", paddingBottom: "2rem" }}>A little bit about<br></br>my journey</h2>
            <Divider />
            <p className="main-text">I got my first computer when I was seven, and like any good father (I suppose), mine said, “Let's break it and then learn how to fix it!”</p>
            <Divider />
            <p className="main-text">Come 2012 and many computers later, I graduated with a BS in Marketing Management from the Sarajevo School of Business and Economics.</p>
            <Divider />
            <p className="main-text">2014. My first real job was working for a local Bay Area bank. I was in marketing, but quickly found myself designing, building, and pushing out software tools that dramatically improved our efficiencies, productivity, and bottom line. </p>
            <Divider />
            <p className="main-text">This experience led me to build my own software company. Our goal was to connect car dealerships and lenders into a unified, real-time lending marketplace platform with a built-in decision engine. We had a lot of passion, but quickly learned what “disruption” really means when the CEO of a major bank saw what our product could do and told me, “I hope you fail.” And we did.</p>
            <Divider />
            <p className="main-text">But I didn't give up. I still wanted to build software and tackle the automotive industry. I opened my own car dealership in 2017 and built ALL of our core business applications from scratch, which enabled us to do $10M in sales in 2019.</p>
            <Divider />
            <p className="main-text"><strong>Through all this, I’ve learned that, while my passion lies in tackling problems with an entrepreneurial spirit and delivering truly innovative and impactful solutions, I enjoy doing these things by building great software.</strong></p>
          </div>
        </div>
      </div>

      <div className="handle" ref={handleEl}></div>
    </section>
  )
}

export default JourneySection
