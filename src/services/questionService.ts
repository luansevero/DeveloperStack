import * as questionRepository from "../repositories/questionRepository";
import { CreateQuestionData } from "../types/questionTypes";

export async function insert(createQuestionData : CreateQuestionData){
    await questionRepository.insert(createQuestionData);
};

export async function findAll(){
    const questions = await questionRepository.findAll();
    return {questions:questions}
};

export async function findQuestionById(questionId:number){
    const question = await questionRepository.findQuestionAnswersById(questionId);
    return question
};