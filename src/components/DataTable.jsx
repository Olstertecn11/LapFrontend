
const DataTable = ({ data }) => {
  console.log(data);
  return (
    <div className="table-responsive ">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key}>{key.substring(key.indexOf("_") + 1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i} className="text-center">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default DataTable;
