import { DisplayProjects, Header, AddProject, ProjectProvider } from '../PageComponents/DashboardCom';

function DashbordPage() {
  return (
    <>
      <ProjectProvider>
        <Header />
         <AddProject />
        <DisplayProjects />
        
      </ProjectProvider>
    </>
  );
}

export default DashbordPage;
