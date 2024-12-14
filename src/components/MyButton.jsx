import { useState } from "react";

const MyButton = () => {

const [getValue , setValue] = useState(0)

const nambahData = () => {
if (getValue < 20 ) {
  setValue(getValue + 1)
} else {
  return alert("cukup bos")
}
}

  return (
    <div>
      <div>{getValue}</div>
      <button onClick={() => nambahData()}>Click me bro!</button>
    </div>
  )
};

export default MyButton;