import MyFooter from "../components/footer";
import NavBar from "../components/navbar";

export default function CategoriesLayout({
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