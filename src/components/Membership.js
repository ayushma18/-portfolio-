import React from "react";
import styles from "./Education.module.css";

const ieeeLogoUrl =
    "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/472479642_122100045176713335_6533712920563553846_n.png?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFw_xCYdiXBHhx9yRMC4LSPA9HaxUR_sgQD0drFRH-yBI56xuVti0beWJZNnfG9giPnf6tsAlJgwIC11I5Ctvv6&_nc_ohc=sqB7OfWOQuAQ7kNvwFkRb6_&_nc_oc=Adl6G7Yi1gzHCyhRbjOciJPZs2JPD20PC7jieNAV55RT5ctkzqq49ZA4aI54moC_dAt9hDjD-EDI_Aple1WKP381&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=BnjgF90ZyU9A8cHVAoLr3w&oh=00_AfkPdx6qLs2ItAViYeOqOvlsqGwk7eQOFMnspYO6KUFfqQ&oe=69358186";

const locusLogoUrl =
    "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/506019081_1119960030176934_6399126995733720506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFNIY9ny9IoplHZqFWNxMRoEYDq7VWa2FERgOrtVZrYUbXIOtDDXcgrc5uHMRBbUcnzFzHRRaFIcwWkDWk6JDBD&_nc_ohc=K4LnqxzNovwQ7kNvwFB6761&_nc_oc=AdnW8iRxwDrmDrLpoN3hjivcp6fde4Avva5qUJk1VcpT7JYDKhTfR8Pil1nwCglgk9kc_PITYt3iwjCrT9KwwhP2&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=VlO4ZQZzo1FC-sxbpNb9-Q&oh=00_AfmyS37nOm3gKVXVvZ-1kTP3YVOV1Y01e3YXdjgN8LQq5A&oe=69356ACB";

const Membership = () => (
    <section id="membership" className={styles.education}>
        <div className={styles.container}>
            <h2 className={styles.title}>Membership</h2>
            <div className={styles.educationCard}>
                <div className={styles.logoContainer}>
                    <a
                        href="https://www.computer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.logoLink}
                    >
                        <img src={ieeeLogoUrl} alt="IEEE Computer Society Logo" className={styles.logo} />
                    </a>
                </div>
                <div className={styles.detailsContainer}>
                    <a
                        href="https://www.computer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.textLink}
                    >
                        <h3 className={styles.degree}>IEEE Computer Society</h3>
                        <p className={styles.campus}>Member</p>
                    </a>
                </div>
            </div>
            <div className={styles.educationCard}>
                <div className={styles.logoContainer}>
                    <a
                        href="https://locus.com.np/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.logoLink}
                    >
                        <img src={locusLogoUrl} alt="LOCUS Logo" className={styles.logo} />
                    </a>
                </div>
                <div className={styles.detailsContainer}>
                    <a
                        href="https://locus.com.np/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.textLink}
                    >
                        <h3 className={styles.degree}>LOCUS</h3>
                        <p className={styles.campus}>Member</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Membership;