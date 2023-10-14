import React from "react";

function Card(props) {
    const [isDeleted, setIsDeleted] =React.useState(false);
  
    const handleDelete = () => {
      setIsDeleted(true);
    };
  
    React.useEffect(() => {
      if (isDeleted) {
        // Remove the card element from the DOM
        const cardElement = document.getElementById('card-container');
        if (cardElement) {
          cardElement.remove();
        }
      }
    }, [isDeleted]);
  
  
  return (
    <div className="note" id="card-container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;