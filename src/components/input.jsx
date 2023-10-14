import React from "react"
import Card from "./Card"

function Input() {
    const [items, setItems] = React.useState([]);
    const [item, setItem] = React.useState({
  name: "",
  email: "",
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setItem({
    ...item,
    [name]: value,
  });
};

const handleSubmit = () => {
  setItems([...items, item]);
};

  return (
  <div>
  <div className="nots">
    <input type="text" name="name" value={item.name} placeholder="Title" onChange={handleChange} />
    <textarea name="email" value={item.email} placeholder="Your Text" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {
            items.map((item) => { 
                return (
                    <Card title={item.name} content={item.email} />
                )
            })
        }
      </div>
  </div>

);
}
export default Input;