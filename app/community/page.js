import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";
import PerkItem from "@/components/PerkItem/PerkItem";

/**
 * Define perk items information
 */
const perkItems = [
  { icon: mealIcon, alt: "A delicious meal", text: "Share & discover recipes" },
  {
    icon: communityIcon,
    alt: "A crowd of people, cooking",
    text: "Find new friends & like-minded people",
  },
  {
    icon: eventsIcon,
    alt: "A crowd of people at a cooking event",
    text: "Participate in exclusive events",
  },
];

/**
 * Represents the community page component.
 *
 * @returns {JSX.Element}
 */
const CommunityPage = () => (
  <>
    <header className={classes.header}>
      <h1>
        One shared passion: <span className={classes.highlight}>Food</span>
      </h1>
      <p>Join our community and share your favorite recipes!</p>
    </header>
    <main className={classes.main}>
      <h2>Community Perks</h2>

      <ul className={classes.perks}>
        {perkItems.map((perkItems, index) => (
          <PerkItem key={index} icon={perkItems.icon} alt={perkItems.alt}>
            {perkItems.text}
          </PerkItem>
        ))}
      </ul>
    </main>
  </>
);

export default CommunityPage;
