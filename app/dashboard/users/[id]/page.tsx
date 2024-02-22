import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar2.png" alt="" fill className={styles.userImage}/>
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input placeholder='John Doe' type='text' name='username'/>
                    <label>E-mail</label>
                    <input placeholder='johndoe@gmail.com' type='email' name='email'/>
                    <label>Password</label>
                    <input placeholder='********' type='password' name='password'/>
                    <label>Phone</label>
                    <input placeholder='+5535991934417' type='text' name='phone'/>
                    <label>Address</label>
                    <textarea placeholder='New York, Brooklyn Avenue 123' name='address'/>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id='isAdmin'>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id='isActive'>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;