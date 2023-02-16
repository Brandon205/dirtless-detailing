import styles from '../utils/Funnel.module.css';

export default function gallery() {
    return (
        <div className={styles.photoGrid}>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/31265123-5fa7-4f81-af49-d224e86beb00/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eb8099ef-8be3-4be2-77bc-ec6b65a7fc00/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/816ccafc-084b-4d7d-8735-8da8117a4700/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/920c592d-31ee-41b9-2d3b-0b95d6ca7500/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1388f951-7a9b-49da-526b-39d8ccdbbe00/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdce3625-66ac-4ea8-68e5-9f2e9e94c500/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7c443964-5425-4ec2-0f41-41c400899a00/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/public')`}}></div>
        </div>
    )
}