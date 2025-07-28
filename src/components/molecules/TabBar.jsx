import TabButton from "../atoms/TabButton";
import styles from "./TabBar.module.css";

export default function TabBar({ activeTab, onTabChange }) {
  const tabs = ["About", "Stats", "Moves"];

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          label={tab}
          active={activeTab === tab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
}
