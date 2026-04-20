import { Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getQuizzes, voice } from '../lib/content';
import { localStore } from '../lib/storage';

export function QuizzesPage() {
  const { mode } = useMode();
  const quizzes = getQuizzes();
  const progress = localStore.getAllQuizProgress();

  return (
    <div className="page-content" style={{ maxWidth: '900px' }}>
      <h1>{mode === 'scholar' ? 'Test Your Knowledge' : 'Take a Quiz!'}</h1>
      <p style={{ marginBottom: '32px', color: 'var(--muted)' }}>
        {mode === 'scholar'
          ? 'Challenge yourself with quizzes drawn from verified historical content. Each question includes an explanation with source citations.'
          : 'How much do you know about American history? Take a quiz and find out! Don\'t worry \u2014 you\'ll learn cool stuff even if you get some wrong!'}
      </p>

      {quizzes.length === 0 ? (
        <div className="in-progress-notice">
          <p>{mode === 'scholar' ? 'Quizzes are being developed. Check back soon.' : 'Quizzes are coming soon!'}</p>
        </div>
      ) : (
        <div className="quiz-grid">
          {quizzes.map(quiz => {
            const done = progress.find(p => p.quizId === quiz.id);
            return (
              <Link key={quiz.id} to={`/quizzes/${quiz.id}`} className="quiz-card">
                <div className="quiz-card-topic">{quiz.topic}</div>
                <div className="quiz-card-title">{voice(quiz.title, mode)}</div>
                <div className="quiz-card-desc">{voice(quiz.description, mode)}</div>
                <div className="quiz-card-meta">
                  {quiz.difficulty} &middot; {quiz.questionIds.length} questions
                </div>
                {done && (
                  <div className="quiz-card-score">
                    Score: {done.score}/{done.totalQuestions}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
