export interface userInput {
  name: string,
  last_name: string,
  email: string,
  message: string,
}

export interface AlertProps {
  message: string
}

export type PortfolioProps = {
  carouselSection: React.LegacyRef<HTMLDivElement>
}

export interface Errors {
  name?: boolean,
  nameOnlyLetters?: boolean | null,
  last_name?: boolean,
  last_nameOnlyLetters?: boolean | null,
  email?: boolean,
  invalid_email?: boolean | null,
  message?: boolean,
}

export interface TechnologyProps {
  name: string,
  dir: string,
  index: number
}

export interface TechnologiesData {
  name: string,
  dir: string,
}

export interface ResumeProps {
  language: string,
}