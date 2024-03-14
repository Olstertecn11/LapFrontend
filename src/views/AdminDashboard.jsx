
import AdminSection from "../layouts/AdminSection";
import UserService from '../services/user/UserService';
import SubjectService from "../services/subject/SubjectService";
import NewUser from '../layouts/NewUser';
import NewSubject from '../layouts/NewSubject';

const AdminDashboard = () => {




  return (
    <div>
      <div className="container pt-4 mb-4">
        <AdminSection title='Gestion de Maestros' ServiceDelete={UserService.delete} ServiceGet={UserService.getAll} titleNew='Nuevo Usuario' ComponentNew={NewUser} />
        <AdminSection margin={'8vw'} title='Gestion de Asignaturas' ServiceDelete={SubjectService.delete} ServiceGet={SubjectService.getAll} titleNew='Nueva Asignatura' ComponentNew={NewSubject} />
      </div>

    </div>
  )
}


export default AdminDashboard;
