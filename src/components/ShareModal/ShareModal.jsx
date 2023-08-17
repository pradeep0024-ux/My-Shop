import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";
function ShareModal({ openModal, setOpenModal }) {
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        size="50%"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
       <PostShare/>
      </Modal>
    </>
  );
}
export default ShareModal;
