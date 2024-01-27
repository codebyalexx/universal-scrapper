import { prisma } from "@/lib/prisma";

export const addSource = async (artistId: string, sourceName: string) => {
  if (!artistId) throw new Error("artistId is undefined!");
  if (!sourceName) throw new Error("sourceName is undefined!");

  const res = await prisma.artistSource.create({
    data: {
      artistId,
      sourceName,
    },
  });

  return res;
};

export const deleteSource = async (sourceId: string) => {
  if (!sourceId) throw new Error("artistId is undefined!");

  const res = await prisma.artistSource.delete({
    where: {
      id: sourceId,
    },
  });

  return res;
};

export const addSourceFile = async (
  sourceId: string,
  { path, type, status }: { path: string; type: string; status: number }
) => {
  if (!sourceId) throw new Error("sourceId is undefined!");
  if (!path) throw new Error("path is undefined!");
  if (!type) throw new Error("status is undefined!");
  if (!status) throw new Error("status is undefined!");

  const res = await prisma.sourceFile.create({
    data: {
      path,
      type,
      status,
    },
  });

  return res;
};

export const editSourceFile = async (
  sourceFileId: string,
  { path, type, status }: { path: string; type: string; status: number }
) => {
  if (!sourceFileId) throw new Error("sourceFileId is undefined!");
  if (!path) throw new Error("path is undefined!");
  if (!type) throw new Error("status is undefined!");
  if (!status) throw new Error("status is undefined!");

  const res = await prisma.sourceFile.update({
    where: {
      id: sourceFileId,
    },
    data: {
      path,
      type,
      status,
    },
  });

  return res;
};

export const deleteSourceFile = async (sourceFileId: string) => {
  if (!sourceFileId) throw new Error("sourceFileId is undefined!");

  const res = await prisma.sourceFile.delete({
    where: {
      id: sourceFileId,
    },
  });

  return res;
};
