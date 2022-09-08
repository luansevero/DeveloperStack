import * as answerRepository from "../repositories/answerRepository";
import { CreateAnswerData } from "../types/answerTypes";
import * as questionValidator from "../validators/questionValidator"

export async function insert(createAnswerData : CreateAnswerData){
    await questionValidator.findQuestion(createAnswerData["questionId"]);

    await answerRepository.insert(createAnswerData);
};


