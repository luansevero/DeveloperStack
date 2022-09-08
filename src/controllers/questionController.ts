import { Request, Response } from 'express';
import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } : { askedBy: string, question:string }  = req.body;

  await questionService.insert({askedBy, question});
  res.sendStatus(201);
};

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } : { answeredBy: string, answer: string} = req.body;
  const questionId  = Number(req.params.id);

  await answerService.insert({ answeredBy, answer, questionId });
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const question = await questionService.findAll();
  res.status(200).send(question);
}

export async function getById(req: Request, res: Response) {
  const questionId = Number(req.params.id);
  const question  = await questionService.findQuestionById(questionId);
  res.status(200).send(question);
}
