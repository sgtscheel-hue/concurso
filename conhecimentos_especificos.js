const banco_esp = [
    {
        id: "esp01",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico Secretariado", materia: "Legislação",
        assunto: "Conhec. Específicos",
        enunciado: "De acordo com a LDB (Lei nº 9.394/1996), a responsabilidade de efetuar a matrícula dos menores na educação básica cabe:",
        a: "Aos diretores de escola.", b: "Aos professores.", c: "Aos pais ou responsáveis.", d: "Ao Conselho Tutelar.", e: "À Secretaria de Educação.",
        correta: "c", comentario: "Art. 6º da LDB: É dever dos pais ou responsáveis efetuar a matrícula das crianças na educação básica a partir dos 4 anos."
    },
    {
        id: "esp02",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico Secretariado", materia: "Redação Oficial",
        assunto: "Conhec. Específicos",
        enunciado: "No âmbito da Redação Oficial, o documento utilizado para comunicações internas entre unidades administrativas de um mesmo órgão é o:",
        a: "Alvará", b: "Atestado", c: "Memorando", d: "Edital", e: "Certidão",
        correta: "c", comentario: "Embora o novo Manual da Presidência unifique sob o termo 'Ofício', em provas de nível técnico a distinção de 'Memorando' para uso interno ainda é frequente."
    },
    {
        id: "esp03",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Técnico", materia: "Arquivo",
        assunto: "Conhec. Específicos",
        enunciado: "O conjunto de documentos de valor histórico, que devem ser preservados definitivamente, compõe o arquivo de:",
        a: "Primeira idade (Corrente).", b: "Segunda idade (Intermediário).", c: "Terceira idade (Permanente).", d: "Arquivo Morto.", e: "Arquivo Setorial.",
        correta: "c", comentario: "Arquivos permanentes (3ª idade) são aqueles de valor histórico e probatório que não podem ser eliminados."
    },
    {
        id: "esp04",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico Secretariado", materia: "ECA",
        assunto: "Conhec. Específicos",
        enunciado: "Segundo o ECA, os dirigentes de estabelecimentos de ensino fundamental devem comunicar ao Conselho Tutelar casos de:",
        a: "Faltas justificadas.", b: "Notas baixas.", c: "Reiteração de faltas injustificadas e de evasão escolar.", d: "Mudança de endereço.", e: "Atrasos eventuais.",
        correta: "c", comentario: "Art. 56 do ECA. O objetivo é garantir a permanência do aluno na escola e combater o abandono."
    },
    {
        id: "esp05",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura", prova: "Secretariado", materia: "Rotinas",
        assunto: "Conhec. Específicos",
        enunciado: "O documento escolar que registra a vida acadêmica do aluno, contendo notas e frequência de toda sua trajetória, chama-se:",
        a: "Livro de Ponto.", b: "Ata de Reunião.", c: "Histórico Escolar.", d: "Diário de Classe.", e: "Requerimento.",
        correta: "c", comentario: "O histórico escolar é o documento oficial que certifica o percurso formativo do estudante."
    },
    {
        id: "esp06",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Administração",
        assunto: "Conhec. Específicos",
        enunciado: "O princípio da administração pública que exige que o ato administrativo seja voltado ao interesse público e não a interesses pessoais é a:",
        a: "Legalidade.", b: "Impessoalidade.", c: "Moralidade.", d: "Publicidade.", e: "Eficiência.",
        correta: "b", comentario: "A impessoalidade impede favorecimentos ou perseguições pessoais no serviço público."
    },
    {
        id: "esp07",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Técnico", materia: "Documentação",
        assunto: "Conhec. Específicos",
        enunciado: "O documento utilizado para registrar as ocorrências e decisões tomadas em uma reunião de conselho de classe é a:",
        a: "Ordem de serviço.", b: "Portaria.", c: "Ata.", d: "Circular.", e: "Relatório.",
        correta: "c", comentario: "Atas são registros fidedignos e formais de reuniões e assembleias."
    },
    {
        id: "esp08",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Informática",
        assunto: "Conhec. Específicos",
        enunciado: "No Microsoft Excel, a funcionalidade utilizada para somar automaticamente um intervalo de células é:",
        a: "AutoTexto.", b: "AutoSoma.", c: "Filtro.", d: "Tabela Dinâmica.", e: "Mesclar.",
        correta: "b", comentario: "A ferramenta AutoSoma permite agilidade no cálculo de planilhas financeiras ou de notas escolares."
    },
    {
        id: "esp09",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Secretariado", materia: "Ética",
        assunto: "Conhec. Específicos",
        enunciado: "Sobre o sigilo profissional na secretaria escolar, é correto afirmar que:",
        a: "Pode-se divulgar informações de alunos em redes sociais.", b: "É dever do técnico manter a guarda de informações sigilosas obtidas no trabalho.", c: "Informações médicas de alunos devem ser coladas no mural da escola.", d: "O sigilo não se aplica a técnicos, apenas a diretores.", e: "Documentos internos podem ser entregues a qualquer pessoa.",
        correta: "b", comentario: "A ética profissional exige a preservação da privacidade dos dados de alunos e funcionários."
    },
    {
        id: "esp10",
        ano: "2024", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "LDB",
        assunto: "Conhec. Específicos",
        enunciado: "O ensino fundamental, segundo a LDB atualizada, tem duração de:",
        a: "5 anos.", b: "8 anos.", c: "9 anos.", d: "10 anos.", e: "12 anos.",
        correta: "c", comentario: "O Ensino Fundamental é obrigatório e gratuito, com duração de 9 anos."
    },
    {
        id: "esp11",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura", prova: "Administrativo", materia: "Atendimento",
        assunto: "Conhec. Específicos",
        enunciado: "No atendimento ao público em uma escola, o técnico deve priorizar:",
        a: "A rapidez, mesmo que com grosseria.", b: "A cordialidade, a clareza e o respeito.", c: "O atendimento apenas a quem ele conhece.", d: "Deixar o telefone tocar sem atender.", e: "Responder apenas por escrito.",
        correta: "b", comentario: "Qualidade no atendimento é pilar da eficiência no serviço público."
    },
    {
        id: "esp12",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Técnico", materia: "Documentação",
        assunto: "Conhec. Específicos",
        enunciado: "O ato de classificar documentos em pastas por ordem alfabética ou numérica é uma técnica de:",
        a: "Protocolo.", b: "Expedição.", c: "Arquivamento.", d: "Eliminação.", e: "Redação.",
        correta: "c", comentario: "O arquivamento organiza o fluxo documental para recuperação rápida da informação."
    },
    {
        id: "esp13",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Relacionamento",
        assunto: "Conhec. Específicos",
        enunciado: "Em uma equipe de secretaria escolar, o trabalho colaborativo visa:",
        a: "Sobrecarregar apenas um funcionário.", b: "O alcance dos objetivos institucionais e harmonia no ambiente.", c: "Competição entre os colegas.", d: "Falar mal da direção.", e: "Ignorar as regras da escola.",
        correta: "b", comentario: "O trabalho em equipe é essencial para o fluxo da gestão democrática."
    },
    {
        id: "esp14",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Informática",
        assunto: "Conhec. Específicos",
        enunciado: "Para enviar um mesmo e-mail para várias pessoas sem que uma veja o endereço da outra, utiliza-se o campo:",
        a: "Assunto.", b: "Para.", c: "Cc (Cópia).", d: "Cco (Cópia Oculta).", e: "Anexo.",
        correta: "d", comentario: "Cco significa Cópia Carbono Oculta, ideal para comunicações em massa respeitando o sigilo."
    },
    {
        id: "esp15",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Técnico", materia: "Protocolo",
        assunto: "Conhec. Específicos",
        enunciado: "O setor responsável pelo recebimento, registro e distribuição de documentos em uma instituição é o:",
        a: "Almoxarifado.", b: "Protocolo.", c: "Arquivo Permanente.", d: "Tesouraria.", e: "Biblioteca.",
        correta: "b", comentario: "O protocolo controla a entrada e saída de processos e papéis oficiais."
    },
    {
        id: "esp16",
        ano: "2024", banca: "IBADE", orgao: "SEDUC", prova: "Técnico", materia: "Legislação",
        assunto: "Conhec. Específicos",
        enunciado: "A Gestão Democrática do ensino público é um princípio previsto na LDB que deve ocorrer na forma da:",
        a: "Vontade exclusiva do Diretor.", b: "Legislação dos respectivos sistemas de ensino.", c: "Decisão dos alunos apenas.", d: "Ordem do Governo Federal apenas.", e: "Sugestão das empresas privadas.",
        correta: "b", comentario: "Art. 3º, VIII da LDB. A gestão democrática deve ser regulamentada por cada estado/município."
    },
    {
        id: "esp17",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Rotinas",
        assunto: "Conhec. Específicos",
        enunciado: "O requerimento é um documento utilizado para:",
        a: "Comunicar uma notícia interna.", b: "Solicitar algo a que se tem direito a uma autoridade.", c: "Punir um funcionário.", d: "Registrar uma ata de nascimento.", e: "Contratar uma empresa.",
        correta: "b", comentario: "É o instrumento para petições de alunos ou servidores junto à direção."
    },
    {
        id: "esp18",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Redação Oficial",
        assunto: "Conhec. Específicos",
        enunciado: "O pronome de tratamento adequado para se dirigir a um Reitor de Universidade em um documento oficial é:",
        a: "Vossa Excelência.", b: "Vossa Senhoria.", c: "Vossa Magnificência.", d: "Vossa Santidade.", e: "Vossa Eminência.",
        correta: "c", comentario: "Magnificência é exclusivo para reitores."
    },
    {
        id: "esp19",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Geral", materia: "Arquivística",
        assunto: "Conhec. Específicos",
        enunciado: "Documentos que perderam o valor administrativo, mas aguardam o prazo de descarte ou guarda permanente, ficam no arquivo:",
        a: "Ativo.", b: "Corrente.", c: "Intermediário.", d: "Digital.", e: "Setorial.",
        correta: "c", comentario: "O arquivo intermediário abriga documentos de uso pouco frequente."
    },
    {
        id: "esp20",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Informática",
        assunto: "Conhec. Específicos",
        enunciado: "Qual atalho é comumente usado no Word para salvar um documento?",
        a: "Ctrl+C.", b: "Ctrl+V.", c: "Ctrl+B.", d: "Ctrl+S.", e: "Ctrl+P.",
        correta: "c", comentario: "No Word em português, Ctrl+B salva. Em softwares internacionais (ou no Windows), pode ser Ctrl+S."
    }
];
