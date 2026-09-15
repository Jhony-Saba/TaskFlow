import { teamFeatures, workflow } from "../src/lib/site-content";

export default function Home() {
  return (
    <main className="siteShell">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="TaskFlow home"><span>TF</span>TaskFlow</a>
        <nav className="siteNav" aria-label="Main navigation">
          <a href="#why">Why TaskFlow</a>
          <a href="#method">How it works</a>
          <a href="#team">Next: teams</a>
          <a href="#workspace">Workspace</a>
          <a className="navButton" href="http://localhost:5173/login">Open workspace <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">A calmer individual workspace</p>
          <h1>Make progress <em>visible.</em></h1>
          <p className="heroText">TaskFlow is available today for individuals who want one calm place to turn a project into clear tasks, visible status, deadlines, and progress they can understand.</p>
          <div className="heroActions"><a className="primaryButton" href="http://localhost:5173/signup">Start a workspace <span aria-hidden="true">→</span></a><a className="textLink" href="#team">See what is next <span aria-hidden="true">↓</span></a></div>
          <p className="heroNote"><span className="statusDot" /> Individual project management today. Team workspaces are next.</p>
        </div>
        <div className="heroVisual" aria-label="TaskFlow project overview preview">
          <div className="visualTop"><span className="miniMark">TF</span><span>Workspace / Overview</span><span className="visualMenu">•••</span></div>
          <div className="visualHeading"><div><p className="cardLabel">Your workspace</p><h2>Keep the important<br />work moving.</h2></div><span className="visualBadge">TF</span></div>
          <div className="previewCard"><div className="previewCardHead"><span><b>Project pulse</b><small>Product launch</small></span><strong>68% complete</strong></div><div className="progressTrack"><span /></div><div className="previewStats"><span><b>24</b><small>Total tasks</small></span><span><b>8</b><small>In progress</small></span><span><b>16</b><small>Complete</small></span></div></div>
          <div className="previewList"><p className="cardLabel">Your task list</p><div><span className="check complete">✓</span><span>Review launch brief</span><small>Done</small></div><div><span className="check">○</span><span>Prepare customer demo</span><small>Sep 18</small></div><div><span className="check active">◐</span><span>Share first update</span><small>In progress</small></div></div>
        </div>
      </section>

      <section className="methodSection" id="method"><div className="sectionIntro"><p className="eyebrow">The TaskFlow rhythm</p><h2>Good work has a<br /><em>rhythm.</em></h2><p>Enough structure to keep the work honest. Enough space to let people do their best thinking.</p></div><div className="workflowGrid">{workflow.map((step) => <article className="workflowItem" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="teamSection" id="team">
        <div className="teamIntro"><p className="eyebrow">The next step for TaskFlow</p><h2>From one person<br /><em>to one team.</em></h2><p>TaskFlow is available for individual project work now. Our next step is a shared team workspace where different people can own different tasks in the same project.</p><div className="teamFeatureList">{teamFeatures.map((feature) => <div key={feature.label}><strong>{feature.label}</strong><span>{feature.text}</span></div>)}</div></div>
        <div className="teamBoard" aria-label="Preview of the planned team project task board">
          <div className="teamBoardTop"><div><p className="cardLabel">Planned team workspace</p><h3>Website launch</h3></div><span className="teamMemberStack"><i>AM</i><i>JR</i><i>SK</i></span></div>
          <div className="boardColumns"><div><p className="columnLabel">To do <span>2</span></p><article><b>Write onboarding flow</b><small>Alex · Sep 18</small></article><article><b>QA mobile layout</b><small>Sam · Sep 20</small></article></div><div><p className="columnLabel">In progress <span>1</span></p><article className="activeTask"><b>Build task overview</b><small>Jordan · Sep 16</small></article></div><div><p className="columnLabel">Done <span>2</span></p><article className="doneTask"><b>Define project scope</b><small>Alex · Complete</small></article><article className="doneTask"><b>Confirm launch date</b><small>Sam · Complete</small></article></div></div>
          <div className="boardFooter"><span><b>Project health</b><small>5 tasks · 68% complete</small></span><div className="miniProgress"><i /></div><strong>On track</strong></div>
        </div>
      </section>
      <section className="whySection" id="why">
        <div className="whyIntro"><p className="eyebrow">Why use TaskFlow?</p><h2>Turn busy work<br />into <em>clear work.</em></h2></div>
        <div className="whyCopy"><p>Today, TaskFlow gives individuals one reliable place to manage projects and tasks. Instead of keeping priorities in scattered notes, messages, and memory, you can see what matters and decide what comes next.</p><p>The next version will extend that same clarity to teams: shared projects, task ownership, deadlines, status, and project statistics in one workspace. The goal is simple: let a group move together without adding unnecessary ceremony.</p><div className="whyList"><div><strong>Available today</strong><span>Keep your project context and task list together.</span></div><div><strong>Team-ready direction</strong><span>Plan work for different people and responsibilities.</span></div><div><strong>Visible progress</strong><span>Build toward shared status, deadlines, and project health.</span></div></div></div>
      </section>
      <section className="workspaceSection" id="workspace"><div><p className="eyebrow">Available now</p><h2>Bring your work<br /><em>into focus.</em></h2><p className="workspaceText">Start with individual project management today. Shared team workspaces are the next step for TaskFlow.</p></div><a className="primaryButton lightButton" href="http://localhost:5173/signup">Create your workspace <span aria-hidden="true">→</span></a></section>
      <footer className="siteFooter"><a className="brand" href="#top"><span>TF</span>TaskFlow</a><p>Plan with intent. Deliver with confidence.</p><span>© 2026 TaskFlow</span></footer>
    </main>
  );

}
