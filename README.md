# Base de calculo para declaração de imposto para empresas do simples nacional

https://reidoperrengue.github.io/calculo-DAS-simples-nacional/
 

Tendo em vista a complexidade de previsão para o microempresario, sem contador, verificar com antecedencia as regras e valores do pagamento do imposto, fica aqui uma forma faclitada para a prévia do valor.

observe:

Para se obter o valor, é necessaario alguns entendimentos primarios, por exemplo.

Simples nacional é um faturamento a ser declarado mensalemente!
atraves do portal da receita federal "simples nacional" "simei" são palavras chaves para o acesso ao portal

PAra se obter o valor do imposto atribuído é necessario o valor de arrecadação do ano passado, para ser subtraido adequadamente: observe a formula:

(RBA12 x ALIQ) – PD / RBA12

Em que:

RBA12: receita bruta acumulada dos 12 meses anteriores

ALIQ: alíquota indicada no anexo correspondente

PD: parcela a deduzir indicada no anexo correspondente


exemplo:

caso ano passado tenha sido faturamento de 320.000,00 o calculo é este

[(R$ 320.000,00 x 11,2%) – 9.360,00] / R$ 320.000,00) =
(R$ 35.840 – 9.360,00) / R$ 320.000,00) =
R$ 26.480 / R$ 320.000,00 =
0,08275 - para torná-lo em % basta multiplicar por 100.

ou seja 8,275% de imposto para a empresa que faturou R$ 320.000,00 no seu ano anterior.


caso em hoje, 19 de fevereiro declaremos 58.000,00. O valor da DAS para este mês será: R$ 58.000,00 X 8,275% = R$ 4.799,50


O qua acontece caso a empresa não tenha ainda registrado seu primeiro mês?

O calculo será diferente, exemplo

para o 1° mes, será feita o mês * 12 para usar na formula.
para o 2° mes o faturamento do 1° mes e multiplicado por 12.
para o 3° mes, média do faturamento do primeiro e segundo mes multiplicado por 12.
e assim por diante até a empresa concluir 13 meses de faturamento.



links uteis usados no projeto:

para descobrir o CNAE de seu cnpj: https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp

para descobrir qual anexo de seu CNAE: https://www.contabilizei.com.br/contabilidade-online/cnae/?utm_device=c&utm_term=&utm_source=google&utm_medium=cpc&utm_campaign=%5BMAX%5D_Migracao_2022&hsa_cam=15642982273&hsa_grp=&hsa_mt=&hsa_src=x&hsa_ad=&hsa_acc=1466761651&hsa_net=adwords&hsa_kw=&hsa_tgt=&hsa_ver=3&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzcnf39OC6YmYm8Ag5Otbu-MUobc9CHK2ZIjVFi1DBuRL7S6X11MZyxoCtfoQAvD_BwE