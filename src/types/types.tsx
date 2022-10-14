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
  name?: string,
  last_name?: string,
  email?: string,
  message?: string,
}

export interface TechnologyProps {
  name: string,
  dir: string
}

export interface TechnologiesData {
  name: string,
  dir: string
}