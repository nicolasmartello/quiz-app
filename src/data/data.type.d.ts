
export type Option = {
  text: string;
  correct: boolean;
};

export type Question = {
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: Option[];
};

export interface IData {
  title: string;
  image: string;
  questions: Question[];
};
