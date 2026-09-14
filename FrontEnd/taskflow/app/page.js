import { workflow } from "../src/lib/site-content";

export default function Home() {
  return (
    <main className="siteShell">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="TaskFlow home"><span>TF</span>TaskFlow</a>
        <nav className="siteNav" aria-label="Main navigation">
          <a href="#why">Why TaskFlow</a>
          <a href="#method">How it works</a>
          <a href="#workspace">Workspace</a>
          <a className="navButton" href="http://localhost:5173/login">Open workspace <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">A calmer project workspace</p>
          <h1>Make progress <em>visible.</em></h1>
          <p className="heroText">TaskFlow brings projects, priorities, and people into one grounded place to work. Less chasing. More meaningful next steps.</p>
          <div className="heroActions"><a className="primaryButton" href="http://localhost:5173/signup">Start a workspace <span aria-hidden="true">→</span></a><a className="textLink" href="#method">See the rhythm <span aria-hidden="true">↓</span></a></div>
          <p className="heroNote"><span className="statusDot" /> Built for teams who want clarity without the ceremony.</p>
        </div>
        <div className="heroVisual" aria-label="TaskFlow project overview preview">
          <div className="visualTop"><span className="miniMark">TF</span><span>Workspace / Overview</span><span className="visualMenu">•••</span></div>
          <div className="visualHeading"><div><p className="cardLabel">Your workspace</p><h2>Keep the important<br />work moving.</h2></div><span className="visualBadge">TF</span></div>
          <div className="previewCard"><div className="previewCardHead"><span><b>Project pulse</b><small>Product launch</small></span><strong>68% complete</strong></div><div className="progressTrack"><span /></div><div className="previewStats"><span><b>24</b><small>Total tasks</small></span><span><b>8</b><small>In progress</small></span><span><b>16</b><small>Complete</small></span></div></div>
          <div className="previewList"><p className="cardLabel">Next steps</p><div><span className="check complete">✓</span><span>Review launch brief</span><small>Today</small></div><div><span className="check">○</span><span>Share the first update</span><small>Tomorrow</small></div></div>
        </div>
      </section>

      <section className="methodSection" id="method"><div className="sectionIntro"><p className="eyebrow">The TaskFlow rhythm</p><h2>Good work has a<br /><em>rhythm.</em></h2><p>Enough structure to keep the work honest. Enough space to let people do their best thinking.</p></div><div className="workflowGrid">{workflow.map((step) => <article className="workflowItem" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="whySection" id="why">
        <div className="whyIntro"><p className="eyebrow">Why use TaskFlow?</p><h2>Turn busy work<br />into <em>clear work.</em></h2></div>
        <div className="whyCopy"><p>TaskFlow gives individuals and teams one reliable place to manage projects and tasks. Instead of keeping priorities in scattered notes, messages, and memory, you can see what matters and decide what comes next.</p><p>Use it to break a larger project into manageable tasks, keep progress visible, and make it easier for everyone to understand the current state of the work. The result is less time spent searching for updates and more time spent moving projects forward.</p><div className="whyList"><div><strong>One clear home</strong><span>Keep project context and tasks together.</span></div><div><strong>Practical momentum</strong><span>Focus attention on the next useful action.</span></div><div><strong>Visible progress</strong><span>Know what is complete, active, or waiting.</span></div></div></div>
      </section>
      <section className="workspaceSection" id="workspace"><div><p className="eyebrow">Your next clear step</p><h2>Bring the work<br /><em>into focus.</em></h2></div><a className="primaryButton lightButton" href="http://localhost:5173/signup">Create your workspace <span aria-hidden="true">→</span></a></section>
      <footer className="siteFooter"><a className="brand" href="#top"><span>TF</span>TaskFlow</a><p>Plan with intent. Deliver with confidence.</p><span>© 2026 TaskFlow</span></footer>
    </main>
  );

}
