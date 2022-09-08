import { Answer } from "@prisma/client";

export type CreateAnswerData = Omit<Answer, "id">;
