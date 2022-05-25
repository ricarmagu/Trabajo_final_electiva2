import { apiVersion, basePath } from "./../api/config";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/signup`;
  /* http://localhost:3988/api/v1/signup  */
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params).then((Response) => {
    return Response.JSON();
  });
}
