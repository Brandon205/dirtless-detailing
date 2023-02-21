import styles from '../utils/Funnel.module.css';

export default function gallery(props) {
    return (
        <div>
            <div className={styles.photoGrid}>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/31265123-5fa7-4f81-af49-d224e86beb00/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eb8099ef-8be3-4be2-77bc-ec6b65a7fc00/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/807bb532-5e08-48ef-61d7-7b3392f2ae00/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1388f951-7a9b-49da-526b-39d8ccdbbe00/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdce3625-66ac-4ea8-68e5-9f2e9e94c500/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eafb50f4-8027-4c5b-8f25-8a3f4e68bd00/public')`}}></div>
                <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b0190db3-ba18-4b0a-3e51-e4034ac2db00/public')`}}></div>

                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2b4f72db-a0cc-4f91-ed15-66d8a1b4c400/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a33a454b-ac45-4972-91f7-3d80eda98900/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4da6f2e1-140d-4f39-abed-9624c82f2a00/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/05a03dc9-11c9-4ad8-a8a3-eba28b243e00/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9ad6bfa1-52e8-4349-db4c-646a0a51f000/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/public')`}}></div>
                <div className={styles.photoCard} style={{display: props.show ? 'block' : 'none', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dcfb9b5c-1867-4678-8ae3-2d88d1286300/public')`}}></div>
            </div>
        </div>
    )
}