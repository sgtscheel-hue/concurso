const banco_simulado_novo = [
    // --- LÍNGUA PORTUGUESA (10 QUESTÕES) ---
    {
        id: "ro31",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Compreensão de Texto",
        enunciado: "Em um texto informativo sobre a gestão escolar, a frase 'A secretaria é o coração da escola' utiliza qual recurso de linguagem?",
        a: "Metonímia", b: "Metáfora", c: "Eufemismo", d: "Hipérbole", e: "Pleonasmo",
        correta: "b", comentario: "Trata-se de uma metáfora, pois atribui à secretaria a característica de 'órgão vital' de forma figurada por analogia."
    },
    {
        id: "ro32",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Ortografia",
        enunciado: "Assinale a alternativa em que todas as palavras estão grafadas corretamente conforme o Acordo Ortográfico vigente:",
        a: "Idéia, assembleia, auto-estima", b: "Ideia, assembleia, autoestima", c: "Idéia, assembléia, auto estima", d: "Ideia, assembléia, autoestima", e: "Ideia, assembleia, auto-estima",
        correta: "b", comentario: "Pelo novo acordo, ditongos abertos em paroxítonas (ei, oi) não são acentuados e 'autoestima' perdeu o hífen."
    },
    {
        id: "ro33",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Classes de Palavras",
        enunciado: "Na frase 'Os documentos foram arquivados *rapidamente*', a palavra destacada classifica-se como:",
        a: "Adjetivo", b: "Substantivo", c: "Conjunção", d: "Advérbio", e: "Preposição",
        correta: "d", comentario: "Palavras terminadas em -mente que indicam modo são tipicamente advérbios."
    },
    {
        id: "ro34",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Concordância",
        enunciado: "Assinale a alternativa que apresenta a concordância verbal CORRETA:",
        a: "Fazem dez anos que trabalho na secretaria.", b: "Houveram muitas dúvidas na reunião.", c: "Faz dez anos que trabalho na secretaria.", d: "Devem haver soluções melhores.", e: "Mais de um funcionário se abraçaram.",
        correta: "c", comentario: "O verbo 'fazer' indicando tempo decorrido é impessoal e fica no singular."
    },
    {
        id: "ro35",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Crase",
        enunciado: "O uso do acento indicativo de crase é OBRIGATÓRIO em:",
        a: "Refiro-me a secretária da escola.", b: "Ele entregou o papel a ela.", c: "O curso será de segunda a sexta.", d: "Vou a Porto Velho amanhã.", e: "Ficamos cara a cara com o diretor.",
        correta: "a", comentario: "Quem se refere, se refere 'a' (preposição) + 'a' (artigo da palavra secretária) = à."
    },
    {
        id: "ro36",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Pontuação",
        enunciado: "Assinale a alternativa onde o uso da vírgula está INCORRETO:",
        a: "Porto Velho, 20 de maio de 2026.", b: "O aluno, que é dedicado, passou.", c: "João, traga os arquivos aqui.", d: "Os técnicos, estudaram para a prova.", e: "Compramos canetas, lápis e borrachas.",
        correta: "d", comentario: "Não se separa o sujeito (Os técnicos) do predicado (estudaram) com vírgula."
    },
    {
        id: "ro37",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Sintaxe",
        enunciado: "Na oração 'A diretora convocou os pais', o termo 'os pais' exerce a função de:",
        a: "Sujeito", b: "Objeto Direto", c: "Objeto Indireto", d: "Complemento Nominal", e: "Agente da Passiva",
        correta: "b", comentario: "Quem convoca, convoca alguém. Completa o sentido do verbo sem preposição obrigatória."
    },
    {
        id: "ro38",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Semântica",
        enunciado: "As palavras 'Sessão' (reunião) e 'Seção' (divisão) são exemplos de:",
        a: "Antônimos", b: "Sinônimos", c: "Homônimos Homófonos", d: "Parônimos", e: "Polissemia",
        correta: "c", comentario: "Possuem o mesmo som, mas grafia e significados diferentes."
    },
    {
        id: "ro39",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Verbos",
        enunciado: "Qual é o tempo verbal de 'Se eu *estudasse*, passaria na prova'?",
        a: "Presente do Indicativo", b: "Pretérito Perfeito do Indicativo", c: "Pretérito Imperfeito do Subjuntivo", d: "Futuro do Pretérito", e: "Futuro do Subjuntivo",
        correta: "c", comentario: "A terminação -sse caracteriza o pretérito imperfeito do subjuntivo."
    },
    {
        id: "ro40",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Língua Portuguesa", assunto: "Vozes Verbais",
        enunciado: "Transpondo 'A secretária redigiu o ofício' para a voz passiva, temos:",
        a: "O ofício foi redigido pela secretária.", b: "Redigiram o ofício.", c: "O ofício redigiu-se.", d: "A secretária tinha redigido o ofício.", e: "O ofício será redigido.",
        correta: "a", comentario: "Na voz passiva analítica, o objeto direto torna-se sujeito paciente acompanhado do verbo ser + particípio."
    },

    // --- HISTÓRIA E GEOGRAFIA DE RONDÔNIA (10 QUESTÕES) ---
    {
        id: "ro41",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO", assunto: "Ciclos Econômicos",
        enunciado: "Durante o período da Segunda Guerra Mundial, Rondônia viveu um novo impulso econômico conhecido como:",
        a: "Primeiro Ciclo do Café", b: "Batalha da Borracha", c: "Ciclo do Ouro", d: "Marcha para o Oeste", e: "Ciclo da Cassiterita",
        correta: "b", comentario: "Os 'Soldados da Borracha' foram enviados para a Amazônia para suprir a demanda aliada durante a guerra."
    },
    {
        id: "ro42",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO", assunto: "Limites",
        enunciado: "Rondônia faz fronteira internacional com qual país?",
        a: "Peru", b: "Colômbia", c: "Bolívia", d: "Paraguai", e: "Venezuela",
        correta: "c", comentario: "Rondônia possui uma extensa fronteira a oeste e sul com a Bolívia."
    },
    {
        id: "ro43",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO", assunto: "Criação do Estado",
        enunciado: "O Estado de Rondônia foi criado em 1981 e instalado em 1982. Quem foi seu primeiro governador?",
        a: "Confúcio Moura", b: "Ivo Cassol", c: "Jorge Teixeira de Oliveira", d: "Jerônimo Santana", e: "Osvaldo Piana",
        correta: "c", comentario: "O Coronel Jorge Teixeira foi o último governador do Território e o primeiro do Estado."
    },
    {
        id: "ro44",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO", assunto: "Clima",
        enunciado: "O clima predominante no estado de Rondônia é classificado como:",
        a: "Semiárido", b: "Subtropical", c: "Equatorial", d: "Temperado", e: "Tropical de Altitude",
        correta: "c", comentario: "Clima quente e úmido, típico da região amazônica, com chuvas abundantes."
    },
    {
        id: "ro45",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO", assunto: "Expedições",
        enunciado: "Marechal Rondon é o patrono do estado. Qual era o principal objetivo de suas expedições na região?",
        a: "Procurar ouro e diamantes", b: "Construir a EFMM", c: "Instalar linhas telegráficas e integrar o território", d: "Combater insurgentes bolivianos", e: "Fundar a cidade de Vilhena",
        correta: "c", comentario: "A Comissão Rondon tinha como foco a telegrafia e o reconhecimento geográfico/indigenista."
    },
    {
        id: "ro46",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO", assunto: "Hidrografia",
        enunciado: "Qual é o principal rio que banha a capital, Porto Velho, e onde estão localizadas importantes usinas hidrelétricas?",
        a: "Rio Guaporé", b: "Rio Ji-Paraná", c: "Rio Madeira", d: "Rio Mamoré", e: "Rio Machado",
        correta: "c", comentario: "O Rio Madeira abriga as usinas de Jirau e Santo Antônio em Porto Velho."
    },
    {
        id: "ro47",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO", assunto: "Vegetação",
        enunciado: "A vegetação nativa predominante em Rondônia é a:",
        a: "Caatinga", b: "Floresta Amazônica", c: "Mata Atlântica", d: "Pampas", e: "Manguezal",
        correta: "b", comentario: "Rondônia integra o bioma Amazônia, embora possua áreas de transição para o Cerrado ao sul."
    },
    {
        id: "ro48",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO", assunto: "Território Federal",
        enunciado: "Antes de se chamar Rondônia, o território criado em 1943 chamava-se:",
        a: "Território de Porto Velho", b: "Território do Madeira", c: "Território Federal do Guaporé", d: "Território do Acre", e: "Província do Amazonas",
        correta: "c", comentario: "Criado pelo Decreto-Lei nº 5.812/1943, chamava-se Território Federal do Guaporé até 1956."
    },
    {
        id: "ro49",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Geografia de RO", assunto: "Economia",
        enunciado: "Atualmente, Rondônia destaca-se nacionalmente na produção de qual grão?",
        a: "Trigo", b: "Cevada", c: "Soja", d: "Cacau", e: "Canola",
        correta: "c", comentario: "O agronegócio, especialmente a soja e o milho, é pilar da economia rondoniense atual."
    },
    {
        id: "ro50",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "História de RO", assunto: "Marcos Históricos",
        enunciado: "O Forte Príncipe da Beira, importante monumento histórico, localiza-se no município de:",
        a: "Porto Velho", b: "Guajará-Mirim", c: "Costa Marques", d: "Ji-Paraná", e: "Ariquemes",
        correta: "c", comentario: "Localizado às margens do Rio Guaporé, em Costa Marques, é a maior fortificação portuguesa fora da Europa."
    },

    // --- INFORMÁTICA BÁSICA (5 QUESTÕES) ---
    {
        id: "ro51",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática", assunto: "Windows",
        enunciado: "No Windows 10, qual combinação de teclas de atalho é utilizada para alternar entre janelas abertas?",
        a: "Ctrl + S", b: "Alt + Tab", c: "Windows + L", d: "Alt + F4", e: "Ctrl + P",
        correta: "b", comentario: "Alt + Tab alterna entre aplicativos; Win + L bloqueia a tela; Alt + F4 fecha a janela."
    },
    {
        id: "ro52",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática", assunto: "Hardware/Software",
        enunciado: "Assinale a alternativa que apresenta apenas dispositivos de ENTRADA de dados:",
        a: "Monitor e Impressora", b: "Teclado e Mouse", c: "Caixas de som e Pen Drive", d: "Processador e Memória RAM", e: "Scanner e Plotter",
        correta: "b", comentario: "Teclado e Mouse enviam dados para o computador. Monitor e Impressora são de saída."
    },
    {
        id: "ro53",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática", assunto: "Internet/Nuvem",
        enunciado: "O termo 'Cloud Computing' (Computação em Nuvem) refere-se a:",
        a: "Aumentar a velocidade do processador local.", b: "Limpar o computador de vírus.", c: "Armazenar e acessar dados e programas pela internet, em vez de no disco rígido.", d: "Utilizar cabos de fibra ótica.", e: "Um tipo de monitor de alta resolução.",
        correta: "c", comentario: "Nuvem é o acesso remoto a recursos computacionais via internet."
    },
    {
        id: "ro54",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática", assunto: "Excel",
        enunciado: "No Microsoft Excel, qual fórmula somaria corretamente os valores das células A1, A2 e A3?",
        a: "=ADICIONAR(A1:A3)", b: "=SOMA(A1;A3)", c: "=SOMA(A1:A3)", d: "=TOTAL(A1-A3)", e: "=CALCULAR(A1+A3)",
        correta: "c", comentario: "O sinal de dois pontos (:) indica intervalo; o ponto e vírgula (;) indica células isoladas."
    },
    {
        id: "ro55",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Informática", assunto: "Segurança",
        enunciado: "Qual prática ajuda a prevenir a infecção por 'Phishing'?",
        a: "Manter o monitor desligado quando não usar.", b: "Nunca clicar em links suspeitos recebidos por e-mail.", c: "Usar apenas letras minúsculas em senhas.", d: "Formatar o HD todo mês.", e: "Excluir o histórico de navegação diariamente.",
        correta: "b", comentario: "Phishing é uma técnica de enganar o usuário via links ou e-mails falsos para roubar dados."
    },

    // --- CONHECIMENTOS ESPECÍFICOS: TÉCNICO EDUCACIONAL (25 QUESTÕES) ---
    {
        id: "ro56",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Legislação (LDB)",
        enunciado: "Segundo a LDB (Lei 9.394/96), a educação básica obrigatória e gratuita compreende a faixa etária de:",
        a: "0 a 17 anos", b: "4 a 17 anos", c: "6 a 14 anos", d: "4 a 14 anos", e: "5 a 18 anos",
        correta: "b", comentario: "Art. 4º da LDB: educação básica obrigatória dos 4 aos 17 anos."
    },
    {
        id: "ro57",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Redação Oficial",
        enunciado: "Qual é o fecho adequado para um ofício enviado por um Técnico Educacional a uma autoridade superior?",
        a: "Com carinho,", b: "Atenciosamente,", c: "Respeitosamente,", d: "Saudações cordiais,", e: "Até logo,",
        correta: "c", comentario: "O Manual da Presidência define: 'Respeitosamente' para autoridades superiores e 'Atenciosamente' para mesma hierarquia ou inferior."
    },
    {
        id: "ro58",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Rotinas de Secretaria",
        enunciado: "O documento que registra detalhadamente o que ocorreu em uma reunião de conselho de classe chama-se:",
        a: "Ofício", b: "Circular", c: "Ata", d: "Memorando", e: "Requerimento",
        correta: "c", comentario: "A Ata é o documento de valor jurídico que registra fatos e decisões de reuniões."
    },
    {
        id: "ro59",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "ECA",
        enunciado: "De acordo com o ECA, a criança ou adolescente tem direito de ser respeitado por seus educadores. Isso inclui o direito de:",
        a: "Faltar sem justificativa", b: "Contestar critérios avaliativos, podendo recorrer às instâncias escolares superiores", c: "Não realizar provas", d: "Escolher o diretor da escola", e: "Não seguir o regimento escolar",
        correta: "b", comentario: "Art. 53 do ECA garante o direito de contestação de critérios avaliativos."
    },
    {
        id: "ro60",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Ética no Serviço Público",
        enunciado: "Sobre o sigilo profissional na secretaria escolar, é correto afirmar:",
        a: "O técnico pode divulgar notas de alunos em redes sociais.", b: "Dados pessoais de alunos e prontuários devem ser mantidos em sigilo e acessados apenas por pessoal autorizado.", c: "O sigilo não se aplica a funcionários temporários.", d: "Qualquer pessoa da comunidade pode consultar o histórico de qualquer aluno.", e: "Informações médicas de alunos são públicas.",
        correta: "b", comentario: "A ética profissional e o dever de guarda impõem o sigilo sobre dados sensíveis de alunos."
    },
    {
        id: "ro61",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Gestão Democrática",
        enunciado: "Um dos princípios da gestão democrática na escola pública é:",
        a: "A centralização do poder no diretor.", b: "A participação das comunidades escolar e local em conselhos escolares.", c: "A proibição de grêmios estudantis.", d: "O sigilo absoluto dos gastos financeiros.", e: "A escolha dos professores apenas pelo governo estadual.",
        correta: "b", comentario: "LDB Art. 14 estabelece a participação das comunidades nos conselhos."
    },
    {
        id: "ro62",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Arquivo Escolar",
        enunciado: "O arquivo que guarda documentos de uso pouco frequente, mas que ainda aguardam prazos de prescrição ou valor histórico, é o:",
        a: "Arquivo Corrente", b: "Arquivo Morto (Intermediário)", c: "Arquivo Ativo", d: "Arquivo Setorial", e: "Lixeira",
        correta: "b", comentario: "O arquivo intermediário abriga documentos que não são consultados no dia a dia, mas que não podem ser descartados."
    },
    {
        id: "ro63",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Atendimento ao Público",
        enunciado: "No atendimento a um pai de aluno irritado, o Técnico Educacional deve agir com:",
        a: "Indiferença", b: "Agressividade igualada", c: "Empatia, cortesia e profissionalismo, buscando acalmar e resolver o problema", d: "Ironia", e: "Omissão, deixando o pai falando sozinho",
        correta: "c", comentario: "O bom atendimento exige equilíbrio emocional e foco na solução."
    },
    {
        id: "ro64",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Documentação Escolar",
        enunciado: "O documento oficial que comprova toda a vida escolar do aluno, com notas e frequências de anos anteriores, é o:",
        a: "Diário de Classe", b: "Histórico Escolar", c: "Atestado de Matrícula", d: "Ficha Médica", e: "Boletim Informativo",
        correta: "b", comentario: "O Histórico Escolar é o registro permanente da trajetória do estudante."
    },
    {
        id: "ro65",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Administração Pública",
        enunciado: "O princípio constitucional que exige que o técnico aja de acordo com a lei, sem preferências pessoais, é o da:",
        a: "Publicidade", b: "Eficiência", c: "Impessoalidade", d: "Moralidade", e: "Legalidade",
        correta: "c", comentario: "A impessoalidade veda o tratamento diferenciado ou a promoção pessoal do servidor."
    },
    {
        id: "ro66",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Organização do Trabalho",
        enunciado: "Qual ferramenta é essencial para a organização de prazos e eventos na secretaria escolar?",
        a: "Calculadora Financeira", b: "Agenda (Física ou Digital)", c: "Dicionário", d: "Grampeador", e: "Carimbo de CNPJ",
        correta: "b", comentario: "A agenda é a base para a gestão do tempo e compromissos escolares."
    },
    {
        id: "ro67",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Legislação",
        enunciado: "O dever dos estabelecimentos de ensino de 'notificar ao Conselho Tutelar casos de maus-tratos envolvendo seus alunos' está previsto no:",
        a: "Código Penal", b: "Estatuto da Criança e do Adolescente (ECA)", c: "Código Civil", d: "Constituição Estadual de RO", e: "Regimento do Trabalho",
        correta: "b", comentario: "É dever legal das escolas (ECA) reportar suspeitas ou confirmações de maus-tratos."
    },
    {
        id: "ro68",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Informática na Secretaria",
        enunciado: "Qual software é o mais indicado para criar uma lista de presença formatada em colunas?",
        a: "Navegador de Internet", b: "Software de Apresentação (PowerPoint)", c: "Editor de Texto (Word) ou Planilha (Excel)", d: "Software de Edição de Fotos", e: "Antivírus",
        correta: "c", comentario: "Word e Excel são as ferramentas padrão para documentos e tabelas administrativas."
    },
    {
        id: "ro69",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Comunicação",
        enunciado: "Em uma comunicação interna enviada por e-mail, o campo 'Assunto' deve ser:",
        a: "Deixado em branco.", b: "Longo e detalhado.", c: "Claro, conciso e resumir o conteúdo da mensagem.", d: "Escrito em letras maiúsculas e com exclamações.", e: "Usado apenas para colocar a data.",
        correta: "c", comentario: "A clareza no assunto facilita a triagem e organização das demandas."
    },
    {
        id: "ro70",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Relacionamento Interpessoal",
        enunciado: "Trabalhar em equipe na escola pressupõe:",
        a: "Cada um fazer sua parte sem conversar com os outros.", b: "Colaboração, diálogo e objetivos comuns.", c: "Competição para ver quem trabalha mais.", d: "Seguir apenas as ordens do diretor sem questionar.", e: "Isolamento na própria mesa de trabalho.",
        correta: "b", comentario: "A escola é um organismo coletivo; a cooperação é vital."
    },
    {
        id: "ro71",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Protocolo",
        enunciado: "A função do 'Protocolo' na administração escolar é:",
        a: "Dar notas aos alunos.", b: "Organizar a merenda.", c: "Registrar a entrada e saída de documentos e processos, garantindo seu controle.", d: "Limpar as salas.", e: "Atender apenas o telefone.",
        correta: "c", comentario: "O protocolo assegura o rastreamento e a oficialização da tramitação documental."
    },
    {
        id: "ro72",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Legislação",
        enunciado: "O ensino fundamental é uma etapa da educação básica que tem duração de:",
        a: "5 anos", b: "8 anos", c: "9 anos", d: "10 anos", e: "12 anos",
        correta: "c", comentario: "Conforme a LDB, o Ensino Fundamental obrigatório tem duração de 9 anos."
    },
    {
        id: "ro73",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Responsabilidade Socioambiental",
        enunciado: "Uma prática de responsabilidade socioambiental na secretaria escolar é:",
        a: "Imprimir todos os e-mails recebidos.", b: "Usar copos descartáveis em todas as reuniões.", c: "Digitalizar documentos para reduzir o consumo de papel.", d: "Deixar as luzes e o ar-condicionado ligados ao sair.", e: "Jogar pilhas usadas no lixo comum.",
        correta: "c", comentario: "A digitalização economiza recursos naturais e espaço físico."
    },
    {
        id: "ro74",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Redação Oficial",
        enunciado: "O documento utilizado para comunicações internas entre unidades administrativas de um mesmo órgão é o:",
        a: "Alvará", b: "Memorando (ou Comunicação Interna)", c: "Edital", d: "Contrato", e: "Lei",
        correta: "b", comentario: "O memorando é ágil e serve para o fluxo interno de informações."
    },
    {
        id: "ro75",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Matrícula",
        enunciado: "No ato da matrícula, o técnico deve conferir obrigatoriamente:",
        a: "A cor preferida do aluno.", b: "A documentação exigida pela legislação e regimento (RG, certidão, comprovante de residência, etc).", c: "A conta bancária dos pais.", d: "O currículo profissional do aluno.", e: "A religião da família.",
        correta: "b", comentario: "A matrícula é um ato formal que exige documentação comprobatória para ser válida."
    },
    {
        id: "ro76",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Arquivo",
        enunciado: "A preservação de documentos históricos da escola (como a primeira ata de fundação) deve ser:",
        a: "Temporária", b: "Descartável após 5 anos", c: "Permanente", d: "Sigilosa para sempre", e: "Destruída para abrir espaço",
        correta: "c", comentario: "Documentos de valor histórico compõem o arquivo permanente e não podem ser eliminados."
    },
    {
        id: "ro77",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "LDB",
        enunciado: "O calendário escolar deve adequar-se às peculiaridades locais, climáticas e econômicas, mas deve cumprir a carga horária mínima anual de:",
        a: "500 horas", b: "800 horas", c: "1000 horas", d: "1200 horas", e: "200 dias letivos com 400 horas",
        correta: "b", comentario: "LDB Art. 24: carga horária mínima anual de 800 horas distribuídas por no mínimo 200 dias de efetivo trabalho escolar."
    },
    {
        id: "ro78",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Gestão",
        enunciado: "O Plano Político Pedagógico (PPP) da escola deve ser elaborado por:",
        a: "Apenas pelo Diretor.", b: "Pela Secretaria de Educação apenas.", c: "Pela comunidade escolar de forma participativa.", d: "Apenas pelos professores de história.", e: "Por uma empresa terceirizada.",
        correta: "c", comentario: "O PPP é o documento de identidade da escola e deve envolver todos os segmentos."
    },
    {
        id: "ro79",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Atendimento",
        enunciado: "Ao atender um telefone na secretaria, a saudação inicial correta deve incluir:",
        a: "Apenas 'Alô'.", b: "Identificação da escola, setor e o nome do atendente.", c: "O preço das mensalidades.", d: "O nome do Diretor apenas.", e: "Um pedido para aguardar sem falar nada.",
        correta: "b", comentario: "A identificação profissional é norma básica de etiqueta e eficiência administrativa."
    },
    {
        id: "ro80",
        ano: "2026", banca: "IBADE", orgao: "SEDUC-RO", prova: "Simulado Especial", materia: "Conhecimentos Específicos", assunto: "Sigilo",
        enunciado: "Se um repórter ligar pedindo o endereço de um aluno, o técnico deve:",
        a: "Passar a informação imediatamente.", b: "Cobrar pelo serviço.", c: "Informar que não pode fornecer dados pessoais de alunos por questões de segurança e sigilo.", d: "Inventar um endereço falso.", e: "Transferir para o aluno atender.",
        correta: "c", comentario: "A proteção de dados (LGPD e ética) veda o fornecimento de informações pessoais a terceiros sem autorização."
    }
];

