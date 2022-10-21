import React from 'react'
import { TechnologiesData } from '../../../types/types'
import { motion } from "framer-motion";
import s from './Technologies.module.scss'
import express from "../../../assets/images/technologies/express.png"
import git from "../../../assets/images/technologies/git.png"
import javascript from "../../../assets/images/technologies/javascript.png"
import node from "../../../assets/images/technologies/node.png"
import postgres from "../../../assets/images/technologies/postgres.png"
import react from "../../../assets/images/technologies/react.png"
import redux from "../../../assets/images/technologies/redux.png"
import sass from "../../../assets/images/technologies/sass.png"
import sequelize from "../../../assets/images/technologies/sequelize.png"
import typescript from "../../../assets/images/technologies/typescript.png"
import Technology from './Technology/Technology'
import { useTranslation } from 'react-i18next';

const Technologies_DB: Array<TechnologiesData> = [
  {
    name:"javascript",
    dir:javascript
  },
  {
    name:"typescript",
    dir:typescript
  },
  {
    name:"react",
    dir:react
  },
  {
    name:"redux",
    dir:redux
  },
  {
    name:"sass",
    dir:sass
  },
  {
    name:"Express",
    dir: express
  },
  {
    name:"node",
    dir:node
  },
  {
    name:"git",
    dir:git
  },
  {
    name:"postgres",
    dir:postgres
  },
 
  {
    name:"sequelize",
    dir:sequelize
  },
]

export default function Technologies () {

  const [t, i18n] = useTranslation<string>("global")

  return (
    <div className={s.mainContainer}>
      <h1 className={s.techTitle}>{t("home.technologies.title")}</h1>
      <div 
        className={s.technologiesContainer}
        >
        {Technologies_DB.map( (t: {name: string, dir: string}, i: number) => <Technology 
                                        name={t.name}  
                                        dir={t.dir}
                                        index={i}
                                        />
        )}
      </div>
    </div>
  )
}
