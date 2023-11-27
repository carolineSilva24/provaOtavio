-- CreateTable
CREATE TABLE "Usuario" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "idlance" TEXT NOT NULL PRIMARY KEY,
    "compradorid" TEXT NOT NULL,
    "leilaoid" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_compradorid_fkey" FOREIGN KEY ("compradorid") REFERENCES "Usuario" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoid_fkey" FOREIGN KEY ("leilaoid") REFERENCES "Leilao" ("idleilao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "idleilao" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "donoid" TEXT NOT NULL,
    "lanceid" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoid_fkey" FOREIGN KEY ("donoid") REFERENCES "Usuario" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
