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
    }
];
