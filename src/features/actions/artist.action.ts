import { prisma } from "@/lib/prisma";

export const addArtist = async (name: string) => {
  if (!name) throw new Error("name is undefined!");

  const res = await prisma.artist.create({
    data: {
      name,
    },
  });

  return res;
};

export const deleteArtist = async (artistId: string) => {
  if (!artistId) throw new Error("artistId is undefined!");

  const res = await prisma.artist.delete({
    where: {
      id: artistId,
    },
  });

  return res;
};

export const editArtist = async (
  artistId: string,
  { name }: { name?: string }
) => {
  if (!artistId) throw new Error("artistId is undefined!");

  if (name) {
    await prisma.artist.update({
      where: {
        id: artistId,
      },
      data: {
        name,
      },
    });
  }

  return {
    name,
  };
};
