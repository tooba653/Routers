import Child from './child';

const Parent = () => {
  const studentInfo = { name: 'Tooba', age: 19 ,Rollno:445321};

  return (
    <div>
      <h1>Metropolitan University</h1>
      <Child name={studentInfo.name} age={studentInfo.age} Rollno={studentInfo.Rollno}/>
    </div>
  );
};

export default Parent;
