import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
    constructor(){

    }

    async listLeilao(idleilao?: string){
        try{
            if(idleilao){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        idleilao
                    }
                });
                return leilao;
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(idleilao: string, leilao: Prisma.LeilaoUpdateInput){
        try{
            const updatedLeilao = await prisma.leilao.update({
                where: {
                    idleilao
                },
                data: leilao
            });

            return updatedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async fecharLeilao(idleilao: string){
        try{
            const deletedUser = await prisma.leilao.delete({
                where: {
                    idleilao
                }
            });

            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();