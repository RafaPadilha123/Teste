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
 
- -----------------------------------------------------------------------------------
 
Diferença entre o teste unitario e o teste E2E

O objetivo dos testes unitários é garantir que cada parte individual da aplicação 
funcione conforme esperado sob diferentes condições. Eles ajudam a identificar 
problemas no nível mais granular, facilitando a detecção e correção de bugs. 

O objetivo dos testes E2E é garantir que a aplicação atenda aos requisitos 
funcionais, fornecendo uma experiência de usuário consistente 
e livre de defeitos. Eles ajudam a identificar problemas 
que podem ocorrer quando diferentes partes da aplicação interagem entre si.

Em resumo, enquanto os testes unitários focam em validar componentes
individuais da aplicação, os testes E2E visam garantir que a aplicação 
funcione corretamente como um todo, desde a perspectiva do usuário final.
