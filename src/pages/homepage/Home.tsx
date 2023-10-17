import './Home.scss';
import { TypeAnimation } from 'react-type-animation';
import { FilterForm } from "../../components/filterForm/FilterForm";

export const Home = (): JSX.Element => (
  <section className="container">
    <h1 className="home-title">
      <TypeAnimation 
        sequence={[
          'We create users...',
          1000,
          'We create universe...',
          1000,
          'Welcome to userverse !',
          2000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        speed={50}
        cursor={true}
        omitDeletionAnimation={true}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />
    </h1>
    <div className="search-block">
      <h2>Search someone...</h2>
      <FilterForm username="username" city="city" />
    </div>
  </section>
)
    