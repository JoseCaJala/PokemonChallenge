import TabButton from "../atoms/TabButton";
import styles from "./TabBar.module.css";

export default function TabBar({ activeTab, onTabChange }) {
  const tabs = [
    { key: "about", label: "Pokédex Data" },
    { key: "stats", label: "Stats" },
    { key: "moves", label: "Evolution" }
  ];

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          label={tab.label}
          active={activeTab === tab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
}
