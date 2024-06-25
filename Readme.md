- Para instalar e utilizar a bibioteca Maestro:

    . Acessar a documentação 
    . Através do terminal executar o comando 'curl -Ls "https://get.maestro.mobile.dev" | bash' e proceder a instalação
    . Abrir a pasta do conteudo do projeto 
    . Abrir a pasta 'components'
    . Abrir a pasta 'tests'
    . Abrir o emulador usando o comando 'yarn android'
    . Fechar as janelas que estiverem abertas, para que os testes possam ser realizados 

    . No terminal executar o comando 'maestro test login_test.yaml'
    . Inspecionar a execução através do emulador 

- Roteiro de testes:

    - Execução do link da aplicação
    - Clique no campo login
    - Digitação do texto que valida o login
    - Clique no campo senha 
    - Digitação do texto que valida a senha
    - Clique no botão START (Autenticação)
    - Verificação da abertura do GaragePage

    - Clique no botão de menu
    - Clique no Cancelar

    - Clique no campo de pesquisa 
    - Digitação do texto "chevrolet"
    - Verificação da pesquisa com os dados repassados