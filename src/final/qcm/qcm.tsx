// DO NOT EDIT THIS FILE !!!
import React from 'react'

interface IQuestion {
  question: string
  options:string[]
  answer: string
}

interface IQCMInterface {
  exerciseId: string
  exerciseTitle : string
  quiz: IQuestion[]
}

const QCM: Array<IQCMInterface> = [
  {
    exerciseId: 'src/exercise/01.md',
    exerciseTitle: 'Pas de QCM pour cette section',
    quiz: [
      {
        question: "Pas de QCM : Valide simplement cet exercice en cliquant sur Valider puis Valider le QCM",
        options: ["Validé", "Non validé"],
        answer: "0"
      }
    ],
  },
  {
    exerciseId: 'src/exercise/02.md',
    exerciseTitle: 'Pas de QCM pour cette section',
    quiz: [
      {
        question: "Pas de QCM : Valide simplement cet exercice en cliquant sur Valider puis Valider le QCM",
        options: ["Validé", "Non validé"],
        answer: "0"
      }
    ],
  },
  {
    exerciseId: 'src/exercise/03.md',
    exerciseTitle: 'Pas de QCM pour cette section',
    quiz: [
      {
        question: "Pas de QCM : Valide simplement cet exercice en cliquant sur Valider puis Valider le QCM",
        options: ["Validé", "Non validé"],
        answer: "0"
      }
    ],
  },
  {
    exerciseId: 'src/exercise/04.md',
    exerciseTitle: 'Pas de QCM pour cette section',
    quiz: [
      {
        question: "Pas de QCM : Valide simplement cet exercice en cliquant sur Valider puis Valider le QCM",
        options: ["Validé", "Non validé"],
        answer: "0"
      }
    ],
  },
  {
    exerciseId: 'src/exercise/05.md',
    exerciseTitle: 'Pas de QCM pour cette section',
    quiz: [
      {
        question: "Pas de QCM : Valide simplement cet exercice en cliquant sur Valider puis Valider le QCM",
        options: ["Validé", "Non validé"],
        answer: "0"
      }
    ],
  },
]

//export default QCM;

const QcmComponent = () => {
  return (<>{ JSON.stringify(QCM, null, 2) }</>);
}
export default QcmComponent
