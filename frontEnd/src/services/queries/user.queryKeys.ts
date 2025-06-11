export const userKeys = {
  all: ["allUsers"] as const,
  byId: (id: string) => ["user", id] as const,
  byToken: ["userByToken"] as const,
};
