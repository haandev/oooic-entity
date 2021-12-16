type typedResponse = Express.Response & {
  status: (statusCode: number) => typedResponse;
  sendStatus: (statusCode: number) => typedResponse;
  send: (responseBody: any) => typedResponse;
};
export type ExpressMiddleware<request = {}, response = {}> = (
  request: Express.Request & request,
  respoonse: typedResponse & response
) => any;
