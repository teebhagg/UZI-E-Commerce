import MyFooter from "../components/footer";
import NavBar from "../components/navbar";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col">
      <NavBar />
      {children}
      <MyFooter />
    </div>
  );
}
