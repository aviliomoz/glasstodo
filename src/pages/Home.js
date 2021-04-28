import { Background } from '../containers/Background';
import { Layout } from '../containers/Layout';
import { TasksList } from '../containers/TasksList';

export const Home = () => {
  return (
    <Background>
      <Layout>
        <TasksList />
      </Layout>
    </Background>
  );
};
