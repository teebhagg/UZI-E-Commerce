import MyFooter from "../components/footer";
import NavBar from "../components/navbar";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="home h-full flex flex-col">
      <NavBar />
      {children}
      <MyFooter />
    </div>
  );
}