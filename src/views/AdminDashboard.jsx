
import AdminSection from "../layouts/AdminSection";
import UserService from '../services/user/UserService';
import SubjectService from "../services/subject/SubjectService";
import NewUser from '../layouts/NewUser';
import NewSubject from '../layouts/NewSubject';
import NewDegree from '../layouts/NewDegree';
import DegreeService from "../services/degree/DegreeService";
import './styles/adminDash.css';
import { useState } from "react";

const AdminDashboard = () => {
  const [section, setSection] = useState(0);

  const handleChange = (e) => {
    setSection(parseInt(e.target.value));
  };

  return (
    <div>
      <div className="container pt-4 mb-4 pb-4">
        <div className="col-md-3 ml-0 pl-0">
          <select className="form-select form-control" onChange={handleChange} value={section}>
            <option value="0">Gestión de Usuarios</option>
            <option value="1">Gestión de Materias</option>
            <option value="2">Gestión de Grados</option>
          </select>
        </div>
        {section === 0 && (
          <AdminSection
            title='Gestión de Maestros'
            ServiceDelete={UserService.delete}
            ServiceGet={UserService.getAll}
            titleNew='Nuevo Usuario'
            ComponentNew={NewUser}
          />
        )}
        {section === 1 && (
          <AdminSection
            title='Gestión de Asignaturas'
            ServiceDelete={SubjectService.delete}
            ServiceGet={SubjectService.getAll}
            titleNew='Nueva Asignatura'
            ComponentNew={NewSubject}
          />
        )}
        {section === 2 && (
          <AdminSection
            title='Gestión de Grados'
            ServiceDelete={DegreeService.delete}
            ServiceGet={DegreeService.getAll}
            titleNew='Nuevo Grado'
            ComponentNew={NewDegree}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

