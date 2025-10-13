import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import brasaoRepublica from "@/assets/brasao-republica.png";

const Regulamento = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <img src={brasaoRepublica} alt="Brasão da República Federativa do Brasil" className="w-24 h-auto" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-center text-primary mb-8">
          REGULAMENTO/PLANO DE OPERAÇÃO DA PROMOÇÃO<br />
          ANIVERSÁRIO EPA 66 ANOS
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg font-bold text-primary">
            CERTIFICADO DE AUTORIZAÇÃO SPA/ME Nº 04.045112/2025
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-foreground text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">1 - EMPRESAS PROMOTORAS:</h2>
            
            <div className="space-y-2">
              <p className="font-bold">1.1 - Empresa Mandatária:</p>
              <p>Razão Social: DMA DISTRIBUIDORA S/A</p>
              <p>Endereço: Av. Nossa Senhora do Carmo, nº 1.420, 7º andar – Belo Horizonte/MG</p>
              <p>Bairro: – São Pedro</p>
              <p>Município: BELO HORIZONTE UF: MG CEP:30170-126 CNPJ/MF nº: 01.928.075/0001-08</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold">1.2 - Aderentes:</p>
              <p>Razão Social:CRED-SYSTEM SERVICOS DE GESTAO E PROMOCAO DE VENDAS LTDA Endereço: RIO NEGRO Número: 161</p>
              <p>Complemento: ANDAR: 3; SALA: 303;</p>
              <p>Bairro: ALPHAVILLE INDUSTRIAL Município: BARUERI UF: SP CEP:06454- 000 CNPJ/MF nº:08.517.118/0001-01</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">2 - MODALIDADE DA PROMOÇÃO:</h2>
            <p>Assemelhada a Sorteio</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">3 - ÁREA DE ABRANGÊNCIA:</h2>
            <p>Alfenas/MG Belo Horizonte/MG Betim/MG Carandaí/MG Congonhas/MG Conselheiro Lafaiete/MG Contagem/MG Governador Valadares/MG Itabirito/MG Itaúna/MG João Monlevade/MG Lagoa Santa/MG Nanuque/MG Nova Lima/MG Ouro Branco/MG Ouro Preto/MG Pedro Leopoldo /MG Ponte Nova/MG Ribeirão das Neves/MG Sabará/MG Santa Luzia/MG Santa Rita do Sapucaí/MG Santos Dumont/MG Sete Lagoas/MG Teófilo Otoni/MG Vespasiano/MG</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">4 - PERÍODO DA PROMOÇÃO:</h2>
            <p>13/10/2025 a 15/11/2025</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">5 - PERÍODO DE PARTICIPAÇÃO:</h2>
            <p>13/10/2025 a 15/11/2025</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">6 - CRITÉRIO DE PARTICIPAÇÃO:</h2>
            <p>6.1.Esta é uma Promoção realizada pela empresa DMA Distribuidora S/A, CNPJ: 01.928.075/0001-08, com domicílio na Av. Nossa Senhora do Carmo, nº 1.420, 7º andar – São Pedro – Belo Horizonte/MG, exclusivamente para as lojas do EPA Supermercados, localizadas no estado de Minas Gerais, aberta para os consumidores físicos, com idade acima de 18 anos, com CPF válidos, residentes e domiciliados em território nacional, que adquirirem quaisquer produtos comercializados nas lojas do EPA Supermercados, sendo o período da Promoção compreendido entre os dias 13/10/2025 a 15/11/2025, ou até o término dos "Números da Sorte".</p>
            
            <p>6.2. Caso as séries de Números da Sorte, destinadas ao sorteio da presente Promoção se esgotarem, antes da data prevista para o final da Promoção, a participação será considerada encerrada.</p>
            
            <p>6.3.Para participar desta Promoção, os interessados deverão ler e aceitar todos os termos deste Regulamento, estando cientes que, ao realizar o seu cadastro, aceitam os referidos termos. O consumidor que não concordar, com os termos e condições estabelecidos neste Regulamento, não poderá participar desta Promoção.</p>
            
            <div className="pl-4 space-y-2">
              <p>6.4. Critério de participação:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizar compras nas lojas físicas do EPA Supermercados, com valor mínimo de R$ 100,00 (cem   reais);</li>
                <li>Digitar o CPF no caixa, logo no início da compra;</li>
                <li>Realizar o cadastro completo e correto no site www.epa.com.br/aniversario;</li>
                <li>Receber o "Número da Sorte", no site  da Promoção para concorrer aos prêmios do sorteio no dia 22/11/2025.</li>
              </ul>
            </div>
            
            <p>6.5. Não poderão participar desta Promoção: as pessoas jurídicas e cadastros realizados com CNPJ, as pessoas físicas sem CPF ou CPF inválidos, menores de 18 anos e/ou não residentes em território nacional, os sócios diretores da empresa promotora, funcionários da DMA Distribuidora e funcionários diretamente envolvidos na Promoção, das seguintes empresas: da empresa promotora, da Polypromo.Com Ltda, da Cresce Vendas e Credsystem e demais empresas envolvidas.</p>
            
            <p className="font-bold">6.6. MECÂNICA DE PARTICIPAÇÃO:</p>
            
            <p>Poderão participar desta Promoção todos os consumidores, pessoas físicas, com CPF válidos, maiores de 18 anos, residentes e domiciliados em território nacional, que após a realização da compra em uma das lojas físicas do EPA Supermercados, nas condições previstas nesse Regulamento, se cadastrem no site www.epa.com.br/aniversario, informando seus dados completos como: nome completo, endereço completo, sexo, número do CPF, estado civil, telefone celular, data de nascimento, e-mail e senha, no período do dia 13/10/2025 a 15/11/2025.</p>
            
            <p className="font-bold">6.6.1. FICAM OS PARTICIPANTES, CIENTES, DESDE JÁ, QUE O ATO DE DIGITAR O CPF NO MOMENTO DA COMPRA É PRE-REQUISITO DE PARTICIPAR DA PROMOÇÃO, MAS NÃO GARANTE A ATRIBUIÇÃO DO "NÚMERO DA SORTE" AO CONSUMIDOR, UMA VEZ QUE É NECESSÁRIO O EFETIVO CADASTRO COMPLETO PELO PARTICIPANTE NO SITE www.epa.com.br/aniversario, CONFORME EXPLICADO ACIMA, E A CONCLUSÃO DO PROCESSAMENTO DA VENDA, QUE É FEITO DE FORMA ALEATÓRIA E POR ORDEM DE PROCESSAMENTO. PODE OCORRER, AINDA, QUE QUANDO O SISTEMA FOR PROCESSAR DETERMINADA VENDA, DAS SÉRIES E "NÚMEROS DA SORTE" ESTAREM ESGOTADOS OU DO PERÍODO DE PARTICIPAÇÃO TER ENCERRADO, SENDO DESTA FORMA IMPOSSÍVEL ATRIBUIR O "NÚMERO DA SORTE". NA HIPÓTESE DE HAVER O ESGOTAMENTO DAS SÉRIES E "NÚMEROS DA SORTE", ANTES DA DATA FINAL DA PROMOÇÃO, ELA SERÁ ENCERRADA ANTECIPADAMENTE.</p>
            
            <p>6.6.2. A cada R$ 100,00 (cem reais) em compras e seus múltiplos, nas lojas físicas do EPA Supermercados, no período de 13/10/2025 à 15/11/2025, o Participante receberá 1 (um) "Número da Sorte". Efetuando o pagamento da compra, a cada R$ 100,00 (cem reais), com o CARTÃO FÁCIL, o cliente receberá Números da Sorte em DOBRO.</p>
            
            <p>6.6.3. Havendo saldo no valor da compra que não complete os múltiplos de R$ 100,00 (cem reais), este saldo será acumulado e/ou somado ao saldo de outra compra. Os cupons fiscais ou notas fiscais com valores inferiores a R$ 100,00 (cem reais) serão acumulados para fins de recebimento do "Número da Sorte".</p>
            
            <p>6.6.4. Os produtos vetados pelo art. 10 do Decreto nº 70.951 de 09/08/1972, ou seja, armas e munições, explosivos, fogos de artifício ou de estampido, medicamentos, bebidas alcoólicas (teor alcoólico acima de 13ºGL), fumo e seus derivados não serão válidos nas compras para o recebimento de "Número da Sorte".</p>
            
            <p>6.6.5. No ato da inscrição os Participantes declaram que leram e concordaram com o Regulamento da Promoção e os termos de autorização de uso e divulgação de seus dados, bem como declaram ser legítimos autores do conteúdo cadastrado, responsabilizando-se por quaisquer danos que possa vir causar à MANDATÁRIA.</p>
            
            <p>6.6.6. Os "Números da Sorte" somente serão habilitados após a realização do cadastro completo pelo Participante, respeitando as regras da Promoção. O PARTICIPANTE TERÁ O SEU "NÚMERO DA SORTE" GERADO EM ATÉ 72 (SETENTA E DUAS) HORAS CONTADOS A PARTIR DA DATA DA COMPRA E ANTES DE 48 (QUARENTA E OITO) HORAS DO RESULTADO DA LOTERIA FEDERAL, DESDE QUE JÁ TENHA CADASTRO VÁLIDO NO SITE www.epa.com.br/aniversairo.</p>
            
            <p>6.6.7. Após a realização do cadastro completo, a compra efetuada no valor mínimo de R$ 100,00 (Cem reais) e seus múltiplos, o cliente deverá digitar o número de seu CPF no pin pad (máquina de cartão) do caixa, no início da compra, para receber o "Número da Sorte".</p>
            
            <p>6.6.8. O cadastramento incompleto, assim como o não aceite aos termos desse Regulamento e da Política de uso dos dados do site, impedirá a participação do consumidor e a atribuição ao "Número da Sorte", para concorrer ao sorteio dessa Promoção.</p>
            
            <p>6.6.9. Somente serão aceitas, para participar desta Promoção, as compras que possuírem emissão de Nota/Cupom fiscal dentro do período de participação desta Promoção, isto é, a partir da abertura das lojas físicas do Epa Supermercados do dia 13/10/2025 até o fechamento das mesmas, no dia 15/11/2025.</p>
            
            <p>6.6.10. É dever de todos os participantes manter seus dados cadastrais atualizados, uma vez que serão utilizados para identificação e localização dos ganhadores desta Promoção.</p>
            
            <p>6.10.11A promotora reserva-se o direito de verificar a veracidade dos dados informados pelos Participantes, sendo sumariamente desclassificados aqueles que prestarem informações falsas, incompletas ou incorretas.</p>
            
            <p>6.10.11. As premiações acontecerão através da realização do sorteio que será realizado no dia 22/11/2025, pela composição do resultado da Loteria Federal.</p>
            
            <p>6.10.12. A divulgação dos contemplados será até o dia 27/11/2025, através do site www.epa.com.br, www.epa.com.br/aniversario,REDES SOCIAIS SUPERMERCADOS EPA E BANNERS EXPOSTOS NAS LOJAS EPA SUPERMERCADOS.</p>
            
            <p>6.10.13. Os CPFs e as compras identificadas, que não possuem efetivação de cadastro, serão excluídos da base de dados da campanha no prazo de 10 (dez) dias após o término da mesma.</p>
            
            <p>6.10.14.  "Número da Sorte" ficará disponível para consulta do participante até 05 (cinco) dias corridos depois da data do TÉRMINO DA CAMPANHA.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">7 - QUANTIDADE DE SÉRIES:</h2>
            <p>200</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">8 - QUANTIDADE DE ELEMENTOS SORTEÁVEIS POR SÉRIE:</h2>
            <p>100.000</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">9 - APURAÇÃO E DESCRIÇÃO DE PRÊMIOS:</h2>
            <p><strong>DATA:</strong> 24/11/2025 15:00</p>
            <p><strong>PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO:</strong> 13/10/2025 06:00 a 15/11/2024 23:59</p>
            <p><strong>DATA DO SORTEIO DA LOTERIA FEDERAL:</strong> 22/11/2025</p>
            <p><strong>ENDEREÇO DA APURAÇÃO:</strong> Avenida Nossa Senhora do Carmo NÚMERO: 1420 COMPLEMENTO: SLJ 7º ANDAR BAIRRO: SÃO PEDRO</p>
            <p><strong>MUNICÍPIO:</strong> Belo Horizonte UF: MG CEP: 30330-000</p>
            <p><strong>LOCAL DA APURAÇÃO:</strong> no site www.epa.com.br/aniversario</p>
            
            <div className="border border-muted p-4 my-4">
              <p className="font-bold mb-2">PRÊMIOS</p>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Quantidade</th>
                    <th className="text-left py-2">Descrição</th>
                    <th className="text-right py-2">Valor R$</th>
                    <th className="text-right py-2">Valor Total R$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">500</td>
                    <td className="py-2">Cartão nominal no valor unitário de R$ 1.000,00 (mil reais) em mercadorias à escolha do contemplado, nas lojas do EPA SUPERMERCADOS. O cartão não tem modalidade de saque e de transferência.</td>
                    <td className="text-right py-2">1.000,00</td>
                    <td className="text-right py-2">500.000,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">10 - PREMIAÇÃO TOTAL:</h2>
            <p><strong>Quantidade Total de Prêmios:</strong> 500</p>
            <p><strong>Valor total da Promoção:</strong> R$ 500.000,00</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">11 - FORMA DE APURAÇÃO:</h2>
            
            <p className="font-bold">Regra de Formação dos Elementos Sorteáveis</p>
            <p><strong>ELEMENTO SORTEÁVEL:</strong> Serão gerados 100000 Elementos sorteáveis de 0 a 99.999 por série;</p>
            <p><strong>NÚMERO DA SORTE:</strong> Será formado por 8 números, sendo que os 3 primeiros números correspondem à série e os 5 últimos números ao ELEMENTO SORTEÁVEL, conforme exemplo abaixo:</p>
            <p className="pl-4">Exemplo: 123/12.345 = 123(série); 12.345(elemento sorteável).</p>
            
            <p><strong>Data do Sorteio da Loteria Federal:</strong> Caso a Extração da Loteria Federal não venha a ocorrer na data prevista, por qualquer motivo, será considerada para efeitos de apuração do resultado desta Promoção, a data da Extração da Loteria Federal subsequente.</p>
            
            <p className="font-bold">Regra de Apuração da série:</p>
            <p>A definição da série participante se dará a partir dos prêmios da Extração da Loteria Federal, lidos de cima para baixo, por meio da combinação das dezenas simples do primeiro ao terceiro prêmio;</p>
            
            <p><strong>NOTA:</strong> Caso o número de série encontrado (parágrafos anteriores) seja superior à maior série da apuração, deverá ser subtraída a quantidade de séries da apuração, do número de série encontrado, tantas vezes quantas forem necessárias, até que o número obtido esteja dentro do intervalo de séries da apuração. Caso o número de série encontrado seja inferior à menor série da apuração, deverá ser adicionada a quantidade de séries da apuração, do número de série encontrado, tantas vezes quantas forem necessárias, até que o número obtido esteja dentro do intervalo de séries da apuração.</p>
            
            <p className="font-bold">Regra de Apuração do elemento sorteável:</p>
            <p>A definição do elemento sorteável se dará a partir dos prêmios da Extração da Loteria Federal, lidos de cima para baixo, por meio da combinação das unidades simples do primeiro ao quinto prêmio;</p>
            
            <p className="font-bold">Número da sorte contemplado:</p>
            <p>Série apurada seguida do elemento sorteável apurado.</p>
            
            <p className="font-bold">Regra de Apuração dos Contemplados: (por Apuração)</p>
            <p>Para determinação do primeiro participante contemplado, este deve possuir o "Número da sorte" que coincide exatamente com o "Número da Sorte contemplado" e atender aos critérios de participação. Os demais contemplados serão determinados pelos "Elementos sorteáveis" imediatamente posteriores. Um "Número da Sorte" não pode ser contemplado mais de uma vez na mesma apuração;</p>
            
            <p className="font-bold">Aproximação:</p>
            <p>No caso de não ter sido distribuído o "Número da sorte" apurado ou não atenda aos critérios de participação, a determinação do primeiro participante contemplado será o "Elemento sorteável" imediatamente superior, dentro da mesma série, ou, na falta deste, o imediatamente inferior, repetindo-se tal procedimento até que se encontre um "Elemento sorteável" distribuído mais próximo ao apurado com base no resultado da loteria federal. No caso de se alcançar o número sequencial inicial ou final, buscar-se-á apenas os imediatamente superiores e inferiores, respectivamente. Os demais contemplados serão determinados pelos "Elementos sorteáveis" imediatamente posteriores. Um "Número da Sorte" não pode ser contemplado mais de uma vez na mesma apuração. Caso não tenha sido distribuído nenhum "Elemento sorteável" na série apurada, deve-se repetir o procedimento descrito no parágrafo anterior para todas as séries que compõem a apuração, alternadamente para a série imediatamente superior, ou, na falta desta, para a imediatamente inferior. No caso de se alcançar a série inicial ou final, buscar-se-á apenas as imediatamente superiores e inferiores, respectivamente.</p>
            
            <p className="font-bold">Distribuição dos números da sorte:</p>
            <p>A geração e distribuição dos números da sorte devem ser feitas de forma aleatória.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">12 - CRITÉRIOS DE DESCLASSIFICAÇÃO:</h2>
            
            <p>Serão desclassificados desta Promoção:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>as pessoas jurídicas;</li>
              <li>as pessoas físicas sem CPF válidos, menores de 18 anos, e/ou não residentes em território nacional;</li>
              <li>os sócios, diretores e colaboradores da empresa DMA Distribuidora S/A e das empresas envolvidas diretamente na gestão desta Promoção;</li>
              <li>as pessoas que se utilizarem de mecanismos que criem condições irregulares e/ou desleais de participação ou que atentem contra os objetivos e condições de participação desta promoção, podendo ser exigida a apresentação do comprovante de pagamento, dentre outros documentos, nos termos do parágrafo único do art. 46 da Portaria MF nº 41/08; fraude comprovada ou infração ao Regulamento;</li>
              <li>caso não se verifique a veracidade, correção ou presença das informações exigidas para participação regular.</li>
            </ul>
            
            <p>Em quaisquer dos casos de desclassificação verificados após a realização do sorteio e tendo havido a divulgação dos nomes dos contemplados, o valor do prêmio será recolhido ao Tesouro Nacional como renda da União Federal, no prazo de 45 (quarenta e cinco) dias contados do término da Promoção.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">13 - FORMA DE DIVULGAÇÃO DO RESULTADO:</h2>
            
            <p><strong>DIVULGAÇÃO DA PROMOÇÃO:</strong> A divulgação dos nomes dos contemplados e respectivos "Números da Sorte" dar-se-á pela internet, site da promoção e redes sociais, mídia online, materiais de ponto de venda, podendo haver transmissão por rádio e veiculação em mídia impressa.</p>
            
            <p>Os prêmios poderão ser visualizados em imagens ilustrativas, e serão divulgados nas peças de comunicação da campanha. Os contemplados validados serão comunicados sobre a sua contemplação, após sua identificação e validação por telefone e/ou e-mail, conforme os dados constantes do cadastro, no prazo de até 10 (dez) dias após a apuração.</p>
            
            <p>Para dar publicidade e lisura ao processo de promoção, como consequência da conquista do seu prêmio e com fundamento no artigo 7°, inciso IX da Lei 13.709/2018 - Lei Geral de Proteção de Dados, os participantes ganhadores ficam cientes de que terão seus dados pessoais fornecidos no cadastro da campanha divulgados em todos os meios de mídia publicitária utilizados na campanha.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">14 - ENTREGA DOS PRÊMIOS:</h2>
            
            <p>14.1. O prêmio será entregue ao contemplado no prazo máximo de 30 (trinta) dias corridos, contados da data da apuração, sem qualquer ônus,nas dependências da loja onde o contemplado realizou a compra ou,se necessário,em outro local previamente definido pela promotora, mediante apresentação de documento oficial de identificação com CPF.O prêmio será entregue em nome do titular cadastrado no site, sendo pessoal e intrasferível.</p>
            
            <p>14.2. O prêmio não poderá,em hipótese alguma,ser convertido em dinheiro ou trocado por outro produto/serviço.Não caberá ao contemplado ou ao seu /representante legal discuti, modificar ou substituir as condições e características do prêmio</p>
            
            <p>14.3.OS PRÊMIOS SERÃO ENTREGUES AOS GANHADORES PESSOALMENTE, NO ESTRITÓRIO CENTRAL DA PROMOTORA, LOCALIZADA A RODOVIA BR 040, N° 527 - KM 527 - VILA PARIS, CONTAGEM/ MG OU NA LOJA A QUAL O PARTICIPANTE EFETUOU A COMPRA QUE GEROU O "NÚMERO DA SORTE" CONTEMPLADO.</p>
            
            <p>14.4 No ato da entrega do prêmio, o ganhador deverá assinar o Termo de Quitação e Entrega de Prêmio e fornecer cópias de seus documentos pessoais (RG,CPF e comprovante de endereço).O não envio imediato poderá atrasar a entrega,mas permanecerá assegurado ao contemplado o prazo legal de180(cento e oitenta) dias para reclamar  o prêmio,contados da divulgação do resultado.</p>
            
            <p>14.5. O vale-compra deverá ser utilizado exclusivamente nas lojas da rede EPA SUPERMERCADOS, dentro do prazo de validade nele indicado.O não comparecimento do contemplado para reclamar o prêmio no prazo legal de 180(cento e oitenta) dias contados da divulgação do resultado implicará na perda do direito,e o valor correspondente será recolhido ao Tesouro Nacional,como renda da União,nos termos da legislação vigente.</p>
            
            <p>14.6. Em caso de falecimento do contemplado antes da entrega do prêmio, este será entregue ao respectivo espólio, na pessoa de seu inventariante legalmente constituído, no prazo de 180 (cento e oitenta) dias da contemplação, mediante apresentação da documentação pertinente, incluindo o alvará judicial.</p>
            
            <p>14.7. A promotora não se responsabilizará caso o prêmio não possa ser usufruído em virtude dos procedimentos legais decorrentes do inventário.</p>
            
            <p>14.8. CONFORME LEI N° 11.196, DE 21/11/05 ART.70 INCISO 1°, LETRA B, ITEM 2, A PROMOTORA RECOLHERÁ 20% (VINTE POR CENTO) DE IRRF SOBRE O VALOR DE MERCADO DOS PRÊMIOS, ATÉ O 30º DIA UTIL SUBSEQUENTE AO DECÊNDIO DE OCORRÊNCIA DE CADA FATO GERADOR, POR MEIO DE DARF, NA REDE BANCÁRIA, COM CÓDIGO 0916.</p>
            
            <div className="space-y-2">
              <p className="font-bold">14.9. Consentimento para oferta Credsystem</p>
              
              <p>14.9.1. O cliente,ao aderir à promoção, será convidado a optar por receber ou não oferta da empresa Credsystem.Caso manifeste aceite por meio de opt-in,autoriza o compartilhamento de seus dados pessoais com a referida empresa para fins de análise de crédito e oferta de cartão.</p>
              
              <p>14.9.2. O uso dos dados pela Credsystem.Ficará restrito ao prazo máximo de 120(cento e vinte) dias após encerramento da campanha,findo o qual os dados serão eliminados.</p>
              
              <p>14.9.3. A aceitação dessa oferta é facultativa e não condiciona a participação na presente promoção.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">15 - DISPOSIÇÕES GERAIS:</h2>
            
            <p>15.1. Em momento algum, poderá a promotora ser responsabilizada por cadastros perdidos, atrasados, enviados erroneamente, incomplet os, incorretos, inválidos, imprecisos ou, ainda, na falta de energia elétrica, sem exclusão das demais situações decorrentes de caso fortuito ou força maior.</p>
            
            <p>15.2. A promotora não será responsável por problemas dos quais não detenha qualquer controle, tais como falhas ou qualquer impedime nto do Participante em se conectar a internet, não garantindo o acesso ininterrupto, oscilações, interrupções e falhas de transmissão dos serviços de internet, congestionamento na internet, vírus, falha de programação (bugs) ou violação por terceiros (hackers).</p>
            
            <p>15.3. É terminantemente proibida à utilização de sistemas, softwares e outras ferramentas ou métodos automáticos, repetitivos ou programados que criem condições de cadastramento, compra, navegação ou participação, considerada como prática irregular, desleal ou que atente contra os objetivos desta promoção, caso em que, quando comprovado, haverá a exclusão imediata do Participante da Promoção.</p>
            
            <p>15.4. Os Participantes contemplados autorizam, desde já, como consequência da conquista do seu prêmio e em caráter irrevogável e irretratável a utilização, pela promotora e aderente, de seus nomes, imagens e sons de voz em qualquer um dos meios escolhidos para divulgação desta campanha, pelo período de 01 (um) ano, a partir da data do sorteio. Os Participantes autorizam a utilização de seus endereços físicos, eletrônicos, telefones e demais dados informados no ato da inscrição na Promoção com o propósito exclusivo de formação de cadastro, reforço de mídia publicitária e divulgação do evento em referência, desde que não fira o Código de Defesa do Consumidor, sem nenhum ônus para a promotora, sendo que, no entanto, de acordo com o que dispõe o artigo 11 da Portaria MF nº 41/2008, a empresa é expressamente vedada de comercializar ou ceder, ainda que a título gratuito, os dados coletados nesta Promoção.</p>
            
            <p>15.5. As dúvidas e controvérsias originadas de reclamações dos Participantes desta Promoção deverão ser, preliminarmente, dirimidas pela promotora, por meio dos canais de Serviço de Atendimento ao Cliente: site www.epa.com.br/aniversario Whatsapp 31 9 9992-6521 (de segunda – feira a  sexta – feira, DAS 09 H ÀS 17H).</p>
            
            <p>15.6. O Regulamento desta Promoção será disponibilizado no site  www.epa.com.br/aniversario e a participação na Promoção implicam na aceitação total e irrestrita de todos os seus termos e condições e serve como declaração de que o ganhador não tem qualquer embaraço fiscal, legal ou outro que o impeça de receber os prêmios distribuídos.</p>
            
            <p>15.7. Essa Promoção encontra-se de acordo com a legislação vigente (Lei nº 5.768/71, regulamentada pelo Decreto nº 70.951/72) e obteve o Certificado de Autorização expedido pela SPA/ME, cujo número consta no início desse Regulamento.</p>
            
            <p>15.8. As dúvidas, omissões ou controvérsias oriundas dessa Promoção serão dirimidas de forma soberana por uma comissão do EPA Supermercados. Caso não se alcance um consenso após a atuação da comissão, a questão poderá ser submetida à apreciação da SPA/ME. Quaisquer reclamações dos Participantes deverão ser encaminhadas através da página de contato disponível no site www.epa.com.br/aniversario.</p>
            
            <p>15.9. O número do Certificado de Autorização e o Regulamento completo da Promoção constarão de forma clara e precisa no site www.epa.com.br/aniversario para consulta de todos interessados.</p>
            
            <p>15.10. A empresa deverá anexar a Lista de Participantes na aba "Apurações", contendo nomes e números da sorte distribuídos, após o término de cada período de participação e antes da extração da Loteria. O arquivo deverá ser no formato .csv e cada arquivo poderá ter até 15MB.</p>
            
            <p>15.11. As empresas Apple e Google, não são empresas envolvidas nesta Promoção, são meramente empresas que disponibilizam o Software de conexão com o ANIVERSARIOEPA. Toda a responsabilidade da Promoção é da empresa promotora. Esta Promoção está de acordo com a legislação vigente (Lei nº. 5.768/71, regulamentada pelo Decreto 70.951/72 e Portaria MF nº 41/08).</p>
            
            <p>15.12. Além da divulgação acima, os ganhadores enquanto titulares de dados pessoais expressam seu consentimento livre e inequívoco para que a promotora e aderente tratem seus dados pessoais e dados pessoais sensíveis em qualquer um dos meios escolhidos para divulgação desta campanha pelo período de 01 (um) ano, a partir da data do sorteio. Os Participantes autorizam, ainda, a utilização de seus endereços físicos, eletrônicos, telefones e demais dados informados no ato da inscrição na Promoção com o propósito exclusivo de formação de cadastro, reforço de mídia publicitária e divulgação do evento em referência, desde que não fira o Código de Defesa do Consumidor, sem nenhum ônus para a promotora, sendo que, no entanto, de acordo com o que dispõe o artigo 11 da Portaria MF nº 41/2008, a empresa é expressamente vedada de comercializar ou ceder, ainda que a título gratuito, os dados coletados nesta Promoção.</p>
            
            <p>15.13 Os dados coletados nesta Promoção ficarão armazenados até 14 de abril de 2026 e poderão ser utilizados em todas as Promoções que acontecerem até a data informada. Após este período, os dados serão excluídos da base de dados do EPA Supermercados e demais empresas com as quais foram compartilhados para fins de cumprimento das campanhas.</p>
            
            <div className="space-y-2">
              <p className="font-bold">15.14.- DO TRATAMENTO DE DADOS PESSOAIS (LEI 13.709/18 – LGPD)</p>
              
              <p>15.14.1 Os Participantes declaram que tem ciência de que ao participar da Promoção terão seus Dados Pessoais, indicados no item 7, do presente Regulamento tratados pela promotora. Entende-se como tratamento de dados pessoais toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>
              
              <p>15.14.2 . Os Dados Pessoais serão objeto de tratamento pelo EPA Supermercados para o fim exclusivo de desenvolvimento e implementação da Promoção, bem como para fins de relacionamento com o Participante, identificando os Participantes e entrando em contatos com os Participantes contemplados, de modo a possibilitar a entrega do prêmio, e para fins de atendimento a solicitações da SPA. O EPA Supermercados também poderá compartilhar os Dados Pessoais com terceiros que participem do desenvolvimento da Promoção. Ao participar da Promoção, o Participante está ciente do tratamento dos Dados Pessoais para as finalidades informadas e dá o seu consentimento expresso para essas finalidades.</p>
              
              <p>15.14.3 O EPA Supermercados preza pela privacidade dos Participantes e realizará as atividades nos termos previstos na Lei No. 13.709/2018 ("LGPD"). O EPA Supermercados manterá os dados pessoais pelo prazo necessário para o atendimento das finalidades descritas neste Regulamento e adotará as medidas técnicas e organizacionais para garantir a proteção da privacidade dos Participantes e para evitar incidentes de segurança envolvendo os Dados Pessoais. Utilizará os dados pessoais coletados para fins relacionados a presente Promoção, especificamente para a identificação dos Participantes e o posterior contato com os Participantes contemplados, de modo a possibilitar a entrega do prêmio.</p>
              
              <p>15.14.4 . O EPA Supermercados assegurará aos Participantes os direitos previstos na LGPD, a saber: a) Acesso: Ter ciência das informações e Dados Pessoais sobre o Participante, tratado pelo EPA Supermercados. b) Correção: Solicitar a correção dos Dados Pessoais do Participante fornecido, para a participação na Promoção. c) Solicitação de Anonimização, Bloqueio ou Eliminação: Solicitar a anonimização, bloqueio ou eliminação de Dados Pessoais excessivos, desnecessários ou tratados em desconformidade com a LGPD, caso em que conduzirá uma análise para verificar o excesso ou qualquer desconformidade no tratamento de Dados Pessoais e, em caso de confirmação dessa desconformidade, cumprirá com a solicitação efetuada. O direito de eliminação não é irrestrito e o EPA Supermercados informará sobre a sua aplicação ao caso concreto. d) Exclusão do Cadastro: Solicitar a exclusão dos Dados Pessoais.</p>
              
              <p>15.14.5 Neste caso, é possível que alguns Dados Pessoais permaneçam armazenados para cumprimento das obrigações legais ou para exercício dos direitos do EPA Supermercados. e) Revogação do Consentimento: Revogar o consentimento fornecido para o tratamento dos Dados Pessoais, quando o tratamento for realizado com base no consentimento. f) Portabilidade: Solicitar a portabilidade dos Dados Pessoais para outro fornecedor de produtos ou serviços em formato interoperável, como um arquivo txt, quando possível. g) Revisão das decisões automatizadas : Solicitar a revisão de uma decisão exclusivamente automatizada e que afete os seus interesses.</p>
              
              <p>15.14.6.  EPA Supermercados reserva o direito de alterar ou suspender a presente Promoção a qualquer tempo, em caso de força maior ou necessidade, mediante autorização da Secretaria de Acompanhamento Econômico, Advocacia da Concorrência e Competitividade (SEAE) do Ministério da Economia (ME), comprometendo-se a comunicar tal fato, caso ocorra, pelos mesmos meios utilizados para divulgação da Promoção.</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold">15.15 – ENCARREGADO DE DADOS</p>
              <p>Caso o cliente não deseje mais participar da promoção, almeje retirar o consentimento ou queira exercer algum dos direitos previstos na Lei Geral de Proteção de Dados, deverá entrar em contado com o Encarregado de dados pessoais do EPA Supermercados através do e- mail: dpo@grupodma.com.br.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">16 - TERMO DE RESPONSABILIDADE</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Poderá participar da promoção qualquer consumidor que preencha os requisitos estipulados no regulamento da campanha autorizada;</li>
              <li>Os prêmios não poderão ser convertidos em dinheiro;</li>
              <li>É vedada a apuração por meio eletrônico;</li>
              <li>Os prêmios serão entregues em até 30 dias da data da apuração/sorteio, sem qualquer ônus aos contemplados</li>
              <li>Quando o prêmio sorteado, ganho em concurso ou conferido mediante vale-brinde, não for reclamado no prazo de cento e oitenta (180) dias, contados, respectivamente, da data do sorteio, da apuração do resultado do concurso ou do término do prazo da promoção, caducará o direito do respectivo titular e o valor correspondente será recolhido, pela empresa autorizada, ao Tesouro Nacional, como renda da União, no prazo de quarenta e cinco (45) dias;</li>
              <li>Em caso de promoções com participação de menor de idade, sendo este contemplado, deverá, no ato da entrega do prêmio, ser representado por seu responsável legal; à exceção das promoções comerciais realizadas por concessionária ou permissionária de serviço de radiodifusão, nos termos do artigo 1º-A, § 3º, da Lei 5.768, de 20 de dezembro de 1971;</li>
              <li>A divulgação da imagem dos contemplados poderá ser feita até um ano após a apuração da promoção comercial;</li>
              <li>As dúvidas e controvérsias oriundas de reclamações dos participantes serão, primeiramente, dirimidas pela promotora, persistindo-as, estas deverão ser submetidas à SPA/MF;</li>
              <li>Os órgãos locais de defesa do consumidor receberão as reclamações devidamente fundamentadas;</li>
              <li>A prestação de contas deverá ser realizada no prazo máximo de trinta dias após a data de prescrição dos prêmios sob pena de descumprimento do plano de distribuição de prêmios;</li>
              <li>O regulamento deverá ser afixado em lugar de ampla visibilidade e se apresentar em tamanho e em grafia que viabilizem a compreensão e visualização por parte do consumidor participante da promoção comercial;</li>
            </ul>
            
            <p className="mt-4">Além dos termos acima, a promoção comercial deverá obedecer às condições previstas na Lei nº 5.768, de 1971, no Decreto nº 70.951, de 1972, Portaria SEAE nº 7.638, de 2022, Portaria MF nº 67, de 2017, Portaria SECAP nº 20.749 de 2020, e em atos que as complementarem.</p>
            
            <p>Para as modalidades "Sorteio" e "Assemelhada a Sorteio" a empresa deverá anexar a Lista de Participantes na aba "Apurações", contendo nomes e números da sorte distribuídos, após o término de cada período de participação e antes da extração da Loteria. O arquivo deverá ser no formato .csv, .xls ou .zip e cada arquivo poderá ter até 250 MB.</p>
            
            <p>A infringência às cláusulas do Termo de Responsabilidade e do Regulamento constituem descumprimento do plano de operação e ensejam as penalidade previstas no artigo 13 da Lei nº. 5.768, de 1971.</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regulamento;
