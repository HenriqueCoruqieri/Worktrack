"use client";

import { Avatar } from "@chakra-ui/react";

const AvatarImage = () => {
  return (
    <Drawer.Trigger asChild>
      <Avatar.Root>
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
    </Drawer.Trigger>
  );
};

export default AvatarImage;
