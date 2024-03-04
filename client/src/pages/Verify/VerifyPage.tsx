import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import loader from "../../assets/animation/loader.json";
import styles from "./VerifyPage.module.css";
import {
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { useMeMutation, useVerifyMutation } from "../../store/services/authApi";
import { useAuth } from "../../hooks/useAuth";

type Props = {};

const VerifyPage = (props: Props) => {
  const { loginAuth } = useAuth();

  let location = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();

  const [verify] = useVerifyMutation();

  // console.log(location, matches);

  const verifyUser = async () => {
    try {
      const token = location?.search?.replace("?token=", "");
      console.log(token);
      if (!token) {
        throw new Error("Token not provided");
      }

      await verify({ token: token })
        .unwrap()
        .then((res) => {
          if (res.success) {
            loginAuth(res);
            navigate("/");
          }
        });
    } catch (err) {
      console.log(err);
      // navigate("/");
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  console.log("Verify");

  return (
    <div className={styles.modal_container}>
      <div className={styles.bgDark}></div>
      <div className={styles.modalItem}>
        <Lottie
          loop
          animationData={loader}
          play
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
};

export default VerifyPage;
