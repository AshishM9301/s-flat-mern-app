import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../store/services/authApi";

type Props = {};

const SignUp = (props: Props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loginAuth } = useAuth();

  // console.log(user);

  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      for (const key in user) {
        if (!user[key]) {
          throw new Error("Please fill the form");
        }
      }

      if (user.password !== user.confirmPassword) {
        throw new Error("Password not matches");
      }

      let body = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };
      await signup({ body: body })
        .unwrap()
        .then((res) => {
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
            title="First name"
            placeholder="Your First Name"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <Input
            required
            title="Last name"
            placeholder="Your Last Name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <Input
            required
            title="Email"
            placeholder="Your Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            required
            title="Password"
            placeholder="Your Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Input
            required
            title="Confirm Password"
            placeholder="Your Confirm Password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <Button
            title="Create Account"
            color="#0156FF"
            textColor="#fff"
            onCLick={() => handleSignUp()}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.card_title}>
            <h4>Alreay a Customer?</h4>
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
            title="Sign in"
            color="#0156FF"
            textColor="#fff"
            onCLick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
