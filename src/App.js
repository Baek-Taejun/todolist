function Son(props) {
  //상속받기 위해서 자식인 Son이 props를 넣음.
  console.log(props);
  return (
    <div>
      나는 {props.grandFatherName}의손자{props.motherName}의 딸이에요!
    </div>
  );
}

function Mother(props) {
  //상속을 받으려는 자식은 props를 넣어줘야 한다. 그럼저기 16번째줄에 있는게 상속됨.
  console.log(props);
  const name = "강수야";
  return <Son motherName={name} grandFatherName={props.grandFatherName} />; //Son한테는 이걸 상속해준단 뜻.
}

function GrandFather() {
  const name = "강병기";
  return <Mother grandFatherName={name} />;
}

export default GrandFather; //여기는 최상위 컴포넌트와 명이 같아야 한다.
