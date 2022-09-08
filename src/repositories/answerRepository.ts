import { prisma } from "../config/database"
import { CreateAnswerData } from "../types/answerTypes"

export async function insert(createAnswerData: CreateAnswerData){
    await prisma.answer.create({
        data: createAnswerData,
    })
};
