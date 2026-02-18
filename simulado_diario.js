const banco_simulado_novo = [
    {
        id: "SIMU26-001",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO",
        assunto: "Hist e Geo RO",
        enunciado: "Sobre a Estrada de Ferro Madeira-Mamoré (EFMM), é correto afirmar que sua construção foi uma contrapartida brasileira estabelecida em qual documento diplomático?",
        a: "Tratado de Tordesilhas", b: "Tratado de Madri", c: "Tratado de Petrópolis", d: "Tratado de San Ildefonso", e: "Tratado de Ayacucho",
        correta: "c", comentario: "O Tratado de Petrópolis (1903) selou a compra do Acre e obrigou o Brasil a construir a ferrovia."
    },
    {
        id: "SIMU26-002",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO",
        assunto: "Hist e Geo RO",
        enunciado: "O Real Forte Príncipe da Beira, importante marco histórico de Rondônia, localiza-se às margens de qual rio?",
        a: "Rio Madeira", b: "Rio Mamoré", c: "Rio Guaporé", d: "Rio Machado", e: "Rio Jamari",
        correta: "c", comentario: "O Forte Príncipe da Beira está situado na margem direita do Rio Guaporé, no município de Costa Marques."
    },
    {
        id: "SIMU26-003",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO",
        assunto: "Hist e Geo RO",
        enunciado: "Quem foi o primeiro governador do recém-criado Estado de Rondônia, em 1982?",
        a: "Jorge Teixeira de Oliveira", b: "Teodoro Sampaio", c: "Aluízio Ferreira", d: "Cândido Rondon", e: "Jerônimo Santana",
        correta: "a", comentario: "Jorge Teixeira foi o último governador do Território e o primeiro do Estado de Rondônia."
    },
    {
        id: "SIMU26-004",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO",
        assunto: "Hist e Geo RO",
        enunciado: "Qual destes municípios rondonienses é conhecido como a 'Capital do Café'?",
        a: "Vilhena", b: "Cacoal", c: "Ariquemes", d: "Ji-Paraná", e: "Guajará-Mirim",
        correta: "b", comentario: "Cacoal ostenta o título de Capital do Café devido à sua forte tradição e produção cafeeira."
    },
    {
        id: "SIMU26-005",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Português",
        assunto: "Crase",
        enunciado: "Assinale a alternativa onde o uso da crase é OBRIGATÓRIO:",
        a: "Ele foi a pé para a escola.", b: "Entreguei o documento a ela.", c: "Sairemos à uma hora da tarde.", d: "Refiro-me a todas as alunas.", e: "Fomos a uma festa ontem.",
        correta: "c", comentario: "Usa-se crase na indicação de horas exatas."
    },
    {
        id: "SIMU26-006",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática",
        assunto: "Hardware",
        enunciado: "Qual componente é considerado o 'cérebro' do computador, responsável pelo processamento de dados?",
        a: "Memória RAM", b: "SSD", c: "Placa de Vídeo", d: "CPU (Processador)", e: "Fonte de Alimentação",
        correta: "d", comentario: "A CPU (Central Processing Unit) realiza todas as operações lógicas e matemáticas do sistema."
    },
    {
        id: "SIMU26-007",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO",
        assunto: "Hist e Geo RO",
        enunciado: "O ciclo econômico que motivou a primeira grande ocupação da região de Rondônia no final do século XIX foi:",
        a: "Ciclo do Ouro", b: "Ciclo da Soja", c: "Ciclo da Borracha", d: "Ciclo da Cassiterita", e: "Ciclo do Gado",
        correta: "c", comentario: "O primeiro ciclo da borracha trouxe milhares de pessoas para a extração do látex na floresta."
    },
    {
        id: "SIMU26-008",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO",
        assunto: "Hist e Geo RO",
        enunciado: "Qual o ponto culminante (mais alto) do estado de Rondônia?",
        a: "Pico da Neblina", b: "Serra do Pacaás Novos", c: "Pico do Tracoá", d: "Morro do Meio", e: "Chapada dos Parecis",
        correta: "c", comentario: "O Pico do Tracoá, localizado na Serra dos Pacaás Novos, é o ponto mais alto de RO, com cerca de 1.126 metros."
    },
    {
        id: "SIMU26-009",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Português",
        assunto: "Pontuação",
        enunciado: "Marque a frase onde a vírgula está sendo usada para separar um VOCATIVO:",
        a: "Brasília, capital do Brasil, é linda.", b: "Comprei pão, leite e café.", c: "Alunos, prestem atenção na aula!", d: "Cheguei, vi e venci.", e: "Ontem, todos saíram cedo.",
        correta: "c", comentario: "'Alunos' é o chamamento (vocativo), por isso deve ser isolado por vírgula."
    },
    {
        id: "SIMU26-010",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO",
        assunto: "Hist e Geo RO",
        enunciado: "O Território Federal do Guaporé teve seu nome alterado para Território Federal de Rondônia em 1956, em homenagem a:",
        a: "Marechal Cândido Rondon", b: "Presidente Getúlio Vargas", c: "Aluízio Ferreira", d: "Jorge Teixeira", e: "Joaquim de Oliveira Rondônia",
        correta: "a", comentario: "A homenagem foi ao Marechal Rondon pelos seus serviços de exploração e instalação de linhas telegráficas na região."
    }
];
