
import AdminSection from "../layouts/AdminSection";
import UserService from '../services/user/UserService';
import NewUser from '../layouts/NewUser';

const AdminDashboard = () => {




  return (
    <div>
      <div className="container pt-4">
        <AdminSection title='Gestion de Maestros' ServiceDelete={UserService.delete} ServiceGet={UserService.getAll} titleNew='Nuevo Usuario' ComponentNew={NewUser} />
      </div>
      <div className="container pt-4 mt-4 mb-4">
        <AdminSection title='Gestion de Cursos' ServiceDelete={UserService.delete} ServiceGet={UserService.getAll} titleNew='Nuevo Usuario' ComponentNew={NewUser} />
      </div>
    </div>
  )
}


export default AdminDashboard;
