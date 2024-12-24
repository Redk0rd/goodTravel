import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Stack,
  Button,
} from '@chakra-ui/react';
import { IoMdReturnLeft } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxHook';
import { setUser } from '../../../../redux/slices/user/userSlice';
import { updateUserThunk } from '../../../../redux/slices/user/userThunkActrion';

export default function UserEditModal(): JSX.Element {
  const editUser = useAppSelector((state) => state.user.editUser);
  const dispatch = useAppDispatch();

  const onClose = (): void => {
    dispatch(setUser(null));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!editUser) return;
    const { name } = Object.fromEntries(new FormData(e.currentTarget)) as { name: string };
    void dispatch(updateUserThunk({ ...editUser, name }));
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submitHandler}>
            <Stack spacing={3}>
              <Input defaultValue={editUser?.name} name="name" />
              <Button colorScheme="blue" type="submit">
                ok
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
