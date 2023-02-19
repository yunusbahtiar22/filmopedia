import Header from "../components/header";
import Layout from "../components/layout";
import { Link } from "react-router-dom";
export default function About(): JSX.Element {
  return (
    <Layout>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
