import Header from "./header";

type layoutProps = {
  children?: React.ReactNode;
};

const layout = ({ children }: layoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export default layout;
