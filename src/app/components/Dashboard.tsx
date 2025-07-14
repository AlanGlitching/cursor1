import styles from '../page.module.css';

function MetricCard({ label, value, change, changeType }: { label: string; value: string; change: string; changeType: 'positive' | 'negative' }) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.metricLabel}>{label}</span>
      <span className={styles.metricValue}>{value}</span>
      <div className={styles.metricSubRow}>
        <span className={styles.metricSubLabel}>Current Season</span>
        <span className={changeType === 'positive' ? styles.metricChangePositive : styles.metricChangeNegative}>{change}</span>
      </div>
      <div className={styles.metricChartPlaceholder} aria-hidden="true" />
      <span className={styles.metricChartLabel}>Season 2023-24</span>
    </div>
  );
}

function SeasonComparisonTable() {
  return (
    <table className={styles.seasonComparisonTable} aria-label="Season Comparison Table">
      <thead>
        <tr className={styles.seasonComparisonHeader}>
          <th scope="col">Season</th>
          <th scope="col">Points Per Game</th>
          <th scope="col">Assists Per Game</th>
          <th scope="col">Rebounds Per Game</th>
          <th scope="col">Games Played</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.seasonComparisonRow}>
          <td>2023-24</td>
          <td>25</td>
          <td>7</td>
          <td>6</td>
          <td>60</td>
        </tr>
        <tr className={styles.seasonComparisonRow}>
          <td>2022-23</td>
          <td>23</td>
          <td>6</td>
          <td>7</td>
          <td>55</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Dashboard() {
  return (
    <main className={styles.dashboard} aria-label="Performance dashboard main content">
      <header className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Performance Dashboard</h1>
        <p className={styles.dashboardSubtitle}>Track your progress and performance metrics</p>
      </header>
      <nav className={styles.seasonTabs} aria-label="Season selection tabs">
        <button className={styles.seasonTabActive}>Current Season</button>
        <button className={styles.seasonTab}>Past Seasons</button>
        <button className={styles.seasonTab}>Whole Season</button>
      </nav>
      <section className={styles.metricsGrid} aria-label="Performance metrics">
        <MetricCard label="Points Per Game" value="25" change="+5%" changeType="positive" />
        <MetricCard label="Assists Per Game" value="7" change="+2%" changeType="positive" />
        <MetricCard label="Rebounds Per Game" value="6" change="-1%" changeType="negative" />
        <MetricCard label="Games Played" value="60" change="+10%" changeType="positive" />
      </section>
      <h3 className={styles.seasonComparisonTitle}>Season Comparison</h3>
      <SeasonComparisonTable />
    </main>
  );
} 