This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```mermaid
graph LR
    A[User] -- login --> B[Authentication Service]
    A -- manage connections --> C[Connections Service]
    A -- send/receive messages --> D[Message Service]
    B -- user session --> E[(User DB)]
    C -- read/write connections --> E
    C -- read/write circles --> F[(Connections Circles DB)]
    D -- read/write messages --> G[(Message DB)]
    D -- read conversations --> H[(Conversations DB)]
```

```mermaid
erDiagram
    USERS {
        uuid id PK
        varchar name
        varchar avatar
    }
    CONNECTIONS_CIRCLES {
        varchar name PK
    }
    CONVERSATIONS {
        uuid id PK
        datetime createdAt
    }
    CONNECTIONS {
        uuid id PK
        uuid userId FK
        varchar name
        varchar circleName FK
        uuid conversationId FK
    }
    MESSAGES {
        uuid id PK
        uuid conversationId FK
        uuid senderId FK
        text text
        datetime timestamp
    }

    USERS ||--o{ CONNECTIONS : has
    CONNECTIONS_CIRCLES ||--o{ CONNECTIONS : belongs_to
    CONVERSATIONS ||--o{ CONNECTIONS : has
    CONNECTIONS ||--o{ MESSAGES : sends
    CONVERSATIONS ||--o{ MESSAGES : contains
```
