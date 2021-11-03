import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "박희문",
    birthday: "960630",
    gender: "남자",
    job: "취준생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "서주경",
    birthday: "960715",
    gender: "여자",
    job: "웹디자이너",
  },
];

function App() {
  return (
    <>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </>
  );
}

export default App;
