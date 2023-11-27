import { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from 'models';
const Home: NextPageWithLayout = () => {
  return <div>Layout index</div>;
};
Home.Layout = MainLayout;
export default Home;
