import styles from '../utils/Funnel.module.css';

export default function gallery() {
    return (
        <div className={styles.photoGrid}>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a8430f3-90c0-4f56-1fff-88fcd3b29600/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/318b00ed-4a02-4f43-7fdb-1d407d7b0100/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3c484dfb-5247-428e-1735-1b31f3efd600/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a4a318e1-fd6c-4f89-7539-55b66a2d6200/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3d11e10-2cbe-4454-9a36-fbc43dea7800/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6feedf70-363e-4a11-8e18-185c9d984600/public')`}}></div>
            <div className={styles.photoCard} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdaa6115-35ea-45f4-e7f2-acec67e40a00/public')`}}></div>
        </div>
    )
}