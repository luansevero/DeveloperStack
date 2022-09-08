import { prisma } from "../config/database"
import { CreateQuestionData } from "../types/questionTypes"

export async function insert(createQuestionData: CreateQuestionData){
    await prisma.question.create({
        data: createQuestionData,
    })
};

export async function findById(id:number){
    return await prisma.question.findUnique({
        where: {id}
    })
};

export async function findAll(){
    return await prisma.question.findMany();
};

export async function findQuestionAnswersById(id: number){
    return await prisma.question.findUnique({
        where: { id },
        include:{
            Answer:{
                select:{
                    answeredBy:true,
                    answer:true
                }
            }
        }
    })
}
