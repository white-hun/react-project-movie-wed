import { useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 하지않고 -->
    if (toDo === "") {
      return;
    }
    // 우선 비어있는 currentArray 받아온 후
    // 새로운 toDos가
    // input을 통해 작성한 toDo와
    // 비어있는 array의 element가 더해진다
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // --> 값을 비운다
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default ToDo;

// form은 submit이라는 이벤트를 갖고 있어서 제출하면 form형식이 처리되고 새로고침된다
