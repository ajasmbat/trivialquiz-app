-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "timeLimit" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameQuestion" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answers" TEXT[],
    "correctAnswer" INTEGER NOT NULL,

    CONSTRAINT "GameQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "References" (
    "id" TEXT NOT NULL,
    "gameQuestionId" TEXT NOT NULL,
    "refrenceName" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "References_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameScores" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "GameScores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameQuestion" ADD CONSTRAINT "GameQuestion_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "References" ADD CONSTRAINT "References_gameQuestionId_fkey" FOREIGN KEY ("gameQuestionId") REFERENCES "GameQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameScores" ADD CONSTRAINT "GameScores_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
