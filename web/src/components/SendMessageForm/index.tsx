import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../context/auth";
import styles from "./styles.module.scss";
import { useContext, useState, FormEvent } from "react";
import { api } from "../../services/api";
export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  async function handleSendMessage(e: FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      return;
    }
    await api.post("messages", { message });
    setMessage("");
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>
      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="What is your expectations to the event"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}
