import styles from '../page.module.css';

function MatchCard({ stats, opponent }: { stats: string; opponent: string }) {
  return (
    <div className={styles.matchCard}>
      <div className={styles.matchIcon} aria-hidden="true" />
      <div className={styles.matchInfo}>
        <span className={styles.matchStats}>{stats}</span>
        <span className={styles.matchOpponent}>{opponent}</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Sidebar with player profile and stats">
      <div className={styles.profileCard}>
        <div className={styles.profileImageWrapper}>
          <img
            src="/profile.jpg"
            alt="Ethan's profile photo"
            width={120}
            height={120}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>Ethan</h2>
          <p className={styles.profileRole}>Basketball Player</p>
        </div>
      </div>
      <nav aria-label="Player stats">
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>Goals</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>8</span>
            <span className={styles.statLabel}>Assists</span>
          </div>
        </div>
        <div className={styles.statCardLarge}>
          <span className={styles.statValue}>90</span>
          <span className={styles.statLabel}>Avg. Playtime</span>
        </div>
      </nav>
      <h3 className={styles.recentMatchesTitle}>Recent Matches</h3>
      <section aria-label="Recent matches">
        <MatchCard stats="2 Goals, 1 Assist" opponent="vs. City Rivals" />
        <MatchCard stats="1 Goal, 2 Assists" opponent="vs. United FC" />
        <MatchCard stats="3 Goals, 0 Assists" opponent="vs. Rovers" />
      </section>
    </aside>
  );
} 