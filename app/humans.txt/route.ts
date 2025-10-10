export async function GET() {
  const humansTxt = `/* TEAM */
Developer: Jacob Byers
Site: https://www.jacobbyers.me
Location: United States

/* THANKS */
Thanks to everyone who has supported this project!

/* SITE */
Last update: ${new Date().toISOString().split('T')[0]}
Standards: HTML5, CSS3, JavaScript
Components: React, Next.js, Sanity CMS
Software: VS Code, Cursor
Hosting: Vercel`

  return new Response(humansTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

