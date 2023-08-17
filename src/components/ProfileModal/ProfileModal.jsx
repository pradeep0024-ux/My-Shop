import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ openModal, setOpenModal }) {
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
        <form action="" className="InfoForm">
          <h3>Update Profile</h3>
          <div>
            <input
              type="text"
              className="InfoInput"
              placeholder="First Name"
              name="firstname"
            />
            <input
              type="text"
              className="InfoInput"
              placeholder="Last Name"
              name="lastname"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              placeholder="Works At"
              name="workat"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              placeholder="Lives In"
              name="livesin"
            />{" "}
            <input
              type="text"
              className="InfoInput"
              placeholder="Country"
              name="country"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              placeholder="Relationship Status"
              name="relation"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>
          <button className="Button btn-signup">update</button>
        </form>
      </Modal>
    </>
  );
}
export default ProfileModal;
