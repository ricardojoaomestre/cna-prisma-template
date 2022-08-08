# Create NextJs App Template

This example features how to use [chakra-ui](https://github.com/chakra-ui/chakra-ui) as the component library within a Next.js app with TypeScript.

Next.js and chakra-ui have built-in TypeScript declarations, so we'll get autocompletion for their modules straight away.

We are connecting the Next.js `_app.js` with `chakra-ui`'s Provider and theme so the pages can have app-wide dark/light mode. We are also creating some components which shows the usage of `chakra-ui`'s style props.

## Prisma with Sqlite

This example also brings [prisma](https://www.prisma.io/) ORM configured to use SQLite database.

As an example it already brings a model defined in `prisma/schema.prisma`.

```prisma
model User {
  id        Int    @id @default(autoincrement())
  firstName String
  lastName  String
  email     String
  avatar    String @default("https://avatars.dicebear.com/api/bottts/user.svg")
}
```

## Formik

If your app will use forms this is the most popular open source form library for React. [Formik](https://formik.org/) comes with battle-tested solutions for input validation, formatting, masking, arrays, and error handling.
