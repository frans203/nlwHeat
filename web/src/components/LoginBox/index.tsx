import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { api } from "../../services/api";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Enter and share your message</strong>
      <a href={signInUrl} className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" /> Sign In with Github
      </a>
    </div>
  );
}
