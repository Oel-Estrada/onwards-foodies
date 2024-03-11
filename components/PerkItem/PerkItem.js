import Image from "next/image";

/**
 * Represents a perk item component.
 *
 * @property {string} icon - The URL of the icon for the perk item.
 * @property {string} alt - The alternative text for the icon.
 * @property {React.ReactNode}
 */
const PerkItem = ({ icon, alt, children }) => (
  <li>
    <Image src={icon} alt={alt} />
    <p>{children}</p>
  </li>
);

export default PerkItem;
