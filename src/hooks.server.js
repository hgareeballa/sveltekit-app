import { sequence } from "@sveltejs/kit/hooks";

export async function first({ event, resolve }) {
  // if (event.url.pathname.startsWith('/custom')) {
  //   return new Response('custom response');
  // }
  console.log("First Handel hooks");
  const response = await resolve(event);
  return response;
}

export async function second({ event, resolve }) {
  console.log("Second Handel hooks");
  //console.log("SEssion ", event.cookies.get("sessionid"));

  const response = await resolve(event);
  response.headers.set("x-custom-header", "potato");

  return response;
}

export const handle = sequence(first, second);
