export async function GET() {
  const securityTxt = `Contact: mailto:hello@jacobbyers.me
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: en
Canonical: https://www.jacobbyers.me/.well-known/security.txt
Policy: https://www.jacobbyers.me/.well-known/security.txt

# Thank you for helping keep my site secure!`

  return new Response(securityTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

