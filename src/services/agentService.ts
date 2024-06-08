// "use server";
// import { Agent, PrismaClient } from "@prisma/client";
// import { md5 } from "js-md5";

// const prisma = new PrismaClient();

// export async function getAgentByMobile(mobile: string): Promise<Agent | null> {
//   try {
//     const agent = await prisma.agent.findFirst({
//       where: { mobile: mobile, actif: true },
//     });

//     return agent;
//   } catch (error) {
//     throw new Error(
//       "Le Numero n'est pas reconnu demander de l'aide a votre hierachie"
//     );
//   }
// }
// export async function getAgent(password: string) {
//   try {
//     const agent = await prisma.agent.findFirst({
//       where: { pwd: md5(password), actif: true },
//     });

//     return agent;
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//     throw new Error("Failed to fetch user.");
//   }
// }
// export async function getAgentByEmail(email: string) {
//   try {
//     const agent = await prisma.agent.findFirst({
//       where: { email: email, actif: true },
//     });

//     return agent;
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//   }
// }
// export async function getUserById(id: string) {
//   try {
//     const agent = await prisma.agent.findFirst({
//       where: { idagent: Number(id), actif: true },
//     });

//     return agent;
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//     throw new Error("Failed to fetch user.");
//   }
// }
// export async function getUserByPassword(password: string) {
//   try {
//     const agent = await prisma.agent.findFirst({
//       where: { pwd: password, actif: true },
//     });

//     return agent;
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//     throw new Error("Failed to fetch user.");
//   }
// }
// export async function getAllAgent() {
//   try {
//     const agents = await prisma.agent.findMany();

//     return agents;
//   } catch (error) {
//     console.error("Failed to fetch users:", error);
//     throw new Error("Failed to fetch users.");
//   }
// }
// export async function getAllAgentNumber() {
//   try {
//     const agents = await prisma.agent.count();

//     return agents;
//   } catch (error) {
//     console.error("Failed to fetch users:", error);
//     throw new Error("Failed to fetch users.");
//   }
// }
