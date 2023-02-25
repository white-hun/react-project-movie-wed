import { useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => event.preventDefault(); // 새로고침 하지않고 -->
  if (toDo === "") {
    return;
  }

  setToDo(""); // --> 값을 비운다
  return (
    <div>
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

export default Todo;

// form은 submit이라는 이벤트를 갖고 있어서 제출하면 form형식이 처리되고 새로고침된다
