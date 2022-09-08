import * as questionRepository from "../repositories/questionRepository";

export async function findQuestion(questionId:number){
    const question = await questionRepository.findById(questionId);
    if(!question) throw {type: "not_found", message: "That question don't exist"};
}