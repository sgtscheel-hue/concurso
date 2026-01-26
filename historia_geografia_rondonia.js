const banco_ro = [
    {
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Geral", materia: "História de RO",
        enunciado: "A construção da Estrada de Ferro Madeira-Mamoré (EFMM) foi motivada principalmente por qual tratado internacional?",
        a: "Tratado de Tordesilhas",
        b: "Tratado de Madri",
        c: "Tratado de Petrópolis",
        d: "Tratado de Badajós",
        e: "Tratado de Ayacucho",
        correta: "c", comentario: "O Tratado de Petrópolis (1903) formalizou a anexação do Acre ao Brasil, com o compromisso de construir a ferrovia."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Governo-RO", prova: "Oficial", materia: "Geografia de RO",
        enunciado: "Qual é o principal rio que banha a capital, Porto Velho, e abriga importantes usinas hidrelétricas?",
        a: "Rio Guaporé",
        b: "Rio Mamoré",
        c: "Rio Machado",
        d: "Rio Madeira",
        e: "Rio Ji-Paraná",
        correta: "d", comentario: "O Rio Madeira é o principal eixo fluvial e abriga as usinas de Jirau e Santo Antônio."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Técnico", materia: "História de RO",
        enunciado: "O Território Federal do Guaporé foi criado em 1943, durante o governo de Getúlio Vargas. Em 1956, seu nome foi alterado em homenagem a:",
        a: "Marechal Rondon",
        b: "Aluízio Ferreira",
        c: "Teodoro Roosevelt",
        d: "Jorge Teixeira",
        e: "Chico Mendes",
        correta: "a", comentario: "Em 1956, o território passou a se chamar Rondônia em homenagem a Cândido Mariano da Silva Rondon."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "Estado-RO", prova: "Educação", materia: "Geografia de RO",
        enunciado: "Rondônia faz fronteira internacional com qual país?",
        a: "Peru",
        b: "Bolívia",
        c: "Colômbia",
        d: "Paraguai",
        e: "Venezuela",
        correta: "b", comentario: "O estado de Rondônia possui uma extensa fronteira a oeste e sudoeste com a Bolívia."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "Câmara", prova: "Geral", materia: "História de RO",
        enunciado: "Quem foi o primeiro governador do Estado de Rondônia, após sua elevação de território a estado em 1981?",
        a: "Aluízio Ferreira",
        b: "Jorge Teixeira de Oliveira",
        c: "Jerônimo Santana",
        d: "Osvaldo Piana",
        e: "Ivo Cassol",
        correta: "b", comentario: "Coronel Jorge Teixeira foi o último governador do território e o primeiro do estado."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Professor", materia: "Geografia de RO",
        enunciado: "A economia de Rondônia, a partir da década de 1970, foi impulsionada por qual fenômeno social e econômico?",
        a: "Extração de Petróleo",
        b: "Ciclo da Borracha",
        c: "Projetos de Colonização Agrícola",
        d: "Indústria de Tecnologia",
        e: "Turismo de Neve",
        correta: "c", comentario: "Os projetos do INCRA atraíram milhares de migrantes das regiões Sul e Sudeste para o estado."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Geral", prova: "Técnico", materia: "Geografia de RO",
        enunciado: "Qual rodovia federal é a principal espinha dorsal de Rondônia, ligando Porto Velho a Cuiabá?",
        a: "BR-364",
        b: "BR-230",
        c: "BR-319",
        d: "BR-429",
        e: "BR-101",
        correta: "a", comentario: "A BR-364 é a principal via de escoamento da produção e integração do estado."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "SEDUC", prova: "Administrativo", materia: "História de RO",
        enunciado: "Sobre o Forte Príncipe da Beira, assinale a alternativa correta:",
        a: "Foi construído para proteger a fronteira contra incursões francesas.",
        b: "Localiza-se às margens do Rio Guaporé.",
        c: "Foi a primeira capital do território.",
        d: "É uma construção recente do século XX.",
        e: "Foi destruído durante a Guerra do Paraguai.",
        correta: "b", comentario: "O Forte Príncipe da Beira é uma das maiores fortificações portuguesas fora da Europa, no Rio Guaporé."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Oficial", materia: "Geografia de RO",
        enunciado: "O bioma predominante no estado de Rondônia é:",
        a: "Cerrado",
        b: "Pantanal",
        c: "Caatinga",
        d: "Amazônico",
        e: "Mata Atlântica",
        correta: "d", comentario: "Rondônia integra a Amazônia Legal e possui a Floresta Amazônica como bioma nativo principal."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Geral", prova: "Oficial", materia: "História de RO",
        enunciado: "O ciclo econômico que trouxe os 'Soldados da Borracha' para a região ocorreu durante:",
        a: "A Primeira Guerra Mundial",
        b: "A Segunda Guerra Mundial",
        c: "O Império de Dom Pedro II",
        d: "A Ditadura Militar",
        e: "O Ciclo do Ouro",
        correta: "b", comentario: "O segundo ciclo da borracha (1942-1945) ocorreu para suprir os aliados na 2ª Guerra Mundial."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "Estado-RO", prova: "Nível Médio", materia: "Geografia de RO",
        enunciado: "Qual cidade rondoniense é conhecida como a 'Capital do Café' no estado?",
        a: "Porto Velho",
        b: "Cacoal",
        c: "Vilhena",
        d: "Ariquemes",
        e: "Guajará-Mirim",
        correta: "b", comentario: "Cacoal destaca-se historicamente e economicamente pela produção de café."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Geral", materia: "História de RO",
        enunciado: "A fundação de Porto Velho está diretamente ligada a qual obra de infraestrutura?",
        a: "Construção da Usina de Samuel",
        b: "Construção da Estrada de Ferro Madeira-Mamoré",
        c: "Pavimentação da Transamazônica",
        d: "Criação do Porto Graneleiro",
        e: "Abertura da BR-364",
        correta: "b", comentario: "Porto Velho surgiu como um ponto de apoio e logística para a construção da ferrovia EFMM."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "Prefeitura", prova: "Saúde", materia: "Geografia de RO",
        enunciado: "Rondônia apresenta um clima do tipo:",
        a: "Semiárido",
        b: "Temperado",
        c: "Equatorial Quente e Úmido",
        d: "Subtropical",
        e: "Desértico",
        correta: "c", comentario: "Como estado amazônico, predomina o clima equatorial com altas temperaturas e chuvas abundantes."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Câmara", prova: "Técnico", materia: "História de RO",
        enunciado: "O Marechal Rondon ficou famoso na região por qual atividade principal?",
        a: "Garimpo de ouro",
        b: "Comando de tropas na Revolução Acreana",
        c: "Instalação de linhas telegráficas",
        d: "Governador do Território",
        e: "Construção de hospitais",
        correta: "c", comentario: "A Comissão Rondon instalou linhas telegráficas que integraram o Mato Grosso ao Amazonas."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Geral", prova: "Superior", materia: "Geografia de RO",
        enunciado: "Qual desses municípios localiza-se na região do 'Cone Sul' de Rondônia?",
        a: "Vilhena",
        b: "Ji-Paraná",
        c: "Jaru",
        d: "Ouro Preto do Oeste",
        e: "Machadinho d'Oeste",
        correta: "a", comentario: "Vilhena é a principal cidade da região conhecida como Cone Sul rondoniense."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "SEDUC-RO", prova: "Professor", materia: "Geografia de RO",
        enunciado: "A mineração em Rondônia teve um marco histórico com a descoberta de grandes jazidas de qual minério na região de Ariquemes?",
        a: "Ferro",
        b: "Cobre",
        c: "Cassiterita",
        d: "Prata",
        e: "Carvão",
        correta: "c", comentario: "A cassiterita (minério de estanho) foi um grande motor econômico do estado nas décadas de 60 e 70."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Estado", prova: "Oficial", materia: "História de RO",
        enunciado: "A ferrovia Madeira-Mamoré ficou conhecida mundialmente como a 'Ferrovia do Diabo' devido a:",
        a: "Ataques de piratas fluviais",
        b: "Grande número de mortes de trabalhadores por doenças tropicais",
        c: "Suas curvas perigosas nas montanhas",
        d: "Pintura vermelha original das locomotivas",
        e: "Ter sido financiada por bancos estrangeiros falidos",
        correta: "b", comentario: "Milhares de trabalhadores morreram de malária, febre amarela e outras doenças durante a obra."
    },
    {
        ano: "2023", banca: "IBADE", orgao: "Governo", prova: "Técnico", materia: "Geografia de RO",
        enunciado: "A Usina Hidrelétrica de Samuel localiza-se no rio:",
        a: "Madeira",
        b: "Jamari",
        c: "Mamoré",
        d: "Guaporé",
        e: "Machado",
        correta: "b", comentario: "Diferente de Jirau e Santo Antônio, a Usina de Samuel fica no Rio Jamari."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Câmara", prova: "Administrativo", materia: "História de RO",
        enunciado: "A cidade de Guajará-Mirim faz fronteira com qual cidade boliviana?",
        a: "Cobija",
        b: "Guayaramerín",
        c: "Santa Cruz de la Sierra",
        d: "La Paz",
        e: "Trinidad",
        correta: "b", comentario: "Guajará-Mirim (Brasil) e Guayaramerín (Bolívia) são cidades gêmeas separadas pelo rio Mamoré."
    },
    {
        ano: "2024", banca: "IBADE", orgao: "Geral", prova: "Geral", materia: "Geografia de RO",
        enunciado: "Em termos de divisão regional, Rondônia pertence a qual região brasileira?",
        a: "Centro-Oeste",
        b: "Nordeste",
        c: "Sudeste",
        d: "Norte",
        e: "Sul",
        correta: "d", comentario: "Rondônia é um dos sete estados que compõem a Região Norte do Brasil."
    }
];