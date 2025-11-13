import {
  Button,
  CloseButton,
  Drawer,
  Kbd,
  Portal,
  Text,
} from "@chakra-ui/react";
import AvatarImage from "../components/avatar-image";

const UserHomepage = () => {
  return (
    <div className="w-screen h-screen bg-neutral-800 text-white font-bold">
      <>
        <Text mb="4">Open drawer and resize screen to mobile size</Text>
        <Drawer.Root placement={{ mdDown: "bottom", md: "start" }}>
          <Drawer.Trigger asChild>
            <Button />
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Drawer Title</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  Press the <Kbd>esc</Kbd> key to close the drawer.
                </Drawer.Body>
                <Drawer.Footer>
                  <Drawer.ActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </Drawer.ActionTrigger>
                  <Button>Save</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </>
    </div>
  );
};

export default UserHomepage;
