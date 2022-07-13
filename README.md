---
description: Easily create badges for .md files
---

# BadgeBuddy

![A badge right from BadgeBuddy!](https://badgebuddy.vercel.app/api/badge)

### Usage

In order to start using BadgeBuddy, simply make a `GET` request to our API endpoint: [`https://badgebuddy.vercel.app/api/badge`](https://badgebuddy.vercel.app/api/badge)

### Parameters

In order to customize the icon set, color, icon, text, badge size, padding, and more, you can use the following parameters:

| Parameter | Acceptable Values (\* denotes default)                                                    | Notes                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| set       | brands, solid\*, regular                                                                  | This alters the set of FontAwesome icons that are used. It's important to note only free icon sets are available to use. |
| icon      | certificate\*, react, coffee-bean, etc.                                                   | Head over to [FontAwesome](https://fontawesome.com/search) to search through all of our available icons.                 |
| text      | MaskBuddy\*, React, Your Name, etc.                                                       | This text can be anything you'd like. Remember to respect URL escaping. For example, a space character becomes `%20`.    |
| scheme    | dark\*, light, red, blue, green, yellow, orange, purple, pink, indigo, gray, black, white | Huge thanks to the team over at [Tailwind CSS](https://www.tailwindcss.com/) for their amazing color palette.            |
| rounded   | none, some, more, most\*                                                                  |                                                                                                                          |
| padding   | none, some\*, more, most                                                                  |                                                                                                                          |
| size      | small, medium\*, large                                                                    |                                                                                                                          |
| gap       | none, some\*, more, most                                                                  |                                                                                                                          |

For example, if I want a React badge that says React Native, is blue, with some rounding, more padding, at a medium size, and with some gap, you'd send this request:

`https://badgebuddy.vercel.app/api/badge?set=brands&icon=react&text=React%20Native&scheme=blue&rounded=some&padding=more`

![Result from the above request](https://badgebuddy.vercel.app/api/badge?set=brands\&icon=react\&text=React%20Native\&scheme=blue\&rounded=some\&padding=more)

### How It Works

BadgeBuddy is ultimately built on both [NextJS](https://nextjs.org/) and [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions). The server first receives a request from the client on the `/api/badge` route and forwards the query parameters through [Puppeteer](https://developer.chrome.com/docs/puppeteer/). Puppeteer renders the `/badge` route on a headless version of chromium, takes a screenshot, and returns the relevant image buffer to the client.

### Thanks

Huge thanks to the team over at [FontAwesome](https://fontawesome.com/) for providing all the amazing icons that BadgeBuddy uses. They're one of a kind!

### Contributing

If you'd like to contribute, please fork this repository, make your changes, and send a pull request. At the moment, this project is maintained by a student at Iowa State University.

[![https://github.com/ryanhaticus/badgebuddy/fork](https://badgebuddy.vercel.app/api/badge?icon=code-fork\&text=Fork%20BadgeBuddy)](https://github.com/ryanhaticus/badgebuddy/fork)
