import "./globals.css";
import MainHeader from "@/app/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

/**
 * Renders the root layout of the web page.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the root layout.
 *
 * @return {React.ReactNode}
 */
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <MainHeader />
      {children}
    </body>
  </html>
);

export default RootLayout;
