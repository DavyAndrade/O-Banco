
    import { corrente } from "./Corrente"
    import { poupanca } from "./Poupança"
    import { tela } from "./Saldo"
    import { inv } from "./Investimento"

        export class Banco {
            banco: string
            usuário: string
            conta: string

        mensagem(){
            console.log(`\nSeja Bem-Vindo(a) ao ${info.banco}, ${info.usuário}.`)
            console.log(`\nVocê possui R$ ${corrente.CC} em sua Conta Corrente. \nVocê possui R$ ${poupanca.CP} em sua Conta Poupança. \nVocê possui R$ ${tela.saldo} de Saldo Total em sua Conta. \nSeu Investimento é de R$ ${inv.NuInvest} em sua Conta.`)
    }
}

    var info = new Banco()
        info.banco = "Nubank"
        info.usuário = "Roberto"


         info.mensagem()


   