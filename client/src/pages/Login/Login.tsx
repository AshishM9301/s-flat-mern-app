import React, { useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { useLoginMutation } from "../../store/services/authApi";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate, useNavigation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type Props = {};

const Login = (props: Props) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { loginAuth } = useAuth();

  // console.log(user);

  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      await login({ body: user })
        .unwrap()
        .then((res) => {
          // console.log(res);
          if (res.success) {
            loginAuth(res);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.page_title}>
        <h1>Customer Login</h1>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <div className={styles.card_title}>
            <h4>Registered Customers</h4>
          </div>
          <p className={styles.desc}>
            If you have an account, sign in with your email address.
          </p>
          <Input
            required
            title="Email"
            placeholder="Your Name"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            required
            title="Password"
            placeholder="Your Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            title="Sign in"
            color="#0156FF"
            textColor="#fff"
            onCLick={() => handleLogin()}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.card_title}>
            <h4>New Customer?</h4>
          </div>
          <p className={styles.desc}>Creating an account has many benefits:</p>
          <div>
            <ul>
              <li>Check out faster </li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
          </div>
          <Button
            title="Create An Account"
            color="#0156FF"
            textColor="#fff"
            onCLick={() => navigate("/signup")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
