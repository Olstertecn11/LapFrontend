import {
  Switch, Alert,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
const AsistenciaClaseItem = ({ item, index }) => {

  const [present, setPresent] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('Comentario');

  const changeAsistence = () => {
    setPresent(!present);
  }

  return (
    <tr className="asistence-table-row">
      <th scope="row" className="text-center" style={{ width: '10%' }}>{index}</th>
      <td className="text-center" style={{ width: '30%' }}>{item.stu_name}</td>
      <td className="text-center" style={{ width: '50%' }}>
        {showComment && showComment ? (
          <div>
            <i className="fas fa-times-circle mb-2 close-icon" onClick={() => setShowComment(!showComment)} style={{ float: 'right' }}></i>
            <Textarea placeholder="Descripcion..." value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>

        ) : <p>{comment.length <= comment ? comment : comment.substring(0, 18)}... <i onClick={() => setShowComment(!showComment)} className="fas fa-edit edit-icon"></i></p>
        }
      </td>
      <td className="text-center" style={{ width: '10%' }}>
        <Switch size='lg' colorScheme='teal' isChecked={present} onChange={changeAsistence} display='block' />
      </td>
    </tr>
  );
}

export default AsistenciaClaseItem;
