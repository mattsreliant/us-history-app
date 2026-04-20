import {
  registerDecades, registerEvents, registerPresidents,
  registerDiscover, registerQuizzes, registerQuestions,
} from '../lib/content';

const decadeModules = import.meta.glob('./decades/*.json', { eager: true });
registerDecades(Object.values(decadeModules).map((m: any) => m.default));

const eventModules = import.meta.glob('./events/*.json', { eager: true });
registerEvents(Object.values(eventModules).map((m: any) => m.default));

const presidentModules = import.meta.glob('./presidents/*.json', { eager: true });
registerPresidents(Object.values(presidentModules).map((m: any) => m.default));

const discoverModules = import.meta.glob('./discover/*.json', { eager: true });
registerDiscover(Object.values(discoverModules).map((m: any) => m.default));

const quizModules = import.meta.glob('./quizzes/*.json', { eager: true });
const quizData = Object.values(quizModules).map((m: any) => m.default);
// Separate quiz definitions from questions
registerQuizzes(quizData.filter((d: any) => d.questionIds));
registerQuestions(quizData.filter((d: any) => d.correctIndex !== undefined));
