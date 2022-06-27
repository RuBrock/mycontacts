## myContacts - Store Contacts
Projeto direcionado pelo curso JStack, criar uma aplicação NodeJS onde possa ser feito um CRUD completo de contatos.

---

### Instalação
Necessário possuir previamente o Docker instalado em sua máquina e executar os seguintes comandos para preparar o ambiente:

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

```bash
docker exec -it pg bash
```

E por fim, executar os comandos do arquivo com o Schema dentro de *src/database/schema.sql*



Utilize o gerenciador de pacotes de sua escolha (npm, yarn, etc.) e instale as dependências:

```bash
npm install
```

```bash
yarn install
```

### Uso
Execute o seguinte comando para lançar o projeto

```bash
npm dev
```

```bash
yarn dev
```
