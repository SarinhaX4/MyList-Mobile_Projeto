# MyList

Aplicativo mobile desenvolvido em React Native + Expo, a partir de um protótipo Figma próprio. Atividade acadêmica da disciplina de Mobile, do curso de Engenharia de Software (UCB).

**Autora:** Sara Cristina Barros de Oliveira

## Status do projeto

Esta é a **primeira entrega**: apenas a parte superior do app (cabeçalho, campo de adicionar tarefa e contadores), sem funcionalidade — o foco foi estilização e estruturação dos componentes.

O protótipo no Figma já prevê as próximas etapas: lista de tarefas, estado vazio, adicionar e remover tarefas (com gesto de arrastar).

## Tecnologias e pacotes utilizados

- JavaScript (sem TypeScript)
- Expo
- React Native
- StyleSheet
- @expo/vector-icons

## Estrutura de pastas
mylist/
├── App.js
└── src/
├── theme.js # cores do app
└── components/
├── Header.js # ícone + "MyList"
├── Input.js # campo de texto
├── Button.js # botão de adicionar
└── Counter.js # "Criadas" / "Concluídas"


## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- App **Expo Go** instalado no celular
- Conta no [Expo](https://expo.dev/) criada

### Passo a passo

```bash
git clone https://github.com/SarinhaX4/mylist.git
cd mylist
npm install
npx expo login
npx expo start
```

Escaneie o QR code exibido no terminal com a câmera do celular (ou pelo app Expo Go).

> ⚠️ Celular e computador precisam estar na mesma rede Wi-Fi. Em redes diferentes, use `npx expo start --tunnel`.