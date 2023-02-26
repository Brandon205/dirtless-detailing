import { Carousel } from 'react-responsive-carousel';
import styles from '../utils/Funnel.module.css';
import styling from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Reviews() {
    return (
        <div className={styles.reviewsContainer}>
            <div className={styles.reviewCard}>
                {/* <Carousel className={styles.reviewCarousel} style={styling} infiniteLoop stopOnHover showThumbs={false} swipeable showArrows interval={7000} emulateTouch>
                    <div className={styles.reviewImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3ac6cf4-b415-476d-8286-5f169f4dca00/public')`}}></div>
                    <div className={styles.reviewImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7bc8d9b2-dd2a-4fb7-213a-dd02c3f33c00/public')`}}></div>
                    <div className={styles.reviewImg}>
                        <img src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7bc8d9b2-dd2a-4fb7-213a-dd02c3f33c00/public" />
                    </div>
                    <div className={styles.reviewImg}>
                        <img src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3ac6cf4-b415-476d-8286-5f169f4dca00/public" />
                    </div>
                </Carousel> */}
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3ac6cf4-b415-476d-8286-5f169f4dca00/public')`}}></div>
                <div className={styles.reviewTop}>
                    <strong className={styles.name}>Brandon B.</strong>
                    <strong className={styles.review}>★★★★★</strong>
                </div>
                <p className={styles.servicesP}><span className={styles.subtext}>Gold Package</span></p>
                <hr className={styles.cardHr} />
                <div className={styles.reviewBottom}>
                    <p>Brenden is a very experienced, organized, and detailed person who has done an amazing job detailing my car twice now! No matter what questions I have for him he responds right away and always has an answer. You can tell that he's done his research and uses only the best products for the job. He was even able to remove scratches from my trunk lid that I had after uninstalling an old rear wing! I would highly recommend Dirt-Less Detailing to anyone who needs a detail!</p>
                </div>
            </div>

            <div className={styles.reviewCard}>
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/89cde8ad-b8a8-4d15-5a65-786ad9772d00/public')`}}></div>
                <div className={styles.reviewTop}>
                    <strong className={styles.name}>Mark B.</strong>
                    <strong className={styles.review}>★★★★★</strong>
                </div>
                <p className={styles.servicesP}><span className={styles.subtext}>Platinum Package</span></p>
                <hr className={styles.cardHr} />
                <div className={styles.reviewBottom}>
                    <p>Amazing experience amazing Owner had no issues with the work and had amazing time communicating with him my truck turned out beautiful</p>
                </div>
            </div>

            <div className={styles.reviewCard}>
                <div className={styles.popularImg} style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a564c14-dde7-4018-e403-c646a78af000/public')`}}></div>
                <div className={styles.reviewTop}>
                    <strong className={styles.name}>Nathan M.</strong>
                    <strong className={styles.review}>★★★★★</strong>
                </div>
                <p className={styles.servicesP}><span className={styles.subtext}>Iridium Package</span></p>
                <hr className={styles.cardHr} />
                <div className={styles.reviewBottom}>
                    <p>I was just astounded by the quality of his performance as a detailer. My car has never been cleaner. From simple maintenance to even stage 1 buff; the quality has been on point every single time. He's a very good friend of mine and his dedication to detailing is proven to be remarkable.</p>
                </div>
            </div>
        </div>
    )
}