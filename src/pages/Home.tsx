import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';

export function HomePage() {
  const { mode } = useMode();

  return (
    <>
      <section className="hero">
        <h1>
          {mode === 'scholar'
            ? 'Explore American History'
            : 'Discover American History!'}
        </h1>
        <p className="tagline">
          {mode === 'scholar'
            ? 'Every claim sourced. Every fact verified. From the Revolution to today.'
            : 'Fun facts, cool quizzes, and amazing stories from America\'s past!'}
        </p>
        <div className="hero-ctas">
          <Link to="/timeline" className="hero-cta primary">
            {mode === 'scholar' ? 'Explore the Timeline' : 'Start Exploring!'}
          </Link>
          <Link to="/presidents" className="hero-cta secondary">
            {mode === 'scholar' ? 'Meet the Presidents' : 'Meet the Presidents!'}
          </Link>
          <Link to="/quizzes" className="hero-cta secondary">
            {mode === 'scholar' ? 'Test Your Knowledge' : 'Take a Quiz!'}
          </Link>
        </div>
      </section>

      <section className="page-content">
        <h2>
          {mode === 'scholar'
            ? 'A Verification-First Approach'
            : 'We Check Our Facts!'}
        </h2>
        <p>
          {mode === 'scholar'
            ? 'Every historical claim on this site is backed by at least two sources, with at least one from a primary institution like the Library of Congress, National Archives, or Smithsonian. We cite our sources so you can verify them yourself.'
            : 'Everything you read here has been carefully checked using trusted sources like the Library of Congress and the Smithsonian. We show you where we found our facts so you can learn even more!'}
        </p>
      </section>
    </>
  );
}
