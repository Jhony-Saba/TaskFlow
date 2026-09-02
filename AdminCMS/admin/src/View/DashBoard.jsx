import { DisplayProjects, Header, AddProject, ProjectProvider } from '../PageComponents/DashboardCom';

function DashbordPage() {
  return (
    <>
      <ProjectProvider>
        <Header />
        <DisplayProjects />
        <AddProject />
      </ProjectProvider>
    </>
  );
}

export default DashbordPage;
