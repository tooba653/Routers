interface ChildProps {
    name: string;
    age: number;
    Rollno:number;
  }
  
  const Child: React.FC<ChildProps> = ({ name, age,Rollno }) => {
    return (
      <div>
        <h2>ID CARD</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Rollno:{Rollno}</p>
      </div>
    );
  };
  
  export default Child;
  