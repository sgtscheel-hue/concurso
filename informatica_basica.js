const banco_inf = [
    {
        id: "inf01",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Hardware",
        assunto: "Inf. Básica",
        enunciado: "Qual dos seguintes dispositivos é considerado estritamente de SAÍDA de dados?",
        a: "Teclado", b: "Scanner", c: "Impressora", d: "Mouse", e: "Pen drive",
        correta: "c", comentario: "A impressora recebe dados do PC e os projeta no papel. Teclado e Mouse são de entrada. Pen drive é híbrido."
    },
    {
        id: "inf02",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Administrativo", materia: "Windows",
        assunto: "Inf. Básica",
        enunciado: "No Windows 10, qual atalho de teclado é utilizado para alternar rapidamente entre janelas abertas?",
        a: "Alt + Tab", b: "Ctrl + C", c: "Windows + L", d: "Alt + F4", e: "Ctrl + Esc",
        correta: "a", comentario: "Alt+Tab é o comando clássico para alternância. Win+L bloqueia o PC. Alt+F4 fecha a janela."
    },
    {
        id: "inf03",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Geral", materia: "Internet",
        assunto: "Inf. Básica",
        enunciado: "O protocolo de segurança que garante que os dados enviados entre o navegador e o site sejam criptografados (indicado pelo cadeado) é o:",
        a: "HTTP", b: "FTP", c: "HTTPS", d: "SMTP", e: "IP",
        correta: "c", comentario: "O 'S' em HTTPS refere-se a Secure (SSL/TLS), garantindo a criptografia da navegação."
    },
    {
        id: "inf04",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Excel",
        assunto: "Inf. Básica",
        enunciado: "No Microsoft Excel, qual fórmula retornaria a média aritmética das células A1, A2 e A3?",
        a: "=SOMA(A1:A3)", b: "=MEDIA(A1;A3)", c: "=MEDIA(A1:A3)", d: "=CALCULAR(A1:A3)", e: "=MED(A1:A3)",
        correta: "c", comentario: "A função MEDIA com dois pontos (:) seleciona todo o intervalo de A1 até A3."
    },
    {
        id: "inf05",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Oficial", materia: "Segurança",
        assunto: "Inf. Básica",
        enunciado: "Como se chama o software malicioso que 'sequestra' os dados do usuário através de criptografia e exige resgate?",
        a: "Adware", b: "Spyware", c: "Ransomware", d: "Worm", e: "Trojan",
        correta: "c", comentario: "Ransomware (Ransom = resgate) é o malware que cobra valores para liberar os arquivos do usuário."
    },
    {
        id: "inf06",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Windows",
        assunto: "Inf. Básica",
        enunciado: "Para excluir um arquivo permanentemente sem enviá-lo para a Lixeira, utiliza-se o atalho:",
        a: "Ctrl + Del", b: "Shift + Del", c: "Alt + Del", d: "Windows + Del", e: "Ctrl + Shift + Del",
        correta: "b", comentario: "Shift+Delete apaga o item sem passar pela lixeira do sistema."
    },
    {
        id: "inf07",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Word",
        assunto: "Inf. Básica",
        enunciado: "No Word, o recurso 'Pincel de Formatação' serve para:",
        a: "Mudar a cor da página.", b: "Desenhar figuras livres.", c: "Copiar apenas a formatação de um texto e aplicar em outro.", d: "Apagar o texto selecionado.", e: "Inserir imagens.",
        correta: "c", comentario: "O pincel de formatação poupa tempo ao replicar fontes e tamanhos rapidamente."
    },
    {
        id: "inf08",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura", prova: "Geral", materia: "Cloud",
        assunto: "Inf. Básica",
        enunciado: "Qual das alternativas abaixo apresenta um serviço de armazenamento de arquivos em nuvem?",
        a: "Windows Explorer", b: "Google Drive", c: "BIOS", d: "Cache", e: "WinRAR",
        correta: "b", comentario: "Google Drive, OneDrive e Dropbox são exemplos de Cloud Storage."
    },
    {
        id: "inf09",
        ano: "2023", banca: "IBADE", orgao: "Estado", prova: "Administrativo", materia: "E-mail",
        assunto: "Inf. Básica",
        enunciado: "O campo utilizado para enviar uma cópia oculta de um e-mail é:",
        a: "Para", b: "Cc", c: "Cco", d: "Anexo", e: "Assunto",
        correta: "c", comentario: "Cco (Cópia Carbono Oculta) esconde os destinatários dos outros recebedores."
    },
    {
        id: "inf10",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Técnico", materia: "Hardware",
        assunto: "Inf. Básica",
        enunciado: "A memória de trabalho, que é volátil (perde os dados ao desligar o PC), é a:",
        a: "Memória ROM", b: "Memória RAM", c: "Disco Rígido (HD)", d: "SSD", e: "CD-ROM",
        correta: "b", comentario: "A RAM é volátil e rápida. O HD e o SSD são memórias de armazenamento permanente."
    },
    {
        id: "inf11",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Técnico", materia: "Navegadores",
        assunto: "Inf. Básica",
        enunciado: "Qual tecla de atalho é usada na maioria dos navegadores para atualizar a página atual?",
        a: "F1", b: "F2", c: "F5", d: "F11", e: "F12",
        correta: "c", comentario: "F5 é o comando universal para 'Refresh' ou recarregar a página."
    },
    {
        id: "inf12",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura", prova: "Geral", materia: "Linux",
        assunto: "Inf. Básica",
        enunciado: "Sobre o Linux, é correto afirmar que:",
        a: "É um software proprietário e pago.", b: "É um sistema operacional de código aberto (Open Source).", c: "Não permite o uso de pastas.", d: "É um antivírus.", e: "Só funciona em computadores da Apple.",
        correta: "b", comentario: "Linux é o exemplo mais famoso de software livre e sistema operacional de código aberto."
    },
    {
        id: "inf13",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Secretariado", materia: "Arquivos",
        assunto: "Inf. Básica",
        enunciado: "A extensão de arquivo padrão utilizada para documentos criados no Microsoft Word (versões atuais) é:",
        a: ".xlsx", b: ".pptx", c: ".docx", d: ".pdf", e: ".txt",
        correta: "c", comentario: "Word (.docx), Excel (.xlsx), PowerPoint (.pptx)."
    },
    {
        id: "inf14",
        ano: "2024", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Segurança",
        assunto: "Inf. Básica",
        enunciado: "Qual ferramenta do Windows atua como uma barreira de proteção contra acessos não autorizados vindos da internet?",
        a: "Backup", b: "Defragmentador", c: "Firewall", d: "Painel de Controle", e: "Scandisk",
        correta: "c", comentario: "O Firewall filtra o tráfego de rede para proteger o computador."
    },
    {
        id: "inf15",
        ano: "2023", banca: "IBADE", orgao: "Governo", prova: "Nível Médio", materia: "Informática",
        assunto: "Inf. Básica",
        enunciado: "Para selecionar todos os arquivos de uma pasta no Windows Explorer, usa-se:",
        a: "Ctrl + S", b: "Ctrl + T", c: "Ctrl + A", d: "Ctrl + E", e: "Ctrl + X",
        correta: "c", comentario: "No Windows em inglês ou padrão internacional, Ctrl+A (All). No Word em português é Ctrl+T, mas no sistema é Ctrl+A."
    },
    {
        id: "inf16",
        ano: "2024", banca: "IBADE", orgao: "Geral", prova: "Técnico", materia: "Periféricos",
        assunto: "Inf. Básica",
        enunciado: "Qual das portas abaixo é a mais comum para conectar mouses e teclados modernos?",
        a: "VGA", b: "HDMI", c: "USB", d: "PS/2", e: "LPT1",
        correta: "c", comentario: "O padrão USB (Universal Serial Bus) substituiu quase todos os conectores antigos de periféricos."
    },
    {
        id: "inf17",
        ano: "2024", banca: "IBADE", orgao: "SEDUC-RO", prova: "Professor", materia: "PowerPoint",
        assunto: "Inf. Básica",
        enunciado: "No Microsoft PowerPoint, a tecla utilizada para iniciar a apresentação a partir do primeiro slide é:",
        a: "F1", b: "F5", c: "Ctrl + P", d: "Shift + F5", e: "Alt + F5",
        correta: "b", comentario: "F5 inicia do começo. Shift+F5 inicia do slide atual."
    },
    {
        id: "inf18",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura", prova: "Administrativo", materia: "Excel",
        assunto: "Inf. Básica",
        enunciado: "Em uma planilha eletrônica, a interseção de uma linha com uma coluna chama-se:",
        a: "Bloco", b: "Célula", c: "Ponto", d: "Segmento", e: "Campo",
        correta: "b", comentario: "Toda célula é o encontro de uma coluna (letra) com uma linha (número)."
    },
    {
        id: "inf19",
        ano: "2024", banca: "IBADE", orgao: "Estado", prova: "Técnico", materia: "Hardware",
        assunto: "Inf. Básica",
        enunciado: "Qual componente é considerado o 'cérebro' do computador, responsável por processar as instruções?",
        a: "Placa Mãe", b: "HD", c: "Processador (CPU)", d: "Fonte", e: "Gabinete",
        correta: "c", comentario: "A CPU (Central Processing Unit) é onde todos os cálculos e lógica ocorrem."
    },
    {
        id: "inf20",
        ano: "2024", banca: "IBADE", orgao: "Governo", prova: "Geral", materia: "Internet",
        assunto: "Inf. Básica",
        enunciado: "O termo 'Phishing' refere-se a:",
        a: "Um tipo de vírus que apaga o HD.", b: "Uma técnica para pescar senhas e dados através de sites e e-mails falsos.", c: "Um acelerador de downloads.", d: "Um componente físico do roteador.", e: "Um software de edição de fotos.",
        correta: "b", comentario: "Phishing vem de 'pescar'. O criminoso joga a 'isca' (e-mail falso) para roubar dados."
    },
    {
        id: "inf21",
        ano: "2025", banca: "IBADE", orgao: "Prefeitura de Castelo - ES", prova: "Operador de Serviços", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Em um computador, os programas (como jogos, o Windows ou o Word) são chamados de Software, e as peças físicas que podemos tocar (como o mouse e o monitor) como são chamadas?",
        a: "Drivers.", b: "Gadgets.", c: "Firmware.", d: "Hardware.", e: "Internet.",
        correta: "d", comentario: "Hardware é a parte física do computador (peças, componentes e periféricos). Software é a parte lógica (programas)."
    },
    {
        id: "inf22",
        ano: "2025", banca: "IBADE", orgao: "Prefeitura de Castelo - ES", prova: "Técnico de Manutenção", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 11, qual comando ou recurso nativo pode ser utilizado para abrir rapidamente o Gerenciador de Tarefas a partir da tela de trabalho?",
        a: "Pressionar Ctrl + Shift + Esc, abrindo diretamente o Gerenciador de Tarefas.", b: "Pressionar Alt + Tab, exibindo imediatamente o Gerenciador de Tarefas em tela cheia.", c: "Pressionar Win + D, carregando automaticamente o Gerenciador de Tarefas em nova janela.", d: "Pressionar Ctrl + Alt + Del, encerrando processos em segundo plano sem abrir menus adicionais.", e: "Pressionar Win + E, acessando o Gerenciador de Tarefas no Explorador de Arquivos.",
        correta: "a", comentario: "O atalho Ctrl + Shift + Esc abre o Gerenciador de Tarefas diretamente. O Ctrl + Alt + Del abre uma tela de segurança com várias opções."
    },
    {
        id: "inf23",
        ano: "2025", banca: "IBADE", orgao: "Prefeitura de Castelo - ES", prova: "Agente Fiscal de Obras", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 10, a atualização do sistema é realizada por um recurso que busca, baixa e instala correções diretamente da Microsoft. Qual opção aciona essa funcionalidade?",
        a: "Configurações > Atualização e Segurança > Recuperação.", b: "Configurações > Atualização e Segurança > Segurança do Windows.", c: "Configurações > Atualização e Segurança > Windows Update.", d: "Configurações > Atualização e Segurança > Solução de problemas.", e: "Configurações > Atualização e Segurança > Programa Windows Insider.",
        correta: "c", comentario: "O Windows Update é a ferramenta nativa para gerenciar atualizações e correções do sistema operacional."
    },
    {
        id: "inf24",
        ano: "2025", banca: "IBADE", orgao: "Prefeitura de Castelo - ES", prova: "Professor M", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Associe a Coluna A (softwares) à Coluna B (categorias): 1. LibreOffice Writer, 2. Ubuntu Linux, 3. CCleaner, 4. Microsoft Edge. Coluna B: ( ) Software aplicativo, ( ) Sistema operacional, ( ) Software utilitário, ( ) Navegador de internet.",
        a: "1 – 2 – 3 – 4", b: "1 – 3 – 4 – 2", c: "2 – 3 – 1 – 4", d: "3 – 4 – 1 – 2", e: "4 – 2 – 3 – 1",
        correta: "a", comentario: "Writer é aplicativo (edição), Ubuntu é SO, CCleaner é utilitário (manutenção) e Edge é navegador."
    },
    {
        id: "inf25",
        ano: "2025", banca: "IBADE", orgao: "CREFITO - 6ª Região", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Quando você envia um e-mail com anexo, qual prática é mais recomendada para garantir que o destinatário consiga abrir o arquivo e que a mensagem seja entregue corretamente?",
        a: "Enviar arquivos muito grandes sem compactação.", b: "Informar o tipo de arquivo e utilizar formatos comuns, como PDF ou DOCX.", c: "Usar apenas letras maiúsculas no corpo do e-mail.", d: "Escrever o e-mail sem destinatário.", e: "Enviar arquivos confidenciais por qualquer endereço desconhecido.",
        correta: "b", comentario: "Formatos padrão como PDF e DOCX garantem compatibilidade entre diferentes dispositivos e softwares."
    },
    {
        id: "inf26",
        ano: "2025", banca: "IBADE", orgao: "CREFITO - 6ª Região", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No ambiente do Windows 10, o Painel de Controle se destaca por oferecer um ponto centralizado para a administração de diversas opções do sistema. Assinale a alternativa correta sobre suas funcionalidades.",
        a: "Executar programas baixados da internet.", b: "Configurar opções do sistema e dispositivos.", c: "Criar arquivos de texto.", d: "Navegar na internet.", e: "Gerar gráficos em Excel.",
        correta: "b", comentario: "O Painel de Controle serve para gerenciar configurações globais, como contas de usuário, rede e periféricos."
    },
    {
        id: "inf27",
        ano: "2025", banca: "IBADE", orgao: "CREFITO - 6ª Região", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Considerando a classificação de dispositivos de entrada, saída ou armazenamento, assinale a alternativa que representa corretamente um dispositivo de SAÍDA.",
        a: "Teclado.", b: "Mouse.", c: "Impressora.", d: "Scanner.", e: "Microfone.",
        correta: "c", comentario: "A impressora externaliza a informação (saída). Teclado, mouse, scanner e microfone enviam dados para o PC (entrada)."
    },
    {
        id: "inf28",
        ano: "2025", banca: "IBADE", orgao: "Pref. Alto Alegre do Parecis - RO", prova: "Agente Tributário", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Um monitor 4K, um mouse de alta precisão e um SSD de 1TB são classificados respectivamente como:",
        a: "dispositivos de saída, entrada e armazenamento.", b: "dispositivos de processamento, entrada e saída.", c: "dispositivos de rede, memória e disco.", d: "interfaces de software, periféricos e drivers.", e: "entradas binárias, portas lógicas e slots.",
        correta: "a", comentario: "Monitor (Saída), Mouse (Entrada) e SSD (Armazenamento)."
    },
    {
        id: "inf29",
        ano: "2025", banca: "IBADE", orgao: "Pref. Rolim de Moura - RO", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual das alternativas apresenta um exemplo de memória volátil?",
        a: "RAM.", b: "Disco de estado sólido (SSD).", c: "Memória flash.", d: "Memória FRAM.", e: "Discos óticos.",
        correta: "a", comentario: "Memória volátil é aquela que perde os dados ao desligar o computador. A memória RAM é o principal exemplo."
    },
    {
        id: "inf30",
        ano: "2025", banca: "IBADE", orgao: "Pref. Rolim de Moura - RO", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Segundo os itens abaixo quantos são de entrada e quantos são de saída? Teclado, monitor, caixas de som e impressora.",
        a: "Dois itens de saída e dois itens de entrada.", b: "Três itens de entrada e o um item de saída.", c: "Um item de saída e os três itens de entrada.", d: "Um item de entrada e três itens de saída.", e: "Todos os itens são de saída.",
        correta: "d", comentario: "Teclado (Entrada). Monitor, caixas de som e impressora (Saída)."
    },
    {
        id: "inf31",
        ano: "2025", banca: "IBADE", orgao: "Pref. Rolim de Moura - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Um conjunto de informações, compostas por sequências de bits que são rotulados (recebem um nome) e gravados em algum momento num dispositivo de armazenamento. Este é o conceito de:",
        a: "byte.", b: "arquivos.", c: "wireless.", d: "memória.", e: "ram.",
        correta: "b", comentario: "Arquivos são unidades de armazenamento de dados identificadas por um nome e extensão."
    },
    {
        id: "inf32",
        ano: "2024", banca: "IBADE", orgao: "SAAE de Linhares - ES", prova: "Técnico em TIC", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Navegando na internet, foi encontrado um arquivo com a extensão .odt. Tal arquivo é do tipo:",
        a: "texto.", b: "planilha eletrônica.", c: "vídeo.", d: "biblioteca.", e: "template.",
        correta: "a", comentario: ".ODT é o formato de texto padrão do LibreOffice Writer (OpenDocument Text)."
    },
    {
        id: "inf33",
        ano: "2024", banca: "IBADE", orgao: "SAAE de Linhares - ES", prova: "Operador ETAE", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O atalho F4, quando utilizado no sistema operacional Windows 11, é responsável por:",
        a: "pesquisar um arquivo ou pasta no Gerenciador de Arquivos.", b: "refazer uma ação.", c: "percorrer elementos de tela em uma janela ou na área de trabalho.", d: "ativar a barra de menus no aplicativo ativo.", e: "exibir a lista de barras de endereços no Gerenciador de Arquivos.",
        correta: "e", comentario: "No Explorador de Arquivos (Gerenciador), o F4 foca e abre o histórico da barra de endereços."
    },
    {
        id: "inf34",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de São Luís - MA", prova: "Agente de Trânsito", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Um usuário de informática precisa adquirir um componente de acesso rápido para armazenamento temporário de informações que necessitam ser acessadas pelo sistema operacional. Nesse caso, ele deve adquirir um:",
        a: "scanner", b: "pendrive", c: "memória RAM", d: "controlador IDE", e: "placa de rede wi-fi",
        correta: "c", comentario: "A RAM é a memória principal de trabalho, volátil e de acesso rápido para o sistema e programas."
    },
    {
        id: "inf35",
        ano: "2024", banca: "IBADE", orgao: "CRC-MS", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No contexto das diferenças entre o Windows 8 e o Windows 10, marque a inovação mais significativa do Windows 10.",
        a: "O Windows 8 incluía desktops virtuais, removidos no 10.", b: "O Windows 10 não oferece suporte à Cortana.", c: "O Windows 8 e 10 compartilham a mesma interface.", d: "O Windows 10 removeu completamente o menu Iniciar.", e: "O Windows 10 reintroduziu o menu Iniciar em formato híbrido e integrou desktops virtuais.",
        correta: "e", comentario: "O Windows 10 corrigiu a rejeição ao Win8 trazendo o Iniciar de volta com os blocos dinâmicos (híbrido)."
    },
    {
        id: "inf36",
        ano: "2024", banca: "IBADE", orgao: "CRC-MS", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual alternativa descreve corretamente a diferença entre software de sistema e software aplicativo?",
        a: "Aplicativo é só mobile, Sistema é desktop.", b: "Ambos desempenham funções idênticas.", c: "O software de sistema gerencia o hardware e provê a plataforma, enquanto o aplicativo realiza tarefas específicas para o usuário.", d: "O sistema faz o que o usuário pede, o aplicativo gerencia o hardware.", e: "Sistema é só para servidor, aplicativo para estação de trabalho.",
        correta: "c", comentario: "Sistemas operacionais (Sistema) gerenciam a máquina; editores de texto e navegadores (Aplicativos) resolvem problemas do usuário."
    },
    {
        id: "inf37",
        ano: "2024", banca: "IBADE", orgao: "Pref. Ouro Preto do Oeste - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Dentre os dispositivos listados abaixo, o único que pode ser corretamente classificado como um dispositivo tanto de entrada quanto de saída de dados (Híbrido).",
        a: "Impressora.", b: "Monitor.", c: "Tela sensível ao toque.", d: "Scanner.", e: "Teclado.",
        correta: "c", comentario: "O Touch Screen permite ver os dados (saída) e interagir tocando na tela (entrada)."
    },
    {
        id: "inf38",
        ano: "2024", banca: "IBADE", orgao: "Câmara de Ouro Preto do Oeste - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O dispositivo responsável pelo armazenamento permanente de dados, que não é volátil e mantém as informações quando o sistema está desligado, é o:",
        a: "fonte de alimentação.", b: "placa-mãe.", c: "disco rígido (HD).", d: "Processador.", e: "memória RAM.",
        correta: "c", comentario: "HDs e SSDs são memórias secundárias não voláteis (mantêm os dados sem energia)."
    },
    {
        id: "inf39",
        ano: "2024", banca: "IBADE", orgao: "CRMV-PB", prova: "Fiscal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual das seguintes especificações seria mais adequada para otimizar o processamento de grandes volumes de dados?",
        a: "Processador dual-core, 8GB de RAM, HDD de 500GB.", b: "Processador quad-core, 16GB de RAM, SSD de 256GB.", c: "Processador dual-core, 4GB de RAM, SSD de 128GB.", d: "Processador quad-core, 8GB de RAM, HDD de 1TB.", e: "Processador hexa-core, 32GB de RAM, SSD de 1TB.",
        correta: "e", comentario: "Quanto mais núcleos (hexa-core), memória RAM (32GB) e velocidade de leitura (SSD), melhor o desempenho para grandes volumes de dados."
    },
    {
        id: "inf40",
        ano: "2024", banca: "IBADE", orgao: "CRMV-PB", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual recurso do Windows 10 permite a criação de múltiplos desktops virtuais para organizar diferentes áreas de trabalho?",
        a: "Cortana.", b: "File Explorer.", c: "Task View.", d: "Action Center.", e: "Snap Assist.",
        correta: "c", comentario: "O Task View (Visão de Tarefas) permite gerenciar janelas abertas e criar múltiplas áreas de trabalho virtuais."
    },
    {
        id: "inf41",
        ano: "2024", banca: "IBADE", orgao: "CRMV-PB", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual abordagem é mais eficaz para melhorar o desempenho de um Windows 10 lento após a instalação de muitos programas?",
        a: "substituir o antivírus atual.", b: "desabilitar programas de inicialização desnecessários através do Gerenciador de Tarefas.", c: "executar a restauração do sistema.", d: "alterar a resolução da tela.", e: "deletar arquivos temporários.",
        correta: "b", comentario: "Muitos programas iniciando com o Windows consomem RAM e CPU desde o boot, causando lentidão geral."
    },
    {
        id: "inf42",
        ano: "2024", banca: "IBADE", orgao: "CRMV-PB", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para edição de vídeos de alta resolução, qual a combinação de hardware mais adequada?",
        a: "processador de alta performance, 16GB de RAM e SSD.", b: "processador de médio custo, 8GB de RAM e HDD.", c: "processador de baixo custo, 4GB de RAM e HDD.", d: "processador de alta performance, 8GB de RAM e HDD.", e: "processador de baixo custo, 16GB de RAM e SSD.",
        correta: "a", comentario: "Edição de vídeo exige alto processamento (CPU), memória para frames (RAM) e velocidade de leitura/escrita (SSD)."
    },
    {
        id: "inf43",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Jaru - RO", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Identifique qual das seguintes tecnologias NÃO é considerada uma classificação/geração de computadores.",
        a: "Mainframes;", b: "Microcomputadores;", c: "Minicomputadores;", d: "Supercomputadores;", e: "Ultracompactos.",
        correta: "e", comentario: "Mainframes, mini, micro e supercomputadores são classificações clássicas de porte. 'Ultracompactos' é um termo comercial moderno."
    },
    {
        id: "inf44",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Vila Velha - ES", prova: "Agente de Endemias", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale a alternativa que corresponda ao atalho do Windows 11 responsável por mostrar e ocultar a área de trabalho.",
        a: "Win + Ctrl + C.", b: "Win + Alt + B.", c: "Win + D.", d: "Win + M.", e: "Win + E.",
        correta: "c", comentario: "Win + D (Desktop) minimiza todas as janelas para mostrar a área de trabalho e as restaura se pressionado novamente."
    },
    {
        id: "inf45",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Vila Velha - ES", prova: "Agente de Endemias", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O comando CMD no Windows é responsável por:",
        a: "exibir associações de extensões.", b: "copiar arquivos.", c: "verificar disco.", d: "definir cores do console.", e: "abrir uma outra janela de prompt.",
        correta: "e", comentario: "Executar 'cmd' dentro de um prompt já aberto inicia uma nova instância do interpretador de comandos."
    },
    {
        id: "inf46",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Vila Velha - ES", prova: "Agente Comunitário", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual atalho do Windows 11 é utilizado para bloquear o computador?",
        a: "Win + C", b: "Win + G", c: "Win + Alt + B", d: "Win + Shift + M", e: "Win + L",
        correta: "e", comentario: "Win + L vem de 'Lock' (Bloquear), enviando o usuário para a tela de login imediatamente."
    },
    {
        id: "inf47",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Vila Velha - ES", prova: "Agente Comunitário", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual atalho é responsável por mostrar o menu de contexto (clique direito) do item selecionado no Windows 11?",
        a: "Ctrl + E", b: "Ctrl + F4", c: "Alt + Tab", d: "Shift + F10", e: "Ctrl + Z",
        correta: "d", comentario: "Shift + F10 simula o clique com o botão direito do mouse no elemento selecionado."
    },
    {
        id: "inf48",
        ano: "2024", banca: "IBADE", orgao: "Faceli", prova: "Auxiliar de Secretaria", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Uma planilha eletrônica pode ter a seguinte extensão:",
        a: ".txt", b: ".doc", c: ".pdf", d: ".xls", e: ".xml",
        correta: "d", comentario: ".XLS (e .XLSX) são as extensões clássicas do Microsoft Excel (planilhas)."
    },
    {
        id: "inf49",
        ano: "2024", banca: "IBADE", orgao: "Faceli", prova: "Auxiliar de Secretaria", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "A velocidade e a resolução de uma impressora são informadas pelas seguintes siglas, respectivamente:",
        a: "PPM e DPI.", b: "RPM e DDR.", c: "DPI e PPM.", d: "PPM e DDR", e: "RPM e DPI.",
        correta: "a", comentario: "PPM (Páginas Por Minuto) mede velocidade; DPI (Dots Per Inch/Pontos Por Polegada) mede resolução/qualidade."
    },
    {
        id: "inf50",
        ano: "2024", banca: "IBADE", orgao: "Faceli", prova: "Auxiliar de Secretaria", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para abrir uma nova janela do Explorador de Arquivos no Windows 11, qual atalho pode ser utilizado?",
        a: "Ctrl + D.", b: "Ctrl + N.", c: "Ctrl + F.", d: "Ctrl + W.", e: "Win + E.",
        correta: "e", comentario: "Nota: A questão original trazia alternativas confusas, mas o atalho padrão do Windows para o Explorer é Win + E. Se for dentro de uma pasta já aberta, Ctrl+N abre nova janela."
    },
    {
        id: "inf51",
        ano: "2024", banca: "IBADE", orgao: "Pref. São Felipe D`Oeste", prova: "Pregoeiros", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale a alternativa que corresponda a uma das principais funções do sistema operacional Windows.",
        a: "Gerenciar recursos de hardware.", b: "Realizar cálculos matemáticos.", c: "Realizar buscas na Internet.", d: "Editar imagens no Photoshop.", e: "Enviar mensagens via e-mail.",
        correta: "a", comentario: "A função primordial de qualquer SO é servir de interface entre o hardware e o usuário/aplicativos."
    },
    {
        id: "inf52",
        ano: "2024", banca: "IBADE", orgao: "Pref. São Felipe D`Oeste", prova: "Pregoeiros", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual corresponde a um sistema de arquivo utilizado por dispositivos Windows?",
        a: "APFS.", b: "EXT4.", c: "HFS+.", d: "BTRFS.", e: "NTFS.",
        correta: "e", comentario: "NTFS é o sistema de arquivos padrão para as versões modernas do Windows."
    },
    {
        id: "inf53",
        ano: "2024", banca: "IBADE", orgao: "Pref. São Felipe D`Oeste", prova: "Pregoeiros", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "A respeito do Windows 11, assinale a alternativa INCORRETA.",
        a: "É um software básico.", b: "Possui código-fonte fechado.", c: "Não é capaz de interromper processos em detrimento de outros.", d: "Possui capacidade de operar com várias sessões de usuários.", e: "É um sistema multitarefas.",
        correta: "c", comentario: "O Windows é um sistema de multitarefa preemptiva, ou seja, o SO pode sim interromper processos para gerenciar recursos."
    },
    {
        id: "inf54",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Jaru - RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual comando deve ser utilizado no prompt de comando do Windows para exibir o conteúdo de uma pasta?",
        a: "dir (Directory);", b: "ls (List);", c: "open;", d: "show;", e: "cd (Change Directory).",
        correta: "a", comentario: "No Windows/DOS usa-se 'dir'. O comando 'ls' é típico de sistemas Linux/Unix."
    },
    {
        id: "inf55",
        ano: "2024", banca: "IBADE", orgao: "Prefeitura de Joinville - SC", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para que um usuário do Windows 11 ative a Barra de Menus em um aplicativo ativo, qual atalho pode ser utilizado?",
        a: "F7.", b: "F8.", c: "F9.", d: "F10.", e: "F11.",
        correta: "d", comentario: "O F10 destaca a barra de menus nos aplicativos que a possuem (como o Bloco de Notas)."
    },
    {
        id: "inf56",
        ano: "2024", banca: "IBADE", orgao: "CRMV-ES", prova: "Agente Fiscal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O tamanho de um arquivo de 1 TB equivale a quantos bytes?",
        a: "1024 bytes;", b: "1.048.576 bytes;", c: "1.073.741.824 bytes;", d: "1.099.511.627.776 bytes;", e: "1.125.899.906.842.624 bytes.",
        correta: "d", comentario: "1 TB = 1024 GB = 1024³ MB = 1024⁴ bytes ($1024^4 = 1.099.511.627.776$)."
    },
    {
        id: "inf57",
        ano: "2024", banca: "IBADE", orgao: "SESDEC-RO", prova: "Serviços Administrativos", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale a função desempenhada pelo atalho Alt + Tab no Windows 11.",
        a: "Bloquear o computador", b: "Alternar entre aplicativos abertos.", c: "Desfazer uma ação.", d: "Colar o item selecionado.",
        correta: "b", comentario: "Alt + Tab é o atalho clássico para alternância rápida entre janelas abertas."
    },
    {
        id: "inf58",
        ano: "2024", banca: "IBADE", orgao: "SESDEC-RO", prova: "Serviços Administrativos", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual é o elemento central de processamento ('cérebro') da máquina, responsável por receber e interpretar informações?",
        a: "placa-mãe.", b: "memória RAM.", c: "fonte de alimentação.", d: "processador.",
        correta: "d", comentario: "O processador (CPU) é a unidade lógica que executa as instruções dos programas."
    },
    {
        id: "inf59",
        ano: "2024", banca: "IBADE", orgao: "SESDEC-RO", prova: "Serviços Administrativos", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O item acoplado sobre a CPU para controlar e manter a temperatura dentro dos padrões é o:",
        a: "barramento PCI.", b: "drive óptico.", c: "cooler.", d: "gabinete.",
        correta: "c", comentario: "O cooler (ventoinha + dissipador) evita o superaquecimento do processador."
    },
    {
        id: "inf60",
        ano: "2024", banca: "IBADE", orgao: "SESDEC-RO", prova: "Serviços Administrativos", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "São tipos de dispositivos de armazenamento, EXCETO:",
        a: "placa de vídeo.", b: "pendrive.", c: "disco rígido.", d: "SSD.",
        correta: "a", comentario: "Placa de vídeo é um periférico de processamento gráfico e saída, não de armazenamento de arquivos."
    },
    {
        id: "inf61",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura de Tarauacá - AC", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O que é um 'arquivo' em um contexto de computação?",
        a: "Uma pasta virtual", b: "Um programa de edição de imagens", c: "Uma unidade de armazenamento", d: "Um tipo de vírus", e: "Um documento ou conjunto de dados armazenados em um local específico",
        correta: "e", comentario: "Arquivos são coleções de dados logicamente relacionados armazenados em mídias (HD, SSD)."
    },
    {
        id: "inf62",
        ano: "2023", banca: "IBADE", orgao: "RBPREV - AC", prova: "Técnico Previdenciário", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Linux, qual a função das chaves { } nos metacaracteres?",
        a: "sequência de caracteres deve coincidir.", b: "qualquer um (e exatamente um) caractere.", c: "qualquer número variado de caracteres.", d: "implementação da linguagem.", e: "qualquer um (e exatamente um) caractere dentro do conjunto.",
        correta: "a", comentario: "As chaves no Shell Linux são usadas para expansão de strings ou para definir um conjunto de coincidências específicas."
    },
    {
        id: "inf63",
        ano: "2023", banca: "IBADE", orgao: "Pref. Rio Branco - AC", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual a funcionalidade de um cooler para o funcionamento de um computador?",
        a: "Integração entre peças", b: "Performance no SSD", c: "Resfriar componentes internos", d: "Higienizar componentes", e: "Processar dados",
        correta: "c", comentario: "A função do cooler é dissipar o calor gerado pelos componentes eletrônicos (especialmente a CPU)."
    },
    {
        id: "inf64",
        ano: "2023", banca: "IBADE", orgao: "Pref. Rio Branco - AC", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Se a temperatura da CPU está muito alta causando desligamentos, qual a solução mais indicada?",
        a: "Trocar RAM", b: "Trocar placa mãe", c: "Comprar outro PC", d: "Trocar o cooler do processador", e: "Trocar placa de vídeo",
        correta: "d", comentario: "Superaquecimento da CPU é resolvido melhorando o sistema de arrefecimento (cooler/pasta térmica)."
    },
    {
        id: "inf65",
        ano: "2023", banca: "IBADE", orgao: "Pref. Rio Branco - AC", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual das seguintes características pode ser atribuída à memória RAM?",
        a: "Armazenamento permanente", b: "Lentidão no gerenciamento", c: "Armazenamento de dados temporário", d: "Comunicação física das peças", e: "Alocada no socket da CPU",
        correta: "c", comentario: "A RAM é volátil; ela armazena dados apenas enquanto há energia, servindo como espaço de trabalho temporário."
    },
    {
        id: "inf66",
        ano: "2023", banca: "IBADE", orgao: "Prefeitura de Rio Branco - AC", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Um fotógrafo reparou que o Windows mostra que a pasta tem um tamanho de 12.560 KB. Qual o tamanho da pasta em MB?",
        a: "125 MB", b: "1256 MB", c: "1,25 MB", d: "12,56 MB", e: "12.26 MB",
        correta: "d", comentario: "Para converter KB para MB, dividimos por 1024 (ou aproximadamente 1000 para cálculos rápidos de banca). 12.560 / 1000 = 12,56 MB."
    },
    {
        id: "inf67",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de Colíder - MT", prova: "Técnico em Segurança", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Analise: I- O arquivo do Gerenciador de Arquivo do Windows é o Explorer.exe. II- Para movimentar arquivos, utiliza-se Ctrl + Z. III- .txt é arquivo de texto com formatação. Está(ão) correta(s):",
        a: "I e II.", b: "I, II e III.", c: "II, apenas.", d: "II e III.", e: "I, apenas.",
        correta: "e", comentario: "I está correta. II está incorreta (Ctrl+Z desfaz). III está incorreta (.txt é texto sem formatação; .rtf ou .docx têm formatação)."
    },
    {
        id: "inf68",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de Colíder - MT", prova: "Técnico em Segurança", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual é o comando utilizado para delimitar um arquivo em colunas ou posição de campo no terminal do Linux?",
        a: "Mon.", b: "Dow.", c: "Cmd.", d: "Cut.", e: "Bg.",
        correta: "d", comentario: "O comando 'cut' é utilizado no Linux para remover seções (colunas/campos) de cada linha de arquivos."
    },
    {
        id: "inf69",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de Colíder - MT", prova: "Técnico em Segurança", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "A tecla Tab, na linha de comando do Linux, permite que o usuário:",
        a: "saia de um comando.", b: "ative programa em segundo plano.", c: "complete automaticamente o que está sendo digitado.", d: "desconecte-se do terminal.", e: "limpe o terminal.",
        correta: "c", comentario: "O recurso de 'auto-complete' do terminal Linux é acionado pela tecla Tab."
    },
    {
        id: "inf70",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de Colíder - MT", prova: "Técnico em Segurança", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para que o usuário do Linux feche um aplicativo que está ativo, deve ser utilizado o atalho:",
        a: "Alt + F2.", b: "Ctrl + Q.", c: "Ctrl + Alt + F7.", d: "Ctrl + F", e: "Alt + Tab.",
        correta: "b", comentario: "Ctrl + Q (Quit) é o atalho padrão para fechar aplicativos em diversas interfaces Linux."
    },
    {
        id: "inf71",
        ano: "2022", banca: "IBADE", orgao: "Pref. Barra de São Francisco - ES", prova: "Guarda Municipal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No teclado, a tecla de controle 'Esc' tem a função de:",
        a: "ligar maiúsculas.", b: "selecionar teclado numérico.", c: "abandonar uma tela, um programa ou um menu.", d: "mover o cursor ao final da linha.", e: "movimentar paradas de tabulação.",
        correta: "c", comentario: "Esc (Escape) serve para cancelar tarefas, fechar menus ou sair de modos de tela cheia."
    },
    {
        id: "inf72",
        ano: "2022", banca: "IBADE", orgao: "Pref. Barra de São Francisco - ES", prova: "Guarda Municipal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale a alternativa que represente um dispositivo de SAÍDA de dados.",
        a: "Monitor de vídeo.", b: "Mouse.", c: "Mesa digitalizadora.", d: "Teclado.", e: "CD-Rom.",
        correta: "a", comentario: "O monitor exibe a informação processada ao usuário. Mouse e teclado são de entrada."
    },
    {
        id: "inf73",
        ano: "2022", banca: "IBADE", orgao: "Pref. Barra de São Francisco - ES", prova: "Técnico em Enfermagem", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "NÃO é um sistema de arquivo nativo ou suportado pelo Windows:",
        a: "FAT16.", b: "NTFS.", c: "JFS.", d: "HPFS.", e: "FAT32.",
        correta: "c", comentario: "JFS (Journaled File System) é utilizado principalmente em sistemas baseados em Linux/Unix."
    },
    {
        id: "inf74",
        ano: "2022", banca: "IBADE", orgao: "Pref. Barra de São Francisco - ES", prova: "Técnico em Enfermagem", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 10, qual comando ativa a opção 'Aero Flip' (alternância 3D/lista de janelas)?",
        a: "Ctrl + Alt + Tab.", b: "Win + Home.", c: "Win + Seta.", d: "Alt + Shift.", e: "F7.",
        correta: "a", comentario: "O Ctrl + Alt + Tab fixa a visualização das janelas abertas para alternância."
    },
    {
        id: "inf75",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de Acrelândia - AC", prova: "Técnico em Enfermagem", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para ativar a assistente virtual (Cortana) no Windows 10, qual atalho o usuário deve utilizar?",
        a: "Win + A.", b: "Alt + Tab.", c: "Win + Home.", d: "Win + C.", e: "Ctrl + Alt + Tab.",
        correta: "d", comentario: "O atalho Win + C era o padrão para abrir a Cortana no Windows 10 (em versões que ainda a suportavam como assistente ativa)."
    },
    {
        id: "inf76",
        ano: "2022", banca: "IBADE", orgao: "Faceli", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O comando touch, no sistema operacional Linux, permite que o usuário:",
        a: "localize um arquivo.", b: "execute tarefas root.", c: "verifique espaço em disco.", d: "visualize primeiras linhas.", e: "crie arquivos em branco.",
        correta: "e", comentario: "O comando touch é usado para criar arquivos vazios ou atualizar a data de acesso/modificação."
    },
    {
        id: "inf77",
        ano: "2022", banca: "IBADE", orgao: "Faceli", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual componente tem como função transmitir informação ao utilizador através da imagem, estimulando a visão?",
        a: "Impressora.", b: "Placa de vídeo.", c: "Webcam.", d: "Monitor.", e: "Scanner.",
        correta: "d", comentario: "O monitor é o periférico de saída visual padrão."
    },
    {
        id: "inf78",
        ano: "2022", banca: "IBADE", orgao: "Câmara de Acrelândia - AC", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale a alternativa que corresponda a um formato de arquivo suportado pelo MS-PowerPoint.",
        a: "xlsx.", b: ".docx.", c: ".html.", d: ".ppz.", e: ".bmp",
        correta: "e", comentario: "O PowerPoint suporta a inserção de imagens BMP. .xlsx é Excel, .docx é Word."
    },
    {
        id: "inf79",
        ano: "2022", banca: "IBADE", orgao: "Câmara de Acrelândia - AC", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O diretório '/proc' no Linux tem como função:",
        a: "conter informações sobre os processos do sistema.", b: "armazenar arquivos temporários de boot.", c: "conter drivers do kernel.", d: "armazenar diretórios /home.", e: "conter arquivos temporários.",
        correta: "a", comentario: "O /proc é um sistema de arquivos virtual que fornece informações sobre o estado do kernel e processos."
    },
    {
        id: "inf80",
        ano: "2022", banca: "IBADE", orgao: "Câmara de Acrelândia - AC", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "São sistemas de arquivo nativos do Linux, EXCETO:",
        a: "JFS.", b: "Ext4.", c: "ReiserFS.", d: "NTFS.", e: "Btrfs.",
        correta: "d", comentario: "NTFS é o sistema de arquivos proprietário da Microsoft (Windows)."
    },
    {
        id: "inf81",
        ano: "2022", banca: "IBADE", orgao: "INOVA Capixaba - ES", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Sobre a Unidade de Controle (UC) do processador, é correto afirmar que:",
        a: "executa operações aritméticas.", b: "supervisiona todas as operações do computador, interpreta e busca instruções na memória.", c: "usada para armazenamento temporário.", d: "mantém informações Flash-ROM.", e: "conecta computadores distantes.",
        correta: "b", comentario: "A UC gerencia o fluxo de dados e instruções dentro da CPU. A execução matemática fica com a ULA."
    },
    {
        id: "inf82",
        ano: "2022", banca: "IBADE", orgao: "INOVA Capixaba - ES", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual a função destinada à 'Northbridge' (Ponte Norte) do Chipset?",
        a: "Controla SATA e som on-board.", b: "Mantém data e hora.", c: "Comunicação do processador com memórias e barramentos de alta velocidade (AGP/PCI Express).", d: "Leitura de imagens impressas.", e: "Armazena dados voláteis.",
        correta: "c", comentario: "A Ponte Norte lida com os componentes mais rápidos (CPU, RAM, Vídeo), por isso costuma ter dissipador."
    },
    {
        id: "inf83",
        ano: "2022", banca: "IBADE", orgao: "INOVA Capixaba - ES", prova: "Técnico de Segurança", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual extensão de arquivo é utilizada para salvar imagens em um computador?",
        a: ".doc.", b: ".avi.", c: ".xlsx.", d: ".jpg.", e: ".pptx.",
        correta: "d", comentario: "JPEG/JPG é o formato universal de compressão de imagens fotográficas."
    },
    {
        id: "inf84",
        ano: "2022", banca: "IBADE", orgao: "Pref. Costa Marques - RO", prova: "Técnico em TI", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Assinale os passos para alteração do navegador padrão no Windows (versões clássicas):",
        a: "Painel de Controle > Ferramentas Administrativas.", b: "Painel de Controle > Gerenciamento do computador.", c: "Painel de Controle > Opções de indexação.", d: "Painel de Controle > Programas e Recursos.", e: "Iniciar > Painel de Controle > Programas Padrão > Definir Programas Padrão",
        correta: "e", comentario: "O menu Programas Padrão gerencia quais aplicativos abrem determinados tipos de arquivos ou protocolos (como HTTP)."
    },
    {
        id: "inf85",
        ano: "2022", banca: "IBADE", orgao: "Pref. Costa Marques - RO", prova: "Técnico em TI", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Sobre Hardware e Software, avalie: I. Hardware são programas. II. Exemplos de hardware: teclado, vídeo, mouse. III. Software é a parte física. IV. Exemplos de software: Windows, Word. Estão corretas:",
        a: "I e II.", b: "I e III.", c: "III e IV.", d: "II e IV.", e: "II, III e IV.",
        correta: "d", comentario: "Hardware é físico (II) e Software é lógico/programa (IV). I e III inverteram os conceitos."
    },
    {
        id: "inf86",
        ano: "2022", banca: "IBADE", orgao: "Pref. Costa Marques - RO", prova: "Técnico em TI", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual a função do atalho 'Win + M' no Windows?",
        a: "Print da janela ativa.", b: "Abrir o Explorer.", c: "Duplicar imagem.", d: "Minimizar todas as janelas.", e: "Abrir propriedades do sistema.",
        correta: "d", comentario: "Win + M minimiza tudo. Win + Shift + M restaura as janelas minimizadas."
    },
    {
        id: "inf87",
        ano: "2022", banca: "IBADE", orgao: "Pref. Costa Marques - RO", prova: "Técnico em TI", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual NÃO corresponde a uma funcionalidade da Barra de Tarefas do Windows?",
        a: "Fixar programas.", b: "Desagrupar programas.", c: "Área de notificação.", d: "Menu iniciar.", e: "Exibir informações sobre o tamanho dos arquivos.",
        correta: "e", comentario: "Tamanhos de arquivos são exibidos no Explorador de Arquivos, não na Barra de Tarefas."
    },
    {
        id: "inf88",
        ano: "2022", banca: "IBADE", orgao: "Pref. Costa Marques - RO", prova: "Técnico em TI", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Correlacione: (1) Saída, (2) Entrada, (3) Híbrido. Itens: Teclado, Monitor, Mouse, Tela Touch, Caixa de Som.",
        a: "2, 1, 2, 3, 1", b: "1, 1, 2, 2, 3", c: "2, 1, 3, 1, 2", d: "3, 1, 2, 2, 3", e: "3, 2, 2, 3, 1",
        correta: "a", comentario: "Teclado(2), Monitor(1), Mouse(2), Touch(3), Caixa Som(1)."
    },
    {
        id: "inf89",
        ano: "2022", banca: "IBADE", orgao: "CRC-RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Sobre o Windows 10, é INCORRETO afirmar que:",
        a: "possui sistema monolítico.", b: "é um software livre.", c: "é multitarefa.", d: "opera com várias sessões.", e: "interrompe processos (preemptivo).",
        correta: "b", comentario: "O Windows é um software proprietário de código fechado."
    },
    {
        id: "inf90",
        ano: "2022", banca: "IBADE", orgao: "CRC-RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual comando abre o Gerenciador de Tarefas no Windows 10?",
        a: "Ctrl + Shift + Esc", b: "Win + D", c: "Ctrl + A", d: "Alt + Tab", e: "Win + Shift + M",
        correta: "a", comentario: "Atalho direto para o Gerenciador de Tarefas."
    },
    {
        id: "inf91",
        ano: "2022", banca: "IBADE", orgao: "CRC-RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "É de responsabilidade do cabo IDE ou SATA:",
        a: "transmitir grande volume de dados entre a placa mãe e o HD.", b: "possuir recursos de memória dedicada.", c: "leitura de CDs/DVDs apenas.", d: "armazenar dados de trabalho.", e: "fazer cálculos matemáticos.",
        correta: "a", comentario: "São interfaces de conexão e transferência de dados para unidades de armazenamento."
    },
    {
        id: "inf92",
        ano: "2022", banca: "IBADE", orgao: "Pref. São Paulo - SP", prova: "Guarda Civil", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Ao usar PRINT SCREEN e depois CTRL+V no Paint, o Windows utiliza qual recurso?",
        a: "área de transferência.", b: "editor de vídeo.", c: "mapeamento.", d: "backup.", e: "compartilhamento.",
        correta: "a", comentario: "A Área de Transferência (Clipboard) armazena temporariamente dados copiados ou recortados."
    },
    {
        id: "inf93",
        ano: "2022", banca: "IBADE", orgao: "Pref. São Paulo - SP", prova: "Guarda Civil", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para renomear um arquivo no Windows através dos botões da interface, deve-se:",
        a: "acessar monitor de recursos.", b: "acionar botão organizar e clicar em renomear.", c: "clicar com botão esquerdo e no menu clicar em renomear.", d: "clicar em informações.", e: "acionar F4.",
        correta: "b", comentario: "No Windows 7, o menu 'Organizar' trazia a opção de renomear. Nota: Na alternativa C, seria botão direito para abrir o menu de contexto."
    },
    {
        id: "inf94",
        ano: "2022", banca: "IBADE", orgao: "Prefeitura de São Paulo - SP", prova: "Guarda Civil Metropolitano", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Ao clicar duas vezes com o botão esquerdo em 'Computador' no menu iniciar do Windows 7, o usuário acessa uma janela contendo:",
        a: "a lista de programas mais usados.", b: "o nome e a descrição do computador.", c: "os documentos da área de trabalho.", d: "as unidades de disco presentes no computador.", e: "o sistema de arquivos e o espaço utilizado.",
        correta: "d", comentario: "A janela 'Computador' (ou 'Este Computador') exibe as unidades de armazenamento (HD, SSD, Pendrives) e dispositivos de mídia."
    },
    {
        id: "inf95",
        ano: "2021", banca: "IBADE", orgao: "VIVA COMUNIDADE-VIVA RIO", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 7, em qual aba das 'Propriedades' de um disco encontra-se o caminho para a verificação de erros no volume?",
        a: "Geral.", b: "Hardware.", c: "Ferramentas.", d: "Segurança.", e: "Compartilhamento.",
        correta: "c", comentario: "Na aba 'Ferramentas' estão as utilidades de verificação de erros (Chkdsk) e desfragmentação."
    },
    {
        id: "inf96",
        ano: "2021", banca: "IBADE", orgao: "ISE-AC", prova: "Auxiliar Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para alterar as configurações de contas de usuário e senhas no Windows, qual o caminho correto no Painel de Controle?",
        a: "Sistema e segurança.", b: "Hardware e sons.", c: "Programas.", d: "Contas de usuário.", e: "Rede e internet.",
        correta: "d", comentario: "A categoria 'Contas de Usuário' permite gerenciar perfis, trocar senhas e fotos de login."
    },
    {
        id: "inf97",
        ano: "2020", banca: "IBADE", orgao: "Câmara de Ji-Paraná - RO", prova: "Motorista", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Dispositivo pequeno e leve, composto de memória flash e conectado via porta USB para armazenamento de dados:",
        a: "Fita DAT", b: "HD Sata", c: "HD SCSI", d: "Pen Drive", e: "LTO Tape",
        correta: "d", comentario: "O Pen Drive utiliza chips de memória flash (não volátil) e a interface USB para portabilidade."
    },
    {
        id: "inf98",
        ano: "2020", banca: "IBADE", orgao: "Câmara de Ji-Paraná - RO", prova: "Motorista", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para visualizar o percentual de espaço livre no disco C através de um gráfico no Windows, o usuário deve clicar com o botão direito no ícone do disco e selecionar:",
        a: "Pesquisar.", b: "Propriedades.", c: "Formatar.", d: "Compartilhar.", e: "Copiar.",
        correta: "b", comentario: "A tela de 'Propriedades' (aba Geral) exibe um gráfico de pizza com o espaço usado e livre."
    },
    {
        id: "inf99",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Cariacica - ES", prova: "Guarda Municipal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Os Pen Drives se conectam aos computadores através de qual porta?",
        a: "SATA", b: "SCSI.", c: "USB.", d: "ATA.", e: "HDMI.",
        correta: "c", comentario: "USB (Universal Serial Bus) é a interface padrão para periféricos removíveis."
    },
    {
        id: "inf100",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Cariacica - ES", prova: "Guarda Municipal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 7, ferramentas como o 'Mapa de Caracteres' residem na pasta 'Ferramentas do Sistema', que fica dentro de:",
        a: "Manutenção.", b: "Acessórios.", c: "Inicialização", d: "Microsoft Works.", e: "Extras e Atualizações.",
        correta: "b", comentario: "O caminho clássico é Iniciar > Todos os Programas > Acessórios > Ferramentas do Sistema."
    },
    {
        id: "inf101",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Vigilância Sanitária", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Linux, o usuário (userid) com a maior autoridade chama-se:",
        a: "Main.", b: "Admin.", c: "Master.", d: "Root.", e: "Principal.",
        correta: "d", comentario: "O 'root' é o superusuário do sistema, com permissões totais sobre arquivos e comandos."
    },
    {
        id: "inf102",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Vila Velha - ES", prova: "Técnico de Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Sobre o formato CSV (valores separados por vírgulas), é correto afirmar que:",
        a: "I e V estão corretas.", b: "II e III estão corretas.", c: "II e IV estão corretas.", d: "III e IV estão corretas.", e: "Somente a III está correta.",
        correta: "a", comentario: "CSV é texto puro (sem formatação/fórmulas) e cada registro é uma linha (I e V)."
    },
    {
        id: "inf103",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Interfaces dos tipos VGA, SVGA e HDMI são utilizadas pelo seguinte periférico:",
        a: "Disco Rígido.", b: "Monitor.", c: "Scanner.", d: "Mouse.", e: "Impressora.",
        correta: "b", comentario: "São padrões de conexão de vídeo para saída de imagem em monitores ou projetores."
    },
    {
        id: "inf104",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O Windows 7 é um:",
        a: "aplicativo.", b: "software livre.", c: "sistema operacional.", d: "software utilitário.", e: "web browser.",
        correta: "c", comentario: "O Windows é o software base que gerencia o hardware e permite a execução de outros programas."
    },
    {
        id: "inf105",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Professor", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Pen Drives são conectados aos computadores através de qual tecnologia?",
        a: "ATA", b: "SATA", c: "VGA", d: "USB", e: "SVGA",
        correta: "d", comentario: "A tecnologia de barramento serial universal (USB) é a utilizada pelos pen drives."
    },
    {
        id: "inf106",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Professor", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual sistema operacional possui código aberto (open source)?",
        a: "Windows 7.", b: "Windows Server.", c: "Vmware.", d: "Linux.", e: "Z/OS.",
        correta: "d", comentario: "O Linux permite que qualquer pessoa veja, modifique e distribua seu código-fonte."
    },
    {
        id: "inf107",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Técnico Agrícola", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual procedimento reorganiza o disco, colocando os arquivos em blocos contíguos para acelerar o acesso?",
        a: "Limpeza de disco.", b: "Desfragmentador do disco.", c: "Restauração do sistema.", d: "Back-up.", e: "Monitor de desempenho.",
        correta: "b", comentario: "A desfragmentação 'une' as partes espalhadas dos arquivos, otimizando a leitura mecânica do HD."
    },
    {
        id: "inf108",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Técnico Agrícola", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Dos softwares abaixo, aquele que NÃO é um sistema operacional é:",
        a: "SOLARIS.", b: "Windows Office.", c: "IOS.", d: "Windows Server.", e: "Android.",
        correta: "b", comentario: "Microsoft Office é uma suíte de aplicativos (Word, Excel). O Windows é o SO."
    },
    {
        id: "inf109",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Monitor de Educação", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O programa Postgre (PostgreSQL) é um software de:",
        a: "edição de vídeos", b: "planilha eletrônica.", c: "banco de dados.", d: "editor de texto.", e: "edição de imagens.",
        correta: "c", comentario: "O PostgreSQL é um Sistema Gerenciador de Banco de Dados (SGBD) relacional de código aberto."
    },
    {
        id: "inf110",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Monitor de Educação", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Em um ambiente Windows, um arquivo com extensão MP4 é usado para:",
        a: "textos.", b: "vídeos.", c: "sons.", d: "slides.", e: "imagens.",
        correta: "b", comentario: "MP4 é um formato de contêiner digital muito usado para armazenar vídeo e áudio."
    },
    {
        id: "inf111",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Monitor de Educação", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Dentre as extensões abaixo, qual designa um arquivo executável que pode instalar um vírus?",
        a: ".jpeg", b: ".vir", c: ".aws", d: ".xls", e: ".exe",
        correta: "e", comentario: ".EXE vem de 'Executable'. Arquivos que executam código são os principais vetores de infecção."
    },
    {
        id: "inf112",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Monitor de Educação", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O Microsoft Windows é um(a):",
        a: "editor de texto.", b: "sistema operacional.", c: "navegador.", d: "editor de imagens.", e: "planilha eletrônica.",
        correta: "b", comentario: "Definição básica do produto principal da Microsoft."
    },
    {
        id: "inf113",
        ano: "2020", banca: "IBADE", orgao: "Prefeitura de Linhares - ES", prova: "Monitor de Educação Infantil", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O sistema operacional utilizado pelo Iphone e pelo Ipad denomina-se:",
        a: "Windows 10.", b: "Linux.", c: "Android.", d: "IOS.", e: "Windows server",
        correta: "d", comentario: "O iOS é o sistema operacional móvel exclusivo da Apple para seus dispositivos portáteis."
    },
    {
        id: "inf114",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Jaru - RO", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Pen Drives utilizam o seguinte tipo de memória:",
        a: "VRAM.", b: "FLASH.", c: "SDRAM.", d: "ROM.", e: "RAM.",
        correta: "b", comentario: "Memória Flash é um tipo de memória não volátil que pode ser eletricamente apagada e reprogramada."
    },
    {
        id: "inf115",
        ano: "2019", banca: "IBADE", orgao: "SAAE de Vilhena - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Quantos Kbytes possui 1 GygaByte?",
        a: "1.000.000", b: "1.200.000", c: "1.044.488", d: "2.048.432", e: "1.048.576",
        correta: "e", comentario: "1 GB = 1024 MB. 1 MB = 1024 KB. Logo, 1024 * 1024 = 1.048.576 KB."
    },
    {
        id: "inf116",
        ano: "2019", banca: "IBADE", orgao: "SAAE de Vilhena - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "A partir de 1996, surge uma nova forma de conexão de dispositivos (Mouses, Teclados, Pen Drives) aos computadores. Chamamos de:",
        a: "SATA", b: "SCSI", c: "USB", d: "TCP-IP", e: "VGA",
        correta: "c", comentario: "O USB (Universal Serial Bus) revolucionou a conexão de periféricos pela facilidade de uso (Plug and Play)."
    },
    {
        id: "inf117",
        ano: "2019", banca: "IBADE", orgao: "DEPASA - AC", prova: "Torneiro Mecânico", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Marque a alternativa que apresenta uma extensão comumente utilizada para imagens.",
        a: "EXE", b: "TXT", c: "PNG", d: "AVI", e: "XLS",
        correta: "c", comentario: "PNG é um formato de dados de imagem que suporta compressão sem perda."
    },
    {
        id: "inf118",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Seringueiras - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual das alternativas abaixo NÃO indica um sistema operacional?",
        a: "Linux.", b: "Windows.", c: "MS-DOS.", d: "Oracle.", e: "Mac OS.",
        correta: "d", comentario: "Oracle é uma empresa de tecnologia famosa pelo seu Sistema Gerenciador de Banco de Dados, não um sistema operacional."
    },
    {
        id: "inf119",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Seringueiras - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Quando uma informação é salva de forma permanente em um computador, o hardware utilizado para armazená-la é o(a):",
        a: "processador.", b: "memória RAM.", c: "disco rígido.", d: "placa mãe.", e: "placa de vídeo.",
        correta: "c", comentario: "O Disco Rígido (HD) ou SSD são memórias secundárias que armazenam dados de forma permanente (não volátil)."
    },
    {
        id: "inf120",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Vilhena - RO", prova: "Arquiteto", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual das alternativas abaixo contém a extensão de um arquivo executável no sistema operacional Microsoft Windows?",
        a: "Teste.txt", b: "Teste.jpg", c: "Teste.mp3", d: "Teste.doc", e: "Teste.exe",
        correta: "e", comentario: "A extensão .exe identifica arquivos de programas que podem ser executados pelo Windows."
    },
    {
        id: "inf121",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Vilhena - RO", prova: "Arquiteto", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Qual dos softwares abaixo é um exemplo de software livre?",
        a: "Microsoft Windows", b: "Linux", c: "Oracle", d: "Mac OS", e: "SAP ERP",
        correta: "b", comentario: "O Linux é o exemplo mais clássico de software livre/código aberto."
    },
    {
        id: "inf122",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Vilhena - RO", prova: "Arquiteto", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Nos teclados para Windows, há uma tecla que captura uma imagem da tela (print). Essa tecla se chama:",
        a: "home.", b: "esc.", c: "printscreen.", d: "scroll lock.", e: "insert.",
        correta: "c", comentario: "Print Screen captura a tela inteira e a envia para a Área de Transferência."
    },
    {
        id: "inf123",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Aracruz - ES", prova: "Oficial de Controle Animal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para editar adequadamente um arquivo com a extensão .pps devemos utilizar o seguinte programa:",
        a: "Bloco de Notas.", b: "MS Word.", c: "Ms Excel.", d: "Google Chrome.", e: "MS Power point.",
        correta: "e", comentario: ".pps é a extensão para 'Apresentação de Slides do PowerPoint'."
    },
    {
        id: "inf124",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Aracruz - ES", prova: "Oficial de Controle Animal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Ao copiar um texto no Word para colar no Bloco de Notas, esse texto ficará momentaneamente na:",
        a: "Pasta de Arquivos.", b: "Área de Trabalho.", c: "Área de Transferência.", d: "Word Buffer.", e: "Área de interação.",
        correta: "c", comentario: "A Área de Transferência armazena temporariamente qualquer item copiado ou recortado."
    },
    {
        id: "inf125",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Aracruz - ES", prova: "Tradutor de Libras", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 10, a execução do atalho logotipo do Windows + E tem por objetivo acessar:",
        a: "painel de controle.", b: "painel de configurações.", c: "gerenciador de aplicativos.", d: "gerenciador de dispositivos.", e: "gerenciador de pastas e arquivos.",
        correta: "e", comentario: "Win + E abre o Explorador de Arquivos (File Explorer)."
    },
    {
        id: "inf126",
        ano: "2019", banca: "IBADE", orgao: "IF-RO", prova: "Técnico de Laboratório", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Mídia do tipo Compact-Disk (CD) que permite ao usuário gravar e regravar dados várias vezes:",
        a: "CD-ROM", b: "CD-RW", c: "CD-R", d: "DVD-ROM", e: "DVD-R",
        correta: "b", comentario: "RW significa ReWritable (Regravável)."
    },
    {
        id: "inf127",
        ano: "2019", banca: "IBADE", orgao: "IF-RO", prova: "Técnico de Laboratório", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 7, para maximizar uma janela utilizando teclas de atalho, usa-se Winkey +",
        a: "G", b: "T", c: "END", d: "Seta para cima.", e: "Seta para esquerda.",
        correta: "d", comentario: "Winkey + Seta para cima maximiza a janela ativa."
    },
    {
        id: "inf128",
        ano: "2019", banca: "IBADE", orgao: "JARU-PREVI - RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "A extensão que identifica o arquivo como um documento (Portable Document Format) é:",
        a: ".exe", b: ".aws", c: ".pdf", d: ".mp3", e: ".jpg",
        correta: "c", comentario: ".pdf é o formato padrão para documentos portáteis."
    },
    {
        id: "inf129",
        ano: "2019", banca: "IBADE", orgao: "JARU-PREVI - RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows, a rotina que enfileira e controla a impressão de relatórios é chamada de:",
        a: "Data-base", b: "Defrag", c: "Média Direct", d: "Spooling", e: "Software Manager",
        correta: "d", comentario: "Spooling de impressão organiza os documentos que aguardam na fila da impressora."
    },
    {
        id: "inf130",
        ano: "2019", banca: "IBADE", orgao: "JARU-PREVI - RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "O Windows Server é considerado um (uma):",
        a: "site de busca.", b: "rede social.", c: "sistema operacional.", d: "navegador WEB.", e: "programa de back-up.",
        correta: "c", comentario: "O Windows Server é a versão do sistema operacional da Microsoft voltada para servidores."
    },
    {
        id: "inf131",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Itapemirim - ES", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Dentre os softwares relacionados, é um sistema operacional o:",
        a: "Excel.", b: "Mozilla Firefox.", c: "PowerPoint.", d: "Windows 7.", e: "Windows Explorer.",
        correta: "d", comentario: "Windows 7 é o software base (S.O.). Excel e PowerPoint são aplicativos."
    },
    {
        id: "inf132",
        ano: "2019", banca: "IBADE", orgao: "Prefeitura de Jaru - RO", prova: "Assistente Administrativo", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No MS Windows 7 a tecla Prtn Scrn executa a seguinte função:",
        a: "cria PDF.", b: "imprime a tela.", c: "copia a tela para a área de transferência.", d: "salva imagem no C:.", e: "apaga a tela.",
        correta: "c", comentario: "A função do Print Screen é capturar e copiar a imagem da tela."
    },
    {
        id: "inf133",
        ano: "2019", banca: "IBADE", orgao: "IABAS", prova: "Técnico de Enfermagem", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "Para salvar uma imagem relevante de uma página da internet na área de transferência, usa-se:",
        a: "Prnt Scrn.", b: "Insert.", c: "Page Dn.", d: "PageUp.", e: "Num Lk.",
        correta: "a", comentario: "Print Screen captura o que está sendo visualizado no navegador."
    },
    {
        id: "inf134",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Rio Branco - AC", prova: "Cuidador Pessoal", materia: "Informática",
        assunto: "Inf.Básica",
        enunciado: "No Windows 7 BR, para selecionar TODOS os arquivos armazenados em uma pasta, usa-se o atalho:",
        a: "Shift + T", b: "Alt + T", c: "Alt + A", d: "Ctrl + T", e: "Ctrl + A",
        correta: "e", comentario: "No Windows em Português (BR), Ctrl + A seleciona tudo. No Windows em Inglês, seria Ctrl + A (All)."
    },
    {
        id: "inf135",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Vilhena - RO", prova: "Geral", materia: "Informática",
        assunto: "Hardware",
        enunciado: "Um drive do tipo LTO (Linear Tape-Open) é usado para:",
        a: "planilha eletrônica.", b: "editor de imagens.", c: "sistema operacional.", d: "armazenamento em fita magnética (backup).", e: "editor de texto.",
        correta: "d", comentario: "LTO é uma tecnologia de armazenamento em fita magnética, amplamente utilizada para backups de alta capacidade e arquivamento de longo prazo."
    },
    {
        id: "inf136",
        ano: "2018", banca: "IBADE", orgao: "IABAS", prova: "Geral", materia: "Informática",
        assunto: "Atalhos",
        enunciado: "No MS Windows 10, as teclas de atalho utilizadas para fechar um item ativo ou sair do aplicativo ativo são:",
        a: "F1", b: "ALT+TAB", c: "CTRL+V", d: "ALT+F4", e: "F6",
        correta: "d", comentario: "ALT+F4 é o atalho padrão do Windows para fechar a janela ou o aplicativo que está em foco no momento."
    },
    {
        id: "inf137",
        ano: "2018", banca: "IBADE", orgao: "CRMV-ES", prova: "Agente de Fiscalização", materia: "Informática",
        assunto: "Windows",
        enunciado: "O programa que controla o banco de dados do sistema que administra todas as configurações de aplicativos e do Windows é o:",
        a: "Bloco de Notas.", b: "Windows Explorer.", c: "Editor de Registros.", d: "Windows Defender.", e: "Desfragmentador de Disco.",
        correta: "c", comentario: "O Editor de Registro (regedit) permite visualizar e alterar as configurações na base de dados do sistema operacional."
    },
    {
        id: "inf138",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Cacoal - RO", prova: "Motorista", materia: "Informática",
        assunto: "Hardware",
        enunciado: "Para que um computador funcione, é indispensável que haja uma forma de receber comandos. Isso é feito através do uso de:",
        a: "impressoras.", b: "dispositivos de entrada.", c: "CPU.", d: "disquetes.", e: "dispositivos de saída.",
        correta: "b", comentario: "Dispositivos de entrada (como teclado e mouse) são os responsáveis por enviar dados e comandos do usuário para o computador."
    },
    {
        id: "inf139",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Cacoal - RO", prova: "Motorista", materia: "Informática",
        assunto: "Windows/Linux",
        enunciado: "Qual dos termos a seguir é um sinônimo para diretório no contexto de organização de arquivos?",
        a: "ícone", b: "Arquivo", c: "Tom", d: "Pasta", e: "Barra de tarefas",
        correta: "d", comentario: "Diretório é o termo técnico para o que chamamos popularmente de 'Pasta' nas interfaces gráficas."
    },
    {
        id: "inf140",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Cacoal - RO", prova: "Almoxarife", materia: "Informática",
        assunto: "Windows",
        enunciado: "Sobre a Lixeira do Windows, analise: I.Arquivos apagados ficam nela; II.É possível restaurar qualquer arquivo nela; III.Enviar para a lixeira aumenta o espaço livre; IV.Pode ser esvaziada pelo botão direito. Estão corretas:",
        a: "I, II e IV, apenas.", b: "I e II, apenas.", c: "I, II, III e lV.", d: "I, III e IV, apenas.", e: "I, II e III, apenas.",
        correta: "a", comentario: "A III está incorreta: enviar para a lixeira NÃO libera espaço; o espaço só é liberado quando a lixeira é esvaziada."
    },
    {
        id: "inf141",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Ji-Paraná - RO", prova: "Artesão", materia: "Informática",
        assunto: "Linux",
        enunciado: "Para mover arquivos em um computador com sistema operacional Linux, utilizando linha de comando, utiliza-se o comando:",
        a: "rm.", b: "mv.", c: "cmp.", d: "mkdir.", e: "rmoving.",
        correta: "b", comentario: "O comando 'mv' (move) é utilizado tanto para mover arquivos/diretórios quanto para renomeá-los."
    },
    {
        id: "inf142",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Ji-Paraná - RO", prova: "Artesão", materia: "Informática",
        assunto: "Windows",
        enunciado: "Sistema de arquivos do Windows que suporta nomes de volumes de 32 caracteres, compactação, criptografia e políticas de segurança complexas:",
        a: "NTFS.", b: "HPFS.", c: "FAT32.", d: "FAT16.", e: "EXT3.",
        correta: "a", comentario: "O NTFS (New Technology File System) é o sistema de arquivos padrão das versões modernas do Windows, oferecendo segurança e recursos avançados."
    },
    {
        id: "inf143",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Ji-Paraná - RO", prova: "Artesão", materia: "Informática",
        assunto: "Windows",
        enunciado: "Um caractere que é proibido de ser utilizado para nomear arquivos no MS Windows é:",
        a: "?", b: "~", c: "&", d: "$", e: "_",
        correta: "a", comentario: "Caracteres como \\ / : * ? \" < > | são proibidos em nomes de arquivos no Windows."
    },
    {
        id: "inf144",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Ji-Paraná - RO", prova: "Artesão", materia: "Informática",
        assunto: "Linux",
        enunciado: "No Linux, qual comando é utilizado para ver o nome do diretório (pasta) atual (Print Working Directory)?",
        a: "ls.", b: "mkdir.", c: "pwd.", d: "stat.", e: "quota.",
        correta: "c", comentario: "O comando 'pwd' exibe o caminho completo do diretório onde o usuário está trabalhando no momento."
    },
    {
        id: "inf145",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Cacoal - RO", prova: "Intérprete de Libras", materia: "Informática",
        assunto: "Windows",
        enunciado: "Para verificar quais processos estão consumindo recursos (CPU) e causando lentidão no Windows, o usuário deve:",
        a: "Abrir o gerenciador de tarefas.", b: "Realizar varredura com Windows Defender.", c: "Reiniciar o computador.", d: "Formatar o computador.", e: "Reinstalar o Windows.",
        correta: "a", comentario: "O Gerenciador de Tarefas (Ctrl+Shift+Esc) mostra em tempo real o uso de CPU, Memória e Disco por cada programa."
    },
    {
        id: "inf146",
        ano: "2018", banca: "IBADE", orgao: "IPM - JP", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Atalhos",
        enunciado: "No Windows 10, os atalhos para alternar entre programas abertos COM janela de diálogo e SEM janela de diálogo são, respectivamente:",
        a: "Alt + F3 e Alt + F4", b: "Ctrl + F4 e Ctrl + F3", c: "Alt + PgUp e Alt + PgDn", d: "Ctrl + Esc e Ctrl + Tab", e: "Alt + Tab e Alt + Esc",
        correta: "e", comentario: "Alt+Tab exibe uma miniatura das janelas; Alt+Esc alterna diretamente para a próxima janela na barra de tarefas."
    },
    {
        id: "inf147",
        ano: "2018", banca: "IBADE", orgao: "IPM - JP", prova: "Técnico em Informática", materia: "Informática",
        assunto: "Hardware",
        enunciado: "Interfaces USB nas versões 2.0 e 3.0 suportam velocidades máximas nominais, respectivamente, de:",
        a: "512 Mbps e 32 Gbps.", b: "480 Mbps e 4,8 Gbps.", c: "512 Mbps e 6,4 Gbps.", d: "480 Mbps e 10 Gbps.", e: "512 Mbps e 50 Gbps.",
        correta: "b", comentario: "USB 2.0 (High Speed) atinge 480 Mbps. O USB 3.0 (SuperSpeed) atinge nominalmente 4.8 ou 5 Gbps."
    },
    {
        id: "inf148",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Cujubim - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "S.O.",
        enunciado: "Uma das funções principais que um sistema operacional deve cumprir é o(a):",
        a: "eliminação de vírus.", b: "emulação de sinais analógicos.", c: "gerenciamento dos dispositivos de entrada e saída.", d: "configuração de conexões físicas.", e: "controle físico de estações.",
        correta: "c", comentario: "O S.O. atua como gerente de recursos, controlando a comunicação entre o software e o hardware (entrada/saída)."
    },
    {
        id: "inf149",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Cujubim - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Hardware",
        enunciado: "Qual dos dispositivos abaixo é classificado exclusivamente como um dispositivo de entrada de dados?",
        a: "monitor CGA.", b: "projetor de vídeo.", c: "teclado wifi.", d: "fone de ouvido.", e: "caixa de som.",
        correta: "c", comentario: "O teclado envia informações para o processador, sendo um periférico de entrada."
    },
    {
        id: "inf150",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Cujubim - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Windows",
        enunciado: "No MS Windows 10, o componente para reconhecimento facial, íris e digitais chama-se:",
        a: "Windows Hello.", b: "Windows Defender.", c: "BitLooker.", d: "Skydrive.", e: "Thunderbird.",
        correta: "a", comentario: "Windows Hello é a biometria nativa do Windows 10 para acesso rápido e seguro."
    },
    {
        id: "inf151",
        ano: "2018", banca: "IBADE", orgao: "Prefeitura de Cujubim - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Windows",
        enunciado: "A interface gráfica (GUI) introduzida com o Windows 7, famosa pela transparência nas janelas, é conhecida como:",
        a: "READYBOOST.", b: "AERO.", c: "BITDEFENDER.", d: "SOLARIS.", e: "AVG.",
        correta: "b", comentario: "A interface Aero Glass trazia efeitos visuais como transparência e o 'Aero Peek'."
    },
    {
        id: "inf152",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Porto Velho - RO", prova: "Técnico Legislativo", materia: "Informática",
        assunto: "Windows",
        enunciado: "Para corrigir o problema de arquivos espalhados em várias partes do HD e reagrupar os blocos, utiliza-se:",
        a: "Restauração do sistema.", b: "Back-up.", c: "Monitor de desempenho.", d: "Limpeza de disco", e: "Desfragmentador ao disco.",
        correta: "e", comentario: "O desfragmentador organiza os dados fragmentados para que o HD trabalhe de forma mais eficiente."
    },
    {
        id: "ro31_149",
        ano: "2018", banca: "IBADE", orgao: "CAERN", prova: "Técnico em Segurança do Trabalho", materia: "Informática",
        assunto: "Windows 10",
        enunciado: "No Windows 10 BR, qual atalho de teclado permite alternar entre aplicações abertas com o auxílio de uma janela de diálogo?",
        a: "Alt + Tab.", b: "Alt + F5.", c: "Ctrl + F5", d: "Alt + Shift", e: "Ctrl + Tab.",
        correta: "a", comentario: "O Alt + Tab é o recurso clássico para alternar entre janelas abertas exibindo uma lista visual (janela de diálogo) das aplicações."
    },
    {
        id: "ro31_150",
        ano: "2018", banca: "IBADE", orgao: "Câmara de Cacoal - RO", prova: "Agente Administrativo", materia: "Informática",
        assunto: "Windows",
        enunciado: "Com qual combinação de teclas o funcionário pode bloquear diretamente a área de trabalho do seu computador Windows ao se ausentar?",
        a: "Tecla do logotipo do Windows + L", b: "Tecla da logotipo do Windows + T", c: "Tecla da logotipo do Windows + B", d: "Tecla da logotipo do Windows + E", e: "Tecla da logotipo do Windows + F",
        correta: "a", comentario: "Win + L (Lock) bloqueia a sessão do usuário imediatamente, exigindo senha para retornar."
    }
];

