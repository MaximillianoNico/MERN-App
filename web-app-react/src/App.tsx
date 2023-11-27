import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Input,
  WrapItem,
  Avatar,
  Button
} from "@chakra-ui/react"
import useAction, { TABS, useForm } from "./action"

export const App = () => {
  const { limit, users, tab, onChangeLimit, onTabChange } = useAction();
  const { form, onChange } = useForm();

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" marginLeft="auto" marginRight="auto" maxW={600} marginTop={20}>
        <Box>
          {tab === TABS.LIST && (
            <Box>
              <Text fontSize={32}>Users</Text>
              <Box display="grid" gridTemplateColumns="60% 20% 20%" columnGap={30} marginTop={10}>
                <Box>
                  <Input placeholder='Search user' />
                </Box>
                <Box>
                  <Box display="grid" columnGap={4} gridTemplateColumns="auto auto" justifyContent="center" alignItems="center">
                    <Text fontSize={16}>Limit: </Text>
                    <Input value={limit} onChange={onChangeLimit} width={20} placeholder='' />
                  </Box>
                </Box>
                <Box>
                  <Button colorScheme='blue' onClick={() => onTabChange(TABS.FORM)}>Add</Button>
                </Box>
              </Box>
            </Box>
          )}
          {tab === TABS.FORM && (
            <Button marginBottom={10} colorScheme='blue' onClick={() => onTabChange(TABS.LIST)}>Back</Button>
          )}
        </Box>

        {tab === TABS.LIST && !!users?.length && (
          <Box
            marginTop={10}
            display="grid"
            columnGap={10}
            rowGap={10}
            gridTemplateColumns="auto auto"
          >
            {users?.map(
              ({ username, _id }) => (
                <WrapItem key={_id} columnGap={4} alignItems="center">
                  <Avatar name={username} src='https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png' />
                  <Text>{username}</Text>
                </WrapItem>
              )
            )}
          </Box>
        )}

        {tab === TABS.FORM && (
          <Box maxW="70%">
            <Text fontSize={32}> Contact Form</Text>

            <Box marginTop={4}>
              <Text fontSize={14} marginBottom={2}>Name</Text>
              <Input name="username" onChange={onChange} value={form?.username} />
            </Box>

            <Box marginTop={4}>
              <Text fontSize={14} marginBottom={2}>Email</Text>
              <Input name="email" onChange={onChange} value={form?.email} />
            </Box>

            <Box marginTop={4}>
              <Text fontSize={14} marginBottom={2}>Phone</Text>
              <Input name="phone" onChange={onChange} value={form?.phone} />
            </Box>

            <Button
              marginTop={10}
              colorScheme='blue'
              onClick={() => {}}
            >
              Submit
            </Button>
          </Box>
        )}
        
      </Box>
    </ChakraProvider>
  )
}
