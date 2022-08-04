# Example app with [chakra-ui](https://github.com/chakra-ui/chakra-ui) and TypeScript

This example features how to use [chakra-ui](https://github.com/chakra-ui/chakra-ui) as the component library within a Next.js app with TypeScript.

Next.js and chakra-ui have built-in TypeScript declarations, so we'll get autocompletion for their modules straight away.

We are connecting the Next.js `_app.js` with `chakra-ui`'s Provider and theme so the pages can have app-wide dark/light mode. We are also creating some components which shows the usage of `chakra-ui`'s style props.

## Prisma with Sqlite

This example is also ready to use prisma for db support.

```
npm i -D prisma
```

```
npx primsa init --datasource-provider sqlite
```

Then create a model in `prisma/schema.prisma`. This brings a simple `User` example.

```prisma
model User {
  id        Int    @id @default(autoincrement())
  firstName String
  lastName  String
  email     String
  avatar    String @default("https://avatars.dicebear.com/api/pixel-art-neutral/user.svg")
}
```

```
npx prisma migrate dev --name init
```