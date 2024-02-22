import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
    return (
        <div className={styles.container}>
                <form className={styles.form}>
                    <h1>Login</h1>
                    <input placeholder="username" name="username" type="text"/>
                    <input placeholder="password" name="password" type="password"/>
                    <button>Login</button>
                </form>
        </div>
    )
}

export default LoginPage;