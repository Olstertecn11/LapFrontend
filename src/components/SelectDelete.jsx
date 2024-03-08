const SelectDelete = (options) => {
  return (
    <Select placeholder='Select option'>
      {
        options.map((item, index) => (
          <option value={index} >{item.name}</option>
        ))
      }
    </Select>
  )

}

export default SelectDelete;
