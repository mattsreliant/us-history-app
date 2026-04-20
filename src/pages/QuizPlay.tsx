import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMode } from '../lib/mode';
import { getQuiz, getQuestions, voice } from '../lib/content';
import { localStore } from '../lib/storage';

export function QuizPlayPage() {
  const { id } = useParams<{ id: string }>();
  const { mode } = useMode();
  const quiz = getQuiz(id || '');
  const questions = quiz ? getQuestions(quiz.questionIds) : [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  if (!quiz || questions.length === 0) {
    return (
      <div className="page-content">
        <h1>Quiz Not Found</h1>
        <p><Link to="/quizzes">Back to Quizzes</Link></p>
      </div>
    );
  }

  const question = questions[currentIdx];
  const total = questions.length;

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
  }

  function handleCheck() {
    if (selected === null) return;
    setRevealed(true);
    if (selected === question.correctIndex) {
      setScore(s => s + 1);
    } else {
      setMissed(m => [...m, question.id]);
    }
  }

  function handleNext() {
    if (currentIdx + 1 >= total) {
      const finalScore = score;
      localStore.setQuizProgress(quiz!.id, {
        quizId: quiz!.id,
        score: finalScore,
        totalQuestions: total,
        completedAt: new Date().toISOString(),
        missedQuestionIds: missed,
      });
      setFinished(true);
    } else {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  if (finished) {
    return (
      <div className="page-content" style={{ textAlign: 'center' }}>
        <h1>{mode === 'scholar' ? 'Quiz Complete' : 'You Did It!'}</h1>
        <div className="quiz-final-score">
          <span className="quiz-score-number">{score}</span>
          <span className="quiz-score-total">/ {total}</span>
        </div>
        <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
          {score === total
            ? (mode === 'scholar' ? 'Perfect score. Impressive.' : 'PERFECT SCORE! You\'re a history genius!')
            : score >= total * 0.7
            ? (mode === 'scholar' ? 'Well done. Strong knowledge of the material.' : 'Great job! You really know your stuff!')
            : (mode === 'scholar' ? 'Review the material and try again.' : 'Good try! Read some more and try again \u2014 you\'ll do even better!')}
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to={`/quizzes/${quiz.id}`} className="hero-cta primary" onClick={() => {
            setCurrentIdx(0); setSelected(null); setRevealed(false);
            setScore(0); setMissed([]); setFinished(false);
          }}>
            {mode === 'scholar' ? 'Retake Quiz' : 'Try Again!'}
          </Link>
          <Link to="/quizzes" className="hero-cta secondary">
            {mode === 'scholar' ? 'All Quizzes' : 'More Quizzes!'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to="/quizzes" className="back-link">&larr; Back to Quizzes</Link>

      <div className="quiz-header">
        <h1>{voice(quiz.title, mode)}</h1>
        <div className="quiz-progress">
          Question {currentIdx + 1} of {total}
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${((currentIdx + 1) / total) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="quiz-question">
        <h2 className="quiz-prompt">{voice(question.prompt, mode)}</h2>

        <div className="quiz-options">
          {question.options.map((opt, idx) => {
            let cls = 'quiz-option';
            if (selected === idx) cls += ' selected';
            if (revealed) {
              if (idx === question.correctIndex) cls += ' correct';
              else if (selected === idx) cls += ' incorrect';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={revealed}>
                <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                <span>{voice(opt, mode)}</span>
              </button>
            );
          })}
        </div>

        {!revealed && (
          <button className="quiz-check-btn" onClick={handleCheck} disabled={selected === null}>
            {mode === 'scholar' ? 'Check Answer' : 'Check!'}
          </button>
        )}

        {revealed && (
          <div className={`quiz-feedback ${selected === question.correctIndex ? 'correct' : 'incorrect'}`}>
            <p className="quiz-feedback-label">
              {selected === question.correctIndex
                ? (mode === 'scholar' ? 'Correct.' : 'That\'s right!')
                : (mode === 'scholar' ? 'Incorrect.' : 'Not quite!')}
            </p>
            <p className="quiz-explanation">{voice(question.explanation, mode)}</p>
            <button className="quiz-next-btn" onClick={handleNext}>
              {currentIdx + 1 >= total
                ? (mode === 'scholar' ? 'See Results' : 'See How I Did!')
                : (mode === 'scholar' ? 'Next Question' : 'Next!')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
