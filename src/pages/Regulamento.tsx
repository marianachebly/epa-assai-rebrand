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
          <img src={brasaoRepublica} alt="Brasão da República Federativa do Brasil" className="w-32 h-auto" />
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
              <p>Endereço: NOSSA SENHORA DO CARMO Número: 1420 Complemento: ANDAR 7</p>
              <p>Bairro: SAO PEDRO Município: BELO HORIZONTE UF: MG CEP:30330-000</p>
              <p>CNPJ/MF nº: 01.928.075/0001-08</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold">1.2 - Aderentes:</p>
              <p>Razão Social: CRED-SYSTEM SERVICOS DE GESTAO E PROMOCAO DE VENDAS LTDA</p>
              <p>Endereço: RIO NEGRO Número: 161 Complemento: ANDAR: 3; SALA: 303;</p>
              <p>Bairro: ALPHAVILLE INDUSTRIAL Município: BARUERI UF: SP CEP:06454-000</p>
              <p>CNPJ/MF nº:08.517.118/0001-01</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">2 - MODALIDADE DA PROMOÇÃO:</h2>
            <p>Assemelhada a Sorteio</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">3 - ÁREA DE ABRANGÊNCIA:</h2>
            <p>Alfenas/MG Belo Horizonte/MG Betim/MG Carandaí/MG Congonhas/MG Conselheiro Lafaiete/MG Contagem/MG Governador Valadares/MG Itabirito/MG Itaúna/MG João Monlevade/MG Lagoa Santa/MG Nanuque/MG Nova Lima/MG Ouro Branco/MG Ouro Preto/MG Pedro Leopoldo/MG Ponte Nova/MG Ribeirão das Neves/MG Sabará/MG Santa Luzia/MG Santa Rita do Sapucaí/MG Santos Dumont/MG Sete Lagoas/MG Teófilo Otoni/MG Vespasiano/MG</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">4 - PERÍODO DA PROMOÇÃO:</h2>
            <p>13/10/2025 a 27/11/2025</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-primary">5 - PERÍODO DE PARTICIPAÇÃO:</h2>
            <p>13/10/2025 a 15/11/2025</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">6 - CRITÉRIO DE PARTICIPAÇÃO:</h2>
            <p>6.1. Esta promoção é realizada pela empresa DMA Distribuidora S/A, inscrita no CNPJ/MF sob nº 01.928.075/0001-08, com sede na Av. Nossa Senhora do Carmo, nº 1.420, 7º andar – Bairro São Pedro – Belo Horizonte/MG, válida exclusivamente para as lojas do EPA SUPERMERCADOS localizadas no estado de Minas Gerais.</p>
            
            <p>6.1.1. Poderão participar da presente promoção os consumidores, pessoas físicas, maiores de 18 (dezoito) anos, com CPF válido, residentes e domiciliados em território nacional, que adquirirem quaisquer produtos comercializados nas lojas do EPA SUPERMERCADOS, observadas as vedações legais, no período compreendido entre 13/10/2025 a 15/11/2025, ou até o esgotamento dos Números da Sorte.</p>
            
            <p>6.2. Caso as séries de Números da Sorte destinadas ao sorteio da presente promoção se esgotem antes da data prevista para o seu término, a participação será considerada encerrada antecipadamente.</p>
            
            <p>6.3. Para participar, o interessado deverá ler e aceitar todos os termos deste regulamento, ficando ciente de que, ao realizar o seu cadastro, estará concordando expressamente com as condições aqui estabelecidas. O consumidor que não concordar não poderá participar.</p>
            
            <div className="pl-4 space-y-2">
              <p>6.4. Para a participação válida, será necessário:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizar compras nas lojas físicas do EPA SUPERMERCADOS, no valor mínimo de R$ 100,00 (cem reais);</li>
                <li>Informar o CPF no caixa, no início da compra;</li>
                <li>Efetuar o cadastro completo e correto no site www.epa.com.br/aniversario ou no aplicativo ANIVERSARIOEPA;</li>
                <li>Receber o Número da Sorte no site ou aplicativo, para concorrer aos prêmios do sorteio.</li>
              </ul>
            </div>
            
            <div className="pl-4 space-y-2">
              <p>6.5. Não poderão participar desta promoção:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pessoas jurídicas e cadastros realizados com CNPJ;</li>
                <li>Pessoas físicas sem CPF ou com CPF inválido;</li>
                <li>Menores de 18 anos;</li>
                <li>Não residentes em território nacional;</li>
                <li>Sócios, diretores e funcionários da empresa promotora DMA Distribuidora S/A, bem como funcionários das empresas diretamente envolvidas na promoção, dentre as quais Polypromo.Com Ltda, da Bnex e Credsystem, e demais empresas contratadas para sua operacionalização.</li>
              </ul>
            </div>
            
            <p className="font-bold">6.6 - MECÂNICA DE PARTICIPAÇÃO:</p>
            
            <p>6.6.1. Poderão participar desta promoção os consumidores que, após realizarem compras em uma das lojas físicas do EPA SUPERMERCADOS, nas condições previstas neste regulamento, efetuarem seu cadastro no site www.epa.com.br/aniversario ou no aplicativo ANIVERSARIOEPA, informando corretamente os seguintes dados: nome completo, endereço completo, sexo, CPF, estado civil, telefone celular, data de nascimento, e-mail e senha, dentro do período de 13/10/2025 a 15/11/2025.</p>
            
            <p className="font-bold">6.6.2. O ATO DE DIGITAR O CPF NO MOMENTO DA COMPRA É CONDIÇÃO NECESSÁRIA, MAS NÃO SUFICIENTE PARA PARTICIPAÇÃO. A ATRIBUIÇÃO DO NÚMERO DA SORTE SOMENTE OCORRERÁ APÓS A CONCLUSÃO DO CADASTRO COMPLETO E VÁLIDO DO PARTICIPANTE, BEM COMO DO EFETIVO PROCESSAMENTO DA VENDA. CASO, NO MOMENTO DO PROCESSAMENTO, AS SÉRIES DE NÚMEROS DA SORTE JÁ ESTEJAM ESGOTADAS OU O PERÍODO DA PROMOÇÃO ENCERRADO, NÃO SERÁ POSSÍVEL A ATRIBUIÇÃO DO NÚMERO DA SORTE.</p>
            
            <p>6.6.3. A cada R$ 100,00 (cem reais) em compras e seus múltiplos, nas lojas físicas do EPA SUPERMERCADOS, no período de 13/10/2025 a 15/11/2025, o participante receberá 1 (um) Número da Sorte. Efetuando o pagamento com o CARTÃO FÁCIL, o cliente receberá Números da Sorte em DOBRO.</p>
            
            <p>6.6.4. Havendo saldo no valor da compra que não complete os múltiplos de R$ 100,00 (cem reais), este saldo será acumulado e/ou somado ao saldo de outra compra, desde que realizadas dentro do período da promoção.</p>
            
            <p>6.6.5. Não serão considerados, para efeito de participação, os valores relativos à aquisição de produtos vedados pelo art. 10 do Decreto nº 70.951/72, quais sejam: armas e munições, explosivos, fogos de artifício ou de estampido, medicamentos, bebidas alcoólicas (teor alcoólico acima de 13ºGL), fumo e seus derivados.</p>
            
            <p>6.6.6. No ato da inscrição, os participantes declaram que leram e concordaram com este regulamento e com a Política de Uso de Dados, autorizando expressamente o uso gratuito de seus dados para as finalidades de execução da promoção.</p>
            
            <p>6.6.7. Os Números da Sorte serão gerados em até 72 (setenta e duas) horas contadas da data da compra e disponibilizados ao participante no site ou aplicativo, até 48 (quarenta e oito) horas antes da extração da Loteria Federal.</p>
            
            <p>6.6.8. O cadastramento incompleto, irregular, com dados incorretos ou sem a devida aceitação dos termos impedirá a participação do consumidor.</p>
            
            <p>6.6.9. Somente serão aceitas, para participar desta promoção, as compras que possuírem emissão de Nota/Cupom fiscal dentro do período de participação.</p>
            
            <p>6.6.10. É responsabilidade do participante manter seus dados atualizados, sob pena de não ser localizado em caso de contemplação.</p>
            
            <p>6.6.11. A promotora reserva-se o direito de verificar a veracidade dos dados, sendo desclassificados aqueles que apresentarem informações falsas, incorretas ou incompletas.</p>
            
            <p>6.6.12. As premiações serão realizadas mediante sorteio, vinculado à extração da Loteria Federal, do dia 22/11/2025, por meio das redes sociais do EPA SUPERMERCADOS e de banners informativos nas lojas participantes.</p>
            
            <p>6.6.14. Os CPFs e as respectivas compras identificadas que não tiverem o cadastro devidamente efetivado e validado, conforme previsto neste regulamento, serão automaticamente excluídos da base de dados da campanha no prazo de até 10 (dez) dias corridos contados do encerramento da promoção.</p>
            
            <p>6.6.15. O Número da Sorte ficará disponível para consulta do participante no site e/ou aplicativo ANIVERSARIOEPA pelo prazo de até 05 (cinco) dias corridos após a data do término da promoção.</p>
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
            <p><strong>DATA:</strong> 27/11/2025 15:00</p>
            <p><strong>PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO:</strong> 13/10/2025 06:00 a 15/11/2025 23:59</p>
            <p><strong>DATA DO SORTEIO DA LOTERIA FEDERAL:</strong> 22/11/2025</p>
            <p><strong>ENDEREÇO DA APURAÇÃO:</strong> Avenida Nossa Senhora do Carmo NÚMERO: 1420 COMPLEMENTO: SLJ 7º andar BAIRRO: SÃO PEDRO MUNICÍPIO: Belo Horizonte UF: MG CEP: 30330-000</p>
            <p><strong>LOCAL DA APURAÇÃO:</strong> no site www.epa.com.br/aniversario e no aplicativo ANIVERSARIOEPA</p>
            
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
            <p>No caso de não ter sido distribuído o "Número da sorte" apurado ou não atenda aos critérios de participação, a determinação do primeiro participante contemplado será o "Elemento sorteável" imediatamente superior, dentro da mesma série, ou, na falta deste, o imediatamente inferior, repetindo-se tal procedimento até que se encontre um "Elemento sorteável" distribuído mais próximo ao apurado com base no resultado da loteria federal. No caso de se alcançar o número sequencial inicial ou final, buscar-se-á apenas os imediatamente superiores e inferiores, respectivamente.</p>
            
            <p>Os demais contemplados serão determinados pelos "Elementos sorteáveis" imediatamente posteriores. Um "Número da Sorte" não pode ser contemplado mais de uma vez na mesma apuração.</p>
            
            <p>Caso não tenha sido distribuído nenhum "Elemento sorteável" na série apurada, deve-se repetir o procedimento descrito no parágrafo anterior para todas as séries que compõem a apuração, alternadamente para a série imediatamente superior, ou, na falta desta, para a imediatamente inferior. No caso de se alcançar a série inicial ou final, buscar-se-á apenas as imediatamente superiores e inferiores, respectivamente.</p>
            
            <p className="font-bold">Distribuição dos números da sorte:</p>
            <p>A geração e distribuição dos números da sorte devem ser feitas de forma aleatória.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">12 - CRITÉRIOS DE DESCLASSIFICAÇÃO:</h2>
            
            <p>12.1. Em caso de fraude comprovada, indícios de fraude ou infração a qualquer item deste regulamento, o participante será automaticamente desclassificado, sendo o seu Número da Sorte considerado como "não distribuído" para fins de sorteio e/ou premiação. Nesta hipótese, será identificado novo contemplado, conforme as regras de apuração.</p>
            
            <p>12.2. Caso não se confirme a veracidade, a correção ou a presença das informações exigidas para participação ou, ainda, se o contemplado não apresentar os documentos solicitados no prazo de 72 (setenta e duas) horas contadas do contato efetivo da promotora, perderá o direito ao prêmio. Nessa situação, o Número da Sorte será considerado como "não distribuído", e o prêmio será destinado a outro participante, conforme este regulamento.</p>
            
            <p>12.3. Serão igualmente desclassificados os participantes que utilizarem mecanismos irregulares e/ou desleais ou que atentem contra os objetivos da promoção. A promotora poderá exigir a apresentação do comprovante fiscal da compra, bem como de outros documentos, nos termos do parágrafo único do art. 46 da Portaria MF nº 41/08.</p>
            
            <div className="pl-4 space-y-2">
              <p>12.4. Não poderão participar:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pessoas jurídicas e cadastros realizados com CNPJ;</li>
                <li>Pessoas físicas sem CPF válido, menores de 18 anos e/ou não residentes em território nacional;</li>
                <li>Sócios, diretores e colaboradores da empresa DMA Distribuidora S/A, bem como das demais empresas diretamente envolvidas na gestão desta promoção, incluindo agências de publicidade, promoção e empresas contratadas para operacionalização;</li>
                <li>Participantes que não apresentarem, quando solicitado, a Nota Fiscal/Cupom Fiscal correspondente às corretas cadastradas;</li>
                <li>Participantes cujas informações não sejam verídicas, corretas ou completas.</li>
              </ul>
            </div>
            
            <p>12.5. Em qualquer das hipóteses de desclassificação previstas neste regulamento, constatadas antes, durante ou após a apuração, o Número da Sorte será considerado "não distribuído", sendo identificado novo ganhador, conforme a regra de aproximação estabelecida.</p>
            
            <p>12.6. Caso a desclassificação ocorra após a divulgação do nome do contemplado, o valor correspondente ao prêmio será recolhido ao Tesouro Nacional, como renda da União, no prazo de até 45 (quarenta e cinco) dias contados do encerramento da promoção, conforme legislação aplicável.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">13 - FORMA DE DIVULGAÇÃO DO RESULTADO:</h2>
            
            <p>13.1. A divulgação do resultado dos contemplados será realizada pela internet, no aplicativo ANIVERSARIOEPA, bem como em redes sociais e mídia online, podendo ainda ocorrer divulgação complementar por rádio e televisão, no prazo de até 48 (quarenta e oito) horas após a data do sorteio da Loteria Federal, pelo período mínimo de 05 (cinco) dias consecutivos.</p>
            
            <p>13.2. Os Números da Sorte contemplados serão divulgados juntamente com os nomes dos respectivos ganhadores. Além disso, os contemplados serão comunicados individualmente pela promotora, por meio de telefone e/ou e-mail cadastrados no momento da inscrição, no prazo máximo de 10 (dez) dias contados da apuração.</p>
            
            <p>13.3. Em observância à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/18 – LGPD), somente serão divulgados dados estritamente necessários à identificação dos ganhadores.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">14 - ENTREGA DOS PRÊMIOS:</h2>
            
            <p>14.1. O prêmio será entregue ao contemplado no prazo máximo de 30 (trinta) dias corridos, contados da data da apuração, sem qualquer ônus, nas dependências da loja onde o contemplado realizou a compra ou, se necessário, em outro local previamente definido pela promotora, mediante apresentação de documento oficial de identificação com CPF. O prêmio será entregue em nome do titular cadastrado no aplicativo, sendo pessoal e intrasferível.</p>
            
            <p>14.2. O prêmio não poderá, em hipótese alguma, ser convertido em dinheiro ou trocado por outro produto/serviço. Não caberá ao contemplado ou ao seu /representante legal discuti, modificar ou substituir as condições e características do prêmio.</p>
            
            <p>14.3. OS PRÊMIOS SERÃO ENTREGUES AOS GANHADORES PESSOALMENTE, NO ESTRITÓRIO CENTRAL DA PROMOTORA, LOCALIZADA A RODOVIA BR 040, N° 527 - KM 527 - VILA PARIS, CONTAGEM/ MG OU NA LOJA A QUAL O PARTICIPANTE EFETUOU A COMPRA QUE GEROU O "NÚMERO DA SORTE" CONTEMPLADO.</p>
            
            <p>14.4. No ato da entrega do prêmio, o ganhador deverá assinar o Termo de Quitação e Entrega de Prêmio e fornecer cópias de seus documentos pessoais (RG, CPF e comprovante de endereço). O não envio imediato poderá atrasar a entrega, mas permanecerá assegurado ao contemplado o prazo legal de 180 (cento e oitenta) dias para reclamar o prêmio, contados da divulgação do resultado.</p>
            
            <p>14.5. O vale-compra deverá ser utilizado exclusivamente nas lojas da rede EPA SUPERMERCADOS, dentro do prazo de validade nele indicado. O não comparecimento do contemplado para reclamar o prêmio no prazo legal de 180 (cento e oitenta) dias contados da divulgação do resultado implicará na perda do direito, e o valor correspondente será recolhido ao Tesouro Nacional, como renda da União, nos termos da legislação vigente.</p>
            
            <p>14.6. Em caso de falecimento do contemplado antes da entrega do prêmio, este será entregue ao respectivo espólio, na pessoa de seu inventariante legalmente constituído, no prazo de 180 (cento e oitenta) dias da contemplação, mediante apresentação da documentação pertinente, incluindo o alvará judicial.</p>
            
            <p>14.7. A promotora não se responsabilizará caso o prêmio não possa ser usufruído em virtude dos procedimentos legais decorrentes do inventário.</p>
            
            <p>14.8. IMPOSTO DE RENDA: Conforme Lei nº 11.196/2005, art. 70, inciso 1º, alínea "b", item 2, a promotora recolherá 20% (vinte por cento) de IRRF sobre o valor da nota fiscal de compra dos prêmios, até o 30º dia útil subsequente ao decêndio de ocorrência de cada fato gerador, por meio de DARF, na rede bancária, sob o código 0916.</p>
            
            <div className="space-y-2">
              <p className="font-bold">14.9. Consentimento para oferta Credsystem</p>
              <p>14.9.1. O cliente, ao aderir à promoção, será convidado a optar por receber ou não oferta da empresa Credsystem. Caso manifeste aceite por meio de opt-in, autoriza o compartilhamento de seus dados pessoais com a referida empresa para fins de análise de crédito e oferta de cartão.</p>
              <p>14.9.2. O uso dos dados pela Credsystem. Ficará restrito ao prazo máximo de 120 (cento e vinte) dias após encerramento da campanha, findo o qual os dados serão eliminados.</p>
              <p>14.9.3. A aceitação dessa oferta é facultativa e não condiciona a participação na presente promoção.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">15 - DISPOSIÇÕES GERAIS:</h2>
            
            <p>15.1. Em momento algum, poderá a promotora ser responsabilizada por cadastros perdidos, atrasados, enviados erroneamente, incompletos, incorretos, inválidos, imprecisos, ou ainda por falhas decorrentes de caso fortuito ou força maior.</p>
            
            <p>15.2. A promotora não será responsável por problemas dos quais não detenha controle, tais como falhas de acesso à internet, instabilidade de conexão, congestionamento de rede, vírus, bugs ou ações de hackers.</p>
            
            <p>15.3. É terminantemente proibida à utilização de sistemas, softwares ou outros métodos automáticos que criem condições de cadastramento, compra ou participação irregulares, sob pena de exclusão imediata do participante da promoção.</p>
            
            <p>15.4. Os participantes contemplados autorizam, em caráter gratuito, irrevogável e irretratável, a utilização de seus nomes, imagens e vozes, em qualquer meio escolhido para divulgação desta promoção, pelo período de 01 (um) ano contado da data do sorteio, sem qualquer ônus.</p>
            
            <p>15.5. O regulamento completo ficará disponível no site www.epa.com.br/aniversario, no aplicativo, bem como em versão impressa nas lojas participantes, para consulta de todos os interessados.</p>
            
            <p>15.6. Os canais de atendimento ao consumidor serão: site www.epa.com.br/aniversario e telefone 0800-591-5640 (segunda a sexta, das 09h às 17h)</p>
            
            <p>15.7. Esta promoção está de acordo com a legislação vigente (Lei nº 5.768/71, regulamentada pelo Decreto nº 70.951/72) e será executada mediante prévia autorização da Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF), consignada no respectivo Certificado de Autorização.</p>
            
            <p>15.8. As dúvidas e controvérsias originadas de reclamações dos participantes serão, preliminarmente, dirimidas pele promotora. Persistindo, deverão ser submetidas à Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/ME), cuja decisão terá caráter final e vinculante.</p>
            
            <p>15.9. O número do Certificado de Autorização e o regulamento completo constarão de forma clara e precisa no site www.epa.com.br/aniversario para consulta de todos interessados.</p>
            
            <p>15.10. Fica eleito o foro da Comarca de Belo Horizonte/MG, sede da promotora, para dirimir quaisquer questões oriundas deste regulamento.</p>
            
            <p>15.11. A distribuição dos Números da Sorte será feita de forma aleatória, equitativa e concomitante, assegurando iguais oportunidades de participação a todos os consumidores.</p>
            
            <p>15.12. As empresas Apple e Google, não são empresas envolvidas nesta promoção, são meramente empresas que disponibilizam o Software de conexão com o ANIVERSARIOEPA. Toda a responsabilidade da promoção é da empresa promotora. Esta promoção está de acordo com a legislação vigente (Lei nº. 5.768/71, regulamentada pelo Decreto 70.951/72 e Portaria MF nº 41/08).</p>
            
            <p>15.13. O número do Certificado de Autorização e o regulamento completo constarão de forma clara e precisa no site www.epa.com.br/aniversario.</p>
            
            <div className="space-y-2">
              <p className="font-bold">15.14. DO TRATAMENTO DE DADOS PESSOAIS (LEI 13.709/18 – LGPD)</p>
              
              <p>15.14.1. Os participantes declaram que tem ciência de que ao participar da promoção terão seus Dados Pessoais, indicados no item 7, do presente regulamento tratados pela promotora. Entende-se como tratamento de dados pessoais toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>
              
              <p>15.14.2. Os Dados Pessoais serão objeto de tratamento pelo EPA SUPERMERCADOS para o fim exclusivo de desenvolvimento e implementação da promoção, bem como para fins de relacionamento com o participante, identificando os participantes e entrando em contatos com os participantes contemplados, de modo a possibilitar a entrega do prêmio, e para fins de atendimento a solicitações da SPA. O EPA SUPERMERCADOS também poderá compartilhar os Dados Pessoais com terceiros que participem do desenvolvimento da promoção. Ao participar da promoção, o participante está ciente do tratamento dos Dados Pessoais para as finalidades informadas e dá o seu consentimento expresso para essas finalidades.</p>
              
              <p>15.14.3. O EPA SUPERMERCADOS preza pela privacidade dos participantes e realizará as atividades nos termos previstos na Lei No. 13.709/2018 ("LGPD"). O EPA SUPERMERCADOS manterá os dados pessoais pelo prazo necessário para o atendimento das finalidades descritas neste regulamento e adotará as medidas técnicas e organizacionais para garantir a proteção da privacidade dos participantes e para evitar incidentes de segurança envolvendo os Dados Pessoais. Utilizará os dados pessoais coletados para fins relacionados a presente promoção, especificamente para a identificação dos participantes e o posterior contato com os participantes contemplados, de modo a possibilitar a entrega do prêmio.</p>
              
              <p>15.14.4. O EPA SUPERMERCADOS assegurará aos participantes os direitos previstos na LGPD, a saber: a) Acesso: Ter ciência das informações e Dados Pessoais sobre o Participante, tratado pelo EPA Supermercados. b) Correção: Solicitar a correção dos Dados Pessoais do Participante fornecido, para a participação na Promoção. c) Solicitação de Anonimização, Bloqueio ou Eliminação: Solicitar a anonimização, bloqueio ou eliminação de Dados Pessoais excessivos, desnecessários ou tratados em desconformidade com a LGPD, caso em que conduzirá uma análise para verificar o excesso ou qualquer desconformidade no tratamento de Dados Pessoais e, em caso de confirmação dessa desconformidade, cumprirá com a solicitação efetuada. O direito de eliminação não é irrestrito e o EPA SUPERMERCADOS informará sobre a sua aplicação ao caso concreto. d) Exclusão do Cadastro: Solicitar a exclusão dos Dados Pessoais.</p>
              
              <p>15.14.5. Neste caso, é possível que alguns Dados Pessoais permaneçam armazenados para cumprimento das obrigações legais ou para exercício dos direitos do EPA SUPERMERCADOS. e) Revogação do Consentimento: Revogar o consentimento fornecido para o tratamento dos Dados Pessoais, quando o tratamento for realizado com base no consentimento. f) Portabilidade: Solicitar a portabilidade dos Dados Pessoais para outro fornecedor de produtos ou serviços em formato interoperável, como um arquivo txt, quando possível. g) Revisão das decisões automatizadas: Solicitar a revisão de uma decisão exclusivamente automatizada e que afete os seus interesses.</p>
              
              <p>15.14.6. O EPA SUPERMERCADOS reserva o direito de alterar ou suspender a presente promoção a qualquer tempo, em caso de força maior ou necessidade, mediante autorização da Secretaria de Acompanhamento Econômico, Advocacia da Concorrência e Competitividade (SEAE) do Ministério da Economia (ME), comprometendo-se a comunicar tal fato, caso ocorra, pelos mesmos meios utilizados para divulgação da Promoção.</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold">15.15. ENCARREGADO DE DADOS</p>
              <p>Caso o cliente não deseje mais participar da promoção, almeje retirar o consentimento ou queira exercer algum dos direitos previstos na Lei Geral de Proteção de Dados, deverá entrar em contado com o Encarregado de dados pessoais do EPA Supermercados através do e-mail: dpo@grupodma.com.br.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-primary">16 - TERMO DE RESPONSABILIDADE</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Poderá participar da promoção qualquer consumidor que preencha os requisitos estipulados no regulamento da campanha autorizada;</li>
              <li>Os prêmios não poderão ser convertidos em dinheiro;</li>
              <li>É vedada a apuração por meio eletrônico;</li>
              <li>Os prêmios serão entregues em até 30 dias da data da apuração/sorteio, sem qualquer ônus aos contemplados;</li>
              <li>Quando o prêmio sorteado, ganho em concurso ou conferido mediante vale-brinde, não for reclamado no prazo de cento e oitenta (180) dias, contados, respectivamente, da data do sorteio, da apuração do resultado do concurso ou do término do prazo da promoção, caducará o direito do respectivo titular e o valor correspondente será recolhido, pela empresa autorizada, ao Tesouro Nacional, como renda da União, no prazo de quarenta e cinco (45) dias;</li>
              <li>Em caso de promoções com participação de menor de idade, sendo este contemplado, deverá, no ato da entrega do prêmio, ser representado por seu responsável legal; à exceção das promoções comerciais realizadas por concessionária ou permissionária de serviço de radiodifusão, nos termos do artigo 1º-A, § 3º, da Lei 5.768, de 20 de dezembro de 1971;</li>
              <li>A divulgação da imagem dos contemplados poderá ser feita até um ano após a apuração da promoção comercial;</li>
              <li>As dúvidas e controvérsias oriundas de reclamações dos participantes serão, primeiramente, dirimidas pela promotora, persistindo-as, estas deverão ser submetidas à SPA/MF;</li>
              <li>Os órgãos locais de defesa do consumidor receberão as reclamações devidamente fundamentadas;</li>
              <li>A prestação de contas deverá ser realizada no prazo máximo de trinta dias após a data de prescrição dos prêmios sob pena de descumprimento do plano de distribuição de prêmios;</li>
              <li>O regulamento deverá ser afixado em lugar de ampla visibilidade e se apresentar em tamanho e em grafia que viabilizem a compreensão e visualização por parte do consumidor.</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regulamento;
