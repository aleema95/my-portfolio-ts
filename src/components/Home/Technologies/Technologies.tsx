import React from 'react'
import { TechnologiesData } from '../../../types/types'
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

const Technologies_DB: Array<TechnologiesData> = [
  {
    name:"Express",
    dir: express
  },
  {
    name:"git",
    dir:git
  },
  {
    name:"javascript",
    dir:javascript
  },
  {
    name:"node",
    dir:node
  },
  {
    name:"postgres",
    dir:postgres
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
    name:"sequelize",
    dir:sequelize
  },
  {
    name:"typescript",
    dir:typescript
  },
]

export default function Technologies () {


  return (
    <div className={s.mainContainer}>
      {Technologies_DB.map( (t: {name: string, dir: string}) => <Technology 
                                      name={t.name}  
                                      dir={t.dir}/>
      )}
    </div>
  )
}
