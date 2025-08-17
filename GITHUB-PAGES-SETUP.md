# Configuração para GitHub Pages

## Passo a Passo para Publicar no GitHub Pages

### 1. Criar Repositório no GitHub
1. Acesse GitHub.com e faça login
2. Clique em "New repository" (botão verde)
3. Nome do repositório: `treinos-futsal-clone` (ou qualquer nome)
4. Marque "Public" 
5. Marque "Add a README file"
6. Clique "Create repository"

### 2. Upload dos Arquivos
**IMPORTANTE: Os arquivos devem estar na RAIZ do repositório**

1. No seu repositório, clique em "uploading an existing file"
2. Arraste TODOS os arquivos do ZIP:
   - `index.html` ← OBRIGATÓRIO na raiz
   - `style.css`
   - `script.js`
   - `image1.png`
   - `image2.png` 
   - `image3.png`
   - `README.md`

3. Escreva uma mensagem de commit: "Add website files"
4. Clique "Commit changes"

### 3. Ativar GitHub Pages
1. No seu repositório, vá em "Settings" (aba no topo)
2. Role para baixo até "Pages" (menu lateral esquerdo)
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" 
5. Em "Folder", deixe "/ (root)"
6. Clique "Save"

### 4. Aguardar Deploy
- GitHub Pages demora 5-10 minutos para processar
- Você verá uma URL como: `https://seuusuario.github.io/treinos-futsal-clone`
- Aguarde até aparecer um check verde

## Estrutura Correta dos Arquivos
```
seu-repositorio/
├── index.html          ← OBRIGATÓRIO na raiz
├── style.css
├── script.js
├── image1.png
├── image2.png
├── image3.png
└── README.md
```

## Possíveis Problemas e Soluções

### Erro: "does not contain the requested file"
- **Causa**: `index.html` não está na raiz do repositório
- **Solução**: Mover `index.html` para a pasta principal (não dentro de subpastas)

### Erro: Imagens não carregam
- **Causa**: Arquivos de imagem não foram enviados
- **Solução**: Verificar se `image1.png`, `image2.png`, `image3.png` estão no repositório

### Erro: CSS/JS não funciona
- **Causa**: Caminhos incorretos nos arquivos
- **Solução**: Verificar se `style.css` e `script.js` estão na mesma pasta que `index.html`

## Verificação Final
Após o deploy, seu site deve estar acessível em:
`https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`

## Alternativa Rápida
Se continuar com problemas, use o link que já funciona:
https://micvlpfn.manus.space

