export const userKeys = {
  all: ["allUsers"] as const,
  byId: (id: string) => ["user", id] as const,
  byToken:(jwt:string) =>['userByToken', jwt]as const 
};
