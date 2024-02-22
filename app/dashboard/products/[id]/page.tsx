import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar2.png" alt="" fill className={styles.userImage}/>
                </div>
                iPhone
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input placeholder='iPhone' type='text' name='title'/>
                    <label>Price</label>
                    <input placeholder='$50' type='number' name='price'/>
                    <label>Stock</label>
                    <input placeholder='230' type='number' name='stock'/>
                    <label>Color</label>
                    <input placeholder='red' type='text' name='color'/>
                    <label>Size</label>
                    <input placeholder='Small' name='size'/>
                    <label>Cat</label>
                    <select name="cat" id='cat'>
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name='desc' id='desc' rows={7} placeholder='Description'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;