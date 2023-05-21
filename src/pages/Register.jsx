import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const { register } = useContext (UserContext);

  return (
    <div>
      <h1>Registro</h1>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" 
        placeholder="Email" 
        />
        <input type="tel" 
        placeholder="Phone"
         />
        <input type="password"
         placeholder="Password"
          />

        <button type="submit">Resgistrame</button>
      </form>
    </div>
  );
};

export default Register;